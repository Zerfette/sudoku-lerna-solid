import { createSignal, createEffect, Signal } from 'solid-js'
import { ColorMode } from './types'

const [colorMode, setColorMode] = createSignal(ColorMode.Dark)

const toggleColorMode = (): ColorMode =>
  setColorMode(cm => {
    const value = cm === ColorMode.Dark ? ColorMode.Light : ColorMode.Dark
    console.log(value)
    return value
  })

const colorModeValue = (
  {
    lightModeValue,
    darkModeValue
  }: {
    lightModeValue: string
    darkModeValue: string
  },
  [_, setValue]: Signal<string>
): void => {
  createEffect(
    () =>
      colorMode() === ColorMode.Dark
        ? setValue(darkModeValue)
        : setValue(lightModeValue),
    darkModeValue
  )
}

export { colorMode, toggleColorMode, colorModeValue }
