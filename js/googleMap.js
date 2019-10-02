function initMap() {
    // The location of Obubble
    var obubblePosition = { lat: 48.883536, lng: 2.341302 };
    var moulinRougePosition = { lat: 48.884129, lng: 2.332400 };
    var montmartrePosition = { lat: 48.886452, lng: 2.343121 };

    // The map, centered at obubblePosition
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 13, center: obubblePosition });


    var iconObubble = {
        url: "../img-obubble/obubble.png", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    var iconMoulinRouge = {
        url: "../img-obubble/moulinRouge.jpeg", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    var iconMontmartre = {
        url: "../img-obubble/icon-montmartre.png", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    

    // The marker, positioned at obubblePosition
    var marker = new google.maps.Marker({
        position: obubblePosition,
        map: map,
        icon: iconObubble
    });
    
    var marker = new google.maps.Marker({
        position: moulinRougePosition,
        map: map,
        icon: iconMoulinRouge
    });
    
    var marker = new google.maps.Marker({
        position: montmartrePosition,
        map: map,
        icon: iconMontmartre
    });
    



    var infoWindow = new google.maps.InfoWindow({
        content: '<p>Obubble Shop<p/>'
    })

    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });
}

