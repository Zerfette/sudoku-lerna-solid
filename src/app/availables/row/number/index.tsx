import { Accessor } from 'solid-js'
import { useStyle } from './style'

type Props = {
  i: number
  availables: Accessor<number[]>
}

const _ = ({ i, availables }: Props) => {
  const style = useStyle()
  return (
    <div style={availables().includes(i) ? style().on : style().off}>{i}</div>
  )
}

export default _
