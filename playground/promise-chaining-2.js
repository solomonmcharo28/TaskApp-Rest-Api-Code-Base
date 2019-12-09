require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5de9c797f5d3b6348ca93b8b').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result) =>{
console.log(result)
}).catch((e) =>{
    console.log(e)
})

const deleteTaskAndCount = async (id) =>{
   const task = await Task.findByIdAndDelete(id)
   const count = await Task.countDocuments({completed: false})
   return count
}

deleteTaskAndCount('5de9a21456f8b11e2b3f5c60').then((count) =>{
console.log(count)
}).catch((e) =>{
    console.log(e)
})