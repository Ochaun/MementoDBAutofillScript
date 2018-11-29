var jsonresult = http().get("https://api.upcitemdb.com/prod/trial/lookup?upc=" + term);

var name = JSON.parse(jsonresult.body)["items"][0]["title"];
var details = JSON.parse(jsonresult.body)["items"][0]["description"];
var model = JSON.parse(jsonresult.body)["items"][0]["model"];

log(typeof name)

/*
TODO figure out how to add this to description and check http status code
var extra = "brand: " + JSON.parse(result.body)["items"][0]["brand"]
+
"color: " + JSON.parse(result.body)["items"][0]["color"] +
"size: " + JSON.parse(result.body)["items"][0]["size"] +
"dimension: " + JSON.parse(result.body)["items"][0]["dimension"] +
"weight: " + JSON.parse(result.body)["items"][0]["weight"];
*/


var stuff = new Object();
var lst = [];

stuff["title"] = name;
stuff["description"] = details;
stuff["model"] = model;

lst.push(stuff);
return lst;
}

result(getAPIdata(query));
