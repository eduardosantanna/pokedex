import { ElementTag } from '@/components/ElementTag/ElementTag'
import { PokemonFeatures } from '@/components/PokemonFeatures/PokemonFeatures'
import { IPokemonData } from '@/services/pokeapi/PokemonService/PokemonService'
import Image from 'next/image'
import * as S from './styles'

interface IPokemonCardModalPropsData {
  pokemonData: IPokemonData
}

export const PokemonCardModal: React.FC<IPokemonCardModalPropsData> = ({
  pokemonData,
}) => {
  return (
    <S.ContainerPokemonCard>
      <S.ContainerAlign>
        <S.ContainerImage>
          <Image
            width={256}
            height={256}
            alt="pokemon image"
            src={pokemonData.sprites.other.home.front_default}
          />
        </S.ContainerImage>

        <S.PokemonNumber>
          #{pokemonData.id >= 1 && pokemonData.id < 10 && '00'}
          {pokemonData.id >= 10 && pokemonData.id <= 99 && '0'}
          {pokemonData.id}
        </S.PokemonNumber>

        <S.PokemonName>
          {pokemonData.name[0].toUpperCase()}
          {pokemonData.name.substring(1, pokemonData.name.length)}
        </S.PokemonName>

        <S.ContainerTypes>
          {pokemonData.types.map((type) => (
            <ElementTag key={type.type.name} typeElement={type.type.name} />
          ))}
        </S.ContainerTypes>

        <S.ContainerFeatures>
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
        </S.ContainerFeatures>
      </S.ContainerAlign>
    </S.ContainerPokemonCard>
  )
}
