.. date: 2013/06/16 18:06
.. type: text

Anno 1203 - textbasiertes Aufbau-Simulations-Spiel in Java
==========================================================

Beschreibung
------------

Ein textbasiertes Aufbau-Simulations-Spiel welches ich 2005 programmierte.

Da ich zu dem Zeitpunkt noch ein Kind war muss man sich über manche Dinge nicht wundern, zb. das man Menschen kaufen kann ;-)

Ich bin bis heute Fan der Anno Reihe.

Hinweis
-------

In Anno 1203 geht es darum möglichst viel Gold in geringer Zeit zu bekommen.

Um das zu erreichen können Sie Farmen und Bürger kaufen.

Anfangs haben sie 100 Gold, sie bekommen jeden Tag 10 Getreide pro Farm und 1 Gold pro Bürger.

Das Getreide können Sie weiterverkaufen zu je 1 Gold.

+---------------------+-----------------------------------------+
| Befehl              | Wirkung                                 |
+=====================+=========================================+
| kaufe farm          | 1 Farm kaufen (100 Gold)                |
+---------------------+-----------------------------------------+
| kaufe bürger        | 1 Bürger kaufen (25 Gold)               |
+---------------------+-----------------------------------------+
| verkaufe getreide   | Anzahl wählen (1 Gold für 1 Getreide)   |
+---------------------+-----------------------------------------+
| ende                | beendet das Spiel und zeigt Statistik   |
+---------------------+-----------------------------------------+

Screenshot
----------

.. thumbnail:: /images/anno-1203.png

Download
--------

`Anno-1203.zip </download/Anno-1203.zip>`_ (Größe: 6KB)

Source Code
-----------

.. code-block:: java
    :number-lines:

    import java.util.*;

    public class anno
    {
        public static void main(String[] args) throws Exception
        {
            IntIO io = new IntIO();
            Random r = new Random();

            // (c) 2005 David Kleuker
            // http://davidak.de/
            // davidak@gmx.de

            String x="";
            String name="";
            int tag=0;
            int gold=100;
            int farmen=1;
            int buerger=10;
            int getreide=10;
            int verk=0;
            int kauf=0;

            io.writeln("                             < Anno 1203 >");
            name=io.readString("Wie heisst du ?  ");
            io.writeln("");
            io.writeln("Hallo "+name+" !");

            while(!x.equals("ende"))
            {
                io.writeln(">-------------------------------------------------------------------------------");
                tag=tag+1;
                io.writeln("Tag "+tag);
                io.writeln("Gold "+gold);
                io.writeln("Farmen "+farmen);
                io.writeln("Getreide "+getreide);
                io.writeln("Buerger "+buerger);
                io.writeln("");
                x=io.readString("");
                //--------------------------------------------------------------
                if(x.equals("kaufe farm")&&gold>99)
                {
                    kauf=io.readInt("Wie viele Farmen : ");
                    gold=gold-kauf*100;
                    farmen=farmen+kauf;
                    io.writeln("Du hast "+kauf+" Farmen gekauft !");
                    kauf=0;
                }
                //--------------------------------------------------------------
                if(x.equals("kaufe buerger")&&gold>24)
                {
                    kauf=io.readInt("Wie viele Buerger kaufen : ");
                    gold=gold-25*kauf;
                    buerger=buerger+kauf;
                    io.writeln("Du hast "+kauf+" Buerger gekauft !");
                    kauf=0;
                }
                //--------------------------------------------------------------
                if(x.equals("verkaufe getreide")&&getreide>0)
                {
                    verk=io.readInt("Wie viel Getreide : ");
                    getreide=getreide-verk;
                    gold=gold+verk;
                    io.writeln("Du hast "+verk+" Gold bekommen !");
                }

                verk=0;
                getreide=getreide+10*farmen;
                gold=gold+buerger;
            }

            io.writeln("");
            io.writeln("--------------------------------------------------------------------------------");
            io.writeln("STATISTIK :");
            io.writeln("");
            io.writeln("Tage: "+tag);
            io.writeln("Gold: "+gold);
            io.writeln("Farmen: "+farmen);
            io.writeln("Getreide: "+getreide);
            io.writeln("Buerger: "+buerger);
            io.writeln("");
            io.writeln(name+", du hast "+tag+" Tage lang gespielt und dabei "+gold+" Gold verdient !");
            if(gold>1000)
            {
                io.writeln("Du hast über 1000 Gold verdient !");
                io.writeln("Sehr gut !");
            }

            if(gold<100)
            {
                io.writeln("Du hast noch nicht einman 100 Gold mehr ?");
                io.writeln("Das ist ganz schlecht !!!");
            }

            io.writeln("");
            io.writeln("(c) 2005 David Kleuker");
            io.writeln("http://davidak.de/");
            io.writeln("");
        }
    }
