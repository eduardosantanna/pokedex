import Image from 'next/image'
import * as S from './styles'

interface IPokemonFeaturesPropsData {
  type: 'weight' | 'height'
  weight: number
  height: number
}

export const PokemonFeatures: React.FC<IPokemonFeaturesPropsData> = ({
  type,
  height,
  weight,
}) => {
  return (
    <S.ContainerFeatures>
      <S.ContainerImageAndFeature>
        <Image
          width={20}
          height={20}
          alt="Feature icon"
          src={
            type === 'weight'
              ? '/assets/icon-weight.svg'
              : '/assets/icon-height.svg'
          }
        />
        <S.TextGeneric fontWeight={700} fontSize={1}>
          {type === 'weight'
            ? weight / 10 + ' ' + 'kg'
            : height / 10 + ' ' + 'm'}
        </S.TextGeneric>
      </S.ContainerImageAndFeature>
      <S.ContainerDescription>
        <S.TextGeneric fontWeight={400} fontSize={1}>
          {type === 'weight' ? 'Peso' : 'Altura'}
        </S.TextGeneric>
      </S.ContainerDescription>
    </S.ContainerFeatures>
  )
}

// Altura divide por 10 para se obter em metros
// Peso divide por 10 para se obter em kg
