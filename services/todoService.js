todoApp.factory("todoService", function() {

	var obj = {};

	var _items = [
		{
			text: "Get Groceries from the store",
			dueDate: new Date(),
			completed: false
		},
		{
			text: "Get Kids to school",
			dueDate: new Date(),
			completed: false
		},
		{
			text: "Do some Sports",
			dueDate: new Date(),
			completed: false
		}
		];

	obj.allItems = function() {
		return _items;
	}


	obj.formData = {};

	obj.createTodo = function(form) {
			var newItem = {};
			newItem.text = obj.formData.text;
			newItem.dueDate = obj.formData.dueDate;
			newItem.completed = false;

			_items.push(newItem);

			obj.formData.text = '';
			obj.formData.dueDate = '';

			form.$setPristine();
			form.$setUntouched();
		}

	obj.deleteTodo = function(index) {
			_items.splice(index, 1);
		}

	obj.clearComplete = function() {

			for (var i = _items.length -1;  i >= 0; i--) {
				var item = _items[i];

				if (item.completed === true) {
					obj.deleteTodo(i);
				}	
			}
		}

	return obj;
})