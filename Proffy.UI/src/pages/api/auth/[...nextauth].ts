import NextAuth, { Session } from 'next-auth'
import Providers from 'next-auth/providers'
import { toast } from 'react-toastify'

type AuthorizeProps = {
  email: string
  password: string
}

export default NextAuth({
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    Providers.Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize({ email, password }: AuthorizeProps) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({ identifier: email, password })
          }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    session: async (session: Session, user: any) => {
      session.jwt = user.jwt
      session.id = user.id
      session.user.image = user?.picture?.url || null

      return Promise.resolve(session)
    },
    jwt: async (token, user: any) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = `${user.name} ${user.surname}` as string
        token.jwt = user.jwt
      }

      return Promise.resolve(token)
    }
  }
})
