<!-- Logo -->
<div align="center"><img src="https://www.kitchenmagic.com/hubfs/brand-guidelines/logo-github.png">
</div>

# 1. Kitchen Magic Website Styles

![David](https://img.shields.io/david/dev/expressjs/express.svg) [![Website shields.io](https://img.shields.io/website-up-down-green-red/https/www.kitchenmagic.com.svg)](https://www.kitchenmagic.com) [![GitHub stars](https://img.shields.io/github/stars/kitchenmagic/style-guide.svg?style=social&label=Star&maxAge=2592000)](https://github.com/kitchenmagic/style-guide/)

Our CSS/SCSS is based on [BEM](http://getbem.com/introduction/) and a modified version of [SMACSS](https://smacss.com/). The SASS files are broken out into four main directories (Base, Layout, Components, Helpers) which helps organize the files and compile into a clean CSS file. We also use secondary directories due to the complexity of using Hubspot's CMS.

## 1.1. Table of Contents
<!-- TOC -->

- [1. Kitchen Magic Website Styles](#1-kitchen-magic-website-styles)
    - [1.1. Table of Contents](#11-table-of-contents)
    - [1.2. Installation](#12-installation)
    - [1.3. Compile SASS](#13-compile-sass)
    - [1.4. SASS Directories](#14-sass-directories)
        - [1.4.1. Secondary Directories](#141-secondary-directories)
    - [1.5. Usage](#15-usage)
        - [1.5.1. How to use Variables](#151-how-to-use-variables)
        - [1.5.2. How to Select Font Sizes](#152-how-to-select-font-sizes)
        - [1.5.3. How to use Media Queries](#153-how-to-use-media-queries)
        - [1.5.4. Exporting for Hubspot Modules](#154-exporting-for-hubspot-modules)
    - [1.6. Updating Global CSS in Hubspot](#16-updating-global-css-in-hubspot)
    - [1.7. Rules](#17-rules)
    - [1.8. Contributing](#18-contributing)

<!-- /TOC -->

<sub><sup>Built with ❤️  by [Joshua Todd](https://github.com/Eruedraith)</sub></sup>
## 1.2. Installation
```
npm install
```

## 1.3. Compile SASS
We use [Gulp](https://gulpjs.com/) as our task manager. If you need to modify the tasks, go to  `gulpfile.js_`.
To run the compiler use: 

```
npm run compile
```

## 1.4. SASS Directories
1. Base

    * The base directory contains the core styles.

        * Global
        * Grid 
        * Reset/Normalize
        * Typography
        * Responsive (this is a temporary file, will be moved to specific partials)

2. Layout

    * The layout directory contains styles that are global elements of a page.

        * Header
        * Page
        * Footer

3. Components

    * The components directory are the module based elements on the site that will be reused over and over. This directory also holds all *Hubspot Modules* as well. 

        * Buttons
        * Content Box
        * Forms
        * Icons
        * Lists
        * Modals 
        * Progress Bars
        * Tables
        * Thumbnail Gallery

⚠️  The Hubspot Module CSS files will not be compiled into the `_main.css_` but will be added instead to each specific Hubspot module.

4. Helpers

    * The helper directory includes all functions, mixins and variables of the brand.

        * Functions
        * Mixins
        * Variables


### 1.4.1. Secondary Directories

5. Page

    * The page directory includes only specific one-off page styles and should only be used as a last resort.

        * [Careers](https://www.kitchenmagic.com/careers)
        * [Estimate Specials](https://www.kitchenmagic.com/estimate-specials)
        * [Homepage](https://www.kitchenmagic.com)
        * [Self Set](https://www.kitchenmagic.com/appointment)
        * [Share the Magic](https://www.kitchenmagic.com/share)   

6. Blog 

    * The blog directory includes all the styling for the [Kitchen Magic Blog](https://www.kitchenmagic.com/blog).

7. Vendors

    * The vendors directory includes all third party plugins we are using.

        * Foundation Grid
        * Foundation Visibility

8. Utilities 

    * The utilities partial includes any global helper classes. For example, text aligns and margins.

## 1.5. Usage

### 1.5.1. How to use Variables

Almost all variables are put within SASS Maps and need to be accessed as such (_the only exception is shadows_). 

For example, if you are styling a button and need to access the primary color variables it would look like this:

```sass
// This is an example of the color map in the _variables.scss partial
$km-colors: (
    primary: (
        'base':        #F01834,
        'light':       #FF999F,
        'dark':        #C30019,
    ),
);

// Button styling (with colors only).
// This is how you would access the color variables

.km-btn {
    background: color(primary, base);

    &:hover {
        background: color(primary, dark);
    }
}

```

### 1.5.2. How to Select Font Sizes 
If a typography element is not already selected in `_typography.scss` and you need to create a custom font size you need to use REM's instead of pixels. 
```sass 
// Use the px-to-rem mixin to calculate pixels to rems

.class {
    font-size: px-to-rem(12px);
}

```

### 1.5.3. How to use Media Queries
All media queries must be added to their specific partial and not in `_responsive.scss` (_this is being deprecated in the upcoming versions_).

The break points for the media queries are located in `_variables.scss`. 

Use these three mixins to design for different screen sizes: 

``` sass
@include respond-below($breakpoint)
@include respond-between($breakpoint-1, $breakpoint-2)
@include respond-above($breakpoint)
```

The breakpoint variables are:
* xs
* sm
* md 
* lg

Let's say you are updating the css for buttons on mobile, your code would look like:

``` sass
// Button Styles
.km-btn {
    display: inline-block;

    // For mobile devices, display full width
    @include respond-below(xs) {
        display: block;
    }
}
```
### 1.5.4. Exporting for Hubspot Modules
The Hubspot Module CSS files will not be compiled into the _main.css_ but will be added instead to each specific Hubspot module.

*Note*: When creating Hubspot Module styles, add this to the top of your SASS file to access all the variables, mixins and functions:

``` sass
// Variables, Mixins, Functions
@import 'styles/scss/helpers/_variables.scss';
@import 'styles/scss/helpers/_functions.scss';
@import 'styles/scss/helpers/_mixins.scss';

```

1. To export a file to an individual css file, remove the *"_"* in front of the file name (for example: `_product-card.scss` --> `product-card.scss`) and this will automatically compile to the CSS folder. 

2. Remove it from the `main.scss` file if it's currently being compiled to `main.css`. This helps our main stylesheet stay smaller and the styles for the modules will only be called when present on a page.

3. Then copy/paste your new file into Hubspot's Design Manager under `Coded files > Custom > pages > css > components > "your-new-file.css"`.

    ![hubspot-module](https://www.kitchenmagic.com/hubfs/developer-documentation/hubspot-upload-css.jpg)

4. Link the new stylesheet to the appropriate Module.
 
    ![hubspot-module](https://www.kitchenmagic.com/hubfs/developer-documentation/hubspot-link-stylesheet.jpg)

## 1.6. Updating Global CSS in Hubspot

Add `main.css` in Hubspot's Design Manager under `System > Default > HS_Default_Custom Styles.css`

## 1.7. Rules

1. Must use variables for all *fonts* and *colors*.
2. All font sizes must be in REM values, not pixels.
3. Hubspot Module CSS must be stored in Hubspot and not the `main.css` file.


## 1.8. Contributing
1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request