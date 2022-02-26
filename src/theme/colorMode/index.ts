import { createSignal, createEffect, Accessor } from 'solid-js'
import { ColorMode } from './types'

const [colorMode, setColorMode] = createSignal(ColorMode.Dark)

const toggleColorMode = (): ColorMode =>
  setColorMode(cm => (cm === ColorMode.Dark ? ColorMode.Light : ColorMode.Dark))

const colorModeValue = (
  lightModeValue: string,
  darkModeValue: string
): Accessor<string> => {
  const [value, setValue] = createSignal(darkModeValue)
  createEffect(
    () =>
      colorMode() === ColorMode.Dark
        ? setValue(darkModeValue)
        : setValue(lightModeValue),
    darkModeValue
  )
  return value
}

export { colorMode, toggleColorMode, colorModeValue }
