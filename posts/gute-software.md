.. title: Meine Anforderungen an gute Software
.. slug: gute-software
.. date: 2019-11-10 06:00:00 UTC+01:00
.. tags: Software, Freie Software, Open Source
.. description:
.. type: text

Ein Freund von mir hat die Domain gutesoftware.de, aber keinen Inhalt dafür. Es hat mich gestört, dass das Potenzial einer so schönen Domain nicht genutzt wird. Also habe ich mich damit beschäftigt, was für mich gute Software ausmacht.
<!-- TEASER_END -->
Das Thema passt gut, da ich in der Qualitätssicherung arbeite und persönlich die Mission verfolge, Freie Software zugänglicher zu machen.

Meine erste Idee für das Projekt war eine Informationsseite. Besucher sollten lesen können, was meiner Meinung nach gute Software ausmacht und warum. Es sollte sowohl Entwickler als auch Anwender ansprechen.

Ich habe einen Prototyp gebaut und nach Feedback gefragt. ([Archiv](https://web.archive.org/web/20191110042008/https://gutesoftware.de/)) Es wurde empfohlen daraus eine Checkliste zu machen und sich nur auf Anwender zu fokussieren, da es für Entwickler schon die [Best Practices](https://github.com/coreinfrastructure/best-practices-badge/blob/master/doc/criteria.md) der [Core Infrastructure Initiative](https://www.coreinfrastructure.org/) gibt.

Also habe ich weiter gedacht, wie meine persönlichen Kriterien für gute Software anderen Anwendern helfen können. Die Idee ist nun einen oder mehrere Standards zusammen mit der FOSS-Community zu entwickeln.

Mit den Kriterien können dann Bewertungen von Software-Projekten erstellt und gesammelt werden und als Open Data zur Verfügung gestellt werden. Langfristig können die Daten an verschiedenen Stellen genutzt werden, z.B. in AppStores, um Anwendern zu helfen die Software zu bewerten. Ähnlich wie Bio- oder Fairtrade-Siegel in anderen Bereichen.

Um das bisherige Ergebnis festzuhalten, bevor ich einen breiteren Konsens anstrebe, veröffentliche ich es an dieser Stelle.

## Die Anforderungen

Nur wenn diese Anforderungen erfüllt sind spreche ich von guter Software.

Die Schlüsselwörter "MUSS", "DARF NICHT", "ERFORDERLICH", "SOLL",
"VERBOTEN", "NÖTIG", "NICHT NÖTIG", "SOLL NICHT", "EMPFOHLEN", "DARF",
"KANN" und "OPTIONAL" werden nach 2119de interpretiert.
[github.com/adfinis-sygroup/2119](https://github.com/adfinis-sygroup/2119/blob/master/2119de.rst) ([Archiv](https://web.archive.org/web/20191110020457/https://github.com/adfinis-sygroup/2119/blob/master/2119de.rst))


Die Software MUSS unter einer Freie Software- bzw. Open Source-Lizenz veröffentlicht werden, wie sie die [Free Software Foundation (FSF)](https://www.gnu.org/licenses/license-list.html) oder [Open Source Initiative (OSI)](https://opensource.org/licenses) definiert. Sie SOLLTE unter einer [Copyleft](https://de.wikipedia.org/wiki/Copyleft)-Lizenz veröffentlicht werden.

Die Software MUSS für jeden zugänglich sein, unabhängig von den finanziellen Möglichkeiten. Ein *[Zahle, was du willst](https://de.wikipedia.org/wiki/Pay_what_you_want)* Modell KANN verwendet werden.

Das Projekt MUSS Benutzern die Möglichkeit geben es finanziell zu unterstützen.

Das Projekt MUSS hauptsächlich direkt durch seine Benutzer finanziert werden. Diese KÖNNEN dazu aufgerufen werden, jeden Monat freiwillig einen kleinen Betrag zu spenden. Dadurch bleibt das Projekt unabhängig und kann nach den Interessen der Benutzer entwickelt werden und nicht im Interesse großer Sponsoren oder Investoren.

Das Projekt MUSS eine Möglichkeit bereitstellen Fehler und Sicherheitslücken zu melden.

Die Software MUSS aktiv gepflegt werden. Das beinhaltet mindestens bekannte Fehler und Sicherheitslücken zeitnah zu beheben und auf vorhandene Merge Requests einzugehen.

Das Projekt MUSS mindestens 2 Maintainer haben, um den [Bus-Faktor](https://de.wikipedia.org/wiki/Truck_Number) zu verringern. Mindestens 2 MÜSSEN alle Befugnisse haben, z.B. Zugriff auf Repository, Webseite, Domain und Geld.

Die Software MUSS auf [offene Standards](https://fsfe.org/activities/os/os.de.html) setzen. Dadurch sind die Daten mit anderen Programmen kompatibel.

Das Projekt DARF NICHT von unfreien Entwicklungs-Werkzeugen abhängig sein. Es SOLLTE selbst auch Freie Software verwenden.

Das Projekt DARF NICHT von kostenlosen, profitorientierten Plattformen abhängig sein. Die Infrastruktur SOLLTE unabhängig betrieben und finanziert werden.

Die Software MUSS die Privatsphäre der Benutzer aktiv schützen. Es DÜRFEN NICHT unnötigen Daten erhoben werden. Es MUSS transparent gemacht werden, welche Daten zu welchem Zweck erhoben werden.

Die Software MUSS stabil und zuverlässig laufen.

Die Software MUSS von Menschen gefunden werden können, die sie brauchen. Das kann durch eine gute Präsentation des Projekts auf einer Webseite erreicht werden, wodurch es über Suchmaschinen auffindbar ist, indem Entwickler und Benutzer für Interviews zur Verfügung stehen, wodurch darüber berichtet werden kann. Mit einem Lightningtalk auf einer passenden Konferenz erreicht man viele potentielle Benutzer. Eventuell könnte auch aktiv Werbung gemacht werden?

Die Software MUSS zukunftsfähige Technologien verwenden (Programmiersprache, Bibliotheken, Algorithmen, Formate).

Die Software DARF NICHT von sich aus Inhalte zensieren. Dem Benutzer KÖNNEN Funktionen bereitgestellt werden, um unerwünschte Inhalte oder störende Benutzer zu blockieren.


Die Software SOLLTE in einer Gemeinschaft aus Entwicklern und Benutzern entwickelt werden. Benutzer können sich durch Feedback einbringen oder selbst zu Entwicklern werden. Dabei geht es nicht nur um Programmieren, sondern auch ums Testen, Übersetzen, Dokumentieren und Verbreiten. Hilfe bekommen Benutzer auch durch andere Benutzer oder die Entwickler, z.B. in einem Forum oder Chat.

Die Software SOLLTE nach den Anforderungen der Benutzer entwickelt werden (siehe [User-Centered Design](https://de.wikipedia.org/wiki/Nutzerorientierte_Gestaltung)). Das führt zu einer guten [Benutzerfreundlichkeit](https://de.wikipedia.org/wiki/Benutzerfreundlichkeit) und einem angenehmen [Nutzungserlebnis](https://de.wikipedia.org/wiki/User_Experience).

Die Software SOLLTE intuitiv und leicht zu bedienen sein (siehe [Usability/User Experience](https://www.usability.de/usability-user-experience.html)). Es KANN die Möglichkeit geben, fortgeschrittene Funktionen bei Bedarf zu aktivieren.

Die Software SOLLTE in der Sprache der Benutzer verfügbar sein.

Die Software SOLLTE nach Möglichkeit auf allen populären Plattformen verfügbar sein. Also Windows, Linux und macOS auf dem Computer und Android sowie iOS auf dem Smartphone.

Die Software SOLLTE sich leicht installieren lassen. Zum Beispiel über Paketmanager auf Linux-Distributionen, distributionsübergreifende Alternativen wie Flatpak, AppImage oder Snappy, Installer oder portable Version auf Windows, DMG oder den AppStore auf macOS. Darüber hinaus gibt es eine Anleitung zum Bauen der Software aus dem Quellcode. Das hilft Paketmaintainern von Distributionen ein Paket zu bauen.

Die Software SOLLTE einen geringen Ressourcenbedarf haben (CPU, RAM, Speicherplatz, Netzwerk), damit sie auch auf schwacher Hardware läuft.

Die Software SOLLTE auch für Menschen mit Behinderung benutzbar sein (siehe [Barrierefreiheit](https://de.wikipedia.org/wiki/Barrierefreies_Arbeiten_am_Computer)). Das macht es auch für andere Menschen benutzbarer, z.B. für alte Menschen.

Änderungen SOLLTEN erst nach einem Code Review durch einen Maintainer hinzugefügt werden. Das erhöhen die Qualität der Software und Fehler werden frühzeitig erkannt. Sie lassen sich gut als Teil eines Merge Request-Workflows umsetzen. Die Maintainer tragen die Verantwortung für hinzugefügte Änderungen.
