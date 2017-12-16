angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  
  controller: function(youTube) {
    this.list = null;
    this.video = null;
    this.api = youTube;
    this.holder = null;
    this.response = (param) => {
      this.list = param.data.items;
      this.video = param.data.items[0];
    };
    this.titleClick = (index) => {
      this.video = this.list[index];
    };
    this.api.youtubeAPI('cats', this.response);  
    this.search = (query) => {
      this.api.youtubeAPI(query, this.response);
    };
  }
});
