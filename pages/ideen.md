.. title: Ideen
.. slug: ideen
.. date: 2016-05-11 21:43:24 UTC+02:00
.. tags:
.. description:
.. type: text

Ich hab viele (gute) Ideen, aber zu wenig Zeit alle zeitnah umzusetzen. Vielleicht inspiriert dich etwas davon!

# GTA like Game using Real World Maps from OpenStreetMap

- i had the idea as i saw that someone used [OSM2World](http://osm2world.org/) to generate a [map for SuperTuxKart](https://wiki.openstreetmap.org/wiki/SuperTuxKart)
- [here](https://www.youtube.com/watch?v=780Ia5e8LHQ) someone had the same idea and started implementing it in Unity
- there are other [videos on youtube](https://www.youtube.com/watch?v=GLkOQpjzs_o) in which people used OSM data to generate game maps (in Unity)
- i would use an open source game engine and publish the game as open source software, so the community can help enhance it
- the [OSM map of the whole planet](https://planet.openstreetmap.org/) is currently (2018-02-04) 63 GB big, so you might want to use only [your city or country](https://download.geofabrik.de/)
- such game can also be used for learning to drive some way you want to travel or just drive around your city

# Warteschleifen DJ

Kunst-Performance, bei der ein DJ statt Musik bei Hotlines anruft und somit die Warteschleifenmusik spielt.

Besonders witzig ist, wenn jemand ran geht und der DJ sagt: "DJ ... hier, ich hab nur die Warteschleifenmusik gebraucht. Sie haben noch die Möglichkeit 800 Leute auf der Party zu grüßen!"

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

Technisch nicht möglich mit den meisten Hubs:

>The circuitry in the USB hardware commonly used in desktop and laptop computers is not capable of turning off power to USB ports.
>The same is true of many hubs.  There are some hubs which _can_ turn off power to ports, but relatively few brands support this.  I don't know which ones do.

**Alan Stern** on linux-usb Mailinglist [[1](https://marc.info/?l=linux-usb&m=133519454726017&w=2)]

Es kann mit [hubpower](https://github.com/heiher/hubpower) getestet werden.

[YKUSH](https://www.yepkit.com/products/ykush) ist ein 3-Port Hub, bei dem die Ports einzeln abschaltbar sind. Wie schnell habe ich per E-Mail angefragt. (06.10.16)

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

Die Idee, eine Seite mit Ideen zu veröffentlichen, hab ich von [lastlog.de](https://lastlog.de/wiki/index.php/IdeenEcke).
