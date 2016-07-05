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

	nix-collect-garbage -d
	[...]
	deleting ‘/nix/store/trash’
	deleting unused links...
	note: currently hard linking saves 102.96 MiB
	9560 store paths deleted, 7965.67 MiB freed
