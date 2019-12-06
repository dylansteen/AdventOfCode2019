const input = ['FGY)61Z', '2BN)LM7', 'QXY)TVB', '5M5)Y6C', '2L2)64M', '6TT)183', 'H6P)6TT', 'LPL)WP5', 'TDW)SDV', '4N3)LHM', 'MJ7)STL', 'V17)4QM', '2XW)R2P', 'CMK)P3C', 'KN5)XBH', '4GV)Z17', 'VQW)KD6', 'N6Q)GBK', 'LZC)5R2', '3Z1)L7Y', '1LV)QCF', 'NQ5)6K4', '3XX)D1H', 'YT6)DXZ', 'JFB)CMF', 'NFC)DYG', 'VG6)W38', '31Z)TCV', '597)H8Q', 'GK1)MSN', '69N)W4Y', '3NY)1FX', 'W81)3XX', 'LP1)KBR', '3KD)X65', 'YSD)HLF', 'WKN)NXN', 'C9S)NYS', '9DX)Y3V', 'VY4)YSL', '2V4)79M', 'X68)1RB', '53T)H97', 'TKM)2J1', 'K8M)N95', 'HZ2)J3B', 'R6Z)KQ1', '96F)5WS', 'W68)KQ5', 'H4G)NCN', 'WXV)BH6', '8Z1)KVB', 'WGQ)18Y', '4M1)9D8', '2NH)RLJ', 'KVB)1Y5', '3SG)RFG', 'GBD)HZJ', '1W4)JZ4', '4W5)R1J', '6KP)GJB', '1QS)4D5', '1Q4)FDD', 'DZX)Q8F', '7MB)1RF', 'RFG)TKV', 'LK4)QTF', 'YKS)LLV', '4Z9)2BL', 'VNR)WJ4', '81Z)KNH', '2V7)9LV', 'MCW)LRD', 'SGB)HTX', 'NKK)DGX', 'MHG)C7W', '2T7)6VV', 'X9J)2CL', '8CF)RPP', 'LVZ)GY6', 'NDK)D1V', 'JYG)LTF', 'ZL3)JP5', 'RZP)NGS', '6LW)212', '4QM)6B2', '351)ZCK', '8FJ)JF9', 'TH4)XZV', '3HK)1W4', 'DCX)TKM', '8JW)CCB', 'Z5Y)4N7', 'L73)1XV', '4QJ)6VW', 'F4H)8C7', 'RKS)BQ9', 'HHB)RWF', '2T7)X5H', 'XQF)HXM', 'QKM)CMJ', 'GC3)RZR', 'BBL)D5Q', 'LC7)JBF', '8RJ)MZ1', 'PD9)TYR', 'MWX)B17', 'DR1)L88', 'KBR)B16', 'CM2)Q2J', 'J5Q)3WP', '3Z1)2XW', 'YCF)VY4', '76M)2V4', 'CCM)L2Z', '7XM)YNQ', '7HW)GTK', 'ZSM)6LC', 'H9P)G1N', '4ZD)B3C', 'DXZ)39Y', '18Y)V17', '747)QXY', 'W26)ZTN', 'RLJ)J5Q', 'PHC)96F', 'ZQD)PMY', 'BWK)8RJ', '8C4)DRX', 'YL1)NDK', 'W19)PFH', 'T6V)X8G', 'LPR)TRR', 'JRV)NF8', '248)XVV', 'KQ1)H3P', '747)BSB', '8PH)C4N', '7ZT)9M8', 'FPQ)QKH', 'LXZ)CYZ', 'VZX)681', 'PRZ)6J4', 'XZ6)91R', 'G77)QG1', 'QCF)G3S', 'NXN)XT1', 'K95)DY2', '1JF)NNH', '4N7)7W3', '5RQ)PBN', 'JRS)8D1', 'G7C)8SK', 'H3P)H16', '346)Q8Q', 'HH7)5LZ', 'HZJ)WFK', 'FRH)81J', 'DQM)K3X', 'HTX)9RN', 'VV9)4Z9', 'X6T)T37', 'JC7)K7H', 'P98)9SF', '9SD)XFM', 'V9P)B98', 'BG7)8NQ', 'YPZ)PMJ', '5VN)NFR', 'T9Z)LK4', 'J5G)N4K', 'X5R)GFG', 'TZP)MK5', '2B4)5MV', 'FNG)RTR', 'WFK)HXC', 'BJ7)R2J', 'HCZ)HVV', '1CM)HYW', '9FL)DPR', 'JPQ)FFS', 'P5P)6VT', 'D1V)MJK', 'RZB)Q92', 'M72)QP1', '8ZZ)L16', '7FB)XZN', 'X6C)TSV', 'MK5)SC7', '9B4)7ZX', 'JZ4)6C5', '5H2)33S', 'WY2)487', 'PFH)1J9', '6RF)G42', 'VH4)T75', 'JF9)9H3', 'HL8)DMB', 'WSR)98S', 'W6W)NNX', 'Y6C)LC7', 'G9P)VLT', '6B2)D5V', 'HXC)GX8', 'T3V)4B7', '9KC)46N', 'SDV)5T7', '8D1)8QG', 'TZJ)5QJ', 'MBT)TBD', 'F1D)M29', '19K)C7H', 'TBN)6KQ', 'TKC)76M', '38H)6L2', 'ZBK)PVD', 'DXR)CTS', 'KCS)XDX', 'QWW)849', '7W3)NMG', 'BX6)397', 'Q61)38H', 'C7H)JFB', 'K1Y)2ZR', '39Y)CMK', '3FL)QTP', 'S7Y)6DR', '2YN)J4C', 'Q8F)PG7', 'J5W)72Z', 'CN9)L7M', 'R1J)53D', 'YFG)CRC', '779)4RY', 'DGZ)M17', '5LZ)BZ3', 'B5S)FX6', '5VV)5P5', '8M9)2P8', 'GT6)J29', 'WFK)759', '8NV)FSB', 'YWS)Q8X', 'ZV4)ZLV', '6C5)NF5', 'CP9)XC7', '61Z)YH9', 'VZ8)W81', 'FGN)JMN', 'ZSW)72R', 'JSN)P6K', 'Y3Z)Q7M', 'LT7)ZZM', '1WZ)319', 'CGG)D7H', 'NT4)HG8', 'RLB)QQR', 'S4B)3SG', 'H3Z)BDJ', 'RZR)GH3', 'QP1)PND', 'FSB)PK7', 'B3C)KGS', '4P5)W26', 'TSV)1LV', '37K)1Q4', 'L5B)J9C', 'P6K)G14', 'XZN)CGQ', 'N95)6LW', 'W8S)2NH', 'HXM)GX7', '6KQ)ZQY', 'Y2L)C57', 'DPR)318', '7S8)Y82', 'Q8J)YJQ', '2YC)SX6', 'DK2)N41', 'C1N)PRZ', 'LW3)1P2', 'GGX)4R2', '9FZ)8PH', '4WD)3J1', 'J9C)G9P', 'J81)XJS', 'WCJ)2B4', 'M3V)1QC', 'QQP)1F7', '9HM)979', 'NGS)72D', 'CMF)D5N', 'M2S)VDJ', 'QW7)LQ8', 'PFF)4LD', '1YN)MHG', 'FR3)W19', 'CKS)ST1', '1S4)VZX', '7S8)M83', 'L16)7VX', 'CTS)YFG', 'WJ4)SGB', '4S5)6V7', 'MF4)7GN', 'QTP)M5Q', '6TD)HXG', 'QXY)MFG', '6K5)JRS', 'XN6)113', 'TPY)2YC', 'XL2)PMC', 'VSK)THY', 'L88)8CF', 'NFR)PCV', 'MDX)LPZ', 'D3K)4FG', '8YP)L2L', 'PMY)QJM', 'GH3)TG5', '6KZ)F1H', 'Y85)X68', 'CMJ)VMQ', 'GFG)8Z8', '1L1)VH4', 'BTN)Q91', 'T7W)TVF', '6LC)LPL', 'BW5)RXF', '6VW)X6C', '5P5)BK8', '24B)VV9', 'HCT)9KC', 'Q2J)96V', '5D3)97R', 'BJL)PFS', 'RTR)J8P', 'VCJ)8GM', '6KF)LNJ', 'KLB)31Z', 'VQW)2V7', '8CJ)5QS', 'V2S)QWW', '6DR)3KD', 'D5N)5B5', 'DK1)Z16', 'YVB)P7K', 'WSY)X5R', 'P13)T4G', 'VGZ)SYR', 'LVB)ZWS', 'RPG)CQP', '81J)573', 'F9B)CKC', 'M3R)8JW', 'HL8)G1B', 'WDN)WYX', 'ZZ3)F17', '7XM)MK1', 'HKF)VNR', 'BSB)H4G', 'JS4)MS6', 'SXQ)G7N', 'G1F)5VN', 'NH5)V2Y', '2WF)LS2', 'K51)SVQ', 'MM2)MDX', 'JSN)LR3', 'FTV)28F', 'R66)8DH', '5JM)Y2L', 'Q92)GRR', '55L)3Z1', '2BG)VLB', '7GN)P6R', '8K3)YCL', 'KDN)R6Z', 'GX8)KCS', 'TCV)H9P', '6J4)JS4', 'Q7M)JRV', 'NXF)5B3', '573)HZC', 'HZC)F4H', 'MSN)W3D', 'TBD)2YQ', 'YQN)12D', 'RQX)94S', 'GTK)RYG', 'GVG)9WV', 'CM5)V9P', 'QP9)JNR', 'JYG)NN1', '2P8)9BZ', 'FF6)PSW', 'WB6)NKK', 'CZJ)H7C', 'YYH)62H', 'YSL)LP1', 'SJJ)YC6', '9GB)GSF', 'P6X)8Z1', 'P8C)CTR', '979)83S', 'NF5)TBK', 'TQP)8NV', 'PC3)YMB', 'QST)M2S', 'X56)19Y', 'Y7G)H3Z', '2RN)BDK', 'TYR)JXJ', 'NF2)WB6', 'P7K)DXN', 'RKH)WZ7', '17T)XNK', 'NL1)QHY', 'Y82)WJS', 'L7M)BC5', 'KJB)ZSW', 'DXN)KVH', 'VLW)JPQ', 'S2D)DGZ', 'FX6)NYD', 'FWT)TKC', '2JN)VQW', 'V2Y)X86', 'H97)XL2', 'BLC)DCK', '6N7)868', 'FPF)F3R', 'F1H)WHH', 'XFM)R2N', 'PNH)KYQ', 'J4C)6VX', 'TVB)G1F', 'NNX)B66', 'BZ3)V9W', 'GMR)QST', 'RBB)Y34', '577)755', 'SX6)3V2', '1L1)DK1', 'X5V)RZ8', 'M3F)QF7', '8YR)677', 'M83)FPF', 'J28)M8L', 'M83)FRY', 'T8Y)X6T', 'MMJ)YL1', '487)T2N', 'TRR)KJB', 'FFS)QNC', 'WP5)3L6', '6V7)1Z7', '9FL)X5Q', 'W38)2RS', '1J9)X92', 'N9X)9KT', '12D)F9B', '6QR)DCX', '7ZT)MM2', 'P8K)K51', 'WKR)M3F', 'CCB)B29', 'RSN)VCJ', 'L7S)37K', '5QS)HQR', '6RF)NPC', 'Y1T)2T7', 'FGB)YT6', 'MGY)K95', 'DGX)LWC', 'TH4)X26', 'MFG)FPQ', 'Y7Y)L67', 'DM6)9NJ', 'THY)2JN', 'SMJ)PC3', 'SZC)S7Y', 'JPQ)VHY', 'SKG)11M', 'YNJ)3HK', '2V4)VX3', 'QP9)711', '681)BBL', '2G8)8K1', 'QW9)7HW', '9J6)MYL', '93R)6TD', 'J9W)2YN', 'CRC)VBT', 'XDD)G9R', '97R)9HM', 'ZCK)TZJ', '5WS)9L3', 'BCW)7PY', 'XLV)47R', 'CK9)1L1', 'GHN)5DM', '759)MMJ', 'WYX)RSC', 'VLT)1WZ', '7T6)PRP', '62G)PHC', 'XBH)4WD', '4FG)LVB', '1X7)CP9', 'X5R)8C4', 'GK1)DQM', '3WP)YKS', 'G42)672', 'BDJ)7XM', '9BZ)W4G', 'PJJ)YZ4', 'SQZ)5VV', 'VK9)45G', 'R2P)MWX', 'NHX)YYH', '9RW)JC7', '94S)VX4', 'G3Q)R21', '6K4)6N7', '3L6)4W3', '3C3)Y7Y', '9M8)NQ5', 'SJM)68L', 'P6K)G72', 'K3X)CZJ', 'CY6)L5B', 'LWK)MZG', '43Y)QKM', '6DR)HH7', 'HT1)54V', '2BL)PX9', '5B3)LVZ', 'Z6H)JYB', '5MG)Y8Q', 'VKJ)VK5', 'LR3)P6X', 'F1F)7YW', 'VY4)W52', 'VG6)YLW', 'T1Q)LWG', 'KYQ)BY7', '672)WDN', 'SR5)SQZ', 'NKK)DK2', 'YJQ)XN6', '6XD)Y1S', 'Z5M)QHT', 'Z6S)BJK', 'COM)ML7', 'WB1)DFR', 'X5H)2L2', 'C7Q)MJC', 'BJK)SKV', 'LC7)7SS', 'V9W)VZ8', 'PHF)1YT', 'G72)QW7', 'ZJV)346', 'W3D)8S7', 'R2N)8CJ', 'TDL)W6W', 'DLT)6QR', 'X92)1M4', 'WC6)LXZ', 'BXW)1YY', 'CN9)VFJ', '6KQ)YOU', 'XNK)NHX', 'DQ4)X34', 'MJK)Y55', 'T75)5YF', 'PCV)N9X', 'JBF)SZC', 'ZLV)VS8', '2YC)DLT', 'RFL)KPR', '8N7)FDY', 'PND)GMR', 'DRX)69N', '45G)P3N', 'NYS)9B4', 'YDY)NWQ', '6GC)DZX', 'NMG)TJ2', 'PFS)JYG', 'KNT)5FZ', 'ZYN)ZQ2', 'K9P)RQX', 'ML8)B9J', 'PRP)9GB', '67N)JSN', '3HG)GHN', 'PYN)KJN', 'GVG)WY9', 'S8N)YT5', 'VFJ)2RN', '6VX)6LB', 'FHY)7DC', 'D65)4N3', 'BH6)MF4', 'DKW)M3J', 'DYG)3FP', 'YC8)HZ2', 'G8R)M3R', 'HXG)HWS', 'CQP)LW3', 'GCH)9SD', '4HR)LX9', 'KQ5)YV4', '2V2)C9S', '3J1)TP4', 'XPL)QVR', 'TG5)GQB', 'KVH)VQ7', 'JMN)BX6', 'QX9)72M', '4RY)Z6H', 'HGN)SAN', 'NF8)577', '72D)BLC', 'QG1)125', 'SYR)XZ3', 'WW5)LZC', '5YF)X56', 'N9R)ZZ3', '6VT)YPR', '8S7)XDD', '65Y)P5P', '9SF)R6Y', 'GJB)LWK', '9RN)QYV', 'THY)Y85', '1YT)1JF', 'TKC)ZQD', 'PD9)YNJ', '3FP)DKW', 'XDX)D91', 'G9R)BCV', 'RXF)BXW', '44W)FGB', 'GY6)1ZW', 'TTT)PZ7', 'LTF)4GZ', '9NJ)RMB', 'CYJ)7XL', '183)PQF', '319)WC6', 'DY9)8ZZ', 'P7W)VSK', 'G1F)F4Y', 'MZ1)1YN', 'JRF)M9R', '3V2)QXF', 'STL)C7Q', '6VV)CN9', 'QF7)G93', 'PSW)FRD', 'T2N)8N7', 'Z17)4ZD', 'P5X)M8C', 'GX7)YLK', 'PMJ)N2Y', 'HG8)W8S', 'WH4)ZBK', '6RT)FGN', '9WV)K1T', 'B98)YVB', 'H7C)WXV', 'YH9)MGY', 'NNH)65Y', 'VQ7)3NY', 'RGV)V9J', 'B2H)NF2', 'HQR)L4D', 'LM7)S4B', 'JBS)GK1', 'DRX)YDY', 'JNR)8YP', '1F7)DXR', 'FRD)ML8', 'RQ6)9SW', 'TP4)BW5', 'MYL)HL8', 'VS8)J81', 'Y9Z)CNZ', 'Y1S)DC6', '4GZ)N9R', 'M5M)MJ7', '2BN)DR1', '53D)G7C', 'G14)QX9', 'Y9L)2P6', 'XSQ)GYL', 'MJD)Y9L', 'P3C)2P7', 'Q3P)MSM', 'QVR)WB1', 'X9R)RKS', 'CGG)38V', '5VN)QQP', '96V)F1D', 'ZQY)Y8L', 'M29)P8K', 'CKC)JC3', 'TDW)VW5', 'Q91)FNR', 'X5Q)YCT', 'PZ7)4FZ', 'ZL3)114', 'K1T)J6S', 'B17)779', 'PQF)NXF', 'NCN)3FL', 'W4G)NTH', '7PY)74M', 'VDJ)JW4', 'V1F)GDQ', 'QQR)YQN', '2S5)RBB', '7FF)597', 'MS6)V4N', 'QW9)4P5', 'BLC)C31', 'QTF)ZVX', 'YNJ)RHQ', 'G93)6KZ', 'P3N)P8C', 'G9P)ZSM', '91R)LPG', 'PG7)VRY', 'DCK)D65', 'CCB)BTN', 'D7H)D3K', 'XT1)W5Q', '7DC)M72', 'PK7)H6P', '6VW)1FS', 'KGS)HHN', 'WZ7)J4Q', 'RSW)RQ6', 'M4B)7T6', 'LLV)YSD', 'WDN)7FF', 'DTY)WGQ', 'P5P)3HG', 'H6P)5RQ', '64M)4TV', '8GM)LCC', '1YY)G8R', 'XVV)DM6', 'WY9)XKN', 'QHY)G43', '7SS)T6V', 'PX9)SR5', 'VK5)81Z', 'YG3)V1F', 'YT5)CKS', 'F17)SH3', '2JP)2G8', '6LC)RZB', 'XS1)RGV', 'R2J)2V2', 'QKH)L5N', 'ZZB)YG3', 'Y8L)6C2', 'YPR)3ZK', '7YW)1RM', '9DP)9DX', 'V9P)248', 'N2Y)D8V', 'TVB)KLB', '5YF)RFL', 'SM3)595', 'DXR)8FJ', 'PBN)G77', 'QDC)MBT', '595)PNH', '5B5)DTY', 'CNZ)L7X', 'VW5)CK9', 'HLF)K7N', 'VRY)PGG', 'GRR)C1N', 'L4D)PQ7', 'YLW)1QS', 'YLK)X5V', 'H8Q)Z1Q', 'FRY)VLW', 'LWC)ZJV', 'KGL)DP8', 'XC7)48H', 'ML7)V6Q', 'YLW)Q3P', 'CGQ)PFF', 'X5Q)61X', '46N)S2D', 'QHT)8K3', 'JNY)F9R', '2LS)QS5', 'XZV)4S5', 'CYZ)KN5', 'NYD)T3V', '1FX)Z6S', '2WD)VKJ', '9H3)PYN', 'JC3)VR5', 'DXZ)FNG', 'D1H)TTT', 'XJM)PHF', 'B16)WSR', 'HYW)24B', 'RRM)L3N', '1P2)1S4', '7ZX)2BN', '8DH)JRF', 'SC7)DY9', 'L2L)9FZ', '1FS)DQ4', 'VK9)ZZB', 'TKV)BPX', 'F1D)J71', '83S)TH4', 'J3B)VGZ', '771)WY2', '5PJ)W68', '1RB)YPZ', 'YT5)CGG', 'HWS)P13', '9J6)CY6', 'LRD)JNY', 'LPD)5MG', '1M4)SJM', 'FLZ)TZP', 'LPG)XPL', 'Z1Q)QCV', 'B2B)TDW', 'F3R)GC3', 'DMB)FTV', '1RF)V2S', 'YC8)XS1', '1X4)QP9', 'NN1)1X7', '9VC)LFC', 'GSF)PD9', 'KD8)RKH', 'JW4)2WD', '53D)MCW', 'RWF)HGN', 'QCV)2JP', 'G3S)HCZ', '4LD)4GV', '2RS)T8Y', '6JT)BR1', '7XL)GCH', 'FNR)WS8', 'HSV)LPD', 'GRT)S8N', 'V6Q)TPY', 'RHS)GBD', 'MK1)T7W', 'GDQ)BCW', 'J71)B2H', 'FTV)67N', '8NM)D43', 'Y8Q)H2X', 'SVQ)MJD', '8QG)55L', '5FZ)M5M', 'VX4)9FL', 'M5Q)4M1', 'SM3)ZL3', 'Z16)FF6', 'M3J)9DP', '125)Q61', 'FDD)6KP', 'CMF)1G1', 'BZD)XQF', 'RSC)6DT', 'X8G)YLS', 'X26)KNT', 'P98)Y3Z', 'F5V)4QJ', '4B7)NFC', '5T7)Z5Y', 'BDK)3C3', 'J29)K9P', '114)9VC', '5MV)J5W', 'C2Q)LDB', 'D5V)CJ1', '8Z8)SXQ', 'Y55)X9J', 'XZ3)X5T', 'R6Y)XJM', 'G43)17T', 'JXJ)7S8', '6LB)T9Z', 'BPX)TBN', 'RYG)X9R', 'YC6)6K5', '212)6GC', '19R)62G', '1Z7)HT1', 'X68)ZV4', 'RZ8)FGY', '72R)Y1T', 'MJC)52Z', '1G1)TDL', 'T75)SJJ', 'Y3V)L73', 'J4Q)FR3', 'LFC)JKP', 'HHN)WH4', '262)J28', 'QNC)B2B', '4W3)GYK', 'JP5)GVG', 'DC6)4W5', 'KNH)NT4', 'X65)RPG', 'Q92)5DK', 'CQP)5PJ', 'QYM)LDX', 'DY2)CM5', 'T7V)7C5', 'K7N)LPR', 'M8L)W33', '1XV)19K', 'W4Y)YCF', 'FDY)GT6', 'WS8)6KF', 'BC5)VXF', 'BY7)8M9', '9L3)SM3', 'JKP)M15', 'YMB)484', 'YCL)KGL', '3FP)BVD', 'Y34)VG6', 'VHY)BG7', 'BC5)CYJ', 'ZVX)FHY', 'W33)7MB', 'VQ7)747', 'WSY)5M5', '711)QYM', '5R2)2LS', 'X34)WSY', 'GYL)HMG', '318)M4B', '5QJ)HHB', 'B29)8R7', 'HMG)53T', 'CTR)771', '1N9)HSV', '1ZW)WKN', 'M8C)6XD', '61X)JN5', 'R21)F5V', 'RPP)7ZT', '68L)BJ7', 'NJB)VK9', '8HV)ZBW', '49Z)CCM', 'LHM)RB8', 'LVZ)P98', 'QXF)J9W', '677)G3Q', 'V9J)P5X', 'PZ7)BWK', 'L5N)K1Y', 'PVD)6RF', 'VKX)C2Q', '9SD)FRH', '8R7)7FB', '38V)T1Q', '4D5)1N9', '9LV)RSN', '9WV)HCT', 'BVD)Z5M', '2J1)K8M', '19Y)2BG', 'G7N)RZP', 'J6S)HKF', '1QC)QDC', 'C57)GRT', '397)5H2', 'F4Y)WKR', 'LFC)43Y', 'HCZ)1X4', 'K7H)5J7', 'Q8X)SMJ', 'J8P)J5G', '5DK)FLZ', 'QYV)RLB', 'M9R)NJB', 'W52)262', 'GFH)N6Q', 'KJN)PJJ', 'VX3)49Z', 'LS2)Q4D', 'NPC)TQP', 'B2H)HMK', '5DM)2WF', 'TJ2)WKB', 'NWQ)NN3', '62H)5D3', 'LQ8)5JM', 'F9R)R66', '6L2)WW5', 'RMB)VKX', 'VXF)19R', 'VMQ)WZ1', '6C2)Y9Z', 'YCT)6RT', 'YNQ)QW9', 'LWG)4HR', '7C5)351', 'BK8)B5S', '79M)2S5', 'BCV)6TZ', 'KPR)WCJ', '6TZ)Q8J', 'XLV)1CM', '2YQ)W1M', 'M17)9J6', 'H4G)M3V', '8SK)CM2', 'V4N)FWT', '4TV)93R', 'ZZM)9RW', 'VLB)6S1', 'G1B)KDN', '6XD)P7W', 'GBK)8HV', 'KGL)44W', 'ZBW)ZYN', '28F)8NM', 'Q4D)JBS', 'RB8)GGX', 'XKN)LT7', 'Q29)BZD', '47R)L7S', 'JN5)KD8', 'G7N)YC8', 'VR5)NH5', 'JNR)BJL', 'PQ7)XLV', 'WJS)6JT', 'RHQ)XZ6', '113)Q29', 'VCJ)XSQ', '52Z)T7V', 'L7X)SKG', 'S8N)Y7G', 'CJ1)NL1', 'QS5)RRM', 'C4N)RHS', '484)8YR', 'SKV)YWS', '72M)F1F', '3ZK)RSW', '1LV)GFH'];

const parse = (orbit) => orbit.split(')');
const start = input.find(orbit => parse(orbit)[1] === 'YOU');
let options = input.filter(orbit => parse(orbit)[1] === parse(start)[0]);

const explore = (orbit, remaining, len) => {
  const [orbitee, orbiter] = parse(orbit);
  const newLen = len + 1;
  const next = remaining.filter(orb => (orb.includes(orbitee) || orb.includes(orbiter) && orb !== orbit));
  const rem = remaining.filter(orb => !next.includes(orb));
  if (orbitee === 'COM') {
    return 10000000;
  } else if (orbiter === 'SAN') {
    return len;
  } else if (next.length === 0) {
    return 10000000;
  } else {
    return next.map(o => explore(o, rem, newLen)).reduce((a, b) => a < b ? a : b);
  }
}

options.forEach(opt => console.log((explore(opt, input, 0))));
