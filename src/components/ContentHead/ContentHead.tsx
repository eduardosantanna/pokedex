import Image from 'next/image'
import { ElementTag } from '../ElementTag/ElementTag'
import { Divider } from './components/Divider/Divider'
import * as S from './styles'

interface IContentHeadPropsData {
  onClickButtonMoreDetails: () => void
}

export const ContentHead: React.FC<IContentHeadPropsData> = ({
  onClickButtonMoreDetails,
}) => {
  return (
    <div className="main-container">
      <S.ContainerContent>
        <S.ContentDescription>
          <S.Text fontSize={1.5} fontWeight={700}>
            #006
          </S.Text>
          <S.ContainerElements>
            <ElementTag typeElement="fire" />
            <ElementTag typeElement="flying" />
          </S.ContainerElements>
          <S.TextTitle>CHARIZARD</S.TextTitle>
          <S.Text fontWeight={400}>
            Charizard se assemelha a um grande tradicional dragão europeu.
            Apesar da semelhança, Charizard é explicitamente um Pokémon dos
            tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma
            &quot;Mega Charizard X&quot;; No entanto, ele pode aprender ataques
            do tipo Dragão.
          </S.Text>
          <S.Button onClick={onClickButtonMoreDetails}>
            <Image
              src="/assets/icon-bolt-orange.svg"
              width={25}
              height={25}
              alt="bolt icon"
            />
            Mais Detalhes
          </S.Button>
        </S.ContentDescription>
        <Divider />
        <S.ContentImage>
          <Image src="/img/charizard.png" fill priority alt="Charizard image" />
        </S.ContentImage>
      </S.ContainerContent>
    </div>
  )
}
