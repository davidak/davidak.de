<!--
.. title: Mac Trojaner im Umlauf
.. slug: 434-mac-trojaner-im-umlauf
.. date: 2008-06-23 11:00:19
.. tags: Mac,OS X,Trojaner
.. description: 
.. type: text
-->

Der **Trojaner für OS X** tarnt sich entweder als **AppleScript "ASthtv05", "AppleScript.THT"** oder als Programm.
Er verbreitet sich über **iChat** und **LimeWire**.

Das ganze konnte durch eine **Sicherheitslücke im Apple Remote Desktop** (ARD) realisiert werden.
Es werden Passwörter ausgelesen, Tastatureingaben mitgeschnitten und Dateifreigaben eingeschaltet.

Das lässt sich ganz einfach unterbinden.
<!-- TEASER_END -->

Mann muss nur dem ARD die Rootrechte entziehen, damit das Script nicht mehr gestartet werden kann.

Dazu muss man nur folgenden Text in das Terminal kopiert werden.

```
sudo chmod u-s /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents
``

Nach betätigen der ENTER-Taste musst du das Administratorpasswort eingeben.
Falls du dieses nicht hast, lass es einen machen, der es hat.

![Mac Trojaner: Lücke schliessen (Apple Remote Desktop)](/images/terminal_ard_exploit.jpg)

Ich hab das natürlich gleich gemacht, da ich ungefähr einmal die Woche iChat benutze.
Apple wird bestimmt bald ein Sicherheitsupdate veröffentlichen, der die Lücke schliesst.

Bis dahin sollte einem mit dieser Lösung geholfen sein.

Via: [MacTechNews](http://www.mactechnews.de/news/index.html?id=141419), [heise.de](http://www.heise.de/newsticker/Root-Exploit-fuer-Mac-OS-X--/meldung/109735), [**fsck**log](http://www.fscklog.com/2008/06/ardagent-schwac.html), [Eumel blogt](http://eumel59.de/?p=2307), [MacVillage](http://www.macvillage.de/blog/2008/06/20/root-exploit-im-ardagent/), 
