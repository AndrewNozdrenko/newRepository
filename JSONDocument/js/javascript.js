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

var len = gallery.images.length,
    parentElem = document.getElementById("element");

function removeChild(node) {
var children = node.childNodes
    while(children.length) {
        node.removeChild(children[0])
    }
}


function showGallery(){
	var newDiv,
		icount = 0;
		
	removeChild(parentElem);
	parentElem.style.height = len*500 + "px";
	for(var i = 0; i < len; i++){
		for(key in gallery.images[i]){
			if(key === 'path')
			{
				newDiv = document.createElement('img');
				newDiv.src = gallery.images[i][key];
				newDiv.id = "res" + icount++;
				newDiv.setAttribute("class", "res");
				parentElem.appendChild(newDiv);
			}
			else
			{
				newDiv = document.createElement('span');
				newDiv.innerHTML = gallery.images[i][key] + "<br>";
				newDiv.id = "res" + icount++;
				newDiv.setAttribute("class", "res");
				parentElem.appendChild(newDiv);
			}
		}
	}
}

showGallery();

var buttonForward = document.getElementById("forwardButton"), iteration = 0, iteration1 = 0, intCount = 0,
	elementGet = document.getElementById("element"),
	valueMargin = parseInt(elementGet.style.marginTop),
	backButton = document.getElementById("backButton");

buttonForward.onclick = function(){
	  if(intCount === 0)
	   valueMargin = 0;
	  else
	   valueMargin = parseInt(elementGet.style.marginTop);;
	  iteration = valueMargin;
	  Animated(valueMargin);
	  intCount++;
}
backButton.onclick = function(){
	valueMargin = parseInt(elementGet.style.marginTop);
    iteration1 = valueMargin;
	AnimatedBot(valueMargin);
}

function Animated(valueMargin){
	iteration = iteration - 20;

	elementGet.style.marginTop = String(iteration) + "px";
	setTimeout(function(){
							if(iteration > valueMargin - 480)
							{
								Animated(valueMargin);
							}
						}, 1);
}

function AnimatedBot(valueMargin){
	iteration1 = iteration1 + 20;

	elementGet.style.marginTop = String(iteration1) + "px";
	setTimeout(function(){
							if(iteration1 < valueMargin + 480)
							{
								AnimatedBot(valueMargin);
							}
						}, 1);
}


var addButton = document.getElementById("addButton");
addButton.onclick = function(){
	var nameText = document.getElementById("name").value,
		pathText = document.getElementById("path").value,
		nameDescription = document.getElementById("Description").value,
		nameDate = document.getElementById("Date").value,
		massivElem = {
			"path": pathText,
			"name": nameText,
			"description": nameDescription,
			"date": nameDate
		};
		
		gallery.images.unshift({
			"path": pathText,
			"name": nameText,
			"description": nameDescription,
			"date": nameDate
		});

		len = gallery.images.length
		showGallery();
		addEvent();
		
}

var deleteFunction = function(){
		gallery.images.shift();
}

var deleteButton = document.getElementById("deleteButton");
deleteButton.onclick = function(){
	deleteFunction();
	showGallery();
	addEvent();
}
var strNamber = 0;
var masElementImg = new Array(len), listener = function() {
strNamber = parseInt(this.id.substr(3))/4;

		document.getElementById("name").value = gallery.images[strNamber].name;
		document.getElementById("path").value = gallery.images[strNamber].path;
		document.getElementById("Description").value = gallery.images[strNamber].description;
		document.getElementById("Date").value = gallery.images[strNamber].date;
};

function addEvent(){
for(var j = 0; j < len; j++)
{
	var str = "res" + String(j*4);
	masElementImg[j] = document.getElementById(str);
	masElementImg[j].addEventListener("click",listener,false);
}
}
	addEvent();

var editButton = document.getElementById("editButton");
editButton.onclick = function(){
	gallery.images[strNamber].name = document.getElementById("name").value;
	gallery.images[strNamber].path = document.getElementById("path").value;
	gallery.images[strNamber].description = document.getElementById("Description").value;
	gallery.images[strNamber].date = document.getElementById("Date").value;
	showGallery();
	addEvent();
}


var sortButton = document.getElementById("sortButton"),
	sortItem, t = 0;
sortButton.onclick = function(){
sortItem = String(document.getElementById("sort").value);
gallery.images.sort( function(a, b) {
  if (a[sortItem] < b[sortItem]) return -1;
  if (a[sortItem] > b[sortItem]) return 1;
  return 0;
});
showGallery();
	addEvent();
}

var emptyButton = document.getElementById("emptyButton");
emptyButton.onclick = function(){
		for(var i = 0; i < len; i++){
			if(gallery.images[i].description === "")
			{
				alert("You have empty value " + gallery.images[i].name);
			}
		}

}

var filterButton = document.getElementById("filterButton"),
		textarray = document.getElementById("textarray");
filterButton.onclick = function(){
	var filterValue = document.getElementById("fliter").value;
	
	function isFilter(check) {
				return check[filterValue] != "";
	}
	
	var Arr = gallery.images.filter(isFilter);
		for(var i = 0; i < len; i++){
			textarray.value = textarray.value.substr() + " " + Arr[i].name;
	}

}


var serialize = document.getElementById("serialize");
serialize.onclick = function(){
	var ch = document.getElementById("ch");
	if(ch.checked){
	textarray.value = JSON.stringify(gallery, function(key, value) {
	  if (key == 'path') return undefined;
	  if (key == 'date') return undefined;
	  if (key == 'description') return undefined;
	  return value;
	});

	}else
	{
		textarray.value = JSON.stringify(gallery);
	}
}