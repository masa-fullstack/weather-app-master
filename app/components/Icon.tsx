import Image from 'next/image'
import AbbreviationIcon from '../data/AbbreviationIcon.json'

type Props = {
  Abbreviation: string
  width: number
  height: number
}

const Icon: React.FC<Props> = (props) => {
  const iconUrl = AbbreviationIcon.filter(
    (object) => object.Abbreviation === props.Abbreviation
  ).shift().Icon
  return (
    <div>
      <Image src={iconUrl} width={props.width} height={props.height} />
    </div>
  )
}

export default Icon
