import Product from "../products/product.model.js"
import Review from "./review.model.js"


export const createReviewController = async (req, res) => {
    try {
        const { comment, rating, userId, productId } = req.body

        if (!comment || !rating || !userId || !productId) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const existingReview = await Review.findOne({ userId, productId })
        if (existingReview) {
            existingReview.comment = comment
            existingReview.rating = rating
            await existingReview.save()
            return res.status(200).json({ message: "Review updated successfully" })
        } else {
            const newReview = new Review({ comment, rating, userId, productId })
            await newReview.save()
            return res.status(201).json({ message: "Review created successfully" })
        }
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message })
    }
}

export const countReviewControllor = async (req, res) => {
    try {
        const review = await Review.countDocuments({})

        res.status(200).send({ review })
    } catch (error) {
        res.status(500).send({ message: "Error in count Reviw controller" })
    }
}


export const getReviewController = async (req, res) => {
 try {
    const {userId} = req.params
    // console.log(userId)
    if(!userId){
        return res.status(400).json({message: "User id is required"})
    }
    const reviews = await Review.find({userId: userId}).sort({createdAt: -1})
    if(reviews.length === 0){
        return res.status(404).json({message: "No review found"})
    }
    res.status(200).send({
        success: true,
        message: "Reviews fetched successfully",
        reviews
    })

} catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong Error in get review controller ", error })
 }
}