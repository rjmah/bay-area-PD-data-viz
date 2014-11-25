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

    //add legend
    map.legendControl.addLegend(document.getElementById('legend').innerHTML);

    //grabs city JSON data
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "geoData.json", true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var geoJson = JSON.parse(xmlhttp.responseText);
            geoDataCallback(geoJson);
        }
    }

    xmlhttp.send();

    //this callback should get called *after* the json data loads.
    function geoDataCallback(data) {
        var geoJson = L.geoJson(data, {
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
                        '<b>' + feature.properties.title +'<\/b>'+
                    '<\/div>' +
                    feature.properties.pop + ' '+ 'residents' + '<br \/>' +
                    feature.properties.copcount +' police officers' + '<br \/>' +
                    'Police dept. is' + ' ' + feature.properties.pctmorewhite +
                    ' more white than residents.'
                    + '<iframe src="./' + feature.properties.chart  + '" ' + 'width="300" height="70" scrolling="no" frameborder="0"></iframe>'
                    );
                }
            }
        }).addTo(map);
    }

}