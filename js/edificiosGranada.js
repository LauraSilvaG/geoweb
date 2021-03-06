function addEdificiosCapa() {

    map.addSource("edificios_source", {
        "type": "vector",
        "url": "mapbox://laurasilvag.a8lin22g"  // Nuestro ID Tileset

    }); //fin map source
    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
        }
    });

    map.addLayer({
    "id": "edificios",
    "type": "fill-extrusion",
    "source": "edificios_source",
    "source-layer": "ed_granada-1on9vy", // Nuestro nombre Tileset
    "maxzoom": 21,
    "minzoom": 10,
    "filter": [">", "numberOfFl", 0],
    "paint": {
        "fill-extrusion-color": [
            "interpolate", ["linear"], ["number", ["get", "numberOfFl"]],
            0, "#FFFFFF",
            1, "#F4FA58",
            3, "#DF3A01",
            6, "#DF013A",
            8, "#3de6b1",
            9, "#22ecf0",
            11, "#14b1fd",
            14, "#3d73e6",
            16, "#123a8f",
            18, "#ce2f7e",
            30, "#ff4d4d"

        ],
        "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            8, 0,
            12.5, 0,
            14, ["*", 1, ["to-number", ["get", "numberOfFl"]]],
            16, ["*", 1.5, ["to-number", ["get", "numberOfFl"]]],
            20, ["*", 2, ["to-number", ["get", "numberOfFl"]]]
        ],
        "fill-extrusion-opacity": 0.9
    }
}
,"road-label"
);
}  

function filtrarEdificios(valor) {
    map.setFilter("edificios", [">", "numberOfFl", parseInt(valor)]);

    document.getElementById("altura").innerHTML = "Más de  <b>" + valor + "</b> pisos";

}//fin funcion
function verEdificios(visible) {

    if(visible==true){
        map.setLayoutProperty("edificios", "visibility", "visible");
    }else{
        map.setLayoutProperty("edificios", "visibility", "none");
    }
    }

    function addPopupToMapEdificios(nombreCapa) {

        map.on('click', function (e) {
    
            var text = "";
            var bbox = [[e.point.x - 10, e.point.y - 10], [e.point.x + 10, e.point.y + 10]];
            var features = map.queryRenderedFeatures(bbox, { layers: [nombreCapa] });
    
            if (features.length > 0) {
                for (key in features[0].properties) {
    
                    if (key == "numberOfFl") {
                        text += "<b>Numero de plantas</b>:" + features[0].properties[key] + "<br>";
                    }
                    if (key == "localId") {
                        //localId 0004702DF3800C_part1
                        //http://ovc.catastro.meh.es/OVCServWeb/OVCWcfLibres/OVCFotoFachada.svc/RecuperarFotoFachadaGet?ReferenciaCatastral=0004701DF3800C
                        //https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCListaBienes.aspx?rc1=0004701&rc2=DF3800C
    
                        var localId = features[0].properties[key];
    
                        var localIdSplit = localId.split("_"); // 0004702DF3800C  part1
                        var parte1 = localIdSplit[0].substring(0, 7);
                        var parte2 = localIdSplit[0].substring(7, localIdSplit[0].length);
                        text += "<img width=200 src=http://ovc.catastro.meh.es/OVCServWeb/OVCWcfLibres/OVCFotoFachada.svc/RecuperarFotoFachadaGet?ReferenciaCatastral=" + localId + "><br>";
                        text += "<a target=blank href=https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCListaBienes.aspx?rc1=" + parte1 + "&rc2=" + parte2 + ">Ficha</a><br>";
    
                    }
    
    
                }
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(text)
                    .addTo(map);
            }
    
        });
    
        map.on('mouseenter', nombreCapa, function () {
            map.getCanvas().style.cursor = 'pointer';
        });
    
        map.on('mouseleave', nombreCapa, function () {
            map.getCanvas().style.cursor = '';
        });
    
    }


    var animacion;
    function rotarCamara(timestamp) {

        rotacion =timestamp /100 ==360 ?0 : timestamp /100;
        map.rotateTo(rotacion, { duration: 0 });

        animacion = requestAnimationFrame(rotarCamara);
    }


    function finalRotarCamara() {

        cancelAnimationFrame(animacion);
    } 

