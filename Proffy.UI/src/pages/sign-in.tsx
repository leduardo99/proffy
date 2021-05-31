import Auth from 'templates/Auth'
import FormSignIn from 'components/FormSignIn'

import SEO from 'components/SEO'

export default function SignIn() {
  return (
    <Auth>
      <SEO title="Login" image="logo.svg" />
      <FormSignIn />
    </Auth>
  )
}
