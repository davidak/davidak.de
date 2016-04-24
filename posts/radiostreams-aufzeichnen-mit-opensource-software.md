<!--
.. title: Radiostreams aufzeichnen mit OpenSource-Software
.. slug: 481-radiostreams-aufzeichnen-mit-opensource-software
.. date: 2008-08-24 11:00:26
.. tags: Audio,Internetradio,Tutorials,Mac,OS X,Windows,Internet,Musik,Open Source,Software
.. description: 
.. type: text
-->

Ein kleines **Tutorial**, wie man ganz einfach Internetradiostreams auf dem **Mac** mit Hilfe von **Open Source-Software** aufzeichnet.
<!-- TEASER_END -->

Dafür brauchen wir als erstes einen Stream, wie z.B. den von [Philosomatika](http://www.philosomatika.com/).
Da steht oben "Listen Now" und dort rechtsklicken und "Verknüpfte Datei laden".

Dann öffnest du diese Datei in [VLC](http://www.videolan.org/vlc/).

![VLC-Player auf OS X](/images/radiostreamstutorial_1.jpg)

Dann brauchst du noch [Soundflower](http://www.cycling74.com/products/soundflower), damit du den Ton eines einzelnen Programms aufnehmen kannst.
Das öffnest du und stellt bei "Soundflower (2ch)" auf "Built-in-output", damit du auch hörst, was du aufnimmst.

Dann brauchst du noch [Audacity](http://www.audacity.de/), um das ganze aufzuzeichnen.

Jetzt musst du noch dafür sorgen, dass der Sound vom VLC durch Soundflower in Audacity geht.

Dafür stellst du während des Abspielens in VLC unter **Audio -> Audiodevice** "Soundflower (2ch)" ein.

Und in Audacity in den Einstellungen unter **Recording -> Device** auch.

Das solltest du direkt mal testen.

![Audacity auf OS X](/images/radiostreamstutorial_2.jpg)

Auch aufnahmen über mehrere Stunden sind so möglich.
Ich habe z.B. mit meinem MacBook 2.0GHz 2GB Ram über 3 Stunden während dem [Grundrauschen vom Zettt](http://davidak.de/blog/?p=480) ohne Probleme aufgezeichnet.
