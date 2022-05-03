# `@hackclub/banner`

> React component for adding a [Hack Club](https://hackclub.com) banner to your club site

[![npm](https://img.shields.io/npm/v/@hackclub/banner.svg)](https://www.npmjs.com/package/@hackclub/banner) [![Build Status](https://travis-ci.org/hackclub/banner.svg?branch=master)](https://travis-ci.org/hackclub/banner)

## Install

Use npm or yarn as follows:

```bash
npm install --save @hackclub/banner
yarn add @hackclub/banner
```

## Usage

Place `<Banner />` anywhere on your club site homepage.

```jsx
import React from 'react'
import Banner from '@hackclub/banner'

export default () => (
  <main>
    <Banner />
    <h1>Hacking High School Hack Club</h1>
  </main>
)
```

### Custom props

```jsx
<Banner year={2020} style={{ width: '256px' }} />
```

<table>
  <tr>
    <th>Prop</th>
    <th>Effect</th>
  </tr>
  <tr>
    <td><code>year</code></td>
    <td>Number, one of <code>2016</code> to <code>2022</code>. Default: current year</td>
  </tr>
  <tr>
    <td><code>style</code></td>
    <td>Object, for custom styles</td>
  </tr>
</table>

## License

MIT © [Hack Club](https://hackclub.com)
