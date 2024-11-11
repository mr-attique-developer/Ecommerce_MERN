import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { connectDBConnection } from "./src/connectionDb/connect.js";
import userRoutes from "./src/user/user.routes.js";
import productRoutes from "./src/products/product.routes.js";
import reviewRoutes from "./src/reviews/review.route.js";
import stripePackage from "stripe";


const app = express();


const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
};
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb" }));

// Initialize Stripe 
const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/review", reviewRoutes);

// Stripe checkout 
app.post('/create-checkout-session', async (req, res) => {
    const { products } = req.body;

    const lineItems = products.map(product => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: product.name,
            },
            unit_amount: product.price * 100, 
        },
        quantity: product.quantity,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:5173/cart',
            cancel_url: 'http://localhost:5173/login',
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get("/", (req, res) => {
    res.send("Hello backend");
});

connectDBConnection();


const port = process.env.PORT || 1000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});