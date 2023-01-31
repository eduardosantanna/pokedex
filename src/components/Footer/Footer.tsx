import Link from 'next/link'
import Image from 'next/image'
import * as S from './styles'

export const Footer: React.FC = () => {
  return (
    <S.ContainerFooter>
      <S.ContainerContent>
        <S.ContainerText>
          <S.Text>
            Direitos de imagem para Nintendo & The Pokémon Company
          </S.Text>
          <S.Text>
            Dados pegos da API -{' '}
            <Link
              style={{ color: '#FFF' }}
              target="_blank"
              href="https://pokeapi.co/"
              passHref
            >
              pokeapi.co
            </Link>
          </S.Text>
        </S.ContainerText>
        <S.ContainerSocialMedia>
          <Image
            src="/assets/logo-linkedin.svg"
            width={28}
            height={28}
            alt="Icon Linkedin"
            style={{ cursor: 'pointer' }}
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/luis-eduardo-5baa54206',
                '_blank'
              )
            }
          />

          <Image
            src="/assets/logo-github.svg"
            width={28}
            height={28}
            alt="Icon Github"
            style={{ cursor: 'pointer' }}
            onClick={() =>
              window.open('https://github.com/eduardosantanna', '_blank')
            }
          />
        </S.ContainerSocialMedia>
      </S.ContainerContent>
    </S.ContainerFooter>
  )
}
