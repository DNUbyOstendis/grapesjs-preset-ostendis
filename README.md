# [GrapesJS Ostendis Preset]

This preset configures GrapesJS to be used with some unique features and blocks for the [Ostendis E-Recrui­ting sys­tem](https://www.ostendis.com/en)

## Summary

* Commands
  - `gjs-get-inlined-html` Get html with inlined CSS
  - `gjs-open-import-template` Opens a modal for the import
  - `gjs-toggle-images` Enable/Disable images
* Blocks
  - `sect100` A section with 1 100% cell inside
  - `sect50` A section with 2 50% cells inside
  - `sect30` A section with 3 33.3333% cells inside
  - `sect37` A section with 2 cells inside: 30% and 70%
  - `button` Simple button
  - `divider` Divider block
  - `text` Simple text component
  - `text-sect` A block with 2 text components, respectively for the heading and paragraph
  - `image` Simple image component
  - `quote` Text component for quotes
  - `grid-items` Block of 2 components in row
  - `list-items` List of 2 components
* Plugin
  * Name: `gjs-preset-newsletter`
  * Options:
    - `modalTitleImport` Title for the import modal, default: 'Import template'
    - `modalLabelImport` Label for the import modal, default: ''
    - `modalLabelExport` Label for the export modal, default: ''
    - `modalBtnImport` Label for the import button, default: 'Import'
    - `importPlaceholder` Template as a placeholder inside import modal, default: ''
    - `inlineCss` If `true`, inlines CSS on export, default: `true`
    - `cellStyle` Default style used inside blocks `td`s, default:
      `{
        padding: 0,
        margin: 0,
        'vertical-align': 'top'
      }`
    - `tableStyle` Default style used for blocks tables, default:
      `{
        height: '150px',
        margin: '0 auto 10px auto',
        padding: '5px 5px 5px 5px',
        width: '100%'
      }`


## Download

Download using one of the options:

* `npm i grapesjs-preset-ostendis` or `yarn add grapesjs-preset-ostendis`
* Latest release link https://github.com/DNUbyOstendis/grapesjs-preset-ostendis/releases/latest


## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<link href="path/to/grapesjs-preset-ostendis.css" rel="stylesheet"/>

<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-preset-ostendis.min.js"></script>

<div id="gjs"></div>
<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      plugins: ['gjs-preset-ostendis'],
      pluginsOpts: {
        'gjs-preset-ostendis': {
          modalTitleImport: 'Import template',
          // ... other options
        }
      }
  });
</script>
```


## Development

Clone the repository

```sh
$ git clone https://github.com/DNUbyOstendis/grapesjs-preset-ostendis.git
$ cd grapesjs-preset-ostendis
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies`, so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```


## License

BSD 3-Clause

Based on: [GrapesJS Newsletter Preset](http://grapesjs.com/demo-newsletter-editor.html)
Copyright (c) 2016, [Artur Arseniev](https://github.com/artf)
All rights reserved.
