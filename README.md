# implicit-component

> simple dependency injection for react components

[![NPM](https://img.shields.io/npm/v/implicit-component.svg)](https://www.npmjs.com/package/implicit-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save implicit-component
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'implicit-component'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [LeadingLight](https://github.com/LeadingLight)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
