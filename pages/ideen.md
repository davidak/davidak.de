.. title: Ideen
.. slug: ideen
.. date: 2016-05-11 21:43:24 UTC+02:00
.. tags:
.. description:
.. type: text

Ich hab viele (gute) Ideen, aber zu wenig Zeit alles umzusetzen. Vielleicht hast du Zeit und Lust dazu?

# Distributed zero-effort system monitoring

- systemd knows state of services, can restart failed services
- [collectd](https://collectd.org/) gathers statistics about the system and provides simple threshold checking
- there is also [StatsD](https://github.com/etsy/statsd) for that
- [Grafana](http://grafana.org/) draws beautiful graphs
- my idea is to combine that into a distributed network where the nodes organize the monitoring of each other dynamically
- one node checks another node, if the check fails, another nodes approves the state
- the community of "the indie web" can help monitoring each other nodes, data should remain private (zero-knowledge)
- failed services, high resource usage or offline nodes should trigger notifications to their admin (so foreign nodes needs to know the state of my nodes to mail me)
- it should be possible to look at performance stats and service states over time of offline nodes (redundant data on network)
- maybe store data on [IPFS](https://ipfs.io/)?

some links i found:

- <http://blog.joncairns.com/2014/09/monit-style-alerts-for-systemd/>
- <https://asylum.madhouse-project.org/blog/2015/09/09/systemd-job-monitoring/>
- <https://github.com/kylemanna/systemd-utils>
- <http://delaat.net/rp/2014-2015/p33/report.pdf>
- <http://0pointer.de/blog/projects/watchdog.html>

# Entropie für Bitcoin verkaufen

# Software für NixOS paketieren

- [Icinga 2](https://www.icinga.org/products/icinga-2/)
- [Icinga 1](https://github.com/Icinga/icinga-core)

# ownCloud Account Manager (Desktop Application)

Use the [Provisioning API](https://doc.owncloud.org/server/8.2/admin_manual/configuration_user/user_provisioning_api.html) through [pyocclient](https://github.com/owncloud/pyocclient).

# USB-Lauflicht

Mehrere USB-LEDs an ein USB-Hub und per Python-Script deaktivieren/aktivieren.

<http://stackoverflow.com/questions/4702216/controlling-a-usb-power-supply-on-off-with-linux>

# Shared Hosting-Provider Simulator als Browsergame

Aussehen wie eine Konfigurationsoberfläche wie Confixx, Plesk, ISP-Config oder Liveconfig.

# Autoresponder-Tennis

Einen E-Mail-Account mit Autoresponder einrichten und eine E-Mail an einen anderen Account schicken, der ebenfalls einen Autoresponder eingerichtet hat auf den ersten.

# DHCP-Battle

Verschiedene DHCP-Server treten gegeneinander an, wer als erstes eine IP vergibt.

# Film: Person verliebt sich in Einbrecher

# Zahlensender

Python-Script generier Zahlen und oder Worte und sendet die Ausgabe per Sprachsynthese als Webradio.

# Aluhut mit Katzenohren

# Mittelalter-Rap

Instrumentale von diversen Mittelalterbands nehmen und krasse Gauner (=Gangster) Texte.

# Feuer Grafiti

Stift mit Lampenöl füllen...

# Artenschutz von Krankheiten?

# Video: Grund für Windows

Der einzige Grund Windows zu benutzen ist, dass es dort Software gibt, die nur dort laufen.
Zum Beispiel die [Furzmaschine V1 Professional](http://buschmaus.npage.de/furzmaschine.html).

*MIT LAND*

Hahaha

# Kaffee Eis (?)

# Video: Wecker mit Atombombe

"Damit wird jeder wach."

---

Die Idee, so eine Seite zu veröffentlichen, hab ich von [lastlog.de](https://lastlog.de/wiki/index.php/IdeenEcke).
