import User from "./user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const registerUserController = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in REgistartion controller",
            error,
        });
    }
}

export const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }
        const userId = user._id
        const token = await jwt.sign({ userId, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" })
        res.cookie("token", token,
            {
                httpOnly: true,
                sameSite: "strict",
                maxAge: 24 * 60 * 60 * 1000

            })

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage,
                bio: user.bio,
                profession: user.profession,
                role: user.role
            },
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in Login controller",
            error,
        });

    }
}

export const logoutController = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({
            success: true,
            message: "User logged out successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in Logout controller",
            error,
        })
    }
}


export const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in Delete controller",
            error,
        });

    }
}

export const getAllUsersController = async (req, res) => {
    try {
        
        const allUsers = await User.find().select("-password").sort({ createdAt: -1 })
        return res.status(200).json({
            success: true,
            message: "All users fetched successfully",
            allUsers
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in getAllUsers controller",
            error,
        });
        
    }
}

export const updateUserController = async (req, res) => {
    try {
        const {id}= req.params
        const {role} = req.body
        const updateUser = await User.findByIdAndUpdate(id,{role},{new:true})
        if(!updateUser){
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            updateUser
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in Update controller",
            error,
        });
        
    }
}

export const editAndUpdateUserController = async (req, res) => {
    try {

        const {userId,username,profileImage,bio,profession} = req.body
        if(!userId){
            return res.status(400).json({
                success: false,
                message: "User Id is required"
            })
        }
        const updateUser = await User.findById(userId)
 if(!updateUser){
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        // update user data

        if(username !== undefined) updateUser.username = username
        if(profileImage !== undefined) updateUser.profileImage = profileImage
        if(bio !== undefined) updateUser.bio = bio
        if(profession !== undefined) updateUser.profession = profession
        await updateUser.save()
        res.status(200).send({
            success: true,
            message: "User Profile updated successfully",
            updateUser : {
                _id: updateUser._id,
                username: updateUser.username,
                email: updateUser.email,
                profileImage: updateUser.profileImage,
                bio: updateUser.bio,
                profession: updateUser.profession,
                role: updateUser.role
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in editAndUpdate controller",
            error,
        });
        
    }
}