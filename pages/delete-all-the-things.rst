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

	[root@X230:~]# nix-collect-garbage -d
	...
	deleting '/nix/store/trash'
	deleting unused links...
	note: currently hard linking saves 1977.80 MiB
	23427 store paths deleted, 19590.66 MiB freed

Nix-Store optimieren, in dem identische Dateien durch Hardlinks ersetzt werden::

	[root@X230:~]# nix optimise-store
	[36327 paths optimised, 10924.6 MiB / 962109 inodes freed]
