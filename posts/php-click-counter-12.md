<!--
.. title: PHP Click Counter 1.2
.. slug: 376-php-click-counter-12
.. date: 2008-04-21 11:00:12
.. tags: In eigener Sache,PHP
.. description: 
.. type: text
-->

Ein Download-Counter, der in PHP geschrieben ist und die Daten in eine Textdatei schreibt.
<!-- TEASER_END -->

Sowas habe ich schon lange gesucht.
Zuvor hatte ich das als Wordpress-Plugin, aber da ich auch im Wiki die Downloads zählen will, brauch ich eine Stand-Alone-Lösung.

Nach stundenlangem googeln fand ich dann den "[PHP Click Counter](http://www.phpjunkyard.com/php-click-counter.php)".
Der entsprach genau meinen Ansprüchen und hat sogar ein Admin-Panel.

![PHP Click Counter @ davidak.de](/images/phpclickcounter.jpg)

Dieses wird durch ein Passwort geschützt.
In meinem Fall 20 stellig :D

Zum Testen gibt es auch eine [Demo-Installation](http://www.phpjunkyard.com/ccount/demo.php).
Das Passwort ist "demo" ;-)

Die Script-Schnipsel lassen sich super einfach in jede Homepage integrieren, die PHP unterstützt und dort sogar die Anzahl der bisherigen Downloads anzeigen.

Dafür genügt folgender Code:

```
<script language="Javascript">ccount_display('ID')</script>
```	

Und der muss noch in den HEADER:

```
<script language="Javascript" src="http://domain.de/ccount/display.php"><!--//--></script>
```

Für ID wird die ID des Downloads angegeben.
Diese findet man im Admin-Panel.

Für `domain.de` wird deine Domain angegeben und der Installationspfad.

Die Download-URL sieht folgendermassen aus: `http://domain.de/ccount/click.php?id=ID`

Das alles wird aber auch nochmal in der Readme erklärt.
