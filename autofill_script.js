function getAPIdata(e) {
  var t = http().get("https://api.upcitemdb.com/prod/trial/lookup?upc=" + e);
  if (200 == t.code) {
    var r = JSON.parse(t.body).items[0];
    return r.name = r.title,
      r.details = r.description,
      r.img = r.images[0],
      r.description = r.details + "\nbrand: " + r.brand + "\ncolor: " + r.color + "\nsize: " + r.size + "\ndimension: " + r.dimension + "\nweight: " + r.weight + "\ncategory: " + r.category,
      r.category = setLibCategory(r.category),
      [r];
  }
  return [{
    title: "ERROR with getting info from api!",
    description: "ERROR with getting info from api!"
  }];
}

function setLibCategory(e) {
  switch (!0) {
    case /Animals /.test(e):
      return "Pet";
    case /Baby /.test(e):
      return "Baby";
    case /> Jewelery/.test(e):
      return "Jewelry";
    case /^Apparel/.test(e):
      return "Clothing";
    case /^Arts/.test(e):
      return "Art";
    case /Party & Celebration|> Decor >/.test(e):
      return "Decorations";
    case /Lighting/.test(e):
      return "Lamps";
    case/Cameras/.test(e):
      return "Camera";
    case /Electronics/.test(e):
      return "Electronics";
    case /^Food/.test(e):
      return "Food";
    case /Furni/.test(e):
      return "Furniture";
    case /Hardw/.test(e):
      return "Tools";
    case /Health Care/.test(e):
      return "Health";
    case /Health/.test(e):
      return "Beauty";
    case /Household Appliances|Kitchen A/.test(e):
      return "Small Appliances";
    case /Cleaning Supplies|Paper Products|Garbage Bags|Shoe Care|Waste /.test(e):
      return "Cleaning Supplies";
    case /Laund/.test(e):
      return "Laundry";
    case /Food & Beverage C/.test(e):
      return "Organizers";
    case /Kitchen Appliance A/.test(e):
      return "Miscellaneous";
    case /Kitchen O/.test(e):
      return "Organizers";
    case /Cookware |Kitchen Too/.test(e):
      return "Cooking";
    case /Kitchen & Dining >/.test(e):
      return "Dishes";
    case /Lawn & G/.test(e):
      return "Gardening";
    case /Plants|Lighting/.test(e):
      return "Lamps";
    case /Linens/.test(e):
      return "Linens";
    case /Lug/.test(e):
      return "Organizers";
    case /^Media/.test(e):
      return "Media";
    case /Office/.test(e):
      return "Office Supplies";
    case /Sporti/.test(e):
      return "Sports";
    case /Toys/.test(e):
      return "Toys";
    case /Veh/.test(e):
      return "Automotive";
    default:
      return "Any";
  }
}
result(getAPIdata(query));
