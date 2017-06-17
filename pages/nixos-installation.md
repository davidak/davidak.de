<!--
.. title: NixOS Installation
.. slug: nixos-installation
.. date: 2016-07-12 22:29:00
.. tags: NixOS,Linux
.. description:
.. type: text
-->

# Installationsmedium erstellen

Lade das neuste minimal ISO-Image von [nixos.org](http://nixos.org/nixos/download.html) herunter. Erstelle z.B. mit `dd` einen bootbaren USB-Stick wie [hier](http://nixos.org/nixos/manual/index.html#sec-booting-from-usb) beschrieben oder brenne es auf eine CD. Starte die Live-CD auf dem Rechner, auf dem du NixOS installieren möchtest.

# WLAN einrichten (optional)

Es wird eine Internet-Verbindung benötigt. Die restliche Konfiguration (IP-Adresse, DNS-Server und Gateway) wird automatisch über DHCP geholt.

    nano /etc/wpa_supplicant.conf

    network={
      ssid="mynetwork"
      psk="mysecretpassphrase"
    }

    systemctl restart wpa_supplicant.service

# Zugriff per SSH (optional)

Wenn du die Installation von einem anderen Rechner durchführen möchtest, auf dem du z.B. diese Anleitung offen hast, kannst du dich per SSH verbinden.

Dafür muss erstmal der SSH-Server gestartet werden:

    systemctl start sshd.service

Damit du dich einloggen kannst braucht der Benutzer root ein Passwort. Beachte, dass die Live-CD ein englisches Tastatur-Layout hat.

    passwd

Jetzt noch die IP herausfinden und per SSH verbinden:

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

## Mit LVM

Wenn du NixOS in einer VM installierst macht es Sinn LVM zu verwenden, da du damit z.B. Partitionen (zur Laufzeit) vergrößern kannst.

Eine primäre Partition mit dem gesamten Speicherplatz erstellen:

    fdisk /dev/vda
    n
    p
    <ENTER>
    <ENTER>
    <ENTER>
    t
    8e
    p
    w

Falls du lieber `cfdisk` benutzt, kannst du es installieren mit:

    nix-env -iA nixos.utillinuxCurses

Dann Volumes für Swap (1 GB) und / (Rest) erstellen und Dateisystem (ext4) formatieren.

    pvcreate /dev/vda1
    vgcreate vg0 /dev/vda1
    lvcreate -L 1G -n lvswap vg0
    lvcreate -l 100%FREE -n lvroot vg0
    mkswap -L swap /dev/mapper/vg0-lvswap
    swapon /dev/mapper/vg0-lvswap
    mkfs.ext4 -L nixos /dev/mapper/vg0-lvroot

## Ohne LVM

Installierst du NixOS auf Hardware kannst du dir diese Abstraktionsschicht sparen.

Für ein Desktop-System macht es Sinn 4 GB Swap zu verwenden.

Eine Partition für Swap (1 GB) und eine für / (Rest) erstellen:

    fdisk /dev/sda
    n
    p
    <ENTER>
    <ENTER>
    +1G
    t
    82
    n
    p
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

Es ist trotzdem nötig, die Konfiguration im vorherigen Schritt zu erzeugen, da auch für die Hardware eine passende Konfiguration erzeugt wird unter `/mnt/etc/nixos/hardware-configuration.nix`.

# NixOS installieren

    nix-channel --update
    nixos-install
    reboot

Falls es während der Installation einen Fehler gibt, weil z.B. die Festplatte, auf der der Bootloader installiert werden soll nicht richtig angegeben ist, kannst du ihn einfach in der Konfiguration beheben und `nixos-install` erneut ausführen.

Am Ende der Installation wirst du nach dem Passwort für den Benutzer root gefragt. Wenn du nicht per SSH verbunden bist ist hier weiterhin das englische Tastatur-Layout zu beachten.

Nach dem Neustart des Systems kannst du die Konfiguration erweitern, um die gewünschten Services laufen zu lassen.

Die Konfiguration meiner NixOS-Rechner (meist Server) findest du [auf Github](https://github.com/davidak/nixos-config).

# Quellen

- <http://nixos.org/nixos/manual/index.html#sec-installation>
- <http://bencane.com/2011/12/19/creating-a-new-filesystem-with-fdisk-lvm-and-mkfs/>
