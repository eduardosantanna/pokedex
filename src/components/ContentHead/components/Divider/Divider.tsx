import Image from 'next/image'
import * as S from './styles'

export const Divider: React.FC = () => {
  return (
    <S.ContainerDivider>
      <Image src="/assets/fire.svg" width={50} height={50} alt="Fire" />
    </S.ContainerDivider>
  )
}
