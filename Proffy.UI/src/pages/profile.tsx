import {
  QueryProfileMe,
  QueryProfileMeVariables
} from 'graphql/generated/QueryProfileMe'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import { GetServerSidePropsContext } from 'next'

import ProfileTemplate, { ProfileProps } from 'templates/Profile'

import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

export default function Profile(props: ProfileProps) {
  return <ProfileTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  const {
    data: { user, areas }
  } = await apolloClient.query<QueryProfileMe, QueryProfileMeVariables>({
    query: QUERY_PROFILE_ME,
    variables: {
      identifier: session?.id as string
    }
  })

  return {
    props: { session, user, areas }
  }
}
