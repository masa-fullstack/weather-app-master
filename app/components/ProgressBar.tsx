type Props = {
  bgcolor: string
  completed: string
}

const ProgressBar: React.FC<Props> = ({ bgcolor, completed }) => {
  const fillerStyles = {
    width: `${completed}%`,
  }

  return (
    <div className="w-52">
      <div className="flex justify-between">
        <div>0</div>
        <div>50</div>
        <div>100</div>
      </div>

      <div className="h-4 bg-gray-300 rounded-lg m-2">
        <div className={`h-full rounded-lg ${bgcolor}`} style={fillerStyles}>
          <span className="text-white text-xs align-top pl-3"></span>
        </div>
      </div>
      <div className="text-right">%</div>
    </div>
  )
}

export default ProgressBar
