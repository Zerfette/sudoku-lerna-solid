import { createSignal, createEffect, Accessor, createMemo } from 'solid-js'
import { ColorMode } from './types'

const [colorMode, setColorMode] = createSignal(ColorMode.Dark)
const getPredicates = () => ({
  isDarkMode: createMemo(() => colorMode() === ColorMode.Dark),
  isLightMode: createMemo(() => colorMode() === ColorMode.Light)
})

const toggleColorMode = (): ColorMode =>
  setColorMode(cm => (cm === ColorMode.Dark ? ColorMode.Light : ColorMode.Dark))

const colorModeValue = <T>(
  lightModeValue: T,
  darkModeValue: T
): Accessor<T> => {
  const [value, setValue] = createSignal(darkModeValue)
  createEffect(() =>
    getPredicates().isDarkMode()
      ? setValue(() => darkModeValue)
      : setValue(() => lightModeValue)
  )
  return value
}

export { colorMode, ColorMode, colorModeValue, getPredicates, toggleColorMode }
