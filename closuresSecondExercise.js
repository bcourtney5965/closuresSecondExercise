function printNames() {
	var counter = 0;
	var names = ["Williams", "Cindy", "Maureen", "Brenden"];
	return function() {
		var curName = names[counter]
		counter++;
		return curName;
	}
}

var nextName = printNames();
nextName();