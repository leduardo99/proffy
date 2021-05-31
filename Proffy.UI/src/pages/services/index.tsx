import { GetServerSidePropsContext } from 'next'

import ServicesTemplate from 'templates/Services/ProfferList'

import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

import { QUERY_AREAS } from 'graphql/queries/area'
import { QueryAreas } from 'graphql/generated/QueryAreas'

const Services = (props) => {
  return <ServicesTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apollo = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  const {
    data: { areas }
  } = await apollo.query<QueryAreas>({
    query: QUERY_AREAS
  })

  return {
    props: {
      session,
      areas
    }
  }
}

export default Services
