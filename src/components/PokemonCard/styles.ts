import styled from 'styled-components'

enum backgroundColorsElements {
  fire = '#FF9900',
  flying = '#89BDFF',
  bug = '#7BCF00',
  dark = '#5A566A',
  dragon = '#0076FF',
  electric = '#FFDE00',
  grass = '#1CD80E',
  poison = '#F149FF',
  water = '#14A8FF',
  fairy = '#ff76ff',
  fighting = '#ff215b',
  ghost = '#4e6aff',
  ground = '#ff6b0d',
  ice = '#2ee4c6',
  normal = '#9fa39d',
  psychic = '#ff6c64',
  rock = '#d8bc5a',
  steel = '#23a1bd',
}

interface IElementTypes {
  typeElement:
  | 'fire'
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

export const ContainerPokemonCard = styled.div`
  flex: 1;
  width: 100%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: rgba(6, 11, 40, 0.15);
  border: 1px solid #24293F;
  border-radius: 24px;
  position: relative;
  margin-top: 200px;
`

export const ContainerImage = styled.div`
  position: absolute;
  top: -170px;
  width: 256px;
  height: 256px;
  z-index: 1;
`

export const PokemonNumber = styled.p`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  z-index: 1;
  padding-top: 112px;
`

export const PokemonTitle = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  z-index: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding: 0px 15px;
`

export const ContainerPokemonTypes = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  z-index: 1;
`

export const ContainerPokemonFeatures = styled.div`
  display: flex;
  gap: 26px;
  margin-top: 22px;
  z-index: 1;
`

export const BackGroundBlur = styled.div<IElementTypes>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 24px;
  display: flex;
  justify-content: center;

  &::after {
    content: '';
    width: 200px;
    height: 200px;
    display: block;
    background: ${({ typeElement }) => backgroundColorsElements[typeElement]};
    filter: blur(128px);
    top: 0;
    right: 0;
  }
`

export const ButtonMoreDetails = styled.button<IElementTypes>`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 0px 0px 24px 24px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1rem;
  padding: 12px 0px;
  gap: 12px;
  margin-top: 32px;
  cursor: pointer;
  z-index: 1;
  background-color: ${({ typeElement }) => backgroundColorsElements[typeElement]};
`