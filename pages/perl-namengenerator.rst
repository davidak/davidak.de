.. title: Namengenerator in Perl
.. date: 2013/06/16 18:06
.. type: text

Beschreibung
------------

Es werden beliebig viele Namen generiert, diese bestehen aus Vor- und Nachnamen.

Es sind 521 männliche und 614 weibliche Vornamen sowie 6851 Nachnamen als Datensätze enthalten.

Diese Datensätze enthalten in Deutschland gebräuchliche Namen.

Beispiel
--------

100 Namen

::

    Luna Marin
    Nikola Fruth
    Christine Schönherr
    Ekkehard Loock
    Miguel Laskowski
    Oscar Diederich
    Siegrid Knoche
    Achmet Bremer
    Willy Hoff
    Dustin Rahner
    Nikolas Veit
    Brigitte Schaeuble
    Carmen Ebner
    José Dengel
    Gesa Mattern
    Hans Knauf
    Lukas Wehle
    Thorben Wegert
    Janina Kloß
    Ibrahim Elbert
    Adrian Schlömer
    Marike Langkau
    Thorben Dehler
    Simon Schuerer
    Claus Meusel
    Alissa Geissinger
    Robin Knigge
    Lenya Hillebrand
    Ilse Stelzer
    Hanna Angerer
    Joel Stark
    Filiz Senger
    Torben Laske
    Bernhard Backe
    Maya Boecker
    Colin Roßbach
    Kjell Paulsen
    Margrit Muhs
    Julian Stricker
    Gaby Rueb
    Burkhard Debus
    Bert Hinrichsen
    Emmely Henderson
    Alice Koehnlein
    Gunter Renner
    Kordula Meisner
    Dominik Boskan
    Beata Kalweit
    Mariam Brinkmann
    Silvia Pelka
    Barbara Schwartz
    Andy Schur
    Julius Knoll
    Olaf Schoeler
    Knut Bamberger
    Moritz Moosmann
    Sieglinde Patricia
    Sven Hill
    Jill Zinner
    Nelli Krawczyk
    Merlin Zimmerer
    Roland Meister
    Ole Peisker
    Charlotte Groh
    Ursula Burow
    Josephine Frei
    Tobias Draheim
    Gunter Hamacher
    Oscar Dilger
    Sandro Demski
    Carlos Stern
    Kathi Kotzev
    Lilli Dieckmann
    Valerie Kossmann
    Gunter Henschel
    Roman Herzog
    Jona Irle
    Tony Matt
    Neele Engelfried
    Dariusz Romer
    Torge Ballmann
    Nina Fiebig
    Ismail Henkel
    Benedict Hurst
    Grit Eimer
    Lenja Alberti
    Darius Gilles
    Maxim Herberts
    Emilie Stolten
    Wibke Leimbach
    Benedict Rieke
    Victor Mosch
    Dörte Baerbel
    Albert Wuestenberg
    Eric Gorbauch
    Isabel Haenel
    Arnold Suess
    Pepe Laske
    Aylin Schnitzer
    Luise Jörg

Screenshot
----------

.. thumbnail:: /images/perl_namengenerator_mac.png

Download
--------

`namengenerator.zip </download/namengenerator.zip>`_ (27 KB)

Source Code
-----------

.. code-block:: perl
    :number-lines:

    #!/usr/bin/perl
    #
    # Namen Generator
    $version = "0.4";
    #
    # Creative Commons
    # CC-BY-SA
    #
    # David Kleuker
    # http://davidak.de/

    use File::Slurp;

    @vornamen_m = read_file('vornamen_m');
    @vornamen_w = read_file('vornamen_w');
    @nachnamen = read_file('nachnamen');

    chomp (@vornamen_m, @vornamen_w, @nachnamen);

    print "\nNamen Generator Version $version\n\n";

    print "Anzahl: ";
    chomp ($anzahl = `<STDIN>`);
    print "\n";

    print "Modus (0 gemischt, 1 männliche, 2 weibliche): ";
    chomp ($modus = `<STDIN>`);
    print "\n";

    foreach $i (1..$anzahl) {

    # Vorname
    if ($modus == 0) {
    $geschlecht = int(rand(2));
    if ($geschlecht) { $name = $vornamen_m[rand(@vornamen_m)]; }
    else { $name = $vornamen_w[rand(@vornamen_w)]; }
    }

    if ($modus == 1) { $name = $vornamen_m[rand(@vornamen_m)]; }
    if ($modus == 2) { $name = $vornamen_w[rand(@vornamen_w)]; }

    # Nachname
    $name = $name.' '.$nachnamen[rand(@nachnamen)]."\n";

    # Name ins Array
    $data[$i] = $name;
    }

    write_file('namenliste.txt', @data);
    print "\nDatei wurde erzeugt.\n\n";
