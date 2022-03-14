import { Show } from 'solid-js'
import { fontSizes } from 'theme'
import { useModel } from './model'
import { useStyle } from './style'
import Row from './row'

const _ = () => {
  const style = useStyle()
  const { fallbackText, hintExists, values } = useModel()
  return (
    <div style={style()}>
      <Show
        when={hintExists()}
        fallback={<p style={{ 'font-size': fontSizes.xl }}>{fallbackText}</p>}
      >
        <Row availables={values} />
      </Show>
    </div>
  )
}

export default _
