import Image from 'next/image'
import * as S from './styles'

export const StartButton: React.FC = () => {
  return (
    <S.ButtonStartContainer>
      <S.Button>
        <Image
          src="/assets/icon-home.svg"
          width={20}
          height={20}
          alt="Home icon"
        />
        Início
      </S.Button>
    </S.ButtonStartContainer>
  )
}
