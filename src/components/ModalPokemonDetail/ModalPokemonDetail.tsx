import { IPokemonData } from '@/services/pokeapi/PokemonService/PokemonService'
import Image from 'next/image'
import { useEffect } from 'react'
import { ElementTag } from '../ElementTag/ElementTag'
import { PokemonFeatures } from '../PokemonFeatures/PokemonFeatures'
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
        <S.ContainerPokemonCard>
          <S.ContainerImage>
            <Image
              width={256}
              height={256}
              alt="pokemon image"
              src={pokemonData.sprites.other.home.front_default}
            />
          </S.ContainerImage>
          <S.TextGeneric paddingTop={82} fontSize={1.2} fontWeight={700}>
            #{pokemonData.id >= 1 && pokemonData.id < 10 && '00'}
            {pokemonData.id >= 10 && pokemonData.id <= 99 && '0'}
            {pokemonData.id}
          </S.TextGeneric>
          <S.TextGeneric fontSize={1.9} fontWeight={700}>
            {pokemonData.name[0].toUpperCase()}
            {pokemonData.name.substring(1, pokemonData.name.length)}
          </S.TextGeneric>
          <S.ContainerTypes>
            {pokemonData.types.map((type) => (
              <ElementTag key={type.type.name} typeElement={type.type.name} />
            ))}
          </S.ContainerTypes>
          <S.ContainerFeatures>
            <PokemonFeatures
              type="weight"
              weight={pokemonData.weight}
              height={pokemonData.height}
            />
            <PokemonFeatures
              type="height"
              weight={pokemonData.weight}
              height={pokemonData.height}
            />
          </S.ContainerFeatures>
        </S.ContainerPokemonCard>

        <S.ContainerFeaturesList>
          <S.TextGeneric textAlign="left" fontSize={2} fontWeight={400}>
            Stats
          </S.TextGeneric>
          <S.ListFeatures>
            {pokemonData.stats.map((status) => (
              <S.ElementListFeature key={status.stat.name}>
                <S.ContainerLimiterFeature flex={0.7}>
                  <S.TextGeneric
                    width={100}
                    fontSize={1}
                    fontWeight={400}
                    textAlign="left"
                  >
                    {descriptionFeatures[status.stat.name]}
                  </S.TextGeneric>
                </S.ContainerLimiterFeature>

                <S.ContainerLimiterFeature flex={0.7}>
                  <S.TextGeneric fontSize={1} fontWeight={700}>
                    {status.base_stat}
                  </S.TextGeneric>
                </S.ContainerLimiterFeature>

                <S.ContainerLimiterFeature flex={3}>
                  <S.ProgressBarFeature progress={status.base_stat} />
                </S.ContainerLimiterFeature>
              </S.ElementListFeature>
            ))}
          </S.ListFeatures>
        </S.ContainerFeaturesList>

        <S.CloseButton onClick={onClose}>
          <Image
            height={40}
            width={40}
            alt="close modal icon"
            src="/assets/close.svg"
          />
        </S.CloseButton>
      </S.ContainerContentModal>
    </S.ContainerModalOberlay>
  )
}
