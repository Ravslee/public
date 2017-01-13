var module = angular.module("DCP",['firebase','ngRoute']);






module.controller('blog',function($firebaseObject){
   var self = this;
    const rootRef = firebase.database().ref().child('blogs');
    this.rootReference = $firebaseObject(rootRef);
    this.object= $firebaseObject(rootRef);

 this.object.$loaded().then(function(){
 console.log("loaded record");
self.show= true;
    });

    
});

