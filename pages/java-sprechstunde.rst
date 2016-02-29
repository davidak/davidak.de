.. date: 2009-12-02
.. type: text

Sprechstunde
============

Beschreibung
------------

Ein einfaches Programm was ich 2005 programmierte. Ich hatte vor eine Art Gesprächssimulator oder eine KI zu programmieren, was damals mit meinen minimalen Kenntnissen der Programmierung in Java nur soweit möglich war.

Die Faszination an dieser Idee blieb bis heute, daher war ich auch sehr erfreut als ich das Projekt `FreeHAL <http://freehal.org/>`_ fand, wo andere Menschen das selbe Ziel hatten. Mittlerweile arbeite ich an dem Projekt mit.

Über die seltsamen Fragemöglichkeiten und Antworten muss man sich nicht wundern. Zu der Zeit war ich noch ein Kind.

Das Programm vergleicht nur die Eingabe mit verschiedenen Antwortmöglichkeiten. Es lernt weder dazu noch versteht es andere Formulierungen.

Mögliche Befehle und Fragen
~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

    hallo
    hallo (eingegebener name der Programms)
    hi (eingegebener name der Programms)
    hi
    eine zufallszahl bitte
    zufallszahl
    pi
    wie heisst du
    wie heiss ich
    was weist du über mich
    woher weist du das
    hö
    :-)
    ...
    bist du doof
    harr
    du arschloch
    dumm oder was
    version
    programmierer
    scheisse
    du bist scheisse
    wichser
    geh nachhause
    geh kacken
    was ist 1+1
    haha
    geiz ist geil
    ich bin doch nicht blöd
    hi guys
    wie spät
    t610
    rap for ever
    schlecht geschissen
    bjkdg
    dumm oder so
    fick dich
    deine mudder
    programmiert mit
    matrix
    zufall
    büste kobe
    wellen
    zz
    nö
    simpsons

Screenshot
----------

.. thumbnail:: /images/java_sprechstunde.png

    Screenshot des Java Programms "Sprechstunde"

Download
--------

`Sprechstunde.zip </download/Sprechstunde.zip>`_ (8 KB)

Source Code
-----------

.. code-block:: java
    :number-lines:

    import java.util.*;
    public class Sprechstunde
    {
        public static void main(String[] args) throws Exception
        {
            IntIO io = new IntIO();
            Random r = new Random();

            // (c) 2005 David Kleuker

        io.writeln("                              SPRECHSTUNDE");
        io.writeln("                                  v.1,3");
        io.writeln();
        io.writeln("Ich , das heißt das Programm SPRECHSTUNDE, stelle dir ein paar persönliche Fragen"+
        ",die dass Programm wissen muss, um ordnungsgemäss zu funktionieren."+
        "Diese Daten werden nicht verkauft oder weitergegeben.Sie können so lange Fragen stellen, wie sie "+
        "wollen.Wenn sie das Programm beenden wollen beenden sie das Eingabefenster.");
        io.writeln("Alle späteren Eingaben sind klein.");
        io.writeln("Zum beenden 'ende' eingeben !");
        io.writeln();
        int zufall=0;
        String x =("");

        //-----------------------FRAGEN-PROGRAMM-------------------------------------------------------------
        String z = io.readString("Computer: Wie soll Ich heissen?:");
        String a = io.readString((z)+": Wie lautet dein Vorname: ");
        String b = io.readString((z)+": Und wie dein Nachname: ");
        String c = io.readString((z)+": Wie alt bist du: ");
        String d = io.readString((z)+": In welcher strasse wohnst du: ");
        String e = io.readString((z)+": Und in welcher Stadt: ");
        String f = io.readString((z)+": Wie heist deine Mutter: ");
        String g = io.readString((z)+": Was ist deine Lieblingsfarbe: ");
        String h = io.readString((z)+": Was isst du am liebsten: ");
        String i = io.readString((z)+": Was ist deine Lieblingszahl: ");
        String j = io.readString((z)+": Welches Computerspiel magst du am liebsten: ");
        String k = io.readString((z)+": Was ist deine Lieblingsserie/Lieblingsfilm: ");
        io.writeln();

        while (!x.equals("ende")){
        x = io.readString((a)+": ");
        //--------------------FRAGEN-BENUTZER----------------------------------------------------------------
        if (x.equals("hallo")) io.writeln((z)+": Hallo!");
        if (x.equals("hallo "+(z))) io.writeln((z)+":Hallo "+(a)+" !");
        if (x.equals("hi "+(z))) io.writeln((z)+": Hi "+(a)+" !");
        if (x.equals("hi")) io.writeln((z)+": Hi !");
        if (x.equals("eine zufallszahl bitte")){ zufall = r.nextInt(100); io.writeln((z)+": "+(zufall));}
        if (x.equals("zufallszahl")) {zufall = r.nextInt(100); io.writeln((z)+": "+(zufall));}
        if (x.equals("pi")) io.writeln((z)+": "+"3.141592654");
        if (x.equals("wie heisst du")) io.writeln((z)+": "+"Ich heiss "+(z)+" !");
        if (x.equals("wie heiss ich")) io.writeln((z)+": "+"Du heisst "+(a)+" !");
        if (x.equals("was weist du über mich")) io.writeln((z)+": "+(a)+", Ich weiss dass du "+(a)+" "+(b)+" heisst .Du bist "+(c)+" und spielst gerne das Computerspiel "+(j)+" .Deine Lieblingsfarbe ist "+(g)+", deine Lieblingszahl ist "+(i)+" ,dein Lieblingsessen ist "+(h)+" und dein/e Lieblingsfilm/serie ist "+(k)+" .Du wohnst in der Strasse "+(d)+" in der Stadt "+(e)+" und deine Mutter heist "+(f)+" !!!");
        if (x.equals("woher weist du das")) io.writeln((z)+": "+"Du hast das am Anfang eingegeben !");
        if (x.equals("hö")) io.writeln((z)+": "+"Harr !");
        if (x.equals(":-)")) io.writeln((z)+": "+":=)");
        if (x.equals("...")) io.writeln((z)+": "+"...");
        if (x.equals("bist du doof")) io.writeln((z)+": "+"Nein, nur du "+(a)+" !");
        if (x.equals("harr")) io.writeln((z)+": "+"Hö !");
        if (x.equals("du arschloch")) io.writeln((z)+": "+"Halt die Fresse ! ARSCHLOCH !!!");
        if (x.equals("dumm oder was")) io.writeln((z)+": "+"Du vieleicht !");
        if (x.equals("version")) io.writeln((z)+": "+"Version 1.3 !");
        if (x.equals("programmierer")) io.writeln((z)+": "+"David Kleuker !");
        if (x.equals("scheisse")) io.writeln((z)+": "+"Was ist Scheisse ?");
        if (x.equals("du bist scheisse")) io.writeln((z)+": "+"Verpiss Dich !");
        if (x.equals("wichser")) {io.writeln((z)+": "+"OK ! Jetzt beende ich mich !!!"); x=("ende");}
        if (x.equals("geh nachhause")) io.writeln((z)+": "+"GEH KACKEN !!!");
        if (x.equals("geh kacken")) io.writeln((z)+": "+"FICK DICH !!!");
        if (x.equals("was ist 1+1")) io.writeln((z)+": "+"2");
        if (x.equals("haha")) io.writeln((z)+": "+"Warum lachst du ?");
        if (x.equals("geiz ist geil")) io.writeln((z)+": "+"Geh doch zu SATURN !");
        if (x.equals("ich bin doch nicht blöd")) io.writeln((z)+": "+"MEDIAMARKT");
        if (x.equals("hi guys")) io.writeln((z)+": "+"SCHWUL oder was ?");
        if (x.equals("wie spät")) io.writeln((z)+": "+"Zu Spät !");
        if (x.equals("t610")) io.writeln((z)+": "+"Sony Ericsson T610");
        if (x.equals("rap for ever")) io.writeln((z)+": "+"FUCK RAP !");
        if (x.equals("schlecht geschissen")) io.writeln((z)+": "+"Du vieleicht !");
        if (x.equals("bjkdg")) io.writeln((z)+": "+"HÄ ?");
        if (x.equals("dumm oder so")) io.writeln((z)+": "+"Halt doch die SCHNAUZE !");
        if (x.equals("fick dich")) io.writeln((z)+": "+"FICK DICH DOCH SELBST !!!");
        if (x.equals("deine mudder")) io.writeln((z)+": "+"FICK DICH !");
        if (x.equals(z)) io.writeln((z)+": "+"Ja, so heiss ich !");
        if (x.equals(a)) io.writeln((z)+": "+"Das ist dein Name !");
        if (x.equals("programmiert mit")) io.writeln((z)+": "+"Programmiert mit TextPad !");
        if (x.equals("matrix")) {while(true){zufall=r.nextInt(2); io.write(zufall);}}
        if (x.equals("zufall")) {while(true){zufall=r.nextInt(10); io.write(zufall);}}
        if (x.equals("büste kobe")) io.writeln((z)+": "+"NÄH DIGGER !");
        if (x.equals("wellen")) {while(true){zufall=r.nextInt(1000000); io.write((zufall)+"   ");}}
        if (x.equals("zz")) {while(true){zufall=r.nextInt(1000000000); io.write((zufall)+"              "+(zufall)+"    ");}}
        if (x.equals("nö")) io.writeln((z)+": "+"...");
        if (x.equals("simpsons")) io.writeln((z)+": "+"PRO7 19UHR !");


        //if (x.equals("")) io.writeln((z)+": "+"");
        //-------------------------------------------------------------------------------------------------
        }

        io.writeln();
        io.writeln("ENDE");
        io.writeln();
        io.writeln("Bis zum nächsten mal, "+(a)+" !");

        }
    }
