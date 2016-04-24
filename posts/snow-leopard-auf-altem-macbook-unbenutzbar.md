<!--
.. title: Snow Leopard auf altem Macbook unbenutzbar
.. slug: 996-snow-leopard-auf-altem-macbook-unbenutzbar
.. date: 2009-09-06 01:44:07
.. tags: Kernel Panic,OS X,Snow Leopard,Apple,Software
.. description: 
.. type: text
-->

Auf meinem 3 Jahre alten Macbook hab ich so einige Probleme nach der Installation von Snow Leopard.
<!-- TEASER_END -->

Mein Macbook hatte mit Leopard seit neustem Probleme, Videos auf Youtube abzuspielen. Das äußerte sich darin, das es ruckelte und sich teilweise der Rechner mit einer Kernel Panic verabschiedet.
Die Installation ist fast 3 Jahre alt und ich dachte, das einfach etwas im System kaputt ist und eine Neuinstallation alles beheben würde.
Deswegen war ich sehr erfreut als der Verkauf von Snow Leopard angekündigt wurde und hab es gleich vorbestellt.

Nur leider kam das Packet 6 Tage zu spät!
Das Problem hatten einige und es lag wohl an dem beauftragten Kurier-Dienst.
Trotz dessen war ich erfreut, dass bald mein System wieder gut funktionieren würde.

Ich hab die Festplatte formatiert und OS X innerhalb einer halben Stunde neu installiert.
Erstmal machte alles einen guten Eindruck.
Ich hab Software aus dem Backup kopiert, neue Versionen runtergeladen und angefangen Daten zu sortieren.

Doch als ich auf [Youtube](http://www.youtube.com/?gl=DE&hl=de) ging, wie ich es so oft tue, blieb das Video wieder stehen, das gleiche bei [Vimeo](http://www.vimeo.com/). Dann wurde mir klar, das das Problem weiterhin besteht. Im Internet erfuhr ich auch, das [Apple eine ältere Version vom Flash Player auslieferte](http://www.fscklog.com/2009/09/sammelsurium-lückenhaftes-flash-plugin-durch-106-vorgefertigte-iphone-klingeltöne-apple-ms-kampagne-raub-store-etc.html), also lud ich die neuste runter. Es half garnichts.

Mein Macbook hat die Intel GMA950 Grafikkarte verbaut, hier steht, dass es [Probleme mit Front Row](http://www.macnotes.de/2009/09/01/probleme-mit-front-row-nach-snow-leopard-upgrade-auf-mac-mini-und-macbook/) gibt. Desweiteren unterstützt diese Grafikkarte kein OpenCL, was eins der tollen neuen Technologien in Snow Leopard darstellt.

So bin ich wohl einer der ersten, der die neue Kernel Panic sieht.
Diese Variante hab ich schonmal gesehen, bevor mein Rechner derart abstürzte, das das System kaputt war und neu aufgesetzt werden musste.
Diese Situation hatte ich schon 2 mal, daher hab ich immer ein Backup.

In diesem Fall war es recht schwer die Kernel Panic zu erzeugen, denn wenn man es dann mal will reicht nicht ein Fenster mit Youtube, sondern ich startete 2 mal Quicktime, einmal [Youtube](http://www.youtube.com/?gl=DE&hl=de) sowie [Vimeo](http://www.vimeo.com/) und noch das Programm [Schnippselchen Pro](http://myownapp.com/site/moapp3.0/applications_leo/freestuff/schnippselchenpro/schnippselchenpro.html), das komischerweise auch 107% CPU Last erzeugt. Alles ruckelte und stotterte vor sich hin, bis es dann doch ein abruptes Ende nahm.

![Macbook mit Snow Leopard und Kernel Panic](/images/macbook_kernel_panic_quicktime_blog.jpg)
([Grosse Ansicht](http://davidak.de/fotos/technik/macbook_kernel_panic_quicktime.jpg.php))

Ist [dieser](http://davidak.de/fotos/technik/kernelpanic_assaultcube.jpg.php) Kelnel Panic Bildschirm nun weg, weil er wenig aussagekräftig ist, oder nur Zufall?

Auch der Fehlerberichts Dialog ist neu.

![Snow Leopard: Fehlerbericht an Apple senden](/images/macbook_kernel_panic_quicktime_blog_2.jpg)

Mit dem liebevoll geschriebenen Text:

>HEY APPLE,
>
>YOUR OS SUCKS.
>THE DRIVER FOR INTEL GMA950 SUCKS!
>SOFTWARE LIKE QUICKTIME, SAFARI (FLASH) AND OTHER CRASHES.
>I CANT WORK WITH THAT.
>
>WHY IS MY 3 YEARS OLD COMPUTER OUT OF DATE?
>
>PLEASE APPLE, FIX IT!
>
>IM UNHAPPY TO HATE YOU.
>I LOVE MY MAC LONG TIME, BUT NOW IT SUCKS HARDER THAN AN 9 YEARS OLD WINDOWS MACHINE.

Oder auch die Variante, wenn es wieder Flash war:

>**Mac OS X + Adobe Flash = FAIL!**
>
>HERE IS ANOTHER CRASH REPORT FOR YOU.
>
>I THINK I COULD SWITCH TO WINDOWS FOR WATCHING YOUTUBE-VIDEOS OR LISTENING TO MUSIC ON MYSPACE.
>OR YOU FIX THIS BUG.
>
>I WAITED FOR SAFARI 4.0 ... AND FOR SNOW LEOPARD.
>
>BUT THE SHIT STILL SUCKS!!!
>
>DO IT.

Auch Exposé funktioniert deutlich schlechter als noch auf Leopard (10.5.8) und von der Animation sehe ich oft nur 2 Bilder, als etwa ein Bild pro Sekunde.

Ich frage mich ernsthaft ob irgend ein Mensch solche Probleme hat.
Kann mal jemand mit einem Macbook 2,1 mit Intel GMA950 dazu was sagen?

Da die lächerliche Garantie von einem Jahr schon abgelaufen ist muss Apple bzw. Gravis da garnichts machen.
Es wurde bereits der RAM sowie das Mainboard ausgetauscht innerhalb der Garantie, weil er sich schon damals mit Kernel Panics verabschiedete.

Ich könnte versuchen in Frankfurt in den Apple Store zu gehen, wenn der dann eröffnet.

Aber einige Dinge sind auch besser geworden, so startet er innerhalb einer Minute und ist innerhalb 5 Sekunden aus, sobald denn alle Programme beendet sind.
Auch Adobe Photoshop CS3 läuft bisher Problemlos und sogar etwas schneller.
Spotlight liefert wirklich innerhalb weniger Sekunden ein Ergebnis wo ich sonst teilweise 8 Minuten (!!!) warten musste.

Ein Problem, das ich immernoch habe ist, dass die Netzwerkverbindung über Kabel plötzlich weg ist.
Dann zieh ich das Kabel raus und mach W-Lan an und es geht wieder.
Neustarten des Rechners behebt das Problem auch, eben bis es wieder passiert.
Am Router sollte es nicht liegen, denn auf andere PCs im selben Netzwerk geht das Internet.

Ich denke, da könnte die Netzwerkkarte nen Schaden haben.

Bei einem 3 Jahre alten Gerät sollte das nicht der Fall sein und gerade Apple steht ja für Qualität bei Hardware und Software.

Früher hab ich Macs empfohlen und mind. 3 Leute haben Macs gekauft wegen mir.
Diese haben nie Probleme, obwohl einer fast ein baugleiches Gerät hat.

Nur ich habe diese Probleme.

Scheiße.


**Update: 8.9.09**
Kernel Panic bei:
	
- Safari + Flash (nach ca. 2 Minuten)
- Quicktime (720p)
- Vorschau (Anmerkungen)
