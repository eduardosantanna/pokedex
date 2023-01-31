import { KeyboardEvent } from 'react'
import * as S from './styles'

interface ISearchBarProps {
  onClick: () => void
  onChange: (value: string) => void
  onKeyEnter: () => void
  inputValue: string
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  onChange,
  onClick,
  onKeyEnter,
  inputValue,
}) => {
  const keyEnterManipulatorEvent = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onKeyEnter()
    }
  }
  return (
    <S.MainContainerSearchBar>
      <S.ContainerSearchAndButton onSubmit={(e) => e.preventDefault()}>
        <S.InputSearch
          required
          onKeyDown={(e) => keyEnterManipulatorEvent(e)}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Pesquisar pokémon"
          value={inputValue}
          type="text"
        />
        <S.ButtonSearch type="submit" onClick={onClick}>
          S
        </S.ButtonSearch>
      </S.ContainerSearchAndButton>
    </S.MainContainerSearchBar>
  )
}
