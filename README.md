## About

This sample React application lets you quickly play with simple React concepts in your local browser. It uses client-side Babel to transpile JSX to JavaScript on the fly. You will need to run these files from a local web server to avoid browser security issues ([details here](https://stackoverflow.com/questions/53042123/can-babel-standalone-be-used-if-index-html-is-served-locally-no-webserver)).


Each component has a **class-based** and a **function-based** version. This allows you to view two of the same components side-by-side and compare the syntax, logic, and readability differences between **class** and **function** components.

You can switch between using class and function components by changing the path to each script file at the bottom of `index.html`. For example:

Class-based components:

``` javascript
<script src="components-class/title.js" type="text/babel"></script>
<script src="components-class/trail.js" type="text/babel"></script>
<script src="components-class/filter-typeahead.js" type="text/babel"></script>
<script src="components-class/filter-rating.js" type="text/babel"></script>
<script src="components-class/app.js" type="text/babel"></script>
```

Function-based components:

``` javascript
<script src="components-function/title.js" type="text/babel"></script>
<script src="components-function/trail.js" type="text/babel"></script>
<script src="components-function/filter-typeahead.js" type="text/babel"></script>
<script src="components-function/filter-rating.js" type="text/babel"></script>
<script src="components-function/app.js" type="text/babel"></script>
```

## Live Demo

* [https://www.brandonbruno.com/sites/code/reactdemo](https://www.brandonbruno.com/sites/code/reactdemo)

## React Learning Resources

* https://reactjs.org/docs/hello-world.html

* https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

* https://react-tutorial.app

## Toolchain Sample

For a complete example of a developer-ready React toolchain, visit this repo:

[https://github.com/bmbruno/react-toolchain-base](https://github.com/bmbruno/react-toolchain-base)
