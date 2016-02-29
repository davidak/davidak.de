.. date: 2013/06/16 20:15
.. type: text

Real Kassenzettel Reverse Engeneering
=====================================

Ein kleines Projekt um zu lernen, wie man einen Barcode rekonstruiert. Es geht mir nicht um Real sondern um die Vorgehensweise dabei. Ich hatte einen Barcodescanner zur Verfügung, ein `Online Tool <http://online-barcode-reader.inliteresearch.com/>`_ kann aber auch benutzt werden.

Barcodes
--------

::

    ## AAA BB CCCC YYMMDD DDD EEEE FFFFFF GGGGGG
    01 990 06 0099 100909 404 8939 000002 000000
    02 990 03 0164 100820 404 8939 000001 000000
    03 990 08 0013 100813 404 8939 000004 000000
    04 990 10 0060 100806 404 8939 000001 000000
    05 990 05 0314 100803 404 8939 000003 000000
    06 990 08 0004 100831 404 8939 000001 000000
    07 990 02 0032 100907 404 8939 000001 000000
    08 990 10 0283 100909 404 8939 000001 000000
    09 990 06 0114 100921 404 8939 000001 000000
    10 990 06 0164 100930 404 8939 000005 000000

| A ?
| B Kasse
| C ? Kassierer/in, Kassenzettel Nr. (Pro Tag pro Kasse)
| D ?
| E ? Filiale
| F Payback Punkte
| G ?
| 
| Y Jahr
| M Monat
| D Tag

Beispiele
---------

.. thumbnail:: /images/kassenzettel.png

Kassenzettel #01
~~~~~~~~~~~~~~~~

Barcode: 9900600991009094048939000002000000

Kassenzettel #02
~~~~~~~~~~~~~~~~

Barcode: 9900301641008204048939000001000000

Kassenzettel #03
~~~~~~~~~~~~~~~~

Barcode: 9900800131008134048939000004000000

Kassenzettel #04
~~~~~~~~~~~~~~~~

Barcode: 9901000601008064048939000001000000
