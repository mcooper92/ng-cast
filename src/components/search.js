angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    searchClick: '<'
  },
   
  controller: function(){
    this.input = '';
  }
});
