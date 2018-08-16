 # Kitchen Magic Website Styles

Our CSS/SCSS is based on [BEM](http://getbem.com/introduction/) and a modified version of [SMACSS](https://smacss.com/). The SASS files are broken out into four main directories (Base, Layout, Components, Helpers) which helps organize the files and compile into a clean CSS file. We also use secondary directories due to the complexity of using Hubspot's CMS.

<sub><sup>Built with ❤️  by [Joshua Todd](https://github.com/Eruedraith)</sub></sup>

## Installation
```
npm install
```

## Compile SCSS
Compiler uses [Gulp](https://gulpjs.com/). If you need to modify the tasks, go to  `gulpfile.js_`.
To run the compiler use: 

```
npm run compile
```

## SASS Directories
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


### Secondary Directories

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


## Rules

1. Must use variables for all fonts and colors.
2. All font sizes must be in REM (Use the `px-to-rem` mixin to calculate pixels to rems). Example: 

```sass 

.class {
    font-size: px-to-rem(12px);
}

```



## Contributing
1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request