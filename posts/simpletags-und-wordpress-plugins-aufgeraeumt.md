<!--
.. title: SimpleTags und Wordpress Plugins aufgeräumt
.. slug: 459-simpletags-und-wordpress-plugins-aufgeraeumt
.. date: 2008-07-20 11:00:30
.. tags: Blog,Wordpress,In eigener Sache
.. description: 
.. type: text
-->

Jetzt gibt es endlich tolle Tags bei mir im Blog.
<!-- TEASER_END -->

Es gab zwar vorher Tags in den Artikeln, aber der Link führte ins Nichts.
Denn die Seiten, auf denen die Artikel angezeigt werden sollten zu dem entsprechenden Tag war kaputt.
Ich hatte schon oft überlegt das ganz wegzulassen, aber wollte die Arbeit nicht umsonst gemacht haben.

Jetzt habe ich von [SimpleTagging](http://wordpress.org/extend/plugins/simple-tagging-plugin/) zu [SimpleTags](http://wordpress.org/extend/plugins/simple-tags/) gewechselt.
Da wird jetzt die Tagging-Funktion von Wordpress genutzt und erweitert.
Dadurch funktioniert jetzt alles, sogar eine [TagCloud](http://davidak.de/blog/?page_id=458).
Ich hab die Anzahl der Tags **auf 512 reduziert**, da die Seite sonst superlang wäre.
Ich hab im Moment nämlich **1281 Tags**.

Der Umstieg war super leicht.
Einfach das neue Plugin **installieren**, **konfigurieren** und die alten Tags **importieren**.
Dann musste ich noch das Theme etwas bearbeiten.

Auch um das **NoFollow** Attribut in dem Kommentaren loszuwerden hab ich ein neues Plugin.
Anstatt [Follow-URL](http://blog.taragana.com/index.php/archive/wordpress-15-plugin-strip-nofollow-tag-from-comment-urls/) benutze ich jetzt [NoFollow Free](http://www.michelem.org/wordpress-plugin-nofollow-free/).
Das hat mehr Einstellungen, z.B. dass erst ab 5 Kommentaren das Attribut entfernt wird.

Auch ein Plugin zum Loggen von Suchmaschinenbegriffen, nach denen die Leute suchen, wenn sie auf meinen Weblog kommen, hab ich gelöscht.
Dafür benutze ich seit längerem **Google Analytics**.

[runPHP](http://www.nosq.com/blog/runphp/) brauch ich auch nicht mehr, da alle meine Seiten auch ohne PHP funktionieren und das nur ein Sicherheitsrisiko darstellt.

Auch ein Plugin zum [Anzeigen](/blog/148-kommentareartiekl-grafik/), wann die Artikel veröffentlicht wurden und die Zeit der Kommentare wurde gelöscht.

Auch habe ich mein [Mailformular](http://davidak.de/blog/?page_id=6) aktualisiert, so das es jetzt mit [Akismet](http://akismet.com/) überprüft wird.
Ich habe immer 5-20 Mails am Tag mit **Spam** bekommen, die mich nicht gestört haben, da mein Mailprogramm diese zuverlässig gefiltert hat.
Jetzt ist aber schluss damit.
Danke auch an [Tobbis Blog](http://www.tobbis-blog.de/internet/wordpress/2007-05-02-wordpress-plugin-pxsmail-mit-askimet-de/) für den Tipp.

Die Ganzen Plugins von [Lester Chan](http://lesterchan.net/portfolio/programming/php/) hatten auch eine Aktualisierung nöting.

Jetzt ist alles aktuell und sollte super funktionieren.
