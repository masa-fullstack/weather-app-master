import { ConsolidatedWeather } from './hooks/useWeather'
import Card from './Card'
import { format } from 'date-fns'
import Icon from './Icon'

type Props = {
  weatherData: ConsolidatedWeather
}

const DailyWeather: React.FC<Props> = (props) => {
  return (
    <Card
      title={format(new Date(props.weatherData.applicable_date), 'E. d MMM')}
    >
      <Icon
        Abbreviation={props.weatherData.weather_state_abbr}
        width={62}
        height={62}
      />
      <div className="w-full flex justify-around">
        <div className="text-sm text-white">
          {props.weatherData.max_temp.toFixed(0)}
          <span>℃</span>
        </div>
        <div className="text-sm text-gray-400">
          {props.weatherData.min_temp.toFixed(0)}
          <span>℃</span>
        </div>
      </div>
    </Card>
  )
}

export default DailyWeather
