import Auth from 'templates/Auth'
import FormSignUp from 'components/FormSignUp'

export default function SignIn() {
  return (
    <Auth layout="reverse">
      <FormSignUp />
    </Auth>
  )
}
