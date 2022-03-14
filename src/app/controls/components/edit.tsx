import { Match, createSignal, Switch } from 'solid-js'
import { FaSolidLock, FaSolidPlus } from 'solid-icons/fa'
import { clearBoard, lockBoard } from 'core/actions'
import { colors } from 'theme'
import { dispatch } from '~/store'
import { colorModeValue } from '~/colorMode'
import { style } from './style'

const _ = () => {
  const [locked, setLocked] = createSignal(true)

  const background = colorModeValue(colors.gray[300], colors.gray[700])
  const color = colorModeValue(colors.black, colors.white)
  const onClick = () => {
    locked() ? dispatch(clearBoard) : dispatch(lockBoard)
    setLocked(prev => !prev)
  }
  return (
    <div style={style(background, color)} onClick={onClick}>
      <Switch>
        <Match when={locked()}>
          <FaSolidPlus size={18} />
        </Match>
        <Match when={!locked()}>
          <FaSolidLock size={18} />
        </Match>
      </Switch>
    </div>
  )
}

export default _
