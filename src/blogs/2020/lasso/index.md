---
path: "/blog/2020/lasso"
date: "2020-04-22"
title: "Analyze your bundle in Lasso-js."
---

## Why this post?

Creating a High-Performance Javascript app is our high priority. We need module bundler tools like Webpack, browserify, Lasso, etc. In order to achieve this, we will be using Lasso as our module bundler. If you are new to Lasso js, this post won't cover those kindly look out the documentation. 
In most websites, these module bundlers are used to ship the code to the browsers very carefully after minification and bundling.

> If we're shipping huge bundles for our app, this is where endorsing modern bundling techniques like code-splitting, tree-shaking and Service Worker caching can really make a huge difference. That said, even a small bundle, written poorly or with poor library choices can result in the main thread being pegged for a long time in compilation or function call times - [Addy Osmani](https://twitter.com/addyosmani).

But with our web apps becoming ever so increasingly complex I ran into a problem definitely many developers would have came across, how we can know what gets bundled into our apps? How do we track the size of those bundles? We want to make sure we don't send too much JavaScript all at once and slow down our apps. Some developer's mistake can easily increase the size of your bundle in production, how to avoid those ?.

To tackle above problems, we need a tool which should visualize the bundle shipped in to production.

## Lasso Analyzer

[lasso-analyzer](https://github.com/pajaydev/lasso-analyzer) tool is similar to Webpack-bundle-analyzer that parses the bundle and shows visually what all files present in the JS bundle.
This tool scans the bundle and builds a visualization of what’s inside it. This tool helps the Developers to see what makes the bundle to bloat and to find large or unnecessary dependencies.

### Install lasso-analyzer tool

```sh
$ npm install --save-dev lasso-analyzer
```

To install globally

```sh
$ npm install -g lasso-analyzer
```

### Options

- **--output** To change the generated output filename. (default - lasso-analyze.html)
- **--c** Visualize the bundle with colors

### Usage

- Use it as CLI using the below command

```sh
lasso-analyzer <--bundle path--> --output <--output filename-->
```

Creates outputFilename.html in your project structure.

- Use it as lasso plugin as shown below.

```javascript
require('lasso').configure({
    ...
    plugins: [
        'lasso-analyzer',
        ...
    ]
});
```
