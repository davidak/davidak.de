.. date: 2013/06/16 18:06
.. type: text

Wörter sortieren und doppelte löschen in Perl
=============================================

Beschreibung
------------

Wirre Datenmengen als geordnete Liste in Textdate schreiben, zudem noch alphabetisch sortiert und ohne doppelte Einträge.

Source Code
-----------

.. code-block:: perl
    :number-lines:

    #!/usr/bin/perl -w
    # GPLv3
    # David Kleuker

    open (DATEI, ">output.txt");

    @data = qw (

    Apfel        Fruchtfleisch
    Haus Apfel
    Kabel     Theater
    Baum
    Apfel          Baum

    );

    #Dublikate löschen
    %hash = map{$_,1}@data;
    @data = keys %hash;

    # Alphabetisch sortieren
    @data = sort { $a cmp $b } @data;

    # In Textdatei schreiben
    foreach (@data){
        print DATEI $_ . "\n";
    }
    close (DATEI);

Ausgabe
-------

::

    Apfel
    Baum
    Fruchtfleisch
    Haus
    Kabel
    Theater
