import { GetServerSidePropsContext } from 'next'

import ProfileTemplate from 'templates/Profile'

import protectedRoutes from 'utils/protected-routes'

import SEO from 'components/SEO'

export default function Profile() {
  return (
    <>
      <SEO title="Perfil" shouldIndexPage={false} />
      <ProfileTemplate />
    </>
  )
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
