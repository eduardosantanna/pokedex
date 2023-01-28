import Image from 'next/image'
import * as S from './styles'
import { IElementTypes } from './types'

interface IElementTagPropsData extends IElementTypes {
  cursorPointer?: boolean
  onClick?: () => void
}

export const ElementTag: React.FC<IElementTagPropsData> = ({
  typeElement,
  cursorPointer,
  onClick,
}) => {
  return (
    <S.ContainerElement
      onClick={onClick}
      cursorPointer={cursorPointer}
      typeElement={typeElement}
    >
      <Image
        src={`assets/${typeElement}.svg`}
        width={16}
        height={16}
        alt="Fire"
      />
      <S.TextElement>
        {typeElement[0].toLocaleUpperCase()}
        {typeElement.substring(1, typeElement.length)}
      </S.TextElement>
    </S.ContainerElement>
  )
}
