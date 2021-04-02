import { Dispatch, SetStateAction } from 'react'
import Select from 'react-select'
import { LocationSearchData, Woeid } from './hooks/useWeather'
import { SetDrawer } from './WeatherApp'

type Props = {
  locations: LocationSearchData
  closeDrawer: SetDrawer
  setWoeid: Dispatch<SetStateAction<Woeid>>
}
type FormatOptionLabel = (location: LocationSearchData[number]) => JSX.Element

const DrawerContents: React.FC<Props> = (props) => {
  //react-selectのスタイリング
  const customStyles = {
    menu: (styles) => ({
      ...styles,
      backgroundColor: 'black',
      width: '350px',
    }),
    menulist: (styles) => ({
      ...styles,
    }),
    option: (styles) => ({
      ...styles,
      '&:hover': { backgroundColor: 'gray' },
    }),

    placeholder: (styles) => ({ ...styles, color: 'white' }),
    clearIndicator: (styles) => ({ ...styles, color: 'white' }),
    dropdownIndicator: (styles) => ({ ...styles, color: 'white' }),
    singleValue: (styles) => ({ ...styles, color: 'white' }),

    control: (styles) => ({
      ...styles,
      backgroundColor: 'black',
      height: '56px',
      width: '350px',
      color: 'white',
      paddingLeft: '15px',
      borderRadius: '15px',
    }),
  }

  // 選択肢の整形表示
  const formatOptionLabel: FormatOptionLabel = (location) => (
    <div className="flex">
      <span className="material-icons">room</span>
      <div>{location.title}</div>
    </div>
  )

  return (
    <div className="h-full w-screen md:max-w-md bg-gray-900 text-white p-5">
      <div className="text-right mb-5" onClick={props.closeDrawer}>
        <span className="material-icons cursor-pointer p-1">close</span>
      </div>
      <div className="w-full h-14">
        <Select
          styles={customStyles}
          options={props.locations}
          formatOptionLabel={formatOptionLabel}
          getOptionValue={(option) => option['woeid'].toString()}
          placeholder="select location"
          isClearable={true}
          isLoading={false}
          isSearchable={false}
          menuIsOpen={true}
          onChange={(e) => {
            props.setWoeid(e.woeid)
            props.closeDrawer()
          }}
          defaultValue={null}
        />
      </div>
    </div>
  )
}

export default DrawerContents
