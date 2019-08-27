# davidak.de

Dies ist der Quelltext meiner persönlichen Webseite.

Es wird eine statische Seite mit [Nikola](https://getnikola.com/) generiert.

Auch die Konfiguration des Webservers ([Caddy](https://caddyserver.com/)) ist in Form eines [Caddyfile](https://github.com/davidak/davidak.de/blob/master/files/Caddyfile) enthalten.

Die [Version 12](https://github.com/davidak/davidak.de/milestones/12) befindet sich noch in der Entwicklung, ist aber schon online.

Wie die vorherigen Versionen aussahen kannst du auf https://davidak.de/rueckblick-webseite/ sehen.

Bei Fragen gerne bei mir melden. Kontaktmöglichkeiten findest du auf besagter Webseite.

## Deployment

Führe `nix-shell` aus, um eine temporäre Shell mit allen benötigten Abhängigkeiten zu erhalten.
Dazu muss nur der [Nix package manager](https://nixos.org/nix/) installiert sein.

Mit diesen beiden Befehlen wird die Webseite gebaut und auf den Server deployt.

    nikola build && nikola deploy

## Publish to [IPFS](https://ipfs.io/)

    ipfs add -r output/
    ipfs name publish SITE_HASH
