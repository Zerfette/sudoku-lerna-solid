import { Match, Switch } from 'solid-js'
import { BiSolidMagicWand } from 'solid-icons/bi'
import { colorModeValue, colors } from '../../../theme'
import { style } from './style'
import { dispatch, state } from '../../../store'
import { toggle } from '../../../store/actions'
import { autoSolveLens } from '../../../store/optics'

const _ = () => {
  const offBackground = colorModeValue(colors.gray[300], colors.gray[700])
  const onBackground = colorModeValue(colors.purple[700], colors.purple[300])
  const offColor = colorModeValue(colors.black, colors.white)
  const onColor = colorModeValue(colors.white, colors.black)
  const onClick = () => dispatch(toggle({ lens: autoSolveLens }))
  return (
    <Switch>
      <Match when={state.toggles.autoSolve}>
        <div style={style(onBackground, onColor)} onClick={onClick}>
          <BiSolidMagicWand size={22} />
        </div>
      </Match>
      <Match when={!state.toggles.autoSolve}>
        <div style={style(offBackground, offColor)} onClick={onClick}>
          <BiSolidMagicWand size={22} />
        </div>
      </Match>
    </Switch>
  )
}

export default _
