import { IPokemonData } from '@/services/pokeapi/PokemonService/PokemonService'
import Image from 'next/image'
import { ElementTag } from '../ElementTag/ElementTag'
import { PokemonFeatures } from '../PokemonFeatures/PokemonFeatures'
import * as S from './styles'

interface IPokemonCardPropsData {
  pokemonData: IPokemonData
  onClick: () => void
}

export const PokemonCard: React.FC<IPokemonCardPropsData> = ({
  pokemonData,
  onClick,
}) => {
  return (
    <S.ContainerPokemonCard>
      <S.BackGroundBlur typeElement={pokemonData.types[0].type.name} />
      <S.ContainerImage>
        <Image
          src={
            pokemonData.sprites.other.home.front_default ||
            '/assets/pokemon-image-skeleton.svg'
          }
          width={256}
          height={256}
          alt="pokemon image"
          placeholder="blur"
          blurDataURL="/assets/pokemon-image-skeleton.svg"
        />
      </S.ContainerImage>
      <S.PokemonNumber>
        #{pokemonData.id >= 1 && pokemonData.id < 10 && '00'}
        {pokemonData.id >= 10 && pokemonData.id <= 99 && '0'}
        {pokemonData.id}
      </S.PokemonNumber>
      <S.PokemonTitle>
        {pokemonData.name[0].toUpperCase()}
        {pokemonData.name.substring(1, pokemonData.name.length)}
      </S.PokemonTitle>
      <S.ContainerPokemonTypes>
        {pokemonData.types.map((CurrentTypeSlot) => (
          <ElementTag
            key={CurrentTypeSlot.type.name}
            typeElement={CurrentTypeSlot.type.name}
          />
        ))}
      </S.ContainerPokemonTypes>
      <S.ContainerPokemonFeatures>
        <PokemonFeatures
          type="weight"
          height={pokemonData.height}
          weight={pokemonData.weight}
        />
        <PokemonFeatures
          type="height"
          height={pokemonData.height}
          weight={pokemonData.weight}
        />
      </S.ContainerPokemonFeatures>
      <S.ButtonMoreDetails
        onClick={onClick}
        typeElement={pokemonData.types[0].type.name}
      >
        <Image
          src="/assets/icon-bolt.svg"
          height={24}
          width={24}
          alt="icon bolt"
        />
        Mais Detalhes
      </S.ButtonMoreDetails>
    </S.ContainerPokemonCard>
  )
}
