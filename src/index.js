
require("leaflet_css");
require("leaflet_marker");
require("leaflet_marker_2x");
require("leaflet_marker_shadow");
leaflet = require('leaflet');
require('leaflet-ajax');
require('leaflet-curve');
//require("font-awesome-webpack");
//require('font_awesome_css');
require('drmonty-leaflet-awesome-markers');
require('drmonty_leaflet_awesome_markers_matte');
require('drmonty_leaflet_awesome_markers_matte_2x');
require('drmonty_leaflet_awesome_markers_plain');
require('drmonty_leaflet_awesome_markers_shadow');
require('drmonty_leaflet_awesome_markers_shadow_2x');
require('drmonty_leaflet_awesome_markers_soft');
require('drmonty_leaflet_awesome_markers_soft_2x');
require('drmonty_leaflet_awesome_markers_css');

//require("./sass/main.scss");
require("leaflet_css");


arc = require('arc');




//Base Maps
osm = new L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png');

streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmVydHJhbmRtZCIsImEiOiJUVlBoQy0wIn0.B1aoyioXCv1_3hzB6EBkkg', 			{
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
});
grayscale = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmVydHJhbmRtZCIsImEiOiJUVlBoQy0wIn0.B1aoyioXCv1_3hzB6EBkkg', 			{
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.light'
});

L.Icon.Default.imagePath = '/Leaflet-aka-Indiana/dist/images';
//Map
map = L.map('map', {
  //center: [43.58238046828168,3.900146484375],
  //zoom: 5
  layers : [grayscale],
  editable: true
});
var center = [43.667871610117494,3.2684326171875]
map.setView(center, 8);
//map.addLayer(markers);
baseMaps = {
    "Grayscale": grayscale,
    "Streets": streets,
    "OSM": osm
};

var titu = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          3.7683105468749996,
          44.166444664458595
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.8839111328125,
          43.51270490464819
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          4.7021484375,
          43.99676629896825
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          4.02099609375,
          43.58834891179792
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.6751708984375,
          44.138855767568785
        ]
      }
    }
  ]
}



L.geoJson(titu).addTo(map);
var path = L.curve(['M',[50.54136296522163,28.520507812500004],
                    'C',[52.214338608258224,28.564453125000004],
                        [48.45835188280866,33.57421875000001],
                        [50.680797145321655,33.83789062500001],
                    'V',[48.40003249610685],
                    'L',[47.45839225859763,31.201171875],
                        [48.40003249610685,28.564453125000004],'Z'],
                    {color:'red',fill:true}).addTo(map);

points = [[
          44.166444664458595,
          3.7683105468749996
        ],[
          43.5541270490464819,
          2.8839111328125
        ],[
          43.9969676629896825,
          4.7021484375
        ],[
          43.5883774891179792,
          4.02099609375
        ],[
          44.1387855767568785,
          2.6751708984375
        ]
      ];

points1 = [ [
          2.4609375,
          44.715513732021336
        ],     [
          -82.79296874999999,
          33.578014746143985
        ],
        [
          -1.7578125,
          51.28940590271679
        ],
        [
          20.56640625,
          52.482780222078205
        ]
      ,[
          -11.77734375,
          24.367113562651262
        ]]




for (var i = 0; i < points1.length ; i ++){
  var coord = new L.LatLng(points[i][1],points[i][0])
  var marker = new L.Marker(coord)
  marker.addTo(map);

}
function btbt2(tableau){
        var mixedTableau = [];
        tableau.forEach(function(element,index,array) {
          var valeur = element
          var suite = [...array]
          suite.splice(index,1)
          for (l in suite){
            mixedTableau.push([valeur,suite[l]]);
          }
        })

        return mixedTableau ;
      }

var array2 = btbt2(points1)
console.log(array2)

for (var i = 0; i < array2.length ; i ++){
  var coordLine = array2[i]
  console.log(coordLine);
  var poly = L.polyline(coordLine)
  /*for (var i = 0; i < coordLine.length ; i ++){
    //console.log();
  var coord = new L.LatLng(coordLine[i][1],coordLine[i][0])
  poly.addLatLng(coord)
}*/
  //poly.addTo(map);
  var from_arc_coord = {
    x: coordLine[0][0],
    y: coordLine[0][1]
  };
  var to_arc_coord = {
    x: coordLine[1][0],
    y:coordLine[1][1]
  };
  var gc = new arc.GreatCircle(from_arc_coord, to_arc_coord, {'name': ''});
  var line = gc.Arc(150); // specify number of segments, higher = smoother

  polyL = L.geoJson(line.json()).addTo(map);
  //L.marker(from_coord).addTo(map);//.bindLabel(from.iata, { noHide: true }).addTo(map);
  //L.marker(to_coord).addTo(map);
}


buildSegment = function (from, to) {
  // build Leaflet coordinates from GPS
  var from_coord = new L.LatLng(from.lat, from.lng);
  var to_coord = new L.LatLng(to.lat, to.lng);

  // iron out longitude wrapping
  /*if (Math.abs(to_coord.lng - to_coord.lng) > 180) {
    to_coord = to_coord.wrap(179, -179);
  }*/

  // build arc coordinates
  //var from_arc_coord = new arc.Coord(from_coord.lng, from_coord.lat);
  //var to_arc_coord = new arc.Coord(to_coord.lng, to_coord.lat);

  var from_arc_coord = {
    x: from_coord.lng,
    y: from_coord.lat
  };
  var to_arc_coord = {
    x: to_coord.lng,
    y:to_coord.lat
  };

  // render our Great Circle
  var gc = new arc.GreatCircle(from_arc_coord, to_arc_coord, {'name': ''});
  var line = gc.Arc(150); // specify number of segments, higher = smoother

  polyL = L.geoJson(line.json()).addTo(map);

  /*
  // build Leaflet-friendly points array
  var points = [];

  for (var i = 0; i < line.geometries[0].coords.length; i++) {
    points.push(new L.LatLng(line.geometries[0].coords[i][1], line.geometries[0].coords[i][0]));
  }

  // draw polyline with blue color
  var polyline = new L.Polyline(points, {
    color: 'blue',
    weight: 2,
    opacity: 1,
    smoothFactor: 1
  }).addTo(map);
 */
  // add markers showing the airport codes
  L.marker(from_coord).addTo(map);//.bindLabel(from.iata, { noHide: true }).addTo(map);
  L.marker(to_coord).addTo(map);//.bindLabel(to.iata, { noHide: true }).addTo(map);
};

data = [
{
    "from":{"city":"Budapest","iata":"BUD","lat":"47.436933000000","lng":"19.25559200000000"},
    "to":{"city":"Warsaw","iata":"WAW","lat":"52.165750000000","lng":"20.96712200000000"}
},
{
    "from":{"city":"Warsaw","iata":"WAW","lat":"52.165750000000","lng":"20.96712200000000"},
    "to":{"city":"Chicago","iata":"ORD","lat":"41.978603000000","lng":"-87.90484200000000"}
},
{
    "from":{"city":"Chicago","iata":"ORD","lat":"41.978603000000","lng":"-87.90484200000000"},
    "to":{"city":"San Francisco","iata":"SFO","lat":"37.618972000000","lng":"-122.37488900000000"}
}
];

for(i in data) {
        buildSegment(data[i].from, data[i].to);
      }

  // add segments
/*     for(i in data.segments) {
       buildSegment(data.segments[i].from, data.segments.to);
     }*/
/*
     for (var i = 0; i < array2.length ; i ++){
       var coordLine = array2[i]
        //buildSegment(array2[i][0],array2[i][1]);
        buildSegment(  [
                    44.166444664458595,
                    3.7683105468749996
                  ],[
                    43.5541270490464819,
                    2.8839111328125
                  ]);*/
//     }


/*var adherents = L.geoJson.ajax("data/adherents_lr.geojson",{
  //onEachFeature:onEachFeature,
  //style:myStyle


    pointToLayer: function (feature, latlng) {
      //console.log(feature.properties.type);
      var icone = feature.properties.type == 'carrier'?'cog':
        feature.properties.type == 'Etat'?'flag':
        feature.properties.type == 'Collectivité'?'institution':
        feature.properties.type == 'Industriel'?'industry':
        feature.properties.type == 'Association'?'group':
        feature.properties.type == 'Particulier'?'male':'cog';

      var option = {
        //draggable : true,
        icon: L.AwesomeMarkers.icon({
          icon: icone,
          markerColor: 'blue',
          prefix: 'fa',
          //extraClasses: 'fa-fw',//'fa-rotate-90',
          //spin : true,
          iconColor: 'white',
          popupAnchor: [2, -42]
          })
        };
        //var table = createPopupEditable(feature)
          //layer.bindPopup(table);
      //points.push(feature.properties["fa-icon"]);
      return  new L.marker(latlng,option)
      .bindPopup(feature.properties['nom'])
      //.bindPopup(feature.properties.name,{});
      //.bindPopup(popupMaj(feature.properties));
      }
      //,
    //onEachFeature: onEachFeature
    //}


}
).on('data:loaded',function() {
    //markers.addLayer(adherents);
    this.addTo(map);
}
);*/



var overlayMaps = {
          //"communes" : communes,
          //"comcom" : comcom,
          //'WFSline' : WFSline,
          //"Région" : region
          //"points" : points
};

//utilisation normale du controle layer
var lc=	L.control.layers(baseMaps, overlayMaps,{
  //collapsed:false
  });
lc.addTo(map);
