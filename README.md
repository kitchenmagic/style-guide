 
 ![Logo](https://www.kitchenmagic.com/hubfs/brand-guidelines/logo-github.png)
 # Kitchen Magic Website Styles

Our CSS/SCSS is based on [BEM](http://getbem.com/introduction/) and a modified version of [SMACSS](https://smacss.com/). The SASS files are broken out into four main directories (Base, Layout, Components, Helpers) which helps organize the files and compile into a clean CSS file. We also use secondary directories due to the complexity of using Hubspot's CMS.

<sub><sup>Built with ❤️  by [Joshua Todd](https://github.com/Eruedraith)</sub></sup>
## Table of Contents
<!-- TOC -->

- [Kitchen Magic Website Styles](#kitchen-magic-website-styles)
    - [Table of Contents](#table-of-contents)
    - [0.1. Installation](#01-installation)
    - [0.2. Compile SASS](#02-compile-sass)
    - [0.3. SASS Directories](#03-sass-directories)
        - [0.3.1. Secondary Directories](#031-secondary-directories)
    - [0.4. Usage](#04-usage)
        - [0.4.1. How to use Variables](#041-how-to-use-variables)
        - [0.4.2. How to Select Font Sizes](#042-how-to-select-font-sizes)
        - [0.4.3. How to use Media Queries](#043-how-to-use-media-queries)
        - [0.4.4. Exporting for Hubspot Modules](#044-exporting-for-hubspot-modules)
    - [0.5. Rules](#05-rules)
    - [0.6. Contributing](#06-contributing)

<!-- /TOC -->
## 0.1. Installation
```
npm install
```

## 0.2. Compile SASS
We use [Gulp](https://gulpjs.com/) as our task manager. If you need to modify the tasks, go to  `gulpfile.js_`.
To run the compiler use: 

```
npm run compile
```

## 0.3. SASS Directories
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

⚠️  The Hubspot Module CSS files will not be compiled into the _main.css_ but will be added instead to each specific Hubspot module.

4. Helpers

    * The helper directory includes all functions, mixins and variables of the brand.

        * Functions
        * Mixins
        * Variables


### 0.3.1. Secondary Directories

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

## 0.4. Usage

### 0.4.1. How to use Variables

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

### 0.4.2. How to Select Font Sizes 
If a typography element is not already selected in `_typography.scss` and you need to create a custom font size you need to use REM's instead of pixels. 
```sass 
// Use the px-to-rem mixin to calculate pixels to rems

.class {
    font-size: px-to-rem(12px);
}

```

### 0.4.3. How to use Media Queries
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
### 0.4.4. Exporting for Hubspot Modules
The Hubspot Module CSS files will not be compiled into the _main.css_ but will be added instead to each specific Hubspot module.

1. To export a file to an individual css file, remove the *"_"* from the file name (for example: `_product-card.scss`--> `product-card.scss`) and this will automatically compile to the CSS folder. 

2. Remove it from the `main.scss` file if it's currently being compiled to `main.css`. This helps our main stylesheet stay smaller and the styles for the modules will only be called when present on a page.

3. Then copy and paste into the Hubspot Module 👍

![hubspot-module](https://www.kitchenmagic.com/hubfs/brand-guidelines/hubspot-module-example.png)

## 0.5. Rules

1. Must use variables for all *fonts* and *colors*.
2. All font sizes must be in REM values, not pixels.
3. Hubspot Module CSS must be stored in Hubspot and not the `main.css` file.


## 0.6. Contributing
1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request