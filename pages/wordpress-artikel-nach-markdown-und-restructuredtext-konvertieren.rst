.. title: Wordpress Artikel nach Markdown konvertieren
.. slug: wordpress-artikel-nach-markdown-konvertieren
.. date: 2016-03-03 04:52:53 UTC+01:00
.. tags: Wordpress, Markdown
.. description: 
.. type: text

Ich möchte die Artikel aus meinem `Wordpress <https://de.wordpress.org/>`_ Blog mit `Nikola <https://getnikola.com/>`_ verwenden. Der Static Site Generator unterstützt `Markdown <http://markdown.de/>`_, `reStructuredText <https://de.wikipedia.org/wiki/ReStructuredText>`_ und andere Formate. Für Blogartikel gefällt mir Markdown am besten. Bei technischen Dokumentationen verwende ich lieber reStructuredText.

Da der `integrierte Wordpress Import <https://getnikola.com/handbook.html#importing-your-wordpress-site-into-nikola>`_ derzeit nicht funktioniert (Bugreport: `#2261 <https://github.com/getnikola/nikola/issues/2261>`_) habe ich mich nach Alternativen umgesehen. Nichts hat funktioniert, bis auf `Exitwp <https://github.com/thomasf/exitwp>`_.

Das Tool konvertiert einen `XML-Export von Wordpress <https://en.support.wordpress.com/export/>`_ nach Markdown. Die Metadaten sind für `Jekyll <http://jekyllrb.com/>`_, einem anderen Static Site Generator.

Allerdings funktioniert hier der `Jekyll-Import <https://plugins.getnikola.com/#import_jekyll>`_ von Nikola. Das Plugin lässt sich mit :code:`nikola plugin -i import_jekyll` installieren.

Um es importieren zu können musste ich noch eine neue, leere Jekyll-Seite erstellen. Der Import braucht die Datei :code:`_config.yml`.
Es genügt aber die `Vorlage von Github <https://github.com/jekyll/jekyll/blob/master/lib/site_template/_config.yml>`_ runterzuladen. Ordnerstruktur muss folgendermaßen aussehen::

	wordpress-export/
	├── _config.yml
	└── _posts
	    └── 2016-03-05-welcome-to-jekyll.markdown

Der Import erstellt einen neuen Ordner. Den könnte man als neue Seite benutzen oder die Posts aus dem Unterordner :code:`posts/` in seiner bestehenden Nikola Webseite nutzen.

.. code-block:: bash

	$ nikola import_jekyll ~/wordpress-export/
	[2016-03-05T15:34:11Z] INFO: init: Created empty site at new_site.
	[2016-03-05T15:34:12Z] INFO: Nikola: Configuration will be written to: new_site/conf.py
	/Users/davidak/wordpress-export/_posts
	[2016-03-05T15:34:12Z] INFO: import_jekyll: Importing post /Users/davidak/wordpress-export/_posts/2016-03-05-welcome-to-jekyll.markdown
	[2016-03-05T15:34:12Z] INFO: import_jekyll: Writing post new_site/posts/welcome-to-jekyll.markdown
