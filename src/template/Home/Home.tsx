'use client'

import { CaroulselElementsFilter } from '@/components/CaroulselElementsFilter/CaroulselElementsFilter'
import { ContentHead } from '@/components/ContentHead/ContentHead'
import { ElementTag } from '@/components/ElementTag/ElementTag'
import { Header } from '@/components/Header/Header'
import { ModalPokemonDetail } from '@/components/ModalPokemonDetail/ModalPokemonDetail'
import { PokemonCard } from '@/components/PokemonCard/PokemonCard'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { StartButton } from '@/components/StartButton/StartButton'
import { StartPageButton } from '@/components/StartPageButton/StartPageButton'
import { Waves } from '@/components/Waves/Waves'
import { pokemonTypesInArray } from '@/helpers/pokemonTypesInArray'
import {
  IPokemonData,
  PokemonService,
  PokemonType,
} from '@/services/pokeapi/PokemonService/PokemonService'
import { useEffect, useRef, useState } from 'react'
import * as S from './styles'

export const Home: React.FC = () => {
  const [pokemonAllData, setPokemonAllData] = useState<IPokemonData[]>([])
  const [stopUseEffect, SetStopUseEffect] = useState(true)
  const [pag, setPag] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [currentPokemon, setCurrentPokemon] = useState({} as IPokemonData)
  const refObserver = useRef<HTMLDivElement>(null)
  const [currentTypeByFilter, setCurrentTypeByFilter] =
    useState<PokemonType['type']['name']>()

  useEffect(() => {
    if (stopUseEffect) {
      ;(async () => {
        const result = await new PokemonService().getAllPokemons(9, 1)
        if (result instanceof Error) return console.log(result.message)
        setPokemonAllData((prevState) => [...prevState, ...result])
      })()
    } else {
      return
    }
    SetStopUseEffect(false)
  }, [stopUseEffect])

  useEffect(() => {
    const iObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log('entrou')
      }
    })
    iObserver.observe(refObserver.current as Element)
  }, [])

  return (
    <>
      {isOpen && (
        <ModalPokemonDetail
          onClose={() => setIsOpen((prevState) => !prevState)}
          pokemonData={currentPokemon}
        />
      )}
      <StartPageButton />
      <S.ContainerHead>
        <Header />
        <ContentHead
          onClickButtonMoreDetails={() => (
            setCurrentPokemon(
              pokemonAllData[
                pokemonAllData.findIndex((el) => el.name === 'charizard')
              ]
            ),
            setIsOpen((prevState) => !prevState)
          )}
        />
        <Waves />
      </S.ContainerHead>
      <S.MainContainer>
        <S.SearchAndFilterContainer>
          <S.ContainerStartAndFilterTypes>
            <StartButton />
            <CaroulselElementsFilter />
          </S.ContainerStartAndFilterTypes>
          <SearchBar />
        </S.SearchAndFilterContainer>
        <div className="main-container">
          <S.Divider />
        </div>
        <S.ContainerListPokemon>
          {pokemonAllData.map((pokemonData) => (
            <PokemonCard
              onClick={() => (
                setCurrentPokemon(pokemonData),
                setIsOpen((prevState) => !prevState)
              )}
              key={pokemonData.id}
              pokemonData={pokemonData}
            />
          ))}
        </S.ContainerListPokemon>
        <div ref={refObserver}></div>
      </S.MainContainer>
    </>
  )
}
