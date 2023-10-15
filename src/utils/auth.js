// import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Prisma } from "@prisma/client"
import GoogleProvider from "next-auth/providers/google"
import prisma from "./connect"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      // ...add more providers here
    ],
  }