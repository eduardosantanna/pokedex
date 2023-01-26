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

export const ContainerModalOberlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  @media (max-width: 1000px) {
    padding: 224px 16px 112px 16px;
  }

  @media (max-width: 500px) {
    padding: 500px 16px 112px 16px;
  }
`

export const ContainerContentModal = styled.div`
  position: relative;
  width: 948px;
  height: 352px;
  background: rgba(6, 11, 40, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 40px 72px;
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    height: 734px;
    padding: 40px 26px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 27.75px;
  right: 27.75px;

  @media (max-width: 900px) {
    top: -140px;
    right: 0;
  }
`

export const BluerEffect = styled.div<IElementTypes>`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  top: 0;
  left: 0;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    height: 200px;
    width: 200px;
    background: ${({ typeElement }) => backgroundColorsElements[typeElement]};
    filter: blur(128px);
    top: 0;
    left: 65px;

    @media (max-width: 1000px) {
      left: 0;
      right: 0;
      margin: auto;
    }
  }
`

export const DividerModal = styled.div`
  position: absolute;
  top: 50%;
  left: 334px;
  transform: translateY(-50%);

  &::after {
    position: absolute;
    content: '';
    width: 1px;
    height: 124px;
    background-color: rgba(255, 255, 255, 0.25);
    top: -146px;
    left: 50%;
  }

  &::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 124px;
    background-color: rgba(255, 255, 255, 0.25);
    bottom: -146px;
    left: 50%;
  }
`