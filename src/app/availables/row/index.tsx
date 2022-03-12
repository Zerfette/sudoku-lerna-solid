import { For } from 'solid-js'
import { range } from 'fp-ts/NonEmptyArray'
import Number from './number'

const _ = ({ availables }: { availables: number[] }) => (
    <For each={range(1, 9)}>
      {i => <Number i={i} availables={availables} />}
    </For>
)

export default _
