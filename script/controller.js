var module = angular.module("DCP",['firebase','ngRoute']);

module.config(
function($routeProvider){
    $routeProvider


     .when('/',{
        templateUrl:"home.html",
        controller:"blog"
    })
    
    .when('/blogs',{
        templateUrl:"blogs.html",
        
    });
   

});





module.controller('blog',function($firebaseObject,$routeParams){
   var self = this;
    const rootRef = firebase.database().ref().child('blogs');
    this.rootReference = $firebaseObject(rootRef);
    this.object= $firebaseObject(rootRef);

 this.object.$loaded().then(function(){
 console.log("loaded record");
self.show= true;
    });
this.blogId= $routeParams.blogId;
this.headline= $routeParams.headline;
    
});