todoApp.filter("filterCompletedTasks", function() {

	return function(collection, toggle) {

		if (!toggle) {
			return collection;
		}
		var filteredCollection = [];

		angular.forEach(collection, function(item) {
			if (item.completed === false) {

				filteredCollection.push(item);
			}
		})	

		return filteredCollection;
	}
})