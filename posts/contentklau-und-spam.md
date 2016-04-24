<!--
.. title: Contentklau und Spam
.. slug: 460-contentklau-und-spam
.. date: 2008-07-26 11:00:39
.. tags: Blog,RSS-Feed,Wordpress,In eigener Sache,Internet
.. description: 
.. type: text
-->

Von Problemen eines Blogbetreibers und deren Lösung.
<!-- TEASER_END -->

Vor einiger Zeit habe ich Trackbacks von einem Blog bekommen, die im Spam gelandet sind. Das habe ich mir genauer angesehen und bemerkt, dass dieser Blogeintrag nicht nur den gleichen Titel wie einer von mir hatte, sondern der Inhalt eine eins zu eins kopiert ist.

![Mein Inhalt auf einem fremden Blog.](/images/contentklau.jpg)

Im ersten Moment hab ich mich ziemlich hilflos gefühlt, denn wie soll man diesen Menschen daran hindern, das fortan immer zu tun. Bis ich dann über Google auf [www.contentklau.de](http://www.contentklau.de/) gestoen bin.

Nach weiterer Recherche fand ich ein Plugin für Wordpress, dass sich [WP-(c)-Feed](http://bueltge.de/wp-feed-plugin/204/) nennt.

Da mein Content über meinen RSS-Feed geklaut wurde, ist das genau das richtige, denn an jeden Artikel im Feed wird eine Signatur angehängt mit einem digitalen Fingerabdruck. Dadurch kann ich geklauten Inhalt einfach über Suchmaschinen finden und aus irgendeinem Grund hat das zu dem Ergebnis geführt, dass mein Inhalt nicht mehr dort erscheint.

Ich hatte den Feed vom dem Blog abonniert und da kommt auch immer noch mindestens jede Stunde ein Artikel, der wohl einfach aus [Google Blogsearch](http://blogsearch.google.com/) kopiert wird.

Lustigerweise war eine Fehlermeldung auf dem Blog, wodurch man gesehen hat, das dort [MagpieRSS](http://magpierss.sourceforge.net/) benutzt wird.

Der Blog war komplett werbefrei, was mich zuerst verwundert hat, allerdings war er auf einer Subdomain. Auf der Hauptdomain war eine Website zum Thema Autos kaufen oder so, die zugeballert war mit Werbung.

Ich denke mal die wollten einen guten Pagerank durch die Trackbacks erhalten.

---

Weiter zum Thema **Spam im Blog**.

Spam in den Kommentaren ist klar. Jemand schreibt einen Kommentar und packt nen paar Links darein.

Das hab ich zum einen durch [Akismet](http://akismet.com/) gelöst, welches jeden Kommentar überprüft. Zum Anderen habe ich seit heute ein Captcha-System am laufen. Zuvor hatte ich das [Math Comment Spam Protection Plugin](http://sw-guide.de/wordpress/plugins/math-comment-spam-protection/), wo sich manche Spammer die Mühe gemacht haben, die Matheaufgabe zu lösen.

Jetzt muss jeder, der einen Kommentar schreibt, zwei englische Wörter eingeben. Ausser die, die angemeldete Member sind.

Das Tolle dabei ist, dass man dadurch alte Bücher digitalisiert. Mehr dazu findest du auf [recaptcha.net](http://recaptcha.net/).

Um sich als Member anzumelden, muss man auch diesen Captcha-Code eingeben. Allerdings dann nur einmal.

Denn mittlerweile hatten sich folgende Member angemeldet.

>ID #46: abumsLala  
>ID #13: adol77dai51  
>ID #34: Affecelowa  
>ID #35: Affecelowdv  
>ID #19: alina77vere9uk  
>ID #39: boodollra  
>ID #25: Braxiaweelealy  
>ID #44: BuyCheapSoftwareYY  
>ID #45: BuyCheapViagraCialisss  
>ID #48: CHEAPESTcialisVIAGRAgta  
>ID #54: CheapViagraCialissRX  
>ID #16: ComprarVIAGRAonlinejo  
>ID #50: DownloadAdobePhotoshopFREE  
>ID #43: DownloadCheapOEMfreeXX  
>ID #47: DownloadCheapOemStore  
>ID #32: hidaintak  
>ID #31: HodobialFoelif  
>ID #30: ImamsVorTasiab  
>ID #27: ken75muraski  
>ID #53: ManufactureOemSoftware  
>ID #28: OffencyLiffa  
>ID #36: orieldite  
>ID #41: PBSnet  
>ID #21: ralyjones25  
>ID #22: referaterer  
>ID #20: referaterr  
>ID #42: Smusekeksig  
>ID #29: Typeblueplyq  
>ID #49: ViagraCialislisCHEAPEST  
>ID #10: allstarMarco  
>ID #11: Coolmen  
>ID #23: Garfield  
>ID #40: jacob73kolp  
>ID #37: Julja  
>ID #38: muggel9262  
>ID #33: papererma  
>ID #17: VistaULTIMATEdownloadaPro  
>ID #7: xdfsd45oi  
>ID #18: Doomsday_AUT_  
>ID #14: TobiP.aus E.

Wenn ich dich aus Versehen mitgelöscht hab, kannst du dich gerne nochmal registrieren. Bei vielen hat man ganz klar gesehen, dass das nur Spam war, bei anderen war ich mir nicht sicher. Aber da diese Leute noch nie einen Kommentar geschrieben haben, hab ich die auch gelöscht.

Somit sollte es weder Spam in den Kommentaren noch als Member geben.
