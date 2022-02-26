import { Component } from 'solid-js'
import { Cell } from '../../../../store/types'
import { $cell } from './style'

const _: Component<{ cell: Cell }> = ({ cell }) => {
  return (
    <div style={$cell(cell)}>
      <p>{cell.value}</p>
    </div>
  )
}

export default _
