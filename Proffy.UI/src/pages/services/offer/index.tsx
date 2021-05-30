import { GetServerSidePropsContext } from 'next'
import ServicesOfferTemplate from 'templates/Services/Offer'

import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'

import { QUERY_PROFILE_ME } from 'graphql/queries/user'
import { QUERY_AREAS } from 'graphql/queries/area'

import { QueryAreas } from 'graphql/generated/QueryAreas'
import {
  QueryProfileMe,
  QueryProfileMeVariables
} from 'graphql/generated/QueryProfileMe'
import {
  QUERY_PROFFER,
  QUERY_PROFFERS_WITH_FILTERS
} from 'graphql/queries/proffer'
import {
  QueryProffersWithFilters,
  QueryProffersWithFiltersVariables
} from 'graphql/generated/QueryProffersWithFilters'

const ServicesOffer = (props) => {
  return <ServicesOfferTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apollo = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  const {
    data: { user }
  } = await apollo.query<QueryProfileMe, QueryProfileMeVariables>({
    query: QUERY_PROFILE_ME,
    variables: {
      identifier: session?.id as string
    }
  })

  const {
    data: { areas }
  } = await apollo.query<QueryAreas>({
    query: QUERY_AREAS
  })

  const {
    data: { proffers }
  } = await apollo.query<
    QueryProffersWithFilters,
    QueryProffersWithFiltersVariables
  >({
    query: QUERY_PROFFERS_WITH_FILTERS,
    variables: { where: { user: { id: session?.id as string } } }
  })

  return {
    props: {
      session,
      user,
      areas,
      proffer: proffers.length > 0 ? proffers[0] : null
    }
  }
}

export default ServicesOffer
