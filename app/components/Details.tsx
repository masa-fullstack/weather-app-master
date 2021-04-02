import Arrow from './Arrow'
import BigCard from './BigCard'
import DailyWeather from './DailyWeather'
import { LocationSearchData, LocationWeeklyData } from './hooks/useWeather'
import ProgressBar from './ProgressBar'

type Props = {
  locations: LocationSearchData
  locationWeekly: LocationWeeklyData
}

const Details: React.FC<Props> = (props) => {
  const todayWeather = props.locationWeekly.consolidated_weather[0]
  return (
    <div className="h-full bg-gray-900 py-20 px-3 flex flex-col items-center text-white ">
      <div className="flex flex-1">
        <div className="max-w-3xl">
          <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
            {props.locationWeekly.consolidated_weather
              .slice(1)
              .map((weatherData) => {
                return (
                  <DailyWeather
                    key={weatherData.id}
                    weatherData={weatherData}
                  />
                )
              })}
          </div>
          <div className="text-xl font-semibold mt-20 mb-5">
            Today&apos;s Hightlights
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <BigCard
                title="Wind status"
                content={todayWeather.wind_speed.toFixed()}
                unit="mph"
              >
                <div className="mt-5 flex items-center">
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <Arrow compass={todayWeather.wind_direction_compass} />
                  <span className="">
                    {todayWeather.wind_direction_compass}
                  </span>
                </div>
              </BigCard>
            </div>
            <div>
              <BigCard
                title="Humidity"
                content={todayWeather.humidity.toFixed()}
                unit="%"
              >
                <ProgressBar
                  completed={todayWeather.humidity.toFixed()}
                  bgcolor="bg-yellow-300"
                />
              </BigCard>
            </div>
            <div>
              <BigCard
                title="Visibility"
                content={todayWeather.visibility.toFixed(1)}
                unit="miles"
              ></BigCard>
            </div>
            <div>
              <BigCard
                title="Air Pressure"
                content={todayWeather.air_pressure.toFixed()}
                unit="mb"
              ></BigCard>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full h-6 flex justify-center item-center text-white mb-10">
        <div className="border-t text-center pt-5">
          created by masa @ DevChallenges.io
        </div>
      </footer>
    </div>
  )
}

export default Details
