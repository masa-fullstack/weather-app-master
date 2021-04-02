import Card from './Card'

type Props = {
  title: string
  content: string
  unit: string
}

const BigCard: React.FC<Props> = ({ children, title, content, unit }) => {
  return (
    <Card title={title}>
      <div className="my-3">
        <span className="text-6xl">{content}</span>
        <span className="text-3xl">{unit}</span>
      </div>
      <div>{children}</div>
    </Card>
  )
}

export default BigCard
