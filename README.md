# Tailwind CSS Playground

Minu katsetused tailwindcss raamistikuga

https://tailwindcss.com/

## Setup Tailwind CSS - minimal approach

### Requirements

Make sure you have Node.js and npm installed

### Install npx

```shell
npm install -g npx
```

### Install postcss

```shell
npm install -g postcss
```

### Create a CSS file (e.g. tailwind.css) and paste inside:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Run in terminal:

```shell
npx tailwindcss build tailwind.css -o style.css
```

### Include style.css in your document:

```html
<link rel="stylesheet" href="style.css">
```


### Create your Tailwind config file:

```shell
npx tailwindcss init
```

### Enable purge in tailwind.config.js to remove unused CSS

```js
module.exports = {
  purge: {
    enabled: true,
    content: [
      './*.html',
      './*.php',
    ],
  },
  theme: {},
  variants: {},
  plugins: [],
}
```

### Run in terminal:

```shell
npx tailwindcss build tailwind.css -o style.css
```

### Since we don't want to rely on our node_modules in our root folder, let's install PostCSS CLI and Autoprefixer globally.

```shell
npm install -g postcss-cli autoprefixer
```

### Run in terminal:

```shell
postcss style.css -u autoprefixer --no-map -o style.css
```

### To minify your CSS install cssnano

```shell
npm install -g cssnano
```

### Run in terminal:

```shell
postcss style.css -u cssnano --no-map -o style.min.css
```

### Include style.min.css in your document:

```html
<link rel="stylesheet" href="style.min.css">
```

### Make stuff easier to use and use NPM scripts

Create package.json

```shell
npm init -y
```

Enable in package.json:

```js
{
  "name": "var",
  "version": "1.0.0",
  "description": "",
  "main": "tailwind.config.js",
  "scripts": {
    "tailwind": "npx tailwindcss build tailwind.css -o style.css",
    "autoprefixer": "postcss style.css -u autoprefixer --no-map -o style.css",
    "minify": "postcss style.css -u cssnano --no-map -o style.min.css",
    "build": "npm run tailwind && npm run autoprefixer",
    "production": "npm run tailwind && npm run autoprefixer && npm run minify"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
## Tailwind CSS - commands

### Basic usage: process your CSS (development)

```shell
npm run tailwind
```

### Process your CSS + Autoprefixer (development)

```shell
npm run build
```

### Process your CSS + Autoprefixer + Minify CSS (production)

```shell
npm run production
```

https://dev.to/tomaszbujnowicz/setup-tailwind-css-in-20-seconds-without-nodemodules-1b83
https://github.com/tomaszbujnowicz/tailwindcss-minimal-setup
