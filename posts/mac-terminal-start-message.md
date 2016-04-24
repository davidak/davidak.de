<!--
.. title: Mac Terminal Start Message
.. slug: 436-mac-terminal-start-message
.. date: 2008-06-26 11:00:32
.. tags: Mac,OS X,Terminal
.. description: 
.. type: text
-->

Die Startnachricht vom Terminal lässt sich ganz einfach anpassen.
<!-- TEASER_END -->

Diese nachricht ist in der Datei /etc/motd und nennt sich "Message of the Day".

Um diese einfach zu bearbeiten nimmt man an besten den pico editor.

Also im Terminal:

`sudo pico /etc/motd`

Nach dem Befehl musst du dein Passwort eingeben, da du Administrationsrechte brauchst.

Dort kann man dann z.B. ASCII Art reinkopieren, wie in [einem vorigen Artikel](/blog/435-text-zu-ascii-art/) beschrieben.

Mein Terminal sieht nach dem Starten so aus:

![Das Terminal von davidak](/images/terminal_motd.jpg)

Via: [hongkiat.com](http://www.hongkiat.com/blog/how-to-customized-mac-terminal-starup-screen-message/)
