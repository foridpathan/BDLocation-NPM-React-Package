import React from 'react'

import { BDLocations } from '@react/bd-location'

const App = () => {
  return <BDLocations
    onChange={(e) => console.log(e)}
    bn={true} />
}

export default App
