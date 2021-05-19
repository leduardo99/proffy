import { GetServerSidePropsContext } from 'next'
import HomeTemplate from 'templates/Home'
import protectedRoutes from 'utils/protected-routes'

export default function Home() {
  return <HomeTemplate />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) {
    return { props: {} }
  }

  return {
    props: { session }
  }
}
