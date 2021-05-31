import Auth from 'templates/Auth'
import FormSignUp from 'components/FormSignUp'

import SEO from 'components/SEO'

export default function SignUp() {
  return (
    <Auth layout="reverse">
      <SEO title="Cadastro" image="logo.svg" />
      <FormSignUp />
    </Auth>
  )
}
