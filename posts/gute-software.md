.. title: Meine Kriterien für gute Software
.. slug: gute-software
.. date: 2019-11-10 23:19:00 UTC+01:00
.. tags: Software, Freie Software, Open Source
.. description:
.. type: text

Ein Freund von mir hat die Domain gutesoftware.de, aber keinen Inhalt dafür. Es hat mich gestört, dass das Potenzial einer so schönen Domain nicht genutzt wird. Also habe ich mich damit beschäftigt, was für mich gute Software ausmacht. Das Thema passt gut, da ich in der Qualitätssicherung arbeite und persönlich die Mission verfolge, Freie Software zugänglicher zu machen.
<!-- TEASER_END -->

Meine erste Idee für das Projekt war eine Informationsseite. Besucher sollten lesen können, was meiner Meinung nach gute Software ausmacht und warum. Es sollte sowohl Entwickler als auch Anwender ansprechen.

Ich habe einen Prototyp gebaut und nach Feedback gefragt. ([Archiv](https://web.archive.org/web/20191110042008/https://gutesoftware.de/)) Es wurde empfohlen daraus eine Checkliste zu machen und sich nur auf Anwender zu fokussieren, da es für Entwickler schon die [Best Practices](https://github.com/coreinfrastructure/best-practices-badge/blob/master/doc/criteria.md) der [Core Infrastructure Initiative](https://www.coreinfrastructure.org/) gibt.

Also habe ich weiter gedacht, wie meine persönlichen Kriterien für gute Software anderen Anwendern helfen können. Die Idee ist nun einen oder mehrere Standards zusammen mit der FOSS-Community zu entwickeln.

Mit den Kriterien können dann Bewertungen von Software-Projekten erstellt und gesammelt werden und als Open Data zur Verfügung gestellt werden. Langfristig können die Daten an verschiedenen Stellen genutzt werden, z.B. in AppStores, um Anwendern zu helfen die Software zu bewerten. Ähnlich wie Bio- oder Fairtrade-Siegel in anderen Bereichen.

Wenn du Interesse hast an dem Thema mitzuarbeiten melde dich gerne bei mir per E-Mail an info at gutesoftware.de.

Um das bisherige Ergebnis festzuhalten, bevor ich einen breiteren Konsens anstrebe, veröffentliche ich es an dieser Stelle.

## Die Kriterien

Nur wenn diese Kriterien erfüllt sind spreche ich von guter Software. Manche Punkte mögen radikal wirken, aber ich bin der Meinung, nur dann ist es wirklich gute Software. Mein Wunsch ist, dass Freie Software in dieser Hinsicht verbessert wird und so langfristig besser wird als unfreie Software. Das hat Vorteile für die Anwender und uns als Gesellschaft.

Die Schlüsselwörter "MUSS", "DARF NICHT", "ERFORDERLICH", "SOLL",
"VERBOTEN", "NÖTIG", "NICHT NÖTIG", "SOLL NICHT", "EMPFOHLEN", "DARF",
"KANN" und "OPTIONAL" werden nach 2119de interpretiert.
[github.com/adfinis-sygroup/2119](https://github.com/adfinis-sygroup/2119/blob/master/2119de.rst) ([Archiv](https://web.archive.org/web/20191110020457/https://github.com/adfinis-sygroup/2119/blob/master/2119de.rst))


Die Software MUSS die Aufgabe erfüllen können, für die sie entwickelt wurde.

Die Software MUSS unter einer Freie Software- bzw. Open Source-Lizenz veröffentlicht werden, wie sie die [Free Software Foundation (FSF)](https://www.gnu.org/licenses/license-list.html) oder [Open Source Initiative (OSI)](https://opensource.org/licenses) definiert. Die Lizenz gibt dem Anwender die Freiheit, die Software für jeden Zweck zu verwenden, die Funktionsweise zu untersuchen und an die eigenen Anforderungen anzupassen sowie die Software an andere Menschen weiterzugeben.

Die Software SOLL unter einer [Copyleft](https://de.wikipedia.org/wiki/Copyleft)-Lizenz veröffentlicht werden. Das stellt sicher, dass alle Änderungen ebenfalls als Freie Software veröffentlicht werden müssen. Die Software darf nicht unfrei gemacht werden und unterstützt somit keine unfreie Software. Auf lange Sicht soll es nur noch Freie Software geben, im Interesse der Anwender.

Die Software MUSS für jeden zugänglich sein, unabhängig von den finanziellen Möglichkeiten. Das hat nur Vorteile für die Gemeinschaft, da die Software ohne signifikante Kosten kopiert werden kann und Anwender auch auf andere Weise zur Verbesserung der Software beitragen können.

Das Projekt MUSS Anwendern die Möglichkeit geben es finanziell zu unterstützen. Das ist in ihrem Interesse, da so die Weiterentwicklung sichergestellt wird.

Das Projekt MUSS hauptsächlich direkt durch seine Anwender finanziert werden.

Das Projekt DARF NICHT zu mehr als 50% durch eine Person oder Organisation finanziert werden. Das stellt sicher, dass die Software im Interesse aller Anwender entwickelt wird und nicht im Interesse einzelner großer Sponsoren oder Investoren. Die Finanzierung ist nachhaltig, da sie nicht durch Wegfall einzelner Unterstützer gefährdet ist.

Das Projekt SOLL Anwender dazu aufrufen monatlich einen kleinen Betrag zu spenden. Je mehr unterstützen, desto weniger muss jeder spenden, um die Finanzierung sicher zu stellen.

Das Projekt MUSS eine Möglichkeit bereitstellen Fehler und Sicherheitslücken zu melden.

Die Software MUSS aktiv gepflegt werden. Das beinhaltet mindestens bekannte Fehler und Sicherheitslücken zeitnah zu beheben und auf vorhandene Merge Requests einzugehen.

Das Projekt MUSS mindestens 2 Maintainer haben, um den [Bus-Faktor](https://de.wikipedia.org/wiki/Truck_Number) zu verringern. Wenn es nur einen Maintainer hat, kann es negative Folgen für das Projekt haben, wenn dieser weg ist, z.B. werden Merge Requests nicht bearbeitet (kann durch einen Fork gelöst werden) oder die Domain geht verloren, weil sie nicht bezahlt wird.

Die Software MUSS auf [offene Standards](https://fsfe.org/activities/os/os.de.html) setzen. Dadurch sind die Daten mit anderen Programmen kompatibel.

Das Projekt DARF NICHT von unfreien Entwicklungs-Werkzeugen abhängig sein.

Das Projekt SOLL selbst auch Freie Software verwenden.

Das Projekt DARF NICHT von unfreien Plattformen abhängig sein.

Die Infrastruktur SOLL unabhängig betrieben und finanziert werden.

Die Software MUSS die Privatsphäre der Anwender aktiv schützen. Es DÜRFEN NICHT unnötigen Daten erhoben werden. Es MUSS transparent gemacht werden, welche Daten zu welchem Zweck erhoben werden.

Die Software MUSS stabil und zuverlässig laufen.

Die Software MUSS von Menschen gefunden werden können, die sie brauchen. Das kann durch eine gute Präsentation des Projekts auf einer Webseite erreicht werden, wodurch es über Suchmaschinen auffindbar ist, indem Entwickler und Anwender für Interviews zur Verfügung stehen, wodurch darüber berichtet werden kann. Mit einem Lightningtalk auf einer passenden Konferenz erreicht man viele potentielle Anwender. Eventuell könnte auch aktiv Werbung gemacht werden?

Die Software DARF NICHT von sich aus Inhalte zensieren. Dem Anwender KÖNNEN Funktionen bereitgestellt werden, um unerwünschte Inhalte oder störende Anwender zu blockieren.

Die Software MUSS von den Anwendern ohne Programmier-Kenntnisse übersetzbar sein.

Die Software MUSS mindestens in englischer Sprache verfügbar sein. Diese gilt als Weltsprache und wird von vielen Menschen verstanden. Dadurch können viele die Software in ihre Muttersprache übersetzen.

Die Software SOLL in vielen Sprachen verfügbar sein. Dadurch ist sie für viele Menschen zugänglich.

Die Software SOLL in einer Gemeinschaft aus Entwicklern und Anwendern entwickelt werden. Anwender können sich durch Feedback einbringen oder selbst zu Entwicklern werden. Dabei geht es nicht nur um Programmieren, sondern auch ums Testen, Übersetzen, Dokumentieren und Verbreiten. Hilfe bekommen Anwender auch durch andere Anwender oder die Entwickler, z.B. in einem Forum oder Chat.

Die Software SOLL nach den Anforderungen der Anwender entwickelt werden (siehe [User-Centered Design](https://de.wikipedia.org/wiki/Nutzerorientierte_Gestaltung)). Das führt zu einer guten [Benutzerfreundlichkeit](https://de.wikipedia.org/wiki/Benutzerfreundlichkeit) und einem angenehmen [Nutzungserlebnis](https://de.wikipedia.org/wiki/User_Experience).

Die Software SOLL intuitiv und leicht zu bedienen sein (siehe [Usability/User Experience](https://www.usability.de/usability-user-experience.html)).

Die Software KANN die Möglichkeit bieten, fortgeschrittene Funktionen bei Bedarf zu aktivieren.

Die Software SOLL nach Möglichkeit auf allen populären Plattformen verfügbar sein. Also Windows, Linux und macOS auf dem Computer und Android sowie iOS auf dem Smartphone.

Die Software SOLL sich leicht installieren lassen. Zum Beispiel über Paketmanager auf Linux-Distributionen, distributionsübergreifende Alternativen wie Flatpak, AppImage oder Snappy, Installer oder portable Version auf Windows, DMG oder den AppStore auf macOS. Darüber hinaus gibt es eine Anleitung zum Bauen der Software aus dem Quellcode. Das hilft Paketmaintainern von Distributionen ein Paket zu bauen.

Die Software SOLL einen geringen Ressourcenbedarf haben (CPU, RAM, Speicherplatz, Netzwerk), damit sie auch auf schwacher Hardware läuft.

Die Software SOLL auch für Menschen mit Behinderung benutzbar sein (siehe [Barrierefreiheit](https://de.wikipedia.org/wiki/Barrierefreies_Arbeiten_am_Computer)). Das macht es auch für andere Menschen benutzbarer, z.B. für alte Menschen.

Das Projekt SOLL Änderungen erst nach einem Code Review durch einen Maintainer hinzufügen. Das erhöhen die Qualität der Software und Fehler werden frühzeitig erkannt. Sie lassen sich gut als Teil eines Merge Request-Workflows umsetzen. Die Maintainer tragen die Verantwortung für hinzugefügte Änderungen.

## Beispiele

Diese Beispiele erfüllen die Kriterien:

- Die GNU/Linux Distribution [elementary OS](https://elementary.io/)
- Die Repository-Verwaltung [Gitea](https://gitea.io/)
- Der Passwort-Manager [KeePassXC](https://keepassxc.org/)
