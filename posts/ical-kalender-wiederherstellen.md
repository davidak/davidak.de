<!--
.. title: iCal Kalender wiederherstellen
.. slug: 321-ical-kalender-wiederherstellen
.. date: 2008-01-12 11:00:47
.. tags: iCal,Mac,Software
.. description: 
.. type: text
-->

Wenn du ein Backup mit Time Machine gemacht hast, kannst du Time Machine starten während iCal aktiv ist.
Wenn du noch ein laufendes System hast oder ein bootbares Backup kannst du aus iCal die Daten exportieren.
Wenn das nicht funktioniert oder du nur ein normales Backup der Festplatte hast, kopierst du folgende Daten vom Backup aufs laufende System.
<!-- TEASER_END -->

Dabei muss iCal beendet sein.
Bestehende Daten in den Ordnern vorher löschen.

	/Benutzer/USER/Library/Calendars/*.*
	/Benutzer/USER/Library/Caches/com.apple.iCal/*.*
	/Benutzer/USER/Library/Preferences/com.apple.iCal.plist

Wobei "USER" dein Benutzername ist.

Nicht über komische Ordnernamen wundern.
Die sind nicht kaputt, dass gehört so ;-)

Dann iCal starten und alle Daten sollten wieder da sein.

![iCal wiederherstellen](/images/ical_wiederherstellen.jpg)

[Aktualisiert: 30.8.09]
