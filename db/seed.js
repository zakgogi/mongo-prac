const db = connect("mongodb://localhost:27017/footballers");

db.footballers.drop();

db.footballers.insertMany([
    { name: "Bukayo Saka", age: 19, club: "Arsenal" },
    { name: "Raheem Sterling", age: 26, club: "Manchester City"}
]);