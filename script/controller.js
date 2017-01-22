var module = angular.module("DCP",['firebase','ngRoute']);

module.config(
function($routeProvider){
    $routeProvider
     .when('/',{
        templateUrl:"home.html",
        controller:"blog"
    })
    .when('/content/:blogId/:headline',{
        templateUrl:"/pages/content.html",
        controller:"blog"
    });
   

});





module.controller('blog',function($firebaseObject,$routeParams){
    this.blogId= $routeParams.blogId;
this.headline= $routeParams.headline;
   var self = this;
    const rootRef = firebase.database().ref().child('blogs');
    this.rootReference = $firebaseObject(rootRef);
    this.object= $firebaseObject(rootRef);

 this.object.$loaded().then(function(){
 console.log("loaded record");
self.show= true;
    });




});


module.directive('dynFbCommentBox', function () {
    function createHTML(href, numposts, colorscheme, width) {
        return '<div class="fb-comments" ' +
                       'data-href="' + href + '" ' +
                       'data-numposts="' + numposts + '" ' +
                       'data-colorsheme="' + colorscheme + '" ' +
                       'data-width="' + width + '">' +
               '</div>';
    }


    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            attrs.$observe('pageHref', function (newValue) {
                var href        = newValue;
                var numposts    = attrs.numposts    || 5;
                var colorscheme = attrs.colorscheme || 'light';
                var width = attrs.width || '100%';
                elem.html(createHTML(href, numposts, colorscheme, width));
                FB.XFBML.parse(elem[0]);
            });
        }
    };
});