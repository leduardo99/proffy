import Auth from 'templates/Auth'
import FormForgotPassword from 'components/FormForgotPassword'
import SEO from 'components/SEO'

export default function ForgotPassword() {
  return (
    <Auth layout="reverse">
      <SEO title="Recuperação de Senha" image="logo.svg" />
      <FormForgotPassword />
    </Auth>
  )
}
