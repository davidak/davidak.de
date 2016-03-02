.. title: DokuWiki zu Markdown und reStructuredText konvertieren
.. slug: dokuwiki-zu-markdown-und-restructuredtext-konvertieren
.. date: 2016-03-02 21:06:47 UTC+01:00
.. tags: 
.. link: 
.. description: 
.. type: text

Diese Seite beschreibt die Konvertierung von Inhalten aus `DokuWiki <https://www.dokuwiki.org/>`_ nach `Markdown <http://markdown.de/>`_ und das nochmal nach `reStructuredText <https://de.wikipedia.org/wiki/ReStructuredText>`_, um es mit einem `StaticSiteGenerator <http://blog.rapsli.ch/posts/2013/2013-09-10-was-ist-ein-static-site-generator.html/>`_ zu verwenden. Ich benutze `Nikola <https://getnikola.com/>`_, es gibt aber auch `hunderte andere <https://www.staticgen.com/>`_!

Ich hab hier DokuWiki *Release 2013-05-10 "Weatherwax"*, möglicherweise funktioniert die Anleitung mit anderen Versionen nicht.

Im Verzeichnis von DokuWiki das `git <https://git-scm.com/>`_ Repository von `DokuWiki-to-Markdown-Converter <https://github.com/ludoza/DokuWiki-to-Markdown-Converter>`_ klonen.

.. code-block:: bash

	git clone https://github.com/ludoza/DokuWiki-to-Markdown-Converter.git
	cd DokuWiki-to-Markdown-Converter/
	mkdir markdown
	for i in $(find ../data/pages/ -name "*.txt") ; do php convert.php $i ; done
	find ../data/pages/ -name "*.md" -exec mv {} markdown/ \;

Das Script erstellt die Markdown-Dateien direkt im Quellverzeichnis, daher verschieben wir sie nach :code:`markdown/`. Das Verzeichnis kann dann mit einem FTP-Programm oder per rsync auf den eigenen Computer runtergeladen werden.

Ich möchte aus Markdown dann noch reStructuredText machen. Das geht ganz einfach mit `Pandoc <http://pandoc.org/>`_.

Im runtergeladenen Verzeichnis führe ich diese Befehle auf der Kommandozeile aus:

.. code-block:: bash

	mkdir rst
	for i in $(find . -name "*.md") ; do pandoc -f markdown -s --wrap=none -t rst $i > rst/$(basename $i | cut -d'.' -f1).rst ; done

Für Nikola fehlen dann noch Metadaten. Der Titel wird automatisch aus der Überschrift genommen und Slug aus dem Dateinamen.

Fehlt noch Datum und Typ. Einfach mit folgender Syntax ganz oben einfügen::

	.. date: 2013-06-16 19:55
	.. type: text

Nun kann daraus mit Nikola (oder einem beliebigen anderen Static Site Generator) eine Webseite generiert werden.

Hinweis: `doku2html <https://github.com/dmerand/dlm-dot-bin/blob/master/doku2html>`_, was in `diesem Artikel <http://donaldmerand.com/code/2012/07/20/how-i-actually-convert-dokuwiki-to-latex.html>`_ empfohlen wird, funktionierte bei mir nicht.
