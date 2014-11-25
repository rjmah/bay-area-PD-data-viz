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

    //generic ajax function
    function ajaxCall(url, callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(JSON.parse(xmlhttp.responseText));
            }
        }
        xmlhttp.send();
    }

    var d3Data = {};
    //callback hell!!! this is why you use jQuery
    ajaxCall("d3Data.json",
        function(data) {
            d3Data = data;
            ajaxCall("geoData.json",
                function(data) {
                    geoDataCallback(data);
                })
        });

    //this callback should get called *after* the json data loads.
    function geoDataCallback(data) {
        var layer = L.geoJson(data, {
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
                    feature.properties.pop + ' residents' + '<br \/>' +
                    feature.properties.copcount +' police officers' + '<br \/>' +
                    'Police dept. is ' + feature.properties.pctmorewhite +
                    ' more white than residents.'
                    + '<div class="d3-graph"></div>'
                    );
                }
            }
        }).addTo(map);
    }

    //draw d3 graph when popup is opened
    map.on('popupopen', function(e) {
        var city = e.popup._source.feature.properties.title.toUpperCase();
        drawGraph(city);
    });

    function drawGraph(city) {
        var margins = {
            top: 12,
            left: 70,
            right: 24,
            bottom: 12
        },
        legendPanel = {
            width: 0
        },
        width = 300 - margins.left - margins.right,
        height = 50,
        dataset = d3Data[city],
        series = dataset.map(function (d) {
            return d.name;
        }),
        dataset = dataset.map(function (d) {
            return d.data.map(function (o, i) {
                // Structure it so that your numeric
                // axis (the stacked amount) is y
                return {
                    y: o.pct,
                    x: o.group
                };
            });
        }),
        stack = d3.layout.stack();

        stack(dataset);

        var dataset = dataset.map(function (group) {
            return group.map(function (d) {
                // Invert the x and y values, and y0 becomes x0
                return {
                    x: d.y,
                    y: d.x,
                    x0: d.y0
                };
            });
        }),
        svg = d3.select('.d3-graph')
            .append('svg')
            .attr('width', width + margins.left + margins.right + legendPanel.width)
            .attr('height', height + margins.top + margins.bottom)
            .append('g')
            .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')'),
        xMax = d3.max(dataset, function (group) {
            return d3.max(group, function (d) {
                return d.x + d.x0;
            });
        }),
        xScale = d3.scale.linear()
            .domain([0, xMax])
            .range([0, width]),
        groups = dataset[0].map(function (d) {
            return d.y;
        }),
        yScale = d3.scale.ordinal()
            .domain(groups)
            .rangeRoundBands([0, height], .1),
        xAxis = d3.svg.axis()
            .scale(xScale)
            .orient('bottom').ticks(0),
        yAxis = d3.svg.axis()
            .scale(yScale)
            .orient('left'),
        colours = d3.scale.category10(),
        groups = svg.selectAll('g')
            .data(dataset)
            .enter()
            .append('g')
            .style('fill', function (d, i) {
            return colours(i);
        }),
        rects = groups.selectAll('rect')
            .data(function (d) {
            return d;
        })
            .enter()
            .append('rect')
            .attr('x', function (d) {
            return xScale(d.x0);
        })
            .attr('y', function (d, i) {
            return yScale(d.y);
        })
            .attr('height', function (d) {
            return yScale.rangeBand();
        })
            .attr('width', function (d) {
            return xScale(d.x);
        })
        .on('mouseover', function (d) {
            var xPos = parseFloat(d3.select(this).attr('x')) / 2 + width / 2;
            var yPos = parseFloat(d3.select(this).attr('y')) + yScale.rangeBand() / 2;

            d3.select('#tooltip')
                .style('left', xPos + 'px')
                .style('top', yPos + 'px')
                .select('#value')
                .text(d.x + '%');

            d3.select('#tooltip').classed('hidden', false);
        })
        .on('mouseout', function () {
            d3.select('#tooltip').classed('hidden', true);
        })

        svg.append('g')
            .attr('class', 'axis')
            .call(yAxis);

        svg.append('rect')
            .attr('fill', 'white')
            .attr('width', 160)
            .attr('height', 30 * dataset.length)
            .attr('x', width + margins.left)
            .attr('y', 0);

        series.forEach(function (s, i) {
            svg.append('text')
                .attr('fill', 'black')
                .attr('x', width + margins.left + 8)
                .attr('y', i * 24 + 24)
                .text(s);
            svg.append('rect')
                .attr('fill', colours(i))
                .attr('width', 60)
                .attr('height', 20)
                .attr('x', width + margins.left + 90)
                .attr('y', i * 24 + 6);
        });
    }

}