.. title: Installation von debian 7 per debootstrap
.. date: 2013/06/16 19:55
.. type: text

Quelle: http://www.debian.org/releases/stable/i386/apds03.html.de

booten mit `grml <http://grml.org/>`_ live-CD 32 oder 64-bit, je nach System

::

    isolinux konsole:
    grml lang=de ssh=qwertz
    d
    n
    q

    ssh auf die vm


    fdisk -l

    cfdisk /dev/vda

    250 MB bootable

    Rest LVM (8E)

    pvcreate /dev/vda2
    vgcreate vg0 /dev/vda2
    lvcreate -L 4G -n lvswap vg0
    lvcreate -l 100%FREE -n lvroot vg0

    mkfs.ext4 /dev/vda1
    mkswap /dev/mapper/vg0-lvswap
    mkfs.ext4 /dev/mapper/vg0-lvroot
    swapon /dev/mapper/vg0-lvswap


    # show lvm logical volumes
    lvscan

    mount /dev/mapper/vg0-lvroot /mnt
    mkdir /mnt/boot
    mount /dev/vda1 /mnt/boot
    cd /mnt

    debootstrap --variant=minbase --arch i386 wheezy /mnt http://ftp.de.debian.org/debian

    mount -o bind /dev /mnt/dev
    mount -t sysfs /sys /mnt/sys
    mount -t proc /proc /mnt/proc
    cp /proc/mounts /mnt/etc/mtab

    LANG=de_DE.utf8 chroot /mnt /bin/bash

    apt-get install makedev aptitude apt-utils vim dialog
    cd /dev
    MAKEDEV generic

    vim /etc/fstab

    # /etc/fstab: static file system information.
    #
    # file system    mount point   type    options                  dump  pass
    /dev/vg0/lvroot  /             ext4    defaults                 0     1
    /dev/vda1        /boot         ext4    ro,nosuid,nodev          0     2

    /dev/vg0/lvswap  none          swap    sw                       0     0
    proc             /proc         proc    defaults                 0     0

    vim /etc/adjtime

    0.0 0 0.0
    0
    UTC

    dpkg-reconfigure tzdata

    vim /etc/network/interfaces

    auto lo
    iface lo inet loopback

    auto eth0
    iface eth0 inet static
            address   10.0.0.6
            network   10.0.0.0
            netmask   255.0.0.0
            broadcast 10.255.255.255
            gateway   10.0.0.1

    # meist automatisch schon richtig
    vim /etc/resolv.conf

    search lan
    nameserver 10.0.0.1

    echo game > /etc/hostname

    vim /etc/hosts

    127.0.0.1       localhost
    127.0.0.1       game

    vim /etc/apt/sources.list

     # Standard Debian Mirrors
    deb http://ftp.de.debian.org/debian wheezy main contrib
    deb-src http://ftp.de.debian.org/debian wheezy main contrib

    deb http://security.debian.org/ wheezy/updates main contrib
    deb-src http://security.debian.org/ wheezy/updates main contrib

    aptitude update

    aptitude install locales
    dpkg-reconfigure locales

    aptitude install console-setup
    dpkg-reconfigure keyboard-configuration

    aptitude search linux-image
    aptitude install linux-image-amd64

    aptitude install grub-pc
    grub-install /dev/vda
    update-grub

    aptitude install lvm2 acpi-support-base man-db ssh less iputils-ping ntpdate pwgen rsync unzip htop host net-tools lshw curl screen bzip2

    passwd

    aptitude clean

rebooten ins neue System, CD auswerfen nicht vergessen
