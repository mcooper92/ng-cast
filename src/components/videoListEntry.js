angular.module('video-player')
.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html',
  bindings: {
    vid: '<',
    titleClick: '<',
    index: '<'
  },
  controller: function() {
    
  }
}

);
