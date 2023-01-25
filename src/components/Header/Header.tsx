'use client'

import Image from 'next/image'
import * as S from './styles'

export const Header: React.FC = () => {
  return (
    <div className="main-container">
      <S.Header>
        <Image
          src="/assets/logo-pokemon.svg"
          width={140}
          height={50}
          alt="Logo"
        />
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
      </S.Header>
    </div>
  )
}
