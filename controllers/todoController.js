todoApp.controller('TodoCtrl', 
	['$scope', "todoService",
	function($scope, todoService) {

		$scope.allItems = function() {
			return todoService.allItems();
		}

		$scope.formData = todoService.formData;

		$scope.createTodo = function(form) {
			todoService.createTodo(form);
		}
		

		$scope.deleteTodo = function(index) {
			todoService.deleteTodo(index);
		}

		$scope.clearComplete = function() {
			todoService.clearComplete();
		}
	}])