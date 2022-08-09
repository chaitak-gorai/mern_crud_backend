import asyncHandler from 'express-async-handler'
import Name from '../models/nameModel.js'

const createController = async (req, res) => {
  const { name } = req.body

  const userExists = await Name.findOne({ name })
  if (userExists) {
    res.status(400)
    console.log('User already exists')
  } else {
    const user = await Name.create({ name })
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
      })
      console.log('User created')
    } else {
      res.status(400)
      console.log('User not created, Invalid user data')
    }
  }
}
const readController = async (req, res) => {
  const names = await Name.find({})

  res.json(names)
  console.log('Fetched all products'.green.inverse)
}
const updateController = async (req, res, next) => {
  const { id, name } = req.body
  console.log(id)
  const user = await Name.findById(id)
  if (user) {
    user.name = name || user.name
    const updatedUser = await user.save()
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
    })
    console.log('User updated')
  } else {
    res.status(400)
    console.log('User not updated, Invalid user data')
  }

  next()
}
const deleteController = async (req, res, next) => {
  const { id } = req.body
  const user = await Name.findById(id)
  user.remove()
  res.status(200).json({
    message: 'User deleted',
  })
  console.log('User deleted')
  next()
}
export { createController, readController, updateController, deleteController }
