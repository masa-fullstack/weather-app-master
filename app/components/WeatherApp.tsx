import { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import DrawerContents from './DrawerContents'
import Details from './Details'
import useWeather, { Woeid } from './hooks/useWeather'
import Overview from './Overview'

export type ClearWoeid = () => void
export type SetDrawer = () => void

const WeatherApp: React.FC = () => {
  const [woeid, setWoeid] = useState<Woeid>()
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const { locations, locationWeekly, error } = useWeather(woeid)

  const clearWoeid: ClearWoeid = () => {
    setWoeid(null)
  }
  const openDrawer: SetDrawer = () => {
    setIsDrawerOpen(true)
  }
  const closeDrawer: SetDrawer = () => {
    setIsDrawerOpen(false)
  }
  //現在地ボタンでsetWoeid(null)
  //search for placeでlocationsを表示し、setWoeidする

  if (error)
    return (
      <div className="text-red-500 bg-gray-900 text-3xl font-light text-center pt-20 h-screen">
        failed to load
      </div>
    )

  if (!locationWeekly)
    return (
      <div className="text-white bg-gray-900 text-3xl font-light text-center pt-20 h-screen">
        loading...
      </div>
    )

  return (
    <div>
      <div className="grid md:grid-cols-3 h-screen">
        <div className="md:col-span-1">
          <Overview
            locations={locations}
            locationWeekly={locationWeekly}
            clearWoeid={clearWoeid}
            openDrawer={openDrawer}
          />
        </div>
        <div className="md:col-span-2">
          <Details locations={locations} locationWeekly={locationWeekly} />
        </div>
      </div>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false)
        }}
      >
        <DrawerContents
          locations={locations}
          closeDrawer={closeDrawer}
          setWoeid={setWoeid}
        ></DrawerContents>
      </Drawer>
    </div>
  )
}

export default WeatherApp
