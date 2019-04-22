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

# Wortliste erstellen

Es gibt im Internet diverse Wortlisten, wobei die Angabe der Häufigkeit für uns besonders hilfreich ist:

- <http://wortschatz.uni-leipzig.de/html/wliste.html>
- <http://corpora2.informatik.uni-leipzig.de/download.html>
- <http://www1.ids-mannheim.de/kl/projekte/methoden/derewo.html>
- <http://clarin.bbaw.de:8088/fedora/objects/dwds:2/datastreams>
- <https://github.com/hermitdave/FrequencyWords>
- <https://de.wikipedia.org/wiki/Liste_der_h%C3%A4ufigsten_W%C3%B6rter_der_deutschen_Sprache>
- <https://de.wiktionary.org/wiki/Wiktionary:Fehlende_Eintr%C3%A4ge/WP_Top1000>
- <https://dumps.wikimedia.org/backup-index.html>
- <http://world.std.com/~reinhold/diceware_german.txt>
- <https://sourceforge.net/projects/germandict/>
- <http://www.netzmafia.de/software/wordlists/deutsch.txt>
- <http://cornelia.siteware.ch/wortschatz/themwortlist.html#sammlung>
- <http://dict.tu-chemnitz.de/de-en/lists/index.html>

Diese Listen enthalten meist nicht nur Wörter, sondern auch Metadaten wie Häufigkeit oder grammatikalische Eigenschaften. Daher müssen wir sie bereinigen. Das geht einfach auf der Kommandozeile mit standard Werkzeugen wie  `awk`, `sed`, `sort` und `uniq`.

Als Beispiel nehme ich die Datei [deu_news_2015_3M.tar.gz](http://corpora2.informatik.uni-leipzig.de/downloads/deu_news_2015_3M.tar.gz) vom [Wortschatz-Projekt der Universität Leipzig](http://wortschatz.uni-leipzig.de/), die einen Textkorpus von 3 Millionen Sätzen aus deutschen Zeitungen enthält.

Ich entpacke das Archiv und erhalte mehrere Dateien:

    tar xzf deu_news_2015_3M.tar.gz
    cd deu_news_2015_3M

Uns interessiert hier nur die Datei **deu_news_2015_3M-words.txt**, die einzelne Wörter nach ihre Häufigkeit in den Texten sortiert enthält.

Nur die Wörter extrahieren:

    awk -F$'\t' '{print $2}' deu_news_2015_3M-words.txt > 1

Alle Wörter löschen, die Zeichen enthalten, die nicht diesen Zeichengruppen angehören: a-z, A-Z, äöüÄÖÜß, also Zahlen und Sonderzeichen inkl. Leerzeichen:

    sed -i -E '/[^a-zA-ZäöüÄÖÜß]/d' 1

Abkürzungen entfernen:

    sed -i -E '/[A-ZÄÖÜ]{2,}/d' 1

Alle Zeilen mit nur einem Zeichen entfernen:

    sed -i '/^.$/d' 1

Alle leeren Zeilen entfernen:

    sed -i '/^\s*$/d' 1

Aus der Datei nehmen wir jetzt nur die ersten 200.000 Zeilen:

    head -n200000 1 > deu_news_2015_3M_wortliste.txt

Das ganze kann natürlich auch in einen Einzeiler gepackt werden:

    cat deu_news_2015_3M-words.txt | awk -F$'\t' '{print $2}' | sed -E "/[^a-zA-ZäöüÄÖÜß]/d" | sed -E '/[A-ZÄÖÜ]{2,}/d' | sed '/^.$/d' | sed '/^\s*$/d' | head -n200000 > deu_news_2015_3M_wortliste.txt

Um Wörter auszusortieren, die nur in Zeitungen besonders häufig vorkommen, filtern wir die Liste nochmal durch das Wiktionary.

Dazu laden wir den [aktuellen Datenbank-Dump](https://dumps.wikimedia.org/backup-index.html) der **dewiktionary** mit dem Namen **dewiktionary-20160801-pages-articles.xml.bz2** herunter und extrahieren die einzelnen Wörter:

    bzcat dewiktionary-20160801-pages-articles.xml.bz2 | grep '<title>[^[:space:][:punct:]]*</title>' | sed 's:.*<title>\(.*\)</title>.*:\1:' > dewiktionary_words.txt

Quelle: <http://stackoverflow.com/a/9856465/2611995>

Nun führen wir die beiden Listen in eine Datei zusammen, sortieren die Zeilen alphabetisch, zählen doppelte Zeilen und sortieren nochmal nach Häufigkeit der Wörter. Hier können auch weitere Wortlisten zusammengefügt werden. Nun nehmen wir uns nur die Wörter, die 2 oder mehr mals vorkommen. Dadurch haben wir nur Wörter, die auch im Wörterbuch ([Wiktionary](https://de.wiktionary.org/)) vorkommen. (im Fall der 2 Listen)

    cat deu_news_2015_3M_wortliste.txt dewiktionary_words.txt | sort | uniq -c | sort -nr | awk '$1 >= 2' | awk '{print $2}' | sort > wortliste.txt

So erhalten wir eine Liste mit 82.505 Wörtern.

# Passphrase generieren

    xkcdpass --wordfile wortliste.txt --min 2 --max 8 --delimiter - --numwords 5 --verbose
    Your word list contains 31406 words, or 2^14.94 words.
    A 5 word password from this list will have roughly 74 (14.94 * 5) bits of entropy,
    assuming truly random word selection.
    feurige-Amtsarzt-arger-Menü-abstruse

Die generierte Passphrase besteht aus 5 zufälligen Wörtern aus unserer Liste mit mindestens 2 Zeichen und maximal 8, wodurch sich die Anzahl der tatsächlich genutzten Wörter nochmal verkleinert. Durch den Parameter `--verbose` wird auch die Entropie angezeigt, in diesem Fall 74 bit. Diese Entropie hat die Passphrase aber nur, wenn du die 1. nimmst und nicht etwa solange neue generierst, bis dir eine gefällt.

# Entropie berechnen

Wie viel Entropie eine Passphrase braucht hängt vom Angriffsszenario ab, gegen das man sich schützen will.

Im Film Citizenfour (2014) sagt Edward Snowden: "Assume your adversary is capable of one trillion guesses per second."

Quelle: [Transcript](http://cryptome.org/2015/02/edwards-010-014.pdf)

Was bedeutet, dass die NSA 2014 in der Lage war eine Billion (10<sup>12</sup> oder 1.000.000.000.000) PGP-Passphrases in der Sekunde auszuprobieren.

Zur Sicherheit gehen wir mal von der hundertfachen Leistung aus. Laut [dieser Visualisierung](https://www.reddit.com/r/dataisbeautiful/comments/322lbk/time_required_to_bruteforce_crack_a_password/) dauert es mindestens 191,5 Jahre, maximal 383 Jahre eine Passphrase mit 80 bit zu knacken. Da ich so lange nicht lebe, sollte es sicher genug sein.



Für einen solchen [Brute-Force-Angriff](https://de.wikipedia.org/wiki/Brute-Force-Methode) muss der Angreifer Zugriff auf die gehashte Passphrase haben. Er muss also Zugriff auf den Computer haben.

Wenn der Computer aus ist und deine Benutzerdaten verschlüsselt sind, muss er die Passphrase cracken, um die Daten zu entschlüsseln. Wenn er sich durch eine Sicherheitslücke Zugriff verschafft, während du eingeloggt bist, die Daten also bereits entschlüsselt sind, hat er auf alles Zugriff. Genau so, wenn du keine Verschlüsselung nutzt.

Entweder er dringt in deine Wohnung ein und baut die Festplatte aus dem Computer aus oder er verschafft sich durch eine Sicherheitslücke Zugriff auf dem Computer.





Diceware passphrases are great for when you’re typing them into your computer to decrypt something locally, like your hard drive, your PGP secret key, or your password database.

For logging in to websites and other servers, use a password database.

[KeePassX](https://www.keepassx.org/) or [1Password](https://1password.com/)


Ein sehr sicheres Passwort hat laut [dieser Visualisierung](https://www.reddit.com/r/dataisbeautiful/comments/322lbk/time_required_to_bruteforce_crack_a_password/) 82 bit Entropie.

Die Entropy eines Passworts lässt sich mit folgender Formel berechnen:

**entropy = log2(S<sup>L</sup>)**

Wobei **S** die Anzahl der Wörter in der Wortliste und **L** die Anzahl der Wörter aus der die Passphrase besteht.

Quelle: <https://ritcyberselfdefense.wordpress.com/2011/09/24/how-to-calculate-password-entropy/>

Die Berechnung lässt sich einfach mit Python durchführen:

    $ python3
    >>> from math import pow, log2
    >>> log2(pow(7776,5))
    64.62406251802891

Für das Passwort werden hier 5 zufällige Wörter aus einer Wortliste mit 7.776 Wörtern (englische [Diceware](http://world.std.com/~reinhold/diceware.html) Liste) benutzt.

Wir kommen auf eine Entropie von 64 bit.

Das Programm **xkcdpass** berechnet die Entropie, wenn der Parameter `-V` bzw. `--verbose` angehängt wird.

Eine Passphrase ist sicher, auch wenn die Wortliste bekannt ist! Um noch etwas sicherer zu sein werde ich meine Wortliste trotzdem nicht veröffentlichen. Ich erkläre aber, wie man sich selbst eine zusammenstellen kann.







# Passwortmanager benutzen





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
