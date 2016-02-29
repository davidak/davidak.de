.. date: 2013/06/16 18:06
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
        description => 'Viele sinnlose Daten, nur zum Testen.',
    );

    foreach $i (0..100) {
        $rss->add_item(
            title => "Test Nr. $i",
            link => "http://davidak.de/rss-test/test-$i",
            description => 'Ein kleiner Test.',
            category => ['Computer', 'Internet', 'Perl'],
            pubDate => strftime('%a, %d %b %Y %H:%M:%S %z', localtime(time()))
        );
    }
    $rss->save('test.rss');
