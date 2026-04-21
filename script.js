(function(){
// ════════════ DESTINATION DATABASE ════════════
const DESTINATIONS = [
// ═══════════════════════════════════════
// UNIVERSITY OF CALIFORNIA (9)
// ═══════════════════════════════════════
{name:"UC Berkeley",lat:37.8719,lng:-122.2585,cat:"uc",loc:"Berkeley, CA"},
{name:"UCLA",lat:34.0689,lng:-118.4452,cat:"uc",loc:"Los Angeles, CA"},
{name:"UC San Diego",lat:32.8801,lng:-117.2340,cat:"uc",loc:"La Jolla, CA"},
{name:"UC Davis",lat:38.5382,lng:-121.7617,cat:"uc",loc:"Davis, CA"},
{name:"UC Santa Barbara",lat:34.4140,lng:-119.8489,cat:"uc",loc:"Santa Barbara, CA"},
{name:"UC Irvine",lat:33.6405,lng:-117.8443,cat:"uc",loc:"Irvine, CA"},
{name:"UC Santa Cruz",lat:36.9914,lng:-122.0609,cat:"uc",loc:"Santa Cruz, CA"},
{name:"UC Riverside",lat:33.9737,lng:-117.3281,cat:"uc",loc:"Riverside, CA"},
{name:"UC Merced",lat:37.3660,lng:-120.4248,cat:"uc",loc:"Merced, CA"},

// ═══════════════════════════════════════
// CALIFORNIA STATE UNIVERSITY (23)
// ═══════════════════════════════════════
{name:"San José State University",lat:37.3352,lng:-121.8811,cat:"csu",loc:"San José, CA"},
{name:"San Francisco State University",lat:37.7219,lng:-122.4782,cat:"csu",loc:"San Francisco, CA"},
{name:"Cal Poly San Luis Obispo",lat:35.3050,lng:-120.6625,cat:"csu",loc:"San Luis Obispo, CA"},
{name:"Cal Poly Pomona",lat:34.0565,lng:-117.8215,cat:"csu",loc:"Pomona, CA"},
{name:"Cal Poly Humboldt",lat:40.8762,lng:-124.0789,cat:"csu",loc:"Arcata, CA"},
{name:"Sacramento State",lat:38.5607,lng:-121.4231,cat:"csu",loc:"Sacramento, CA"},
{name:"San Diego State University",lat:32.7757,lng:-117.0712,cat:"csu",loc:"San Diego, CA"},
{name:"CSU Long Beach",lat:33.7838,lng:-118.1141,cat:"csu",loc:"Long Beach, CA"},
{name:"Fresno State",lat:36.8134,lng:-119.7483,cat:"csu",loc:"Fresno, CA"},
{name:"Chico State",lat:39.7285,lng:-121.8463,cat:"csu",loc:"Chico, CA"},
{name:"CSU Fullerton",lat:33.8829,lng:-117.8854,cat:"csu",loc:"Fullerton, CA"},
{name:"CSU Northridge",lat:34.2414,lng:-118.5290,cat:"csu",loc:"Northridge, CA"},
{name:"CSU East Bay",lat:37.6565,lng:-122.0569,cat:"csu",loc:"Hayward, CA"},
{name:"Sonoma State University",lat:38.3399,lng:-122.6741,cat:"csu",loc:"Rohnert Park, CA"},
{name:"CSU Stanislaus",lat:37.5255,lng:-120.8566,cat:"csu",loc:"Turlock, CA"},
{name:"CSU Bakersfield",lat:35.3505,lng:-119.1042,cat:"csu",loc:"Bakersfield, CA"},
{name:"CSU Channel Islands",lat:34.1623,lng:-119.0429,cat:"csu",loc:"Camarillo, CA"},
{name:"CSU Dominguez Hills",lat:33.8638,lng:-118.2564,cat:"csu",loc:"Carson, CA"},
{name:"Cal State LA",lat:34.0662,lng:-118.1685,cat:"csu",loc:"Los Angeles, CA"},
{name:"CSU Maritime Academy",lat:38.0697,lng:-122.2310,cat:"csu",loc:"Vallejo, CA"},
{name:"CSU Monterey Bay",lat:36.6536,lng:-121.7985,cat:"csu",loc:"Seaside, CA"},
{name:"CSU San Bernardino",lat:34.1816,lng:-117.3230,cat:"csu",loc:"San Bernardino, CA"},
{name:"CSU San Marcos",lat:33.1284,lng:-117.1598,cat:"csu",loc:"San Marcos, CA"},

// ═══════════════════════════════════════
// CALIFORNIA COMMUNITY COLLEGES (116)
// ═══════════════════════════════════════
{name:"Allan Hancock College",lat:34.9381,lng:-120.4280,cat:"cc",loc:"Santa Maria, CA"},
{name:"American River College",lat:38.6479,lng:-121.3428,cat:"cc",loc:"Sacramento, CA"},
{name:"Antelope Valley College",lat:34.6780,lng:-118.1857,cat:"cc",loc:"Lancaster, CA"},
{name:"Bakersfield College",lat:35.3833,lng:-119.0425,cat:"cc",loc:"Bakersfield, CA"},
{name:"Barstow Community College",lat:34.8961,lng:-117.0322,cat:"cc",loc:"Barstow, CA"},
{name:"Berkeley City College",lat:37.8694,lng:-122.2686,cat:"cc",loc:"Berkeley, CA"},
{name:"Butte College",lat:39.6577,lng:-121.6242,cat:"cc",loc:"Oroville, CA"},
{name:"Cabrillo College",lat:36.9863,lng:-121.9155,cat:"cc",loc:"Aptos, CA"},
{name:"Cañada College",lat:37.5174,lng:-122.3128,cat:"cc",loc:"Redwood City, CA"},
{name:"Cerritos College",lat:33.8684,lng:-118.0905,cat:"cc",loc:"Norwalk, CA"},
{name:"Cerro Coso Community College",lat:35.6257,lng:-117.6621,cat:"cc",loc:"Ridgecrest, CA"},
{name:"Chabot College",lat:37.6396,lng:-122.0579,cat:"cc",loc:"Hayward, CA"},
{name:"Chaffey College",lat:34.1069,lng:-117.5740,cat:"cc",loc:"Rancho Cucamonga, CA"},
{name:"Citrus College",lat:34.1181,lng:-117.8583,cat:"cc",loc:"Glendora, CA"},
{name:"City College of San Francisco",lat:37.7254,lng:-122.4522,cat:"cc",loc:"San Francisco, CA"},
{name:"Coastline College",lat:33.7115,lng:-117.9560,cat:"cc",loc:"Fountain Valley, CA"},
{name:"College of Alameda",lat:37.7617,lng:-122.2429,cat:"cc",loc:"Alameda, CA"},
{name:"College of Marin",lat:37.9788,lng:-122.5304,cat:"cc",loc:"Kentfield, CA"},
{name:"College of San Mateo",lat:37.5338,lng:-122.3388,cat:"cc",loc:"San Mateo, CA"},
{name:"College of the Canyons",lat:34.3966,lng:-118.5622,cat:"cc",loc:"Santa Clarita, CA"},
{name:"College of the Desert",lat:33.7897,lng:-116.3589,cat:"cc",loc:"Palm Desert, CA"},
{name:"College of the Redwoods",lat:40.7394,lng:-124.1599,cat:"cc",loc:"Eureka, CA"},
{name:"College of the Sequoias",lat:36.3112,lng:-119.3218,cat:"cc",loc:"Visalia, CA"},
{name:"College of the Siskiyous",lat:41.4026,lng:-122.3732,cat:"cc",loc:"Weed, CA"},
{name:"Columbia College",lat:38.0350,lng:-120.3966,cat:"cc",loc:"Sonora, CA"},
{name:"Compton College",lat:33.8734,lng:-118.2188,cat:"cc",loc:"Compton, CA"},
{name:"Contra Costa College",lat:37.9932,lng:-122.3378,cat:"cc",loc:"San Pablo, CA"},
{name:"Copper Mountain College",lat:34.1481,lng:-116.3076,cat:"cc",loc:"Joshua Tree, CA"},
{name:"Cosumnes River College",lat:38.4965,lng:-121.3870,cat:"cc",loc:"Sacramento, CA"},
{name:"Crafton Hills College",lat:34.0504,lng:-117.0710,cat:"cc",loc:"Yucaipa, CA"},
{name:"Cuesta College",lat:35.3265,lng:-120.7102,cat:"cc",loc:"San Luis Obispo, CA"},
{name:"Cuyamaca College",lat:32.7813,lng:-116.9182,cat:"cc",loc:"Rancho San Diego, CA"},
{name:"Cypress College",lat:33.8291,lng:-118.0392,cat:"cc",loc:"Cypress, CA"},
{name:"De Anza College",lat:37.3199,lng:-122.0447,cat:"cc",loc:"Cupertino, CA"},
{name:"Diablo Valley College",lat:37.9488,lng:-122.0640,cat:"cc",loc:"Pleasant Hill, CA"},
{name:"East Los Angeles College",lat:34.0239,lng:-118.1556,cat:"cc",loc:"Monterey Park, CA"},
{name:"El Camino College",lat:33.8680,lng:-118.3527,cat:"cc",loc:"Torrance, CA"},
{name:"Evergreen Valley College",lat:37.3075,lng:-121.7705,cat:"cc",loc:"San José, CA"},
{name:"Feather River College",lat:39.9412,lng:-120.9510,cat:"cc",loc:"Quincy, CA"},
{name:"Folsom Lake College",lat:38.6596,lng:-121.1420,cat:"cc",loc:"Folsom, CA"},
{name:"Foothill College",lat:37.3615,lng:-122.1282,cat:"cc",loc:"Los Altos Hills, CA"},
{name:"Fresno City College",lat:36.7563,lng:-119.7965,cat:"cc",loc:"Fresno, CA"},
{name:"Fullerton College",lat:33.8781,lng:-117.9264,cat:"cc",loc:"Fullerton, CA"},
{name:"Gavilan College",lat:37.0034,lng:-121.5665,cat:"cc",loc:"Gilroy, CA"},
{name:"Glendale Community College",lat:34.1609,lng:-118.2581,cat:"cc",loc:"Glendale, CA"},
{name:"Golden West College",lat:33.6709,lng:-118.0014,cat:"cc",loc:"Huntington Beach, CA"},
{name:"Grossmont College",lat:32.8141,lng:-116.9416,cat:"cc",loc:"El Cajon, CA"},
{name:"Hartnell College",lat:36.6804,lng:-121.6367,cat:"cc",loc:"Salinas, CA"},
{name:"Imperial Valley College",lat:32.8174,lng:-115.5652,cat:"cc",loc:"Imperial, CA"},
{name:"Irvine Valley College",lat:33.6886,lng:-117.8319,cat:"cc",loc:"Irvine, CA"},
{name:"Lake Tahoe Community College",lat:38.9275,lng:-119.9913,cat:"cc",loc:"South Lake Tahoe, CA"},
{name:"Laney College",lat:37.7958,lng:-122.2549,cat:"cc",loc:"Oakland, CA"},
{name:"Las Positas College",lat:37.6169,lng:-121.8564,cat:"cc",loc:"Livermore, CA"},
{name:"Lassen Community College",lat:40.4887,lng:-120.6006,cat:"cc",loc:"Susanville, CA"},
{name:"Long Beach City College",lat:33.7987,lng:-118.1634,cat:"cc",loc:"Long Beach, CA"},
{name:"Los Angeles City College",lat:34.0849,lng:-118.2932,cat:"cc",loc:"Los Angeles, CA"},
{name:"Los Angeles Harbor College",lat:33.7930,lng:-118.2870,cat:"cc",loc:"Wilmington, CA"},
{name:"Los Angeles Mission College",lat:34.2818,lng:-118.4494,cat:"cc",loc:"Sylmar, CA"},
{name:"Los Angeles Pierce College",lat:34.1827,lng:-118.5784,cat:"cc",loc:"Woodland Hills, CA"},
{name:"Los Angeles Southwest College",lat:33.9290,lng:-118.3141,cat:"cc",loc:"Los Angeles, CA"},
{name:"Los Angeles Trade-Technical College",lat:34.0182,lng:-118.2695,cat:"cc",loc:"Los Angeles, CA"},
{name:"Los Angeles Valley College",lat:34.1901,lng:-118.4196,cat:"cc",loc:"Valley Glen, CA"},
{name:"Los Medanos College",lat:38.0048,lng:-121.8460,cat:"cc",loc:"Pittsburg, CA"},
{name:"Madera Community College",lat:36.9477,lng:-120.0579,cat:"cc",loc:"Madera, CA"},
{name:"Mendocino College",lat:39.1519,lng:-123.2033,cat:"cc",loc:"Ukiah, CA"},
{name:"Merced College",lat:37.3211,lng:-120.4693,cat:"cc",loc:"Merced, CA"},
{name:"Merritt College",lat:37.7888,lng:-122.1818,cat:"cc",loc:"Oakland, CA"},
{name:"MiraCosta College",lat:33.1923,lng:-117.3065,cat:"cc",loc:"Oceanside, CA"},
{name:"Mission College",lat:37.3905,lng:-121.9844,cat:"cc",loc:"Santa Clara, CA"},
{name:"Modesto Junior College",lat:37.6378,lng:-120.9998,cat:"cc",loc:"Modesto, CA"},
{name:"Monterey Peninsula College",lat:36.5915,lng:-121.8758,cat:"cc",loc:"Monterey, CA"},
{name:"Moorpark College",lat:34.2870,lng:-118.8792,cat:"cc",loc:"Moorpark, CA"},
{name:"Moreno Valley College",lat:33.9232,lng:-117.2653,cat:"cc",loc:"Moreno Valley, CA"},
{name:"Mt. San Antonio College",lat:34.0472,lng:-117.8442,cat:"cc",loc:"Walnut, CA"},
{name:"Mt. San Jacinto College",lat:33.7614,lng:-116.9584,cat:"cc",loc:"San Jacinto, CA"},
{name:"Napa Valley College",lat:38.2884,lng:-122.2845,cat:"cc",loc:"Napa, CA"},
{name:"Norco College",lat:33.9310,lng:-117.5501,cat:"cc",loc:"Norco, CA"},
{name:"Ohlone College",lat:37.5106,lng:-121.9575,cat:"cc",loc:"Fremont, CA"},
{name:"Orange Coast College",lat:33.6681,lng:-117.9153,cat:"cc",loc:"Costa Mesa, CA"},
{name:"Oxnard College",lat:34.2008,lng:-119.1780,cat:"cc",loc:"Oxnard, CA"},
{name:"Palo Verde College",lat:33.6139,lng:-114.5920,cat:"cc",loc:"Blythe, CA"},
{name:"Palomar College",lat:33.1500,lng:-117.1675,cat:"cc",loc:"San Marcos, CA"},
{name:"Pasadena City College",lat:34.1406,lng:-118.1239,cat:"cc",loc:"Pasadena, CA"},
{name:"Porterville College",lat:36.0608,lng:-119.0367,cat:"cc",loc:"Porterville, CA"},
{name:"Reedley College",lat:36.5900,lng:-119.4520,cat:"cc",loc:"Reedley, CA"},
{name:"Rio Hondo College",lat:34.0059,lng:-118.0389,cat:"cc",loc:"Whittier, CA"},
{name:"Riverside City College",lat:33.9606,lng:-117.3718,cat:"cc",loc:"Riverside, CA"},
{name:"Sacramento City College",lat:38.5389,lng:-121.4731,cat:"cc",loc:"Sacramento, CA"},
{name:"Saddleback College",lat:33.5539,lng:-117.6620,cat:"cc",loc:"Mission Viejo, CA"},
{name:"San Bernardino Valley College",lat:34.0997,lng:-117.2898,cat:"cc",loc:"San Bernardino, CA"},
{name:"San Diego City College",lat:32.7184,lng:-117.1573,cat:"cc",loc:"San Diego, CA"},
{name:"San Diego Mesa College",lat:32.8028,lng:-117.1748,cat:"cc",loc:"San Diego, CA"},
{name:"San Diego Miramar College",lat:32.9166,lng:-117.1383,cat:"cc",loc:"San Diego, CA"},
{name:"San Joaquin Delta College",lat:37.9841,lng:-121.3320,cat:"cc",loc:"Stockton, CA"},
{name:"San José City College",lat:37.3032,lng:-121.8717,cat:"cc",loc:"San José, CA"},
{name:"Santa Ana College",lat:33.7514,lng:-117.8727,cat:"cc",loc:"Santa Ana, CA"},
{name:"Santa Barbara City College",lat:34.4042,lng:-119.6978,cat:"cc",loc:"Santa Barbara, CA"},
{name:"Santa Monica College",lat:34.0154,lng:-118.4696,cat:"cc",loc:"Santa Monica, CA"},
{name:"Santa Rosa Junior College",lat:38.4526,lng:-122.7148,cat:"cc",loc:"Santa Rosa, CA"},
{name:"Santiago Canyon College",lat:33.7916,lng:-117.7486,cat:"cc",loc:"Orange, CA"},
{name:"Shasta College",lat:40.5726,lng:-122.3547,cat:"cc",loc:"Redding, CA"},
{name:"Sierra College",lat:38.7883,lng:-121.2239,cat:"cc",loc:"Rocklin, CA"},
{name:"Skyline College",lat:37.6331,lng:-122.4671,cat:"cc",loc:"San Bruno, CA"},
{name:"Solano Community College",lat:38.3558,lng:-122.0029,cat:"cc",loc:"Fairfield, CA"},
{name:"Southwestern College",lat:32.6469,lng:-117.0063,cat:"cc",loc:"Chula Vista, CA"},
{name:"Taft College",lat:35.1406,lng:-119.4615,cat:"cc",loc:"Taft, CA"},
{name:"Ventura College",lat:34.2964,lng:-119.3042,cat:"cc",loc:"Ventura, CA"},
{name:"Victor Valley College",lat:34.5218,lng:-117.3519,cat:"cc",loc:"Victorville, CA"},
{name:"West Hills College Coalinga",lat:36.1381,lng:-120.3449,cat:"cc",loc:"Coalinga, CA"},
{name:"West Hills College Lemoore",lat:36.2831,lng:-119.7904,cat:"cc",loc:"Lemoore, CA"},
{name:"West Los Angeles College",lat:33.9761,lng:-118.4188,cat:"cc",loc:"Culver City, CA"},
{name:"West Valley College",lat:37.2640,lng:-122.0100,cat:"cc",loc:"Saratoga, CA"},
{name:"Woodland Community College",lat:38.6804,lng:-121.7619,cat:"cc",loc:"Woodland, CA"},
{name:"Yuba College",lat:39.1351,lng:-121.6108,cat:"cc",loc:"Marysville, CA"},

// ═══════════════════════════════════════
// CALIFORNIA PRIVATE / OTHER 4-YEAR (100+)
// ═══════════════════════════════════════
{name:"Stanford University",lat:37.4275,lng:-122.1697,cat:"ca_private",loc:"Stanford, CA"},
{name:"Caltech",lat:34.1377,lng:-118.1253,cat:"ca_private",loc:"Pasadena, CA"},
{name:"University of Southern California",lat:34.0224,lng:-118.2851,cat:"ca_private",loc:"Los Angeles, CA"},
{name:"Santa Clara University",lat:37.3496,lng:-121.9390,cat:"ca_private",loc:"Santa Clara, CA"},
{name:"University of San Francisco",lat:37.7765,lng:-122.4506,cat:"ca_private",loc:"San Francisco, CA"},
{name:"University of San Diego",lat:32.7711,lng:-117.1884,cat:"ca_private",loc:"San Diego, CA"},
{name:"Saint Mary's College of California",lat:37.8402,lng:-122.1100,cat:"ca_private",loc:"Moraga, CA"},
{name:"University of the Pacific",lat:37.9806,lng:-121.3111,cat:"ca_private",loc:"Stockton, CA"},
{name:"Loyola Marymount University",lat:33.9698,lng:-118.4177,cat:"ca_private",loc:"Los Angeles, CA"},
{name:"Pepperdine University",lat:34.0365,lng:-118.7095,cat:"ca_private",loc:"Malibu, CA"},
{name:"Chapman University",lat:33.7933,lng:-117.8519,cat:"ca_private",loc:"Orange, CA"},
{name:"Claremont McKenna College",lat:34.1014,lng:-117.7089,cat:"ca_private",loc:"Claremont, CA"},
{name:"Pomona College",lat:34.0977,lng:-117.7115,cat:"ca_private",loc:"Claremont, CA"},
{name:"Harvey Mudd College",lat:34.1060,lng:-117.7108,cat:"ca_private",loc:"Claremont, CA"},
{name:"Scripps College",lat:34.1031,lng:-117.7098,cat:"ca_private",loc:"Claremont, CA"},
{name:"Pitzer College",lat:34.1048,lng:-117.7116,cat:"ca_private",loc:"Claremont, CA"},
{name:"Occidental College",lat:34.1275,lng:-118.2107,cat:"ca_private",loc:"Los Angeles, CA"},
{name:"Whittier College",lat:33.9781,lng:-118.0328,cat:"ca_private",loc:"Whittier, CA"},
{name:"University of La Verne",lat:34.1002,lng:-117.7675,cat:"ca_private",loc:"La Verne, CA"},
{name:"University of Redlands",lat:34.0620,lng:-117.1640,cat:"ca_private",loc:"Redlands, CA"},
{name:"Azusa Pacific University",lat:34.1322,lng:-117.9057,cat:"ca_private",loc:"Azusa, CA"},
{name:"Biola University",lat:33.9129,lng:-118.0013,cat:"ca_private",loc:"La Mirada, CA"},
{name:"California Baptist University",lat:33.9308,lng:-117.3999,cat:"ca_private",loc:"Riverside, CA"},
{name:"California Lutheran University",lat:34.2137,lng:-118.8914,cat:"ca_private",loc:"Thousand Oaks, CA"},
{name:"Fresno Pacific University",lat:36.7249,lng:-119.7568,cat:"ca_private",loc:"Fresno, CA"},
{name:"Point Loma Nazarene University",lat:32.7152,lng:-117.2417,cat:"ca_private",loc:"San Diego, CA"},
{name:"Westmont College",lat:34.4417,lng:-119.6830,cat:"ca_private",loc:"Santa Barbara, CA"},
{name:"Vanguard University",lat:33.6735,lng:-117.8937,cat:"ca_private",loc:"Costa Mesa, CA"},
{name:"William Jessup University",lat:38.7522,lng:-121.2120,cat:"ca_private",loc:"Rocklin, CA"},
{name:"Simpson University",lat:40.5830,lng:-122.3650,cat:"ca_private",loc:"Redding, CA"},
{name:"Hope International University",lat:33.8730,lng:-117.9256,cat:"ca_private",loc:"Fullerton, CA"},
{name:"Pacific Union College",lat:38.5663,lng:-122.4672,cat:"ca_private",loc:"Angwin, CA"},
{name:"La Sierra University",lat:33.9083,lng:-117.4472,cat:"ca_private",loc:"Riverside, CA"},
{name:"Loma Linda University",lat:34.0510,lng:-117.2625,cat:"ca_private",loc:"Loma Linda, CA"},
{name:"Dominican University of California",lat:37.9799,lng:-122.5141,cat:"ca_private",loc:"San Rafael, CA"},
{name:"Golden Gate University",lat:37.7892,lng:-122.4005,cat:"ca_private",loc:"San Francisco, CA"},
{name:"Menlo College",lat:37.4565,lng:-122.1759,cat:"ca_private",loc:"Atherton, CA"},
{name:"Notre Dame de Namur University",lat:37.5825,lng:-122.3341,cat:"ca_private",loc:"Belmont, CA"},
{name:"Woodbury University",lat:34.1939,lng:-118.2675,cat:"ca_private",loc:"Burbank, CA"},
{name:"Mount Saint Mary's University",lat:34.0690,lng:-118.4504,cat:"ca_private",loc:"Los Angeles, CA"},
{name:"Soka University of America",lat:33.5502,lng:-117.7300,cat:"ca_private",loc:"Aliso Viejo, CA"},
{name:"Thomas Aquinas College",lat:34.5494,lng:-118.8449,cat:"ca_private",loc:"Santa Paula, CA"},
{name:"National University",lat:32.8856,lng:-117.1558,cat:"ca_private",loc:"San Diego, CA"},
{name:"Alliant International University",lat:32.8453,lng:-117.2113,cat:"ca_private",loc:"San Diego, CA"},
{name:"California College of the Arts",lat:37.8162,lng:-122.3594,cat:"ca_private",loc:"San Francisco, CA"},
{name:"California Institute of the Arts",lat:34.3936,lng:-118.5693,cat:"ca_private",loc:"Valencia, CA"},
{name:"ArtCenter College of Design",lat:34.1753,lng:-118.1363,cat:"ca_private",loc:"Pasadena, CA"},
{name:"Otis College of Art and Design",lat:33.9658,lng:-118.4310,cat:"ca_private",loc:"Los Angeles, CA"},
{name:"Academy of Art University",lat:37.7879,lng:-122.4009,cat:"ca_private",loc:"San Francisco, CA"},
{name:"San Francisco Conservatory of Music",lat:37.7635,lng:-122.4210,cat:"ca_private",loc:"San Francisco, CA"},
{name:"Charles R. Drew University",lat:33.9231,lng:-118.2453,cat:"ca_private",loc:"Los Angeles, CA"},
{name:"Western University of Health Sciences",lat:34.0616,lng:-117.7593,cat:"ca_private",loc:"Pomona, CA"},
{name:"Samuel Merritt University",lat:37.8136,lng:-122.2632,cat:"ca_private",loc:"Oakland, CA"},
{name:"Touro University California",lat:38.0665,lng:-122.2243,cat:"ca_private",loc:"Vallejo, CA"},
{name:"John Paul the Great Catholic University",lat:33.1198,lng:-117.1018,cat:"ca_private",loc:"Escondido, CA"},
{name:"Harding University",lat:34.0365,lng:-118.2600,cat:"ca_private",loc:"Los Angeles, CA"},
{name:"UMass Global (formerly Brandman)",lat:33.7875,lng:-117.8530,cat:"ca_private",loc:"Irvine, CA"},
{name:"Pacific Oaks College",lat:34.1630,lng:-118.1707,cat:"ca_private",loc:"Pasadena, CA"},
{name:"Middlebury Institute of International Studies",lat:36.5993,lng:-121.8940,cat:"ca_private",loc:"Monterey, CA"},

// ═══════════════════════════════════════
// IVY LEAGUE (8)
// ═══════════════════════════════════════
{name:"Harvard University",lat:42.3770,lng:-71.1167,cat:"ivy",loc:"Cambridge, MA"},
{name:"Yale University",lat:41.3163,lng:-72.9223,cat:"ivy",loc:"New Haven, CT"},
{name:"Princeton University",lat:40.3431,lng:-74.6551,cat:"ivy",loc:"Princeton, NJ"},
{name:"Columbia University",lat:40.8075,lng:-73.9626,cat:"ivy",loc:"New York, NY"},
{name:"University of Pennsylvania",lat:39.9522,lng:-75.1932,cat:"ivy",loc:"Philadelphia, PA"},
{name:"Brown University",lat:41.8268,lng:-71.4025,cat:"ivy",loc:"Providence, RI"},
{name:"Dartmouth College",lat:43.7044,lng:-72.2887,cat:"ivy",loc:"Hanover, NH"},
{name:"Cornell University",lat:42.4534,lng:-76.4735,cat:"ivy",loc:"Ithaca, NY"},

// ═══════════════════════════════════════
// TOP UNIVERSITIES BY STATE (excl. CA)
// ═══════════════════════════════════════

// -- Alabama --
{name:"University of Alabama",lat:33.2098,lng:-87.5692,cat:"national",loc:"Tuscaloosa, AL"},
{name:"Auburn University",lat:32.6026,lng:-85.4808,cat:"national",loc:"Auburn, AL"},
{name:"UAB",lat:33.5021,lng:-86.8074,cat:"national",loc:"Birmingham, AL"},
{name:"Alabama A&M University",lat:34.7823,lng:-86.5690,cat:"national",loc:"Huntsville, AL"},
{name:"Troy University",lat:31.7980,lng:-85.9562,cat:"national",loc:"Troy, AL"},
{name:"University of South Alabama",lat:30.6946,lng:-88.1785,cat:"national",loc:"Mobile, AL"},
{name:"Samford University",lat:33.4614,lng:-86.7929,cat:"national",loc:"Birmingham, AL"},
{name:"Alabama State University",lat:32.3646,lng:-86.2955,cat:"national",loc:"Montgomery, AL"},
{name:"Jacksonville State University",lat:33.8225,lng:-85.7617,cat:"national",loc:"Jacksonville, AL"},
{name:"University of North Alabama",lat:34.7564,lng:-87.7035,cat:"national",loc:"Florence, AL"},

// -- Alaska --
{name:"University of Alaska Anchorage",lat:61.1902,lng:-149.8266,cat:"national",loc:"Anchorage, AK"},
{name:"University of Alaska Fairbanks",lat:64.8578,lng:-147.8511,cat:"national",loc:"Fairbanks, AK"},
{name:"University of Alaska Southeast",lat:58.3855,lng:-134.6364,cat:"national",loc:"Juneau, AK"},
{name:"Alaska Pacific University",lat:61.1887,lng:-149.8148,cat:"national",loc:"Anchorage, AK"},

// -- Arizona --
{name:"Arizona State University",lat:33.4242,lng:-111.9281,cat:"national",loc:"Tempe, AZ"},
{name:"University of Arizona",lat:32.2319,lng:-110.9501,cat:"national",loc:"Tucson, AZ"},
{name:"Northern Arizona University",lat:35.1886,lng:-111.6553,cat:"national",loc:"Flagstaff, AZ"},
{name:"Grand Canyon University",lat:33.5088,lng:-112.1259,cat:"national",loc:"Phoenix, AZ"},
{name:"Embry-Riddle Aeronautical University",lat:34.6145,lng:-112.4507,cat:"national",loc:"Prescott, AZ"},
{name:"Arizona Christian University",lat:33.4104,lng:-112.1489,cat:"national",loc:"Glendale, AZ"},

// -- Arkansas --
{name:"University of Arkansas",lat:36.0685,lng:-94.1748,cat:"national",loc:"Fayetteville, AR"},
{name:"Arkansas State University",lat:35.8431,lng:-90.6761,cat:"national",loc:"Jonesboro, AR"},
{name:"University of Central Arkansas",lat:35.0771,lng:-92.4603,cat:"national",loc:"Conway, AR"},
{name:"Hendrix College",lat:35.0994,lng:-92.4453,cat:"national",loc:"Conway, AR"},
{name:"Harding University (AR)",lat:35.2485,lng:-91.7299,cat:"national",loc:"Searcy, AR"},
{name:"University of Arkansas at Little Rock",lat:34.7243,lng:-92.3385,cat:"national",loc:"Little Rock, AR"},
{name:"Arkansas Tech University",lat:35.2926,lng:-93.1335,cat:"national",loc:"Russellville, AR"},
{name:"Ouachita Baptist University",lat:34.3559,lng:-93.0639,cat:"national",loc:"Arkadelphia, AR"},
{name:"John Brown University",lat:36.3230,lng:-94.1328,cat:"national",loc:"Siloam Springs, AR"},
{name:"Lyon College",lat:35.8048,lng:-91.6413,cat:"national",loc:"Batesville, AR"},

// -- Colorado --
{name:"University of Colorado Boulder",lat:40.0076,lng:-105.2659,cat:"national",loc:"Boulder, CO"},
{name:"Colorado State University",lat:40.5734,lng:-105.0866,cat:"national",loc:"Fort Collins, CO"},
{name:"University of Denver",lat:39.6765,lng:-104.9619,cat:"national",loc:"Denver, CO"},
{name:"Colorado School of Mines",lat:39.7514,lng:-105.2228,cat:"national",loc:"Golden, CO"},
{name:"Colorado College",lat:38.8478,lng:-104.8253,cat:"national",loc:"Colorado Springs, CO"},
{name:"University of Colorado Denver",lat:39.7461,lng:-105.0073,cat:"national",loc:"Denver, CO"},
{name:"University of Northern Colorado",lat:40.4069,lng:-104.7000,cat:"national",loc:"Greeley, CO"},
{name:"Colorado Mesa University",lat:39.0774,lng:-108.5531,cat:"national",loc:"Grand Junction, CO"},
{name:"Regis University",lat:39.7879,lng:-105.0226,cat:"national",loc:"Denver, CO"},
{name:"US Air Force Academy",lat:38.9983,lng:-104.8614,cat:"national",loc:"Colorado Springs, CO"},

// -- Connecticut --
{name:"University of Connecticut",lat:41.8077,lng:-72.2540,cat:"national",loc:"Storrs, CT"},
{name:"Wesleyan University",lat:41.5555,lng:-72.6565,cat:"national",loc:"Middletown, CT"},
{name:"Trinity College",lat:41.7475,lng:-72.6905,cat:"national",loc:"Hartford, CT"},
{name:"Connecticut College",lat:41.3793,lng:-72.1051,cat:"national",loc:"New London, CT"},
{name:"Fairfield University",lat:41.1703,lng:-73.2504,cat:"national",loc:"Fairfield, CT"},
{name:"Quinnipiac University",lat:41.4190,lng:-72.8928,cat:"national",loc:"Hamden, CT"},
{name:"Sacred Heart University",lat:41.2082,lng:-73.2395,cat:"national",loc:"Fairfield, CT"},
{name:"University of Hartford",lat:41.7995,lng:-72.7270,cat:"national",loc:"West Hartford, CT"},
{name:"Central Connecticut State University",lat:41.6920,lng:-72.7821,cat:"national",loc:"New Britain, CT"},
{name:"University of New Haven",lat:41.2920,lng:-72.9609,cat:"national",loc:"West Haven, CT"},

// -- Delaware --
{name:"University of Delaware",lat:39.6780,lng:-75.7506,cat:"national",loc:"Newark, DE"},
{name:"Delaware State University",lat:39.1886,lng:-75.5366,cat:"national",loc:"Dover, DE"},
{name:"Wilmington University",lat:39.6871,lng:-75.6251,cat:"national",loc:"New Castle, DE"},
{name:"Wesley College",lat:39.1561,lng:-75.5211,cat:"national",loc:"Dover, DE"},

// -- Florida --
{name:"University of Florida",lat:29.6436,lng:-82.3549,cat:"national",loc:"Gainesville, FL"},
{name:"Florida State University",lat:30.4419,lng:-84.2985,cat:"national",loc:"Tallahassee, FL"},
{name:"University of Miami",lat:25.7188,lng:-80.2795,cat:"national",loc:"Coral Gables, FL"},
{name:"University of Central Florida",lat:28.6024,lng:-81.2001,cat:"national",loc:"Orlando, FL"},
{name:"University of South Florida",lat:28.0587,lng:-82.4139,cat:"national",loc:"Tampa, FL"},
{name:"Florida International University",lat:25.7563,lng:-80.3739,cat:"national",loc:"Miami, FL"},
{name:"Florida A&M University",lat:30.4240,lng:-84.2838,cat:"national",loc:"Tallahassee, FL"},
{name:"Stetson University",lat:29.0389,lng:-81.3015,cat:"national",loc:"DeLand, FL"},
{name:"Rollins College",lat:28.5920,lng:-81.3488,cat:"national",loc:"Winter Park, FL"},
{name:"Embry-Riddle Aeronautical (FL)",lat:29.1878,lng:-81.0470,cat:"national",loc:"Daytona Beach, FL"},

// -- Georgia --
{name:"University of Georgia",lat:33.9480,lng:-83.3773,cat:"national",loc:"Athens, GA"},
{name:"Georgia Tech",lat:33.7756,lng:-84.3963,cat:"national",loc:"Atlanta, GA"},
{name:"Emory University",lat:33.7909,lng:-84.3254,cat:"national",loc:"Atlanta, GA"},
{name:"Georgia State University",lat:33.7530,lng:-84.3853,cat:"national",loc:"Atlanta, GA"},
{name:"Morehouse College",lat:33.7473,lng:-84.4124,cat:"national",loc:"Atlanta, GA"},
{name:"Spelman College",lat:33.7463,lng:-84.4112,cat:"national",loc:"Atlanta, GA"},
{name:"Mercer University",lat:32.8288,lng:-83.6498,cat:"national",loc:"Macon, GA"},
{name:"Kennesaw State University",lat:34.0379,lng:-84.5815,cat:"national",loc:"Kennesaw, GA"},
{name:"Clark Atlanta University",lat:33.7543,lng:-84.4109,cat:"national",loc:"Atlanta, GA"},
{name:"Savannah College of Art and Design",lat:32.0776,lng:-81.0913,cat:"national",loc:"Savannah, GA"},

// -- Hawaii --
{name:"University of Hawaiʻi at Mānoa",lat:21.2969,lng:-157.8171,cat:"national",loc:"Honolulu, HI"},
{name:"University of Hawaiʻi at Hilo",lat:19.7022,lng:-155.0787,cat:"national",loc:"Hilo, HI"},
{name:"Hawaiʻi Pacific University",lat:21.3073,lng:-157.8593,cat:"national",loc:"Honolulu, HI"},
{name:"Chaminade University of Honolulu",lat:21.2991,lng:-157.7972,cat:"national",loc:"Honolulu, HI"},
{name:"Brigham Young University–Hawaii",lat:21.6431,lng:-157.9252,cat:"national",loc:"Laie, HI"},

// -- Idaho --
{name:"Boise State University",lat:43.6030,lng:-116.2047,cat:"national",loc:"Boise, ID"},
{name:"University of Idaho",lat:46.7274,lng:-117.0163,cat:"national",loc:"Moscow, ID"},
{name:"Idaho State University",lat:42.8618,lng:-112.4335,cat:"national",loc:"Pocatello, ID"},
{name:"Brigham Young University–Idaho",lat:43.8148,lng:-111.7835,cat:"national",loc:"Rexburg, ID"},
{name:"College of Idaho",lat:43.6603,lng:-116.6882,cat:"national",loc:"Caldwell, ID"},
{name:"Northwest Nazarene University",lat:43.5741,lng:-116.5542,cat:"national",loc:"Nampa, ID"},

// -- Illinois --
{name:"University of Illinois Urbana-Champaign",lat:40.1020,lng:-88.2272,cat:"national",loc:"Champaign, IL"},
{name:"Northwestern University",lat:42.0565,lng:-87.6753,cat:"national",loc:"Evanston, IL"},
{name:"University of Chicago",lat:41.7886,lng:-87.5987,cat:"national",loc:"Chicago, IL"},
{name:"DePaul University",lat:41.9254,lng:-87.6535,cat:"national",loc:"Chicago, IL"},
{name:"Loyola University Chicago",lat:42.0011,lng:-87.6579,cat:"national",loc:"Chicago, IL"},
{name:"Illinois State University",lat:40.5108,lng:-88.9983,cat:"national",loc:"Normal, IL"},
{name:"University of Illinois Chicago",lat:41.8715,lng:-87.6490,cat:"national",loc:"Chicago, IL"},
{name:"Southern Illinois University",lat:37.7147,lng:-89.2270,cat:"national",loc:"Carbondale, IL"},
{name:"Illinois Institute of Technology",lat:41.8349,lng:-87.6273,cat:"national",loc:"Chicago, IL"},
{name:"Northern Illinois University",lat:41.9345,lng:-88.7709,cat:"national",loc:"DeKalb, IL"},

// -- Indiana --
{name:"Indiana University Bloomington",lat:39.1681,lng:-86.5186,cat:"national",loc:"Bloomington, IN"},
{name:"Purdue University",lat:40.4237,lng:-86.9212,cat:"national",loc:"West Lafayette, IN"},
{name:"University of Notre Dame",lat:41.7002,lng:-86.2379,cat:"national",loc:"Notre Dame, IN"},
{name:"Butler University",lat:39.8378,lng:-86.1698,cat:"national",loc:"Indianapolis, IN"},
{name:"Ball State University",lat:40.2061,lng:-85.4106,cat:"national",loc:"Muncie, IN"},
{name:"Indiana State University",lat:39.4701,lng:-87.4043,cat:"national",loc:"Terre Haute, IN"},
{name:"DePauw University",lat:39.6376,lng:-86.8595,cat:"national",loc:"Greencastle, IN"},
{name:"Valparaiso University",lat:41.4600,lng:-87.0431,cat:"national",loc:"Valparaiso, IN"},
{name:"Rose-Hulman Institute of Technology",lat:39.4831,lng:-87.3249,cat:"national",loc:"Terre Haute, IN"},
{name:"Earlham College",lat:39.8289,lng:-84.8898,cat:"national",loc:"Richmond, IN"},

// -- Iowa --
{name:"University of Iowa",lat:41.6628,lng:-91.5550,cat:"national",loc:"Iowa City, IA"},
{name:"Iowa State University",lat:42.0267,lng:-93.6465,cat:"national",loc:"Ames, IA"},
{name:"University of Northern Iowa",lat:42.5145,lng:-92.4615,cat:"national",loc:"Cedar Falls, IA"},
{name:"Drake University",lat:41.6044,lng:-93.6581,cat:"national",loc:"Des Moines, IA"},
{name:"Grinnell College",lat:41.7468,lng:-92.7220,cat:"national",loc:"Grinnell, IA"},
{name:"Coe College",lat:41.9903,lng:-91.6519,cat:"national",loc:"Cedar Rapids, IA"},
{name:"Luther College",lat:43.3026,lng:-91.8008,cat:"national",loc:"Decorah, IA"},
{name:"Cornell College",lat:41.9242,lng:-91.4243,cat:"national",loc:"Mount Vernon, IA"},
{name:"Simpson College",lat:41.3666,lng:-93.5621,cat:"national",loc:"Indianola, IA"},
{name:"Wartburg College",lat:42.7229,lng:-92.3464,cat:"national",loc:"Waverly, IA"},

// -- Kansas --
{name:"University of Kansas",lat:38.9543,lng:-95.2558,cat:"national",loc:"Lawrence, KS"},
{name:"Kansas State University",lat:39.1836,lng:-96.5717,cat:"national",loc:"Manhattan, KS"},
{name:"Wichita State University",lat:37.7175,lng:-97.2919,cat:"national",loc:"Wichita, KS"},
{name:"Emporia State University",lat:38.4096,lng:-96.1830,cat:"national",loc:"Emporia, KS"},
{name:"Washburn University",lat:39.0370,lng:-95.6965,cat:"national",loc:"Topeka, KS"},
{name:"Fort Hays State University",lat:38.8762,lng:-99.3332,cat:"national",loc:"Hays, KS"},
{name:"Baker University",lat:38.7791,lng:-95.2561,cat:"national",loc:"Baldwin City, KS"},
{name:"Pittsburg State University",lat:37.3976,lng:-94.7012,cat:"national",loc:"Pittsburg, KS"},

// -- Kentucky --
{name:"University of Kentucky",lat:38.0317,lng:-84.5040,cat:"national",loc:"Lexington, KY"},
{name:"University of Louisville",lat:38.2148,lng:-85.7585,cat:"national",loc:"Louisville, KY"},
{name:"Western Kentucky University",lat:36.9860,lng:-86.4543,cat:"national",loc:"Bowling Green, KY"},
{name:"Eastern Kentucky University",lat:37.7335,lng:-84.2939,cat:"national",loc:"Richmond, KY"},
{name:"Murray State University",lat:36.6138,lng:-88.3209,cat:"national",loc:"Murray, KY"},
{name:"Northern Kentucky University",lat:39.0319,lng:-84.4647,cat:"national",loc:"Highland Heights, KY"},
{name:"Centre College",lat:37.6424,lng:-84.7742,cat:"national",loc:"Danville, KY"},
{name:"Berea College",lat:37.5684,lng:-84.2938,cat:"national",loc:"Berea, KY"},
{name:"Transylvania University",lat:38.0546,lng:-84.4981,cat:"national",loc:"Lexington, KY"},
{name:"Morehead State University",lat:38.1848,lng:-83.4361,cat:"national",loc:"Morehead, KY"},

// -- Louisiana --
{name:"Louisiana State University",lat:30.4133,lng:-91.1800,cat:"national",loc:"Baton Rouge, LA"},
{name:"Tulane University",lat:29.9402,lng:-90.1209,cat:"national",loc:"New Orleans, LA"},
{name:"University of Louisiana at Lafayette",lat:30.2101,lng:-92.0198,cat:"national",loc:"Lafayette, LA"},
{name:"Louisiana Tech University",lat:32.5295,lng:-92.6482,cat:"national",loc:"Ruston, LA"},
{name:"University of New Orleans",lat:30.0273,lng:-90.0672,cat:"national",loc:"New Orleans, LA"},
{name:"Loyola University New Orleans",lat:29.9342,lng:-90.1235,cat:"national",loc:"New Orleans, LA"},
{name:"Xavier University of Louisiana",lat:29.9673,lng:-90.1081,cat:"national",loc:"New Orleans, LA"},
{name:"Southern University",lat:30.5162,lng:-91.1914,cat:"national",loc:"Baton Rouge, LA"},
{name:"Grambling State University",lat:32.5272,lng:-92.7178,cat:"national",loc:"Grambling, LA"},
{name:"McNeese State University",lat:30.2068,lng:-93.2161,cat:"national",loc:"Lake Charles, LA"},

// -- Maine --
{name:"University of Maine",lat:44.9012,lng:-68.6730,cat:"national",loc:"Orono, ME"},
{name:"Bowdoin College",lat:43.9072,lng:-69.9637,cat:"national",loc:"Brunswick, ME"},
{name:"Bates College",lat:44.1055,lng:-70.2035,cat:"national",loc:"Lewiston, ME"},
{name:"Colby College",lat:44.5644,lng:-69.6609,cat:"national",loc:"Waterville, ME"},
{name:"University of Southern Maine",lat:43.6518,lng:-70.2932,cat:"national",loc:"Portland, ME"},
{name:"University of New England",lat:43.4685,lng:-70.3713,cat:"national",loc:"Biddeford, ME"},

// -- Maryland --
{name:"University of Maryland",lat:38.9869,lng:-76.9426,cat:"national",loc:"College Park, MD"},
{name:"Johns Hopkins University",lat:39.3299,lng:-76.6205,cat:"national",loc:"Baltimore, MD"},
{name:"Towson University",lat:39.3935,lng:-76.6089,cat:"national",loc:"Towson, MD"},
{name:"Morgan State University",lat:39.3438,lng:-76.5836,cat:"national",loc:"Baltimore, MD"},
{name:"Salisbury University",lat:38.3688,lng:-75.6016,cat:"national",loc:"Salisbury, MD"},
{name:"UMBC",lat:39.2558,lng:-76.7109,cat:"national",loc:"Baltimore, MD"},
{name:"Loyola University Maryland",lat:39.3497,lng:-76.6258,cat:"national",loc:"Baltimore, MD"},
{name:"Goucher College",lat:39.4083,lng:-76.5874,cat:"national",loc:"Towson, MD"},
{name:"Hood College",lat:39.4240,lng:-77.4185,cat:"national",loc:"Frederick, MD"},
{name:"U.S. Naval Academy",lat:38.9822,lng:-76.4842,cat:"national",loc:"Annapolis, MD"},

// -- Massachusetts --
{name:"MIT",lat:42.3601,lng:-71.0942,cat:"national",loc:"Cambridge, MA"},
{name:"Boston University",lat:42.3505,lng:-71.1054,cat:"national",loc:"Boston, MA"},
{name:"Boston College",lat:42.3355,lng:-71.1685,cat:"national",loc:"Chestnut Hill, MA"},
{name:"Tufts University",lat:42.4075,lng:-71.1190,cat:"national",loc:"Medford, MA"},
{name:"Northeastern University",lat:42.3398,lng:-71.0892,cat:"national",loc:"Boston, MA"},
{name:"Brandeis University",lat:42.3657,lng:-71.2599,cat:"national",loc:"Waltham, MA"},
{name:"University of Massachusetts Amherst",lat:42.3912,lng:-72.5267,cat:"national",loc:"Amherst, MA"},
{name:"Williams College",lat:42.7120,lng:-73.2037,cat:"national",loc:"Williamstown, MA"},
{name:"Amherst College",lat:42.3709,lng:-72.5168,cat:"national",loc:"Amherst, MA"},
{name:"Wellesley College",lat:42.2953,lng:-71.3053,cat:"national",loc:"Wellesley, MA"},

// -- Michigan --
{name:"University of Michigan",lat:42.2780,lng:-83.7382,cat:"national",loc:"Ann Arbor, MI"},
{name:"Michigan State University",lat:42.7018,lng:-84.4822,cat:"national",loc:"East Lansing, MI"},
{name:"Wayne State University",lat:42.3573,lng:-83.0670,cat:"national",loc:"Detroit, MI"},
{name:"Western Michigan University",lat:42.2835,lng:-85.6136,cat:"national",loc:"Kalamazoo, MI"},
{name:"Grand Valley State University",lat:42.9633,lng:-85.8891,cat:"national",loc:"Allendale, MI"},
{name:"Central Michigan University",lat:43.5823,lng:-84.7740,cat:"national",loc:"Mount Pleasant, MI"},
{name:"Eastern Michigan University",lat:42.2506,lng:-83.6236,cat:"national",loc:"Ypsilanti, MI"},
{name:"Kalamazoo College",lat:42.2901,lng:-85.5994,cat:"national",loc:"Kalamazoo, MI"},
{name:"Hope College",lat:42.7876,lng:-86.1056,cat:"national",loc:"Holland, MI"},
{name:"Calvin University",lat:42.9334,lng:-85.5878,cat:"national",loc:"Grand Rapids, MI"},

// -- Minnesota --
{name:"University of Minnesota",lat:44.9740,lng:-93.2277,cat:"national",loc:"Minneapolis, MN"},
{name:"Carleton College",lat:44.4615,lng:-93.1530,cat:"national",loc:"Northfield, MN"},
{name:"Macalester College",lat:44.9381,lng:-93.1691,cat:"national",loc:"Saint Paul, MN"},
{name:"St. Olaf College",lat:44.4619,lng:-93.1822,cat:"national",loc:"Northfield, MN"},
{name:"University of St. Thomas",lat:44.9425,lng:-93.1930,cat:"national",loc:"Saint Paul, MN"},
{name:"Minnesota State University Mankato",lat:44.1467,lng:-93.9994,cat:"national",loc:"Mankato, MN"},
{name:"University of Minnesota Duluth",lat:46.8211,lng:-92.0843,cat:"national",loc:"Duluth, MN"},
{name:"Gustavus Adolphus College",lat:44.3270,lng:-93.9749,cat:"national",loc:"Saint Peter, MN"},
{name:"Hamline University",lat:44.9620,lng:-93.1605,cat:"national",loc:"Saint Paul, MN"},
{name:"Augsburg University",lat:44.9564,lng:-93.2425,cat:"national",loc:"Minneapolis, MN"},

// -- Mississippi --
{name:"University of Mississippi",lat:34.3661,lng:-89.5365,cat:"national",loc:"Oxford, MS"},
{name:"Mississippi State University",lat:33.4559,lng:-88.7892,cat:"national",loc:"Starkville, MS"},
{name:"University of Southern Mississippi",lat:31.3295,lng:-89.3353,cat:"national",loc:"Hattiesburg, MS"},
{name:"Jackson State University",lat:32.2951,lng:-90.2078,cat:"national",loc:"Jackson, MS"},
{name:"Millsaps College",lat:32.3193,lng:-90.1850,cat:"national",loc:"Jackson, MS"},
{name:"Alcorn State University",lat:31.8728,lng:-91.1305,cat:"national",loc:"Lorman, MS"},
{name:"Delta State University",lat:33.7515,lng:-90.7279,cat:"national",loc:"Cleveland, MS"},
{name:"Tougaloo College",lat:32.3687,lng:-90.1536,cat:"national",loc:"Tougaloo, MS"},

// -- Missouri --
{name:"University of Missouri",lat:38.9404,lng:-92.3277,cat:"national",loc:"Columbia, MO"},
{name:"Washington University in St. Louis",lat:38.6488,lng:-90.3108,cat:"national",loc:"St. Louis, MO"},
{name:"Saint Louis University",lat:38.6366,lng:-90.2340,cat:"national",loc:"St. Louis, MO"},
{name:"Missouri S&T",lat:37.9554,lng:-91.7713,cat:"national",loc:"Rolla, MO"},
{name:"University of Missouri–Kansas City",lat:39.0322,lng:-94.5786,cat:"national",loc:"Kansas City, MO"},
{name:"Missouri State University",lat:37.2000,lng:-93.2820,cat:"national",loc:"Springfield, MO"},
{name:"Truman State University",lat:40.1886,lng:-92.5820,cat:"national",loc:"Kirksville, MO"},
{name:"Drury University",lat:37.2025,lng:-93.2769,cat:"national",loc:"Springfield, MO"},
{name:"Lindenwood University",lat:38.7869,lng:-90.6968,cat:"national",loc:"St. Charles, MO"},
{name:"Webster University",lat:38.5776,lng:-90.3556,cat:"national",loc:"Webster Groves, MO"},

// -- Montana --
{name:"University of Montana",lat:46.8603,lng:-113.9852,cat:"national",loc:"Missoula, MT"},
{name:"Montana State University",lat:45.6668,lng:-111.0469,cat:"national",loc:"Bozeman, MT"},
{name:"Montana Tech",lat:46.0114,lng:-112.5349,cat:"national",loc:"Butte, MT"},
{name:"Carroll College",lat:46.6035,lng:-112.0369,cat:"national",loc:"Helena, MT"},

// -- Nebraska --
{name:"University of Nebraska–Lincoln",lat:40.8202,lng:-96.7005,cat:"national",loc:"Lincoln, NE"},
{name:"Creighton University",lat:41.2638,lng:-95.9425,cat:"national",loc:"Omaha, NE"},
{name:"University of Nebraska at Omaha",lat:41.2577,lng:-96.0101,cat:"national",loc:"Omaha, NE"},
{name:"University of Nebraska at Kearney",lat:40.6971,lng:-99.0820,cat:"national",loc:"Kearney, NE"},
{name:"Nebraska Wesleyan University",lat:40.8481,lng:-96.6665,cat:"national",loc:"Lincoln, NE"},
{name:"Doane University",lat:40.6359,lng:-97.0012,cat:"national",loc:"Crete, NE"},

// -- Nevada --
{name:"University of Nevada, Reno",lat:39.5436,lng:-119.8157,cat:"national",loc:"Reno, NV"},
{name:"University of Nevada, Las Vegas",lat:36.1084,lng:-115.1440,cat:"national",loc:"Las Vegas, NV"},
{name:"Nevada State University",lat:36.0136,lng:-115.0383,cat:"national",loc:"Henderson, NV"},
{name:"Sierra Nevada University",lat:39.2493,lng:-119.9513,cat:"national",loc:"Incline Village, NV"},

// -- New Hampshire --
{name:"University of New Hampshire",lat:43.1339,lng:-70.9264,cat:"national",loc:"Durham, NH"},
{name:"Saint Anselm College",lat:43.0011,lng:-71.5085,cat:"national",loc:"Manchester, NH"},
{name:"Plymouth State University",lat:43.7658,lng:-71.6871,cat:"national",loc:"Plymouth, NH"},
{name:"Keene State College",lat:42.9346,lng:-72.2810,cat:"national",loc:"Keene, NH"},
{name:"Southern New Hampshire University",lat:43.0035,lng:-71.4563,cat:"national",loc:"Manchester, NH"},

// -- New Jersey --
{name:"Rutgers University",lat:40.5008,lng:-74.4474,cat:"national",loc:"New Brunswick, NJ"},
{name:"Stevens Institute of Technology",lat:40.7453,lng:-74.0236,cat:"national",loc:"Hoboken, NJ"},
{name:"Seton Hall University",lat:40.7429,lng:-74.2479,cat:"national",loc:"South Orange, NJ"},
{name:"New Jersey Institute of Technology",lat:40.7421,lng:-74.1791,cat:"national",loc:"Newark, NJ"},
{name:"Montclair State University",lat:40.8624,lng:-74.1986,cat:"national",loc:"Montclair, NJ"},
{name:"Rowan University",lat:39.7093,lng:-75.1198,cat:"national",loc:"Glassboro, NJ"},
{name:"The College of New Jersey",lat:40.2694,lng:-74.7777,cat:"national",loc:"Ewing, NJ"},
{name:"Rider University",lat:40.2832,lng:-74.7531,cat:"national",loc:"Lawrenceville, NJ"},
{name:"Fairleigh Dickinson University",lat:40.9030,lng:-74.0657,cat:"national",loc:"Teaneck, NJ"},
{name:"Drew University",lat:40.7626,lng:-74.4210,cat:"national",loc:"Madison, NJ"},

// -- New Mexico --
{name:"University of New Mexico",lat:35.0844,lng:-106.6189,cat:"national",loc:"Albuquerque, NM"},
{name:"New Mexico State University",lat:32.2805,lng:-106.7485,cat:"national",loc:"Las Cruces, NM"},
{name:"New Mexico Tech",lat:34.0672,lng:-106.9056,cat:"national",loc:"Socorro, NM"},
{name:"Eastern New Mexico University",lat:34.1709,lng:-103.3475,cat:"national",loc:"Portales, NM"},
{name:"St. John's College (NM)",lat:35.6744,lng:-105.9503,cat:"national",loc:"Santa Fe, NM"},
{name:"Western New Mexico University",lat:32.7783,lng:-108.2729,cat:"national",loc:"Silver City, NM"},

// -- New York --
{name:"New York University",lat:40.7291,lng:-73.9965,cat:"national",loc:"New York, NY"},
{name:"Syracuse University",lat:43.0392,lng:-76.1351,cat:"national",loc:"Syracuse, NY"},
{name:"University of Rochester",lat:43.1289,lng:-77.6288,cat:"national",loc:"Rochester, NY"},
{name:"Rensselaer Polytechnic Institute",lat:42.7302,lng:-73.6788,cat:"national",loc:"Troy, NY"},
{name:"Fordham University",lat:40.8614,lng:-73.8855,cat:"national",loc:"Bronx, NY"},
{name:"SUNY Buffalo",lat:43.0008,lng:-78.7890,cat:"national",loc:"Buffalo, NY"},
{name:"SUNY Stony Brook",lat:40.9126,lng:-73.1234,cat:"national",loc:"Stony Brook, NY"},
{name:"SUNY Binghamton",lat:42.0879,lng:-75.9693,cat:"national",loc:"Binghamton, NY"},
{name:"Vassar College",lat:41.6852,lng:-73.8951,cat:"national",loc:"Poughkeepsie, NY"},
{name:"Colgate University",lat:42.8185,lng:-75.5390,cat:"national",loc:"Hamilton, NY"},

// -- North Carolina --
{name:"Duke University",lat:36.0014,lng:-78.9382,cat:"national",loc:"Durham, NC"},
{name:"University of North Carolina at Chapel Hill",lat:35.9049,lng:-79.0469,cat:"national",loc:"Chapel Hill, NC"},
{name:"NC State University",lat:35.7847,lng:-78.6821,cat:"national",loc:"Raleigh, NC"},
{name:"Wake Forest University",lat:36.1345,lng:-80.2766,cat:"national",loc:"Winston-Salem, NC"},
{name:"UNC Charlotte",lat:35.3075,lng:-80.7346,cat:"national",loc:"Charlotte, NC"},
{name:"East Carolina University",lat:35.6026,lng:-77.3672,cat:"national",loc:"Greenville, NC"},
{name:"Elon University",lat:36.1044,lng:-79.5032,cat:"national",loc:"Elon, NC"},
{name:"Davidson College",lat:35.5010,lng:-80.8435,cat:"national",loc:"Davidson, NC"},
{name:"Appalachian State University",lat:36.2153,lng:-81.6852,cat:"national",loc:"Boone, NC"},
{name:"North Carolina A&T State University",lat:36.0720,lng:-79.7729,cat:"national",loc:"Greensboro, NC"},

// -- North Dakota --
{name:"University of North Dakota",lat:47.9218,lng:-97.0795,cat:"national",loc:"Grand Forks, ND"},
{name:"North Dakota State University",lat:46.8952,lng:-96.8011,cat:"national",loc:"Fargo, ND"},
{name:"Minot State University",lat:48.2389,lng:-101.2974,cat:"national",loc:"Minot, ND"},
{name:"Dickinson State University",lat:46.8872,lng:-102.7907,cat:"national",loc:"Dickinson, ND"},

// -- Ohio --
{name:"Ohio State University",lat:40.0067,lng:-83.0305,cat:"national",loc:"Columbus, OH"},
{name:"Case Western Reserve University",lat:41.5044,lng:-81.6082,cat:"national",loc:"Cleveland, OH"},
{name:"University of Cincinnati",lat:39.1329,lng:-84.5150,cat:"national",loc:"Cincinnati, OH"},
{name:"Ohio University",lat:39.3245,lng:-82.1013,cat:"national",loc:"Athens, OH"},
{name:"Miami University",lat:39.5089,lng:-84.7350,cat:"national",loc:"Oxford, OH"},
{name:"Oberlin College",lat:41.2939,lng:-82.2179,cat:"national",loc:"Oberlin, OH"},
{name:"Kenyon College",lat:40.3753,lng:-82.3963,cat:"national",loc:"Gambier, OH"},
{name:"University of Dayton",lat:39.7404,lng:-84.1794,cat:"national",loc:"Dayton, OH"},
{name:"Kent State University",lat:41.1459,lng:-81.3401,cat:"national",loc:"Kent, OH"},
{name:"Bowling Green State University",lat:41.3800,lng:-83.6381,cat:"national",loc:"Bowling Green, OH"},

// -- Oklahoma --
{name:"University of Oklahoma",lat:35.2058,lng:-97.4457,cat:"national",loc:"Norman, OK"},
{name:"Oklahoma State University",lat:36.1256,lng:-97.0704,cat:"national",loc:"Stillwater, OK"},
{name:"University of Tulsa",lat:36.1517,lng:-95.9444,cat:"national",loc:"Tulsa, OK"},
{name:"Oral Roberts University",lat:36.0601,lng:-95.9467,cat:"national",loc:"Tulsa, OK"},
{name:"Oklahoma City University",lat:35.4805,lng:-97.5399,cat:"national",loc:"Oklahoma City, OK"},
{name:"University of Central Oklahoma",lat:35.6552,lng:-97.4725,cat:"national",loc:"Edmond, OK"},

// -- Oregon --
{name:"University of Oregon",lat:44.0448,lng:-123.0726,cat:"national",loc:"Eugene, OR"},
{name:"Oregon State University",lat:44.5639,lng:-123.2794,cat:"national",loc:"Corvallis, OR"},
{name:"Portland State University",lat:45.5119,lng:-122.6854,cat:"national",loc:"Portland, OR"},
{name:"University of Portland",lat:45.5716,lng:-122.7250,cat:"national",loc:"Portland, OR"},
{name:"Willamette University",lat:44.9353,lng:-123.0267,cat:"national",loc:"Salem, OR"},
{name:"Lewis & Clark College",lat:45.4504,lng:-122.6713,cat:"national",loc:"Portland, OR"},
{name:"Reed College",lat:45.4794,lng:-122.6340,cat:"national",loc:"Portland, OR"},
{name:"Linfield University",lat:45.1985,lng:-123.1951,cat:"national",loc:"McMinnville, OR"},
{name:"George Fox University",lat:45.2929,lng:-122.9719,cat:"national",loc:"Newberg, OR"},
{name:"Oregon Institute of Technology",lat:42.1931,lng:-121.7816,cat:"national",loc:"Klamath Falls, OR"},

// -- Pennsylvania --
{name:"Penn State University",lat:40.7982,lng:-77.8599,cat:"national",loc:"University Park, PA"},
{name:"Carnegie Mellon University",lat:40.4433,lng:-79.9436,cat:"national",loc:"Pittsburgh, PA"},
{name:"University of Pittsburgh",lat:40.4443,lng:-79.9608,cat:"national",loc:"Pittsburgh, PA"},
{name:"Temple University",lat:39.9812,lng:-75.1496,cat:"national",loc:"Philadelphia, PA"},
{name:"Drexel University",lat:39.9566,lng:-75.1899,cat:"national",loc:"Philadelphia, PA"},
{name:"Lehigh University",lat:40.6069,lng:-75.3782,cat:"national",loc:"Bethlehem, PA"},
{name:"Villanova University",lat:40.0372,lng:-75.3404,cat:"national",loc:"Villanova, PA"},
{name:"Swarthmore College",lat:39.9030,lng:-75.3550,cat:"national",loc:"Swarthmore, PA"},
{name:"Haverford College",lat:40.0117,lng:-75.3023,cat:"national",loc:"Haverford, PA"},
{name:"Bucknell University",lat:40.9548,lng:-76.8843,cat:"national",loc:"Lewisburg, PA"},

// -- Rhode Island --
{name:"University of Rhode Island",lat:41.4834,lng:-71.5269,cat:"national",loc:"Kingston, RI"},
{name:"Providence College",lat:41.8397,lng:-71.4349,cat:"national",loc:"Providence, RI"},
{name:"Rhode Island School of Design",lat:41.8263,lng:-71.4090,cat:"national",loc:"Providence, RI"},
{name:"Bryant University",lat:41.8696,lng:-71.5283,cat:"national",loc:"Smithfield, RI"},
{name:"Roger Williams University",lat:41.6423,lng:-71.2589,cat:"national",loc:"Bristol, RI"},
{name:"Salve Regina University",lat:41.4703,lng:-71.3000,cat:"national",loc:"Newport, RI"},

// -- South Carolina --
{name:"University of South Carolina",lat:34.0007,lng:-81.0348,cat:"national",loc:"Columbia, SC"},
{name:"Clemson University",lat:34.6834,lng:-82.8374,cat:"national",loc:"Clemson, SC"},
{name:"College of Charleston",lat:32.7836,lng:-79.9375,cat:"national",loc:"Charleston, SC"},
{name:"Furman University",lat:34.9232,lng:-82.4411,cat:"national",loc:"Greenville, SC"},
{name:"Wofford College",lat:34.9568,lng:-81.9328,cat:"national",loc:"Spartanburg, SC"},
{name:"The Citadel",lat:32.7980,lng:-79.9581,cat:"national",loc:"Charleston, SC"},
{name:"Coastal Carolina University",lat:33.7947,lng:-79.0118,cat:"national",loc:"Conway, SC"},
{name:"Winthrop University",lat:34.9399,lng:-81.0291,cat:"national",loc:"Rock Hill, SC"},
{name:"South Carolina State University",lat:33.4942,lng:-80.8498,cat:"national",loc:"Orangeburg, SC"},
{name:"Bob Jones University",lat:34.8767,lng:-82.3631,cat:"national",loc:"Greenville, SC"},

// -- South Dakota --
{name:"University of South Dakota",lat:42.7854,lng:-96.9295,cat:"national",loc:"Vermillion, SD"},
{name:"South Dakota State University",lat:44.3193,lng:-96.7867,cat:"national",loc:"Brookings, SD"},
{name:"South Dakota School of Mines & Technology",lat:44.0721,lng:-103.2064,cat:"national",loc:"Rapid City, SD"},
{name:"Augustana University",lat:43.5360,lng:-96.7234,cat:"national",loc:"Sioux Falls, SD"},

// -- Tennessee --
{name:"Vanderbilt University",lat:36.1447,lng:-86.8027,cat:"national",loc:"Nashville, TN"},
{name:"University of Tennessee",lat:35.9544,lng:-83.9295,cat:"national",loc:"Knoxville, TN"},
{name:"University of Memphis",lat:35.1187,lng:-89.9370,cat:"national",loc:"Memphis, TN"},
{name:"Rhodes College",lat:35.1536,lng:-89.9879,cat:"national",loc:"Memphis, TN"},
{name:"Belmont University",lat:36.1330,lng:-86.7915,cat:"national",loc:"Nashville, TN"},
{name:"Middle Tennessee State University",lat:35.8468,lng:-86.3676,cat:"national",loc:"Murfreesboro, TN"},
{name:"Tennessee State University",lat:36.1680,lng:-86.8320,cat:"national",loc:"Nashville, TN"},
{name:"Sewanee: University of the South",lat:35.2040,lng:-85.9214,cat:"national",loc:"Sewanee, TN"},
{name:"East Tennessee State University",lat:36.3036,lng:-82.3664,cat:"national",loc:"Johnson City, TN"},
{name:"Fisk University",lat:36.1682,lng:-86.8039,cat:"national",loc:"Nashville, TN"},

// -- Texas --
{name:"University of Texas at Austin",lat:30.2849,lng:-97.7341,cat:"national",loc:"Austin, TX"},
{name:"Texas A&M University",lat:30.6187,lng:-96.3365,cat:"national",loc:"College Station, TX"},
{name:"Rice University",lat:29.7174,lng:-95.4018,cat:"national",loc:"Houston, TX"},
{name:"Southern Methodist University",lat:32.8434,lng:-96.7849,cat:"national",loc:"Dallas, TX"},
{name:"Baylor University",lat:31.5497,lng:-97.1181,cat:"national",loc:"Waco, TX"},
{name:"Texas Tech University",lat:33.5843,lng:-101.8453,cat:"national",loc:"Lubbock, TX"},
{name:"University of Houston",lat:29.7199,lng:-95.3422,cat:"national",loc:"Houston, TX"},
{name:"University of North Texas",lat:33.2094,lng:-97.1526,cat:"national",loc:"Denton, TX"},
{name:"Texas State University",lat:29.8884,lng:-97.9384,cat:"national",loc:"San Marcos, TX"},
{name:"Trinity University",lat:29.4616,lng:-98.4823,cat:"national",loc:"San Antonio, TX"},

// -- Utah --
{name:"University of Utah",lat:40.7649,lng:-111.8421,cat:"national",loc:"Salt Lake City, UT"},
{name:"Brigham Young University",lat:40.2519,lng:-111.6493,cat:"national",loc:"Provo, UT"},
{name:"Utah State University",lat:41.7450,lng:-111.8097,cat:"national",loc:"Logan, UT"},
{name:"Weber State University",lat:41.1919,lng:-111.9504,cat:"national",loc:"Ogden, UT"},
{name:"Southern Utah University",lat:37.6741,lng:-113.0642,cat:"national",loc:"Cedar City, UT"},
{name:"Utah Valley University",lat:40.2780,lng:-111.7145,cat:"national",loc:"Orem, UT"},
{name:"Westminster University (UT)",lat:40.7297,lng:-111.8529,cat:"national",loc:"Salt Lake City, UT"},
{name:"Dixie State University",lat:37.1019,lng:-113.5685,cat:"national",loc:"St. George, UT"},

// -- Vermont --
{name:"University of Vermont",lat:44.4779,lng:-73.1965,cat:"national",loc:"Burlington, VT"},
{name:"Middlebury College",lat:44.0083,lng:-73.1763,cat:"national",loc:"Middlebury, VT"},
{name:"Norwich University",lat:44.2349,lng:-72.6636,cat:"national",loc:"Northfield, VT"},
{name:"Champlain College",lat:44.4738,lng:-73.2047,cat:"national",loc:"Burlington, VT"},
{name:"Bennington College",lat:42.9261,lng:-73.2361,cat:"national",loc:"Bennington, VT"},
{name:"Saint Michael's College",lat:44.4921,lng:-73.1788,cat:"national",loc:"Colchester, VT"},

// -- Virginia --
{name:"University of Virginia",lat:38.0336,lng:-78.5080,cat:"national",loc:"Charlottesville, VA"},
{name:"Virginia Tech",lat:37.2284,lng:-80.4234,cat:"national",loc:"Blacksburg, VA"},
{name:"William & Mary",lat:37.2710,lng:-76.7144,cat:"national",loc:"Williamsburg, VA"},
{name:"Georgetown University",lat:38.9076,lng:-77.0723,cat:"national",loc:"Washington, DC"},
{name:"George Mason University",lat:38.8318,lng:-77.3085,cat:"national",loc:"Fairfax, VA"},
{name:"Virginia Commonwealth University",lat:37.5465,lng:-77.4531,cat:"national",loc:"Richmond, VA"},
{name:"James Madison University",lat:38.4381,lng:-78.8715,cat:"national",loc:"Harrisonburg, VA"},
{name:"University of Richmond",lat:37.5760,lng:-77.5396,cat:"national",loc:"Richmond, VA"},
{name:"Washington and Lee University",lat:37.7879,lng:-79.4447,cat:"national",loc:"Lexington, VA"},
{name:"Howard University",lat:38.9225,lng:-77.0197,cat:"national",loc:"Washington, DC"},

// -- Washington --
{name:"University of Washington",lat:47.6553,lng:-122.3035,cat:"national",loc:"Seattle, WA"},
{name:"Washington State University",lat:46.7298,lng:-117.1817,cat:"national",loc:"Pullman, WA"},
{name:"Gonzaga University",lat:47.6671,lng:-117.4002,cat:"national",loc:"Spokane, WA"},
{name:"Seattle University",lat:47.6105,lng:-122.3197,cat:"national",loc:"Seattle, WA"},
{name:"Western Washington University",lat:48.7335,lng:-122.4862,cat:"national",loc:"Bellingham, WA"},
{name:"Pacific Lutheran University",lat:47.1500,lng:-122.4453,cat:"national",loc:"Tacoma, WA"},
{name:"Whitman College",lat:46.0720,lng:-118.3299,cat:"national",loc:"Walla Walla, WA"},
{name:"University of Puget Sound",lat:47.2631,lng:-122.4820,cat:"national",loc:"Tacoma, WA"},
{name:"Central Washington University",lat:46.9960,lng:-120.5382,cat:"national",loc:"Ellensburg, WA"},
{name:"Eastern Washington University",lat:47.4895,lng:-117.5819,cat:"national",loc:"Cheney, WA"},

// -- West Virginia --
{name:"West Virginia University",lat:39.6350,lng:-79.9559,cat:"national",loc:"Morgantown, WV"},
{name:"Marshall University",lat:38.4239,lng:-82.4260,cat:"national",loc:"Huntington, WV"},
{name:"Shepherd University",lat:39.4338,lng:-77.8064,cat:"national",loc:"Shepherdstown, WV"},
{name:"West Virginia Wesleyan College",lat:38.9093,lng:-80.2312,cat:"national",loc:"Buckhannon, WV"},
{name:"Bethany College (WV)",lat:40.2060,lng:-80.5643,cat:"national",loc:"Bethany, WV"},

// -- Wisconsin --
{name:"University of Wisconsin–Madison",lat:43.0766,lng:-89.4125,cat:"national",loc:"Madison, WI"},
{name:"Marquette University",lat:43.0383,lng:-87.9299,cat:"national",loc:"Milwaukee, WI"},
{name:"University of Wisconsin–Milwaukee",lat:43.0773,lng:-87.8821,cat:"national",loc:"Milwaukee, WI"},
{name:"Beloit College",lat:42.5025,lng:-89.0341,cat:"national",loc:"Beloit, WI"},
{name:"Lawrence University",lat:44.2614,lng:-88.3962,cat:"national",loc:"Appleton, WI"},
{name:"UW–La Crosse",lat:43.8130,lng:-91.2270,cat:"national",loc:"La Crosse, WI"},
{name:"UW–Eau Claire",lat:44.7992,lng:-91.5046,cat:"national",loc:"Eau Claire, WI"},
{name:"Ripon College",lat:43.8497,lng:-88.8382,cat:"national",loc:"Ripon, WI"},
{name:"St. Norbert College",lat:44.4340,lng:-88.0520,cat:"national",loc:"De Pere, WI"},
{name:"Carthage College",lat:42.6198,lng:-87.8236,cat:"national",loc:"Kenosha, WI"},

// -- Wyoming --
{name:"University of Wyoming",lat:41.3149,lng:-105.5666,cat:"national",loc:"Laramie, WY"},

// ═══════════════════════════════════════
// MILITARY
// ═══════════════════════════════════════
{name:"U.S. Army",lat:38.8807,lng:-77.0146,cat:"military",loc:"Nationwide"},
{name:"U.S. Navy",lat:36.9456,lng:-76.3131,cat:"military",loc:"Nationwide"},
{name:"U.S. Marine Corps",lat:33.3014,lng:-117.3164,cat:"military",loc:"Nationwide"},
{name:"U.S. Air Force",lat:38.8108,lng:-104.7005,cat:"military",loc:"Nationwide"},
{name:"U.S. Coast Guard",lat:41.3714,lng:-72.0956,cat:"military",loc:"Nationwide"},
{name:"U.S. Space Force",lat:38.8108,lng:-104.7005,cat:"military",loc:"Nationwide"},
{name:"National Guard",lat:38.8807,lng:-77.0146,cat:"military",loc:"Nationwide"},
{name:"U.S. Military Academy (West Point)",lat:41.3915,lng:-73.9560,cat:"military",loc:"West Point, NY"},

// ═══════════════════════════════════════
// TRADE / VOCATIONAL
// ═══════════════════════════════════════
{name:"IBEW Apprenticeship (Electrical)",lat:37.9535,lng:-122.0561,cat:"trade",loc:"Various"},
{name:"UA Apprenticeship (Plumbing/Pipefitting)",lat:37.9535,lng:-122.0561,cat:"trade",loc:"Various"},
{name:"Carpenters Training Program",lat:37.7689,lng:-122.2249,cat:"trade",loc:"Various"},
{name:"Cosmetology / Barber School",lat:37.9524,lng:-122.0597,cat:"trade",loc:"Various"},
{name:"Culinary Institute",lat:37.8043,lng:-122.4115,cat:"trade",loc:"Various"},
{name:"Automotive / Diesel Tech Program",lat:37.9535,lng:-122.0561,cat:"trade",loc:"Various"},
{name:"Medical / Dental Assistant Program",lat:37.9535,lng:-122.0561,cat:"trade",loc:"Various"},
{name:"Welding Certification Program",lat:37.9535,lng:-122.0561,cat:"trade",loc:"Various"},
{name:"HVAC Technician Program",lat:37.9535,lng:-122.0561,cat:"trade",loc:"Various"},
{name:"Pharmacy Technician Program",lat:37.9535,lng:-122.0561,cat:"trade",loc:"Various"},
{name:"EMT / Paramedic Training",lat:37.9535,lng:-122.0561,cat:"trade",loc:"Various"},
{name:"Coding Bootcamp",lat:37.7749,lng:-122.4194,cat:"trade",loc:"Various"},
{name:"Universal Technical Institute",lat:33.6190,lng:-111.8906,cat:"trade",loc:"Multiple locations"},
{name:"Lincoln Tech",lat:40.4168,lng:-74.2476,cat:"trade",loc:"Multiple locations"},

// ═══════════════════════════════════════
// WORKFORCE / OTHER
// ═══════════════════════════════════════
{name:"Entering the Workforce",lat:37.9535,lng:-122.0561,cat:"other",loc:"Concord, CA"},
{name:"Gap Year",lat:37.9535,lng:-122.0561,cat:"other",loc:""},
{name:"Entrepreneurship",lat:37.9535,lng:-122.0561,cat:"other",loc:""},
{name:"Undecided / Exploring Options",lat:37.9535,lng:-122.0561,cat:"other",loc:""},
];

// ════════════ END DATA ════════════

const COLORS={uc:'#f0c040',csu:'#60a5fa',cc:'#34d399',ca_private:'#a78bfa',ivy:'#fbbf24',national:'#c084fc',military:'#f472b6',trade:'#fb923c',other:'#94a3b8'};
const CAT_LABELS={uc:'University of California',csu:'California State University',cc:'CA Community College',ca_private:'CA Private University',ivy:'Ivy League',national:'National Universities',military:'Military',trade:'Trade / Vocational',other:'Workforce / Other'};
const CAT_ORDER=['uc','csu','cc','ca_private','ivy','national','military','trade','other'];

document.getElementById('destCount').textContent=DESTINATIONS.length+' destinations';

// ════════════ SHEET CONFIG ════════════
// The site reads this Google Sheet via the gviz endpoint for near-real-time updates.
// The sheet MUST be set to "Anyone with the link can view" (Share → General access).
// URL format: /spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:csv&gid={TAB_GID}
const SHEET_URL='https://docs.google.com/spreadsheets/d/1HJIFr6pwfmUYl7ijaKN1HTexyhASIcisj1voBVhoHNw/gviz/tq?tqx=out:csv&gid=798736229';
const REFRESH_MS=15000;
const FUZZY_THRESHOLD=0.55;

// ════════════ ALIASES ════════════
// Shorthand typed by students → exact DESTINATIONS[].name.
// Keys must be lowercase. Add more as new unmatched entries appear.
const ALIASES={
'cal':'UC Berkeley','ucb':'UC Berkeley','berkeley':'UC Berkeley','uc berkeley':'UC Berkeley','university of california berkeley':'UC Berkeley','cal berkeley':'UC Berkeley',
'ucla':'UCLA','u c l a':'UCLA','university of california los angeles':'UCLA','uc los angeles':'UCLA',
'ucsd':'UC San Diego','uc san diego':'UC San Diego','ucd':'UC Davis','uc davis':'UC Davis',
'ucsb':'UC Santa Barbara','uc santa barbara':'UC Santa Barbara','ucsc':'UC Santa Cruz','uc santa cruz':'UC Santa Cruz',
'uci':'UC Irvine','uc irvine':'UC Irvine','ucr':'UC Riverside','uc riverside':'UC Riverside','ucm':'UC Merced','uc merced':'UC Merced',
'sjsu':'San José State University','san jose state':'San José State University','san jose state university':'San José State University',
'sfsu':'San Francisco State University','san francisco state':'San Francisco State University',
'slo':'Cal Poly San Luis Obispo','cal poly slo':'Cal Poly San Luis Obispo','cal poly san luis obispo':'Cal Poly San Luis Obispo','cal poly':'Cal Poly San Luis Obispo',
'cpp':'Cal Poly Pomona','cal poly pomona':'Cal Poly Pomona',
'csulb':'CSU Long Beach','long beach state':'CSU Long Beach','cal state long beach':'CSU Long Beach',
'csun':'CSU Northridge','cal state northridge':'CSU Northridge',
'csueb':'CSU East Bay','cal state east bay':'CSU East Bay',
'csusm':'CSU San Marcos','csusb':'CSU San Bernardino',
'sac state':'Sacramento State','csus':'Sacramento State','sacramento state':'Sacramento State',
'sdsu':'San Diego State University','san diego state':'San Diego State University',
'chico':'Chico State','chico state':'Chico State','fresno':'Fresno State','fresno state':'Fresno State',
'humboldt':'Cal Poly Humboldt','sonoma':'Sonoma State University','csu fullerton':'CSU Fullerton','csuf':'CSU Fullerton',
'cal state la':'Cal State LA','csula':'Cal State LA',
'ccsf':'City College of San Francisco','city college of sf':'City College of San Francisco',
'laney':'Laney College','bcc':'Berkeley City College','coa':'College of Alameda','merritt':'Merritt College',
'dvc':'Diablo Valley College','diablo valley':'Diablo Valley College',
'smc':'Santa Monica College','santa monica':'Santa Monica College',
'mit':'MIT','massachusetts institute of technology':'MIT','caltech':'Caltech','cal tech':'Caltech','california institute of technology':'Caltech',
'usc':'University of Southern California','southern cal':'University of Southern California',
'nyu':'New York University','bu':'Boston University','bc':'Boston College',
'cmu':'Carnegie Mellon University','carnegie mellon':'Carnegie Mellon University',
'gatech':'Georgia Tech','georgia tech':'Georgia Tech','georgia institute of technology':'Georgia Tech',
'umich':'University of Michigan','michigan':'University of Michigan','u of m':'University of Michigan',
'uw':'University of Washington','u dub':'University of Washington',
'uchicago':'University of Chicago','u chicago':'University of Chicago',
'penn':'University of Pennsylvania','upenn':'University of Pennsylvania',
'northwestern':'Northwestern University','duke':'Duke University',
'stanford':'Stanford University','harvard':'Harvard University','yale':'Yale University','princeton':'Princeton University',
'brown':'Brown University','cornell':'Cornell University','columbia':'Columbia University','dartmouth':'Dartmouth College',
'notre dame':'University of Notre Dame','vandy':'Vanderbilt University','vanderbilt':'Vanderbilt University',
'uva':'University of Virginia','vt':'Virginia Tech','unc':'University of North Carolina at Chapel Hill','carolina':'University of North Carolina at Chapel Hill',
'ut':'University of Texas at Austin','ut austin':'University of Texas at Austin','texas':'University of Texas at Austin',
'army':'U.S. Army','us army':'U.S. Army','u s army':'U.S. Army',
'navy':'U.S. Navy','us navy':'U.S. Navy','u s navy':'U.S. Navy',
'marines':'U.S. Marine Corps','marine corps':'U.S. Marine Corps','usmc':'U.S. Marine Corps',
'air force':'U.S. Air Force','usaf':'U.S. Air Force',
'coast guard':'U.S. Coast Guard','uscg':'U.S. Coast Guard',
'space force':'U.S. Space Force','national guard':'National Guard','u s national guard':'National Guard'
};

// ════════════ NORMALIZE & MATCH ════════════
function normalize(s){
if(!s)return'';
return String(s).toLowerCase()
.replace(/&/g,' and ')
.replace(/[\u2013\u2014]/g,'-')
.replace(/[áàâä]/g,'a').replace(/[éèêë]/g,'e').replace(/[íìîï]/g,'i').replace(/[óòôö]/g,'o').replace(/[úùûü]/g,'u').replace(/[ñ]/g,'n').replace(/[ç]/g,'c')
.replace(/[^a-z0-9\s]/g,' ')
.replace(/\s+/g,' ').trim();
}
function tokens(s){return normalize(s).split(' ').filter(Boolean)}

// Build indexes once
const DEST_BY_NAME={};
DESTINATIONS.forEach(function(d){DEST_BY_NAME[normalize(d.name)]=d});
const DEST_BY_ACRONYM={};
DESTINATIONS.forEach(function(d){
var toks=tokens(d.name);
if(toks.length>=2){
  var acr=toks.map(function(t){return t[0]}).join('');
  if(!DEST_BY_ACRONYM[acr])DEST_BY_ACRONYM[acr]=[];
  DEST_BY_ACRONYM[acr].push(d);
}
});

function dice(a,b){
if(!a.length||!b.length)return 0;
var setA={};a.forEach(function(t){setA[t]=(setA[t]||0)+1});
var inter=0;b.forEach(function(t){if(setA[t]){inter++;setA[t]--}});
return 2*inter/(a.length+b.length);
}

function matchDestination(rawText){
if(!rawText||!String(rawText).trim())return null;
var norm=normalize(rawText);
if(!norm)return null;
// 1) exact normalized match against a destination
if(DEST_BY_NAME[norm])return{dest:DEST_BY_NAME[norm],score:1,how:'exact'};
// 2) exact alias
if(ALIASES[norm]){
  var k=normalize(ALIASES[norm]);
  if(DEST_BY_NAME[k])return{dest:DEST_BY_NAME[k],score:1,how:'alias'};
}
// 3) acronym (e.g. "UCSC") — only if unique
if(norm.length>=2&&norm.length<=6&&norm.indexOf(' ')<0&&DEST_BY_ACRONYM[norm]&&DEST_BY_ACRONYM[norm].length===1){
  return{dest:DEST_BY_ACRONYM[norm][0],score:0.9,how:'acronym'};
}
// 4) scored scan across all destinations + aliases
var best=null,bestScore=0,bestHow='';
var padded=' '+norm+' ';
var respTokens=tokens(norm);
Object.keys(ALIASES).forEach(function(ak){
  if(padded.indexOf(' '+ak+' ')>=0){
    var k2=normalize(ALIASES[ak]);
    if(DEST_BY_NAME[k2]){
      var score=0.85+Math.min(0.1,ak.length/50);
      if(score>bestScore){bestScore=score;best=DEST_BY_NAME[k2];bestHow='alias-sub'}
    }
  }
});
DESTINATIONS.forEach(function(d){
  var dn=normalize(d.name);
  if(!dn)return;
  var s;
  if(norm===dn)s=1;
  else if((' '+norm+' ').indexOf(' '+dn+' ')>=0)s=0.95;
  else if((' '+dn+' ').indexOf(' '+norm+' ')>=0&&norm.length>=5)s=0.88;
  else s=dice(respTokens,tokens(dn));
  if(d.loc){
    var ln=normalize(d.loc);
    if(ln&&(norm===ln||(' '+norm+' ').indexOf(' '+ln+' ')>=0)&&norm.length>=4)s=Math.max(s,0.6);
  }
  if(s>bestScore){bestScore=s;best=d;bestHow='fuzzy'}
});
if(bestScore>=FUZZY_THRESHOLD&&best)return{dest:best,score:bestScore,how:bestHow};
return null;
}

// ════════════ CSV PARSING ════════════
function parseCsv(text){
var rows=[],row=[],field='',inQ=false;
for(var i=0;i<text.length;i++){
  var c=text[i];
  if(inQ){
    if(c==='"'){if(text[i+1]==='"'){field+='"';i++}else{inQ=false}}
    else{field+=c}
  }else{
    if(c==='"'){inQ=true}
    else if(c===','){row.push(field);field=''}
    else if(c==='\n'){row.push(field);rows.push(row);row=[];field=''}
    else if(c==='\r'){/* skip */}
    else{field+=c}
  }
}
if(field.length||row.length){row.push(field);rows.push(row)}
return rows;
}

function detectColumns(headers){
var H=headers.map(function(h){return(h||'').toString().toLowerCase()});
var nameIdx=-1,destIdx=-1;
for(var i=0;i<H.length;i++){if(nameIdx<0&&/name/.test(H[i]))nameIdx=i}
for(var j=0;j<H.length;j++){
  if(destIdx<0&&j!==nameIdx&&/(going|destination|after|where|attend|plan|college|school)/.test(H[j]))destIdx=j;
}
if(nameIdx<0)nameIdx=/timestamp/.test(H[0])?1:0;
if(destIdx<0){destIdx=/timestamp/.test(H[0])?2:1;if(destIdx===nameIdx)destIdx=nameIdx+1}
return{nameIdx:nameIdx,destIdx:destIdx,headers:headers}
}

// ════════════ STATE ════════════
let allPins=[];
let unmatched=[];
let lastHash='';
let lastFetchAt=null;
let lastFetchOk=false;

const map=L.map('map',{center:[37.5,-119],zoom:6,zoomControl:true});
var MAP_STYLES=[
{name:'Dark',url:'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',dot:'#2d2d2d',labelColor:'#e8e0d4',shadow:'0 1px 4px rgba(0,0,0,0.9),0 0 2px rgba(0,0,0,0.9)'},
{name:'Light',url:'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',dot:'#e0e0e0',labelColor:'#1a1a2e',shadow:'0 1px 3px rgba(255,255,255,0.9),0 0 2px rgba(255,255,255,0.8)'},
{name:'Standard',url:'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',dot:'#8fbc8f',labelColor:'#1a1a2e',shadow:'0 1px 3px rgba(255,255,255,0.9),0 0 2px rgba(255,255,255,0.8)'}
];
var currentStyleIdx=0;
var currentTileLayer=L.tileLayer(MAP_STYLES[0].url,{attribution:'&copy; OpenStreetMap &copy; CARTO',maxZoom:19}).addTo(map);
var currentLabelColor=MAP_STYLES[0].labelColor;
var currentShadow=MAP_STYLES[0].shadow;

document.getElementById('mapStyleBtn').addEventListener('click',function(){
currentStyleIdx=(currentStyleIdx+1)%MAP_STYLES.length;
var s=MAP_STYLES[currentStyleIdx];
map.removeLayer(currentTileLayer);
currentTileLayer=L.tileLayer(s.url,{attribution:'&copy; OpenStreetMap',maxZoom:19}).addTo(map);
currentLabelColor=s.labelColor;
currentShadow=s.shadow;
document.getElementById('mapStyleDot').style.background=s.dot;
document.getElementById('mapStyleLabel').textContent=s.name;
renderPins();
});
const markerLayer=L.layerGroup().addTo(map);

function createGroupedIcon(color,names,count){
var scale=Math.min(1+count*0.15,2.2);
var w=Math.round(28*scale),h=Math.round(36*scale);
var nameList=names.slice(0,6).map(function(n){return'<div>'+esc(n)+'</div>'}).join('');
if(names.length>6)nameList+='<div>+' +(names.length-6)+' more</div>';
var badge=count>1?'<div style="position:absolute;top:-4px;right:-8px;background:#fff;color:#0f1923;font-size:11px;font-weight:800;min-width:20px;height:20px;border-radius:10px;display:flex;align-items:center;justify-content:center;padding:0 5px;box-shadow:0 2px 6px rgba(0,0,0,0.4)">'+count+'</div>':'';
var label='<div style="position:absolute;bottom:'+Math.round(h+4)+'px;left:50%;transform:translateX(-50%);white-space:nowrap;font-family:DM Sans,sans-serif;font-size:11px;font-weight:600;color:'+currentLabelColor+';text-shadow:'+currentShadow+';text-align:center;pointer-events:none;max-width:160px;overflow:hidden;text-overflow:ellipsis">'+esc(names.length===1?names[0]:names.length+' students')+'</div>';
var html='<div style="position:relative;width:'+w+'px;height:'+h+'px">'+badge+label+'<svg width="'+w+'" height="'+h+'" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.268 21.732 0 14 0z" fill="'+color+'"/><circle cx="14" cy="13" r="5" fill="rgba(0,0,0,0.3)"/></svg></div>';
return L.divIcon({className:'',html:html,iconSize:[w,h],iconAnchor:[Math.round(w/2),h],popupAnchor:[0,-h]})}

function renderPins(){
markerLayer.clearLayers();
// Group pins by label (school name)
var groups={};
allPins.forEach(function(pin){
  var key=pin.label;
  if(!groups[key])groups[key]={pins:[],lat:pin.lat,lng:pin.lng,category:pin.category};
  groups[key].pins.push(pin);
});
Object.keys(groups).forEach(function(key){
  var g=groups[key];
  var c=COLORS[g.category]||COLORS.other;
  var names=g.pins.map(function(p){return p.name});
  var m=L.marker([g.lat,g.lng],{icon:createGroupedIcon(c,names,g.pins.length),zIndexOffset:g.pins.length*10});
  var popupNames=g.pins.map(function(p){return'<div style="padding:2px 0">'+esc(p.name)+'</div>'}).join('');
  var popupHtml='<div class="popup-label" style="margin-bottom:4px">'+esc(key)+'</div>'+(g.pins.length>1?'<div style="font-size:12px;color:var(--text-muted);margin-bottom:4px">'+g.pins.length+' students</div>':'')+  '<div class="popup-name" style="font-size:13px">'+popupNames+'</div>';
  m.bindPopup(popupHtml);
  markerLayer.addLayer(m);
});
document.getElementById('count').textContent=allPins.length}
function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}

// ════════════ UNMATCHED PANEL ════════════
function renderUnmatched(){
var panel=document.getElementById('unmatchedPanel');
var list=document.getElementById('unmatchedList');
var cnt=document.getElementById('unmatchedCount');
if(!panel||!list)return;
if(!unmatched.length){panel.classList.remove('visible');return}
panel.classList.add('visible');
if(cnt)cnt.textContent=unmatched.length;
list.innerHTML=unmatched.map(function(u){
  return'<div class="unmatched-item"><div class="unmatched-name">'+esc(u.name||'Anonymous')+'</div><div class="unmatched-raw">'+esc(u.raw)+'</div></div>';
}).join('');
}

function updateStatus(){
var el=document.getElementById('statusText');
if(!el)return;
if(!lastFetchAt){el.textContent='Loading…';return}
var ago=Math.max(0,Math.round((Date.now()-lastFetchAt)/1000));
var agoStr=ago<60?ago+'s ago':(Math.round(ago/60)+'m ago');
el.textContent=(lastFetchOk?'Updated ':'Offline — last update ')+agoStr;
}
setInterval(updateStatus,5000);

// ════════════ SHEET REFRESH ════════════
async function refresh(manual){
try{
  var url=SHEET_URL+'&_ts='+Date.now(); // cache-bust
  console.log('[pindrop] fetching',url);
  var resp;
  try{resp=await fetch(url,{cache:'no-store',redirect:'follow'})}
  catch(netErr){throw new Error('network/CORS: '+(netErr&&netErr.message?netErr.message:netErr))}
  if(!resp.ok)throw new Error('HTTP '+resp.status+' '+resp.statusText);
  var text=await resp.text();
  if(text.trim().slice(0,14).toLowerCase().indexOf('<!doctype html')===0||text.trim().slice(0,5).toLowerCase()==='<html'){
    throw new Error('got HTML instead of CSV — sheet may not actually be published');
  }
  var rows=parseCsv(text).filter(function(r){return r.some(function(c){return c&&String(c).trim()})});
  lastFetchAt=Date.now();
  lastFetchOk=true;
  if(rows.length===0){allPins=[];unmatched=[];renderPins();renderUnmatched();updateStatus();return}
  var hdr=rows[0],data=rows.slice(1);
  var cols=detectColumns(hdr);
  var matched=[],um=[];
  data.forEach(function(r){
    var name=(r[cols.nameIdx]||'').toString().trim();
    var raw=(r[cols.destIdx]||'').toString().trim();
    if(!name&&!raw)return;
    var m=matchDestination(raw);
    if(m&&m.dest){
      matched.push({name:name||'Anonymous',label:m.dest.name,category:m.dest.cat,lat:m.dest.lat,lng:m.dest.lng,raw:raw,matchType:m.how,score:m.score});
    }else if(raw){
      um.push({name:name||'Anonymous',raw:raw});
    }
  });
  var hashKey=matched.map(function(p){return p.name+'@'+p.label}).sort().join('|')+'||'+um.map(function(u){return u.name+'@'+u.raw}).sort().join('|');
  if(hashKey!==lastHash){
    lastHash=hashKey;
    allPins=matched;
    unmatched=um;
    renderPins();
    renderUnmatched();
    if(manual)showToast('Updated — '+matched.length+' pins, '+um.length+' unmatched');
  }else if(manual){
    showToast('Up to date — '+matched.length+' pins');
  }
  updateStatus();
}catch(e){
  console.warn('[pindrop] Sheet refresh failed:',e);
  lastFetchOk=false;
  if(manual)showToast('Fetch failed: '+(e&&e.message?e.message:e));
  updateStatus();
}
}

// ════════════ BUTTONS ════════════
var refreshBtn=document.getElementById('refreshBtn');
if(refreshBtn)refreshBtn.addEventListener('click',function(){refresh(true)});

document.getElementById('zoomFitBtn').addEventListener('click',function(){
if(allPins.length===0){showToast('No pins yet');return}
var bounds=L.latLngBounds(allPins.map(function(p){return[p.lat,p.lng]}));
map.flyToBounds(bounds,{padding:[60,60],duration:1,maxZoom:14});
});

function showToast(msg){var t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(function(){t.classList.remove('show')},2800)}

// ════════════ KICKOFF ════════════
refresh(false);
setInterval(function(){refresh(false)},REFRESH_MS);
})();
