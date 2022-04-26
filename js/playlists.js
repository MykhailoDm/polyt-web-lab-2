fetch('http://127.0.0.1:5000/playlist')
  .then(function(response) {return response.json()})
  .then(function(data) {
      data.forEach(function(element) {
        var tag = document.createElement("p");
        var text = document.createTextNode("Playlist name: " +  element.playlist_name);
        tag.appendChild(text);
        var element = document.getElementById("playlists");
        element.appendChild(tag); 
      });
    });