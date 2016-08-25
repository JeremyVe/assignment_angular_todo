todoApp.directive('todoItem', function() {

	return {
		templateUrl: 'directives/todoItem.html',
		restrict: 'A',
		scope: {
			item: "=",
			deleteTodo: "&"
		}
	}
})