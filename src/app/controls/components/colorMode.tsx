import { Match, Switch } from 'solid-js'
import { FaSolidMoon, FaSolidSun } from 'solid-icons/fa'
import { colors } from 'theme'
import {
  colorModeValue,
  getPredicates, 
  toggleColorMode
} from '../../../colorMode'
import { style } from './style'

const _ = () => {
  const color = colorModeValue(colors.black, colors.white)
  const background = colorModeValue(colors.gray[300], colors.gray[700])
  const { isDarkMode, isLightMode } = getPredicates()

  return (
    <div style={style(background, color)} onClick={toggleColorMode}>
      <Switch>
        <Match when={isLightMode()}>
          <FaSolidMoon size={20} />
        </Match>
        <Match when={isDarkMode()}>
          <FaSolidSun size={20} />
        </Match>
      </Switch>
    </div>
  )
}

export default _
