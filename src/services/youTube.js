angular.module('video-player')
.service('youTube', function($http) {
  this.youtubeAPI = function(query, callback) { 
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: window.YOUTUBE_API_KEY, 
        q: query,
        max: '10',
        part: 'snippet'
      },
      type: 'object'
    }).then(function successCallback(response) {
      callback(response);
      
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });  
  };
});
