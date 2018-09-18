(function(exports) {
  'use strict';

  //initialize the app
  var settings = {
    Model: JSONMediaModel,
    PlayerView: PlayerView,
    PlaylistView: PlaylistPlayerView,
    dataURL: './assets/sampleData.json',
    // dataURL: './assets/genericMediaData.json',
    entitlement: true,
    showSearch: true,
    displayButtons: false,
    autoPlay: false
  };

  exports.app = new App(settings);
})(window);
