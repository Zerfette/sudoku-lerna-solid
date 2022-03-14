import { createMemo } from 'solid-js'
import { state } from '~/store'
import { isNonEmpty } from 'fp-ts/Array'
import { fold } from 'fp-ts/Option'

export const useModel = () => {
  const cell = createMemo(() => state.availables.cell as number[])
  const row = createMemo(() => state.availables.row as number[])
  const col = createMemo(() => state.availables.col as number[])
  const reg = createMemo(() => state.availables.reg as number[])
  const onNone = () => 'Make a selection to get hints.'
  const onSome = () => 'No valid hints. Make a new selection to get hints.'
  return {
    fallbackText: createMemo(() => fold(onNone, onSome)(state.selection)),
    hintExists: createMemo(
      () =>
        isNonEmpty(cell()) ||
        isNonEmpty(row()) ||
        isNonEmpty(col()) ||
        isNonEmpty(reg())
    ),
    values: createMemo(() =>
      isNonEmpty(cell())
        ? cell()
        : isNonEmpty(row())
        ? row()
        : isNonEmpty(col())
        ? col()
        : reg()
    )
  }
}
