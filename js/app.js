function refreshArtwork(artist, track) {
    $.ajax({
        url: 'http://itunes.apple.com/search',
        data: {
            term: artist + ' ' + track,
            media: 'music'
        },
        dataType: 'jsonp',
        success: function(json) {
            if(json.results.length === 0) {
                $('img[name="nowplayingimage"]').attr('src', '');
                return;
            }

            // trust the first result blindly...
            var artworkURL = json.results[0].artworkUrl100;
            $('img[name="nowplayingimage"]').attr('src', artworkURL);
            $('.artist_name').empty().append(json.results[0].artistName);
            $('.song_name').empty().append(json.results[0].trackName);
            $('.album_name').empty().append(json.results[0].collectionName);
        }
    });
}

var test = refreshArtwork('Lynyrd Skynyrd', 'the ballad of curtis loew');