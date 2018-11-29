function getAPIdata(term){
	var jsonresult = http().get("https://api.upcitemdb.com/prod/trial/lookup?upc=" + term);

	if (jsonresult.code == 200){
		var name = JSON.parse(jsonresult.body)["items"][0]["title"];
		var details = JSON.parse(jsonresult.body)["items"][0]["description"];
		var model = JSON.parse(jsonresult.body)["items"][0]["model"];

		//Todo: make these into different fields
		var extra = "brand :"+ JSON.parse(jsonresult.body)["items"][0]["brand"] +
		"color: " + JSON.parse(jsonresult.body)["items"][0]["color"] +
		"size: " + JSON.parse(jsonresult.body)["items"][0]["size"] +
		"dimension: " + JSON.parse(jsonresult.body)["items"][0]["dimension"] +
		"weight: " + JSON.parse(jsonresult.body)["items"][0]["weight"];

		var stuff = new Object();
		var lst = [];

		stuff["title"] = name;
		stuff["description"] = details + extra;
		stuff["model"] = model;
		stuff

		lst.push(stuff);
		return lst;

	} else {
		var name = "ERROR with getting info feom api!";
		var stuff = new Object();
		var lst = [];

		stuff["title"] = name;
		stuff["description"] = name;
		stuff["model"] = name;

		lst.push(stuff);
		return lst;
	}

}

result(getAPIdata(query));
