//Require env
require('dotenv').config()

// Importing required modules
const express = require('express')
const cors = require('cors')
//Express app initialization
const app = express()
const contactRoutes = require('./routes/contactRoutes')
const { connectDB } = require('./database/connect')
const setupSwagger = require('./swagger/swagger-config')

// Middleware
app.use(cors())

app.use(express.json())
app.use('/contacts', contactRoutes)
app.use('/api/v1/contacts', contactRoutes)

// Swagger documentation
setupSwagger(app)

const PORT = process.env.PORT || 5000

async function startServer() {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
      console.log(
        `Swagger documentation is available at http://localhost:${PORT}/api-docs`,
      )
    })
  } catch (error) {
    console.error('Error starting server:', error)
  }
}
startServer()
