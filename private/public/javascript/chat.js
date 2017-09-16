var app=angular.module('chatApp',['ngMaterial']);
app.controller('chatController',function($scope){

$scope.messages = [
    {
       sender:"BOT",
       text: "WHAT CAN I DO FOR U??",
       time:"1:30pm"
    },
    {
      sender:"user",
       text: "Who is Sachin Tendulkar?",
       time:"1:32pm"
    },
    {	 sender:"BOT",
       text: "God of Cricket!!!",
       time:"1:33pm"
    }];

var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);
};
});