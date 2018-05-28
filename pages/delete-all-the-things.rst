.. title: Delete all the things
.. slug: delete-all-the-things
.. date: 2016-03-03 04:54:50 UTC+01:00
.. tags:
.. description:
.. type: text

Ich liebe es nach dem Aufräumen des Rechners viele Dateien aus dem Papierkorb zu löschen.

.. image:: /images/delete-all-the-things.jpg

Mac OS X
--------

.. image:: /images/mac-os-x-papierkorb-leeren.png
	:alt: Papierkorb mit 2549784 Dateien leeren auf Mac OS X 10.10.5 Yosemite

NixOS
-----

Alte Pakete und Konfigurationen löschen::

	[root@X230:~]# nix-env --delete-generations old
	removing generation 1
	removing generation 2
	removing generation 3
	...

	[root@X230:~]# nix-collect-garbage -d
	...
	deleting '/nix/store/trash'
	deleting unused links...
	note: currently hard linking saves 194.23 MiB
	60548 store paths deleted, 72496.71 MiB freed

Nix-Store optimieren, in dem identische Dateien durch Hardlinks ersetzt werden::

	[root@X230:~]# nix optimise-store
	[15151 paths optimised, 2045.9 MiB / 172840 inodes freed]

systemd journal
---------------

Alle Einträge außer die der letzten 2 Tage aus dem Journal löschen::

	[root@X230:~]# journalctl --vacuum-time=2d
	...
	Vacuuming done, freed 3.6G of archived journals from /var/log/journal/b8781c43275e4719a76ba46fb15b92cb.
