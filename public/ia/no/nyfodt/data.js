{
  "version": "1.3",
  "geographies": [
    {
      "id": "HF-områder",
      "name": "HF-områder",
      "type": "polygon",
      "features": [
        { "id": "2", "name": "UNN/Finnmark" },
        { "id": "4", "name": "Nordland" },
        { "id": "7", "name": "Trøndelag" },
        { "id": "8", "name": "Møre og Romsdal" },
        { "id": "11", "name": "Bergen/Førde" },
        { "id": "12", "name": "Fonna" },
        { "id": "13", "name": "Stavanger" },
        { "id": "14", "name": "Østfold" },
        { "id": "15", "name": "AHUS" },
        { "id": "16", "name": "OUS" },
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
          "name": "Innleggelser",
          "indicators": [
            {
              "id": "i0",
              "name": "Pasienter",
              "date": "Under 34.0 uker",
              "type": "numeric",
              "precision": "0",
              "values": [
                885.7, 874.1, 868.8, 845.4, 845.4, 836.2, 887.5, 893.5, 886.2,
                816.2, 807.7, 961.6, 807.4, 834.6, 900.8
              ],
              "comparisonValues": [863.6],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Alle innleggelsesårsaker. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Under 34 uker (Tidlig premature). Forholdstall: høyeste rate / laveste rate = 1.19"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "values": [
                    315, 278, 587, 291, 776, 293, 640, 338, 668, 1077, 442, 599,
                    270, 260, 373
                  ],
                  "comparisonValues": [7207]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    279, 243, 510, 246, 656, 245, 568, 302, 592, 879, 357, 576,
                    218, 217, 336
                  ],
                  "comparisonValues": [6224]
                }
              ]
            },
            {
              "id": "i0",
              "name": "Pasienter",
              "date": "34.0 til 36.6 uker",
              "type": "numeric",
              "precision": "0",
              "values": [
                490.7, 409.1, 407.9, 432.3, 347.8, 585.8, 387.9, 506.7, 440.6,
                422.9, 427.7, 415.8, 711.3, 636.2, 592.6
              ],
              "comparisonValues": [453],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Alle innleggelsesårsaker. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: 34 uker til 36 uker og 6 dager. (Sent premature). Forholdstall: høyeste rate / laveste rate = 2.05"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    697, 638, 1368, 687, 1754, 664, 1441, 827, 1598, 2185, 1176,
                    1277, 613, 481, 1004
                  ],
                  "comparisonValues": [16410]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    342, 261, 558, 297, 610, 389, 559, 419, 704, 924, 503, 531,
                    436, 306, 595
                  ],
                  "comparisonValues": [7434]
                }
              ]
            },
            {
              "id": "i0",
              "name": "Pasienter",
              "date": "Over 36.6 uker (terminfødte)",
              "type": "numeric",
              "precision": "1",
              "values": [
                54.7, 66.4, 55.8, 55.9, 44.1, 83, 71.2, 66.2, 58.3, 51.5, 49.4,
                50.6, 115.7, 96.8, 88
              ],
              "comparisonValues": [61.6],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Alle innleggelsesårsaker. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Over 36 uker og 6 dager (Terminfødte). Forholdstall: høyeste rate / laveste rate = 2.62"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    16700, 12705, 29658, 16118, 37594, 11846, 27704, 17078,
                    32055, 49765, 20787, 28225, 12857, 9527, 19630
                  ],
                  "comparisonValues": [342249]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    914, 844, 1654, 901, 1658, 983, 1972, 1131, 1868, 2564,
                    1026, 1427, 1488, 922, 1728
                  ],
                  "comparisonValues": [21080]
                }
              ]
            },
            {
              "id": "i0",
              "name": "Pasienter",
              "date": "Alle",
              "type": "numeric",
              "precision": "0",
              "values": [
                86.4, 98.7, 85.9, 84.2, 72.3, 124.7, 102.6, 101.2, 91.9, 81.9,
                83.1, 83.9, 155.8, 139.8, 125.8
              ],
              "comparisonValues": [94.4],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Alle innleggelsesårsaker. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Alle fødte. Forholdstall: høyeste rate / laveste rate = 2.16"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    17771, 13656, 31692, 17140, 40458, 12964, 30193, 18305,
                    34433, 53323, 22695, 30220, 13750, 10337, 21131
                  ],
                  "comparisonValues": [368068]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    1535, 1348, 2722, 1444, 2924, 1617, 3099, 1852, 3164, 4367,
                    1886, 2534, 2142, 1445, 2659
                  ],
                  "comparisonValues": [34738]
                }
              ]
            },
            {
              "id": "i1",
              "name": "Liggedøgn",
              "date": "Under 34.0 uker",
              "type": "numeric",
              "precision": "0",
              "values": [
                43790.5, 39996.4, 35097.1, 36955.3, 32475.5, 33365.2, 33471.9,
                36600.6, 38802.4, 29025.1, 32416.3, 34190.3, 32992.6, 34300,
                38463.8
              ],
              "comparisonValues": [34577.5],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Alle innleggelsesårsaker. Rate for antall liggedøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Under 34 uker (Tidlig premature). Forholdstall: høyeste rate / laveste rate = 1.51"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "values": [
                    315, 278, 587, 291, 776, 293, 640, 338, 668, 1077, 442, 599,
                    270, 260, 373
                  ],
                  "comparisonValues": [7207]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    13794, 11119, 20602, 10754, 25201, 9776, 21422, 12371,
                    25920, 31260, 14328, 20480, 8908, 8918, 14347
                  ],
                  "comparisonValues": [249200]
                }
              ]
            },
            {
              "id": "i1",
              "name": "Liggedøgn",
              "date": "34.0 til 36.6 uker",
              "type": "numeric",
              "precision": "0",
              "values": [
                7901, 5468.7, 5295.3, 5116.4, 3440.1, 6744, 4112.4, 6662.6,
                5200.9, 4018.3, 5669.2, 3823.8, 6727.6, 6887.7, 6335.7
              ],
              "comparisonValues": [5127.5],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Alle innleggelsesårsaker. Rate for antall liggedøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: 34 uker til 36 uker og 6 dager. (Sent premature). Forholdstall: høyeste rate / laveste rate = 2.3"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "values": [
                    697, 638, 1368, 687, 1754, 664, 1441, 827, 1598, 2185, 1176,
                    1277, 613, 481, 1004
                  ],
                  "comparisonValues": [16410]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    5507, 3489, 7244, 3515, 6034, 4478, 5926, 5510, 8311, 8780,
                    6667, 4883, 4124, 3313, 6361
                  ],
                  "comparisonValues": [84142]
                }
              ]
            },
            {
              "id": "i1",
              "name": "Liggedøgn",
              "date": "Over 36.6 uker (terminfødte)",
              "type": "numeric",
              "precision": "0",
              "values": [
                307.6, 475.1, 336, 375.8, 173.2, 496.7, 332.1, 396, 321.8,
                252.1, 327.2, 237.7, 518.2, 513.5, 409.9
              ],
              "comparisonValues": [325.9],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Alle innleggelsesårsaker. Rate for antall liggedøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Over 36 uker og 6 dager (Terminfødte). Forholdstall: høyeste rate / laveste rate = 2.99"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "values": [
                    16700, 12705, 29658, 16118, 37594, 11846, 27704, 17078,
                    32055, 49765, 20787, 28225, 12857, 9527, 19630
                  ],
                  "comparisonValues": [342249]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    5137, 6036, 9966, 6057, 6510, 5884, 9200, 6763, 10314,
                    12545, 6801, 6710, 6662, 4892, 8046
                  ],
                  "comparisonValues": [111523]
                }
              ]
            },
            {
              "id": "i1",
              "name": "Liggedøgn",
              "date": "Alle",
              "type": "numeric",
              "precision": "0",
              "values": [
                1375.2, 1511.7, 1193.1, 1185.9, 932.9, 1553.4, 1210.5, 1346.3,
                1293.7, 986.2, 1224.8, 1061.3, 1432.3, 1656.5, 1360.7
              ],
              "comparisonValues": [1208.6],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Alle innleggelsesårsaker. Rate for antall liggedøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Alle fødte. Forholdstall: høyeste rate / laveste rate = 1.78"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "values": [
                    17771, 13656, 31692, 17140, 40458, 12964, 30193, 18305,
                    34433, 53323, 22695, 30220, 13750, 10337, 21131
                  ],
                  "comparisonValues": [368068]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    24438, 20644, 37812, 20326, 37745, 20138, 36548, 24644,
                    44545, 52585, 27796, 32073, 19694, 17123, 28754
                  ],
                  "comparisonValues": [444865]
                }
              ]
            }
          ]
        },
        {
          "id": "t1",
          "name": "Antibiotikabehandling",
          "indicators": [
            {
              "id": "i2",
              "name": "Pasienter",
              "date": "Under 34.0 uker",
              "type": "numeric",
              "precision": "0",
              "values": [
                552.4, 500, 480.4, 491.4, 586.3, 471, 595.3, 541.4, 434.1,
                434.5, 407.2, 672.8, 422.2, 526.9, 613.9
              ],
              "comparisonValues": [515.6],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med antibiotikabehandling. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Under 34 uker (Tidlig premature). Forholdstall: høyeste rate / laveste rate = 1.65"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "values": [
                    315, 278, 587, 291, 776, 293, 640, 338, 668, 1077, 442, 599,
                    270, 260, 373
                  ],
                  "comparisonValues": [7207]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    174, 139, 282, 143, 455, 138, 381, 183, 290, 468, 180, 403,
                    114, 137, 229
                  ],
                  "comparisonValues": [3716]
                }
              ]
            },
            {
              "id": "i2",
              "name": "Pasienter",
              "date": "34.0 til 36.6 uker",
              "type": "numeric",
              "precision": "0",
              "values": [
                99, 105, 74.6, 77.1, 97.5, 72.3, 145, 89.5, 69.5, 108, 74,
                154.3, 78.3, 83.2, 146.4
              ],
              "comparisonValues": [101.1],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med antibiotikabehandling. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: 34 uker til 36 uker og 6 dager. (Sent premature). Forholdstall: høyeste rate / laveste rate = 2.22"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    697, 638, 1368, 687, 1754, 664, 1441, 827, 1598, 2185, 1176,
                    1277, 613, 481, 1004
                  ],
                  "comparisonValues": [16410]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    69, 67, 102, 53, 171, 48, 209, 74, 111, 236, 87, 197, 48,
                    40, 147
                  ],
                  "comparisonValues": [1659]
                }
              ]
            },
            {
              "id": "i2",
              "name": "Pasienter",
              "date": "Over 36.6 uker (terminfødte)",
              "type": "numeric",
              "precision": "1",
              "values": [
                23.2, 30.9, 25.2, 23.1, 15.9, 23.6, 36.7, 30.4, 20.5, 24, 21.4,
                30.6, 26.1, 23.9, 30.6
              ],
              "comparisonValues": [25.2],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med antibiotikabehandling. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Over 36 uker og 6 dager (Terminfødte). Forholdstall: høyeste rate / laveste rate = 2.31"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    16700, 12705, 29658, 16118, 37594, 11846, 27704, 17078,
                    32055, 49765, 20787, 28225, 12857, 9527, 19630
                  ],
                  "comparisonValues": [342249]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    387, 392, 747, 373, 598, 279, 1016, 519, 656, 1192, 445,
                    864, 336, 228, 600
                  ],
                  "comparisonValues": [8632]
                }
              ]
            },
            {
              "id": "i2",
              "name": "Pasienter",
              "date": "Alle",
              "type": "numeric",
              "precision": "1",
              "values": [
                35.5, 43.8, 35.7, 33.2, 30.3, 35.9, 53.2, 42.4, 30.7, 35.6,
                31.4, 48.4, 36.2, 39.2, 46.2
              ],
              "comparisonValues": [38.1],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med antibiotikabehandling. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Alle fødte. Forholdstall: høyeste rate / laveste rate = 1.76"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    17771, 13656, 31692, 17140, 40458, 12964, 30193, 18305,
                    34433, 53323, 22695, 30220, 13750, 10337, 21131
                  ],
                  "comparisonValues": [368068]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    630, 598, 1131, 569, 1224, 465, 1606, 776, 1057, 1896, 712,
                    1464, 498, 405, 976
                  ],
                  "comparisonValues": [14007]
                }
              ]
            },
            {
              "id": "i3",
              "name": "Behandlingsdøgn",
              "date": "Under 34.0 uker",
              "type": "numeric",
              "precision": "0",
              "values": [
                5015.9, 5550.4, 4521.3, 8051.5, 5554.1, 3747.4, 4650, 5275.1,
                5702.1, 4292.5, 4133.5, 5272.1, 3592.6, 5534.6, 5983.9
              ],
              "comparisonValues": [5043],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med antibiotikabehandling. Rate for antall behandlingsdøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Under 34 uker (Tidlig premature). Forholdstall: høyeste rate / laveste rate = 2.24"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "values": [
                    315, 278, 587, 291, 776, 293, 640, 338, 668, 1077, 442, 599,
                    270, 260, 373
                  ],
                  "comparisonValues": [7207]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    1580, 1543, 2654, 2343, 4310, 1098, 2976, 1783, 3809, 4623,
                    1827, 3158, 970, 1439, 2232
                  ],
                  "comparisonValues": [36345]
                }
              ]
            },
            {
              "id": "i3",
              "name": "Behandlingsdøgn",
              "date": "34.0 til 36.6 uker",
              "type": "numeric",
              "precision": "0",
              "values": [
                562.4, 639.5, 390.4, 489.1, 741.2, 480.4, 711.3, 529.6, 460.6,
                540, 464.3, 544.2, 332.8, 409.6, 783.9
              ],
              "comparisonValues": [554.4],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med antibiotikabehandling. Rate for antall behandlingsdøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: 34 uker til 36 uker og 6 dager. (Sent premature). Forholdstall: høyeste rate / laveste rate = 2.36"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "values": [
                    697, 638, 1368, 687, 1754, 664, 1441, 827, 1598, 2185, 1176,
                    1277, 613, 481, 1004
                  ],
                  "comparisonValues": [16410]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    392, 408, 534, 336, 1300, 319, 1025, 438, 736, 1180, 546,
                    695, 204, 197, 787
                  ],
                  "comparisonValues": [9097]
                }
              ]
            },
            {
              "id": "i3",
              "name": "Behandlingsdøgn",
              "date": "Over 36.6 uker (terminfødte)",
              "type": "numeric",
              "precision": "0",
              "values": [
                130.1, 185.9, 160, 152.9, 81.1, 139.2, 184.1, 189.6, 133.7,
                131.9, 130.4, 141.6, 156.2, 144.6, 173.4
              ],
              "comparisonValues": [143.5],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med antibiotikabehandling. Rate for antall behandlingsdøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Over 36 uker og 6 dager (Terminfødte). Forholdstall: høyeste rate / laveste rate = 2.34"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    16700, 12705, 29658, 16118, 37594, 11846, 27704, 17078,
                    32055, 49765, 20787, 28225, 12857, 9527, 19630
                  ],
                  "comparisonValues": [342249]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    2173, 2362, 4744, 2464, 3047, 1649, 5100, 3238, 4286, 6563,
                    2710, 3997, 2008, 1378, 3404
                  ],
                  "comparisonValues": [49123]
                }
              ]
            },
            {
              "id": "i3",
              "name": "Behandlingsdøgn",
              "date": "Alle",
              "type": "numeric",
              "precision": "0",
              "values": [
                233.2, 315.8, 250.3, 300.1, 214, 236.5, 301.4, 298.2, 256.5,
                231.9, 224, 259.8, 231.4, 291.6, 304
              ],
              "comparisonValues": [256.9],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med antibiotikabehandling. Rate for antall behandlingsdøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Alle fødte. Forholdstall: høyeste rate / laveste rate = 1.48"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    17771, 13656, 31692, 17140, 40458, 12964, 30193, 18305,
                    34433, 53323, 22695, 30220, 13750, 10337, 21131
                  ],
                  "comparisonValues": [368068]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    4145, 4313, 7932, 5143, 8657, 3066, 9101, 5459, 8831, 12366,
                    5083, 7850, 3182, 3014, 6423
                  ],
                  "comparisonValues": [94565]
                }
              ]
            },
            {
              "id": "i4",
              "name": "Pasienter med Sepsisdiagnose",
              "date": "Under 37.0 uker",
              "type": "numeric",
              "precision": "1",
              "values": [
                44.5, 66.6, 43, 49.1, 27.7, 30.3, 45.2, 52.4, 62.2, 56.4, 44.5,
                45.3, 29.4, 48.6, 62.5
              ],
              "comparisonValues": [47.5],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med antibiotikabehandling for pasienter med spesisdiagnose. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Under 37 uker (Premature). Forholdstall: høyeste rate / laveste rate = 2.41"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    1012, 916, 1955, 978, 2530, 957, 2081, 1165, 2266, 3262,
                    1618, 1876, 883, 741, 1377
                  ],
                  "comparisonValues": [23617]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    45, 61, 84, 48, 70, 29, 94, 61, 141, 184, 72, 85, 26, 36, 86
                  ],
                  "comparisonValues": [1122]
                }
              ]
            },
            {
              "id": "i4",
              "name": "Pasienter med Sepsisdiagnose",
              "date": "Over 36.6 uker (terminfødte)",
              "type": "numeric",
              "precision": "1",
              "values": [
                10.6, 19.9, 13, 10, 3.6, 12.1, 16, 18.9, 12.8, 13.7, 10.5, 11,
                11.8, 6.1, 14.2
              ],
              "comparisonValues": [12.1],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med antibiotikabehandling for pasienter med spesisdiagnose. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Over 36 uker og 6 dager (Terminfødte). Forholdstall: høyeste rate / laveste rate = 5.55"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    16700, 12705, 29658, 16118, 37594, 11846, 27704, 17078,
                    32055, 49765, 20787, 28225, 12857, 9527, 19630
                  ],
                  "comparisonValues": [342249]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    177, 253, 385, 161, 135, 143, 444, 322, 411, 683, 219, 311,
                    152, 58, 278
                  ],
                  "comparisonValues": [4132]
                }
              ]
            },
            {
              "id": "i4",
              "name": "Pasienter med Sepsisdiagnose",
              "date": "Alle",
              "type": "numeric",
              "precision": "1",
              "values": [
                12.5, 23, 14.8, 12.2, 5.1, 13.3, 17.8, 20.9, 16, 16.3, 12.8,
                13.1, 12.9, 9.1, 17.2
              ],
              "comparisonValues": [14.3],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med antibiotikabehandling for pasienter med spesisdiagnose. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Alle fødte. Forholdstall: høyeste rate / laveste rate = 4.54"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    17771, 13656, 31692, 17140, 40458, 12964, 30193, 18305,
                    34433, 53323, 22695, 30220, 13750, 10337, 21131
                  ],
                  "comparisonValues": [368068]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    222, 314, 469, 209, 205, 172, 538, 383, 552, 867, 291, 396,
                    178, 94, 364
                  ],
                  "comparisonValues": [5254]
                }
              ]
            }
          ]
        },
        {
          "id": "t2",
          "name": "Respiratorbehandling",
          "indicators": [
            {
              "id": "i5",
              "name": "Pasienter",
              "date": "28.0 til 36.6 uker",
              "type": "numeric",
              "precision": "1",
              "values": [
                77.1, 61.5, 53.6, 73.4, 63.5, 48.8, 45.7, 48.6, 46.9, 52.7,
                59.1, 31.5, 48.7, 52.6, 53
              ],
              "comparisonValues": [53.3],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med respiratorbehandling. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: 28 uker til 36 uker og 6 dager (Moderat premature). Forholdstall: høyeste rate / laveste rate = 2.45"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    947, 846, 1830, 927, 2347, 881, 1949, 1110, 2130, 3037,
                    1540, 1748, 821, 685, 1303
                  ],
                  "comparisonValues": [22101]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    73, 52, 98, 68, 149, 43, 89, 54, 100, 160, 91, 55, 40, 36,
                    69
                  ],
                  "comparisonValues": [1177]
                }
              ]
            },
            {
              "id": "i5",
              "name": "Pasienter",
              "date": "Over 36.6 uker (terminfødte)",
              "type": "numeric",
              "precision": "1",
              "values": [
                3.9, 3.9, 3.6, 5, 2.9, 3.5, 2.6, 3.1, 3.4, 2.9, 3.3, 1.8, 2.3,
                3.6, 2.9
              ],
              "comparisonValues": [3.1],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med respiratorbehandling. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Over 36 uker og 6 dager (Terminfødte). Forholdstall: høyeste rate / laveste rate = 2.73"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    16700, 12705, 29658, 16118, 37594, 11846, 27704, 17078,
                    32055, 49765, 20787, 28225, 12857, 9527, 19630
                  ],
                  "comparisonValues": [342249]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    65, 50, 107, 81, 110, 41, 73, 53, 109, 143, 69, 52, 30, 34,
                    57
                  ],
                  "comparisonValues": [1074]
                }
              ]
            },
            {
              "id": "i5",
              "name": "Pasienter",
              "date": "Alle",
              "type": "numeric",
              "precision": "1",
              "values": [
                10, 10.6, 8.5, 11.1, 8.7, 9.2, 7.8, 7.8, 8.7, 7.9, 8.9, 6.3,
                6.7, 9.5, 8.1
              ],
              "comparisonValues": [8.4],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med respiratorbehandling. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Alle fødte. Forholdstall: høyeste rate / laveste rate = 1.75"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    17771, 13656, 31692, 17140, 40458, 12964, 30193, 18305,
                    34433, 53323, 22695, 30220, 13750, 10337, 21131
                  ],
                  "comparisonValues": [368068]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    177, 145, 270, 190, 354, 119, 237, 143, 301, 419, 201, 191,
                    92, 98, 171
                  ],
                  "comparisonValues": [3108]
                }
              ]
            },
            {
              "id": "i6",
              "name": "Behandlingsdøgn",
              "date": "28.0 til 36.6 uker",
              "type": "numeric",
              "precision": "0",
              "values": [
                317.8, 318, 192.3, 454.2, 245.4, 158.9, 240.1, 276.6, 196.2,
                223.9, 261.7, 95.5, 214.4, 318.2, 498.1
              ],
              "comparisonValues": [250.9],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med respiratorbehandling. Rate for antall behandlingsdøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: 28 uker til 36 uker og 6 dager (Moderat premature). Forholdstall: høyeste rate / laveste rate = 5.21"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "values": [
                    947, 846, 1830, 927, 2347, 881, 1949, 1110, 2130, 3037,
                    1540, 1748, 821, 685, 1303
                  ],
                  "comparisonValues": [22101]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    301, 269, 352, 421, 576, 140, 468, 307, 418, 680, 403, 167,
                    176, 218, 649
                  ],
                  "comparisonValues": [5545]
                }
              ]
            },
            {
              "id": "i6",
              "name": "Behandlingsdøgn",
              "date": "Over 36.6 uker (terminfødte)",
              "type": "numeric",
              "precision": "1",
              "values": [
                16.4, 15.5, 18.2, 24.8, 7.7, 12.2, 11.9, 12.8, 15.9, 11.7, 17.5,
                11.8, 7.5, 25.5, 13.5
              ],
              "comparisonValues": [14],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med respiratorbehandling. Rate for antall behandlingsdøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Over 36 uker og 6 dager (Terminfødte). Forholdstall: høyeste rate / laveste rate = 3.42"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    16700, 12705, 29658, 16118, 37594, 11846, 27704, 17078,
                    32055, 49765, 20787, 28225, 12857, 9527, 19630
                  ],
                  "comparisonValues": [342249]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    274, 197, 539, 400, 291, 144, 331, 219, 511, 580, 364, 332,
                    96, 243, 265
                  ],
                  "comparisonValues": [4786]
                }
              ]
            },
            {
              "id": "i6",
              "name": "Behandlingsdøgn",
              "date": "Alle",
              "type": "numeric",
              "precision": "1",
              "values": [
                79.3, 79.5, 67.6, 116.9, 41.1, 47.6, 51.4, 61.5, 91.1, 57.8,
                72.8, 68.7, 69.2, 79.5, 75.8
              ],
              "comparisonValues": [67.7],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med respiratorbehandling. Rate for antall behandlingsdøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Alle fødte. Forholdstall: høyeste rate / laveste rate = 2.84"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    17771, 13656, 31692, 17140, 40458, 12964, 30193, 18305,
                    34433, 53323, 22695, 30220, 13750, 10337, 21131
                  ],
                  "comparisonValues": [368068]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    1410, 1086, 2143, 2004, 1663, 617, 1551, 1126, 3138, 3084,
                    1653, 2075, 952, 822, 1602
                  ],
                  "comparisonValues": [24926]
                }
              ]
            }
          ]
        },
        {
          "id": "t3",
          "name": "Lavt blodsukker (Hypoglykemi)",
          "indicators": [
            {
              "id": "i7",
              "name": "Pasienter",
              "date": "34.0 til 36.6 uker",
              "type": "numeric",
              "precision": "1",
              "values": [
                63.1, 70.5, 55.6, 32, 96.9, 39.2, 70.8, 67.7, 73.2, 55.8, 51,
                76, 65.3, 168.4, 101.6
              ],
              "comparisonValues": [70.7],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med behandling for lavt blodsukker. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: 34 uker til 36 uker og 6 dager. (Sent premature). Forholdstall: høyeste rate / laveste rate = 5.26"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    697, 638, 1368, 687, 1754, 664, 1441, 827, 1598, 2185, 1176,
                    1277, 613, 481, 1004
                  ],
                  "comparisonValues": [16410]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    44, 45, 76, 22, 170, 26, 102, 56, 117, 122, 60, 97, 40, 81,
                    102
                  ],
                  "comparisonValues": [1160]
                }
              ]
            },
            {
              "id": "i7",
              "name": "Pasienter",
              "date": "Over 36.6 uker (terminfødte)",
              "type": "numeric",
              "precision": "1",
              "values": [
                5.3, 9.4, 4.4, 3.7, 8.7, 3.8, 5.8, 4.7, 7.7, 4.8, 4.2, 4.7, 6.5,
                13.3, 8.1
              ],
              "comparisonValues": [6.1],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med behandling for lavt blodsukker. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Over 36 uker og 6 dager (Terminfødte). Forholdstall: høyeste rate / laveste rate = 3.58"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    16700, 12705, 29658, 16118, 37594, 11846, 27704, 17078,
                    32055, 49765, 20787, 28225, 12857, 9527, 19630
                  ],
                  "comparisonValues": [342249]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    89, 119, 131, 60, 328, 45, 162, 80, 247, 239, 87, 133, 84,
                    127, 159
                  ],
                  "comparisonValues": [2090]
                }
              ]
            }
          ]
        },
        {
          "id": "t4",
          "name": "Lysbehandling (Fototerapi)",
          "indicators": [
            {
              "id": "i8",
              "name": "Pasienter",
              "date": "34.0 til 36.6 uker",
              "type": "numeric",
              "precision": "0",
              "values": [
                175, 203.8, 144, 184.9, 85.5, 328.3, 133.9, 237, 172.7, 130,
                109.7, 135.5, 261, 368, 168.3
              ],
              "comparisonValues": [164.6],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med lysbehandling. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: 34 uker til 36 uker og 6 dager. (Sent premature). Forholdstall: høyeste rate / laveste rate = 4.3"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    697, 638, 1368, 687, 1754, 664, 1441, 827, 1598, 2185, 1176,
                    1277, 613, 481, 1004
                  ],
                  "comparisonValues": [16410]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    122, 130, 197, 127, 150, 218, 193, 196, 276, 284, 129, 173,
                    160, 177, 169
                  ],
                  "comparisonValues": [2701]
                }
              ]
            },
            {
              "id": "i8",
              "name": "Pasienter",
              "date": "Over 36.6 uker (terminfødte)",
              "type": "numeric",
              "precision": "1",
              "values": [
                4.6, 6.6, 4.6, 7.2, 2.5, 21.4, 6, 8, 9.5, 4.3, 3.4, 4.4, 14.2,
                29.1, 6
              ],
              "comparisonValues": [6.9],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med lysbehandling. Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Over 36 uker og 6 dager (Terminfødte). Forholdstall: høyeste rate / laveste rate = 11.63"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    16700, 12705, 29658, 16118, 37594, 11846, 27704, 17078,
                    32055, 49765, 20787, 28225, 12857, 9527, 19630
                  ],
                  "comparisonValues": [342249]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    76, 84, 135, 116, 94, 253, 165, 137, 306, 214, 71, 123, 182,
                    277, 118
                  ],
                  "comparisonValues": [2351]
                }
              ]
            }
          ]
        },
        {
          "id": "t5",
          "name": "Intensivbehandling",
          "indicators": [
            {
              "id": "i9",
              "name": "Pasienter",
              "date": "Under 37.0 uker",
              "type": "numeric",
              "precision": "0",
              "values": [
                166, 147.4, 124.8, 135, 127.3, 112.9, 112.9, 133, 141.2, 117.7,
                101.4, 124.2, 126.8, 151.1, 137.3
              ],
              "comparisonValues": [127.6],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med intensivbehandling (pasienter med ressursbruksindikator 4 eller 5). Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Under 37 uker (Premature). Forholdstall: høyeste rate / laveste rate = 1.64"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "values": [
                    1012, 916, 1955, 978, 2530, 957, 2081, 1165, 2266, 3262,
                    1618, 1876, 883, 741, 1377
                  ],
                  "comparisonValues": [23617]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    168, 135, 244, 132, 322, 108, 235, 155, 320, 384, 164, 233,
                    112, 112, 189
                  ],
                  "comparisonValues": [3013]
                }
              ]
            },
            {
              "id": "i9",
              "name": "Pasienter",
              "date": "Over 36.6 uker (terminfødte)",
              "type": "numeric",
              "precision": "1",
              "values": [
                7.5, 7.9, 6.5, 8.4, 5.9, 7.9, 6, 9.3, 8.7, 8.2, 7, 5.5, 8.1,
                10.8, 9.6
              ],
              "comparisonValues": [7.5],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med intensivbehandling (pasienter med ressursbruksindikator 4 eller 5). Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Over 36 uker og 6 dager (Terminfødte). Forholdstall: høyeste rate / laveste rate = 1.96"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    16700, 12705, 29658, 16118, 37594, 11846, 27704, 17078,
                    32055, 49765, 20787, 28225, 12857, 9527, 19630
                  ],
                  "comparisonValues": [342249]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    126, 101, 193, 135, 220, 94, 165, 159, 279, 409, 145, 156,
                    104, 103, 188
                  ],
                  "comparisonValues": [2577]
                }
              ]
            },
            {
              "id": "i9",
              "name": "Pasienter",
              "date": "Alle",
              "type": "numeric",
              "precision": "1",
              "values": [
                16.5, 17.3, 13.8, 15.6, 13.4, 15.6, 13.2, 17.2, 17.4, 14.9,
                13.6, 12.9, 15.7, 20.8, 17.8
              ],
              "comparisonValues": [15.2],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med intensivbehandling (pasienter med ressursbruksindikator 4 eller 5). Rate for antall innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Alle fødte. Forholdstall: høyeste rate / laveste rate = 1.62"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    17771, 13656, 31692, 17140, 40458, 12964, 30193, 18305,
                    34433, 53323, 22695, 30220, 13750, 10337, 21131
                  ],
                  "comparisonValues": [368068]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    294, 236, 437, 267, 542, 202, 400, 314, 599, 793, 309, 389,
                    216, 215, 377
                  ],
                  "comparisonValues": [5590]
                }
              ]
            },
            {
              "id": "i10",
              "name": "Behandlingsdøgn",
              "date": "Under 37.0 uker",
              "type": "numeric",
              "precision": "0",
              "values": [
                1819.2, 1766.4, 1651.7, 2264.8, 1382.2, 1176.6, 1182.1, 1386.3,
                1929.8, 1297.1, 1219.4, 1490.9, 1565.1, 1352.2, 1658
              ],
              "comparisonValues": [1509.2],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med intensivbehandling (pasienter med ressursbruksindikator 4 eller 5). Rate for antall behandlingsdøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Under 37 uker (Premature). Forholdstall: høyeste rate / laveste rate = 1.92"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "values": [
                    1012, 916, 1955, 978, 2530, 957, 2081, 1165, 2266, 3262,
                    1618, 1876, 883, 741, 1377
                  ],
                  "comparisonValues": [23617]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "values": [
                    1841, 1618, 3229, 2215, 3497, 1126, 2460, 1615, 4373, 4231,
                    1973, 2797, 1382, 1002, 2283
                  ],
                  "comparisonValues": [35642]
                }
              ]
            },
            {
              "id": "i10",
              "name": "Behandlingsdøgn",
              "date": "Over 36.6 uker (terminfødte)",
              "type": "numeric",
              "precision": "1",
              "values": [
                47.9, 52.9, 41, 56.3, 35.9, 52.1, 40.1, 57.7, 51.8, 45.7, 45.6,
                33.4, 34.2, 75.6, 50.4
              ],
              "comparisonValues": [45.7],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med intensivbehandling (pasienter med ressursbruksindikator 4 eller 5). Rate for antall behandlingsdøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Over 36 uker og 6 dager (Terminfødte). Forholdstall: høyeste rate / laveste rate = 2.26"
                },
                { "name": "precision", "value": 1 }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    16700, 12705, 29658, 16118, 37594, 11846, 27704, 17078,
                    32055, 49765, 20787, 28225, 12857, 9527, 19630
                  ],
                  "comparisonValues": [342249]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    800, 672, 1215, 908, 1351, 617, 1110, 985, 1661, 2274, 948,
                    944, 440, 720, 989
                  ],
                  "comparisonValues": [15634]
                }
              ]
            },
            {
              "id": "i10",
              "name": "Behandlingsdøgn",
              "date": "Alle",
              "type": "numeric",
              "precision": "0",
              "values": [
                148.6, 167.7, 140.2, 182.2, 119.8, 134.4, 118.2, 142, 175.2,
                122, 128.7, 123.8, 132.5, 166.6, 154.8
              ],
              "comparisonValues": [139.3],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Innleggelser i nyfødtavdeling før fem dagers alder. Innleggelser med intensivbehandling (pasienter med ressursbruksindikator 4 eller 5). Rate for antall behandlingsdøgn for innlagte pasienter pr. 1 000 fødte i aktuell gestasjonsalder. Gestasjonsalder: Alle fødte. Forholdstall: høyeste rate / laveste rate = 1.54"
                },
                { "name": "precision", "value": "0" }
              ],
              "associates": [
                {
                  "name": "Fødte",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    17771, 13656, 31692, 17140, 40458, 12964, 30193, 18305,
                    34433, 53323, 22695, 30220, 13750, 10337, 21131
                  ],
                  "comparisonValues": [368068]
                },
                {
                  "name": "Antall",
                  "type": "numeric",
                  "precision": "0",
                  "values": [
                    2641, 2290, 4444, 3123, 4848, 1743, 3570, 2600, 6034, 6505,
                    2921, 3741, 1822, 1722, 3272
                  ],
                  "comparisonValues": [51276]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
