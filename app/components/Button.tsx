type Props = {
  title: string
  onClick: () => void
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className="bg-gray-500 rounded text-sm text-white py-2 px-4"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  )
}

export default Button
