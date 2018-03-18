//registration.js
 
var myApp = angular.module("myApp", []);
myApp.service("ContactService" , function(){
 var uid = 1;
 var contacts = [{
 'id' : 0,
 'firstName' : 'Steve',
 'lastName' : 'John',
 'email' : 'john@gmail.com',
 'tel' : '911-91-199-999'}]; 
 
// Save Service for sving new contact and saving existing edited contact.
 this.save = function(contact)  
 {
 if(contact.id == null || contact.id == angular.undefined)                       
 {
 contact.id = uid++;
 console.log("Added the contact id:"+contact.id + " - name:"+contact.firstName);
 contacts.push(contact);
 //redireciona para a pagina da pesquisa
 window.location.href="survey.html";
 }
 };
 
});
 

 
 //Controller area .....
 
myApp.controller("ContactController" , function($scope , ContactService){
    console.clear();
    
    $scope.ifSearchUser = false;
    $scope.title ="List of Users";
    
	 $scope.saveContact = function()
 {
   if($scope.newcontact == null || $scope.newcontact == angular.undefined)
   return;
 ContactService.save($scope.newcontact);
 $scope.newcontact = {};
 }; 

 
 
});