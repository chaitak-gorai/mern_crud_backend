const createMiddleware = (req, res, next) => {
  console.log('createMiddleware')
  next()
}
const readMiddleware = (req, res, next) => {
  console.log('readMiddleware')
  next()
}
const updateMiddleware = (req, res, next) => {
  console.log('updateMiddleware')
  next()
}
const deleteMiddleware = (req, res, next) => {
  console.log('deleteMiddleware')
  next()
}
export { createMiddleware, readMiddleware, updateMiddleware, deleteMiddleware }
