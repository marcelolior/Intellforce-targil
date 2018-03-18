//survey.js
 
//var surveyApp = angular.module("surveyApp", []);
var surveyApp = angular.module("surveyApp", ['ui.bootstrap']); //support the popup open function

//surveyApp.controller("SurveyController" , function($scope){
surveyApp.controller("SurveyController" , ['$scope', '$modal', function($scope, $modal){
	
	$scope.disableNext = false;
	$scope.totalQuestions = 5;
	$scope.index = 0;
	$scope.question = {};
	$scope.questionList = [
		{"text":"Question 1 - Bla Bla Bla ... ?", "answer":"", "options":["Q1 - option 1","Q1 - option 2","Q1 - option 3","Q1 - option 4"], "image":"images/image1.jpg" },
		{"text":"Question 2 - Bla Bla Bla ... ?", "answer":"", "options":["Q2 - option 1","Q2 - option 2","Q2 - option 3","Q2 - option 4"], "image":"images/image2.jpg" },
		{"text":"Question 3 - Bla Bla Bla ... ?", "answer":"", "options":["Q3 - option 1","Q3 - option 2","Q3 - option 3","Q3 - option 4"], "image":"images/image3.jpg" },
		{"text":"Question 4 - Bla Bla Bla ... ?", "answer":"", "options":["Q4 - option 1","Q4 - option 2","Q4 - option 3","Q4 - option 4"], "image":"images/image4.jpg" },
		{"text":"Question 5 - Bla Bla Bla ... ?", "answer":"", "options":["Q5 - option 1","Q5 - option 2","Q5 - option 3","Q5 - option 4"], "image":"images/image5.jpg" }
				   ];
	
	$scope.nextQuestion = function(){  
		
		if ($scope.question!= undefined){
			console.log("Question:"+$scope.index + " - answer: " + $scope.question.answer);
		}
		
		//if it's the last question calls finish()
		if ($scope.index == $scope.totalQuestions){
			$scope.finish();
			return;
		}
		//updates the question
		$scope.question = $scope.questionList[$scope.index];
		
		//pre-select the 1st option
		$scope.question.answer=$scope.question.options[0];
		
 		$scope.index++;
 		
 		//disables Next btn in case it's the last question 
 		if ($scope.index == $scope.totalQuestions){
 			$scope.disableNext = true; //not working		
 		}
	}
	
	$scope.finish = function(){
	    //alert("Thank you");
		$scope.open();
		
	}
	
	//opens the popup window
	$scope.open = function() {
		console.log('opening pop up');
		var modalInstance = $modal.open({
		templateUrl: 'popupThankYou.html',
		controller: 'PopupController',
		});
	}
	
	//onload, gets the first question
	$scope.nextQuestion();
//});
}]);

//separated controller in order to close the popup
surveyApp.controller('PopupController', ['$scope','$modalInstance',function ($scope, $modalInstance) {
$scope.close = function () {
$modalInstance.dismiss('cancel');
};
}]);

