import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import "dotenv/config"


const app = express()
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
    
}
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})