import { IPokemonData } from '@/services/pokeapi/PokemonService/PokemonService'
import * as S from './styles'

interface IPokemonStatsListPropsData {
  pokemonData: IPokemonData
}

export const PokemonStatsList: React.FC<IPokemonStatsListPropsData> = ({
  pokemonData,
}) => {
  const descriptionFeatures = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Sp. Atk',
    'special-defense': 'Sp. Def',
    speed: 'Speed',
  }

  return (
    <S.ContainerStats>
      <S.TitleStats>Stats</S.TitleStats>
      <S.ListStatus>
        {pokemonData.stats.map((stats) => (
          <S.ElementListStatus key={stats.stat.name}>
            <S.StatsName>{descriptionFeatures[stats.stat.name]}</S.StatsName>
            <S.StatsValue>{stats.base_stat}</S.StatsValue>
            <S.ProgressBarBase>
              <S.ProgressBarValue progress={stats.base_stat} />
            </S.ProgressBarBase>
          </S.ElementListStatus>
        ))}
      </S.ListStatus>
    </S.ContainerStats>
  )
}
