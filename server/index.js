import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import "dotenv/config"
import bodyParser from "body-parser"
import { connectDBConnection } from "./src/connectionDb/connect.js"
import userRoutes from "./src/user/user.routes.js"
import productRoutes from "./src/products/product.routes.js"
import reviewRoutes from "./src/reviews/review.route.js"


const app = express()
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
    
}
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json({limit: "30mb"}))
app.use(express.urlencoded({limit: "30mb"}))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))


app.use("/api/v1/user", userRoutes)
app.use("/api/v1/product", productRoutes)
app.use("/api/v1/review", reviewRoutes)
app.get("/", (req, res) => {
    res.send("Hello backend")
})

connectDBConnection()
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})