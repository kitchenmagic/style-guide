@page overview Overview

### Welcome to the Kitchen Magic Style Guide!
The **Kitchen Magic Docs** provide guidelines for the aesthetic, function, and form of our UX/UI to provide a consistent experience on our website. This is a living document and is under constant iteration and remember: 
>"with great power comes great responsibility"
<iframe src="https://giphy.com/embed/26BRs2WKBMG9pYRFK" width="480" height="343" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

This style guide was built using [DocumentCSS](https://documentcss.com/). 

### How to Add/Build the Style Guide
------

##### Understanding the File Structure
* **/style-guide** - dynamically generated for the style guide.
* **/style-guide-theme** - used only to style the style guide itself.
* **/styles** - used to build the SCSS/CSS of the website and contain `.md` files.
* **/demos** - build demos for the style guide.

##### How to Run/Update Style Guide
**Run Server**: 
```
> npm run server
```
**Update for KM Theme Style Guide Files**: 
```
> sudo documentjs -f
```
* **Compile Style Guide**: 
```
> document js
```