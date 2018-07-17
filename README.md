Dies ist der Quelltext meiner privaten Webseite.

Es wird eine statische Seite mit [Nikola](https://getnikola.com/) generiert.

Auch die Konfiguration des Webservers ([Caddy](https://caddyserver.com/)) ist in Form eines [Caddyfile](https://github.com/davidak/davidak.de/blob/master/files/Caddyfile) enthalten.

Die [Version 12](https://github.com/davidak/davidak.de/milestones/12) befindet sich noch in der Entwicklung, ist aber schon online.

Wie die vorherigen Versionen aussahen kannst du auf https://davidak.de/rueckblick-webseite/ sehen.

Bei Fragen gerne bei mir melden. Kontaktmöglichkeiten findest du auf besagter Webseite.

## Deployment

Mit folgendem Befehl startest du eine Shell, in der Nikola verfügbar ist. Nikola wird dabei nicht persistent auf dem System installiert. Das funktioniert derzeit nicht unter macOS ([#32087](https://github.com/NixOS/nixpkgs/issues/32087)), nur auf Linux. Damit das funktioniert muss der Paketmanager [Nix](https://nixos.org/nix/) auf deinem System installiert sein.

    nix run '((import <nixpkgs> {}).python3.withPackages (ps: with ps; [Nikola micawber]))'

Mit diesen beiden Befehlen wird die Webseite gebaut und auf den Server deployt.

    nikola build && nikola deploy

Eventuell ist es nötig, die zuvor generierten Daten zu löschen, da sie zum Teil read-only sind.

    rm -rf output/

## Publish to [IPFS](https://ipfs.io/)

    ipfs add -r output/
    ipfs name publish SITE_HASH
