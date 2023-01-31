import Image from 'next/image'
import * as S from './styles'

interface IStartButtonProps {
  onClick?: () => void
}

export const StartButton: React.FC<IStartButtonProps> = ({ onClick }) => {
  return (
    <S.ButtonStartContainer>
      <S.Button onClick={onClick}>
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
