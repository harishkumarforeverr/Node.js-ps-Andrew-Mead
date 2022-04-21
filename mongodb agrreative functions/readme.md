0. to start the mongodb server type these in git blash terminal mongod.exe --dbpath ~/db

1. show dbs

2. use tests (here tests is database name )

3. db.tests.insert({name:"harish"})

0. db.dropDatabase(); 

1. use demo;

2. db.createCollection("users");

3. db.createCollection("employ");

4. db.users.drop();

5. db.employ.drop();

6. db.users.insert({age:21});

7. db.users.insert([{age:21}, {age:222}]);

8. db.users.insertOne({name:"harish"})

9. db.users.insertMany([{name:"harish"},{name:"hahahha"}])

10. db.users.find();

11. db.users.find({}).pretty();

12. db.users.insertMany(
    [
    { name :"harish" , email:"harish@gmail.com",age:21 },
    { name :"satish" , email:"satish@gmail.com",age:22 },
    { name :"neha" , email:"neha@gmail.com",age:23 }
    ]
    );

13. db.users.find().pretty();

14. db.users.find({name:"satish"}).pretty();

15. AND operator
    db.users.find({name:"neha", age:23}).pretty();

16. or Operator
    db.users.find( {$or : [{name:"neha"}, {age:22}]}).pretty();

17. And operator
    db.users.find( {$and : [{name:"neha"}, {age:33}]}).pretty();

18. less than
    db.users.find({ age : {$lt: 23}});

19. less than equal
    db.users.find({ age : {$lte: 23}});
20. greater than
    db.users.find({ age : {$gt: 23}});

21. greater than equal
    db.users.find({ age : {$gte: 23}});

22. like operator
    db.users.find({email : /ish@/})
    its means find all the email which are having these charectors in it

23. $in operator
    db.users.find({$age : {$in : [22,25]}})

24. nor means
    eg : name : harish or age !=22 its means name must not be harish and age should not be 22 except these render alll
    db.users.find({ $nor : [{name : "harish"}, {age :33 }] })

25. NOT operator
    is same as nor operator

26. const data =[
    { "_id": { "$oid": "625b69aff7d4d1c885e8fe7f" }, "name": "harish", "email": "harish@gmail.com", "age": 23},
    { "_id": { "$oid": "625b69aff7d4d1c885e8fe80" }, "name": "satish", "email": "satish@gmail.com", "age": 22},
    { "_id": { "$oid": "625b69aff7d4d1c885e8fe81" }, "name": "neha", "email": "neha@gmail.com", "age": 23},
    { "_id": { "$oid": "625b6a78f7d4d1c885e8fe82" }, "name": "harish", "email": "harish@gmail.com", "age": 25},
    { "_id": { "$oid": "625b6a78f7d4d1c885e8fe83" }, "name": "satish", "email": "pulla@gmail.com", "age": 22},
    { "_id": { "$oid": "625b6a78f7d4d1c885e8fe84" }, "name": "neha", "email": "neha@gmail.com", "age": 33}
    ]

27. and or operarir
    db.users.find({name:"harish", $or : [{name : "harish" }]})

28. Projections
    a. db.users.find({},{name : 1}); here 1 is mandtory  
    NOTE my default \_id property also be render so to not to render \_id then write these below code
    b. db.users.find({},{name : 1, \_id:0}); here 0 means we dont want id property ani
    c. db.users.find({},{name : 1, \_id:0, age:1});

29. a. db.users.update({\_id:ObjectId("625b69aff7d4d1c885e8fe7f")}, {$set : {name:"harish kumar"}})
      b. db.users.update({age:22},{$set : {age:333}}) // here if we have 2 record of age 22 the mongodb is going to upadte the 1st record which it found in db so if we want update multiple the records at a time we need to add the 3rd object property to update query like these
    c. db.users.update({age:22},{$set : {age:333}},{multi:true})

30. db.users.remove({age:333}) it will remove all the users with age : 333
    a. if we want to remove just one record the
    db.users.remove({age:333},1)
    b. db.users.deleteOne({name:"harish"})
    c. db.users.deleteMany({age:23})

31. db.users.insertMany([{name:"harish"},{name:"satish"},{name:"neha"},{name:"bava"},{name:"akka"}])

32. db.users.find().pretty().limit(1);
    db.users.find().pretty().limit(2);

33. db.users.find().pretty().skip(1);
    db.users.find().pretty().skip(2);

34. db.users.find().pretty().sort({name : 1}); // 1 means sort in acending order
    db.users.find().pretty().sort({name : -1}); // -1 means sort in decending order

35. we can user all in one shot also db.users.find().pretty().limit(4).skip(2).sort({name : -1});

36. $eleMatch
    db.users.find({hobby : { $ele,Match : {HobbyName : "facebook-1"}}})

37. $elemMath : is used to filter the nested Arrya or Objects

38. db.users.distinct("age");

39. db.users.find({name:"harish"}).count();
    db.users.find({}).count();

40. $match /// match is used to filter the items based on the condition
    db.users.aggregate(
    [
    { $match:{ age : { $gt:22 }} }
    ])

41. $group    /// here its used to group the items for example if we have A,B,C,A,B as deperment names the by grouping it will give us just A,B,C only becoz its grouped all of them in into one caterorgry
    db.users.aggregate([
    {$group: {\_id:"$age"}} // here _id is mandatory
    ])
    or send methid
    db.users.aggregate([{$group: {\_id:{age:"$age"}}}])

42. $skip $sort
    a. db.users.aggregate([{ $group : {_id:"$age"}}])
    b. db.users.aggregate([{ $group : {_id:"$age"}}, {$skip: 1}])
    c. db.users.aggregate([{ $group : {_id:"$age"}}, {$skip: 1}, {$sort: {_id:1}}])
    d. db.users.aggregate([{ $group : {_id:"$age"}}, {$skip: 1}, {$sort: {_id:1}}])

43. $project /// is used to give us controll how data should render like just showing limit amount of fields only
    1. db.users.aggregate([
       {
       $match: {"status" : "active"}
       }, {
       $project : {name:1,age:1}
       }
       ])
    2. db.users.aggregate([
       {
       $match: {"status" : "active"}
       }, {
       $project : {name:1,age:1,\_id:0}
       }
       ])
    3. db.users.aggregate([
       {
       $match: {"status" : "active"}
       }, {
       $project : {fullname:"$name",age:1,_id:0}
       }
       ])
    4. db.users.aggregate([
       {
       $match: {"status" : "active"}
       }, {
       $project : {fullname:"$name",userage:"$age",_id:0}
       }
       ])
44. $type // is used to give the type of the varibale
    1. db.users.aggregate([
       {
       $match : { status :"active"}
       }, {
       $project : {name:"$name"}
       }
       ])
    2. db.users.aggregate([
       {
       $match : { status :"active"}
       }, {
       $project : {name:{$type:"$name"}}
       }
       ])
45. $sum and $avg

    1. db.users.aggregate([
       {
       $match: { status: "active" },
       },
       {
       $project: {
       style: { $sum: "$style" },
       avgStyle: { $avg: "$style" },
       name:1
       },
       },
       ]);

46. $count give the no of counts that are come out of the results

    1. db.users.aggregate([
       {
       $match: { status: "active" },
       },
       { $count : "mycount"}
       ])

    2. db.users.aggregate([
       { $count : "mycount"}
       ])

47. $limit is used to limit the no of records
    1. db.users.aggregate([
       {
       $match: { status: "inactive" },
       },
       {
       $project: { name: 1, age: 1, _id: 0 },
       },
       {
       $limit : 1
       }
       ]);
48. $out is used to create a new collection from the o/p

    1. db.users.aggregate([
       {
       $match: { status: "inactive" },
       },
       {
       $project: { name: 1, age: 1, _id: 0 },
       },
       {
       $out:"harishCollection"
       }
       ]);

49. $lookup // is used to link the realtion between two collections
          https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/
           THEME is 
            it will collect the datafileds from the another collection and add to the current Object which we are manipulating in aggretate stage and by adding that extra property we can render or send to user
            and main point is 
            localfield values and foriegnield value must be same undali then only the answer or output will come

    1. db.users.aggregate({
       $lookup: {
       from: "harishCollection",
       localField: "dep",
       foreignField: "name",
       as: "anything",
       },
       });
    2. example
       db.dep.insertMany([
       {
       name: "Tech",
       code: 123,
       },
       {
       name: "HR",
       code: 223,
       },
       {
       name: "Devops",
       code: 323,
       },
       ]);
       db.users.insertMany([
       {
       name: "harish",
       dept: "Tech",
       },
       {
       name: "satish",
       dept: "HR",
       },
       {
       name: "manish",
       dept: "Tech",
       },
       ]);

       db.users.aggregate([
       {
       $lookup: {
       from: "dep",
       localField: "dept",
       foreignField: "name",
       as: "anything",
       },
       },
       ]);  
       /// OVERALL THEME IS HERE
       in depertment "name" property
       and
       user collection "dep" both must be need to be same then only these gone work

       db.users.aggregate([
       {
       $match:{
       school:"private"
       }
       },
       {
       $project :{
       _id:0,
       name:1,
       age:1,
       langugaes:1
       }
       },
       {
       $unwind:"$langugaes"
       }
       ]).pretty();
