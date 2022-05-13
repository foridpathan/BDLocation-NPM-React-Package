# react-bd-location

> It&#x27;s a simple npm package that show divisions, districts and upazilas of Bangladesh.

[![NPM](https://img.shields.io/npm/v/react-bd-location.svg)](https://www.npmjs.com/package/react-bd-location) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-bd-location
```

## Usage

```jsx
import React, { Component } from 'react'

import { BDLocations } from 'react-bd-location'

class Example extends Component {
  render() {
    return <BDLocations onChange={(e) => console.log(e)} />
  }
}
```
Control with some Props.

| props        | Default       | Type  |
| -------------|:-------------:|-------:|
| bn           | false         |Boolean |
| showLable    | true          |Boolean |
| className    | ''            |String  |
| label        | null          |Object  |
| placeholder  | null          |Object  |
| onChange     | null          |Function|

## Examples
```jsx
<BDLocations
  onChange={(e) => console.log(e)}
  bn={true}
  showLable={true}
  className=""
  label={{
    division: "",
    district: "",
    upazila: ""
  }}
  placeholder={{
    division: "",
    district: "",
    upazila: ""
  }}
/>
```

## License

MIT © [git+https://github.com/foridpathan/BDLocation-NPM-React-Package.git](https://github.com/foridpathan/BDLocation-NPM-React-Package.git)
