import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseURL } from "../../../utils/authUtils";


 const authApi = createApi({
reducerPath: "authApi",
baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/v1/user`,
    credentials: "include"
}),
endpoints: (builder)=>({
    registerUser : builder.mutation({
        query: (newUser)=>({
            url: "/register",
            method: "POST",
            body : newUser
        })
    }),
    loginUser : builder.mutation({
        query: (credentials)=>({
            url: "/login",
            method: "POST",
            body : credentials
        })
    }),
    logoutUser : builder.mutation({
        query: ()=>({
            url: "/logout",
            method: "POST"
        })
    }),
    getAllUsers : builder.query({
        query: ()=>({
            url: "/users",
            method: "GET"
        }),
        refetchOnMount: true,
        invalidatesTags: ["User"]
    }),
    deleteUser : builder.mutation({
        query: (userId)=>({
            url: `/users/${userId}`,
            method: "DELETE"
        }),
        invalidatesTags: ["User"]
    }),
    updateUserRole : builder.mutation({
        query: ({userId, role})=>({
            url: `/updateUser/${userId}`,
            method: "PUT",
            body : {role}
        }),
        refetchOnMount : true,
        invalidatesTags: ["User"]
    }),
    editProfile : builder.mutation({
        query: (newProfile)=>({
            url: "/editUserProfile",
            method: "PATCH",
            body : newProfile
        })
    }),
})
})


export const {useRegisterUserMutation, useLoginUserMutation, useDeleteUserMutation, useEditProfileMutation, useGetAllUsersQuery, useLogoutUserMutation, useUpdateUserRoleMutation} = authApi
export default authApi