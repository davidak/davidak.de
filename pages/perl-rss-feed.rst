.. date: 2013/06/16 18:06
.. updated: 2016-08-12 20:58:00 UTC+01:00
.. type: text

RSS-Feed mit Perl erzeugen
==========================

Source Code
-----------

.. code-block:: perl
    :number-lines:

    #!/usr/bin/perl -w
    use XML::RSS;
    use POSIX;

    my $rss = XML::RSS->new (version => '2.0');

    $rss->channel(
        title => 'Test RSS-Feed',
        link => 'http://davidak.de/',
        description => 'Ein RSS-Feed zum Testen.',
    );

    foreach $i (0..10) {
        $rss->add_item(
            title => "Test Nr. $i",
            link => "http://davidak.de/rss-test/test-$i",
            description => 'Ein kleiner Test.',
            category => ['Computer', 'Internet', 'Perl'],
            pubDate => strftime('%a, %d %b %Y %H:%M:%S %z', localtime(time()))
        );
        # für unterschiedliche Zeit
        sleep(1);
    }
    $rss->save('test.rss');

Abhängigkeiten installieren
---------------------------

.. code-block::

    cpan -i XML::RSS

Falls du keine Admin-Rechte hast brauchst du vermutlich `sudo` vor dem Befehl.

Ausführen
---------

.. code-block::

    perl rss.pl
    cat test.rss

Ausgabe
-------

.. code-block:: xml

    <?xml version="1.0" encoding="UTF-8"?>

    <rss version="2.0"
     xmlns:blogChannel="http://backend.userland.com/blogChannelModule"
    >

    <channel>
    <title>Test RSS-Feed</title>
    <link>http://davidak.de/</link>
    <description>Ein RSS-Feed zum Testen.</description>

    <item>
    <title>Test Nr. 0</title>
    <link>http://davidak.de/rss-test/test-0</link>
    <description>Ein kleiner Test.</description>
    <category>Computer</category>
    <category>Internet</category>
    <category>Perl</category>
    <pubDate>Fr, 12 Aug 2016 20:53:15 +0200</pubDate>
    </item>
    <item>
    <title>Test Nr. 1</title>
    <link>http://davidak.de/rss-test/test-1</link>
    <description>Ein kleiner Test.</description>
    <category>Computer</category>
    <category>Internet</category>
    <category>Perl</category>
    <pubDate>Fr, 12 Aug 2016 20:53:16 +0200</pubDate>
    </item>
    <item>
    <title>Test Nr. 2</title>
    <link>http://davidak.de/rss-test/test-2</link>
    <description>Ein kleiner Test.</description>
    <category>Computer</category>
    <category>Internet</category>
    <category>Perl</category>
    <pubDate>Fr, 12 Aug 2016 20:53:17 +0200</pubDate>
    </item>
    <item>
    <title>Test Nr. 3</title>
    <link>http://davidak.de/rss-test/test-3</link>
    <description>Ein kleiner Test.</description>
    <category>Computer</category>
    <category>Internet</category>
    <category>Perl</category>
    <pubDate>Fr, 12 Aug 2016 20:53:18 +0200</pubDate>
    </item>
    <item>
    <title>Test Nr. 4</title>
    <link>http://davidak.de/rss-test/test-4</link>
    <description>Ein kleiner Test.</description>
    <category>Computer</category>
    <category>Internet</category>
    <category>Perl</category>
    <pubDate>Fr, 12 Aug 2016 20:53:19 +0200</pubDate>
    </item>
    <item>
    <title>Test Nr. 5</title>
    <link>http://davidak.de/rss-test/test-5</link>
    <description>Ein kleiner Test.</description>
    <category>Computer</category>
    <category>Internet</category>
    <category>Perl</category>
    <pubDate>Fr, 12 Aug 2016 20:53:20 +0200</pubDate>
    </item>
    <item>
    <title>Test Nr. 6</title>
    <link>http://davidak.de/rss-test/test-6</link>
    <description>Ein kleiner Test.</description>
    <category>Computer</category>
    <category>Internet</category>
    <category>Perl</category>
    <pubDate>Fr, 12 Aug 2016 20:53:21 +0200</pubDate>
    </item>
    <item>
    <title>Test Nr. 7</title>
    <link>http://davidak.de/rss-test/test-7</link>
    <description>Ein kleiner Test.</description>
    <category>Computer</category>
    <category>Internet</category>
    <category>Perl</category>
    <pubDate>Fr, 12 Aug 2016 20:53:22 +0200</pubDate>
    </item>
    <item>
    <title>Test Nr. 8</title>
    <link>http://davidak.de/rss-test/test-8</link>
    <description>Ein kleiner Test.</description>
    <category>Computer</category>
    <category>Internet</category>
    <category>Perl</category>
    <pubDate>Fr, 12 Aug 2016 20:53:23 +0200</pubDate>
    </item>
    <item>
    <title>Test Nr. 9</title>
    <link>http://davidak.de/rss-test/test-9</link>
    <description>Ein kleiner Test.</description>
    <category>Computer</category>
    <category>Internet</category>
    <category>Perl</category>
    <pubDate>Fr, 12 Aug 2016 20:53:24 +0200</pubDate>
    </item>
    <item>
    <title>Test Nr. 10</title>
    <link>http://davidak.de/rss-test/test-10</link>
    <description>Ein kleiner Test.</description>
    <category>Computer</category>
    <category>Internet</category>
    <category>Perl</category>
    <pubDate>Fr, 12 Aug 2016 20:53:25 +0200</pubDate>
    </item>
    </channel>
    </rss>
