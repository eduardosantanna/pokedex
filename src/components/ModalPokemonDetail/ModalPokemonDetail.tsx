import { IPokemonData } from '@/services/pokeapi/PokemonService/PokemonService'
import Image from 'next/image'
import { useEffect } from 'react'
import { ElementTag } from '../ElementTag/ElementTag'
import { PokemonFeatures } from '../PokemonFeatures/PokemonFeatures'
import { PokemonCardModal } from './components/PokemonCardModal/PokemonCardModal'
import { PokemonStatsList } from './components/PokemonStatsList/PokemonStatsList'
import * as S from './styles'

interface IModalPokemonDetailProps {
  pokemonData: IPokemonData
  onClose: () => void
}

export const ModalPokemonDetail: React.FC<IModalPokemonDetailProps> = ({
  pokemonData,
  onClose,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const descriptionFeatures = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Sp. Atk',
    'special-defense': 'Sp. Def',
    speed: 'Speed',
  }

  return (
    <S.ContainerModalOberlay onClick={onClose}>
      <S.ContainerContentModal onClick={(e) => e.stopPropagation()}>
        <S.BluerEffect typeElement={pokemonData.types[0].type.name} />
        <PokemonCardModal pokemonData={pokemonData} />
        <PokemonStatsList pokemonData={pokemonData} />

        <S.CloseButton onClick={onClose}>
          <Image
            height={40}
            width={40}
            alt="close modal icon"
            src="/assets/close.svg"
          />
        </S.CloseButton>
        <S.DividerModal>
          <Image
            width={56}
            height={56}
            alt="pokemon icon"
            src="/assets/pokeball-diviser.svg"
          />
        </S.DividerModal>
      </S.ContainerContentModal>
    </S.ContainerModalOberlay>
  )
}
