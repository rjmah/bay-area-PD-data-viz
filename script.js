window.onload = function() {


L.mapbox.accessToken = 'pk.eyJ1Ijoia2FyaSIsImEiOiJMa0lZd01RIn0.MYzIAmgnaEHBBeQQsXUquw';


// initialize the map
var map = L.mapbox.map('map').setView([37.7, -122.1], 10);

// load a tile layer
L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20
}).addTo(map);


  // load GeoJSON cities
var geoJsonData = {
  type: "FeatureCollection",
  features: [
    {
      "type": "Feature",
      "properties": {"title": "Alameda",
      "chart": "alameda.html",
      "pop": "73,812",
       "copcount": 99,
       "pctmorewhite": "23%",
    "color": "#74c476"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.24555969238281,
          37.76718664006672
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Antioch",
      "chart": "antioch.html",
      "pop": "102,372",
      "copcount": 116,
       "pctmorewhite": "41%",
    "color": "#006d2c"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.80679321289062,
          38.005090490153805
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Berkeley",
      "chart": "berkeley.html",
      "pop": "112,580",
      "copcount": 181,
      "pctmorewhite": "1%",
    "color": "#edf8e9"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.27371215820312,
          37.87160128507345
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Concord",
      "chart": "concord.html",
      "pop": "122,067",
      "copcount": 154,
      "pctmorewhite": "31%",
    "color": "#31a354"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.02926635742188,
          37.97776255232763
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Daly City",
      "chart": "dalycity.html",
      "pop": "101,123",
      "copcount": 108,
      "pctmorewhite": "52%",
    "color": "#006d2c"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.46253967285156,
          37.7071832174446
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Fairfield",
      "chart": "fairfield.html",
       "pop": "105,321",
      "copcount": 124,
       "pctmorewhite": "45%",
    "color": "#006d2c"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.039,
          38.249
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Hayward",
        "chart": "hayward.html",
        "pop": "144,186",
        "copcount": 174,
        "pctmorewhite": "40%",
        "color":  "#006d2c"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.080,
          37.668
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Vacaville",
      "chart": "vacaville.html",
       "pop": "92,428",
      "copcount": 108,
      "pctmorewhite": "13%",
    "color": "#bae4b3"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.98669433593749,
          38.35619568115639
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Fremont",
      "chart": "fremont.html",
       "pop": "214,089",
      "copcount": 185,
      "pctmorewhite": "48%",
    "color": "#006d2c"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.98600769042967,
          37.54838821333399
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Sunnyvale",
      "chart": "sunnyvale.html",
       "pop": "140,081",
      "copcount": 207,
      "pctmorewhite": "36%",
    "color": "#31a354"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.03887939453125,
          37.368520071054576
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "San Jose",
      "chart": "sanjose.html",
       "pop": "945,942",
      "copcount": 1386,
      "pctmorewhite": "29%",
    "color": "#74c476"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.8816375732422,
          37.34341319857338
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Pleasanton",
      "chart": "pleasanton.html",
       "pop": "70,285",
      "copcount":  87,
       "pctmorewhite": "32%",
    "color": "#31a354"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.87545776367186,
          37.66262436242685
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Lodi",
      "chart": "lodi.html",
       "pop": "62,134",
      "copcount": 74,
      "pctmorewhite": "34%",
    "color": "#31a354"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.25885009765625,
          38.12591462924154
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Stockton",
      "chart": "stockton.html",
       "pop": "291,707",
      "copcount": 407,
      "pctmorewhite": "46%",
    "color": "#006d2c"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.29592895507812,
          37.96152331396614
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Santa Clara",
      "chart": "santaclara.html",
       "pop": "116,468",
      "copcount": 137,
      "pctmorewhite": "34%",
    "color": "#31a354"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.95545196533203,
          37.35460316823004
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Santa Rosa",
      "chart": "santarosa.html",
       "pop": "167,815",
      "copcount": 175,
     "pctmorewhite": "26%",
    "color": "#74c476"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.71041870117188,
          38.4428334985915
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Petaluma",
      "chart": "petaluma.html",
       "pop": "57,941",
      "copcount": 74,
      "pctmorewhite": "21%",
    "color": "#74c476"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.63214111328125,
          38.23062921938795
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Palo Alto",
      "chart": "paloalto.html",
       "pop": "64,403",
      "copcount": 87,
      "pctmorewhite": "9%",
    "color": "#edf8e9"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1628189086914,
          37.44133701518176
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Redwood City",
      "chart": "redwoodcity.html",
       "pop": "76,815",
      "copcount": 91,
      "pctmorewhite": "33%",
    "color": "#31a354"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.23800659179686,
          37.48575600784826
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Modesto",
      "chart": "modesto.html",
       "pop": "201,165",
      "copcount": 277,
      "pctmorewhite": "29%",
    "color": "#74c476"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.99655151367188,
          37.645771969647
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Oakland",
      "chart": "oakland.html",
       "pop":" 390,724",
      "copcount": 725,
      "pctmorewhite": "19%",
    "color": "#bae4b3"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2723388671875,
          37.80381638220768
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Richmond",
      "chart": "richmond.html",
       "pop": "103,701",
      "copcount":  161,
      "pctmorewhite": "30%",
    "color": "#31a354"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.34752655029297,
          37.935262281661146
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Salinas",
      "chart": "salinas.html",
       "pop": "150,441",
      "copcount": 169,
      "pctmorewhite": "51%",
    "color": "#006d2c"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.65710449218749,
          36.68163606561519
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "San Francisco",
      "chart": "sanfrancisco.html",
       "pop": "805,235",
      "copcount": 2303,
       "pctmorewhite": "12%",
      "color": "#bae4b3"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.43438720703125,
          37.78753873820529
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Watsonville",
      "chart": "watsonville.html",
       "pop": "51,199",
       "copcount": 60,
       "pctmorewhite": "48%",
    "color": "#006d2c"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.75460815429686,
          36.91256828285194
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Vallejo",
      "chart": "vallejo.html",
       "pop": "115,942",
      "copcount": 146,
      "pctmorewhite": "47%",
    "color": "#006d2c"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2562026977539,
          38.103494808874565
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "San Rafael",
      "chart": "sanrafael.html",
       "pop": "57,713",
      "copcount": 73,
      "pctmorewhite": "26%",
    "color": "#74c476"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.52983093261719,
          37.97126728803284
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"title": "Walnut Creek",
      "chart": "walnutcreek.html",
       "pop": "64,173",
      "copcount": 68,
      "pctmorewhite": "16%",
    "color": "#bae4b3"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.06222534179688,
          37.906824812653596
        ]
      }
    }
  ]};


var geoJson = L.geoJson(geoJsonData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            // square root of the size of copcount
            radius: Math.sqrt(feature.properties.copcount/2),
            fillOpacity:  .8,
            fillColor: feature.properties.color,
            color: "#0e0e0e"
        })
    },
  onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.title){

                layer.bindPopup(

                '<div style="font-size:15px">' +
                    '<b>' + feature.properties.title +'<\/b>'+ '<\/div>'


                      + feature.properties.pop + ' '+ 'residents' + '<br \/>'  + feature.properties.copcount +' police officers' +
                '<br \/>' + 'Police dept. is' + ' ' + feature.properties.pctmorewhite +
                ' more white than residents.'
                +
                  '<iframe src="./' + feature.properties.chart  + '" ' + 'width="300" height="70" scrolling="no" frameborder="0"></iframe>'
                );
            }
        }

}).addTo(map);

  map.legendControl.addLegend(document.getElementById('legend').innerHTML);

}