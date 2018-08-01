
var request = superagent;

var endPoint = "https://restcountries.eu/rest/v2/all";
var body = document.querySelector('body')
var mainContainer = document.createElement('section');


request.get(endPoint).then (function(response) {
	var consulta =response.body;

	consulta.forEach(function(item){
		console.log(item.name);
		console.log(item.flag);
		console.log(item.capital);
		var itemContainer = document.createElement('div');
		var flag = document.createElement('img');
		var title = document.createElement('h2');
		var text = document.createElement('p');


		flag.src=item.flag;
		itemContainer.appendChild(flag);
		mainContainer.appendChild(itemContainer);
		title.textContent = item.name;
		itemContainer.appendChild(title);
		text.textContent = item.capital;
		itemContainer.appendChild(text); 



	});

	body.appendChild(mainContainer);

})
