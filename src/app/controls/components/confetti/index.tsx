import P5 from 'p5'
import { Accessor, createMemo, onCleanup } from 'solid-js'
import { sketch } from './sketch'

const _ = ({ when }: { when: Accessor<boolean> }) => {
  let p5: P5

  const root = (
    <div
      onClick={() => {
        console.log(p5)
      }}
      style={{ position: 'absolute', left: 0, top: 0 }}
    />
  ) as HTMLElement

  createMemo(() => {
    if (when()) {
      p5 = new P5(sketch, root)
    } else {
      p5?.remove()
    }
  })

  onCleanup(() => {
    p5?.remove()
  })

  return root
}

export default _
