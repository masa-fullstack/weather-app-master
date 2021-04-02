import React from 'react'
import compassData from '../data/WindDirectionCompass.json'
import { Compass } from './hooks/useWeather'

type Props = {
  compass: Compass
}

const Arrow: React.FC<Props> = (props) => {
  const compassClassName = compassData[props.compass]
  return (
    <span
      className={`material-icons rounded-full bg-gray-700 p-2 m-2 transform ${compassClassName}`}
    >
      navigation
    </span>
  )
}

export default Arrow
