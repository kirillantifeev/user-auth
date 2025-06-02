const express = require('express')

const mongoose = require('mongoose')
const authRouter = require('./routes/authRoutes')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/user', authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://krismillerartist:540Rt360@cluster0.zoin632.mongodb.net/auth-user?retryWrites=true&w=majority&appName=Cluster0`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start();