import { Match, Switch } from 'solid-js'
import { BiSolidMagicWand } from 'solid-icons/bi'
import { toggle } from 'core/actions'
import { autoSolveLens } from 'core/optics'
import { colors } from 'theme'
import { colorModeValue  } from '~/colorMode'
import { dispatch, state } from '~/store'
import { style } from './style'

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
          <BiSolidMagicWand size={24} />
        </div>
      </Match>
      <Match when={!state.toggles.autoSolve}>
        <div style={style(offBackground, offColor)} onClick={onClick}>
          <BiSolidMagicWand size={24} />
        </div>
      </Match>
    </Switch>
  )
}

export default _
