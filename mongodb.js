//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
const connectionURL= 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
//const ObjectId = mongo.ObjectId
const {MongoClient, ObjectID} = require('mongodb')
const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, {useNewUrlParser: true},{ useUnifiedTopology: true }, (error, client)=>{
  if(error){
      return console.log("Unable to connect to database!")
  }
  const db = client.db(databaseName)
//   db.collection('users').findOne({_id:new ObjectID("5de6e6a94a7861bd64753ecf")}, (error, user) =>{
//     if(error){
//         return console.log("Unable to Fetch")
//     }

//       console.log(user)

//   })
//   db.collection('users').find({age:27}).toArray((error, users)=>{
//    console.log(users)
//   })
//   db.collection('users').find({age:27}).count((error, count)=>{
//     console.log(count)
//    })
//   db.collection('tasks').findOne({_id:new ObjectID("5de6ebd4f0abd0c00d719a53")},(error, user) =>{
//       console.log(user)
// })
//   db.collection('tasks').find({completed:false}).toArray((error, users) => {
//       console.log(users)
//   })
db.collection('users').updateOne({_id : new ObjectID("5de6f1ad1cd84e0236c178e4")}, {
         $inc:{
             age: 1,
         }
     }).then((result)=>{
         console.log(result)
     }).catch((error)=>{
         console.log(error)
     })

// db.collection('tasks').updateMany({completed:false},{
//     $set:{
//         completed:true
//     }
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

 db.collection('users').deleteMany({
     age:27,
 }).then((result)=>{
console.log(result)
 }).catch((error)=>{
console.log(error)
 })
})