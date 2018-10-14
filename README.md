[![npm version](https://img.shields.io/npm/v/@eamode/eang.svg)](https://www.npmjs.com/package/@eamode/eang) 
[![travis build](https://img.shields.io/travis/EAmode/eang.svg)](https://travis-ci.org/EAmode/eang)

# eang
Reactive components for Angular with customizable UX themes

## Why eang?
eang is fast, fully reactive, and really flexible angular development framework with a set of themeable visual components. Through its native support for reactive programming, eang enables your angular apps to automatically update the user experience in response to event stream data from event sources. Eang plays well with your existing Angular architecture.

## Install
1. Add `eang` to your Angular project by running:

```npm install -S @eamode/eang``` 

2. Import selected `eang` modules in your project module file. e.g. `app.module.ts`:

```
import { PanelModule, AutoCompleteModule, ...} from '@eamode/eang'
@NgModule({
  ...
  imports: [..., PanelModule, AutoCompleteModule, ...],
  ...
})
```

3. In order to select a theme, add the name of that theme to the class names of your component root:

```
...
<body>
  <mycomponent-root class="mode"></mycomponent-root>
</body>
...
```
| Theme Name | Description |
|------------|-------------|
| mode       | default theme of [MODE](https://www.eamode.com) |
| material   | Components designed following Google's Material design |
| your-theme-here | It is easy to add your own completely customized theme as well.|

## Develop
```sh
git clone https://github.com/EAmode/eang.git
cd eang
npm install
npm start
```
Go to http://localhost:4204/

Start `npm run watch` in a different terminal. At that point everything should be hot-reloading during development.

### Createing your own eang CSS theme
By default, eang components are styled using the theme called 'mode'. However, you can create your own custom theme by following the steps below.
1. Create a file: `themes/<nameofyourtheme>.css`
2. Create a directory: `themes/<nameofyourtheme>`
3. Inside the `themes/<nameofyourtheme>` directory...
  * create a file called `variables.css` (you can copy a variables.css file from one of the other existing theme directories)
  * create a file `<nameofeangcomponen>.css`
4. to modify fonts and colors, you can play with the values inside the file `themes/<nameofyourtheme>/variables.css`
5. set up a post-css pipeline
  * add a line into the file `'`package.json`'` inside of the `'` "scripts": {`'` section as follows: `"css:<nameofyourtheme>": "postcss themes/all.css themes/<nameofyourtheme>.css themes/<nameofyourtheme>.css themes/<nameofyourtheme>/**/*.css -o playground/dist/<nameofyourtheme>.css",`


### travis (build, publish to npm, reference docs)
eang's build scripts enforce linting to prevent errors.
to commit your changes to eang, just  run `npm run commit` and follow the prompts
