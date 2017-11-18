.. title: CRRAFOOYOUH - creates random folders on your harddisk
.. date: 2013/06/16 18:06
.. type: text

Beschreibung
------------

Dieses kleine Batch-Script erstellt Ordner mit einer zufälligen Zahlenfolge als Name.

Dadurch kann die Geschwindigkeit des Rechners getestet werden oder einfach nur die Festplatte zugemüllt.

Es überzeugt durch eine aufwendige textbasierte GUI.

Es sollte auf allen Windows Versionen ab Windows 98 laufen.

Getestet wurde es bisher nur auf Windows XP.

Das Zeichen, was rechts fehlt, um den Rahmen abzuschliessen, ist bewusst weggelassen, weil es durch die variable Zeichenanzahl bei den generierten Ordner schwer ist, noch ein # einzufügen.

Die Ordner werden im Verzeichnis "C:/Folders/" erstellt.

Screenshot
----------

.. thumbnail:: /images/crrafooyouh.gif

Video
-----

.. media:: https://www.youtube.com/watch?v=DSMAwYTp1xw

Download
--------

`CRRAFOOYOUH.zip </download/CRRAFOOYOUH.zip>`_ (28 kB)

Source Code
-----------

.. code-block:: batch
    :number-lines:

    @echo off
    color 0A

    set /A counter=1

    set bar=##########################################################################
    set /A barcount=0


    :1

    mkdir c:\Folders\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%
    mkdir c:\Folders\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%
    mkdir c:\Folders\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%
    mkdir c:\Folders\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%
    mkdir c:\Folders\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%

    mkdir c:\Folders\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%
    mkdir c:\Folders\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%
    mkdir c:\Folders\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%
    mkdir c:\Folders\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%
    mkdir c:\Folders\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%\%RANDOM%


    set /A counter=%counter%+1
    set /A barcount=%barcount%+1

    if %barcount% equ 38 (set /A barcount=0)


    if %barcount% equ 0 (set bar=                                                                          )
    if %barcount% equ 1 (set bar===                                                                        )
    if %barcount% equ 2 (set bar=====                                                                      )
    if %barcount% equ 3 (set bar=======                                                                    )
    if %barcount% equ 4 (set bar=========                                                                  )
    if %barcount% equ 5 (set bar===========                                                                )
    if %barcount% equ 6 (set bar=============                                                              )
    if %barcount% equ 7 (set bar===============                                                            )
    if %barcount% equ 8 (set bar=================                                                          )
    if %barcount% equ 9 (set bar===================                                                        )
    if %barcount% equ 10 (set bar=====================                                                      )

    if %barcount% equ 11 (set bar=======================                                                    )
    if %barcount% equ 12 (set bar=========================                                                  )
    if %barcount% equ 13 (set bar===========================                                                )
    if %barcount% equ 14 (set bar=============================                                              )
    if %barcount% equ 15 (set bar===============================                                            )
    if %barcount% equ 16 (set bar=================================                                          )
    if %barcount% equ 17 (set bar===================================                                        )
    if %barcount% equ 18 (set bar=====================================                                      )
    if %barcount% equ 19 (set bar=======================================                                    )
    if %barcount% equ 20 (set bar=========================================                                  )

    if %barcount% equ 21 (set bar===========================================                                )
    if %barcount% equ 22 (set bar=============================================                              )
    if %barcount% equ 23 (set bar===============================================                            )
    if %barcount% equ 24 (set bar=================================================                          )
    if %barcount% equ 25 (set bar===================================================                        )
    if %barcount% equ 26 (set bar=====================================================                      )
    if %barcount% equ 27 (set bar=======================================================                    )
    if %barcount% equ 28 (set bar=========================================================                  )
    if %barcount% equ 29 (set bar===========================================================                )
    if %barcount% equ 30 (set bar=============================================================              )

    if %barcount% equ 31 (set bar===============================================================            )
    if %barcount% equ 32 (set bar=================================================================          )
    if %barcount% equ 33 (set bar===================================================================        )
    if %barcount% equ 34 (set bar=====================================================================      )
    if %barcount% equ 35 (set bar=======================================================================    )
    if %barcount% equ 36 (set bar=========================================================================  )
    if %barcount% equ 37 (set bar===========================================================================)


    cls

    echo.
    echo  ##############################################################################
    echo  #                                                                            #
    echo  #                           - CRRAFOOYOUH V 1.2 -                            #
    echo  #                  CREATES RANDOM FOLDERS ON YOUR HARDDISK                   #
    echo  #                                                                            #
    echo  ##############################################################################
    echo  #             #                                                              #
    echo  # %TIME% # (c) 2008 David Kleuker                                       #
    echo  #  %DATE% # www.davidak.de                                               #
    echo  #             #                                                              #
    echo  ##############################################################################
    echo  #                                                                            #
    echo  # %counter%00 Folders created
    echo  #                                                                            #
    echo  #                                                                            #
    echo  #                                                                            #
    echo  #                                                                            #
    echo  ##############################################################################
    echo  #                                                                            #
    echo  # %bar% #
    echo  # %bar% #
    echo  #                                                                            #
    echo  ##############################################################################

    goto :1
