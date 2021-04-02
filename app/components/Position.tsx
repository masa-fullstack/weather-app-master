type Props = {
  onClick: () => void
}

const Position: React.FC<Props> = (props) => {
  return (
    <button
      className="bg-gray-500 text-white rounded-full  p-1 material-icons"
      onClick={props.onClick}
    >
      gps_fixed
    </button>
  )
}

export default Position
