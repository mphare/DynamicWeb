function personController($scope) {
    $scope.person = {
	firstname : "first",
	lastname : "last",
    };

    $scope.fullname = function() {
	var x;
	x = $scope.person;
	return x.firstname + " - " + x.lastname;
    };
}
