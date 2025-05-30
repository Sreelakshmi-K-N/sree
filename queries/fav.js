db.Favorites.insertMany([
  { "_id": 1, "name": "Prithvi", "favorites": ["chocolate", "cake", "butter", "apples"] },
  { "_id": 2, "name": "Shivakumar", "favorites": ["apples", "pudding", "pie"] },
  { "_id": 3, "name": "Pradeep", "favorites": ["pears", "pecans", "chocolate", "cherries"] },
  { "_id": 4, "name": "Mukesh", "favorites": ["ice cream"] }
]);

//Query how to use  $slice in   MongoDB Query to get 1st two items in array 
db.Favorites.find({}, { favorites: { $slice: 2 } });

//Query how to use $slice in   MongoDB Query to get last two items in array 
db.Favorites.find({}, { favorites: { $slice: -2 } });

//Query how to use  $slice in   MongoDB Query to get 1st two items in array for particular name ='Prithvi'
db.Favorites.find({ name: "Prithvi" }, { favorites: { $slice: 2 } });

//Query how to use $slice in   MongoDB Query to get last two items in array for particaular name ='Prithvi' 
db.Favorites.find({ name: "Prithvi" }, { favorites: { $slice: -2 } });