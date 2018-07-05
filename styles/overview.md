@page overview KM Style Guide

### How to Add/Build the Style Guide
------

##### Understanding the File Structure

* **/style-guide** - dynamically generated for the style guide.
* **/style-guide-theme** - used only to style the style guide itself.
* **/styles** - used to build the SCSS/CSS of the website and contain `.md` files.
* **/demos** - build demos for the style guide.

##### How to Run/Update Style Guide
**Run Server**: 
Use this to run the server and then open _localhost:8000/style-guide_ in your browser.
```
> npm run server
```

**Update for KM Theme Style Guide Files**: 
```
> documentjs -f
```
**Compile Style Guide**: 
```
> document js
```
**Compile SCSS**: 
```
> npm run compile
```

If you need further documentation, visit [DocumentCSS](https://documentcss.com/) & [Customization Docs](https://github.com/bitovi/documentjs/blob/master/docs/guides/customizing.md).