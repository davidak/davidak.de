<!--
.. title: NixOS Installation
.. slug: nixos-installation
.. date: 2016-07-12 22:29:00
.. tags: NixOS,Linux
.. description:
.. type: text
-->

# WLAN einrichten (optional)

Es wird eine Internet-Verbindung benötigt.

    nano /etc/wpa_supplicant.conf

    network={
      ssid="mynetwork"
      psk="mysecretpassphrase"
    }

    systemctl restart wpa_supplicant.service

# Festplatte Partitionieren

Eine primäre Partition mit dem gesamten Speicherplatz.

    fdisk /dev/vda
    n
    p
    <ENTER>
    <ENTER>
    <ENTER>
    p
    w

Falls du lieber `cfdisk` benutzt, kannst du es installieren mit:

    nix-env -iA nixos.utillinuxCurses

# LVM einrichten und Dateisystem formatieren

1 GB SWAP, der Rest für das root-Dateisystem (ext4).

    pvcreate /dev/vda1
    vgcreate vg0 /dev/vda1
    lvcreate -L 1G -n lvswap vg0
    lvcreate -l 100%FREE -n lvroot vg0
    mkswap -L swap /dev/mapper/vg0-lvswap
    swapon /dev/mapper/vg0-lvswap
    mkfs.ext4 -L nixos /dev/mapper/vg0-lvroot

# Partition mounten und Konfiguration erzeugen

    mount /dev/disk/by-label/nixos /mnt
    nixos-generate-config --root /mnt

# Konfiguration anpassen

Entweder du bearbeitest die Konfiguration per Hand

    nano /mnt/etc/nixos/configuration.nix

oder kopierst eine vorbereitete. Meine findest du [hier](https://github.com/davidak/nixos-config/tree/master/default).

Dafür starte ich einen minimalen Webserver im Verzeichnis, in dem sich meine `configuration.nix` befindet:

    imac:default davidak$ python -m SimpleHTTPServer 8082

Auf dem NixOS lösche ich dann die automatisch erzeugte Konfiguration und lade meine runter.

    cd /mnt/etc/nixos/
    rm configuration.nix
    curl -O http://10.0.0.8:8082/configuration.nix

Es ist trotzdem nötig, die Konfiguration im vorherigen Schritt zu erzeugen, da auch für die Hardware eine passende Konfiguration erzeugt wird unter `/mnt/etc/nixos/hardware-configuration.nix`.

# NixOS installieren

    nixos-install
    reboot
