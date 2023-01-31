import Image from 'next/image'
import * as S from './styles'

export const PokeballLoading: React.FC = () => {
  return (
    <S.ContainerImageLoading>
      <Image
        width={256}
        height={256}
        alt="loading icon"
        src="/assets/loading-icon.gif"
      />
    </S.ContainerImageLoading>
  )
}
