import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [],
  pages: {
    signIn: '/sign-in'
  }
})
