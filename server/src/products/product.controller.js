import Review from "../reviews/rewiew.model.js"
import Product from "./product.model.js"


export const createProductController = async (req, res) => {
    try {
        // const {} = req.body
        const newProduct = new Product({
            ...req.body
        })

        const saveProduct = await newProduct.save()
        // calculate Review
        const review = await Review.find({ productId: saveProduct._id })
        if (review.length > 0) {
            const rating = review.reduce((acc, item) => acc + item.rating, 0)

            const averageRating = rating / review.length
            saveProduct.rating = averageRating
            await saveProduct.save()
        }

        res.status(200).json({
            success: true,
            message: "Product created successfully",
            saveProduct

        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in creating new Product  server error"
        })
    }
}


export const getAllProductsController = async (req, res) => {
    try {
        const { category, minPrice, maxPrice, color, page = 1, limit = 10 } = req.query;
        const filter = {};

        if (category && category !== "all") filter.category = category;
        if (color && color !== "all") filter.color = color;
        if (minPrice && maxPrice) {
            const min = parseFloat(minPrice);
            const max = parseFloat(maxPrice);
            if (!isNaN(min) && !isNaN(max)) {
                filter.price = {
                    $gte: min,
                    $lte: max
                };
            }
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);
        const totalProducts = await Product.countDocuments(filter);
        const totalPages = Math.ceil(totalProducts / parseInt(limit));
        const products = await Product.find(filter)
            .skip(skip)
            .limit(parseInt(limit))
            .populate("author", "email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            products,
            totalProducts,
            totalPages
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error in fetching products: server error"
        });
    }
};