import Image from 'next/image'
import * as S from './styles'

export const PokemonFindError: React.FC = () => {
  return (
    <S.ContainerErrorCard>
      <S.ContainerContent>
        <S.ContainerImage>
          <Image
            width={32}
            height={32}
            alt="sad pikachu icon"
            src="/img/pikachu-sad.png"
          />
        </S.ContainerImage>
        <S.Text>Ops, pokémon não encontrado!</S.Text>
      </S.ContainerContent>
    </S.ContainerErrorCard>
  )
}
