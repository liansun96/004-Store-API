require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

app.use(express.json())

app.get('/' , (req , res) => {
    res.send('<h1>Store API</h1> <a href="/api/v1/products">Product Route</a>')
})

app.use('/api/v1/products' , productsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000 

const start = async () => {
    try {
        //connect DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`Server is listening on port ${port}`))
        
    } catch (error) {
        console.log(error); 
        
    }
}

start()
