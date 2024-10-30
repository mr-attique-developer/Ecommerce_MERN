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

export const getSingleProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id).populate("author", "email");
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        const reviews = await Review.find({ productId: id }).populate("userId", "email");
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            product,
            reviews
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in getSingleProduct controller",
            error,
        });
        
    }
}


export const updateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, {...req.body}, { new: true });
        if (!updateProduct) {
            return res.status(400).json({
                success: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            updateProduct
    })
}
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in updateProduct controller",
            error,
        });
    }
}

export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if (!deleteProduct) {
            return res.status(400).json({
                success: false,
                message: "Product not found"
            });
        }
        await Review.deleteMany({ productId: id });
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            deleteProduct
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in deleteProduct controller",
            error,
        });
    }
}

export const relatedProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(400).json({
                success: false,
                message: "Product not found"
            });
        }
        const regex = new RegExp(product.name.split(" ").filter((word)=> word.length > 1).join("|"), "i");
        const relatedProducts = await Product.find( {
            _id: { $ne: id },
            $or: [
                { name: regex },
                { category: product.category },
                
            ]
         })
        res.status(200).json({
            success: true,
            message: "Related products fetched successfully",
            relatedProducts
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in relatedProduct controller",
            error,
        });
    }
}