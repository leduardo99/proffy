import { GetServerSidePropsContext } from 'next'
import Auth from 'templates/Auth'
import FormResetPassword, {
  FormResetPasswordProps
} from 'components/FormResetPassword'

import SEO from 'components/SEO'

export default function ResetPassword(props: FormResetPasswordProps) {
  return (
    <Auth layout="reverse">
      <SEO title="Resetar Senha" shouldIndexPage={false} />
      <FormResetPassword {...props} />
    </Auth>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.query?.code) {
    context.res.setHeader('Location', `/sign-in`)
    context.res.statusCode = 302

    return { props: {} }
  }

  return {
    props: { code: context.query.code }
  }
}
