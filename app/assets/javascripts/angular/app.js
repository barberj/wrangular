angular.module('flapperNews', [])
  .controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
    $scope.posts = posts.posts;

    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      if(!$scope.link || $scope.link === '') { return; }

      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        link: $scope.link
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    };
  }])
  .factory('posts', [function(){
    var o = {
      posts: [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
      ]
    };
    return o;
  }]);
