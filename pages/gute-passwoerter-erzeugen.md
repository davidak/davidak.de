<!--
.. title: Gute Passwörter erzeugen [WIP]
.. slug: gute-passwoerter-erzeugen
.. date: 2016-07-31 14:41:35 UTC+02:00
.. tags: Passwort, Passphrase, Sicherheit
.. description: Der Artikel beschreibt, wie eine sichere Passphrase mit dem Programm xkcdpass nach der bekannten Methode aus dem xkcd-Comic generiert werden kann.
.. type: text
.. status: draft
-->

# Was zeichnet ein gutes Passwort aus?

Ein gutes Passwort ist

- ausreichend sicher ([Entropie](https://de.wikipedia.org/wiki/Entropie_(Informationstheorie)))
- dennoch leicht zu merken und einzugeben ([Ergonomie](https://de.wikipedia.org/wiki/Ergonomie))

Bisher haben wir gelernt, dass Passwörter komplex sein müssen, um sicher zu sein. Sie sollen aus kleinen und großen Buchstaben, Sonderzeichen und Zahlen bestehen. [1] Dadurch erhöht sich zwar die Entropie, allerdings sind sie schwer zu merken und schwer einzugeben (z.B. auf einem Smartphone).

Randall Munroe zeigt in seinem Comic verständlich, dass eine Passphrase aus mehreren zufälligen Wörtern sehr viel sicherer ist und dazu noch leicht zu merken!

![Password Strength](/images/password_strength.png)

Bild von [xkcd.com](https://xkcd.com/936/)

# Passwortgenerator installieren

Der Comic ist so populär, dass die Methode in mehreren Programmen umgesetzt wurden. Ich benutze [xkcdpass](https://github.com/redacted/XKCD-password-generator), eine Implementierung in [Python](https://www.python.org/).

Installation mit [pip](https://pip.pypa.io/en/stable/):

    pip install xkcdpass

Es bringt eine Liste von derzeit 65.354 englischen Wörtern mit. Wir möchten natürlich eine Liste mit deutschen Wörtern.

# Wortliste besorgen

Im Internet gibt es diverse Wortlisten. Ich habe ein Script geschrieben, dass einige runterläd, sie bereinigt und zusammenführt, so dass wir eine Textdatei mit über 200.000 Wörtern erhalten.

Das Script und die fertige Wortliste findest du auf GitHub: https://github.com/davidak/wortliste

Download der Wortliste mit:

    curl -O https://raw.githubusercontent.com/davidak/wortliste/master/wortliste.txt

# Passphrase generieren

    xkcdpass --wordfile wortliste.txt --min 2 --max 8 --valid-chars '[a-zA-ZäÄöÖüÜ]' --delimiter - --numwords 5 --verbose
    Your word list contains 52149 words, or 2^15.67 words.
    A 5 word password from this list will have roughly 78 (15.67 * 5) bits of entropy,
    assuming truly random word selection.
    Ölmantel-dualen-Luiz-Helwig-Tagger

Die generierte Passphrase besteht aus 5 zufälligen Wörtern aus unserer Liste mit mindestens 2 Zeichen und maximal 8 und bestehend aus den Buchstaben a-z, A-Z, ä, Ä, ö, Ö, ü, und Ü, wodurch sich die Anzahl der tatsächlich genutzten Wörter nochmal verkleinert. Durch den Parameter `--verbose` wird auch die Entropie angezeigt, in diesem Fall 78 bit. Diese Entropie hat die Passphrase aber nur, wenn du die 1. nimmst und nicht etwa solange neue generierst, bis dir eine gefällt.

# Entropie berechnen

Die Entropy einer Passphrase lässt sich mit folgender Formel berechnen:

**entropy = log2(S<sup>L</sup>)**

Wobei **S** die Anzahl der Wörter in der Wortliste und **L** die Anzahl der Wörter aus der die Passphrase besteht.

Quelle: <https://ritcyberselfdefense.wordpress.com/2011/09/24/how-to-calculate-password-entropy/>

Die Berechnung lässt sich einfach mit Python durchführen:

    $ python3
    >>> from math import pow, log2
    >>> log2(pow(7776,5))
    64.62406251802891

Für die Passphrase werden hier 5 zufällige Wörter aus einer Wortliste mit 7.776 Wörtern (englische [Diceware](http://world.std.com/~reinhold/diceware.html) Liste) benutzt.

Wir kommen auf eine Entropie von 64 bit.

Eine Passphrase ist sicher, auch wenn die Wortliste bekannt ist!

# Angriffsszenario

Wie viel Entropie eine Passphrase braucht, um sicher zu sein, hängt vom Angriffsszenario ab.

## Webmail Login

## Windows Benutzer Login

## Ubuntu 16.04 (Linux) Benutzer Login

## Ubuntu 16.04 (Linux) /etc/shadows

Szenario: Der Angreifer hat die /etc/shadows Datei, in der die gehashten Benutzer-Passwörter eines Linux-Systems stehen. Die Datei kann z.B. ausgelesen werden, wenn der Angreifer physikalischen Zugriff auf das System hat und die Festplatte ausbaut oder das System mit einer Live-CD bootet. Wenn das Benutzerverzeichnis nicht verschlüsselt ist hat er in dem Fall auch Zugriff auf alle Dateien des Benutzers und braucht dessen Passwort garnicht knacken.

## SSH Login

## SSH Login (mit Fail2Ban)

Ubuntu Paket

## KeePass Passwortmanager

Bei KeePass (Windows) oder KeePassX (Plattformunabhängig)

cost hochsetzen!!!


## PGP Private Key

Szenario: Der Angreifer hat deinen PGP Private Key, der allerdings durch eine Passphrase geschützt ist. Er versucht diese mit einem [Brute-Force-Angriff](https://de.wikipedia.org/wiki/Brute-Force-Methode) zu knacken.

Im Film Citizenfour (2014) sagt [Edward Snowden](https://de.wikipedia.org/wiki/Edward_Snowden):

>Assume your adversary is capable of one trillion guesses per second.

Quelle: [Transcript](http://cryptome.org/2015/02/edwards-010-014.pdf)

Was bedeutet, dass die NSA 2014 in der Lage war eine Billion (10<sup>12</sup> oder 1.000.000.000.000) PGP-Passphrases in der Sekunde auszuprobieren.

Zur Sicherheit gehen wir mittlerweile mal von der hundertfachen Leistung aus. Laut [dieser Visualisierung](https://www.reddit.com/r/dataisbeautiful/comments/322lbk/time_required_to_bruteforce_crack_a_password/) dauert es mindestens 191,5 Jahre, maximal 383 Jahre eine Passphrase mit **80 bit** zu knacken. Da ich so lange nicht lebe, sollte es sicher genug sein.




Für einen solchen [Brute-Force-Angriff](https://de.wikipedia.org/wiki/Brute-Force-Methode) muss der Angreifer Zugriff auf die gehashte Passphrase haben. Er muss also Zugriff auf den Computer gehabt haben oder anderweitig an die Datei gekommen sein (gespeichert in der Cloud, per E-Mail verschickt, USB-Stick verloren, ...).



Wenn der Computer aus ist und deine Benutzerdaten verschlüsselt sind, muss er die Passphrase cracken, um die Daten zu entschlüsseln. Wenn er sich durch eine Sicherheitslücke Zugriff verschafft, während du eingeloggt bist, die Daten also bereits entschlüsselt sind, hat er auf alles Zugriff. Genau so, wie wenn du keine Verschlüsselung nutzt.

Entweder er dringt in deine Wohnung ein und baut die Festplatte aus dem Computer aus oder er verschafft sich durch eine Sicherheitslücke Zugriff auf dem Computer.





Diceware passphrases are great for when you’re typing them into your computer to decrypt something locally, like your hard drive, your PGP secret key, or your password database.

For logging in to websites and other servers, use a password database.

[KeePassX](https://www.keepassx.org/) or [1Password](https://1password.com/)


Ein sehr sicheres Passwort hat laut [dieser Visualisierung](https://www.reddit.com/r/dataisbeautiful/comments/322lbk/time_required_to_bruteforce_crack_a_password/) 82 bit Entropie.


# Passwortmanager benutzen

Ein paar Passphrases musst du im Kopf haben, alle weiteren kannst du in einem Passwortmanager speichern.

Merken solltest du dir:

- Computer Benutzerkonto
- Passwortmanager

Du solltest unbedingt ein Backup der Passwortmanager-Datenbank haben! So erlangst du wieder Zugriff auf alles, auch wenn dein Computer kaputt geht. Wenn das Backup-Medium verschlüsselt ist oder du die Datei in der Cloud speicherst, solltest du dir auch diese Passphrase merken.

Die Passphrases für alles andere (Webseiten Login, Online-Banking, Computerspiele Login, ...) kannst du direkt im Passwortmanager erzeugen. Hier kannst du problemlos auf über 100 bit Entropie gehen, in dem du eine Passphrase aus Kleinbuchstaben und Zahlen mit 20 Zeichen generierst. Die kannst du im Zweifel abtippen, ist aber sehr sicher.



http://password.optionfactory.net/

# Weiterführende Informationen und Quellen:

- <http://blog.webernetz.net/2013/07/30/password-strengthentropy-characters-vs-words/>

---

https://en.wikipedia.org/wiki/Brute-force_attack
https://en.wikipedia.org/wiki/Password_cracking
https://en.wikipedia.org/wiki/Password_strength
https://theintercept.com/2015/03/26/passphrases-can-memorize-attackers-cant-guess/

http://arstechnica.com/security/2012/12/25-gpu-cluster-cracks-every-standard-windows-password-in-6-hours/
http://security.stackexchange.com/questions/69374/is-an-80-bit-password-good-enough-for-all-practical-purposes/69378
http://security.stackexchange.com/questions/6095/xkcd-936-short-complex-password-or-long-dictionary-passphrase

https://www.explainxkcd.com/wiki/index.php/936:_Password_Strength
http://lifehacker.com/5937303/your-clever-password-tricks-arent-protecting-you-from-todays-hackers
https://de.wikipedia.org/wiki/Passwort
http://www.welivesecurity.com/deutsch/2016/05/06/warum-die-passphrase-besser-als-das-passwort-ist/
http://www.focus.de/digital/internet/geheimtipp-passphrasen-snowden-verraet-mit-diesem-trick-wird-ihr-passwort-unknackbar_id_4601886.html



https://diogomonica.com/posts/password-security-why-the-horse-battery-staple-is-not-correct/
https://blog.agilebits.com/2011/06/21/toward-better-master-passwords/
https://blog.agilebits.com/2011/08/10/better-master-passwords-the-geek-edition/


https://www.explainxkcd.com/wiki/index.php/936:_Password_Strength

http://blog.hellersearch.com/Blog/bid/141527/Is-Your-Password-Policy-Stupid

http://correcthorsebatterystaple.net/
https://bitbucket.org/jvdl/correcthorsebatterystaple/
https://github.com/jvdl/CorrectHorseBatteryStaple

[1]: http://www.sicherheit-macht-schule.de/Hintergruende/Privatsphaere/250_Starke_Passworter.htm
