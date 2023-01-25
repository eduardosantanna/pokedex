import { ApiPokemon } from "../config/config"

type PokemonStats = {
  base_stat: number
  stat: {
    name: 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed'
  }
}

type PokemonType = {
  type: {
    name: 'fire'
    | 'flying'
    | 'bug'
    | 'dark'
    | 'dragon'
    | 'electric'
    | 'grass'
    | 'poison'
    | 'water'
    | 'fairy'
    | 'fighting'
    | 'ghost'
    | 'ground'
    | 'ice'
    | 'normal'
    | 'psychic'
    | 'rock'
    | 'steel'
  }
}

type TPokemonAllData = {
  name: string
  url: string
}

export interface IPokemonData {
  id: number
  name: string
  height: number
  weight: number
  stats: PokemonStats[]
  types: PokemonType[]
  sprites: {
    other: {
      home: {
        front_default: string
      }
    }
  }
}

interface IPokemonAllData {
  count: number
  next: string
  previus: string
  results: TPokemonAllData[]
}

class PokemonService {
  public async getAllPokemons(limit: number = 9, pag: number = 0): Promise<IPokemonData[] | Error> {
    try {
      const { data }: { data: IPokemonAllData } = await ApiPokemon.get(`/pokemon?limit=${limit}&offset=${(pag - 1) * limit}`)

      let allPokemons: IPokemonData[] = []

      for (let i of data.results) {
        const result = await this.getPokemonByName(i.name)
        if (result instanceof Error) return new Error(result.message)
        allPokemons.push(result)
      }

      return allPokemons
    } catch (error) {
      return new Error((error as { message: string }).message || 'Error on find data for all pokemons')
    }
  }

  public async getPokemonByName(pokemonName: string): Promise<IPokemonData | Error> {
    try {
      const { data } = await ApiPokemon.get(`/pokemon/${pokemonName}`)
      if (data) return data
      return new Error('Error on find pokemon data')
    } catch (error) {
      return new Error((error as { message: string }).message || 'Error on find pokemon data')
    }
  }
}

export { PokemonService }