{
  "version": "1.3",
  "geographies": [
    {
      "id": "HF-områder",
      "name": "HF-områder",
      "type": "polygon",
      "features": [
        { "id": "1", "name": "Finnmark" },
        { "id": "2", "name": "UNN" },
        { "id": "3", "name": "Nordland" },
        { "id": "4", "name": "Helgeland" },
        { "id": "6", "name": "Nord-Trøndelag" },
        { "id": "7", "name": "St. Olavs" },
        { "id": "8", "name": "Møre og Romsdal" },
        { "id": "9", "name": "Haraldsplass" },
        { "id": "10", "name": "Førde" },
        { "id": "11", "name": "Bergen" },
        { "id": "12", "name": "Fonna" },
        { "id": "13", "name": "Stavanger" },
        { "id": "14", "name": "Østfold" },
        { "id": "15", "name": "Akershus" },
        { "id": "16", "name": "OUS" },
        { "id": "17", "name": "Lovisenberg" },
        { "id": "18", "name": "Diakonhjemmet" },
        { "id": "19", "name": "Innlandet" },
        { "id": "20", "name": "Vestre Viken" },
        { "id": "21", "name": "Vestfold" },
        { "id": "22", "name": "Telemark" },
        { "id": "23", "name": "Sørlandet" }
      ],
      "comparisonFeatures": [{ "id": "1", "name": "Norge" }],
      "filters": [{ "id": "filter4", "name": "Fylke" }],
      "themes": [
        {
          "id": "t0",
          "name": "Fastlege og legevakt",
          "indicators": [
            {
              "id": "i0",
              "name": "Personer hos fastlege eller legevakt",
              "href": "/helseatlas/files/helseatlas-kols-fastlege-og-legevakt.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                249.3, 182.6, 200.5, 200.5, 210.4, 177.5, 166.8, 193.9, 164,
                197.6, 209.6, 195.7, 230.4, 188.4, 165.1, 214.5, 91.3, 215.5,
                170.4, 241.4, 211.1, 243
              ],
              "comparisonValues": [196.3],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_Antall", "value": "Antall" },
                { "name": "column_Innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall per 10 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall personer med kols hos fastlege eller legevakt per 10 000 innbyggere. Kjønns- og aldersstandardisert. Gjennomsnitt for årene 2013-15. <br><br>Datakilde: KUHR/SSB<br><br>NB! Tallene må tolkes i lys av røykerelatert sykelighet i befolkningen. Se karttemaet \"Nye tilfeller av lungekreft\" under \"Sykelighet\" i menyen til venstre.<br>"
                }
              ],
              "associates": [
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    937, 1756, 1467, 882, 1583, 2568, 2274, 1259, 963, 2645,
                    1840, 2793, 3503, 4224, 1694, 749, 575, 4956, 4054, 2900,
                    2001, 3463
                  ],
                  "comparisonValues": [49087]
                },
                {
                  "name": "Innbyggere",
                  "type": "numeric",
                  "values": [
                    38184, 95215, 70961, 41919, 71370, 146062, 132447, 64333,
                    56050, 137988, 86891, 155662, 150013, 239191, 113228, 44086,
                    62333, 218086, 241963, 118596, 91860, 143083
                  ],
                  "comparisonValues": [2519521]
                }
              ]
            },
            {
              "id": "i1",
              "name": "Spirometri hos fastlege (andeler)",
              "href": "/helseatlas/files/helseatlas-kols-fastlege-og-legevakt.pdf",
              "type": "numeric",
              "precision": "1",
              "values": [
                21.6, 30.2, 37.2, 30.1, 38.1, 34, 34.2, 32.8, 29.2, 37.9, 34.2,
                42.6, 37.8, 39, 38.9, 36.5, 32.6, 38.3, 37.4, 43.9, 28.5, 42.1
              ],
              "comparisonValues": [36.9],
              "properties": [
                { "name": "precision", "value": 1 },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_Antall", "value": "Tatt spirometri" },
                {
                  "name": "column_Innbyggere",
                  "value": "Vært hos fastlege/legevakt"
                },
                { "name": "column_text", "value": "Andel (%) tatt spirometri" },
                {
                  "name": "metatext",
                  "value": "Andel: Andel personer med kols hos fastlege eller legevakt som har tatt spirometri hos fastlege i løpet av året. Kjønns- og aldersstandardisert. Gjennomsnitt for årene 2013-15. <br><br>Datakilde: KUHR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    204, 532, 545, 264, 598, 874, 773, 412, 276, 999, 626, 1199,
                    1320, 1658, 655, 280, 188, 1880, 1514, 1270, 567, 1458
                  ],
                  "comparisonValues": [18091]
                },
                {
                  "name": "Innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    937, 1756, 1467, 882, 1583, 2568, 2274, 1259, 963, 2645,
                    1840, 2793, 3503, 4224, 1694, 749, 575, 4956, 4054, 2900,
                    2001, 3463
                  ],
                  "comparisonValues": [49087]
                }
              ]
            }
          ]
        },
        {
          "id": "t1",
          "name": "Poliklinikk",
          "indicators": [
            {
              "id": "i2",
              "name": "Personer på poliklinikk",
              "href": "/helseatlas/files/helseatlas-kols-poli.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                121.2, 102.9, 73.4, 89.9, 58.4, 84.7, 69.5, 91.6, 69.7, 87.4,
                75.7, 67.5, 65.4, 79.3, 80.9, 122.1, 60.5, 68.5, 74.5, 113.3,
                88, 132.5
              ],
              "comparisonValues": [82.5],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_Antall", "value": "Antall" },
                { "name": "column_Innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall per 10 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall personer med poliklinisk kontakt for kols per 10 000 innbyggere. Kjønns- og aldersstandardisert. Gjennomsnitt for årene 2013-15. <br><br>Datakilde: NPR/SSB<br><br>NB! Tallene må tolkes i lys av røykerelatert sykelighet i befolkningen. Se karttemaet \"Nye tilfeller av lungekreft\" under \"Sykelighet\" i menyen til venstre.<br>"
                }
              ],
              "associates": [
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    461, 992, 537, 393, 435, 1226, 945, 595, 403, 1170, 663,
                    980, 994, 1776, 823, 423, 380, 1572, 1770, 1358, 831, 1890
                  ],
                  "comparisonValues": [20620]
                },
                {
                  "name": "Innbyggere",
                  "type": "numeric",
                  "values": [
                    38184, 95215, 70961, 41919, 71370, 146062, 132447, 64333,
                    56050, 137988, 86891, 155662, 150013, 239191, 113228, 44086,
                    62333, 218086, 241963, 118596, 91860, 143083
                  ],
                  "comparisonValues": [2519521]
                }
              ]
            },
            {
              "id": "i3",
              "name": "Spirometri på poliklinikk (andeler)",
              "href": "/helseatlas/files/helseatlas-kols-poli.pdf",
              "type": "numeric",
              "precision": "1",
              "values": [
                87.7, 87.4, 78.2, 76.9, 81.7, 87.2, 83.5, 86.2, 87, 84.4, 84.5,
                85, 84.4, 75.9, 82.3, 77.1, 83, 86.1, 86, 90, 83, 85.6
              ],
              "comparisonValues": [84.2],
              "properties": [
                { "name": "precision", "value": 1 },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_Antall", "value": "Tatt spirometri" },
                { "name": "column_Innbyggere", "value": "Vært på poliklinikk" },
                { "name": "column_text", "value": "Andel (%) tatt spirometri" },
                {
                  "name": "metatext",
                  "value": "Andel: Andel personer med poliklinisk kontakt for kols som har tatt spirometri på poliklinikk i løpet av året. Kjønns- og aldersstandardisert. Gjennomsnitt for årene 2013-15. <br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    404, 867, 419, 301, 355, 1069, 788, 512, 350, 987, 559, 837,
                    838, 1352, 678, 326, 316, 1352, 1521, 1222, 688, 1616
                  ],
                  "comparisonValues": [17360]
                },
                {
                  "name": "Innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    461, 992, 537, 393, 435, 1226, 945, 595, 403, 1170, 663,
                    980, 994, 1776, 823, 423, 380, 1572, 1770, 1358, 831, 1890
                  ],
                  "comparisonValues": [20620]
                }
              ]
            }
          ]
        },
        {
          "id": "t2",
          "name": "Akuttinnleggelser",
          "indicators": [
            {
              "id": "i4",
              "name": "Akuttinnlagte personer",
              "href": "/helseatlas/files/helseatlas-kols-akutt.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                45.7, 41.9, 43.1, 36.1, 48.1, 41.8, 37.5, 41.6, 34.1, 46.1,
                49.2, 43, 38, 40.1, 42.1, 59.1, 22.6, 43.6, 39, 48.5, 43.9, 44.3
              ],
              "comparisonValues": [41.9],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_Antall", "value": "Antall" },
                { "name": "column_Innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall per 10 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall personer akuttinnlagt for kols per 10 000 innbyggere. Kjønns- og aldersstandardisert. Gjennomsnitt for årene 2013-15. <br><br>Datakilde: NPR/SSB<br><br>NB! Tallene må tolkes i lys av røykerelatert sykelighet i befolkningen. Se karttemaet \"Nye tilfeller av lungekreft\" under \"Sykelighet\" i menyen til venstre.<br>"
                }
              ],
              "associates": [
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    167, 399, 316, 161, 363, 602, 517, 271, 207, 619, 434, 602,
                    576, 873, 439, 195, 143, 1011, 933, 586, 418, 625
                  ],
                  "comparisonValues": [10455]
                },
                {
                  "name": "Innbyggere",
                  "type": "numeric",
                  "values": [
                    38184, 95215, 70961, 41919, 71370, 146062, 132447, 64333,
                    56050, 137988, 86891, 155662, 150013, 239191, 113228, 44086,
                    62333, 218086, 241963, 118596, 91860, 143083
                  ],
                  "comparisonValues": [2519521]
                }
              ]
            },
            {
              "id": "i5",
              "name": "Liggedøgn",
              "href": "/helseatlas/files/helseatlas-kols-akutt.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                506.2, 394.2, 468.4, 355.3, 483, 454, 398.9, 423.2, 289.4,
                433.9, 511, 457.6, 339.7, 448.4, 518.9, 602.2, 226.4, 377.7,
                374.8, 484.6, 421.3, 363.1
              ],
              "comparisonValues": [416.8],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_Antall", "value": "Antall" },
                { "name": "column_Innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall per 10 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall liggedøgn per 10 000 innbyggere for personer akuttinnlagt for kols. Kjønns- og aldersstandardisert. Gjennomsnitt for årene 2013-15. <br><br>Datakilde: NPR/SSB<br><br>NB! Tallene må tolkes i lys av røykerelatert sykelighet i befolkningen. Se karttemaet \"Nye tilfeller av lungekreft\" under \"Sykelighet\" i menyen til venstre.<br>"
                }
              ],
              "associates": [
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    1859, 3748, 3432, 1591, 3634, 6525, 5488, 2759, 1750, 5806,
                    4493, 6391, 5151, 9785, 5346, 1974, 1429, 8728, 8938, 5852,
                    4007, 5125
                  ],
                  "comparisonValues": [103812]
                },
                {
                  "name": "Innbyggere",
                  "type": "numeric",
                  "values": [
                    38184, 95215, 70961, 41919, 71370, 146062, 132447, 64333,
                    56050, 137988, 86891, 155662, 150013, 239191, 113228, 44086,
                    62333, 218086, 241963, 118596, 91860, 143083
                  ],
                  "comparisonValues": [2519521]
                }
              ]
            },
            {
              "id": "i6",
              "name": "Ventilasjonsstøtte (andeler)",
              "href": "/helseatlas/files/helseatlas-kols-akutt.pdf",
              "type": "numeric",
              "precision": "1",
              "values": [
                21.4, 14.6, 15, 19.8, 15.5, 14.3, 24.6, 18.8, 15.1, 22.3, 14.4,
                18.3, 16.8, 18, 13.7, 16.1, 14.1, 15.9, 19.5, 26.4, 22.1, 21.1
              ],
              "comparisonValues": [18.4],
              "properties": [
                { "name": "precision", "value": 1 },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_Antall", "value": "Fått ventilasjonsstøtte" },
                {
                  "name": "column_Innbyggere",
                  "value": "Akuttinnlagte personer"
                },
                {
                  "name": "column_text",
                  "value": "Andel (%) fått ventilasjonsstøtte"
                },
                {
                  "name": "metatext",
                  "value": "Andel: Andel akuttinnlagte med kols som har fått ventilasjonsstøtte. Kjønns- og aldersstandardisert. Gjennomsnitt for årene 2013-15. <br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    57, 91, 74, 45, 90, 143, 201, 86, 44, 229, 105, 186, 160,
                    273, 107, 60, 33, 250, 290, 251, 144, 205
                  ],
                  "comparisonValues": [3125]
                },
                {
                  "name": "Innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    260, 618, 492, 228, 585, 999, 829, 456, 303, 1022, 730,
                    1020, 943, 1473, 770, 366, 231, 1584, 1491, 950, 651, 969
                  ],
                  "comparisonValues": [16972]
                }
              ]
            },
            {
              "id": "i7",
              "name": "Reinnleggelser",
              "href": "/helseatlas/files/helseatlas-kols-akutt.pdf",
              "type": "numeric",
              "precision": "1",
              "values": [
                27.8, 26.2, 28.1, 25, 28.2, 29.3, 30.2, 31.1, 25.8, 29.3, 29.8,
                29, 28.6, 31.2, 33, 38.2, 32.4, 27.7, 28.9, 29.8, 29.8, 27.1
              ],
              "comparisonValues": [29.3],
              "properties": [
                { "name": "precision", "value": 1 },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_Antall", "value": "Antall" },
                { "name": "column_Innbyggere", "value": "Primærinnleggelser" },
                { "name": "column_text", "value": "Andel (%) reinnleggelser" },
                {
                  "name": "metatext",
                  "value": "Andel: Andel primærinnleggelser for kols som hadde minst én etterfølgende reinnleggelse. Kjønns- og aldersstandardisert. Gjennomsnitt for årene 2013-15. <br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    69, 149, 130, 53, 155, 274, 232, 135, 72, 277, 206, 277,
                    249, 429, 236, 125, 71, 400, 395, 261, 177, 246
                  ],
                  "comparisonValues": [4620]
                },
                {
                  "name": "Innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    245, 570, 463, 210, 546, 935, 770, 434, 280, 954, 690, 953,
                    871, 1371, 723, 343, 218, 1448, 1367, 875, 596, 909
                  ],
                  "comparisonValues": [15771]
                }
              ]
            },
            {
              "id": "i8",
              "name": "Liggetid siste år før død",
              "href": "/helseatlas/files/helseatlas-kols-akutt.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                16.6, 14.2, 17.5, 13.7, 14.5, 18.6, 17.2, 16.7, 11.8, 15.1,
                18.1, 17.5, 13.5, 17.2, 18.9, 17.7, 15.8, 13.2, 14.6, 17, 14.6,
                11.1
              ],
              "comparisonValues": [15.5],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Liggedøgn" },
                { "name": "column_Antall", "value": "Antall døgn" },
                { "name": "column_Innbyggere", "value": "Døde" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall per 10 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Liggedøgn: Antall liggedøgn siste år før død. Kjønns- og aldersstandardisert. Gjennomsnitt for årene 2013-15. <br><br>Datakilde: NPR/SSB<br><br>NB! Tallene må tolkes i lys av røykerelatert sykelighet i befolkningen. Se karttemaet \"Nye tilfeller av lungekreft\" under \"Sykelighet\" i menyen til venstre.<br>"
                }
              ],
              "associates": [
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    1867, 4009, 3708, 1375, 3139, 7086, 5792, 2114, 1541, 5356,
                    4761, 7267, 5688, 10126, 6062, 1860, 1427, 9465, 9672, 7470,
                    4512, 4580
                  ],
                  "comparisonValues": [108877]
                },
                {
                  "name": "Innbyggere",
                  "type": "numeric",
                  "values": [
                    114, 281, 209, 98, 218, 381, 340, 127, 132, 355, 265, 418,
                    420, 581, 321, 106, 90, 726, 661, 441, 309, 409
                  ],
                  "comparisonValues": [7002]
                }
              ]
            }
          ]
        },
        {
          "id": "t3",
          "name": "Rehabilitering",
          "indicators": [
            {
              "id": "i9",
              "name": "Personer deltatt på lungerehabilitering",
              "href": "/helseatlas/files/helseatlas-kols-rehab.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                7.7, 7.4, 5.7, 10.5, 11.1, 16.3, 10.3, 8.9, 8, 10.1, 15.3, 11.4,
                7.9, 10, 10.1, 5.5, 6.2, 14.1, 6.5, 9.1, 8, 8
              ],
              "comparisonValues": [9.9],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_Antall", "value": "Antall" },
                { "name": "column_Innbyggere", "value": "Innbyggere (2015)" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall per 10 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall personer deltatt på lungerehabilitering for kols i 2015 per 10 000 innbyggere. Kjønns- og aldersstandardisert. <br><br>Datakilde: NPR/SSB<br><br>NB! Tallene må tolkes i lys av røykerelatert sykelighet i befolkningen. Se karttemaet \"Nye tilfeller av lungekreft\" under \"Sykelighet\" i menyen til venstre.<br>"
                }
              ],
              "associates": [
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    30, 72, 42, 47, 85, 241, 142, 59, 48, 138, 137, 167, 122,
                    233, 105, 24, 41, 329, 158, 112, 75, 117
                  ],
                  "comparisonValues": [2524]
                },
                {
                  "name": "Innbyggere",
                  "type": "numeric",
                  "values": [
                    38528, 96043, 71494, 42096, 71915, 148001, 133704, 65299,
                    56397, 140182, 88040, 158573, 152195, 243944, 115040, 45658,
                    63517, 219640, 245728, 120242, 92634, 145328
                  ],
                  "comparisonValues": [2554198]
                }
              ]
            }
          ]
        },
        {
          "id": "t4",
          "name": "Sykelighet",
          "indicators": [
            {
              "id": "i10",
              "name": "Nye tilfeller av lungekreft",
              "href": "/helseatlas/files/helseatlas-kols-forekomst.pdf",
              "type": "numeric",
              "precision": "1",
              "values": [
                7.3, 5.8, 5.5, 5.7, 5.4, 5.5, 5.5, 5.4, 5.3, 5.7, 6, 6, 6.3, 6,
                5.4, 7.1, 3.7, 5.5, 5, 6.5, 5.5, 7
              ],
              "comparisonValues": [5.7],
              "properties": [
                { "name": "precision", "value": 1 },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Insidens" },
                { "name": "column_Antall", "value": "Antall (per år)" },
                { "name": "column_Innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Insidens. Antall per 10 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Insidens: Antall nye lungekrefttilfeller per 10 000 innbyggere per år. Gjennomsnitt for perioden 2006-15. <br><br>Datakilde: Kommunehelsa statistikkbank, Folkehelseinstituttet.<br><br> Røyking over tid er en av hovedårsakene til kols og lungekreft. Geografisk fordeling i antall nye tilfeller av lungekreft kan brukes som et indirekte mål på geografisk fordeling av forekomst av kols."
                },
                { "name": "customBreaks", "value": "3.5;4.5;6.0;6.9;7.5" }
              ],
              "associates": [
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    54, 111, 83, 51, 82, 155, 150, 70, 62, 148, 103, 162, 188,
                    254, 104, 43, 44, 257, 232, 153, 106, 197
                  ],
                  "comparisonValues": [2811]
                },
                {
                  "name": "Innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    73872, 184741, 134478, 77685, 134858, 296387, 253210,
                    132863, 107830, 283832, 173264, 335835, 275869, 466673,
                    241822, 126274, 127209, 391391, 454854, 219687, 169471,
                    283876
                  ],
                  "comparisonValues": [4945981]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
