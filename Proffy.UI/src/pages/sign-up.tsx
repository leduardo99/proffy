import Auth from 'templates/Auth'
import FormSignUp from 'components/FormSignUp'

export default function SignIn() {
  return (
    <Auth title="Realizar Cadastro" layout="reverse">
      <FormSignUp />
    </Auth>
  )
}
