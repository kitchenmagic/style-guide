# Kitchen Magic Website Styles

Our CSS/SCSS is based on [BEM](http://getbem.com/introduction/) and a modified version of [SMACSS](https://smacss.com/). The SASS files are broken out into four main directories (Base, Layout, Components, Helpers) which helps organize the files and compile into a clean CSS file. 

## Install
`npm install`

## Compile SCSS
`npm run compile`

## SASS Directories
1. Base

The base directory contains the core styles.

* Global
* Grid
* Reset/Normalize
* Typography
* Responsive (this is a temporary file, will be moved to specific partials)

2. Layout
The layout directory contains styles that are global elements of a page.

* Header
* Page
* Footer

3. Components
The components directory are the module based elements on the site and will be reused over and over. This directory also holds all *Hubspot Modules* as well. The Hubspot Module CSS will not be compiled to the _main.css_ but will be put in each specific Hubspot module.

* Buttons
* Content Box
* Forms
* Icons
* Lists
* Modals 
* Progress Bars
* Tables
* Thumbnail Gallery
