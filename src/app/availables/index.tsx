import { createMemo, Match, Switch } from 'solid-js'
import { Availables } from 'core/types'
import { fontSizes } from 'theme'
import { state } from '~/store'
import { isEmpty, isNonEmpty } from 'fp-ts/Array'
import { fold } from 'fp-ts/Option'
import { useStyle } from './style'
import Row from './row'

const _ = () => {
  const style = useStyle()
  const onNone = () => 'Make a selection to get hints.'
  const onSome = () => 'No valid hints. Make a new selection to get hints.'
  const defaultText = createMemo(() => fold(onNone, onSome)(state.selection))
  const cell = createMemo(() => state.availables.cell as number[])
  const row = createMemo(() => state.availables.row as number[])
  const col = createMemo(() => state.availables.col as number[])
  const reg = createMemo(() => state.availables.reg as number[])
  return (
    <div style={style()}>
      <Switch>
        <Match when={isNonEmpty(cell())}>
          <Row availables={cell()} />
        </Match>
        <Match when={isNonEmpty(row())}>
          <Row availables={row()} />
        </Match>
        <Match when={isNonEmpty(col())}>
          <Row availables={col()} />
        </Match>
        <Match when={isNonEmpty(reg())}>
          <Row availables={reg()} />
        </Match>
        <Match
          when={
            isEmpty(cell()) &&
            isEmpty(row()) &&
            isEmpty(col()) &&
            isEmpty(reg())
          }
        >
          <p style={{ 'font-size': fontSizes.xl }}>{defaultText}</p>
        </Match>
      </Switch>
    </div>
  )
}

export default _
