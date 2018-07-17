<!--
.. title: NixOS Installation
.. slug: nixos-installation
.. date: 2016-07-12 22:29:00
.. tags: NixOS,Linux
.. description:
.. type: text
-->

# Installationsmedium erstellen

Lade das neuste minimal ISO-Image von [nixos.org](http://nixos.org/nixos/download.html) runter. Erstelle z.B. mit `dd` einen bootbaren USB-Stick wie [hier](http://nixos.org/nixos/manual/index.html#sec-booting-from-usb) beschrieben oder brenne es auf eine CD. Starte die Live-CD auf dem Computer, auf dem du NixOS installieren möchtest.

# Tastaturlayout umstellen

Mit diesem Befehl wird das deutsche Tastaturlayout aktiviert:

    loadkeys de

# WLAN einrichten (optional)

Es wird eine Internetverbindung benötigt, um Pakete runterzuladen. Du kannst den Computer per LAN-Kabel anschließen oder wie folgt WLAN einrichten.

    nano /etc/wpa_supplicant.conf

    network={
      ssid="mynetwork"
      psk="mysecretpassphrase"
    }

    systemctl restart wpa_supplicant.service

Die restliche Konfiguration (IP-Adresse, DNS-Server und Gateway) wird automatisch über DHCP geholt.

# Zugriff per SSH (optional)

Wenn du die Installation von einem anderen Computer durchführen möchtest, auf dem du z.B. diese Anleitung offen hast, kannst du dich per SSH verbinden.

Dafür muss erstmal der SSH-Server gestartet werden:

    systemctl start sshd

Damit du dich einloggen kannst braucht der Benutzer root ein Passwort. Beachte, dass die Live-CD ein englisches Tastatur-Layout hat.

    passwd

Jetzt noch die IP herausfinden und mit einem Terminal per SSH verbinden:

    [root@nixos:~]# ip a
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
        inet6 ::1/128 scope host
           valid_lft forever preferred_lft forever
    2: enp5s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
        link/ether d0:50:99:c0:60:b5 brd ff:ff:ff:ff:ff:ff
        inet 10.0.2.95/8 brd 10.255.255.255 scope global enp5s0
           valid_lft forever preferred_lft forever
        inet6 fe80::d250:99ff:fec0:60b5/64 scope link
           valid_lft forever preferred_lft forever

    imac:~ davidak$ ssh root@10.0.2.95

# Festplatte partitionieren und Dateisystem erstellen

## Mit LVM und verschlüsseltem Dateisystem

Bei mobilen Geräten, wie Notebooks, ist es wichtig die persönlichen Daten zu verschlüsseln. LVM ermöglicht das Vergrößern von Partitionen, wodurch du dein System z.B. auf eine größere Festplatte umziehen kannst.

Eine 500 MB Partition für /boot und den Rest für LVM.

    fdisk /dev/sda
    n
    <ENTER>
    <ENTER>
    <ENTER>
    +500M
    n
    <ENTER>
    <ENTER>
    <ENTER>
    <ENTER>
    t
    <ENTER>
    8e
    p
    w

Verschlüsselte Partition mit LUKS erstellen.

    cryptsetup luksFormat /dev/sda2
    cryptsetup luksOpen /dev/sda2 enc-pv

Nun werden 2 logical Volumes mit LVM erstellt. 8 GB SWAP und Rest für das root Dateisystem.

    pvcreate /dev/mapper/enc-pv
    vgcreate vg0 /dev/mapper/enc-pv
    lvcreate -L 8G -n swap vg0
    lvcreate -l '100%FREE' -n root vg0

Dateisystem auf Partitionen formatieren.

    mkfs.ext4 -L boot /dev/sda1
    mkfs.ext4 -L nixos /dev/mapper/vg0-root
    mkswap -L swap /dev/mapper/vg0-swap

Partitionen mounten:

    mount /dev/disk/by-label/nixos /mnt
    mkdir /mnt/boot
    mount /dev/disk/by-label/boot /mnt/boot
    swapon /dev/disk/by-label/swap

## Mit LVM

Wenn du NixOS in einer VM installierst macht es Sinn [LVM](https://de.wikipedia.org/wiki/Logical_Volume_Manager) zu verwenden, da du damit z.B. Partitionen (zur Laufzeit) vergrößern kannst.

Eine primäre Partition mit dem gesamten Speicherplatz erstellen:

    fdisk /dev/sda
    n
    <ENTER>
    <ENTER>
    <ENTER>
    <ENTER>
    t
    <ENTER>
    8e
    p
    w

Falls du lieber `cfdisk` benutzt, kannst du es installieren mit:

    nix-env -iA nixos.utillinuxCurses

Dann Volumes für Swap (1 GB) und / (Rest) erstellen und Dateisystem (ext4) formatieren.

    pvcreate /dev/sda1
    vgcreate vg0 /dev/sda1
    lvcreate -L 1G -n lvswap vg0
    lvcreate -l 100%FREE -n lvroot vg0
    mkswap -L swap /dev/mapper/vg0-lvswap
    swapon /dev/disk/by-label/swap
    mkfs.ext4 -L nixos /dev/mapper/vg0-lvroot

## Ohne LVM

Installierst du NixOS auf Hardware kannst du dir diese Abstraktionsschicht sparen.

Für ein Desktop-System macht es Sinn 4 GB Swap zu verwenden.

Eine Partition für Swap (1 GB) und eine für / (Rest) erstellen:

    fdisk /dev/sda
    n
    <ENTER>
    <ENTER>
    <ENTER>
    +1G
    t
    <ENTER>
    82
    n
    <ENTER>
    <ENTER>
    <ENTER>
    <ENTER>
    p
    w

Dann Dateisysteme formatieren:

    mkswap -L swap /dev/sda1
    swapon /dev/disk/by-label/swap
    mkfs.ext4 -L nixos /dev/sda2

# Partition mounten und Konfiguration erzeugen

    mount /dev/disk/by-label/nixos /mnt
    nixos-generate-config --root /mnt

# Konfiguration anpassen

Entweder du bearbeitest die Konfiguration per Hand

    nano /mnt/etc/nixos/configuration.nix

oder lädst eine Vorbereitete runter:

    cd /mnt/etc/nixos/
    rm configuration.nix
    curl -O https://raw.githubusercontent.com/davidak/nixos-config/master/minimal/configuration.nix

Es ist trotzdem nötig die Konfiguration im vorherigen Schritt zu erzeugen, da auch die Hardware-Konfiguration erzeugt wird unter `/mnt/etc/nixos/hardware-configuration.nix`.

Du musst in jedem Fall die Festplatte angeben, auf der sich das Dateisystem `/` (das `/boot` enthält) befindet, damit der Bootmanager GRUB darauf installiert werden kann.

    boot.loader.grub.device = "/dev/sda";

Bei einem verschlüsselten Dateisystem ist auch dieser Block nötig:

    boot.initrd.luks.devices = [
      {
        name = "root";
        device = "/dev/disk/by-uuid/06e7d974-9549-4be1-8ef2-f013efad727e";
        preLVM = true;
        allowDiscards = true;
      }
    ];

Die UUID der Partition bekommst du mit `blkid /dev/sda2`.

Mir ist es auch wichtig nach der Installation ein deutsches Tastaturlayout (QWERTZ) zu haben.

    i18n = {
      consoleFont = "Lat2-Terminus16";
      consoleKeyMap = "de";
      defaultLocale = "en_US.UTF-8";
    };

Die [Locales](https://de.wikipedia.org/wiki/Locale) lasse ich auf englisch, da es bei der Suche nach Fehlermeldungen im Internet auf englisch mehr Ergebnisse gibt.

Die Zeitzone stelle ich meinem Standort entsprechend ein, damit die Uhrzeit stimmt.

    time.timeZone = "Europe/Berlin";

Um mich nach der Installation per SSH verbinden zu können aktiviere ich den SSH-Server und erlaube Login als root.

    services.openssh = {
      enable = true;
      permitRootLogin = "yes";
    };

# NixOS installieren

    nixos-install
    reboot

Eventuell vorhandene Syntax-Fehler in der Konfigurationsdatei werden angezeigt. Nachdem du sie behoben hast einfach erneut `nixos-install` ausführen. Am Ende der Installation musst du das Passwort für den Benutzer root eingeben.

Nach dem Neustart des Systems kannst du die Konfigurationsdatei erweitern, um die gewünschten Services laufen zu lassen. Eine Übersicht aller Optionen findest auf auf der [NixOS Webseite](https://nixos.org/nixos/options.html). Die Konfiguration meiner NixOS-Systeme findest du auf [Github](https://github.com/davidak/nixos-config).

# Quellen

- <http://nixos.org/nixos/manual/index.html#sec-installation>
- <http://bencane.com/2011/12/19/creating-a-new-filesystem-with-fdisk-lvm-and-mkfs/>
- <https://gist.github.com/martijnvermaat/76f2e24d0239470dd71050358b4d5134>
