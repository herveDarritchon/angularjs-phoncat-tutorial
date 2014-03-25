
var phonecatApp=angular.module('phonecatApp', []);
/*.config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }
);*/
phonecatApp.controller('PhoneListCtrl', function ($scope) {
	$scope.paragraphTitle="This is my mobile list";
	$scope.phones = [
	{'name':'Nexus S','snippet':'Fast just got faster with Nexus S.'},
	{'name':'Motorola XOOMTM with Wi- Fi','snippet':'The Next, Next Generation tablet.'},
	{'name':'MOTOROLA XOOMTM','snippet':'The Next, Next Generation tablet.'}
	];
});