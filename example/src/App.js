import React from 'react'
import { useMyHook } from 'implicit-component'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App