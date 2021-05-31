import Image from 'next/image'

import { Container } from './styles'
import { QueryProffersWithFilters_proffers } from 'graphql/generated/QueryProffersWithFilters'
import { getImageUrl } from 'utils/getImageUrl'
import { useMutation } from '@apollo/client'
import {
  MutationCreateConnection,
  MutationCreateConnectionVariables
} from 'graphql/generated/MutationCreateConnection'
import { MUTATION_CREATE_CONNECTION } from 'graphql/mutations/connection'
import { useSession } from 'next-auth/client'

export type Proffer = QueryProffersWithFilters_proffers

interface ProfferItemProps {
  proffer: Proffer
}

const TeacherItem: React.FC<ProfferItemProps> = ({
  proffer: { id, user, schedules }
}) => {
  const [session] = useSession()

  const [createConnection] = useMutation<
    MutationCreateConnection,
    MutationCreateConnectionVariables
  >(MUTATION_CREATE_CONNECTION, { context: { session } })

  function handleCreateConnection() {
    createConnection({
      variables: { input: { data: { proffer: id, user: user.id } } }
    })
  }

  return (
    <Container>
      <header>
        <figure>
          <Image
            layout="fill"
            src={user?.image ? getImageUrl(user?.image?.url) : '/img/logo.svg'}
            alt={user.name}
          />
        </figure>
        <div>
          <strong>
            {user.name} {user.surname}
          </strong>
          <span>{user?.area?.name}</span>
        </div>
      </header>

      <p>{user.bio}</p>

      <footer>
        <a
          onClick={handleCreateConnection}
          href={`https://wa.me/${user.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/icons/whatsapp.svg" alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </Container>
  )
}

export default TeacherItem
