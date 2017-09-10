.. title: RTFM - Random Text File Maker
.. date: 2013/06/16 18:06
.. type: text

Beschreibung
------------

Ein kleines Programm, dass Textdateien mit zufälligen Zahlen füllt. Es war eine Übung für mich um zu lernen wie man Daten in eine Datei schreibt.

Nicht zu verwechseln mit *Read the fucking Manual* ;-)

Screenshot
----------

.. thumbnail:: /images/java_rtfm.png

Download
--------

`RTFM.zip </download/RTFM.zip>`_ (37 kB)

Source Code
-----------

rtfm.java
~~~~~~~~~

.. code-block:: java
    :number-lines:

    import java.text.SimpleDateFormat;
    import java.util.*;
    import java.io.*;

    public class RTFM {

        /**

         * RTFM - RANDOM TEXT FILE MAKER
         * Version 0.4 Beta
         *
         * David Kleuker
         * www.davidak.de
         */

        public static void main(String[] args) {

            Random r = new Random();

            // Variablen
            String name="User";
            String cpuname="Computer";
            String eingabe="";
            String textname="Textdatei";
            int anzz = 10;
            int rand = 0;
            int i=0;


            System.out.println("RTFM - RANDOM TEXT FILE MAKER");
            System.out.println("Versio 0.4");
            System.out.println();
            System.out.println("David Kleuker");
            System.out.println("www.davidak.de");
            System.out.println("------------------------------");
            System.out.println();

            System.out.print(cpuname+": Wie lautet dein Name: ");
            name = Eingabe.leseString();
            System.out.println(cpuname+": Hallo "+name+"!");


            System.out.println();
            System.out.println(cpuname+": Schreib 'help' um die Hilfe zu oeffnen oder tippe ein Befehl ein.");
            System.out.println();


            //Befehlseingabeschleife
            while (!eingabe.equals("ende")) {

                System.out.println();
                System.out.println("------------------------------");
                System.out.println(cpuname+": Bitte Befehl eingeben!");
                System.out.print(name+": ");
                eingabe = Eingabe.leseString();
                System.out.println("------------------------------");
                System.out.println();



                // Hilfe
                if (eingabe.equals("help")) {
                    System.out.println("RTFM Hilfe");
                    System.out.println("-----------");
                    System.out.println();
                    System.out.println("Folgende Befehle kannst du eingeben:");
                    System.out.println();
                    System.out.println();
                    System.out.println("help:");
                    System.out.println("oeffnet die Hilfe");
                    System.out.println();
                    System.out.println("ende, exit, quit:");
                    System.out.println("beendet das Programm");
                    System.out.println();
                    System.out.println("set name");
                    System.out.println("deinen Name eingeben");
                    System.out.println();
                    System.out.println("set cpuname");
                    System.out.println("Name des Computers eingeben");
                    System.out.println();
                    System.out.println("mtf");
                    System.out.println("'make text file' - Generiert eine Textdatei");
                }


                // Textdatei erzeugen
                if (eingabe.equals("mtf")) {
                    System.out.println("MAKE TEXT FILE:");
                    System.out.println("---------------");
                    System.out.println();
                    System.out.println(cpuname+": Name der Textdatei (ohne Endung): ");
                    System.out.print(name+": ");
                    textname = Eingabe.leseString();
                    System.out.println(cpuname+": Anzahl zufaelliger Zeichen: ");
                    System.out.print(name+": ");
                    anzz = Eingabe.leseInt();

                    // warnen wenn mehr als 10MB
                    if (anzz>10000000) {
                        System.out.println(cpuname+": Die Datei kann mehr als 100MB werden. Weitermachen? j/n: ");
                        System.out.print(name+": ");
                        eingabe = Eingabe.leseString();

                        if (eingabe.equals("n")) {
                            System.out.println(cpuname+": Es wurde keine Datei erzeugt.");
                            System.out.println(cpuname+": Das Programm wird nun beendet.");
                            System.out.println();
                            System.out.println();
                            break;
                        }
                        else System.out.println(cpuname+": Ich hab dich gewarnt!");
                    }


                    Date dNow = new Date();
                    Date dNoww = new Date();
                    SimpleDateFormat datumm = new SimpleDateFormat ("dd.MM.yyyy");
                    SimpleDateFormat zeitt = new SimpleDateFormat ("HH:mm");

                    // Datei schreiben
                    try {
                    BufferedWriter out = new BufferedWriter(new FileWriter(textname+".txt"));
                    out.write("RTFM - RANDOM TEXT FILE MAKER");
                    out.newLine();
                    out.write("------------------------------");
                    out.newLine();
                    out.newLine();
                    out.write("(c) 2008 David Kleuker");
                    out.newLine();
                    out.write("www.davidak.de");
                    out.newLine();
                    out.newLine();
                    out.write(name+" hat diese Datei am "+datumm.format(dNow)+" um "+zeitt.format(dNoww)+" Uhr erstellt.");
                    out.newLine();
                    out.newLine();
                    out.newLine();

                    // Alle zufallszahlen generieren und schreiben
                    while(i<anzz) {
                        i++;
                        rand = r.nextInt(10);

                        // Zeichen generieren
                        if (rand==0) { out.write("0"); }
                        if (rand==1) { out.write("1"); }
                        if (rand==2) { out.write("2"); }
                        if (rand==3) { out.write("3"); }
                        if (rand==4) { out.write("4"); }
                        if (rand==5) { out.write("5"); }
                        if (rand==6) { out.write("6"); }
                        if (rand==7) { out.write("7"); }
                        if (rand==8) { out.write("8"); }
                        if (rand==9) { out.write("9"); }

                        // alle 100 Zeichen eine neue Zeile
                        if (i % 100==0) { out.newLine(); }
                    }

                    i=0;
                    out.close();
                    System.out.println(cpuname+": Datei erfolgreich erstellt.");
                    }

                    catch (IOException e) {
                        System.out.println(cpuname+": Schreiben der Datei fehlgeschlagen.");
                        System.out.println("Fehler "+e.toString());
                    }

                }


                // Name ndern
                if (eingabe.equals("set name")) {
                    System.out.print(cpuname+": Neuer Name: ");
                    name = Eingabe.leseString();
                    System.out.println();
                    System.out.println(cpuname+": "+name+" ist auch ein toller Name!");
                }



                // CPU Name ndern
                if (eingabe.equals("set cpuname")) {
                    System.out.print(cpuname+": Neuer Name fr mich: ");
                    cpuname = Eingabe.leseString();
                    System.out.println();
                    System.out.println(cpuname+": "+cpuname+" ist auch ein toller Name!");
                }



                // Beenden
                if (eingabe.equals("ende")) {
                    break;
                }



                // Beenden
                if (eingabe.equals("exit")) {
                    eingabe = "ende";
                    break;
                }



                // Beenden
                if (eingabe.equals("quit")) {
                    eingabe = "ende";
                    break;
                }


            }

            // Ende des Programms
            System.out.println("Tschss, "+name+"!");
            System.out.println();
            System.out.println("Besuch meinen Blog oder mein Wiki mit noch mehr Java-Programmen.");
            System.out.println();
            System.out.println("www.davidak.de");

        }

    }

Eingabe.java
~~~~~~~~~~~~

.. code-block:: java
    :number-lines:

    import java.io.BufferedReader;
    import java.io.IOException;
    import java.io.InputStreamReader;

    /* Nicht dokumentierte Klasse, um direkt Eingaben von der Tastatur

     * Konsole zu lesen. Die Methoden fangen Fehler ab und geben bei
     * falschen Eingaben "Standardwerte" zurück.
     * @author kleuker
     */
    public class Eingabe {

      public static String leseString(){
        String ergebnis;

        BufferedReader in = new BufferedReader( new InputStreamReader(System.in));
        try {
            ergebnis=in.readLine();
        } catch (IOException e) {
            ergebnis="";
        }
        return ergebnis;
      }

      public static int leseInt(){
        int ergebnis;
        try {
            ergebnis=Integer.decode(leseString()).intValue();
        } catch (NumberFormatException e) {
            ergebnis=0;
        }

        return ergebnis;
      }

      public static float leseFloat(){
        float ergebnis;
        try {
            ergebnis=Float.valueOf(leseString()).floatValue();
        } catch (NumberFormatException e) {
            ergebnis=0f;
        }

        return ergebnis;
      }

      public static double leseDouble(){
        double ergebnis;
        try {
            ergebnis=Double.valueOf(leseString()).doubleValue();
        } catch (NumberFormatException e) {
            ergebnis=0d;
        }

        return ergebnis;
      }

      public static boolean leseBoolean(){
        boolean ergebnis;
        try {
            ergebnis=Boolean.valueOf(leseString()).booleanValue();
        } catch (NumberFormatException e) {
            ergebnis=false;
        }

        return ergebnis;
      }

    // rein zu Testzwecken hier stehen gelassen, kann gelöscht werden
        public static void main (String[] s){
            int eingabe=0;
            while(eingabe!=-1){
                System.out.print("Text eingeben: ");
                System.out.println("Eingeben wurde:"+Eingabe.leseString());
                System.out.print("Float eingeben: ");
                System.out.println("Eingeben wurde:"+Eingabe.leseFloat());
                System.out.print("Double eingeben: ");
                System.out.println("Eingeben wurde:"+Eingabe.leseDouble());
                System.out.print("Boolean eingeben: ");
                System.out.println("Eingeben wurde:"+Eingabe.leseBoolean());
                System.out.print("Ganze Zahl eingeben (Abbruch mit -1): ");
                eingabe=Eingabe.leseInt();
                System.out.println("Eingeben wurde: "+eingabe);
            }
        }
    }
