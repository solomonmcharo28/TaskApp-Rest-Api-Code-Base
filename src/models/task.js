const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
   description:{
      type: String,
      required: true,
      trim: true
   },
   completed:{
      type: Boolean,
      default: false, 
      required: true
   },
   class:{
         type: String, 
         trim: true
         
   },
   assesmentType:{
         type: String,
         trim: true
   },
   //To be able to set an expiry date
   tokens:[{
      token:{
          type:String,
          required: true
      }
  }],
   owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, 
      ref: 'User'
      
   }
 }, {
    timestamps:true
 })
const Task = mongoose.model('Tasks',taskSchema)
module.exports = Task