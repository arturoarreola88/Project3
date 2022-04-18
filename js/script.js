function initMap() {
    const chicago = { lat: 41.83480515321117, lng: -87.62700590000001 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: chicago,
      mapTypeId: "terrain",
    });
  
    var icon = {
      url: "https://upload.wikimedia.org/wikipedia/chttps://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/El_track_tunnel_at_Illinois_Institute_of_Technology%2C_Chicago.jpg/1125px-El_track_tunnel_at_Illinois_Institute_of_Technology%2C_Chicago.jpg?20120928022035ommons/thumb/8/82/Chicago-style_hot_dog_2.jpg/1200px-Chicago-style_hot_dog_2.jpg",
      scaledSize: new google.maps.Size(100, 100),
    };
  
    const marker = new google.maps.Marker({
      position: chicago,
      map: map,
      icon: icon,
    });
    chicagoPath.setMap(map);
  
  } 