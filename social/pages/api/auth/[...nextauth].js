import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import User from "../../../models/User"
import connectDb from "../../../config/connectDb"


connectDb()

export default NextAuth({
    session: {
        jwt: true
    },
  providers: [


    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

  ],
  pages: {
    signIn: "/login",
    error: '/login',
  },
  database: process.env.DATABASE_URL,
  callbacks: {
    session: async (session, user) => {
      const resUser = await User.findById(user.sub)
      session.emailVerified = resUser.emailVerified
      session.userId = user.sub
      return Promise.resolve(session)
    }
  }
})
