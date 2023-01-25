import axios from 'axios'

export const ApiPokemon = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})