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
import { SwiperSlide } from 'swiper/react'
import * as S from './styles'
import { PokeballLoading } from '@/components/PokeballLoading/PokeballLoading'
import { PokemonFindError } from '@/components/PokemonFindError/PokemonFindError'
import { Footer } from '@/components/Footer/Footer'

export const Home: React.FC = () => {
  const [pokemonAllData, setPokemonAllData] = useState<IPokemonData[]>([])
  const [pokemonAllDataFilterType, setPokemonAllDataFilterType] = useState<
    IPokemonData[]
  >([])
  const [pokemonFindUnique, setPokemonFindUnique] = useState<IPokemonData[]>()
  const [stopObserver, setStopObserver] = useState(false)
  const [pag, setPag] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [currentPokemon, setCurrentPokemon] = useState({} as IPokemonData)
  const [inputSearchPokemon, setInputSearchPokemon] = useState('')
  const refObserver = useRef<HTMLDivElement>(null)
  const [currentTypeByFilter, setCurrentTypeByFilter] =
    useState<PokemonType['type']['name']>()

  useEffect(() => {
    if (!stopObserver) {
      setIsLoading(true)
      if (currentTypeByFilter) {
        new PokemonService()
          .getPokemonsByType(currentTypeByFilter, pag)
          .then((result) => {
            console.log(pag)
            setIsLoading(false)
            if (result instanceof Error) return console.log(result.message)
            if (result.length < 9) return setStopObserver(true)
            setPokemonAllDataFilterType((oldState) => [...oldState, ...result])
          })
      } else if (currentTypeByFilter === undefined) {
        new PokemonService().getAllPokemons(9, pag).then((result) => {
          setIsLoading(false)
          if (result instanceof Error) return console.log(result.message)
          setPokemonAllData((oldState) => [...oldState, ...result])
        })
      }
    }
  }, [currentTypeByFilter, pag, stopObserver])

  useEffect(() => {
    const iObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        if (!stopObserver) {
          setPag((oldState) => oldState + 1)
        }
      }
    })
    iObserver.observe(refObserver.current as Element)
  }, [stopObserver])

  const findPokemon = async () => {
    setPokemonFindUnique((oldState) => [])
    setIsLoading(true)
    if (inputSearchPokemon.length <= 0) return

    const resultPokemon = await new PokemonService().getPokemonByName(
      inputSearchPokemon.toLowerCase()
    )
    if (resultPokemon instanceof Error) {
      setInputSearchPokemon('')
      setIsLoading(false)
      setStopObserver(true)
      return setPokemonFindUnique((oldState) => [])
    }
    setIsLoading(false)
    setPokemonFindUnique((oldState) => [resultPokemon])
    setInputSearchPokemon('')
    setStopObserver(true)
  }

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
            <StartButton
              onClick={() => (
                setCurrentTypeByFilter(undefined),
                setPag((oldState) => 1),
                setPokemonAllDataFilterType([]),
                setPokemonAllData([]),
                setStopObserver(false),
                setPokemonFindUnique(undefined)
              )}
            />
            <CaroulselElementsFilter>
              {pokemonTypesInArray.map((type) => (
                <SwiperSlide key={type}>
                  <ElementTag
                    typeElement={type}
                    cursorPointer
                    onClick={() => (
                      setCurrentTypeByFilter(type),
                      setPokemonAllDataFilterType((oldState) => []),
                      setStopObserver(false),
                      setPag((oldState) => 1),
                      setPokemonFindUnique(undefined)
                    )}
                  />
                </SwiperSlide>
              ))}
            </CaroulselElementsFilter>
          </S.ContainerStartAndFilterTypes>
          <SearchBar
            inputValue={inputSearchPokemon}
            onKeyEnter={findPokemon}
            onClick={findPokemon}
            onChange={(value) => setInputSearchPokemon(value)}
          />
        </S.SearchAndFilterContainer>
        <div className="main-container">
          <S.Divider />
        </div>
        <S.ContainerListPokemon>
          {pokemonFindUnique?.length === 0 && !isLoading ? (
            <PokemonFindError />
          ) : (
            <></>
          )}
          {pokemonFindUnique &&
            pokemonFindUnique.map((pokemonData) => (
              <PokemonCard
                key={pokemonData.name}
                pokemonData={pokemonData}
                onClick={() => (
                  setCurrentPokemon(pokemonData),
                  setIsOpen((prevState) => !prevState)
                )}
              />
            ))}

          {!currentTypeByFilter &&
            !pokemonFindUnique &&
            pokemonAllData.map((pokemonData) => (
              <PokemonCard
                onClick={() => (
                  setCurrentPokemon(pokemonData),
                  setIsOpen((prevState) => !prevState)
                )}
                key={pokemonData.name}
                pokemonData={pokemonData}
              />
            ))}

          {currentTypeByFilter &&
            !pokemonFindUnique &&
            pokemonAllDataFilterType.map((pokemonData) => (
              <PokemonCard
                onClick={() => (
                  setCurrentPokemon(pokemonData),
                  setIsOpen((prevState) => !prevState)
                )}
                key={pokemonData.name}
                pokemonData={pokemonData}
              />
            ))}
          {isLoading && <PokeballLoading />}
        </S.ContainerListPokemon>
        <div ref={refObserver}></div>
        <div className="main-container">
          <S.Divider />
        </div>
      </S.MainContainer>
      <Footer />
    </>
  )
}
