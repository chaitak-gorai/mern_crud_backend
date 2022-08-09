import mongoose from 'mongoose'
const nameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})
nameSchema.pre('save', function (next) {
  this.name = this.name.toLowerCase()
  next()
})
const Name = mongoose.model('Name', nameSchema)
export default Name
