.. title: Einfacher Counter in Batch (Windows)
.. date: 2013/06/13 18:06
.. type: text

Beschreibung
------------

Ein einfacher Zählen von 1 bis 100.

Source Code
-----------

.. code-block:: batch

    @echo off
    set /A counter=1

    :1

    echo %counter%
    set /A counter=%counter%+1

    if %counter% lss 101 ( goto :1 )

Wichtig ist die Datei als .bat zu speichern mit ANSI-Encoding, nicht als Textdatei und auch nicht mit UTF-8 Encoding!

Ausgabe
-------

::

    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    15
    16
    17
    18
    19
    20
    21
    22
    23
    24
    25
    26
    27
    28
    29
    30
    31
    32
    33
    34
    35
    36
    37
    38
    39
    40
    41
    42
    43
    44
    45
    46
    47
    48
    49
    50
    51
    52
    53
    54
    55
    56
    57
    58
    59
    60
    61
    62
    63
    64
    65
    66
    67
    68
    69
    70
    71
    72
    73
    74
    75
    76
    77
    78
    79
    80
    81
    82
    83
    84
    85
    86
    87
    88
    89
    90
    91
    92
    93
    94
    95
    96
    97
    98
    99
    100
