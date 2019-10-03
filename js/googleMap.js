function initMap() {
            
    //--------------------- GENERAL ---------------------//

    
    //map options
    const options = {
        zoom: 13,
        center: {lat: 48.883536, lng: 2.341302 } //Paris position
    }
    
    //create the new map object
    const map = new google.maps.Map(document.getElementById('map'), options);


    //addMarker function
    function addMarker(props){
        const marker = new google.maps.Marker({
        position: props.coords, //custom coordinates
        map : map, //integrated to what map ?
        icon: props.iconImage //custom icon
        });

        if(props.iconImage){
            marker.setIcon(props.iconImage);
        }

        if(props.content){
            const infoWindow = new google.maps.InfoWindow({
                content: props.content //custom infoWindow
            });

            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }


    //--------------------- SPECIFIC ---------------------//

    //custom-icons
    const iconObubble = {
        url: "./img-obubble/obubble.png", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    const iconMoulinRouge = {
        url: "./img-obubble/moulinRouge.jpeg", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    const iconMontmartre = {
        url: "./img-obubble/icon-montmartre.png", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };


    //final array of markers
    const markers = [
        {
        coords:{lat: 48.883536, lng: 2.341302 }, //obubble
        iconImage: iconObubble,
        content: '<p>Obubble Shap</p>'
        },
        {
        coords:{lat: 48.884129, lng: 2.332400 }, // moulinRouge
        iconImage: iconMoulinRouge,
        content: '<p>Moulin Rouge</p>'                },
        {
        coords:{lat: 48.886452, lng: 2.343121 }, // Scoeur
        iconImage: iconMontmartre,
        content: '<p>Montmarte</p>'                    }
    ];

    addMarker(markers[0]);
    for(let i = 0; i < markers.length;i++){
        addMarker(markers[i]);
    }
    
}

