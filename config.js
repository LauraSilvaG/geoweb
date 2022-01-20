var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibGF1cmFzaWx2YWciLCJhIjoiY2t5YnJjbXRqMDB5MTJ2cm1naGdrYmdicSJ9.-s8RTyx4MLl6pxwSXKpPnA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Volcanes',
    subtitle: 'Los principales volcanes activos del mundo',
    byline: 'M2B ',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'volcan1',
            alignment: 'left',
            hidden: false,
            title: 'Eyjafjallajökull, Islandia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Eyjafjallaj%C3%B6kull_first_crater_20100329.jpg',
            description: 'También conocido como Eyjafjöll,2​ o Eyjafjalla,3​ es un volcán situado al norte de Skógar, en la región de Suðurland, al sur de Islandia.4​ Tiene entre 1651 m y 1666 m de altitud,​ y ha estado moderadamente activo en los últimos 8000 años.',
            location: {
                center: [-19.62, 63.63],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }, {
            id: 'volcan2',
            alignment: 'right',
            hidden: false,
            title: 'Monte Vesubio, Italia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
            location: {
                center: [14.42555555, 40.82138888],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        
        }, {
            id: 'volcan3',
            alignment: 'left',
            hidden: false,
            title: 'Cumbre Vieja, La Palma',
            image: 'https://static.dw.com/image/59234760_303.jpg',
            description: 'La erupción volcánica de La Palma de 2021 se inició el 19 de septiembre en el paraje de Cabeza de Vaca, cercano a la localidad de El Paraíso del municipio de El Paso, en la isla española de La Palma. Es una erupción fisural estromboliana que duró 85 días y ocasionó unos 850 millonres de euros en daños.',
            location: {
                center: [-17.866111, 28.612778],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
    mapAnimation: 'flyTo',
        rotateAnimation: true,
            callback: '',
                onChapterEnter: [],
                    onChapterExit: []
        }
        
    ]
};
