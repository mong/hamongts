﻿{
  "version": "1.3",
  "geographies": [
    {
      "id": "HF-områder",
      "name": "HF-områder",
      "type": "polygon",
      "features": [
        { "id": "1", "name": "Finnmark" },
        { "id": "2", "name": "UNN" },
        { "id": "3", "name": "Nordlandsykehuset" },
        { "id": "4", "name": "Helgelandsykehuset" },
        { "id": "6", "name": "Nord-Trøndelag" },
        { "id": "7", "name": "St. Olavs" },
        { "id": "8", "name": "Møre og Romsdal" },
        { "id": "10", "name": "Førde" },
        { "id": "11", "name": "Bergen" },
        { "id": "12", "name": "Fonna" },
        { "id": "13", "name": "Stavanger" },
        { "id": "14", "name": "Østfold" },
        { "id": "15", "name": "Akershus" },
        { "id": "16", "name": "Oslo" },
        { "id": "17", "name": "Innlandet" },
        { "id": "18", "name": "Vestre Viken" },
        { "id": "19", "name": "Vestfold" },
        { "id": "20", "name": "Telemark" },
        { "id": "21", "name": "Sørlandet" }
      ],
      "comparisonFeatures": [{ "id": "1", "name": "Norway" }],
      "filters": [{ "id": "filter4", "name": "Fylke" }],
      "themes": [
        {
          "id": "t0",
          "name": "Day surgery, 2011-2013",
          "indicators": [
            {
              "id": "i0",
              "name": "Shoulder",
              "type": "numeric",
              "values": [
                252.121, 200.321, 144.635, 151.037, 218.569, 168.586, 284.777,
                219.822, 133.291, 112.621, 74.23, 185.074, 134.411, 75.062,
                160.81, 131.193, 101.697, 78.56, 133.481
              ],
              "comparisonValues": [142.774],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Inflammation of muscle tendons in the space between the shoulder joint and the acromion is a common shoulder complaint. It can be challenging to make a precise diagnosis of this problem because different conditions may present with the same findings on clinical examination. If non-surgical treatment does not improve the problem, removing bone (acromion resection) can give the tendons more space, thereby speeding up the healing process and normalisation of the shoulder function."
                }
              ],
              "associates": [
                {
                  "name": "innb",
                  "type": "numeric",
                  "values": [
                    74509, 186401, 135569, 78005, 136324, 302367, 257122,
                    108622, 427385, 176173, 346059, 281088, 373020, 623905,
                    394389, 464692, 223250, 170798, 289056
                  ],
                  "comparisonValues": [5048734]
                },
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    192, 382, 205, 126, 313, 499, 754, 249, 547, 198, 239, 541,
                    501, 406, 682, 626, 237, 140, 385
                  ],
                  "comparisonValues": [7222]
                }
              ],
              "limits": {
                "upper": [
                  "287.8",
                  "220.4",
                  "164.5",
                  "177.6",
                  "242.9",
                  "183.4",
                  "305.1",
                  "247.2",
                  "144.5",
                  "128.3",
                  "83.7",
                  "200.7",
                  "146.2",
                  "82.4",
                  "173.0",
                  "141.5",
                  "114.7",
                  "91.6",
                  "146.8",
                  "NaN"
                ],
                "lower": [
                  "216.4",
                  "180.2",
                  "124.8",
                  "124.5",
                  "194.3",
                  "153.8",
                  "264.4",
                  "192.4",
                  "122.1",
                  "96.9",
                  "64.8",
                  "169.5",
                  "122.6",
                  "67.7",
                  "148.7",
                  "120.9",
                  "88.7",
                  "65.5",
                  "120.1",
                  "NaN"
                ]
              }
            },
            {
              "id": "i1",
              "name": "Menisci",
              "type": "numeric",
              "values": [
                256.36, 255.172, 199.418, 183.742, 319.321, 294.97, 491.052,
                330.42, 210.014, 252.166, 119.022, 282.883, 265.008, 210.816,
                302.669, 263.712, 279.599, 249.269, 266.094
              ],
              "comparisonValues": [261.177],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Knee cartilage injuries of a certain scope are treated with meniscus repair surgery or partial removal of the meniscus cartilage. Treatment is most effective on acute injuries, but predisposes patients for developing arthrosis at an early age. The long-term effects of surgical treatment of meniscus injuries in knees with little or no arthrosis compared with active training is uncertain."
                }
              ],
              "associates": [
                {
                  "name": "innb",
                  "type": "numeric",
                  "values": [
                    74509, 186401, 135569, 78005, 136324, 302367, 257122,
                    108622, 427385, 176173, 346059, 281088, 373020, 623905,
                    394389, 464692, 223250, 170798, 289056
                  ],
                  "comparisonValues": [5048734]
                },
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    195, 482, 274, 146, 445, 878, 1297, 365, 875, 441, 406, 821,
                    999, 1212, 1255, 1255, 644, 438, 764
                  ],
                  "comparisonValues": [13192]
                }
              ],
              "limits": {
                "upper": [
                  "292.3",
                  "278",
                  "223.1",
                  "213.7",
                  "349.1",
                  "314.5",
                  "517.8",
                  "364.5",
                  "223.9",
                  "275.7",
                  "130.7",
                  "302.3",
                  "281.5",
                  "222.8",
                  "319.5",
                  "278.3",
                  "301.2",
                  "272.7",
                  "285",
                  "NaN"
                ],
                "lower": [
                  "220.4",
                  "232.4",
                  "175.8",
                  "153.7",
                  "289.5",
                  "275.5",
                  "464.3",
                  "296.4",
                  "196.1",
                  "228.6",
                  "107.4",
                  "263.5",
                  "248.5",
                  "198.8",
                  "285.8",
                  "249.1",
                  "258",
                  "225.8",
                  "247.2",
                  "NaN"
                ]
              }
            },
            {
              "id": "i2",
              "name": "Hallux valgus and hammer toe",
              "type": "numeric",
              "values": [
                108.302, 93.446, 97.523, 97.7, 97.366, 91.294, 115.431, 75.077,
                62.392, 67.224, 64.33, 95.428, 114.488, 92.953, 107.199,
                137.932, 107.167, 82.067, 88.453
              ],
              "comparisonValues": [95.976],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Hallux valgus is a deformation of the big toe, which is angled towards the little toe. Hammer toe is when the innermost joint is bent upwards and the outermost downwards. It may be painful to wear shoes. The treatment consists of sawing off and removing part of the bone near the joint. Screws are placed in the big toe and metal pins in the smaller toes to ensure a correct angle."
                }
              ],
              "associates": [
                {
                  "name": "innb",
                  "type": "numeric",
                  "values": [
                    74509, 186401, 135569, 78005, 136324, 302367, 257122,
                    108622, 427385, 176173, 346059, 281088, 373020, 623905,
                    394389, 464692, 223250, 170798, 289056
                  ],
                  "comparisonValues": [5048734]
                },
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    81, 178, 138, 79, 138, 270, 306, 84, 255, 117, 200, 282,
                    424, 521, 456, 658, 253, 151, 255
                  ],
                  "comparisonValues": [4846]
                }
              ],
              "limits": {
                "upper": [
                  "131.9",
                  "107.2",
                  "113.8",
                  "119.3",
                  "113.6",
                  "102.2",
                  "128.4",
                  "91.2",
                  "70.1",
                  "79.4",
                  "73.3",
                  "106.6",
                  "125.4",
                  "101",
                  "117.1",
                  "148.5",
                  "120.4",
                  "95.2",
                  "99.3",
                  "NaN"
                ],
                "lower": [
                  "84.7",
                  "79.7",
                  "81.2",
                  "76.1",
                  "81.1",
                  "80.4",
                  "102.5",
                  "58.9",
                  "54.7",
                  "55.1",
                  "55.4",
                  "84.3",
                  "103.6",
                  "84.9",
                  "97.3",
                  "127.4",
                  "93.9",
                  "68.9",
                  "77.6",
                  "NaN"
                ]
              }
            },
            {
              "id": "i3",
              "name": "Hand surgery",
              "type": "numeric",
              "values": [
                68.134, 79.874, 91.502, 64.616, 67.229, 64.267, 104.366, 67.023,
                86.605, 67.433, 69.526, 80.054, 56.72, 56.36, 83.822, 77.814,
                63.299, 61.039, 63.488
              ],
              "comparisonValues": [72.028],
              "properties": [
                {
                  "name": "metatext",
                  "value": "In this context, the term hand surgery is used to cover four conditions: Dupuytren's contracture, which is a connective tissue formation (thickening) of the palmar fascia; trigger finger, which results in a finger becoming ‘stuck’ in a bent position; ganglion, which is a tender swelling or lump, usually at the wrist; and DeQuervain, which is tenosynovitis of the thumb."
                }
              ],
              "associates": [
                {
                  "name": "innb",
                  "type": "numeric",
                  "values": [
                    74509, 186401, 135569, 78005, 136324, 302367, 257122,
                    108622, 427385, 176173, 346059, 281088, 373020, 623905,
                    394389, 464692, 223250, 170798, 289056
                  ],
                  "comparisonValues": [5048734]
                },
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    51, 152, 127, 51, 95, 192, 274, 75, 360, 119, 218, 234, 209,
                    319, 354, 370, 146, 109, 183
                  ],
                  "comparisonValues": [3638]
                }
              ],
              "limits": {
                "upper": [
                  "86.9",
                  "92.6",
                  "107.4",
                  "82.4",
                  "80.8",
                  "73.4",
                  "116.8",
                  "82.3",
                  "95.6",
                  "79.6",
                  "78.8",
                  "90.3",
                  "64.4",
                  "62.6",
                  "92.6",
                  "85.7",
                  "73.6",
                  "72.5",
                  "72.7",
                  "NaN"
                ],
                "lower": [
                  "49.4",
                  "67.2",
                  "75.6",
                  "46.8",
                  "53.6",
                  "55.2",
                  "92",
                  "51.8",
                  "77.7",
                  "55.3",
                  "60.2",
                  "69.8",
                  "49",
                  "50.1",
                  "75",
                  "69.9",
                  "53",
                  "49.5",
                  "54.3",
                  "NaN"
                ]
              }
            },
            {
              "id": "i4",
              "name": "Carpal tunnel syndrome",
              "type": "numeric",
              "values": [
                97.772, 126.253, 124.644, 152.55, 166.952, 130.924, 148.711,
                113.918, 87.181, 164.708, 174.713, 150.903, 123.729, 91.271,
                178.997, 104.68, 134.101, 121.149, 132.545
              ],
              "comparisonValues": [129.899],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Carpal tunnel syndrome is the result of pressure on a nerve in the wrist caused by repetitive hand movements that create swelling in the tendons surrounding the nerve. Typical symptoms include pain, numbness and tingling in the palm and fingers. Surgery consists of partly or completely cutting the ligament that arches over the carpal tunnel to release pressure on the nerve."
                }
              ],
              "associates": [
                {
                  "name": "innb",
                  "type": "numeric",
                  "values": [
                    74509, 186401, 135569, 78005, 136324, 302367, 257122,
                    108622, 427385, 176173, 346059, 281088, 373020, 623905,
                    394389, 464692, 223250, 170798, 289056
                  ],
                  "comparisonValues": [5048734]
                },
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    73, 241, 177, 128, 238, 388, 398, 129, 357, 288, 559, 445,
                    457, 498, 777, 500, 316, 221, 383
                  ],
                  "comparisonValues": [6573]
                }
              ],
              "limits": {
                "upper": [
                  "120.2",
                  "142.2",
                  "143.1",
                  "179.1",
                  "188.2",
                  "144",
                  "163.4",
                  "133.7",
                  "96.2",
                  "183.7",
                  "189.3",
                  "165",
                  "135.1",
                  "99.4",
                  "191.7",
                  "113.9",
                  "148.9",
                  "137.2",
                  "145.8",
                  "NaN"
                ],
                "lower": [
                  "75.4",
                  "110.3",
                  "106.2",
                  "126",
                  "145.7",
                  "117.9",
                  "134.1",
                  "94.2",
                  "78.1",
                  "145.7",
                  "160.1",
                  "136.9",
                  "112.3",
                  "83.2",
                  "166.3",
                  "95.5",
                  "119.3",
                  "105.1",
                  "119.3",
                  "NaN"
                ]
              }
            },
            {
              "id": "i5",
              "name": "Tonsillectomy",
              "type": "numeric",
              "values": [
                487.285, 294.512, 345.636, 416.593, 245.934, 211.531, 355.232,
                342.017, 245.525, 305.732, 246.671, 247.136, 282.668, 219.442,
                251.136, 290.986, 317.735, 301.846, 268.825
              ],
              "comparisonValues": [274.439],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Tonsillectomy is one of the most commonly performed operations, particularly on children. The operation can be performed on patients with recurring sore throats for more than two years, recurring ear infections and, in children, enlarged tonsils that cause discomfort."
                }
              ],
              "associates": [
                {
                  "name": "innb",
                  "type": "numeric",
                  "values": [
                    74509, 186401, 135569, 78005, 136324, 302367, 257122,
                    108622, 427385, 176173, 346059, 281088, 373020, 623905,
                    394389, 464692, 223250, 170798, 289056
                  ],
                  "comparisonValues": [5048734]
                },
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    355, 536, 451, 307, 337, 636, 902, 370, 1071, 557, 926, 670,
                    1099, 1356, 903, 1358, 681, 483, 803
                  ],
                  "comparisonValues": [13801]
                }
              ],
              "limits": {
                "upper": [
                  "538",
                  "319.5",
                  "377.6",
                  "463.3",
                  "272.2",
                  "228",
                  "378.4",
                  "376.9",
                  "260.2",
                  "331.2",
                  "262.6",
                  "265.9",
                  "299.4",
                  "231.2",
                  "267.6",
                  "306.5",
                  "341.6",
                  "328.8",
                  "287.4",
                  "NaN"
                ],
                "lower": [
                  "436.5",
                  "269.6",
                  "313.7",
                  "369.9",
                  "219.7",
                  "195.1",
                  "332",
                  "307.1",
                  "230.8",
                  "280.3",
                  "230.7",
                  "228.4",
                  "265.9",
                  "207.7",
                  "234.7",
                  "275.5",
                  "293.8",
                  "274.9",
                  "250.2",
                  "NaN"
                ]
              }
            },
            {
              "id": "i6",
              "name": "Aural ventilation tube",
              "type": "numeric",
              "values": [
                182.926, 166.396, 136.531, 251.335, 262.689, 127.758, 206.941,
                171.21, 87.588, 116.557, 215.247, 123.218, 111.962, 88.244,
                104.838, 208.099, 229.996, 143.806, 143.232
              ],
              "comparisonValues": [148.366],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Fluid in the middle ear can lead to impaired hearing and delayed language development in children, and is treated by inserting a ventilation tube in the eardrum. This treatment may entitle patients to necessary health care, and the procedure is performed both by public and private treatment providers."
                }
              ],
              "associates": [
                {
                  "name": "innb",
                  "type": "numeric",
                  "values": [
                    74509, 186401, 135569, 78005, 136324, 302367, 257122,
                    108622, 427385, 176173, 346059, 281088, 373020, 623905,
                    394389, 464692, 223250, 170798, 289056
                  ],
                  "comparisonValues": [5048734]
                },
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    129, 300, 172, 181, 345, 384, 520, 182, 386, 213, 853, 330,
                    443, 571, 362, 981, 482, 222, 428
                  ],
                  "comparisonValues": [7484]
                }
              ],
              "limits": {
                "upper": [
                  "214.5",
                  "185.2",
                  "157",
                  "288",
                  "290.4",
                  "140.5",
                  "224.7",
                  "196.1",
                  "96.3",
                  "132.2",
                  "229.7",
                  "136.5",
                  "122.4",
                  "95.5",
                  "115.7",
                  "221.1",
                  "250.6",
                  "162.8",
                  "156.8",
                  "NaN"
                ],
                "lower": [
                  "151.4",
                  "147.6",
                  "116.1",
                  "214.7",
                  "235",
                  "115",
                  "189.1",
                  "146.3",
                  "78.8",
                  "100.9",
                  "200.8",
                  "109.9",
                  "101.5",
                  "81",
                  "94",
                  "195.1",
                  "209.4",
                  "124.9",
                  "129.7",
                  "NaN"
                ]
              }
            },
            {
              "id": "i7",
              "name": "Cataract",
              "type": "numeric",
              "values": [
                646.997, 639.838, 608.621, 716.244, 762.354, 759.796, 693.272,
                876.3, 583.989, 783.352, 945.45, 561.838, 588.204, 622.656,
                613.822, 839.133, 829.571, 933.148, 791.177
              ],
              "comparisonValues": [711.409],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Cataract is an opacity in the lens of the eye that leads to impaired vision. For most patients, this happens as part of the aging process. If left untreated, the condition will result in blindness. The treatment consists of removing the old lens from the eye and inserting an artificial one."
                }
              ],
              "associates": [
                {
                  "name": "innb",
                  "type": "numeric",
                  "values": [
                    74509, 186401, 135569, 78005, 136324, 302367, 257122,
                    108622, 427385, 176173, 346059, 281088, 373020, 623905,
                    394389, 464692, 223250, 170798, 289056
                  ],
                  "comparisonValues": [5048734]
                },
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    470, 1232, 907, 642, 1170, 2238, 1964, 1094, 2403, 1423,
                    2674, 1702, 1986, 3193, 2889, 4004, 2016, 1802, 2275
                  ],
                  "comparisonValues": [36084]
                }
              ],
              "limits": {
                "upper": [
                  "705.9",
                  "675.6",
                  "648.3",
                  "772.1",
                  "806.2",
                  "791.3",
                  "724",
                  "928.5",
                  "607.3",
                  "824.1",
                  "981.5",
                  "588.6",
                  "614.4",
                  "644.5",
                  "636.4",
                  "865.1",
                  "865.9",
                  "976.4",
                  "823.7",
                  "NaN"
                ],
                "lower": [
                  "588",
                  "604",
                  "568.9",
                  "660.4",
                  "718.5",
                  "728.3",
                  "662.5",
                  "824.1",
                  "560.6",
                  "742.6",
                  "909.4",
                  "535.1",
                  "562.1",
                  "600.8",
                  "591.3",
                  "813.1",
                  "793.3",
                  "889.9",
                  "758.6",
                  "NaN"
                ]
              }
            },
            {
              "id": "i8",
              "name": "Droppy eyelids",
              "type": "numeric",
              "values": [
                123.493, 157.773, 153.255, 184.794, 244.601, 233.866, 145.62,
                85.28, 132.168, 184.53, 102.37, 134.86, 190.34, 86.194, 128.899,
                96.425, 129.529, 205.607, 203.967
              ],
              "comparisonValues": [145.092],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Droopy eyelids are usually due to excess skin. The skin becomes less elastic with age, and the fat depots become more prominent. Droopy eyelids that have a significant effect on a patient’s vision and/or field of vision entitle the patient to prioritised health care. The procedure is normally performed under local anaesthesia with laser or radiofrequency surgery."
                }
              ],
              "associates": [
                {
                  "name": "innb",
                  "type": "numeric",
                  "values": [
                    74509, 186401, 135569, 78005, 136324, 302367, 257122,
                    108622, 427385, 176173, 346059, 281088, 373020, 623905,
                    394389, 464692, 223250, 170798, 289056
                  ],
                  "comparisonValues": [5048734]
                },
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    93, 305, 219, 155, 355, 691, 393, 98, 539, 325, 306, 407,
                    685, 457, 578, 461, 307, 387, 591
                  ],
                  "comparisonValues": [7352]
                }
              ],
              "limits": {
                "upper": [
                  "148.6",
                  "175.5",
                  "173.6",
                  "214",
                  "270.1",
                  "251.3",
                  "160",
                  "102.2",
                  "143.3",
                  "204.6",
                  "113.9",
                  "148",
                  "204.6",
                  "94.1",
                  "139.5",
                  "105.2",
                  "144",
                  "226.2",
                  "220.4",
                  "NaN"
                ],
                "lower": [
                  "98.4",
                  "140",
                  "132.9",
                  "155.6",
                  "219.1",
                  "216.4",
                  "131.2",
                  "68.3",
                  "121",
                  "164.4",
                  "90.8",
                  "121.7",
                  "176",
                  "78.2",
                  "118.3",
                  "87.6",
                  "115",
                  "185",
                  "187.5",
                  "NaN"
                ]
              }
            },
            {
              "id": "i9",
              "name": "Ingunial hernia",
              "type": "numeric",
              "values": [
                124.109, 121.238, 125.736, 110.742, 131.124, 116.889, 123.089,
                124.457, 131.508, 127.757, 113.712, 115.364, 123.087, 121.512,
                137.621, 130.651, 132.8, 128.272, 124.518
              ],
              "comparisonValues": [124.773],
              "properties": [
                {
                  "name": "metatext",
                  "value": "An inguinal hernia is a protrusion in the groin where internal structures bulge through a weak point in the abdominal wall. Symptoms may include burning and discomfort, and a heavy sensation is also common. Surgery is indicated in children and young adults with inguinal hernia, but only in adults if they also experience pain. Today, virtually all planned first-time inguinal hernia repairs are carried out as outpatient surgery under local anaesthesia, either as open or laparoscopic surgery."
                }
              ],
              "associates": [
                {
                  "name": "innb",
                  "type": "numeric",
                  "values": [
                    74509, 186401, 135569, 78005, 136324, 302367, 257122,
                    108622, 427385, 176173, 346059, 281088, 373020, 623905,
                    394389, 464692, 223250, 170798, 289056
                  ],
                  "comparisonValues": [5048734]
                },
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    96, 234, 181, 93, 191, 350, 335, 145, 547, 229, 366, 338,
                    450, 671, 594, 617, 306, 235, 360
                  ],
                  "comparisonValues": [6338]
                }
              ],
              "limits": {
                "upper": [
                  "149",
                  "136.8",
                  "144.1",
                  "133.5",
                  "149.9",
                  "129.1",
                  "136.3",
                  "144.8",
                  "142.5",
                  "144.3",
                  "125.5",
                  "127.7",
                  "134.5",
                  "130.8",
                  "148.8",
                  "141",
                  "147.7",
                  "144.8",
                  "137.4",
                  "NaN"
                ],
                "lower": [
                  "99.2",
                  "105.7",
                  "107.4",
                  "88",
                  "112.4",
                  "104.6",
                  "109.9",
                  "104.1",
                  "120.5",
                  "111.2",
                  "102",
                  "103",
                  "111.7",
                  "112.2",
                  "126.4",
                  "120.3",
                  "117.9",
                  "111.8",
                  "111.7",
                  "NaN"
                ]
              }
            },
            {
              "id": "i10",
              "name": "Varicose",
              "type": "numeric",
              "values": [
                75.488, 90.041, 119.762, 77.142, 124.53, 115.468, 145.837,
                165.111, 187.521, 126.91, 125.824, 135.923, 86.721, 124.713,
                104.373, 104.991, 141.506, 139.016, 169.9
              ],
              "comparisonValues": [126.335],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Reduced vein function in the legs creates varicose veins with pressure and heavy legs, and sometimes increased swelling, pain and leg ulcers. The size of the veins and the degree of cosmetic discomfort, swelling and leg ulcers form the basis for removing varicose veins. This is done either surgically, with laser treatment or radiofrequency ablation, or by using a local irritant."
                }
              ],
              "associates": [
                {
                  "name": "innb",
                  "type": "numeric",
                  "values": [
                    74509, 186401, 135569, 78005, 136324, 302367, 257122,
                    108622, 427385, 176173, 346059, 281088, 373020, 623905,
                    394389, 464692, 223250, 170798, 289056
                  ],
                  "comparisonValues": [5048734]
                },
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    57, 171, 167, 63, 172, 342, 380, 182, 771, 219, 407, 399,
                    326, 713, 439, 502, 331, 249, 489
                  ],
                  "comparisonValues": [6379]
                }
              ],
              "limits": {
                "upper": [
                  "95.2",
                  "103.5",
                  "138",
                  "96.3",
                  "143.2",
                  "127.7",
                  "160.5",
                  "189.2",
                  "200.8",
                  "143.7",
                  "138.1",
                  "149.3",
                  "96.2",
                  "133.9",
                  "114.2",
                  "114.2",
                  "156.8",
                  "156.3",
                  "185",
                  "NaN"
                ],
                "lower": [
                  "55.8",
                  "76.5",
                  "101.6",
                  "58",
                  "105.9",
                  "103.2",
                  "131.1",
                  "141",
                  "174.3",
                  "110.1",
                  "113.5",
                  "122.6",
                  "77.3",
                  "115.5",
                  "94.5",
                  "95.8",
                  "126.2",
                  "121.7",
                  "154.8",
                  "NaN"
                ]
              }
            },
            {
              "id": "i11",
              "name": "Haemorrhoids",
              "type": "numeric",
              "values": [
                240.165, 230.931, 131.466, 202.118, 92.035, 185.342, 146.348,
                142.606, 137.463, 202.222, 235.505, 111.348, 134.539, 111.697,
                338.019, 155.349, 129.41, 97.967, 111.621
              ],
              "comparisonValues": [164.818],
              "properties": [
                {
                  "name": "metatext",
                  "value": "Haemorrhoids are protrusions in the anal canal consisting of swollen veins and surrounding connecting tissue. Constipation, standing up for long periods of time and hard physical work predispose people to this condition. In addition to suppositories and ointments, haemorrhoids can also be treated by banding or by constricting the blood supply. Tying off and removing the vessels is another technique used."
                }
              ],
              "associates": [
                {
                  "name": "innb",
                  "type": "numeric",
                  "values": [
                    74509, 186401, 135569, 78005, 136324, 302367, 257122,
                    108622, 427385, 176173, 346059, 281088, 373020, 623905,
                    394389, 464692, 223250, 170798, 289056
                  ],
                  "comparisonValues": [5048734]
                },
                {
                  "name": "antall",
                  "type": "numeric",
                  "values": [
                    183, 437, 182, 164, 128, 549, 381, 156, 571, 353, 771, 323,
                    507, 650, 1437, 741, 298, 174, 321
                  ],
                  "comparisonValues": [8326]
                }
              ],
              "limits": {
                "upper": [
                  "275",
                  "252.6",
                  "150.6",
                  "233.3",
                  "108.1",
                  "200.9",
                  "161.1",
                  "165.1",
                  "148.8",
                  "223.3",
                  "252.2",
                  "123.5",
                  "146.3",
                  "120.4",
                  "355.6",
                  "166.5",
                  "144.1",
                  "112.6",
                  "123.8",
                  "NaN"
                ],
                "lower": [
                  "205.3",
                  "209.2",
                  "112.3",
                  "171",
                  "76",
                  "169.8",
                  "131.6",
                  "120.1",
                  "126.2",
                  "181.1",
                  "218.8",
                  "99.2",
                  "122.8",
                  "103",
                  "320.4",
                  "144.2",
                  "114.7",
                  "83.3",
                  "99.4",
                  "NaN"
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}
