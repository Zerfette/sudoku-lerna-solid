import { Accessor, For } from 'solid-js'
import { range } from 'fp-ts/NonEmptyArray'
import Number from './number'

type Props = { availables: Accessor<number[]> }

const _ = ({ availables }: Props) => (
  <For each={range(1, 9)}>{i => <Number i={i} availables={availables} />}</For>
)

export default _
