import { useStyle } from './style'

const _ = ({ i, availables }: { i: number; availables: number[] }) => {
  const style = useStyle()
  return (
    <div style={availables.includes(i) ? style().on : style().off}>{i}</div>
  )
}

export default _