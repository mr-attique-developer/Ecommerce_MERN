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
})
})


export const {useRegisterUserMutation, useLoginUserMutation} = authApi
export default authApi