.. date: 2014-03-26 00:08
.. type: text

Zwei unterschiedliche, zufällige Werte aus einer Liste mit Python
=================================================================

Geht ganz einfach mit der Funktion `shuffle <http://docs.python.org/3.2/library/random.html#random.shuffle>`_!

.. code-block:: python

	random.shuffle(liste, 2)

Bevor ich das rausgefunden habe, hatte ich selbst was geschrieben:

Code
----

.. code-block:: python
	:number-lines:

	#!/usr/bin/env python3
	# -*- coding: utf-8 -*-
	 
	import random
	 
	r = random.SystemRandom() # Uses /dev/urandom or Windows CryptGenRandom for better entropy
	 
	liste = ['Kartoffel', 'Urinstein', 'Fahrstuhl']
	debug = 0 # 0,1
	 
	def ungleich(liste):
		"""gibt zwei unterschiedliche Werte aus einer Liste zurück"""
		x = r.choice(liste)
		y = r.choice(liste)
	 
		while x == y:
			if debug: print(x + " = " + y + " true")
			y = r.choice(liste)
		if debug: print(x + " = " + y + " false")
		return x, y
	 
	# praktisches Beispiel
	x, y = ungleich(liste)
	print(x + " ist nicht gleich " + y + ".")

Ausgabe
-------

::

    imac:code davidak$ python3 ungleich.py 
    Kartoffel ist nicht gleich Urinstein.

Beispiel aus der Praxis
-----------------------

Meine Python-Bibliothek `PyZufall <https://github.com/davidak/pyzufall>`_ benutzt die Funktion.
