import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://captcha:Dent14atlas@cluster0.emmpy.mongodb.net/crud',
      {
        useNewUrlParser: true,

        useUnifiedTopology: true,
      }
    )
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold)
  } catch (error) {
    console.error(`Error:${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
