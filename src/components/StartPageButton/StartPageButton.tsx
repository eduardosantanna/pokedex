import Image from 'next/image'
import { useEffect, useState } from 'react'
import * as S from './styles'

export const StartPageButton: React.FC = () => {
  const [visibleButton, setVisibleButton] = useState(false)

  const moveToStartPage = () => {
    window.scrollTo({ top: 0 })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 800) {
        setVisibleButton(true)
      } else {
        setVisibleButton(false)
      }
    })
  })

  return (
    <>
      {visibleButton && (
        <S.ContainerButton>
          <S.ButtonStart onClick={moveToStartPage}>
            <Image
              height={34}
              width={34}
              alt={'arrow icon'}
              src="/assets/icon-up-arrow.svg"
            />
          </S.ButtonStart>
        </S.ContainerButton>
      )}
    </>
  )
}
