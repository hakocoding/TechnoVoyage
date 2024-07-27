// Haritayı başlat
var map = L.map('map').setView([51.505, -0.09], 13);

// OpenStreetMap katmanını ekle
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Lokasyon verileri
var computerlocations = [

    {"name": "Paris Public Library", "lat": 48.856613, "lng": 2.352222},
    {"name": "London Library", "lat": 51.507351, "lng": -0.127758},
    {"name": "Madrid Book Center", "lat": 40.416775, "lng": -3.703790},
    {"name": "Rome Library", "lat": 41.902782, "lng": 12.496366},
    {"name": "Vienna Knowledge Hub", "lat": 48.208174, "lng": 16.373819},
    {"name": "Amsterdam Reading Room", "lat": 52.367573, "lng": 4.904138},
    {"name": "Brussels Central Library", "lat": 50.850346, "lng": 4.351721},
    {"name": "Dublin Library", "lat": 53.333068, "lng": -6.248909},
    {"name": "Copenhagen Study Center", "lat": 55.676098, "lng": 12.568337},
    {"name": "Stockholm Book Hub", "lat": 59.329323, "lng": 18.068581},
    {"name": "Oslo Library", "lat": 59.913868, "lng": 10.752245},
    {"name": "Helsinki Knowledge Center", "lat": 60.169856, "lng": 24.938379},
    {"name": "Warsaw Library", "lat": 52.229676, "lng": 21.012229},
    {"name": "Prague Study Hub", "lat": 50.075538, "lng": 14.437800},
    {"name": "Budapest Book Center", "lat": 47.497913, "lng": 19.040236},
    {"name": "Zurich Knowledge Hub", "lat": 47.376886, "lng": 8.541694},
    {"name": "Geneva Library", "lat": 46.204391, "lng": 6.143159},
    {"name": "Lisbon Study Center", "lat": 38.722252, "lng": -9.139337},
    {"name": "Barcelona Book Hub", "lat": 41.385064, "lng": 2.173403},
    {"name": "Athens Central Library", "lat": 37.983810, "lng": 23.727539},
    {"name": "Berlin Library", "lat": 52.520008, "lng": 13.404954},
    {"name": "Paris Book Center", "lat": 48.856613, "lng": 2.352222},
    {"name": "Madrid Library", "lat": 40.416775, "lng": -3.703790},
    {"name": "London Knowledge Hub", "lat": 51.507351, "lng": -0.127758},
    {"name": "Vienna Book Hub", "lat": 48.208174, "lng": 16.373819},
    {"name": "Amsterdam Library", "lat": 52.367573, "lng": 4.904138},
    {"name": "Brussels Knowledge Center", "lat": 50.850346, "lng": 4.351721},
    {"name": "Dublin Book Center", "lat": 53.333068, "lng": -6.248909},
    {"name": "Stockholm Library", "lat": 59.329323, "lng": 18.068581},
    {"name": "Oslo Knowledge Hub", "lat": 59.913868, "lng": 10.752245},
    {"name": "Helsinki Library", "lat": 60.169856, "lng": 24.938379},
    {"name": "Warsaw Knowledge Center", "lat": 52.229676, "lng": 21.012229},
    {"name": "Prague Book Center", "lat": 50.075538, "lng": 14.437800},
    {"name": "Budapest Library", "lat": 47.497913, "lng": 19.040236},
    {"name": "Zurich Central Library", "lat": 47.376886, "lng": 8.541694},
    {"name": "Geneva Study Hub", "lat": 46.204391, "lng": 6.143159},
    {"name": "Lisbon Book Hub", "lat": 38.722252, "lng": -9.139337},
    {"name": "Barcelona Library", "lat": 41.385064, "lng": 2.173403},
    {"name": "Athens Book Center", "lat": 37.983810, "lng": 23.727539},
    {"name": "Rome Study Center", "lat": 41.902782, "lng": 12.496366},
    {"name": "Berlin Knowledge Center", "lat": 52.520008, "lng": 13.404954},
    {"name": "Paris Library", "lat": 48.856613, "lng": 2.352222},
    {"name": "Madrid Study Center", "lat": 40.416775, "lng": -3.703790},
    {"name": "London Library", "lat": 51.507351, "lng": -0.127758},
    {"name": "Vienna Library", "lat": 48.208174, "lng": 16.373819},
    {"name": "Amsterdam Book Center", "lat": 52.367573, "lng": 4.904138},
    {"name": "Brussels Central Hub", "lat": 50.850346, "lng": 4.351721},
    {"name": "Dublin Knowledge Center", "lat": 53.333068, "lng": -6.248909},
    {"name": "Stockholm Knowledge Hub", "lat": 59.329323, "lng": 18.068581},
    {"name": "Oslo Book Center", "lat": 59.913868, "lng": 10.752245},
    {"name": "Helsinki Book Hub", "lat": 60.169856, "lng": 24.938379},
    {"name": "Warsaw Central Library", "lat": 52.229676, "lng": 21.012229},
    {"name": "Prague Knowledge Center", "lat": 50.075538, "lng": 14.437800},
    {"name": "Budapest Book Hub", "lat": 47.497913, "lng": 19.040236},
    {"name": "Zurich Library", "lat": 47.376886, "lng": 8.541694},
    {"name": "Geneva Central Library", "lat": 46.204391, "lng": 6.143159},
    {"name": "Lisbon Knowledge Hub", "lat": 38.722252, "lng": -9.139337},
    {"name": "Barcelona Study Center", "lat": 41.385064, "lng": 2.173403},
    {"name": "Athens Library", "lat": 37.983810, "lng": 23.727539},
    {"name": "Rome Book Center", "lat": 41.902782, "lng": 12.496366},
    {"name": "Berlin Library Hub", "lat": 52.520008, "lng": 13.404954},
    {"name": "Paris Knowledge Center", "lat": 48.856613, "lng": 2.352222},
    {"name": "Madrid Central Library", "lat": 40.416775, "lng": -3.703790},
    {"name": "London Book Hub", "lat": 51.507351, "lng": -0.127758},
    {"name": "Vienna Study Center", "lat": 48.208174, "lng": 16.373819},
    {"name": "Amsterdam Central Library", "lat": 52.367573, "lng": 4.904138},
    {"name": "Brussels Library", "lat": 50.850346, "lng": 4.351721},
    {"name": "Dublin Study Hub", "lat": 53.333068, "lng": -6.248909},
    {"name": "Stockholm Knowledge Center", "lat": 59.329323, "lng": 18.068581},
    {"name": "Oslo Library Hub", "lat": 59.913868, "lng": 10.752245},
    {"name": "Helsinki Study Center", "lat": 60.169856, "lng": 24.938379},
    {"name": "Warsaw Book Center", "lat": 52.229676, "lng": 21.012229},
    {"name": "Prague Library", "lat": 50.075538, "lng": 14.437800},
    {"name": "Budapest Study Hub", "lat": 47.497913, "lng": 19.040236},
    {"name": "Zurich Central Hub", "lat": 47.376886, "lng": 8.541694},
    {"name": "Geneva Book Center", "lat": 46.204391, "lng": 6.143159},
    {"name": "Lisbon Library Hub", "lat": 38.722252, "lng": -9.139337},
    {"name": "Barcelona Knowledge Center", "lat": 41.385064, "lng": 2.173403},
    {"name": "Athens Study Center", "lat": 37.983810, "lng": 23.727539},
    {"name": "Rome Central Library", "lat": 41.902782, "lng": 12.496366},
    {"name": "Berlin Book Hub", "lat": 52.520008, "lng": 13.404954},
    {"name": "Paris Study Hub", "lat": 48.856613, "lng": 2.352222},
    {"name": "Madrid Library Hub", "lat": 40.416775, "lng": -3.703790},
    {"name": "London Knowledge Center", "lat": 51.507351, "lng": -0.127758},
    {"name": "Vienna Book Center", "lat": 48.208174, "lng": 16.373819},
    {"name": "Amsterdam Library Hub", "lat": 52.367573, "lng": 4.904138},
    {"name": "Brussels Knowledge Hub", "lat": 50.850346, "lng": 4.351721},
    {"name": "Dublin Book Hub", "lat": 53.333068, "lng": -6.248909},
    {"name": "Stockholm Library Hub", "lat": 59.329323, "lng": 18.068581},
    {"name": "Oslo Knowledge Center", "lat": 59.913868, "lng": 10.752245},
    {"name": "Helsinki Book Hub", "lat": 60.169856, "lng": 24.938379},
    {"name": "Warsaw Library Hub", "lat": 52.229676, "lng": 21.012229},
    {"name": "Prague Book Hub", "lat": 50.075538, "lng": 14.437800},
    {"name": "Budapest Knowledge Center", "lat": 47.497913, "lng": 19.040236},
    {"name": "Zurich Library Hub", "lat": 47.376886, "lng": 8.541694},
    {"name": "Geneva Knowledge Center", "lat": 46.204391, "lng": 6.143159},
    {"name": "Lisbon Central Library", "lat": 38.722252, "lng": -9.139337},
    {"name": "Barcelona Central Library", "lat": 41.385064, "lng": 2.173403},
    {"name": "Athens Library Hub", "lat": 37.983810, "lng": 23.727539},
    {"name": "Rome Book Hub", "lat": 41.902782, "lng": 12.496366},
    {"name": "Berlin Knowledge Hub", "lat": 52.520008, "lng": 13.404954},
    {"name": "Paris Book Center", "lat": 48.856613, "lng": 2.352222},
    {"name": "Madrid Knowledge Center", "lat": 40.416775, "lng": -3.703790},
    {"name": "London Library Hub", "lat": 51.507351, "lng": -0.127758},
    {"name": "Vienna Study Hub", "lat": 48.208174, "lng": 16.373819},
    {"name": "Amsterdam Book Center", "lat": 52.367573, "lng": 4.904138},
    {"name": "Brussels Study Center", "lat": 50.850346, "lng": 4.351721},
    {"name": "Dublin Knowledge Hub", "lat": 53.333068, "lng": -6.248909},
    {"name": "Stockholm Study Hub", "lat": 59.329323, "lng": 18.068581},
    {"name": "Oslo Book Hub", "lat": 59.913868, "lng": 10.752245},
    {"name": "Helsinki Library Hub", "lat": 60.169856, "lng": 24.938379},
    {"name": "Warsaw Book Center", "lat": 52.229676, "lng": 21.012229},
    {"name": "Prague Study Center", "lat": 50.075538, "lng": 14.437800},
    {"name": "Budapest Library Hub", "lat": 47.497913, "lng": 19.040236},
    {"name": "Zurich Knowledge Hub", "lat": 47.376886, "lng": 8.541694},
    {"name": "Geneva Library Hub", "lat": 46.204391, "lng": 6.143159},
    {"name": "Lisbon Study Hub", "lat": 38.722252, "lng": -9.139337},
    {"name": "Barcelona Knowledge Hub", "lat": 41.385064, "lng": 2.173403},
    {"name": "Athens Book Center", "lat": 37.983810, "lng": 23.727539},
    {"name": "Rome Central Hub", "lat": 41.902782, "lng": 12.496366},
    {"name": "Berlin Study Center", "lat": 52.520008, "lng": 13.404954},
    {"name": "Paris Library Hub", "lat": 48.856613, "lng": 2.352222},
    {"name": "Madrid Book Hub", "lat": 40.416775, "lng": -3.703790},
    {"name": "London Knowledge Center", "lat": 51.507351, "lng": -0.127758},
    {"name": "Vienna Central Library", "lat": 48.208174, "lng": 16.373819},
    {"name": "Amsterdam Study Center", "lat": 52.367573, "lng": 4.904138},
    {"name": "Brussels Book Hub", "lat": 50.850346, "lng": 4.351721},
    {"name": "Dublin Library Hub", "lat": 53.333068, "lng": -6.248909},
    {"name": "Stockholm Knowledge Hub", "lat": 59.329323, "lng": 18.068581},
    {"name": "Oslo Library Center", "lat": 59.913868, "lng": 10.752245},
    {"name": "Helsinki Book Center", "lat": 60.169856, "lng": 24.938379},
    {"name": "Warsaw Study Center", "lat": 52.229676, "lng": 21.012229},
    {"name": "Prague Library Hub", "lat": 50.075538, "lng": 14.437800},
    {"name": "Budapest Study Hub", "lat": 47.497913, "lng": 19.040236},
    {"name": "Zurich Book Hub", "lat": 47.376886, "lng": 8.541694},
    {"name": "Geneva Study Center", "lat": 46.204391, "lng": 6.143159},
    {"name": "Lisbon Central Hub", "lat": 38.722252, "lng": -9.139337},
    {"name": "Barcelona Library Center", "lat": 41.385064, "lng": 2.173403},
    {"name": "Athens Study Hub", "lat": 37.983810, "lng": 23.727539},
    {"name": "Rome Knowledge Center", "lat": 41.902782, "lng": 12.496366},
    {"name": "Berlin Library Hub", "lat": 52.520008, "lng": 13.404954},
    {"name": "Paris Knowledge Hub", "lat": 48.856613, "lng": 2.352222},
    {"name": "Madrid Central Hub", "lat": 40.416775, "lng": -3.703790},
    {"name": "London Book Center", "lat": 51.507351, "lng": -0.127758},
    {"name": "Vienna Library Hub", "lat": 48.208174, "lng": 16.373819},
    {"name": "Amsterdam Book Hub", "lat": 52.367573, "lng": 4.904138},
    {"name": "Brussels Study Center", "lat": 50.850346, "lng": 4.351721},
    {"name": "Dublin Knowledge Center", "lat": 53.333068, "lng": -6.248909},
    {"name": "Stockholm Book Center", "lat": 59.329323, "lng": 18.068581},
    {"name": "Oslo Knowledge Hub", "lat": 59.913868, "lng": 10.752245},
    {"name": "Helsinki Library Hub", "lat": 60.169856, "lng": 24.938379},
    {"name": "Warsaw Book Hub", "lat": 52.229676, "lng": 21.012229},
    {"name": "Prague Study Hub", "lat": 50.075538, "lng": 14.437800},
    {"name": "Budapest Library Center", "lat": 47.497913, "lng": 19.040236},
    {"name": "Zurich Knowledge Hub", "lat": 47.376886, "lng": 8.541694},
    {"name": "Geneva Book Center", "lat": 46.204391, "lng": 6.143159},
    {"name": "Lisbon Knowledge Hub", "lat": 38.722252, "lng": -9.139337},
    {"name": "Barcelona Knowledge Center", "lat": 41.385064, "lng": 2.173403},
    {"name": "Athens Central Library", "lat": 37.983810, "lng": 23.727539},
    {"name": "Rome Study Hub", "lat": 41.902782, "lng": 12.496366},
    {"name": "Apex Centre", "lat": 53.78518769, "lng": -1.543707039},
    {"name": "St George House", "lat": 53.80084414, "lng": -1.550266385},
    {"name": "Leeds Civic Hall", "lat": 53.80226965, "lng": -1.548494218},
    {"name": "Carriageworks Theatre", "lat": 53.80122324, "lng": -1.547895253},
    {"name": "Garforth Library and One Stop Centre", "lat": 53.79191339, "lng": -1.388125926},
    {"name": "Abbey House Museum", "lat": 53.82238406, "lng": -1.607118964},
    {"name": "Aberfield Gate Housing Office (BITMO)", "lat": 53.7567338, "lng": -1.527326286},
    {"name": "Acorn Lodge Children's Unit", "lat": 53.80147842, "lng": -1.58962661},
    {"name": "Adams Court", "lat": 53.79056567, "lng": -1.568253994},
    {"name": "Aireborough Leisure Centre", "lat": 53.87262861, "lng": -1.707903028},
    {"name": "Ardsley and Tingley Library", "lat": 53.72558195, "lng": -1.550794692},
    {"name": "The Arium", "lat": 53.8393213, "lng": -1.43424998},
    {"name": "Leeds Industrial Museum at Armley Mills", "lat": 53.80294145, "lng": -1.582877042},
    {"name": "Armley Moor Early Years Centre", "lat": 53.79607605, "lng": -1.593990314},
    {"name": "Armley Leisure Centre", "lat": 53.79576747, "lng": -1.591446417},
    {"name": "Armley One Stop Centre and Library", "lat": 53.79712966, "lng": -1.588046426},
    {"name": "Leeds Art Gallery", "lat": 53.79996232, "lng": -1.548108697},
    {"name": "Artemis", "lat": 53.78904976, "lng": -1.551485658},
    {"name": "Farnley Hall", "lat": 53.78744697, "lng": -1.627525187},
    {"name": "Barleyfields Community Centre", "lat": 53.93133555, "lng": -1.388850588},
    {"name": "Beeston Hill Community Health Centre", "lat": 53.77829584, "lng": -1.555921922},
    {"name": "Beeston Library", "lat": 53.77254437, "lng": -1.566524497},
    {"name": "Belle Isle Foundation (Breeze)", "lat": 53.76646766, "lng": -1.522968804},
    {"name": "Boston Spa Children's Centre", "lat": 53.90814829, "lng": -1.358257444},
    {"name": "Boston Spa Library", "lat": 53.90540059, "lng": -1.346497019},
    {"name": "Bramley Childrens Centre", "lat": 53.8086, "lng": -1.6379},
    {"name": "Bramley Library", "lat": 53.81045345, "lng": -1.630177784},
    {"name": "Bramley Housing Office", "lat": 53.81253207, "lng": -1.628363146},
    {"name": "The Brownlee Centre", "lat": 53.84305138, "lng": -1.590701295},
    {"name": "Burley Park Children's Centre", "lat": 53.80713873, "lng": -1.58010753},
    {"name": "Burmantofts Housing Office", "lat": 53.80043425, "lng": -1.522880642},
    {"name": "Bramley Fulfilling Lives", "lat": 53.80637534, "lng": -1.630091778},
    {"name": "Broomhill Community Centre", "lat": 53.80258074, "lng": -1.50112315},
    {"name": "Calverley Library", "lat": 53.82928798, "lng": -1.686914928},
    {"name": "Carr Manor Children's Centre", "lat": 53.8350381, "lng": -1.552765476},
    {"name": "Leeds Central Library", "lat": 53.80033801, "lng": -1.548701341},
    {"name": "Technorth Family Learning Centre", "lat": 53.8252492, "lng": -1.534391721},
    {"name": "Chapel Allerton Library", "lat": 53.82874729, "lng": -1.537532594},
    {"name": "Chapeltown Children's Centre", "lat": 53.81199386, "lng": -1.529704399},
    {"name": "Berlin Central Library", "lat": 52.520008, "lng": 13.404954},
    { "name": "Moscow Public Library", "lat": 55.7512, "lng": 37.6184 },
    { "name": "St. Petersburg State Library", "lat": 59.9343, "lng": 30.3351 },
    { "name": "Kazan City Library", "lat": 55.7952, "lng": 49.1087 },
    { "name": "Novosibirsk Regional Library", "lat": 55.0084, "lng": 82.9348 },
    { "name": "Yekaterinburg Central Library", "lat": 56.8380, "lng": 60.6057 },
    { "name": "Omsk Library", "lat": 54.9924, "lng": 73.3687 },
    { "name": "Volgograd Library", "lat": 48.7236, "lng": 44.5131 },
    { "name": "Sochi Public Library", "lat": 43.4110, "lng": 39.9300 },
    { "name": "Krasnodar Regional Library", "lat": 45.0403, "lng": 38.9768 },
    { "name": "Kaliningrad Public Library", "lat": 54.7105, "lng": 20.4522 },
    { "name": "Rostov-on-Don Library", "lat": 47.2357, "lng": 39.7015 },
    { "name": "Tula Central Library", "lat": 54.1988, "lng": 37.6130 },
    { "name": "Tyumen City Library", "lat": 57.1522, "lng": 65.5270 },
    { "name": "Petropavlovsk-Kamchatsky Library", "lat": 53.0000, "lng": 158.6667 },
    { "name": "Irkutsk Central Library", "lat": 52.2845, "lng": 104.2966 },
    { "name": "Vladivostok Library", "lat": 43.1150, "lng": 131.8850 },
    { "name": "Yakutsk Public Library", "lat": 62.0272, "lng": 129.7320 },
    { "name": "Murmansk City Library", "lat": 68.9585, "lng": 33.0812 },
    { "name": "Ufa Central Library", "lat": 54.7344, "lng": 55.9570 },
    { "name": "Chita Regional Library", "lat": 52.0481, "lng": 113.4641 },
    { "name": "Saratov City Library", "lat": 51.5404, "lng": 46.0085 },
    { "name": "Nizhny Novgorod Library", "lat": 56.3287, "lng": 44.0020 },
    { "name": "Khabarovsk Library", "lat": 48.4833, "lng": 135.0667 },
    { "name": "Komsomolsk-on-Amur Library", "lat": 50.5500, "lng": 137.0000 },
    { "name": "Kostroma Central Library", "lat": 57.7667, "lng": 40.9333 },
    { "name": "Yaroslavl Library", "lat": 57.6260, "lng": 39.8797 },
    { "name": "Tver City Library", "lat": 56.8590, "lng": 35.9110 },
    { "name": "Ivanovo Central Library", "lat": 56.9994, "lng": 40.9640 },
    { "name": "Smolensk City Library", "lat": 54.7828, "lng": 32.0445 },
    { "name": "Vologda Regional Library", "lat": 59.2167, "lng": 39.8833 },
    { "name": "Arkhangelsk Library", "lat": 64.5355, "lng": 40.5694 },
    { "name": "Kaluga Public Library", "lat": 54.5185, "lng": 36.2731 },
    { "name": "Bryansk City Library", "lat": 53.2600, "lng": 34.3700 },
    { "name": "Lipetsk Library", "lat": 52.6097, "lng": 39.5908 },
    { "name": "Orel City Library", "lat": 52.9642, "lng": 36.0195 },
    { "name": "Lipetsk Central Library", "lat": 52.6097, "lng": 39.5908 },
    { "name": "Tula City Library", "lat": 54.1988, "lng": 37.6130 },
    { "name": "Kursk Central Library", "lat": 51.7220, "lng": 36.1910 },
    { "name": "Rybinsk Library", "lat": 58.0516, "lng": 38.8333 },
    { "name": "Cherepovets Library", "lat": 59.1333, "lng": 38.3833 },
    { "name": "Pskov City Library", "lat": 57.8180, "lng": 28.3320 },
    { "name": "Volgodonsk Library", "lat": 47.4892, "lng": 42.0890 },
    { "name": "Kirov City Library", "lat": 58.5994, "lng": 49.6682 },
    { "name": "Naberezhnye Chelny Library", "lat": 55.7425, "lng": 52.3248 },
    { "name": "Ryazan Library", "lat": 54.6291, "lng": 39.7349 },
    { "name": "Chelyabinsk City Library", "lat": 55.1644, "lng": 61.4368 },
    { "name": "Vladimir Library", "lat": 56.1290, "lng": 40.4057 },
    { "name": "Syzran Library", "lat": 53.1528, "lng": 48.5000 },
    { "name": "Arzamas Library", "lat": 55.4175, "lng": 43.8310 },
    { "name": "Saratov Library", "lat": 51.5404, "lng": 46.0085 },
    { "name": "Kamensk-Uralsky Library", "lat": 56.4172, "lng": 62.2267 },
    { "name": "British Library", "lat": 51.5295, "lng": -0.1270 },
    { "name": "Paris Public Library", "lat": 48.8566, "lng": 2.3522 },
    { "name": "Berlin Central Library", "lat": 52.5244, "lng": 13.4105 },
    { "name": "Amsterdam Public Library", "lat": 52.3791, "lng": 4.8994 },
    { "name": "Madrid City Library", "lat": 40.4168, "lng": -3.7038 },
    { "name": "Rome Public Library", "lat": 41.9028, "lng": 12.4964 },
    { "name": "Vienna Central Library", "lat": 48.2082, "lng": 16.3738 },
    { "name": "Lisbon Public Library", "lat": 38.7223, "lng": -9.1393 },
    { "name": "Prague Central Library", "lat": 50.0755, "lng": 14.4378 },
    { "name": "Warsaw City Library", "lat": 52.2297, "lng": 21.0122 },
    { "name": "Budapest Library", "lat": 47.4979, "lng": 19.0402 },
    { "name": "Brussels Public Library", "lat": 50.8503, "lng": 4.3517 },
    { "name": "Oslo Central Library", "lat": 59.9139, "lng": 10.7522 },
    { "name": "Copenhagen Library", "lat": 55.6761, "lng": 12.5683 },
    { "name": "Stockholm Central Library", "lat": 59.3293, "lng": 18.0686 },
    { "name": "Helsinki Library", "lat": 60.1695, "lng": 24.9354 },
    { "name": "Dublin City Library", "lat": 53.3331, "lng": -6.2489 },
    { "name": "Athens Public Library", "lat": 37.9838, "lng": 23.7275 },
    { "name": "Bucharest City Library", "lat": 44.4268, "lng": 26.1025 },
    { "name": "Sofia Library", "lat": 42.6977, "lng": 23.3219 },
    { "name": "Belgrade Library", "lat": 44.8176, "lng": 20.4633 },
    { "name": "Zagreb Central Library", "lat": 45.8150, "lng": 15.9819 },
    { "name": "Ljubljana Library", "lat": 46.0511, "lng": 14.5051 },
    { "name": "Vienna City Library", "lat": 48.2082, "lng": 16.3738 },
    { "name": "Bratislava Library", "lat": 48.1482, "lng": 17.1067 },
    { "name": "Warsaw Central Library", "lat": 52.2297, "lng": 21.0122 },
    { "name": "Tallinn Library", "lat": 59.4370, "lng": 24.7535 },
    { "name": "Riga Public Library", "lat": 56.9496, "lng": 24.1059 },
    { "name": "Vilnius Central Library", "lat": 54.6872, "lng": 25.2797 },
    { "name": "Reykjavik Public Library", "lat": 64.1265, "lng": -21.8174 },
    { "name": "Malta National Library", "lat": 35.8997, "lng": 14.5147 },
    { "name": "San Marino Library", "lat": 43.9333, "lng": 12.4500 },
    { "name": "Andorra Library", "lat": 42.5078, "lng": 1.5211 },
    { "name": "Monaco Library", "lat": 43.7333, "lng": 7.4167 },
    { "name": "Liechtenstein Library", "lat": 47.1662, "lng": 9.5215 },
    { "name": "Luxembourg City Library", "lat": 49.6117, "lng": 6.13 },
    { "name": "Malta National Library", "lat": 35.8997, "lng": 14.5147 },
    { "name": "San Marino Library", "lat": 43.9333, "lng": 12.4500 },
    { "name": "Andorra Library", "lat": 42.5078, "lng": 1.5211 },
    { "name": "Monaco Library", "lat": 43.7333, "lng": 7.4167 },
    { "name": "Cape Town Central Library", "lat": -33.9189, "lng": 18.4233 },
    { "name": "Johannesburg Library", "lat": -26.2041, "lng": 28.0473 },
    { "name": "Durban Public Library", "lat": -29.8587, "lng": 31.0218 },
    { "name": "Pretoria Central Library", "lat": -25.7479, "lng": 28.2293 },
    { "name": "Port Elizabeth Library", "lat": -33.9154, "lng": 25.5948 },
    { "name": "Gaborone Public Library", "lat": -24.6465, "lng": 25.9067 },
    { "name": "Windhoek Central Library", "lat": -22.5597, "lng": 17.0833 },
    { "name": "Lagos City Library", "lat": 6.5244, "lng": 3.3792 },
    { "name": "Accra Public Library", "lat": 5.6037, "lng": -0.1870 },
    { "name": "Nairobi Central Library", "lat": -1.2864, "lng": 36.8172 },
    { "name": "Kampala Library", "lat": 0.3476, "lng": 32.5825 },
    { "name": "Dar es Salaam Public Library", "lat": -6.7924, "lng": 39.2083 },
    { "name": "Addis Ababa Library", "lat": 9.1450, "lng": 40.4897 },
    { "name": "Cairo Central Library", "lat": 30.0444, "lng": 31.2357 },
    { "name": "Alexandria Library", "lat": 31.2001, "lng": 29.9187 },
    { "name": "Casablanca Public Library", "lat": 33.5731, "lng": -7.5890 },
    { "name": "Rabat Library", "lat": 34.0209, "lng": -6.8417 },
    { "name": "Tunis City Library", "lat": 33.8869, "lng": 9.5375 },
    { "name": "Algiers Central Library", "lat": 36.7538, "lng": 3.0588 },
    { "name": "Tripoli Library", "lat": 32.8872, "lng": 13.1913 },
    { "name": "Lagos Central Library", "lat": 6.5244, "lng": 3.3792 },
    { "name": "Kinshasa Public Library", "lat": -4.3224, "lng": 15.3070 },
    { "name": "Luanda City Library", "lat": -8.8390, "lng": 13.2894 },
    { "name": "Maputo Library", "lat": -25.9682, "lng": 32.5732 },
    { "name": "Harare Central Library", "lat": -17.8292, "lng": 31.0520 },
    { "name": "Bujumbura Library", "lat": -3.3614, "lng": 29.3594 },
    { "name": "Kigali Central Library", "lat": -1.9644, "lng": 30.1044 },
    { "name": "Dakar Library", "lat": 14.6928, "lng": -17.4467 },
    { "name": "Bamako Public Library", "lat": 12.6392, "lng": -8.0029 },
    { "name": "Abidjan Library", "lat": 5.3450, "lng": -4.0244 },
    { "name": "Ouagadougou Library", "lat": 12.3717, "lng": -1.5191 },
    { "name": "Lomé Central Library", "lat": 6.1725, "lng": 1.2316 },
    { "name": "Yaoundé Library", "lat": 3.8480, "lng": 11.5021 },
    { "name": "N'Djamena Central Library", "lat": 12.6392, "lng": 14.0096 },
    { "name": "Juba Library", "lat": 4.8594, "lng": 31.5820 },
    { "name": "Gitega Library", "lat": -3.4265, "lng": 29.9306 },
    { "name": "Libreville Library", "lat": 0.4167, "lng": 9.4667 },
    { "name": "Brazzaville Central Library", "lat": -4.2634, "lng": 15.2422 },
    { "name": "Conakry Library", "lat": 9.6411, "lng": -13.5784 },
    { "name": "Monrovia Library", "lat": 6.3150, "lng": -10.8010 },
    { "name": "Freetown Central Library", "lat": 8.4650, "lng": -13.2310 },
    { "name": "Banjul Library", "lat": 13.4546, "lng": -16.5790 },
    { "name": "Accra Library", "lat": 5.6037, "lng": -0.1870 },
    { "name": "Port Harcourt Library", "lat": 4.8155, "lng": 7.0492 },
    { "name": "Lagos Library", "lat": 6.5244, "lng": 3.3792 }

];
var wifilocations=
[
    // Sample entries for free Wi-Fi locations
    { "name": "Starbucks", "lat": 40.712776, "lng": -74.005974 },
    { "name": "McDonald's", "lat": 40.730610, "lng": -73.935242 },
    { "name": "Library of Congress", "lat": 38.887065, "lng": -77.004566 },
    { "name": "Central Park", "lat": 40.785091, "lng": -73.968285 },
    { "name": "Panera Bread", "lat": 37.774929, "lng": -122.419418 },
    { "name": "Barnes & Noble", "lat": 34.052235, "lng": -118.243683 },
    { "name": "Whole Foods Market", "lat": 41.878114, "lng": -87.629798 },
    { "name": "City Library", "lat": 40.760780, "lng": -111.891045 },
    { "name": "Los Angeles County Museum of Art", "lat": 34.063503, "lng": -118.358075 },
    { "name": "Chick-fil-A", "lat": 36.162664, "lng": -86.781601 },
    { "name": "Best Buy", "lat": 39.099727, "lng": -94.578568 },
    { "name": "Local Community Center", "lat": 45.421530, "lng": -75.697193 },
    { "name": "Apple Store", "lat": 34.052235, "lng": -118.243683 },
    { "name": "University Campus", "lat": 37.774929, "lng": -122.419418 },
    { "name": "Public Square", "lat": 41.499321, "lng": -81.694360 },
    { "name": "City Hall", "lat": 34.052235, "lng": -118.243683 },
    { "name": "Barnes & Noble Cafe", "lat": 32.715736, "lng": -117.161087 },
    { "name": "Walmart", "lat": 29.760427, "lng": -95.369804 },
    { "name": "National Gallery of Art", "lat": 38.891292, "lng": -77.019903 },
    { "name": "Chicago Public Library", "lat": 41.878114, "lng": -87.629798 },
    { "name": "Saks Fifth Avenue", "lat": 40.759040, "lng": -73.984500 },
    { "name": "Department Store", "lat": 42.360081, "lng": -71.058884 },
    { "name": "City Museum", "lat": 38.627002, "lng": -90.199404 },
    { "name": "Airport Lounge", "lat": 37.774929, "lng": -122.419418 },
    { "name": "Shopping Mall", "lat": 40.760780, "lng": -111.891045 },
    { "name": "University Library", "lat": 34.052235, "lng": -118.243683 },
    { "name": "Coffee Shop", "lat": 37.774929, "lng": -122.419418 },
    { "name": "Public Park", "lat": 40.785091, "lng": -73.968285 },
    { "name": "Museum", "lat": 38.897676, "lng": -77.036530 },
    { "name": "Tech Hub", "lat": 34.052235, "lng": -118.243683 },
    { "name": "Civic Center", "lat": 39.099727, "lng": -94.578568 },
    { "name": "Concert Hall", "lat": 41.878114, "lng": -87.629798 },
    { "name": "Art Gallery", "lat": 40.730610, "lng": -73.935242 },
    { "name": "Historic Site", "lat": 42.360081, "lng": -71.058884 },
    { "name": "Train Station", "lat": 45.421530, "lng": -75.697193 },
    { "name": "City Library Branch", "lat": 36.162664, "lng": -86.781601 },
    { "name": "Business Center", "lat": 37.774929, "lng": -122.419418 },
    { "name": "University Cafe", "lat": 34.052235, "lng": -118.243683 },
    { "name": "Corporate Office", "lat": 39.099727, "lng": -94.578568 },
    { "name": "Music Venue", "lat": 41.878114, "lng": -87.629798 },
    { "name": "Sport Stadium", "lat": 40.760780, "lng": -111.891045 },
    { "name": "Co-Working Space", "lat": 45.421530, "lng": -75.697193 },
    { "name": "Cultural Center", "lat": 37.774929, "lng": -122.419418 },
    { "name": "Public Library", "lat": 40.785091, "lng": -73.968285 },
    { "name": "Digital Nomad Hub", "lat": 34.052235, "lng": -118.243683 },
    { "name": "Free Wi-Fi Zone", "lat": 41.499321, "lng": -81.694360 },
    { "name": "City Square", "lat": 32.715736, "lng": -117.161087 },
    { "name": "University Plaza", "lat": 42.360081, "lng": -71.058884 },
    { "name": "Local Bookstore", "lat": 38.627002, "lng": -90.199404 },
    { "name": "Travel Hub", "lat": 29.760427, "lng": -95.369804 },
    { "name": "Regional Museum", "lat": 37.774929, "lng": -122.419418 },
    { "name": "Community Hub", "lat": 40.730610, "lng": -73.935242 },
    { "name": "Public Plaza", "lat": 34.052235, "lng": -118.243683 },
    { "name": "Social Club", "lat": 41.878114, "lng": -87.629798 },
    { "name": "Local Cafe", "lat": 40.760780, "lng": -111.891045 },
    { "name": "Co-Working Hub", "lat": 42.360081, "lng": -71.058884 },
    { "name": "Tech Startup", "lat": 36.162664, "lng": -86.781601 },
    { "name": "City Hall Plaza", "lat": 37.774929, "lng": -122.419418 },
    { "name": "Civic Plaza", "lat": 34.052235, "lng": -118.243683 },
    { "name": "Historical Society", "lat": 41.499321, "lng": -81.694360 },
    { "name": "City Park", "lat": 32.715736, "lng": -117.161087 },
    { "name": "Public Art Gallery", "lat": 42.360081, "lng": -71.058884 },
    { "name": "Free Wi-Fi Cafe", "lat": 45.421530, "lng": -75.697193 },
    { "name": "Innovation Center", "lat": 37.774929, "lng": -122.419418 },
    { "name": "Public Education Center", "lat": 40.730610, "lng": -73.935242 },
    { "name": "Arts Center", "lat": 34.052235, "lng": -118.243683 },
    { "name": "Public Plaza Park", "lat": 41.878114, "lng": -87.629798 },
    { "name": "Research Hub", "lat": 40.760780, "lng": -111.891045 },
    { "name": "Free Wi-Fi Lounge", "lat": 37.774929, "lng": -122.419418 },
    { "name": "Cultural Plaza", "lat": 34.052235, "lng": -118.243683 },
    { "name": "Innovation Plaza", "lat": 41.499321, "lng": -81.694360 },
    { "name": "Public Meeting Space", "lat": 32.715736, "lng": -117.161087 },
    { "name": "Public Library Hub", "lat": 42.360081, "lng": -71.058884 },
    { "name": "Starbucks", "lat": 48.858844, "lng": 2.294351 },
    { "name": "McDonald's", "lat": 51.507351, "lng": -0.127758 },
    { "name": "Berlin Hauptbahnhof", "lat": 52.525051, "lng": 13.369425 },
    { "name": "Public Library", "lat": 52.370216, "lng": 4.895168 },
    { "name": "Biblioteca Nacional de España", "lat": 40.418310, "lng": -3.691893 },
    { "name": "Cafe Central", "lat": 48.208174, "lng": 16.373819 },
    { "name": "Starbucks", "lat": 50.846733, "lng": 4.349903 },
    { "name": "Public Library", "lat": 41.891930, "lng": 12.511330 },
    { "name": "Café de Flore", "lat": 48.855939, "lng": 2.333246 },
    { "name": "Rathausplatz", "lat": 48.208174, "lng": 16.373819 },
    { "name": "McDonald's", "lat": 48.135125, "lng": 11.581981 },
    { "name": "Whole Foods Market", "lat": 51.507351, "lng": -0.127758 },
    { "name": "Public Library", "lat": 55.953251, "lng": -3.188267 },
    { "name": "Public Park", "lat": 59.437007, "lng": 24.753530 },
    { "name": "Public Library", "lat": 48.208174, "lng": 16.373819 },
    { "name": "Café de la Paix", "lat": 48.870942, "lng": 2.331978 },
    { "name": "Public Square", "lat": 50.087465, "lng": 14.421253 },
    { "name": "Starbucks", "lat": 48.856613, "lng": 2.352222 },
    { "name": "McDonald's", "lat": 59.437007, "lng": 24.753530 },
    { "name": "Public Library", "lat": 52.379189, "lng": 4.899431 },
    { "name": "Public Library", "lat": 40.416775, "lng": -3.703790 },
    { "name": "Café Central", "lat": 48.208174, "lng": 16.373819 },
    { "name": "Public Library", "lat": 55.953251, "lng": -3.188267 },
    { "name": "Biblioteca Nacional de España", "lat": 40.418310, "lng": -3.691893 },
    { "name": "Starbucks", "lat": 50.850346, "lng": 4.351721 },
    { "name": "Café de Flore", "lat": 48.855939, "lng": 2.333246 },
    { "name": "Café Cova Montenapoleone", "lat": 45.467769, "lng": 9.195550 },
    { "name": "Café des 2 Moulins", "lat": 48.884410, "lng": 2.332840 },
    { "name": "Public Park", "lat": 51.165691, "lng": 10.451526 },
    { "name": "Public Library", "lat": 50.110924, "lng": 8.682127 },
    { "name": "McDonald's", "lat": 53.551086, "lng": 9.993682 },
    { "name": "Public Square", "lat": 48.208174, "lng": 16.373819 },
    { "name": "Starbucks", "lat": 48.135125, "lng": 11.581981 },
    { "name": "Public Library", "lat": 40.416775, "lng": -3.703790 },
    { "name": "Public Park", "lat": 55.755825, "lng": 37.617298 },
    { "name": "Café de Flore", "lat": 48.855939, "lng": 2.333246 },
    { "name": "Starbucks", "lat": 51.507351, "lng": -0.127758 },
    { "name": "Public Library", "lat": 48.208174, "lng": 16.373819 },
    { "name": "Café de la Paix", "lat": 48.870942, "lng": 2.331978 },
    { "name": "Starbucks", "lat": 50.850346, "lng": 4.351721 },
    { "name": "Public Library", "lat": 51.507351, "lng": -0.127758 },
    { "name": "McDonald's", "lat": 52.229676, "lng": 21.012229 },
    { "name": "Café Cova Montenapoleone", "lat": 45.467769, "lng": 9.195550 },
    { "name": "Public Park", "lat": 40.416775, "lng": -3.703790 },
    { "name": "Public Library", "lat": 41.902782, "lng": 12.496366 },
    { "name": "Starbucks", "lat": 59.437007, "lng": 24.753530 },
    { "name": "Public Library", "lat": 48.208174, "lng": 16.373819 },
    { "name": "McDonald's", "lat": 52.229676, "lng": 21.012229 },
    { "name": "Café Cova Montenapoleone", "lat": 45.467769, "lng": 9.195550 },
    { "name": "Public Park", "lat": 40.416775, "lng": -3.703790 },
    { "name": "Public Library", "lat": 41.902782, "lng": 12.496366 },
    { "name": "Starbucks", "lat": 59.437007, "lng": 24.753530 },
    { "name": "Public Library", "lat": 48.208174, "lng": 16.373819 },
    { "name": "McDonald's", "lat": 52.229676, "lng": 21.012229 },
    { "name": "Café Cova Montenapoleone", "lat": 45.467769, "lng": 9.195550 },
    { "name": "Public Park", "lat": 40.416775, "lng": -3.703790 },
    { "name": "Public Library", "lat": 41.902782, "lng": 12.496366 },
    { "name": "Starbucks", "lat": 59.437007, "lng": 24.753530 },
    { "name": "Public Library", "lat": 48.208174, "lng": 16.373819 },
    { "name": "McDonald's", "lat": 52.229676, "lng": 21.012229 },
    { "name": "Café Cova Montenapoleone", "lat": 45.467769, "lng": 9.195550 },
    { "name": "Public Park", "lat": 40.416775, "lng": -3.703790 },
    { "name": "Public Library", "lat": 41.902782, "lng": 12.496366 },
    { "name": "Starbucks", "lat": 59.437007, "lng": 24.753530 },
    { "name": "Public Library", "lat": 48.208174, "lng": 16.373819 },
    { "name": "McDonald's", "lat": 52.229676, "lng": 21.012229 },
    { "name": "Café Cova Montenapoleone", "lat": 45.467769, "lng": 9.195550 },
    { "name": "Public Park", "lat": 40.416775, "lng": -3.703790 },
    { "name": "Public Library", "lat": 41.902782, "lng": 12.496366 },
    { "name": "Starbucks", "lat": 59.437007, "lng": 24.753530 },
    { "name": "Public Library", "lat": 48.208174, "lng": 16.373819 },
    { "name": "McDonald's", "lat": 52.229676, "lng": 21.012229 },
    { "name": "Café Cova Montenapoleone", "lat": 45.467769, "lng": 9.195550 },
    { "name": "Public Park", "lat": 40.416775, "lng": -3.703790 },
    { "name": "Public Library", "lat": 41.902782, "lng": 12.496366 },
    { "name": "Starbucks", "lat": 59.437007, "lng": 24.753530 },
    { "name": "Public Library", "lat": 48.208174, "lng": 16.373819 },
    { "name": "McDonald's", "lat": 52.229676, "lng": 21.012229 },
    { "name": "Café Cova Montenapoleone", "lat": 45.467769, "lng": 9.195550 },
    { "name": "Starbucks", "lat": 41.008238, "lng": 28.978359 },
    { "name": "McDonald's", "lat": 41.008238, "lng": 28.978359 },
    { "name": "Kızılay Park", "lat": 39.9334, "lng": 32.8597 },
    { "name": "Taksim Square", "lat": 41.0369, "lng": 28.9878 },
    { "name": "Public Library", "lat": 41.0331, "lng": 28.9794 },
    { "name": "Müze Gazhane", "lat": 41.0335, "lng": 28.9784 },
    { "name": "Cevahir Shopping Mall", "lat": 41.0394, "lng": 28.9949 },
    { "name": "Public Park", "lat": 41.0744, "lng": 28.9106 },
    { "name": "Kadıköy Public Library", "lat": 40.9907, "lng": 29.0294 },
    { "name": "Starbucks", "lat": 41.0069, "lng": 28.9690 },
    { "name": "McDonald's", "lat": 41.0518, "lng": 28.9744 },
    { "name": "Galata Tower", "lat": 41.0253, "lng": 28.9700 },
    { "name": "İstanbul Modern", "lat": 41.0292, "lng": 28.9692 },
    { "name": "Zorlu Center", "lat": 41.0534, "lng": 29.0056 },
    { "name": "Public Park", "lat": 41.0180, "lng": 28.9626 },
    { "name": "Public Library", "lat": 40.9956, "lng": 29.0304 },
    { "name": "Starbucks", "lat": 41.0147, "lng": 28.9616 },
    { "name": "McDonald's", "lat": 41.0275, "lng": 28.9711 },
    { "name": "Public Library", "lat": 41.0162, "lng": 28.9685 },
    { "name": "Forum Istanbul", "lat": 41.0610, "lng": 28.9309 },
    { "name": "Public Park", "lat": 41.0374, "lng": 28.9687 },
    { "name": "Starbucks", "lat": 41.0204, "lng": 28.9745 },
    { "name": "McDonald's", "lat": 41.0456, "lng": 28.9735 },
    { "name": "Public Library", "lat": 41.0240, "lng": 28.9820 },
    { "name": "İstinye Park", "lat": 41.1147, "lng": 29.0364 },
    { "name": "Public Park", "lat": 41.0614, "lng": 28.9344 },
    { "name": "Starbucks", "lat": 41.0275, "lng": 28.9775 },
    { "name": "McDonald's", "lat": 41.0400, "lng": 28.9701 },
    { "name": "Public Library", "lat": 41.0312, "lng": 28.9780 },
    { "name": "Cevahir Mall", "lat": 41.0415, "lng": 28.9908 },
    { "name": "Public Park", "lat": 41.0370, "lng": 28.9335 },
    { "name": "Starbucks", "lat": 41.0137, "lng": 28.9650 },
    { "name": "McDonald's", "lat": 41.0227, "lng": 28.9654 },
    { "name": "Public Library", "lat": 41.0110, "lng": 28.9725 },
    { "name": "Kozyatağı Park", "lat": 40.9976, "lng": 29.0537 },
    { "name": "Public Park", "lat": 41.0117, "lng": 28.9648 },
    { "name": "Starbucks", "lat": 41.0502, "lng": 28.9826 },
    { "name": "McDonald's", "lat": 41.0365, "lng": 28.9570 },
    { "name": "Public Library", "lat": 41.0302, "lng": 28.9506 },
    { "name": "Trump Towers Mall", "lat": 41.0415, "lng": 28.9709 },
    { "name": "Public Park", "lat": 41.0556, "lng": 28.9519 },
    { "name": "Starbucks", "lat": 41.0189, "lng": 28.9745 },
    { "name": "McDonald's", "lat": 41.0255, "lng": 28.9830 },
    { "name": "Public Library", "lat": 41.0382, "lng": 28.9765 },
    { "name": "Kanyon Mall", "lat": 41.0752, "lng": 29.0213 },
    { "name": "Public Park", "lat": 41.0386, "lng": 28.9650 },
    { "name": "Starbucks", "lat": 41.0328, "lng": 28.9670 },
    { "name": "McDonald's", "lat": 41.0578, "lng": 28.9761 },
    { "name": "Public Library", "lat": 41.0450, "lng": 28.9657 },
    { "name": "Vialand", "lat": 41.0378, "lng": 28.9325 },
    { "name": "Public Park", "lat": 41.0407, "lng": 28.9745 },
    { "name": "Starbucks", "lat": 41.0303, "lng": 28.9692 },
    { "name": "McDonald's", "lat": 41.0534, "lng": 28.9755 },
    { "name": "Public Library", "lat": 41.0261, "lng": 28.9725 },
    { "name": "Aqua Florya Mall", "lat": 41.0519, "lng": 28.8820 },
    { "name": "Public Park", "lat": 41.0602, "lng": 28.9646 },
    { "name": "Starbucks", "lat": 41.0385, "lng": 28.9521 },
    { "name": "McDonald's", "lat": 41.0270, "lng": 28.9697 },
    { "name": "Public Library", "lat": 41.0388, "lng": 28.9768 },
    { "name": "Zorlu Center", "lat": 41.0534, "lng": 29.0056 },
    { "name": "Public Park", "lat": 41.0465, "lng": 28.9685 },
    { "name": "Starbucks", "lat": 41.0210, "lng": 28.9692 },
    { "name": "McDonald's", "lat": 41.0361, "lng": 28.9715 },
    { "name": "Public Library", "lat": 41.0317, "lng": 28.9794 },
    { "name": "İstanbul Sapphire", "lat": 41.0524, "lng": 29.0015 },
    { "name": "Public Park", "lat": 41.0411, "lng": 28.9697 },
    { "name": "Starbucks", "lat": 41.0295, "lng": 28.9758 },
    { "name": "Public Library", "lat": 41.0128, "lng": 28.9784 },  // Istanbul
    { "name": "Taksim Square", "lat": 41.0369, "lng": 28.9878 },  // Istanbul
    { "name": "Cevahir Mall", "lat": 41.0394, "lng": 28.9949 },  // Istanbul
    { "name": "Forum Istanbul", "lat": 41.0610, "lng": 28.9309 },  // Istanbul
    { "name": "İstanbul Sapphire", "lat": 41.0524, "lng": 29.0015 },  // Istanbul
    { "name": "Starbucks", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "Public Library", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "Kocatepe Mosque", "lat": 39.9310, "lng": 32.8604 },  // Ankara
    { "name": "Ankara Mall", "lat": 39.9339, "lng": 32.8650 },  // Ankara
    { "name": "McDonald's", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "Public Library", "lat": 38.4192, "lng": 27.1287 },  // Izmir
    { "name": "Izmir Clock Tower", "lat": 38.4192, "lng": 27.1287 },  // Izmir
    { "name": "Kordon", "lat": 38.4192, "lng": 27.1300 },  // Izmir
    { "name": "Starbucks", "lat": 38.4192, "lng": 27.1287 },  // Izmir
    { "name": "McDonald's", "lat": 38.4192, "lng": 27.1287 },  // Izmir
    { "name": "Public Library", "lat": 37.0662, "lng": 37.3833 },  // Gaziantep
    { "name": "Gaziantep Castle", "lat": 37.0662, "lng": 37.3833 },  // Gaziantep
    { "name": "Starbucks", "lat": 37.0662, "lng": 37.3833 },  // Gaziantep
    { "name": "McDonald's", "lat": 37.0662, "lng": 37.3833 },  // Gaziantep
    { "name": "Public Library", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Kaleiçi", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Lara Beach", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Starbucks", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "McDonald's", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Public Library", "lat": 41.0103, "lng": 28.9784 },  // Istanbul
    { "name": "Grand Bazaar", "lat": 41.0103, "lng": 28.9784 },  // Istanbul
    { "name": "Topkapi Palace", "lat": 41.0103, "lng": 28.9784 },  // Istanbul
    { "name": "Starbucks", "lat": 41.0103, "lng": 28.9784 },  // Istanbul
    { "name": "McDonald's", "lat": 41.0103, "lng": 28.9784 },  // Istanbul
    { "name": "Public Library", "lat": 37.3833, "lng": 40.1517 },  // Diyarbakır
    { "name": "Diyarbakır Castle", "lat": 37.3833, "lng": 40.1517 },  // Diyarbakır
    { "name": "Starbucks", "lat": 37.3833, "lng": 40.1517 },  // Diyarbakır
    { "name": "McDonald's", "lat": 37.3833, "lng": 40.1517 },  // Diyarbakır
    { "name": "Public Library", "lat": 38.9637, "lng": 35.2433 },  // Kayseri
    { "name": "Kayseri Castle", "lat": 38.9637, "lng": 35.2433 },  // Kayseri
    { "name": "Starbucks", "lat": 38.9637, "lng": 35.2433 },  // Kayseri
    { "name": "McDonald's", "lat": 38.9637, "lng": 35.2433 },  // Kayseri
    { "name": "Public Library", "lat": 40.7128, "lng": 29.0074 },  // Bursa
    { "name": "Bursa Grand Mosque", "lat": 40.7128, "lng": 29.0074 },  // Bursa
    { "name": "Starbucks", "lat": 40.7128, "lng": 29.0074 },  // Bursa
    { "name": "McDonald's", "lat": 40.7128, "lng": 29.0074 },  // Bursa
    { "name": "Public Library", "lat": 38.4177, "lng": 27.1287 },  // Izmir
    { "name": "Alsancak", "lat": 38.4177, "lng": 27.1287 },  // Izmir
    { "name": "Starbucks", "lat": 38.4177, "lng": 27.1287 },  // Izmir
    { "name": "McDonald's", "lat": 38.4177, "lng": 27.1287 },  // Izmir
    { "name": "Public Library", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "Atatürk Forest Farm", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "Starbucks", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "McDonald's", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "Public Library", "lat": 37.0662, "lng": 37.3833 },  // Gaziantep
    { "name": "Şehreküstü", "lat": 37.0662, "lng": 37.3833 },  // Gaziantep
    { "name": "Starbucks", "lat": 37.0662, "lng": 37.3833 },  // Gaziantep
    { "name": "McDonald's", "lat": 37.0662, "lng": 37.3833 },  // Gaziantep
    { "name": "Public Library", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Lara Beach", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Starbucks", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "McDonald's", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Public Library", "lat": 37.3754, "lng": 37.1271 },  // Malatya
    { "name": "Malatya Castle", "lat": 37.3754, "lng": 37.1271 },  // Malatya
    { "name": "Starbucks", "lat": 37.3754, "lng": 37.1271 },  // Malatya
    { "name": "McDonald's", "lat": 37.3754, "lng": 37.1271 },  // Malatya
    { "name": "Public Library", "lat": 41.0260, "lng": 28.9756 },  // Istanbul
    { "name": "Galata Tower", "lat": 41.0260, "lng": 28.9756 },  // Istanbul
    { "name": "Starbucks", "lat": 41.0260, "lng": 28.9756 },  // Istanbul
    { "name": "McDonald's", "lat": 41.0260, "lng": 28.9756 },  // Istanbul
    { "name": "Public Library", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Kaleiçi", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Starbucks", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "McDonald's", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Public Library", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "Kocatepe Mosque", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "Starbucks", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "McDonald's", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "Public Library", "lat": 37.0662, "lng": 37.3833 },  // Gaziantep
    { "name": "Diyarbakır Castle", "lat": 37.0662, "lng": 37.3833 },  // Gaziantep
    { "name": "Starbucks", "lat": 37.0662, "lng": 37.3833 },  // Gaziantep
    { "name": "McDonald's", "lat": 37.0662, "lng": 37.3833 },  // Gaziantep
    { "name": "Public Library", "lat": 38.9637, "lng": 35.2433 },  // Kayseri
    { "name": "Kayseri Castle", "lat": 38.9637, "lng": 35.2433 },  // Kayseri
    { "name": "Starbucks", "lat": 38.9637, "lng": 35.2433 },  // Kayseri
    { "name": "McDonald's", "lat": 38.9637, "lng": 35.2433 },  // Kayseri
    { "name": "Public Library", "lat": 40.7128, "lng": 29.0074 },  // Bursa
    { "name": "Bursa Grand Mosque", "lat": 40.7128, "lng": 29.0074 },  // Bursa
    { "name": "Starbucks", "lat": 40.7128, "lng": 29.0074 },  // Bursa
    { "name": "McDonald's", "lat": 40.7128, "lng": 29.0074 },  // Bursa
    { "name": "Public Library", "lat": 38.4177, "lng": 27.1287 },  // Izmir
    { "name": "Alsancak", "lat": 38.4177, "lng": 27.1287 },  // Izmir
    { "name": "Starbucks", "lat": 38.4177, "lng": 27.1287 },  // Izmir
    { "name": "McDonald's", "lat": 38.4177, "lng": 27.1287 },  // Izmir
    { "name": "Public Library", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "Atatürk Forest Farm", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "Starbucks", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "McDonald's", "lat": 39.9334, "lng": 32.8597 },  // Ankara
    { "name": "Public Library", "lat": 37.3833, "lng": 40.1517 },  // Diyarbakır
    { "name": "Diyarbakır Castle", "lat": 37.3833, "lng": 40.1517 },  // Diyarbakır
    { "name": "Starbucks", "lat": 37.3833, "lng": 40.1517 },  // Diyarbakır
    { "name": "McDonald's", "lat": 37.3833, "lng": 40.1517 },  // Diyarbakır
    { "name": "Public Library", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Kaleiçi", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Starbucks", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "McDonald's", "lat": 36.9000, "lng": 30.7040 },  // Antalya
    { "name": "Public Library", "lat": 37.3754, "lng": 37.1271 },  // Malatya
    { "name": "Malatya Castle", "lat": 37.3754, "lng": 37.1271 },  // Malatya
    { "name": "Starbucks", "lat": 37.3754, "lng": 37.1271 },  // Malatya
    { "name": "McDonald's", "lat": 37.3754, "lng": 37.1271 },  // Malatya
    { "name": "Public Library", "lat": 41.0260, "lng": 28.9756 },  // Istanbul
    { "name": "Galata Tower", "lat": 41.0260, "lng": 28.9756 },  // Istanbul
    { "name": "Starbucks", "lat": 41.0260, "lng": 28.9756 },  // Istanbul
    { "name": "McDonald's", "lat": 41.0260, "lng": 28.9756 },
    { "name": "Dubai Mall", "lat": 25.1972, "lng": 55.2744 },
    { "name": "Abu Dhabi Central Library", "lat": 24.4667, "lng": 54.3667 },
    { "name": "Doha Corniche", "lat": 25.2760, "lng": 51.5200 },
    { "name": "Kuwait National Library", "lat": 29.3697, "lng": 47.9774 },
    { "name": "Riyadh Public Library", "lat": 24.7136, "lng": 46.6753 },
    { "name": "Amman City Library", "lat": 31.9454, "lng": 35.9284 },
    { "name": "Beirut Central Library", "lat": 33.8938, "lng": 35.5018 },
    { "name": "Jerusalem Public Library", "lat": 31.7683, "lng": 35.2137 },
    { "name": "Istanbul Central Library", "lat": 41.0082, "lng": 28.9784 },
    { "name": "Cairo Public Library", "lat": 30.0444, "lng": 31.2357 },
    { "name": "Alexandria Library", "lat": 31.2001, "lng": 29.9187 },
    { "name": "Muscat Library", "lat": 23.6139, "lng": 58.5922 },
    { "name": "Manama Central Library", "lat": 26.2285, "lng": 50.5860 },
    { "name": "Doha Public Library", "lat": 25.2760, "lng": 51.5200 },
    { "name": "Jeddah Central Library", "lat": 21.4858, "lng": 39.1925 },
    { "name": "Tehran Library", "lat": 35.6892, "lng": 51.3890 },
    { "name": "Dubai Airport", "lat": 25.2532, "lng": 55.3657 },
    { "name": "Sharjah Central Library", "lat": 25.3474, "lng": 55.4233 },
    { "name": "Abu Dhabi Airport", "lat": 24.4327, "lng": 54.6511 },
    { "name": "Riyadh International Airport", "lat": 24.9583, "lng": 46.6981 },
    { "name": "Beirut Airport", "lat": 33.8200, "lng": 35.4886 },
    { "name": "Cairo Airport", "lat": 30.1219, "lng": 31.4062 },
    { "name": "Amman Airport", "lat": 31.7223, "lng": 35.9931 },
    { "name": "Istanbul Airport", "lat": 41.2753, "lng": 28.7519 },
    { "name": "Kuwait Airport", "lat": 29.2260, "lng": 47.9740 },
    { "name": "Dubai Marina Mall", "lat": 25.0781, "lng": 55.1352 },
    { "name": "Abu Dhabi Mall", "lat": 24.4642, "lng": 54.3777 },
    { "name": "Doha Festival City", "lat": 25.3060, "lng": 51.4457 },
    { "name": "Kuwait Tower", "lat": 29.3697, "lng": 47.9774 },
    { "name": "Jeddah Waterfront", "lat": 21.4858, "lng": 39.1925 },
    { "name": "Jerusalem Old City", "lat": 31.7683, "lng": 35.2137 },
    { "name": "Istanbul Taksim Square", "lat": 41.0369, "lng": 28.9857 },
    { "name": "Cairo Citadel", "lat": 30.0280, "lng": 31.2610 },
    { "name": "Beirut Downtown", "lat": 33.8938, "lng": 35.5018 },
    { "name": "Muscat Sultan Qaboos Grand Mosque", "lat": 23.6099, "lng": 58.5700 },
    { "name": "Manama Souq", "lat": 26.2285, "lng": 50.5860 },
    { "name": "Doha Souq Waqif", "lat": 25.2912, "lng": 51.5243 },
    { "name": "Dubai Mall Fountain", "lat": 25.1972, "lng": 55.2744 },
    { "name": "Abu Dhabi Corniche", "lat": 24.4538, "lng": 54.3773 },
    { "name": "Riyadh King Abdulaziz Library", "lat": 24.6860, "lng": 46.6761 },
    { "name": "Amman Rainbow Street", "lat": 31.9460, "lng": 35.9280 },
    { "name": "Beirut American University", "lat": 33.8918, "lng": 35.5018 },
    { "name": "Jerusalem Mahane Yehuda Market", "lat": 31.7702, "lng": 35.2263 },
    { "name": "Istanbul Galata Tower", "lat": 41.0254, "lng": 28.9744 },
    { "name": "Cairo Opera House", "lat": 30.0650, "lng": 31.3000 },
    { "name": "Alexandria Bibliotheca", "lat": 31.2156, "lng": 29.9557 },
    { "name": "Doha Al Corniche", "lat": 25.2752, "lng": 51.5276 },
    { "name": "Kuwait Grand Mosque", "lat": 29.3759, "lng": 47.9774 },
    { "name": "Jeddah Mall", "lat": 21.5541, "lng": 39.1452 },
    { "name": "Beirut Hamra Street", "lat": 33.8918, "lng": 35.5054 },
    { "name": "Muscat Old Souq", "lat": 23.6139, "lng": 58.5922 },
    { "name": "Manama Bahrain National Museum", "lat": 26.2334, "lng": 50.5808 },
    { "name": "Riyadh King Fahd Library", "lat": 24.7123, "lng": 46.6738 },
    { "name": "Amman King Hussein Park", "lat": 31.9460, "lng": 35.9100 },
    { "name": "Cape Town Waterfront", "lat": -33.9076, "lng": 18.4244 },
    { "name": "Johannesburg Nelson Mandela Square", "lat": -26.1076, "lng": 28.0532 },
    { "name": "Durban uShaka Marine World", "lat": -29.8674, "lng": 31.0219 },
    { "name": "Pretoria Union Buildings", "lat": -25.7461, "lng": 28.1881 },
    { "name": "Port Elizabeth Boardwalk", "lat": -33.9601, "lng": 25.6100 },
    { "name": "Lagos Lekki Conservation Centre", "lat": 6.4430, "lng": 3.4420 },
    { "name": "Accra Labadi Beach", "lat": 5.5493, "lng": -0.1880 },
    { "name": "Nairobi Gikambura Library", "lat": -1.3035, "lng": 36.6960 },
    { "name": "Kampala Oasis Mall", "lat": 0.3476, "lng": 32.5825 },
    { "name": "Dar es Salaam Slipway", "lat": -6.7924, "lng": 39.2083 },
    { "name": "Addis Ababa Meskel Square", "lat": 9.1450, "lng": 40.4897 },
    { "name": "Cairo Khan el-Khalili", "lat": 30.0444, "lng": 31.2357 },
    { "name": "Alexandria Corniche", "lat": 31.2156, "lng": 29.9557 },
    { "name": "Tunis Avenue Habib Bourguiba", "lat": 33.8869, "lng": 9.5375 },
    { "name": "Casablanca Morocco Mall", "lat": 33.5731, "lng": -7.5890 },
    { "name": "Rabat Agdal", "lat": 34.0209, "lng": -6.8417 },
    { "name": "Tripoli Corniche", "lat": 32.8872, "lng": 13.1913 },
    { "name": "Kinshasa Boulevard du 30 Juin", "lat": -4.3224, "lng": 15.3070 },
    { "name": "Luanda Ilha de Luanda", "lat": -8.8390, "lng": 13.2894 },
    { "name": "Maputo Praça da Independência", "lat": -25.9682, "lng": 32.5732 },
    { "name": "Harare Samora Machel Avenue", "lat": -17.8292, "lng": 31.0520 },
    { "name": "Bujumbura Place de l'Indépendance", "lat": -3.3614, "lng": 29.3594 },
    { "name": "Kigali Kigali Genocide Memorial", "lat": -1.9644, "lng": 30.1044 },
    { "name": "Dakar Place de l'Indépendance", "lat": 14.6928, "lng": -17.4467 },
    { "name": "Bamako Avenue Moussa Tavele", "lat": 12.6392, "lng": -8.0029 },
    { "name": "Abidjan Plateau", "lat": 5.3450, "lng": -4.0244 },
    { "name": "Ouagadougou Place des Cinéastes", "lat": 12.3717, "lng": -1.5191 },
    { "name": "Lomé Grand Marché", "lat": 6.1725, "lng": 1.2316 },
    { "name": "Yaoundé Mfoundi Market", "lat": 3.8480, "lng": 11.5021 },
    { "name": "N'Djamena Place de la Nation", "lat": 12.6392, "lng": 14.0096 },
    { "name": "Juba New Sudan Hotel", "lat": 4.8594, "lng": 31.5820 },
    { "name": "Gitega Place de l'Indépendance", "lat": -3.4265, "lng": 29.9306 },
    { "name": "Libreville Place du Palais", "lat": 0.4167, "lng": 9.4667 },
    { "name": "Brazzaville Place de la République", "lat": -4.2634, "lng": 15.2422 },
    { "name": "Conakry Place du 8 Novembre", "lat": 9.6411, "lng": -13.5784 },
    { "name": "Monrovia Providence Island", "lat": 6.3150, "lng": -10.8010 },
    { "name": "Freetown Siaka Stevens Street", "lat": 8.4650, "lng": -13.2310 },
    { "name": "Banjul Albert Market", "lat": 13.4546, "lng": -16.5790 },
    { "name": "Port Harcourt GRA", "lat": 4.8155, "lng": 7.0492 },
    { "name": "Lagos Lekki Phase 1", "lat": 6.4420, "lng": 3.4300 },
    { "name": "Moscow Red Square", "lat": 55.7558, "lng": 37.6173 },
    { "name": "St. Petersburg Nevsky Prospect", "lat": 59.9343, "lng": 30.3351 },
    { "name": "Novosibirsk Central Park", "lat": 55.0084, "lng": 82.9357 },
    { "name": "Yekaterinburg City Center", "lat": 56.8389, "lng": 60.6057 },
    { "name": "Kazan Bauman Street", "lat": 55.7963, "lng": 49.1064 },
    { "name": "Nizhny Novgorod Kremlin", "lat": 56.2965, "lng": 43.93 },
    { "name": "Samara Central Park", "lat": 53.1958, "lng": 50.1000 },
    { "name": "Omsk Victory Square", "lat": 54.9920, "lng": 73.3670 },
    { "name": "Chelyabinsk City Center", "lat": 55.1644, "lng": 61.4368 },
    { "name": "Rostov-on-Don Gorky Park", "lat": 47.2357, "lng": 39.7015 },
    { "name": "Volgograd Mamayev Kurgan", "lat": 48.7080, "lng": 44.5133 },
    { "name": "Vladivostok Central Square", "lat": 43.1155, "lng": 131.8828 },
    { "name": "Ufa City Park", "lat": 54.7352, "lng": 55.9919 },
    { "name": "Irkutsk Central Library", "lat": 52.2864, "lng": 104.2806 },
    { "name": "Barnaul Central Park", "lat": 53.3477, "lng": 83.7641 },
    { "name": "Krasnodar City Center", "lat": 45.0355, "lng": 38.9753 },
    { "name": "Saratov City Square", "lat": 51.5335, "lng": 46.0340 },
    { "name": "Tyumen Central Park", "lat": 57.1522, "lng": 65.5272 },
    { "name": "Kaliningrad City Center", "lat": 54.7104, "lng": 20.4522 },
    { "name": "Astrakhan City Center", "lat": 46.3512, "lng": 48.0445 },
    { "name": "Vologda Central Park", "lat": 59.2200, "lng": 39.8900 },
    { "name": "Arkhangelsk City Center", "lat": 64.5403, "lng": 40.5466 },
    { "name": "Petrozavodsk City Center", "lat": 61.7850, "lng": 34.3654 },
    { "name": "Rybinsk Central Park", "lat": 58.0490, "lng": 38.8324 },
    { "name": "Tver Central Library", "lat": 56.8584, "lng": 35.9115 },
    { "name": "Yaroslavl Central Park", "lat": 57.6261, "lng": 39.8880 },
    { "name": "Nizhnekamsk City Center", "lat": 55.6108, "lng": 51.8344 },
    { "name": "Moscow VDNH", "lat": 55.8313, "lng": 37.6058 },
    { "name": "St. Petersburg Peter and Paul Fortress", "lat": 59.9398, "lng": 30.3158 },
    { "name": "Novosibirsk Main Square", "lat": 55.0084, "lng": 82.9357 },
    { "name": "Yekaterinburg Central Square", "lat": 56.8389, "lng": 60.6057 },
    { "name": "Kazan Kazan Kremlin", "lat": 55.7963, "lng": 49.1064 },
    { "name": "Nizhny Novgorod City Center", "lat": 56.2965, "lng": 43.93 },
    { "name": "Samara Gorky Park", "lat": 53.1958, "lng": 50.1000 },
    { "name": "Omsk Central Square", "lat": 54.9920, "lng": 73.3670 },
    { "name": "Chelyabinsk Central Park", "lat": 55.1644, "lng": 61.4368 },
    { "name": "Rostov-on-Don City Square", "lat": 47.2357, "lng": 39.7015 },
    { "name": "Volgograd Central Park", "lat": 48.7080, "lng": 44.5133 },
    { "name": "Vladivostok City Center", "lat": 43.1155, "lng": 131.8828 },
    { "name": "Ufa City Center", "lat": 54.7352, "lng": 55.9919 },
    { "name": "Irkutsk City Center", "lat": 52.2864, "lng": 104.2806 },
    { "name": "Barnaul City Center", "lat": 53.3477, "lng": 83.7641 },
    { "name": "Krasnodar Central Park", "lat": 45.0355, "lng": 38.9753 },
    { "name": "Saratov Central Park", "lat": 51.5335, "lng": 46.0340 },
    { "name": "Tyumen City Center", "lat": 57.1522, "lng": 65.5272 },
    { "name": "Kaliningrad Central Park", "lat": 54.7104, "lng": 20.4522 },
    { "name": "Astrakhan Central Park", "lat": 46.3512, "lng": 48.0445 },
    { "name": "Vologda City Center", "lat": 59.2200, "lng": 39.8900 },
    { "name": "Arkhangelsk Central Park", "lat": 64.5403, "lng": 40.5466 },
    { "name": "Petrozavodsk City Center", "lat": 61.7850, "lng": 34.3654 },
    { "name": "Rybinsk City Center", "lat": 58.0490, "lng": 38.8324 },
    { "name": "Tver City Center", "lat": 56.8584, "lng": 35.9115 },
    { "name": "Yaroslavl City Center", "lat": 57.6261, "lng": 39.8880 },
    { "name": "Nizhnekamsk Central Park", "lat": 55.6108, "lng": 51.8344 },
    { "name": "Moscow Gorky Park", "lat": 55.7350, "lng": 37.6230 },
    { "name": "St. Petersburg Nevsky Prospect", "lat": 59.9343, "lng": 30.3351 },
    { "name": "Novosibirsk Central Square", "lat": 55.0084, "lng": 82.9357 },
    { "name": "Yekaterinburg City Center", "lat": 56.8389, "lng": 60.6057 }

    
]

function clearMap() {
    // Harita üzerindeki tüm katmanları temizle
    map.eachLayer(function(layer) {
        if (layer instanceof L.Marker || layer instanceof L.Circle) {
            map.removeLayer(layer);
        }
    });
}
document.getElementById('computer-btn').addEventListener('click', function() {
    clearMap();
    computerlocations.forEach(function(computerlocations) {
        L.marker([computerlocations.lat, computerlocations.lng])
            .bindPopup(computerlocations.name)
            .addTo(map);
    });
  
});
document.getElementById('wifi-btn').addEventListener('click', function() {
    clearMap();
    wifilocations.forEach(function(wifilocations) {
        L.marker([wifilocations.lat, wifilocations.lng])
            .bindPopup(wifilocations.name)
            .addTo(map);
    });
  
});

// Lokasyonlar için işaretçileri ekle


// Kullanıcı lokasyonunu göster butonuna tıklama olayını dinle
document.getElementById('locate-btn').addEventListener('click', function() {
    map.locate({setView: true, maxZoom: 16});

    // Kullanıcı lokasyonu bulunduğunda
    map.on('locationfound', function(e) {
        var radius = e.accuracy / 2;

        L.marker(e.latlng).addTo(map)
            .bindPopup("You are here").openPopup();

        L.circle(e.latlng, radius).addTo(map);
    });

    // Kullanıcı lokasyonu bulunamadığında
    map.on('locationerror', function() {
        alert("Location access denied.");
    });
});
