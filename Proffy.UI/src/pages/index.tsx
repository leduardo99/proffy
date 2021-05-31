import { QueryConnections } from 'graphql/generated/QueryConnections'
import { QUERY_CONNECTIONS } from 'graphql/queries/connection'
import { GetServerSidePropsContext } from 'next'
import HomeTemplate from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

import SEO from 'components/SEO'

export default function Home(props) {
  return (
    <>
      <SEO title="Home" image="logo.svg" />
      <HomeTemplate {...props} />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apollo = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  const {
    data: { connections }
  } = await apollo.query<QueryConnections>({
    query: QUERY_CONNECTIONS,
    fetchPolicy: 'no-cache'
  })

  return {
    props: { session, connections: connections.length }
  }
}
