var gallery = {
	images: [
		{
			"path": "images/cat.jpg",
			"name": "cat",
			"description": "The best cat ever",
			"date": "2014-07-21T09:05:34.540Z"
		},
		{
			"path": "images/dog.jpg",
			"name": "dog",
			"description": "The best dof ever",
			"date": "2014-07-21T09:06:05.544Z"
		},
		{
			"path": "images/git.jpg",
			"name": "giraffe",
			"description": "",
			"date": "2014-07-21T09:07:24.187Z"
		},
		{
			"path": "images/pic.jpg",
			"name": "dinosaur",
			"description": "The best dinosaur ever",
			"date": "2014-07-21T09:07:47.683Z"
		}
	]
};

var len = gallery.images.length;

function Gallery(obj){

	this.objectCustom =  obj;
	this.len = obj.images.length;

	this.showPictare = function(){
		for(i = 0; i < this.len; i++){
			console.log(this.objectCustom.images[i].name);
		}
	}


	this.editPictare = function(path, name, description, date, index){
		this.objectCustom.images[index].name = name;
		this.objectCustom.images[index].path = path;
		this.objectCustom.images[index].description = description;
		this.objectCustom.images[index].date = date;
	}

	this.deletePictare = function(index){
		this.objectCustom.images.splice(index, 1);;
		this.len = obj.images.length;

	}

	this.addPictare = function(name, path, description, date){
		var temp = 	{
			"path": String(path),
			"name": String(name),
			"description": String(description),
			"date": String(date)
		}
		this.objectCustom.images.push(temp);
		this.len = obj.images.length;
	}


	this.checkEmpty = function(){
		for(var i = 0; i < this.len; i++){
			if(this.objectCustom.images[i].description === "")
			{
				console.log("You have empty value " + String(this.objectCustom.images[i].name));
			}
		}

	}

	this.filteredValue = function(){
		var Arr = this.objectCustom.images.filter(isFilter);

		function isFilter(check) {
 				return check['description'] != "";
 		}

 		for(var i = 0; i < Arr.length; i++){
			console.log(Arr[i].name);
		}
	}


	this.sort = function(){
		function compareNumber(a, b) {
  			if (a.name > b.name) return 1;
  			if (a.name < b.name) return -1;
		}
		this.objectCustom.images.sort(compareNumber);
	}

	this.serialize = function(){
	 var tempString = JSON.stringify(this.objectCustom, function(key, value) {
	 	  if (key == 'path') return undefined;
	 	  if (key == 'date') return undefined;
	 	  if (key == 'description') return undefined;
	 	  return value;
	 	});
	 console.log(tempString);
	}

}

var galFunctions = new Gallery(gallery),
	galOther = new Gallery(gallery);

galFunctions.showPictare.call(galOther);
galFunctions.showPictare();

// galFunctions.editPictare("qqq","qqq","qqq","qqqq",1);
// galFunctions.deletePictare(1);
// galFunctions.addPictare("lll","lll","lll","lll");
// galFunctions.showPictare();
// galFunctions.checkEmpty();
// galFunctions.filteredValue();

//galFunctions.sort();
//galFunctions.showPictare();
galFunctions.serialize();
