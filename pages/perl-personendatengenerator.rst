.. title: Personendatengenerator in Perl
.. date: 2013/06/16 18:06
.. type: text

Das Script für die `Personendatenbank <http://davidak.de/personen/>`_.

Beschreibung
------------

Hiermit können zufällige Personendatensätze erzeugt werden, mit plausiblen Adressen, Vorlieben und Interessen.

Die einzelnen Daten sind in Textdateien gespeichert, werden am Anfang einmal eingelesen und zur Erzeugung der Datensätze aus dem Arbeitsspeicher geladen.

Als Ausgabe stehen drei Modi zur Verfügung:

-  CSV
-  Wordpress
-  beide

Die CSV-Datei kann anschliessend ganz einfach mit Excel oder der OpenOffice Tabellenkalkulation importiert werden. Die einzelnen Daten sind durch ; getrennt.

Bei der zweiten Option werden die Datensätze einzeln an einen Wordpress-Blog gesendet via XMLRPC.

Die Anzahl der zu generierenden Datensätze, die Zugangsdaten für Wordpress sowie die drei Modi + den Debug-Modus für noch mehr Informationen (empfohlen) werden am Anfang des Scripts festgelegt.

Screenshot
----------

.. thumbnail:: /images/perl_personendatengenerator_mac.png

    Mit dem Personendatengenerator auf einem Macintosh 10.000 Datensätze erzeugt, die jetzt im Internet abrufbar sind.

Download
--------

`personendatengenerator.zip </download/personendatengenerator.zip>`_ (982 KB)

Source Code
-----------

.. code-block:: perl
    :number-lines:

    #!/usr/bin/perl -w
    use warnings;
    use POSIX;
    use File::Slurp;
    use Try::Tiny;
    use WordPress::XMLRPC;
    use Date::Calc qw(Delta_Days Today);
    use Time::HiRes qw(gettimeofday);

    ########################################
    # Personendatengenerator mit CSV und WP
    $version = '1.4';
    # CC-BY-NC-SA 2010 David Kleuker
    # http://davidak.de/
    #
    # Konfiguration
    #
    # Modus (0 CSV, 1 Wordpress, 2 beide)
    $modus = 0;
    # Anzahl der Datensätze
    $anzahl = 100;
    # Wordpress Benutzername
    $blog_user = 'admin';
    # Wordpress Passwort
    $blog_pass = 'asdf';
    # Wordpress XMLRPC URL
    $blog_url = 'http://cms.de/wordpress/xmlrpc.php';
    #
    # Debug-Modus 0/1
    $d = 1;
    #
    # Ab hier bitte nichts mehr editieren.
    ########################################

    print "\nPersonendatengenerator Version $version von davidak (";
    if ($modus == 0) { print "CSV"; }
    elsif ($modus == 1) { print "Wordpress"; }
    elsif ($modus == 2) { print "CSV + Wordpress"; }
    print " + Debug" if $d;
    print " Modus)\n\n";

    # Daten einlesen
    $time_read = gettimeofday( ) if $d;
    @vornamen_w = read_file('data_vorname_w.txt');
    @vornamen_m = read_file('data_vorname_m.txt');
    @namen = read_file('data_nachnamen.txt');
    @plz_raw = read_file('data_plz_ort.txt');
    @strassen = read_file('data_strassen.txt');
    @vorwahlen_raw = read_file('data_vorwahl_ort.txt');
    @edomains = read_file('data_email_domains.txt');
    @berufe = read_file('data_berufe.txt');
    @interessens = read_file('data_interessen.txt');
    @musiks = read_file('data_musik.txt');
    @filme = read_file('data_filme.txt');
    $time_read_diff = gettimeofday() - $time_read if $d;
    $time_read_diff = sprintf "%.2f", $time_read_diff if $d;
    print "Daten eingelesen ($time_read_diff Sekunden)\n"if $d;

    chomp(@vornamen_w, @vornamen_m, @namen, @plz_raw, @strassen, @vorwahlen_raw, @edomains, @berufe, @interessens, @musiks, @filme);

    # Daten verarbeiten und Variablen deklarieren
    @figurs = ('dürr', 'schlank', 'normal', 'mollig', 'fett' );
    @politiks = ( 'unpolitisch', 'Kommunist', 'links', 'liberal', 'rechts', 'konservativ', 'grün' );
    @religionen = ( 'Jude', 'Budhist', 'Hinduist', 'Moslem', 'keine' );
    @sexs = ( 'bisexuell', 'schwul bzw. lesbisch', 'asexuell');
    $csv[0] = 'Nachname;Vorname;Geschlecht;Geburtsdatum;Strasse;Hausnummer;PLZ;Ort;Land;Telefonnummer;E-Mail Adresse;Beziehungsstatus;Kinder;Religion;Politische Einstellung;Sexuelle Orientierung;Figur;Raucher;Alkohol;Andere Drogen;Beruf;Einkommen ca. in €;Interessen;Musik'."\n";
    ($jahr, $monat, $tag) = Today();
    $land = 'Deutschland';
    $i = 0; #Durchgänge

    foreach (@plz_raw){
        $_ =~ /^(\d+),([\w ]+),$/;
        push (@plzs,$1);
        $plzort{$1} = $2;
    }

    foreach (@vorwahlen_raw){
        $_ =~ /^(\d+),([\w -]+),$/;
        $vorwahlen{$2} = $1;
    }

    # Datensätze werden erzeugt
    $time_gen = gettimeofday( ) if $d;
    while ($i < $anzahl){ $i++;

    # Geschlecht
    $geschlecht = int(rand(2));
    if ($geschlecht == 1) {$geschlecht_str = 'weiblich';} else {$geschlecht_str = 'männlich';}

    # Vorname
    if ($geschlecht == 1) { $vorname = $vornamen_w[rand($#vornamen_w+1)]; }
    else { $vorname = $vornamen_m[rand($#vornamen_m+1)]; }

    # Nachname
    $name = $namen[rand($#namen+1)];

    # Geburtsdatum
    $geburtsdatum_tag = int(rand(28))+1;
    $geburtsdatum_monat = int(rand(11))+1;
    $geburtsdatum_jahr = int(rand(82))+1920;
    # Alter
    $alter = Delta_Days($geburtsdatum_jahr, $geburtsdatum_monat, $geburtsdatum_tag, $jahr, $monat, $tag);
    $alter = int($alter/365);

    # Beziehungsstatus
    @statuse = ('single', 'vergeben', 'verlobt');
    if ($alter <= 16) {$status = '';}
    elsif ($alter <= 20) {$status = $statuse[rand($#statuse+1)];}
    elsif ($alter <= 80) {
    @statuse = ('single', 'vergeben', 'verlobt', 'verheiratet');
    $status = $statuse[rand($#statuse+1)]; }
    else { $status = '';}

    # PLZ + Ort
    $plz = $plzs[rand($#plzs+1)];
    $ort = $plzort{$plz};

    # Strasse
    $strasse = $strassen[rand($#strassen+1)];

    # Hausnummer
    $hausnr = int(rand(200))+1;

    # Telefonnummer
    while ($key = each(%vorwahlen)){
        if ($key =~ /.*\Q$ort\E.*/) { $vorwahl = $vorwahlen{$key}; last; }
    }
    $telefon = int(rand(8999999))+1000000;
    if ($vorwahl) { $telefon = "0$vorwahl $telefon"; } else { $telefon = ''; }

    # E-Mail
    $eran = int(rand(6));
    $edom = $edomains[rand($#edomains+1)];
    if ($eran == 0) {$email = lc($name).'@'.$edom; }
    elsif ($eran == 1) {$ort =~ s/ /-/g; $email = lc($vorname).'-aus-'.lc($ort).'@'.$edom; $ort =~ s/-/ /g; }
    elsif ($eran == 2) {$email = lc($vorname).substr($geburtsdatum_jahr,2,2).'@'.$edom; }
    elsif ($eran == 3) {$email = lc($name).substr($geburtsdatum_jahr,2,2).'@'.$edom; }
    else {$email= lc($vorname).'.'.lc($name).'@'.$edom;}

    # Beruf
    if ($alter <= 18) { $beruf = 'Schüler'; }
    else { $beruf = $berufe[rand($#berufe+1)]; }

    # Einkommen
    if ($alter <= 18) { $einkommen = ''; }
    elsif ($alter <= 39) { $einkommen = (int(rand(49))+1)*100; }
    else { $einkommen = (int(rand(99))+1)*100;}

    # Interessen
    $interessenanz = int(rand(2));
    # RSS
    $rinteresse = '[tag]'.$interessens[rand($#interessens)].'[/tag]';
    foreach (0..$interessenanz){$rinteresse = '[tag]'.$interessens[rand($#interessens)].'[/tag], '.$rinteresse;}
    # CSV
    $interesse = $interessens[rand($#interessens+1)];
    foreach (0..$interessenanz){ $interesse = $interessens[rand($#interessens)].', '.$interesse;}

    # Musik
    $musikanz = int(rand(2));
    # RSS
    $rmusik = '[tag]'.$musiks[rand($#musiks)].'[/tag]';
    foreach (0..$musikanz) { $rmusik = '[tag]'.$musiks[rand($#musiks)].'[/tag], '.$rmusik; }
    # CSV
    $musik = $musiks[rand($#musiks+1)];
    foreach (0..$musikanz) { $musik = $musiks[rand($#musiks)].', '.$musik; }

    # Film
    $filmanz = int(rand(2));
    $film = $filme[rand($#filme+1)];
    foreach (0..$filmanz) { $film = $filme[rand($#filme)].', '.$film; }

    # Figur
    $figur = $figurs[rand($#figurs+1)];

    # Raucher
    if ($alter <= 14) { $raucher = 0; }
    else { $raucher = int(rand(2)); }
    if ($raucher == 1) {$raucher_str = 'ja';} else {$raucher_str = 'nein';}

    # Alkohol
    if ($alter <= 14) { $alkohol = 0; }
    else { $alkohol = int(rand(2)); }
    if ($alkohol == 1) {$alkohol_str = 'ja';} else {$alkohol_str = 'nein';}

    # Drogen
    if ($alter <= 16) { $drogen = 0; }
    elsif ( int(rand(4)) == 1 ) { $drogen = 1; }
    else { $drogen = 0; }
    if ($drogen == 1) {$drogen_str = 'ja';} else {$drogen_str = 'nein';}

    # Politik
    if ($alter >= 18) { $politisch = $politiks[rand($#politiks+1)]; } else { $politisch = '' }

    # Religion
    if (int(rand(5)) == 0) { $religion = $religionen[rand($#religionen+1)]; } else { $religion = 'Christ'; }

    # Sex
    if ($alter >= 18) {
        if ( int(rand(6)) == 1) { $sexuell = $sexs[rand($#sexs+1)]; }
        else { $sexuell = 'hetero'; }
    } else { $sexuell = ''; }

    # Kinder
    if ($alter <= 17) { $kinder = 0; }
    elsif (($alter >= 18) && ($alter <= 22)) { $kinder = int(rand(3)); }
    elsif ( $alter <= 28) { $kinder = int(rand(5)); }
    elsif ($status eq 'verheiratet') { $kinder = int(rand(9)); }
    else { $kinder = int(rand(5)); }

    # Datensatz speichern (CSV)
    if (($modus == 0) || ($modus == 2)) {
        $csv[$i] = "$name;$vorname;$geschlecht_str;$geburtsdatum_tag.$geburtsdatum_monat.$geburtsdatum_jahr;$strasse;$hausnr;$plz;$ort;$land;$telefon;$email;$status;$kinder;$religion;$politisch;$sexuell;$figur;$raucher_str;$alkohol_str;$drogen_str;$beruf;$einkommen;$interesse;$musik\n";
    }

    # Datensatz speichern (Wordpress)
    if (($modus == 1) || ($modus == 2)) {

    if ($status) { push (@blog_cat,$status); }
    if ($sexuell) { push (@blog_cat,$sexuell); }
    if ($geschlecht == 1) { push (@blog_cat,'Frau'); } else { push (@blog_cat,'Mann'); }
    if ($raucher == 1) { push (@blog_cat,'Raucher'); } else { push (@blog_cat,'Nichtraucher'); }
    if ($alkohol == 1) { push (@blog_cat,'Alkohol'); } else { push (@blog_cat,'Kein Alkohol'); }
    if ($drogen == 1) { push (@blog_cat,'Drogen'); } else { push (@blog_cat,'Keine Drogen'); }

    if ($status) { $status = "`<strong>`Beziehungsstatus:`</strong>` $status`<br />`"; } else { $status = ''; }
    if ($kinder > 0) { $kinder = "`<strong>`Kinder:`</strong>` $kinder`<br />`"; } else { $kinder = ''; }
    if ($vorwahl) { $telefon = "`<strong>`Telefonnummer:`</strong>` $telefon`<br />`"; } else { $telefon = ''; }
    if ($einkommen) { $einkommen = "`<strong>`Einkommen:`</strong>` ca. $einkommen€/Monat`<br />`"; } else { $einkommen = ''; }
    if ($politisch) { $politisch = "`<strong>`Politische Einstellung:`</strong>` $politisch"; } else { $politisch = ''; }
    if ($sexuell) { $sexuell = "`<strong>`Sexuelle Orientierung:`</strong>` $sexuell`<br />`"; } else { $sexuell = ''; }

    $email = "`<strong>`E-Mail Adresse:`</strong>` `<a href='mailto:".$email."'>`".$email."`</a>`";

    $z1 = "`<strong>`Geburtsdatum:`</strong>` $geburtsdatum_tag.$geburtsdatum_monat.$geburtsdatum_jahr (`<?php echo alter($geburtsdatum_tag,$geburtsdatum_monat,$geburtsdatum_jahr); ?>`)`<br />`";
    $z2 = "`<strong>`Geschlecht:`</strong>` $geschlecht_str`<br />`";
    $z3 = "$status";
    $z4 = "$kinder`<br />`";
    $z5 = "$strasse $hausnr`<br />`";
    $z6 = "$plz $ort`<br />`";
    $z7 = "$land`<br />``<br />`";
    $z8 = "$telefon";
    $z9 = "$email`<br />``<br />`";
    $z10 = "$politisch`<br />`";
    $z11 = "`<strong>`Religion:`</strong>` $religion`<br />`";
    $z12 = "$sexuell`<br />`";
    $z13 = "`<strong>`Figur:`</strong>` $figur`<br />`";
    $z14 = "`<strong>`Raucher:`</strong>` $raucher_str`<br />`";
    $z15 = "`<strong>`Alkohol:`</strong>` $alkohol_str`<br />`";
    $z16 = "`<strong>`Andere Drogen:`</strong>` $drogen_str`<br />``<br />`";
    $z17 = "`<strong>`Beruf:`</strong>` $beruf`<br />`";
    $z18 = "$einkommen`<br />`";
    $z19 = "`<strong>`Interessen:`</strong>` $rinteresse`<br />`";
    $z20 = "`<strong>`Musik:`</strong>` $rmusik`<br />`";
    $z21 = "`<strong>`Lieblingsfilme:`</strong>` $film";

    $wp_title[$i] = $vorname.' '.$name;
    $wp_cat[$i] = join(',', @blog_cat);
    $wp_content[$i] = "$z1$z2$z3$z4$z5$z6$z7$z8$z9$z10$z11$z12$z13$z14$z15$z16$z17$z18$z19$z20$z21";

    undef @blog_cat;
    }

    } # Datensätze erzeugen /while-schleife

    $time_gen_diff = gettimeofday() - $time_gen if $d;
    $time_gen_diff = sprintf "%.2f", $time_gen_diff if $d;
    print "$anzahl Datensätze generiert ($time_gen_diff Sekunden)\n"if $d;

    # Datensätze schreiben (CSV)
    if (($modus == 0) || ($modus == 2)) {
        $time_write_csv = gettimeofday() if $d;
        write_file( 'personendatensaetze.csv', @csv ) ;
        $time_write_csv_diff = gettimeofday() - $time_write_csv if $d;
        $time_write_csv_diff = sprintf "%.2f", $time_write_csv_diff if $d;
        print "CSV-Datei schreiben ($time_write_csv_diff Sekunden)\n"if $d;
    }

    # Datensätze senden (Wordpress)
    if (($modus == 1) || ($modus == 2)) {
        $time_send_wp = gettimeofday() if $d;

        foreach $j (1..$anzahl) {

            @wp_category = split (',', $wp_cat[$j]);

            my $o = WordPress::XMLRPC->new;
            $o->username($blog_user);
            $o->password($blog_pass);
            $o->proxy($blog_url);
            $o->server() || die "$!";
            $o->blog_id(1);

            my $blogpost = {
                'title' => $wp_title[$j],
                'categories' => [ @wp_category ],
                'description' => $wp_content[$j],
                'mt_keywords' => '',
                'mt_allow_comments' => 1,
            };

            my $ID = post_to_wp( $o, $blogpost );

            sub post_to_wp {
                my ( $o, $blogpost ) = @_;
                my $ID;

                for ( 0..1000 ) {
                    try { $ID = $o->newPost($blogpost,1); };
                    last if $ID; # no need to retry if it worked
                    print "Fehler beim senden der Daten!\n";
                    sleep (5);
                }
            return $ID;
            }
        }
        $time_send_wp_diff = gettimeofday() - $time_send_wp if $d;
        $time_send_wp_diff = sprintf "%.2f", $time_send_wp_diff if $d;
        print "Datensätze erfolgreich an Wordpress gesendet ($time_send_wp_diff Sekunden"if $d;
        if (($d) and (($time_send_wp_diff/60)>=1)) {
        $time_send_wp_diff_min = sprintf "%.2f", ($time_send_wp_diff/60);
        print " -> $time_send_wp_diff_min Minuten";
        }
        print ")\n" if $d;
        $performance = sprintf "%.2f", ($anzahl/$time_send_wp_diff) if $d;
        print "Geschwindigkeit: ".$performance." Datensätze/s\n" if $d;
    }

Mögliche Verbesserungen
-----------------------

- Doppelte Einträge bei Übertragungsfehlern (ca. 8 bei 10.000)
- Nicht bei jeder Person alle Daten (realistischer)
- Geschlechtsspezifische Form des Berufs
- Gehalt orientiert sich an Beruf
- Foto der Person

Links
-----

- `Nachnamen (erste 40 Seiten) <http://nachname.gofeminin.de/w/nachnamen/haeufigste-nachnamen-in-deutschland.html>`_
- `WP: Liste der häufigsten Nachnamen Deutschlands <http://de.wiktionary.org/wiki/Wiktionary:Deutsch/Liste_der_häufigsten_Nachnamen_Deutschlands>`_
- `Witzige Nachnahmen <http://www.kaiwranik.de/namen/nachnamen.htm>`_
- `Vornamen der Jahrzehnte 1990 - 2009 <http://www.beliebte-vornamen.de/>`_
- `Bundesnetzagentur Vorwahl, Ort, CSV <http://www.bundesnetzagentur.de/cln_1932/DE/Sachgebiete/Telekommunikation/RegulierungTelekommunikation/Nummernverwaltung/OrtsnetzVerzeichnisseNeu/Vorwahlverzeichnis/Vorwahlverzeichnis_Basepage.html?nn=154346>`_
- `Postleitzahl Ort CSV <http://www.manfrin-it.com/postleitzahlen/plz.html>`_
- `E-Mail Domains 1 <http://www.zemskov.net/free-email-domains.html>`_
- `E-Mail Domains 2 <http://freecentral2.tripod.com/freemail.htm>`_
- `E-Mail Domains 3 <http://www.joewein.de/sw/spam-freemailer.htm>`_
