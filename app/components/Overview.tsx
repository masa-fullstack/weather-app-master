import { format } from 'date-fns'
import Button from './Button'
import { LocationSearchData, LocationWeeklyData } from './hooks/useWeather'
import Icon from './Icon'
import Position from './Position'
import { ClearWoeid, SetDrawer } from './WeatherApp'

type Props = {
  locations: LocationSearchData
  locationWeekly: LocationWeeklyData
  clearWoeid: ClearWoeid
  openDrawer: SetDrawer
}

const Overview: React.FC<Props> = (props) => {
  return (
    <div className="h-full bg-purple-700 bg-background bg-no-repeat bg-top relative p-10">
      <div className="relative z-10 text-gray-100">
        <div className="flex justify-between">
          <div className="">
            <Button title="Search for places" onClick={props.openDrawer} />
          </div>
          <div className="">
            <Position onClick={props.clearWoeid} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-20">
            <Icon
              Abbreviation={
                props.locationWeekly.consolidated_weather[0].weather_state_abbr
              }
              width={234}
              height={234}
            />
          </div>
          <div className="my-12">
            <span className="font-bold text-9xl">
              {props.locationWeekly.consolidated_weather[0].the_temp.toFixed(0)}
            </span>
            <span className="text-4xl text-gray-400">℃</span>
          </div>
          <div className="text-4xl text-gray-400 mb-10">
            {props.locationWeekly.consolidated_weather[0].weather_state_name}
          </div>
          <div className="text-gray-400 mb-5">
            Today・{format(new Date(props.locationWeekly.time), 'E. d MMM')}
          </div>
          <div className="flex align-center text-gray-400">
            <span className="material-icons">location_on</span>
            {props.locationWeekly.title}
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-background::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(12, 13, 23, 0.85);
        }
      `}</style>
    </div>
  )
}

export default Overview
