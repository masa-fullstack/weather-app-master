type Props = {
  title: string
}

const Card: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="bg-gray-800 p-4 flex flex-col items-center min-h-full">
      <div className="text-sm text-white ">{title}</div>
      {children}
    </div>
  )
}

export default Card
