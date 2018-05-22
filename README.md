# eang
Reactive components for Angular with customizable UX themes

[![npm version](https://img.shields.io/npm/v/eang.svg)](https://www.npmjs.com/package/eang) [![travis build](https://img.shields.io/travis/eascientific/eang.svg)](https://travis-ci.org/eascientific/eang) version testcoverage

### quicklinks
Documentation | StackBlitz Template

## Why eang?
eang is fast, fully reactive, and really flexible angular development framework with a set of themeable visual components. Through its native support for reactive programming, eang enables your angular apps to automatically update the user experience in response to event stream data from event sources. Eang plays well with your existing Angular architecture.

## Install eang
To install eang into your angular project run: `npm install eang` 

## Play with eang components
To see examples of eang components and customize them run: `npm run playground` 

## How to use eang components
You can mix and match eang components with your existing angular app. 

### Create your own eang CSS theme
By default, eang components are styled using the theme called 'mode'. However, you can create your own custom theme by following the steps below.
1. Create a file: `themes/<nameofyourtheme>.css`
2. Create a directory: `themes/<nameofyourtheme>`
3. Inside the `themes/<nameofyourtheme>` directory...
  * create a file called `variables.css` (you can copy a variables.css file from one of the other existing theme directories)
  * create a file `<nameofeangcomponen>.css`
4. to modify fonts and colors, you can play with the values inside the file `themes/<nameofyourtheme>/variables.css`
5. set up a post-css pipeline
  * add a line into the file `'`package.json`'` inside of the `'` "scripts": {`'` section as follows: `"css:<nameofyourtheme>": "postcss themes/all.css themes/<nameofyourtheme>.css themes/<nameofyourtheme>.css themes/<nameofyourtheme>/**/*.css -o playground/dist/<nameofyourtheme>.css",`

## Create your own eang component
You can create new eange components. Each eang component has three files:
* `<nameofcomponent>.ts`
* `<nameofcomponent>.html`
* `<nameofcomponent>.css`

### travis (build, publish to npm, reference docs)
eang's build scripts enforce linting to prevent errors.
to commit your changes to eang, just  run `npm run commit` and follow the prompts
### test
