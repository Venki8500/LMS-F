import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const LmsApi = createApi({
  reducerPath: 'LmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://lms-t9b6.onrender.com' }),
  endpoints: (builder) => ({
    usersignup: builder.mutation({
        query: (user) => ({
          url: '/signup',
          method: 'POST',
          body: user,
        }),
      }),
      usrLogin:builder.mutation({
        query:(user)=>({
            url:"/login",
            method:"POST",
            body:user
        })
      }),
      getData:builder.query({
        query:()=>({
          url:"/",
          method:"GET",
          headers:{
            "authorization":window.localStorage.getItem("token")
          }
        })
      }),
      addLoan:builder.mutation({
        query:(loan)=>({
          url:"/addloan",
          method:"POST",
          headers:{
            "authorization":window.localStorage.getItem("token")
          },
          body:loan
        })
      }),
      approveloan:builder.mutation({
        query:(id)=>({
          url:`/approveloan/${id}`,
          method:"PUT",
          headers:{
            "authorization":window.localStorage.getItem("token")
          },
          body:id
        })
      }),
      downpaymentRecive:builder.mutation({
        query:(id)=>({
          url:`/downpaymentReceived/${id}`,
          method:"PUT",
          headers:{
            "authorization":window.localStorage.getItem("token")
          },
          body:id
        })
      }),
      desburseloan:builder.mutation({
        query:(id)=>({
          url:`/disburseloan/${id}`,
          method:"PUT",
          headers:{
            "authorization":window.localStorage.getItem("token")
          },
          body:id
        })
      }),
      getLoanDetails:builder.query({
        query:(loandetails)=>({
          url:"/userloandetails",
          method:"GET",
          headers:{
            "authorization":window.localStorage.getItem("token")
          }
        })
      }),
      payEmi:builder.mutation({
        query:({loanid,emiid})=>({
          url:`/payemi/${loanid}/${emiid}`,
          method:"PUT",
          headers:{
            "authorization":window.localStorage.getItem("token")
          },
          body:loanid,emiid
        })
      }),
      getManger:builder.query({
        query:(user)=>({
          url:"/addmanager",
          method:"GET",
          headers:{
            "authorization":window.localStorage.getItem("token")
          },
          
        })
      }),

      aprvMangr:builder.mutation({
        query:(id)=>({
          url:`/approvemanager/${id}`,
          method:"PUT",
          headers:{
            "authorization":window.localStorage.getItem("token")
          },
          body:id
        })
      }),

      rmvMangr:builder.mutation({
        query:(id)=>({
          url:`/removemanager/${id}`,
          method:"PUT",
          headers:{
            "authorization":window.localStorage.getItem("token")
          },
          body:id
        })
      })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useUsersignupMutation,
    useUsrLoginMutation,
    useGetDataQuery,
    useAddLoanMutation,
    useApproveloanMutation,
    useDownpaymentReciveMutation,
    useDesburseloanMutation,
    useGetLoanDetailsQuery,
    usePayEmiMutation,
    useGetMangerQuery,
    useAprvMangrMutation,
    useRmvMangrMutation
   
} = LmsApi;