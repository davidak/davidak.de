.. date: 2013/06/16 18:06
.. type: text

Photoshop - Text Game in Java
=============================

Beschreibung
------------

Eine textbasierte Wirtschaftssimulation in der man der Manager eines Fotoladens ist.

Es entstand im Jahr 2005, als ich gerne Fotograf werden wollte und ein eigenes Studio haben und eben nach einem solchen Spiel suchte, es aber nicht fand. So hab ich es mir selbst gemacht.

Es ist recht einfach und enthält ein paar Fehler.

Heute hätte ich einige Dinge anders gemacht.

Hinweis
-------

Am Anfang können Sie die Preise ändern oder später, indem sie „Preise ändern“ eingeben.

Bilderrahmen kosten für Sie 5€, um welche zu kaufen geben Sie "Rahmen" ein.

Um das Spiel zu beenden geben Sie "ende" ein.

Screenshot
----------

.. thumbnail:: /images/photoshop_text_game.png

Download
--------

`Photoshop.zip </download/Photoshop.zip>`_ (6 KB)

Source Code
-----------

.. code-block:: java
    :number-lines:

    import java.util.*;
    public class Photoshop
    {
        public static void main(String[] args) throws Exception
        {
            IntIO io = new IntIO();
            Random r = new Random();

            double preispass=9.90;
            double preisramen=15.00;
            double preispassnach=5.00;

            String frage="";
            String name="";
            int tage=0;
            String kaufen="";
            int frageint=0;
            int rahmen=0;
            double konto=100;
            int kundenzufall=0;
            int zufallzahl=0;


            // (c) 2005 David Kleuker

            io.writeln("                              Photoshop v.1.0");
            io.writeln("");
            name=io.readString("Wie heissen sie : ");
            frage=io.readString(name+" ,willst du die Preise ändern (j/n) :");
            io.writeln("");
            if(frage.equals("j"))
            {
                preispass=io.readDouble("Passbild: ");
                preisramen=io.readDouble("Rahmen: ");
                preispassnach=io.readDouble("Passbild Nachbestellung: ");
            }
            else
            {
                io.writeln("Dann bleiben die Preise wie sie sind !");
                io.writeln("Passbild: "+preispass);
                io.writeln("Rahmen: "+preisramen);
                io.writeln("Passbild Nachbestellung: "+preispassnach);
            }
            frage="";

            //--Endlosschleife--
            while(!kaufen.equals("ende"))
            {
                tage=tage+1;
                io.writeln("--------------------------------------------------------------------------------");
                io.writeln("Tag "+tage+" |");
                kaufen=io.readString("");
                if(kaufen.equals("Rahmen"))
                {
                    frageint=io.readInt("Wie viele Rahmen: ");
                    rahmen=rahmen+frageint;
                    konto=konto-5*frageint;
                    frageint=0;
                    io.writeln("Konto: "+konto);
                    io.writeln("Rahmen: "+rahmen);

                }
                if(kaufen.equals("Preise ändern"))
                {
                    preispass=io.readDouble("Passbild: ");
                    preisramen=io.readDouble("Rahmen: ");
                    preispassnach=io.readDouble("Passbild Nachbestellung: ");
            }
            if(preispass>20)
            {
                io.writeln("Kunde findet die Passbilder zu teuer");
                io.writeln("");
                }

            if(preisramen>20)
            {
                io.writeln("Kunde findet die Rahmen zu teuer");
                io.writeln("");
            }

            if(preispassnach>10)
            {
                io.writeln("Kunde findet die Passbild Nachbestellung zu teuer");
                io.writeln("");
            }

            if(rahmen<1)
            {
                io.writeln("Sie brauchen neue Rahmen");
                io.writeln("");
            }

                while(zufallzahl<10)
                {
                    zufallzahl=zufallzahl+1;
                    kundenzufall=r.nextInt(10);

                    if(kundenzufall==1)
                    {
                        io.writeln("Kunde kauft 1 Passbild");
                        konto=konto+preispass;
                        io.writeln("Konto: "+konto);
                        io.writeln("");
                    }

                    if(kundenzufall==2)
                                    {
                                        io.writeln("Kunde kauft 2 Passbilder");
                                        konto=konto+preispass*2;
                                        io.writeln("Konto: "+konto);
                                        io.writeln("");
                    }

                    if(kundenzufall==3 && rahmen>0)
                                    {
                                        io.writeln("Kunde kauft 1 Rahmen");
                                        konto=konto+preisramen;
                                        rahmen=rahmen-1;
                                        io.writeln("Rahmen: "+rahmen);
                                        io.writeln("Konto: "+konto);
                                        io.writeln("");
                    }

                    if(kundenzufall==4)
                                    {
                                        io.writeln("Kunde kauft 1 Passbild Nachbestellung");
                                        konto=konto+preispassnach;
                                        io.writeln("Konto: "+konto);
                                        io.writeln("");
                    }
                }
                zufallzahl=0;
            }//-klammer zu ???-

            io.writeln("--------------------------------------------------------------------------------");
            io.writeln("Konto: "+konto);
            io.writeln("Rahmen: "+rahmen);
            io.writeln("");
            io.writeln(name+" , du hast "+tage+" Tage lang Fotos verkauft !");
            if(tage>50)
            {
                io.writeln("Das ist sehr gut !!!");
            }
            if(tage<10)
            {
            io.writeln("Das ist nicht so viel !");
            io.writeln("Du hättest wenigstens 20 Tage durchhalten können, "+name+" !");
        }

        io.writeln("");
        io.writeln("(c) 2005 David Kleuker");
        io.writeln("http://davidak.de/");

        }
    }
