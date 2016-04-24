<!--
.. title: Server-Umzug und Datenbank-Probleme
.. slug: 885-server-umzug-und-datenbank-probleme
.. date: 2009-06-15 12:06:24
.. tags: Webhoster,In eigener Sache
.. description: 
.. type: text
-->

Lange Zeit war es sehr still hier im Blog.
Das lag daran, das ein Server-Umzug bevor stand und ich daher möglichst wenig Traffic erzeugen wollte, um im Falle grösserer Probleme nicht allzuviel Besucher mit Fehlermeldungen zu verschrecken.

Kurz vorweg: Der Umzug hat geklappt und alles funktioniert.
<!-- TEASER_END -->

Die grösseren Probleme gab es tatsächlich.

Aber ich fang mal von vorne an.

Fast 2 Jahre war meine Website bei [HostEurope](http://www.hosteurope.de/) gehostet.
Einer der Gründe zu wechseln war das Fehlen der [mod_rewrite](http://de.wikipedia.org/wiki/Rewrite-Engine) Erweiterung.

Mein neuer Hoster, [Schokokeks.org](http://schokokeks.org/) bietet diese Erweiterung standartmässig an, neben sehr vielen Freiheiten der Konfiguration und vollwärtigem SSH-Zugriff.

Nachdem ich alle Dateien vom alten Server auf den Neuen kopiert und auch die MySQL-Datenbanken wieder importiert habe, gab es Probleme mit Umlauten und anderen Sonderzeichen.

Das es sich dabei um ein Codierungs-Problem handelt war schnell klar, für die Beseitigung dieses benötigte ich allerdings 3 Tage. Dabei wurde mir tatkräftig vom Support meines neuen Hosters geholfen.

Ich hatte letzendlich ca. 30 Dumps, auf die ich unterschiedlichste Tools angewendet habe.

Den finalen Dump erzeugte ich, indem ich Tabellen aus verschiedenen zusammenkopierte.

Zum Beispiel waren die Artikel doppelt UTF-8 codiert und teilweise auch latin1, was wohl noch von einer alten Wordpress-Installation stammt.

Die UTF-8 Zeichen konnte ich mit doppelter Anwendung dieses Befehls wiederherstellen:

`iconv -c -f latin1 -t utf-8 blog_broken.sql > blog_clean.sql`

Nach den zwei Durchgängen, die man natürlich beim zweiten mal auf die neue Datei anwenden muss, muss man nochmal von UTF-8 nach latin1 codieren.
Dabei gehen latin1 Zeichen verloren, die zum Glück recht selten vorkamen, vorallem in alten Artikeln.

So hab ichs dann letztendlich doch hinbekommen, das der Blog in dem Zustand ist, den du gerade vor dir siehst.

Das es wieder mehr Inhalte geben wird, will ich nicht versprechen, da ich mittlerweile sowas wie ein [Real Life](http://de.wikipedia.org/wiki/Real_Life_(Netzkultur)) habe. Aber wenn ich Ideen und Motivation habe wird es unregelmässig Artikel geben.

Daher am besten den [RSS-Feed](http://davidak.de/blog/feed/) abbonieren.

Ich arbeite derzeit an einem Nebenprojekt zum Blog, was ich später vielleicht vorstellen werde.

Blogosphäre, ich bin wieder da!
