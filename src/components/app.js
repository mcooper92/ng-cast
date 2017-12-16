angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  
  controller: function(youTube) {
    this.list = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
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
    console.log(this.list);
  
    this.search = (query) => {
      this.api.youtubeAPI(query, this.response);
    };
  }
});
