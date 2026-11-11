---
title: npm 📦 React OpenTable
description: React wrapper for Opentable Reservation Widget
authors: sahil
tags: [opentable, react-opentable, react-opentable wrapper]
---

I published my very first npm package: [`react-opentable (v2.0.0)`](https://www.npmjs.com/package/react-opentable)

![](https://badgen.net/npm/v/react-opentable) ![](https://badgen.net/npm/dt/react-opentable) ![](https://badgen.net/bundlephobia/minzip/react-opentable) ![](https://badgen.net/npm/license/react-opentable)

This post intends to be a helper document for the same, and will be kept upto date, if the package ever changes. As of writing this post, v2.0.0 is the latest and stable version of the package.

<!--truncate-->

`react-opentable` is a React wrapper for opentable's reservation widget.

:::info

DISCLAIMER: **`react-opentable`** is not affiliated to **`Opentable Inc.,`** or it's employees.

:::

### Requirements

Works only with [React v16.8](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html) and above.

`react-opentable` uses hooks and will not work with previous versions 

### Exports

There are two main exports from `react-opentable`

- `OpenTable` React Component
- `positions` JS Object

### Usage

```jsx OpenTable Component
<OpenTable rid="123123" />
```

:::info

**`rid`** is a required prop, the component won't function correctly without it.

:::

Default Props:

| defaultProps           | description                                  |
| ---------------------- | -------------------------------------------- |
| type='standard'        | Uses the standard widget type                |
| theme='standard'       | Default standard theme                       |
| iframe=true            | opens the widget in an iframe (recommended)  |
| newtab=false           | widget won't open reservation in a new tab   |
| position='bottom-left' | widget opens in the `'bottom-left'` position |

### Customization

The widget can be positioned in one of 5 positions namely 'top-left', 'top-right' ,'bottom-left' (default), 'bottom-right' and 'unset' (if you want to position the element through css, use this).

To avoid typos you can use the `positions` object with keys `positions.POSITION_TOP_LEFT`, `positions.POSITION_TOP_RIGHT`, `positions.POSITION_BOTTOM_LEFT`, `positions.POSITION_BOTTOM_RIGHT` and `positions.POSITION_UNSET`

For further customisations, pass `customClassName`, this className gets attached to the container of component.

### Demo

Here's a code sandbox for you to tinker with:

<iframe src="https://codesandbox.io/embed/unruffled-snow-0zmiw?fontsize=14&hidenavigation=1&theme=light" style={{width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden'}} title="unruffled-snow-0zmiw" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" />

### Need feedback

Do let me know how can I make this components more useful for you :grin:
