import * as S from './styles'

export const SearchBar: React.FC = () => {
  return (
    <S.MainContainerSearchBar>
      <S.ContainerSearchAndButton>
        <S.InputSearch placeholder="Pesquisar pokémon" type="text" />
        <S.ButtonSearch>S</S.ButtonSearch>
      </S.ContainerSearchAndButton>
    </S.MainContainerSearchBar>
  )
}
