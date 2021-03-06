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
        { "id": "5", "name": "Nord-Trøndelag" },
        { "id": "6", "name": "St. Olavs" },
        { "id": "7", "name": "Møre og Romsdal" },
        { "id": "8", "name": "Førde" },
        { "id": "9", "name": "Bergen" },
        { "id": "10", "name": "Fonna" },
        { "id": "11", "name": "Stavanger" },
        { "id": "12", "name": "Østfold" },
        { "id": "13", "name": "Akershus" },
        { "id": "14", "name": "OUS" },
        { "id": "15", "name": "Innlandet" },
        { "id": "16", "name": "Vestre Viken" },
        { "id": "17", "name": "Vestfold" },
        { "id": "18", "name": "Telemark" },
        { "id": "19", "name": "Sørlandet" },
        { "id": "20", "name": "Indre Oslo" }
      ],
      "comparisonFeatures": [{ "id": "1", "name": "Norge" }],
      "filters": [{ "id": "filter4", "name": "Fylke" }],
      "themes": [
        {
          "id": "t0",
          "name": "Allmennlegetjenesten",
          "indicators": [
            {
              "id": "i0",
              "name": "Alle konsultasjoner",
              "href": "/helseatlas/files/Allmennlegetjenesten.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                5272.66, 5927.34, 5815.4, 5244.21, 5790.5, 5547.51, 5905.31,
                5616.36, 5532.62, 5760.07, 6233.01, 6041.46, 5843.33, 5657.73,
                5704.33, 6193.15, 5922.06, 5186.99, 6214.16, 5130.18
              ],
              "comparisonValues": [5798.34],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall konsultasjoner pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.2<br><br>Datakilde: KUHR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    27024, 81637, 63026, 35488, 65203, 114103, 122636, 53196,
                    162212, 75941, 119015, 132742, 169594, 84397, 200560,
                    213606, 106297, 73042, 126440, 63710
                  ],
                  "comparisonValues": [2089869]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i1",
              "name": "Fastlege",
              "href": "/helseatlas/files/Allmennlegetjenesten.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                4317.83, 5368.84, 5323.42, 4753.46, 5277.94, 5147.25, 5460.99,
                5133.33, 5078.24, 5312.64, 5793.73, 5617.25, 5456.06, 5290.05,
                5301.98, 5704.34, 5531.88, 4699.03, 5748.21, 4792.83
              ],
              "comparisonValues": [5350.93],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall konsultasjoner, dagtid pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.3<br><br>Datakilde: KUHR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    22238, 74034, 57734, 32207, 59450, 105879, 113293, 48560,
                    148866, 70030, 110668, 123548, 158633, 78751, 186421,
                    196767, 99357, 66145, 117028, 59403
                  ],
                  "comparisonValues": [1929011]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i2",
              "name": "Legevakt",
              "href": "/helseatlas/files/Allmennlegetjenesten.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                955.49, 557.5, 491.44, 490.92, 512.45, 399.68, 444.45, 481.42,
                451.12, 447.25, 439.04, 424.26, 386.1, 365.76, 401.77, 487.0,
                389.48, 487.91, 465.01, 335.24
              ],
              "comparisonValues": [446.45],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall konsultasjoner pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 2.9<br><br>Datakilde: KUHR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    4785, 7582, 5284, 3282, 5751, 8209, 9337, 4623, 13247, 5911,
                    8341, 9186, 10910, 5619, 14116, 16771, 6930, 6896, 9401,
                    4289
                  ],
                  "comparisonValues": [160471]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            }
          ]
        },
        {
          "id": "t1",
          "name": "Spesialisthelsetjenesten",
          "indicators": [
            {
              "id": "i3",
              "name": "Poliklinikk, alle",
              "href": "/helseatlas/files/Spesialisthelsetjenesten.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                2309.1, 2700.56, 2781.37, 2892.33, 3153.5, 3091.46, 2984.59,
                3010.67, 3153.72, 3185.14, 2946.46, 2980.63, 3053.4, 3983.56,
                2611.62, 3254.91, 3431.62, 3051.96, 3465.27, 3686.25
              ],
              "comparisonValues": [3100.06],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall konsultasjoner pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.7<br><br>Datakilde: NPR/SSB<br>"
                },
                { "name": "customBreaks", "value": "0;2800;3400;3500;5000" },
                {
                  "name": "customColours",
                  "value": "#dae6f2;#95bde6;#568bbf;#00509e"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    11765, 37126, 30201, 19592, 35605, 63613, 62068, 28562,
                    92389, 42011, 56261, 65443, 88435, 59471, 91960, 112284,
                    61469, 42910, 70512, 45507
                  ],
                  "comparisonValues": [1117183]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i4",
              "name": "Innleggelser, alle",
              "href": "/helseatlas/files/Spesialisthelsetjenesten.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                578.33, 498.52, 528.72, 510.16, 514.1, 480.29, 495.1, 520.69,
                552.75, 568.57, 486.94, 434.43, 485.55, 509.69, 478.19, 484.09,
                475.87, 510.14, 450.2, 522.32
              ],
              "comparisonValues": [496.98],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall innleggelser pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.3<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    2884, 6757, 5682, 3420, 5774, 9861, 10436, 5015, 16227,
                    7519, 9246, 9390, 13612, 7834, 16823, 16678, 8459, 7202,
                    9095, 6656
                  ],
                  "comparisonValues": [178571]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i5",
              "name": "Reinnleggelser",
              "href": "/helseatlas/files/Spesialisthelsetjenesten.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                16.34, 16.05, 17.71, 16.55, 18.8, 16.64, 17.18, 16.07, 18.16,
                17.6, 17.38, 17.3, 18.7, 18.05, 17.33, 17.34, 16.68, 16.87,
                15.97, 20.39
              ],
              "comparisonValues": [17.45],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_antall", "value": "Reinnleggelser" },
                { "name": "column_innbyggere", "value": "Primærinnleggelser" },
                { "name": "column_text", "value": "Andel (%) reinnleggelser" },
                {
                  "name": "metatext",
                  "value": "Reinnleggelser som andel av primære innleggelser, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste andel/laveste andel) = 1.3<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    436, 1003, 931, 527, 1006, 1515, 1661, 753, 2749, 1232,
                    1488, 1480, 2337, 1299, 2678, 2660, 1295, 1115, 1333, 1245
                  ],
                  "comparisonValues": [28743]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    2692, 6256, 5262, 3170, 5326, 9105, 9649, 4666, 15144, 6998,
                    8563, 8543, 12509, 7223, 15412, 15313, 7760, 6616, 8349,
                    6130
                  ],
                  "comparisonValues": [164687]
                }
              ]
            },
            {
              "id": "i6",
              "name": "Innleggelser, liggetid",
              "href": "/helseatlas/files/Spesialisthelsetjenesten.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                3320.78, 3029.19, 3113.34, 3021.04, 2586.86, 2988.46, 2872.4,
                2883.92, 3092.86, 3231.77, 2924.69, 2220.29, 2739.98, 3336.18,
                2341.59, 2640.77, 2478.13, 2914.31, 2094.02, 2736.93
              ],
              "comparisonValues": [2757.22],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall liggedøgn pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.6<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    16563, 41030, 33521, 20312, 29105, 61388, 60501, 27696,
                    90767, 42734, 55596, 48164, 77174, 51077, 82460, 91016,
                    44084, 41120, 42378, 34527
                  ],
                  "comparisonValues": [991212]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            }
          ]
        },
        {
          "id": "t2",
          "name": "Hjertemedisin",
          "indicators": [
            {
              "id": "i7",
              "name": "Hjerteinfarkt, innlagte pasienter",
              "href": "/helseatlas/files/Hjerteinfarkt.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                31.15, 15.91, 22.47, 20.62, 21.6, 16.22, 22.34, 16.35, 16.83,
                21.99, 22.83, 20.64, 17.64, 17.89, 18.4, 17.21, 13.73, 20.74,
                11.6, 18.6
              ],
              "comparisonValues": [18.49],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall pasienter pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 2.9<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    151, 216, 240, 138, 243, 333, 477, 161, 496, 293, 433, 444,
                    489, 281, 647, 595, 243, 295, 234, 244
                  ],
                  "comparisonValues": [6652]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i8",
              "name": "Revaskularisering, PCI og bypass",
              "href": "/helseatlas/files/Hjerteinfarkt.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                13.78, 10.68, 9.49, 10.32, 7.08, 8.63, 6.55, 7.87, 9.82, 10.09,
                9.94, 9.85, 9.55, 7.71, 9.24, 9.4, 8.52, 12.43, 12.16, 6.83
              ],
              "comparisonValues": [9.4],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall inngrep pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 2.1<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    72, 149, 104, 72, 82, 179, 135, 75, 287, 134, 191, 218, 281,
                    112, 328, 325, 153, 174, 249, 82
                  ],
                  "comparisonValues": [3403]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i9",
              "name": "Hjertesvikt, innleggelser",
              "href": "/helseatlas/files/Hjertesvikt.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                16.83, 19.4, 17.67, 19.97, 20.14, 17.11, 15.72, 17.04, 20.45,
                21.87, 14.99, 16.65, 21.25, 22.83, 18.73, 19.37, 16.41, 18.02,
                19.06, 20.86
              ],
              "comparisonValues": [18.78],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall innleggelser pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.5<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    82, 261, 190, 133, 226, 351, 339, 169, 604, 291, 285, 356,
                    583, 358, 658, 670, 291, 257, 383, 273
                  ],
                  "comparisonValues": [6761]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i10",
              "name": "Hjertesvikt, poliklinikk",
              "href": "/helseatlas/files/Hjertesvikt.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                12.38, 21.53, 26.39, 16.68, 31.94, 15.6, 16.94, 8.61, 21.46,
                18.93, 26.24, 20.37, 16.33, 20.01, 13.37, 27.13, 37.4, 30.02,
                34.5, 41.92
              ],
              "comparisonValues": [22.73],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall konsultasjoner pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 4.9<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    64, 299, 286, 113, 360, 323, 356, 83, 627, 252, 501, 450,
                    474, 294, 475, 940, 669, 422, 705, 511
                  ],
                  "comparisonValues": [8202]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i11",
              "name": "Hjertesvikt, reinnleggelser",
              "href": "/helseatlas/files/Hjertesvikt.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                20.22, 21.68, 25.41, 22.38, 31.21, 23.61, 24.69, 24.75, 27.82,
                27.87, 25.27, 30.23, 27.02, 28.2, 24.44, 24.51, 24.31, 19.69,
                21.1, 30.74
              ],
              "comparisonValues": [25.59],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_antall", "value": "Reinnleggelser" },
                { "name": "column_innbyggere", "value": "Primærinnleggelser" },
                { "name": "column_text", "value": "Andel (%) reinnleggelser" },
                {
                  "name": "metatext",
                  "value": "Reinnleggelser som andel av primære innleggelser for hjertesvikt, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste andel/laveste andel) = 1.6<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    14, 50, 42, 26, 63, 72, 74, 36, 150, 71, 63, 89, 142, 88,
                    139, 148, 63, 45, 71, 76
                  ],
                  "comparisonValues": [1521]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    70, 231, 166, 115, 201, 303, 302, 147, 538, 255, 249, 296,
                    520, 315, 567, 601, 257, 228, 337, 243
                  ],
                  "comparisonValues": [5940]
                }
              ]
            },
            {
              "id": "i12",
              "name": "Arbeids-EKG, poliklinisk",
              "href": "/helseatlas/files/UtredningHjerte.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                87.37, 48.92, 38.42, 22.68, 25.34, 33.12, 31.1, 23.66, 90.28,
                70.62, 67.34, 37.49, 91.98, 66.54, 34.59, 47.69, 65.28, 49.12,
                62.27, 56.03
              ],
              "comparisonValues": [54.23],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall polikliniske undersøkelser pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 4.1<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    453, 681, 422, 158, 289, 683, 639, 220, 2642, 933, 1293,
                    829, 2693, 969, 1222, 1646, 1179, 690, 1277, 682
                  ],
                  "comparisonValues": [19600]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i13",
              "name": "Langtids-EKG, poliklinisk",
              "href": "/helseatlas/files/UtredningHjerte.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                20.47, 17.91, 25.28, 22.8, 14.14, 10.05, 21.08, 42.65, 26.79,
                47.71, 20.54, 16.6, 30.56, 24.97, 19.69, 28.78, 26.86, 22.7,
                39.12, 26.01
              ],
              "comparisonValues": [25.03],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall polikliniske undersøkelser pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 4.7<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    104, 248, 275, 156, 160, 207, 439, 402, 784, 630, 394, 365,
                    898, 366, 695, 994, 483, 319, 801, 320
                  ],
                  "comparisonValues": [9040]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i14",
              "name": "Ekkokardiografi, poliklinisk",
              "href": "/helseatlas/files/UtredningHjerte.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                158.11, 75.99, 87.2, 105.19, 67.2, 78.14, 70.05, 103.03, 114.24,
                130.86, 88.77, 56.15, 98.76, 81.28, 56.72, 76.9, 112.73, 117.58,
                98.42, 90.33
              ],
              "comparisonValues": [88.21],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall polikliniske undersøkelser pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 2.8<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    804, 1049, 946, 712, 760, 1609, 1446, 974, 3342, 1727, 1698,
                    1240, 2876, 1190, 2002, 2650, 2022, 1650, 2012, 1104
                  ],
                  "comparisonValues": [31813]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i15",
              "name": "Pacemaker",
              "href": "/helseatlas/files/Pacemaker.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                "NaN",
                3.83,
                6.23,
                7.68,
                5.01,
                4.56,
                4.82,
                4.84,
                7.42,
                7.48,
                3.3,
                5.27,
                6.55,
                7.01,
                4.12,
                6.85,
                5.37,
                6.41,
                3.91,
                5.03
              ],
              "comparisonValues": [5.51],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Innsetting av permanent pacemaker. Antall inngrep pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 2.3<br><br>Datakilde: NPR/SSB<br><small><em>* Det er ikke beregnet kjønns- og aldersjusterte rater for opptaksområder med færre enn 30 hendelser. Se rapport (kapittel 4.3) for mer detaljert beskrivelse.</em></small>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    20, 51, 67, 51, 56, 94, 102, 46, 218, 99, 63, 114, 183, 106,
                    146, 237, 95, 90, 79, 63
                  ],
                  "comparisonValues": [1982]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            }
          ]
        },
        {
          "id": "t3",
          "name": "Lungemedisin",
          "indicators": [
            {
              "id": "i16",
              "name": "Lungebetennelse, akutte innleggelser",
              "href": "/helseatlas/files/Lungebetennelse.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                28.41, 26.43, 36.69, 35.79, 34.55, 30.59, 35.81, 29.73, 37.46,
                43.04, 46.11, 30.07, 36.9, 36.87, 35.34, 28.21, 35.08, 31.28,
                31.93, 41.9
              ],
              "comparisonValues": [34.67],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall innleggelser pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.7<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    139, 356, 392, 239, 390, 628, 765, 293, 1105, 571, 876, 648,
                    1025, 574, 1248, 978, 624, 444, 643, 541
                  ],
                  "comparisonValues": [12477]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i17",
              "name": "Lungebetennelse, reinnleggelser",
              "href": "/helseatlas/files/Lungebetennelse.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                21.98, 18.88, 22.6, 20.13, 25.15, 19.07, 20.8, 21.2, 22.47,
                22.49, 20.9, 23.1, 23.05, 20.72, 21.36, 19.94, 24.02, 19.82,
                22.62, 27.1
              ],
              "comparisonValues": [21.87],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_antall", "value": "Reinnleggelser" },
                { "name": "column_innbyggere", "value": "Primærinnleggelser" },
                { "name": "column_text", "value": "Andel (%) reinnleggelser" },
                {
                  "name": "metatext",
                  "value": "Reinnleggelser som andel av primære innleggelser for lungebetennelse, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste andel/laveste andel) = 1.4<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    26, 58, 76, 43, 86, 102, 132, 52, 214, 111, 154, 125, 201,
                    99, 223, 166, 129, 72, 123, 120
                  ],
                  "comparisonValues": [2312]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    118, 309, 334, 209, 343, 534, 638, 247, 953, 495, 737, 542,
                    864, 484, 1040, 835, 539, 366, 539, 452
                  ],
                  "comparisonValues": [10577]
                }
              ]
            },
            {
              "id": "i18",
              "name": "Kols, akutte innleggelser",
              "href": "/helseatlas/files/Kols.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                22.16, 24.66, 25.02, 18.96, 25.1, 23.66, 20.02, 17.35, 24.98,
                27.45, 24.25, 19.58, 23.34, 27.69, 21.37, 21.32, 25.98, 21.5,
                19.69, 20.44
              ],
              "comparisonValues": [22.73],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall innleggelser pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.6<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    113, 334, 269, 128, 285, 487, 419, 166, 731, 362, 463, 428,
                    667, 416, 756, 734, 464, 302, 400, 254
                  ],
                  "comparisonValues": [8180]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i19",
              "name": "Kols, reinnleggelser",
              "href": "/helseatlas/files/Kols.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                24.78, 27.55, 28.35, 27.99, 28.6, 30.05, 28.47, 25.69, 29.65,
                30.49, 27.96, 29.11, 30.1, 32.67, 26.44, 28.69, 28.5, 30.0,
                28.33, 38.07
              ],
              "comparisonValues": [29.08],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_antall", "value": "Reinnleggelser" },
                { "name": "column_innbyggere", "value": "Primærinnleggelser" },
                { "name": "column_text", "value": "Andel (%) reinnleggelser" },
                {
                  "name": "metatext",
                  "value": "Reinnleggelser som andel av primære innleggelser for kols, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste andel/laveste andel) = 1.5<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    25, 84, 69, 33, 75, 133, 107, 38, 200, 101, 117, 113, 181,
                    122, 177, 188, 116, 79, 100, 87
                  ],
                  "comparisonValues": [2144]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    102, 304, 242, 117, 260, 444, 375, 148, 675, 332, 417, 388,
                    606, 381, 668, 656, 406, 265, 353, 233
                  ],
                  "comparisonValues": [7371]
                }
              ]
            }
          ]
        },
        {
          "id": "t4",
          "name": "Ortopedi",
          "indicators": [
            {
              "id": "i20",
              "name": "Primære hofteproteser",
              "href": "/helseatlas/files/Leddproteser.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                "NaN",
                4.36,
                5.72,
                7.0,
                6.81,
                7.11,
                6.94,
                6.79,
                5.88,
                6.79,
                7.36,
                6.89,
                6.31,
                6.25,
                6.32,
                6.99,
                5.85,
                6.34,
                7.14,
                6.12
              ],
              "comparisonValues": [6.47],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall inngrep pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.7<br><br>Datakilde: NPR/SSB<br><small><em>* Det er ikke beregnet kjønns- og aldersjusterte rater for opptaksområder med færre enn 30 hendelser. Se rapport (kapittel 4.3) for mer detaljert beskrivelse.</em></small>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    24, 60, 62, 47, 76, 146, 142, 63, 173, 89, 140, 151, 185,
                    93, 221, 241, 105, 89, 146, 76
                  ],
                  "comparisonValues": [2330]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i21",
              "name": "Primære kneproteser",
              "href": "/helseatlas/files/Leddproteser.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                "NaN",
                3.66,
                3.43,
                "NaN",
                5.34,
                3.85,
                4.25,
                4.95,
                4.01,
                3.95,
                3.65,
                4.18,
                4.09,
                3.76,
                4.15,
                4.35,
                4.17,
                3.36,
                4.78,
                4.08
              ],
              "comparisonValues": [4.1],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall inngrep pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.6<br><br>Datakilde: NPR/SSB<br><small><em>* Det er ikke beregnet kjønns- og aldersjusterte rater for opptaksområder med færre enn 30 hendelser. Se rapport (kapittel 4.3) for mer detaljert beskrivelse.</em></small>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    16, 51, 38, 26, 60, 79, 87, 46, 118, 52, 70, 93, 122, 56,
                    146, 150, 76, 47, 98, 50
                  ],
                  "comparisonValues": [1481]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i22",
              "name": "Hoftebrudd",
              "href": "/helseatlas/files/Hoftebrudd.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                18.22, 17.49, 19.04, 16.94, 17.55, 20.43, 19.29, 17.61, 19.36,
                19.0, 18.27, 21.36, 19.66, 19.54, 20.06, 18.85, 19.71, 19.29,
                19.59, 18.7
              ],
              "comparisonValues": [19.28],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall innleggelser pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.3<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    85, 233, 203, 111, 194, 417, 414, 174, 575, 254, 346, 452,
                    527, 319, 697, 648, 347, 278, 392, 256
                  ],
                  "comparisonValues": [6922]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i23",
              "name": "Hoftebrudd, reinnleggelser",
              "href": "/helseatlas/files/Hoftebrudd.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                16.98, 11.42, 14.91, 18.72, 15.09, 16.27, 15.6, 14.42, 16.42,
                14.21, 18.02, 12.57, 16.28, 16.07, 14.25, 17.0, 11.86, 15.36,
                14.48, 18.15
              ],
              "comparisonValues": [15.37],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_antall", "value": "Reinnleggelser" },
                { "name": "column_innbyggere", "value": "Primærinnleggelser" },
                { "name": "column_text", "value": "Andel (%) reinnleggelser" },
                {
                  "name": "metatext",
                  "value": "Reinnleggelser som andel av primære innleggelser for hoftebrudd, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste andel/laveste andel) = 1.6<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    13, 24, 28, 19, 27, 64, 59, 23, 87, 34, 57, 52, 79, 47, 90,
                    101, 38, 39, 51, 43
                  ],
                  "comparisonValues": [974]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    76, 213, 186, 99, 175, 391, 374, 160, 530, 235, 318, 414,
                    485, 290, 627, 588, 317, 255, 352, 236
                  ],
                  "comparisonValues": [6322]
                }
              ]
            },
            {
              "id": "i24",
              "name": "Håndleddsbrudd, konservativ behandling (andeler)",
              "href": "/helseatlas/files/Handleddsbrudd.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                90.39, 77.06, 77.13, 86.16, 79.37, 79.31, 71.27, 64.49, 73.54,
                78.11, 75.25, 73.32, 81.44, 90.14, 78.28, 76.43, 51.77, 72.33,
                76.62, 89.86
              ],
              "comparisonValues": [76.25],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_antall", "value": "Konservativt behandlet" },
                { "name": "column_innbyggere", "value": "Alle håndleddsbrudd" },
                {
                  "name": "column_text",
                  "value": "Andel (%) konservativt behandlet"
                },
                {
                  "name": "metatext",
                  "value": "Konservativt (ikke-operativt) behandlede håndleddsbrudd som andel av alle håndleddsbrudd, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste andel/laveste andel) = 1.7<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    29, 68, 55, 37, 62, 121, 120, 48, 199, 75, 107, 119, 183,
                    111, 187, 220, 68, 75, 109, 95
                  ],
                  "comparisonValues": [2089]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    32, 89, 72, 43, 78, 153, 167, 74, 270, 96, 142, 163, 227,
                    123, 239, 288, 133, 103, 143, 106
                  ],
                  "comparisonValues": [2741]
                }
              ]
            },
            {
              "id": "i25",
              "name": "Lårhalsbrudd, behandling med protese (andeler)",
              "href": "/helseatlas/files/Handleddsbrudd.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                58.16, 53.28, 70.33, 56.49, 59.62, 78.61, 73.56, 64.49, 75.06,
                69.12, 69.56, 88.28, 76.67, 85.64, 80.7, 81.22, 70.03, 71.95,
                72.94, 77.14
              ],
              "comparisonValues": [74.69],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_antall", "value": "Protese" },
                { "name": "column_innbyggere", "value": "Alle lårhalsbrudd" },
                {
                  "name": "column_text",
                  "value": "Andel (%) behandlet med protese"
                },
                {
                  "name": "metatext",
                  "value": "Lårhalsbrudd behandlet med protese som andel av alle lårhalsbrudd, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste andel/laveste andel) = 1.7<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    32, 73, 82, 37, 65, 188, 165, 55, 240, 106, 141, 227, 241,
                    139, 314, 282, 135, 117, 167, 107
                  ],
                  "comparisonValues": [2912]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    55, 138, 117, 65, 109, 241, 225, 86, 321, 153, 206, 259,
                    315, 164, 391, 348, 194, 163, 229, 140
                  ],
                  "comparisonValues": [3917]
                }
              ]
            }
          ]
        },
        {
          "id": "t5",
          "name": "Nevrologi",
          "indicators": [
            {
              "id": "i26",
              "name": "Hjerneslag, akutte innleggelser",
              "href": "/helseatlas/files/Hjerneslag.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                15.27, 18.13, 15.61, 14.97, 15.05, 17.27, 14.41, 16.35, 15.11,
                14.41, 12.62, 13.78, 14.47, 15.93, 15.26, 13.87, 12.88, 14.55,
                13.84, 15.96
              ],
              "comparisonValues": [14.83],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall innleggelser pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.4<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    77, 244, 168, 100, 169, 354, 306, 160, 445, 192, 239, 296,
                    398, 248, 537, 478, 228, 206, 279, 207
                  ],
                  "comparisonValues": [5329]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i27",
              "name": "Hjerneslag, reinnleggelser",
              "href": "/helseatlas/files/Hjerneslag.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                11.86, 8.46, 12.89, 11.48, 15.39, 12.53, 15.07, 16.18, 13.74,
                15.83, 12.68, 12.69, 14.03, 14.44, 11.02, 10.25, 11.84, 12.13,
                10.96, 14.3
              ],
              "comparisonValues": [12.73],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_antall", "value": "Reinnleggelser" },
                { "name": "column_innbyggere", "value": "Primærinnleggelser" },
                { "name": "column_text", "value": "Andel (%) reinnleggelser" },
                {
                  "name": "metatext",
                  "value": "Reinnleggelser som andel av primære innleggelser for hjerneslag, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste andel/laveste andel) = 1.9<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    7, 17, 17, 9, 21, 36, 38, 21, 51, 25, 25, 30, 45, 29, 47,
                    38, 21, 20, 24, 24
                  ],
                  "comparisonValues": [545]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    59, 199, 134, 78, 136, 288, 251, 128, 371, 156, 195, 235,
                    320, 202, 425, 372, 178, 163, 223, 169
                  ],
                  "comparisonValues": [4281]
                }
              ]
            },
            {
              "id": "i28",
              "name": "Hjerneslag, pasienter behandlet i slagenhet (andel)",
              "href": "/helseatlas/files/Hjerneslag.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                91.73, 88.47, 93.43, 86.81, 92.57, 82.5, 94.32, 66.94, 94.57,
                91.5, 98.67, 96.69, 99.4, 96.16, 78.57, 97.74, 84.02, 82.51,
                92.46, 96.16
              ],
              "comparisonValues": [90.49],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_antall", "value": "I slagenhet" },
                { "name": "column_innbyggere", "value": "Alle innlagte" },
                {
                  "name": "column_text",
                  "value": "Andel (%) behandlet i slagenhet"
                },
                {
                  "name": "metatext",
                  "value": "Andel pasienter behandlet i slagenhet, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2014-2015.<br><br>Forholdstall (høyeste andel/laveste andel) = 1.5<br><br>Datakilde: Norsk hjerneslagregister<br><small><em>* På grunn av mangelende informasjon om bydel, er Oslo og Akuershus her ikke definert på samme måte som ellers i atlaset. Opptaksområdene OUS og Indre Oslo er slått sammen til Oslo. OUS og Indre Oslo har derfor samme verdier her. Se rapport for korrekte tall og definisjoner.</em></small>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    51, 184, 132, 73, 141, 278, 250, 88, 315, 140, 185, 256,
                    179, 410, 326, 403, 169, 137, 225, 410
                  ],
                  "comparisonValues": [3937]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    55, 208, 142, 84, 151, 337, 265, 133, 334, 153, 187, 265,
                    180, 427, 413, 412, 201, 166, 243, 427
                  ],
                  "comparisonValues": [4352]
                }
              ]
            },
            {
              "id": "i29",
              "name": "Hjerneslag, pasienter innlagt innen 4 timer etter symptomdebut (andel)",
              "href": "/helseatlas/files/Hjerneslag.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                37.81, 36.67, 45.84, 36.99, 37.45, 35.81, 46.59, 45.6, 43.73,
                49.91, 54.07, 38.5, 40.02, 42.94, 42.86, 39.44, 39.39, 44.59,
                43.7, 42.94
              ],
              "comparisonValues": [42.07],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_antall", "value": "Innlagte ≤ 4t" },
                { "name": "column_innbyggere", "value": "Alle innlagte" },
                { "name": "column_text", "value": "Andel (%) innlagte ≤ 4t" },
                {
                  "name": "metatext",
                  "value": "Andel pasienter innlagt innen 4 timer etter symptomdebut, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2014-2015.<br><br>Forholdstall (høyeste andel/laveste andel) = 1.5<br><br>Datakilde: Norsk hjerneslagregister<br><small><em>* På grunn av mangelende informasjon om bydel, er Oslo og Akuershus her ikke definert på samme måte som ellers i atlaset. Opptaksområdene OUS og Indre Oslo er slått sammen til Oslo. OUS og Indre Oslo har derfor samme verdier her. Se rapport for korrekte tall og definisjoner.</em></small>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    20, 76, 66, 31, 57, 121, 124, 60, 146, 77, 101, 102, 72,
                    183, 177, 163, 79, 75, 107, 183
                  ],
                  "comparisonValues": [1832]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    55, 208, 142, 84, 151, 337, 265, 133, 334, 153, 187, 265,
                    180, 427, 413, 412, 201, 166, 243, 427
                  ],
                  "comparisonValues": [4352]
                }
              ]
            },
            {
              "id": "i30",
              "name": "Demens, poliklinikk",
              "href": "/helseatlas/files/Demens.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                "NaN",
                17.77,
                "NaN",
                "NaN",
                7.74,
                15.19,
                15.16,
                6.47,
                16.53,
                11.97,
                12.94,
                8.86,
                6.07,
                34.35,
                11.61,
                8.79,
                15.3,
                3.42,
                6.42,
                37.88
              ],
              "comparisonValues": [12.48],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall konsultasjoner pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 11.1<br><br>Datakilde: NPR/SSB<br><small><em>* Det er ikke beregnet kjønns- og aldersjusterte rater for opptaksområder med færre enn 30 hendelser. Se rapport (kapittel 4.3) for mer detaljert beskrivelse.</em></small>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    14, 242, 22, 9, 88, 312, 317, 61, 484, 157, 246, 194, 177,
                    528, 408, 303, 268, 48, 131, 475
                  ],
                  "comparisonValues": [4483]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i31",
              "name": "Parkinson sykdom, poliklinikk",
              "href": "/helseatlas/files/Demens.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                9.32, 14.32, 12.0, 11.79, 16.0, 8.3, 14.0, 14.11, 14.27, 13.91,
                16.48, 15.67, 9.38, 17.41, 13.17, 15.19, 19.43, 11.17, 11.0,
                15.23
              ],
              "comparisonValues": [13.66],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall konsultasjoner pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 2.3<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    49, 201, 130, 80, 182, 171, 289, 133, 418, 184, 317, 349,
                    278, 253, 465, 526, 350, 157, 227, 181
                  ],
                  "comparisonValues": [4941]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            }
          ]
        },
        {
          "id": "t6",
          "name": "Kreftbehandling",
          "indicators": [
            {
              "id": "i32",
              "name": "Medikamentell behandling, pasienter",
              "href": "/helseatlas/files/Kreft.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                6.5, 7.42, 6.6, 7.51, 10.37, 8.81, 10.47, 8.69, 8.09, 8.74,
                10.52, 7.56, 8.79, 9.18, 7.78, 9.74, 12.02, 9.42, 9.56, 9.23
              ],
              "comparisonValues": [8.98],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall pasienter pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 1.9<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    35, 104, 73, 52, 118, 182, 215, 81, 237, 115, 203, 170, 262,
                    133, 275, 337, 218, 132, 196, 113
                  ],
                  "comparisonValues": [3252]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i33",
              "name": "Strålebehandling, pasienter",
              "href": "/helseatlas/files/Kreft.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                7.97, 9.65, 9.37, 6.79, 6.83, 8.22, 9.5, 6.06, 10.49, 9.7, 9.27,
                7.86, 7.56, 9.77, 8.29, 6.73, 7.3, 5.52, 10.89, 9.23
              ],
              "comparisonValues": [8.44],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall pasienter pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 2.0<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    42, 134, 103, 47, 79, 170, 197, 57, 307, 129, 178, 175, 225,
                    141, 295, 232, 133, 77, 223, 111
                  ],
                  "comparisonValues": [3056]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            }
          ]
        },
        {
          "id": "t7",
          "name": "Øyesykdommer",
          "indicators": [
            {
              "id": "i34",
              "name": "Grå stær, inngrep",
              "href": "/helseatlas/files/Oyesykdommer.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                56.68, 56.22, 66.31, 47.23, 64.03, 64.17, 60.56, 80.26, 69.91,
                52.7, 85.43, 43.12, 45.22, 47.4, 45.44, 61.04, 41.97, 60.6,
                75.1, 48.46
              ],
              "comparisonValues": [58.05],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall inngrep pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 2.0<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    284, 770, 715, 319, 719, 1318, 1255, 756, 2048, 692, 1627,
                    945, 1312, 703, 1595, 2102, 753, 850, 1523, 591
                  ],
                  "comparisonValues": [20876]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            },
            {
              "id": "i35",
              "name": "Injeksjonsbehandling, pasienter",
              "href": "/helseatlas/files/Oyesykdommer.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                20.05, 23.13, 19.11, 15.16, 16.81, 20.57, 16.76, 10.47, 13.46,
                13.14, 21.19, 20.21, 18.93, 20.94, 14.11, 19.26, 20.54, 14.7,
                14.47, 21.21
              ],
              "comparisonValues": [17.65],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Injeksjonsbehandling i øyet for tilstandene aldersbetinget makula degenerasjon (AMD), diabetisk retinopati og blodpropp.<br><br> Rate: Antall pasienter pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, gjennomsnitt for årene 2013-2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 2.2<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    97, 312, 205, 101, 187, 422, 354, 100, 395, 173, 401, 433,
                    526, 330, 495, 662, 364, 208, 291, 276
                  ],
                  "comparisonValues": [6334]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5054, 13700, 10815, 6721, 11219, 20548, 20861, 9515, 29339,
                    13192, 19056, 21830, 28648, 15113, 35111, 34438, 17862,
                    14098, 20283, 12527
                  ],
                  "comparisonValues": [359928]
                }
              ]
            }
          ]
        },
        {
          "id": "t8",
          "name": "Annet",
          "indicators": [
            {
              "id": "i36",
              "name": "Høreapparat, pasienter",
              "href": "/helseatlas/files/Horeapparat.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                73.21, 67.23, 53.49, 58.26, 49.02, 18.29, 56.26, 48.98, 49.99,
                52.29, 51.01, 36.57, 39.83, 39.69, 44.67, 47.39, 50.32, 46.39,
                56.56, 42.42
              ],
              "comparisonValues": [47.03],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall pasienter som fikk tilpasset nytt høreapparat pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, 2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 4.0<br><br>Datakilde: NPR/SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    370, 934, 584, 396, 560, 382, 1188, 471, 1489, 703, 991,
                    804, 1158, 604, 1584, 1660, 915, 658, 1164, 547
                  ],
                  "comparisonValues": [17162]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5135, 13926, 10917, 6803, 11374, 20852, 21029, 9560, 29754,
                    13377, 19439, 22096, 29568, 14997, 35385, 34961, 18243,
                    14143, 20625, 12754
                  ],
                  "comparisonValues": [364938]
                }
              ]
            },
            {
              "id": "i37",
              "name": "Biologisk legemiddel, pasienter",
              "href": "/helseatlas/files/Biologiske.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                "NaN",
                3.46,
                3.83,
                "NaN",
                "NaN",
                2.16,
                2.63,
                "NaN",
                2.77,
                3.26,
                3.7,
                2.04,
                2.18,
                2.58,
                2.17,
                2.66,
                2.91,
                4.18,
                3.75,
                2.51
              ],
              "comparisonValues": [2.79],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Rate" },
                { "name": "column_antall", "value": "Antall" },
                { "name": "column_innbyggere", "value": "Innbyggere" },
                {
                  "name": "column_text",
                  "value": "Rate. Antall pr. 1 000 innbyggere"
                },
                {
                  "name": "metatext",
                  "value": "Rate: Antall pasienter pr. 1 000 innbyggere, justert for kjønn og alder, fordelt på opptaksområder, 2015.<br><br>Forholdstall (høyeste rate/laveste rate) = 2.0<br><br>Datakilde: NPR/SSB<br><small><em>* Det er ikke beregnet kjønns- og aldersjusterte rater for opptaksområder med færre enn 30 hendelser. Se rapport (kapittel 4.3) for mer detaljert beskrivelse.</em></small>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    19, 49, 42, 24, 20, 45, 53, 29, 82, 43, 72, 46, 66, 37, 76,
                    93, 54, 59, 78, 32
                  ],
                  "comparisonValues": [1019]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    5135, 13926, 10917, 6803, 11374, 20852, 21029, 9560, 29754,
                    13377, 19439, 22096, 29568, 14997, 35385, 34961, 18243,
                    14143, 20625, 12754
                  ],
                  "comparisonValues": [364938]
                }
              ]
            }
          ]
        },
        {
          "id": "t9",
          "name": "Befolkningsutvikling",
          "indicators": [
            {
              "id": "i38",
              "name": "Andel eldre i 2017",
              "href": "/helseatlas/files/Befolkningsutvikling.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                6.87467990387267, 7.41720127262296, 8.03682580122174,
                8.81888962393771, 8.34447079111878, 6.68384511674206,
                8.02276649208319, 8.70077811836831, 6.7220886170638,
                7.43072700059097, 5.46116538278283, 7.62949679680228,
                5.98350111526796, 5.47582519065777, 8.88649572478724,
                7.27262654201925, 7.96928527191543, 8.19586052496437,
                6.96435042504879, 4.44017449106772
              ],
              "comparisonValues": [7.023330849015],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_antall", "value": "Antall eldre" },
                { "name": "column_text", "value": "Andel (%) eldre i 2017" },
                { "name": "column_innbyggere", "value": "Totalbefolkning" },
                {
                  "name": "metatext",
                  "value": "Eldre som andel av totalbefolkningen, 2017.<br><br><br>Datakilde: SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    5235, 14221, 11104, 6932, 11613, 21218, 21200, 9594, 30104,
                    13454, 19829, 22294, 30420, 14705, 35565, 35443, 18401,
                    14204, 20948, 12825
                  ],
                  "comparisonValues": [369309]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "values": [
                    76149, 191730, 138164, 78604, 139170, 317452, 264248,
                    110266, 447837, 181059, 363091, 292208, 508398, 268544,
                    400214, 487348, 230899, 173307, 300789, 288840
                  ],
                  "comparisonValues": [5258317]
                }
              ]
            },
            {
              "id": "i39",
              "name": "Andel eldre i 2040",
              "href": "/helseatlas/files/Befolkningsutvikling.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                12.6751859999506, 13.071735777848, 13.9254043641436,
                14.9585402245432, 13.6107299757052, 11.1698961708882,
                13.4932301485808, 14.7800869168203, 10.9358025315176,
                12.3045540885741, 9.90480110036498, 12.5548411551223,
                10.2752082063934, 8.69500132422878, 14.2321616100745,
                11.936169961561, 13.1769659460674, 14.0395165571876,
                11.5478101597089, 8.20989906693846
              ],
              "comparisonValues": [11.6956799578486],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Andel (%)" },
                { "name": "column_antall", "value": "Antall eldre" },
                { "name": "column_text", "value": "Andel (%) eldre i 2040" },
                { "name": "column_innbyggere", "value": "Totalbefolkning" },
                {
                  "name": "metatext",
                  "value": "Eldre som andel av totalbefolkningen, 2040.<br><br>Basert på SSBs mellomalternativ (hovedalternativ) for befolkningsfremskrivninger<br><br>Datakilde: SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    10256, 27293, 20964, 12231, 21625, 42225, 40939, 17481,
                    60599, 26300, 45727, 44384, 68635, 30204, 64238, 70768,
                    36365, 26973, 43376, 29925
                  ],
                  "comparisonValues": [740508]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "values": [
                    80914, 208794, 150545, 81766, 158882, 378025, 303404,
                    118274, 554134, 213742, 461665, 353521, 667967, 347372,
                    451358, 592887, 275974, 192122, 375621, 364499
                  ],
                  "comparisonValues": [6331466]
                }
              ]
            },
            {
              "id": "i40",
              "name": "Vekst i antall eldre",
              "href": "/helseatlas/files/Befolkningsutvikling.pdf",
              "type": "numeric",
              "precision": "0",
              "values": [
                95.9121298949379, 91.9203994093242, 88.7968299711816,
                76.4425851125216, 86.2137259967278, 99.0055613158639,
                93.1084905660377, 82.2076297686054, 101.29883072017,
                95.4808978742382, 130.606687175349, 99.0849555934332,
                125.624589086128, 105.399523971438, 80.6213974413047,
                99.6670710718619, 97.6251290690723, 89.8972120529428,
                107.065113614665, 133.333333333333
              ],
              "comparisonValues": [100.511766569458],
              "properties": [
                { "name": "precision", "value": "0" },
                { "name": "column_name", "value": "Opptaksområde" },
                { "name": "column_value", "value": "Vekst (%)" },
                { "name": "column_antall", "value": "Eldre i 2017" },
                { "name": "column_text", "value": "Vekst (%) i antall eldre" },
                { "name": "column_innbyggere", "value": "Eldre i 2040" },
                {
                  "name": "metatext",
                  "value": "Vekst i antall eldre fra 2017 til 2040.<br><br>Basert på SSBs mellomalternativ (hovedalternativ) for befolkningsfremskrivninger<br><br>Datakilde: SSB<br>"
                }
              ],
              "associates": [
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    5235, 14221, 11104, 6932, 11613, 21218, 21200, 9594, 30104,
                    13454, 19829, 22294, 30420, 14705, 35565, 35443, 18401,
                    14204, 20948, 12825
                  ],
                  "comparisonValues": [369309]
                },
                {
                  "name": "innbyggere",
                  "type": "numeric",
                  "values": [
                    10256, 27293, 20964, 12231, 21625, 42225, 40939, 17481,
                    60599, 26300, 45727, 44384, 68635, 30204, 64238, 70768,
                    36365, 26973, 43376, 29925
                  ],
                  "comparisonValues": [740508]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
