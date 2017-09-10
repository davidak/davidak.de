.. title: ZERORANDOM
.. date: 2013-06-16 18:06
.. type: text

Ein Experiment zum Thema **Zufall**.

Beschreibung
------------

These
~~~~~

Wenn man eine Variable hat und abwechselnd Zufallszahlen addiert und subtrahiert bricht der Wert **nicht** in die positive oder negative Richtung aus, sondern verläuft ähnlich einem Rauschsignal um 0.

Der Durchschnitt von positiven und negativen Zufallswerten ist Null (in einer unbestimmten Zeit).

Durchführung
~~~~~~~~~~~~

Ich habe ein Script in Perl geschrieben, mit dessen Hilfe sich Datensätze erzeugen lassen.

Es gibt 2 Modi, dadurch kann man bestimmen ob eine Datei geschrieben wird, oder nicht. Dies geschieht durch die Variable :code:`$write_file`, welche den Wert 0 oder 1 haben kann.

Ich habe 10 Dateien mit je 100.000 Datensätzen erzeugt und diese mit dem Programm **Grapher.app** (Standardmässig in Mac OS X auf jedem Macintosh enthalten) importiert. Das Programm kann im Gegensatz zu Microsoft Excel mehr als 65536 Zeilen verwalten und ist sehr intuitiv zu bedienen.

Die Dateien heissen :code:`rdata_01.txt` bis :code:`rdata_10.txt` als Spalten-Trennzeichen dient ":" und für die Zeilen ";" .

Die ersten 100 Datensätze aus :code:`rdata_01.txt`::

    0:0;1:-6;2:-70;3:-125;4:-120;5:-98;6:-114;7:-169;8:-211;9:-160;10:-193;11:-228;12:-159;13:-175;14:-213;15:-160;16:-109;17:-135;18:-72;19:-85;20:-97;21:-82;22:-20;23:-9;24:-2;25:32;26:26;27:34;28:27;29:21;30:33;31:0;32:-20;33:17;34:-2;35:-37;36:-78;37:-89;38:-25;39:-24;40:-46;41:-47;42:-18;43:14;44:-9;45:63;46:36;47:-4;48:-91;49:-47;50:-70;51:-104;52:-74;53:-106;54:-196;55:-216;56:-229;57:-223;58:-230;59:-220;60:-235;61:-237;62:-232;63:-230;64:-273;65:-240;66:-223;67:-208;68:-168;69:-184;70:-247;71:-225;72:-210;73:-196;74:-216;75:-237;76:-167;77:-227;78:-239;79:-268;80:-234;81:-229;82:-233;83:-191;84:-162;85:-148;86:-173;87:-166;88:-166;89:-87;90:-125;91:-66;92:-65;93:-22;94:-53;95:-69;96:-90;97:-103;98:-152;99:-171;100:-172;

Beobachtung
~~~~~~~~~~~

Hier sieht man die Diagramme, die aus den Daten erzeugt worden sind.

Der Wert schwankt stark und auch bei jedem mal anders.

Hingegen meiner Vermutung gibt es eine eher positive oder negative Tendenz bei jedem Diagramm.

Der Verlauf aus Versuch Nr. 9 zeigen ein Verhalten wie ich es erwartet hätte, allerdings im positiven Bereich und nicht um die Nulllinie.

rdata_01
^^^^^^^^^

.. thumbnail:: /images/rdata_01.png

rdata_02
^^^^^^^^^

.. thumbnail:: /images/rdata_02.png

rdata_03
^^^^^^^^^

.. thumbnail:: /images/rdata_03.png

rdata_04
^^^^^^^^^

.. thumbnail:: /images/rdata_04.png

rdata_05
^^^^^^^^^

.. thumbnail:: /images/rdata_05.png

rdata_06
^^^^^^^^^

.. thumbnail:: /images/rdata_06.png

rdata_07
^^^^^^^^^

.. thumbnail:: /images/rdata_07.png

rdata_08
^^^^^^^^^

.. thumbnail:: /images/rdata_08.png

rdata_09
^^^^^^^^^

.. thumbnail:: /images/rdata_09.png

rdata_10
^^^^^^^^^

.. thumbnail:: /images/rdata_10.png

Ergebnis
~~~~~~~~

Die These konnte **nicht** belegt werden.

Der Zufall, der sich in Perl mit der Funktion :code:`rand();` erzeugen lässt, erwies nicht das erwartete Verhalten.

Screenshot
----------

Perl Script unter Mac OS X
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. thumbnail:: /images/perl_zerorandom_script_macintosh.png

Perl Script unter Windows XP
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. thumbnail:: /images/perl_zerorandom_script_windows.png

Source Code
-----------

Grundlage
~~~~~~~~~

.. code-block:: perl

    #!/usr/bin/perl -w

    $int = '0';

    for ($i = 1; $i < 1000; $i++) {

        $int += rand (100);
        $int -= rand (100);

        printf ("%d\n", $int);
    }

zerorandom.pl
~~~~~~~~~~~~~

.. code-block:: perl
    :number-lines:

    #!/usr/bin/perl -w
    #
    # ZERORANDOM
    $version = '1.4';
    #
    # (c) 2009 David Kleuker
    # http://davidak.de/
    #

    $int = '0';
    $min = '0';
    $max = '0';
    $count = '100000'; #Anzahl der Datensätze
    $counter = '0';
    $write_file = '1'; # Datei schreiben? (0/1)

    # Datei schreiben
    if ($write_file == 1) {
    open (RDATA, ">rdata.txt");
    }

    while ($counter < $count) {

    if ($write_file == 1) { printf RDATA ("$counter:%d;", $int); } # Daten in Datei schreiben

    if ($write_file == 0) {
    system(($^O eq 'MSWin32') ? 'cls' : 'clear'); #clear screen win + unix
    print "DATA: $counter\n\n";
    printf ("INT: %d\n\n", $int);
    }

    # Min und Max definieren
    if ($int > $max) { $max = $int; }
    if ($int < $min) { $min = $int; }

    # Zufallszahl generieren
    $int += rand (100);
    $int -= rand (100);

    $counter++;
    }

    #Statistik am Ende
    system(($^O eq 'MSWin32') ? 'cls' : 'clear'); #clear screen win + unix
    print "\nZERORANDOM Version $version by davidak\n\n";
    print "DATA: $counter\n\n";
    printf ("MIN: %d\n", $min);
    printf ("MAX: %d\n\n", $max);

    print "Datei wurde ";
    if ($write_file == 0) { print "nicht "; }
    print "geschrieben\n\n";
