---
title: "Blog Development #1"
date: 2024-07-14
path: blogDev1.js
project: Blog
iteration: 1
---
# Blog Development #1
## On Coding Blind
14/07/2024

While I have my reasons for blogging as an exercise (See: Why Blogging?), these iterative development updates will focus more on the technical side of things.

I chiefly wanted to have my blog be self-managed in terms of hosting and written from scratch.

I had a vague idea of what both of those concepts would look like and rather than suffer through research paralysis, I thought I'd get more out of the experience by just going for it. 

### Design Choices and Tooling

#### Obsidian

A year or so back, the awesome YouTube channel <a href="https://www.youtube.com/@NoBoilerplate" target="_blank">No Boilerplate</a> brought the note taking app Obsidian to my attention and I've used it for scribbles ever since (I write this post on Obsidian as we speak). 

Obsidian notes are stored as Markdown which can be trivially parsed into HTML.

With this in mind, I decided it would be an effective workflow to write in Markdown, drop the file in a folder and figure out a way to have it display as a post.

#### React

I'd never used React before until this project. I knew that the main attraction to React is that you can define components and have them manage their own state in a way that isn't torturous. 

With _A LOT_ of trial and error (I spent far too long trying to figure out why the fs library wasn't working in the browser..), and the decision not to use routing for different pages, I hacked together something that suits my needs, although with certain drawbacks that at this stage seem acceptable. 

In a nutshell, I am fetching a build-time generated index of the posts available to my site at run-time and using this to dynamically import my markdown posts that have been converted to .js modules.

In this way, I extract a Markdown string from the module and feed it to <a href="https://github.com/quantizor/markdown-to-jsx" target="_blank">markdown-to-jsx</a>. 

With the ability to render the output as HTML and swap out the content of the display component on the fly using state, we have the bare bones of a blogging site.

#### Snowpack

I went with Snowpack as a build tool because I still have trauma from the last time I used Webpack.

Snowpack seemed lean and mean enough for my purposes and despite the lack of plugins in comparison to Webpack, I was assured that it was easy enough to build your own and this thankfully proved true.

I am running a mostly vanilla Snowpack configuration, with the only real standout being a plugin I made that indexes my blog posts and extracts their frontmatter before shoving it all into a .json map and storing it in the build package.

### (Currently Known) Drawbacks

* Requires ES6 supporting browsers due to dynamic imports.
* Architecture is far from SEO friendly.
* Snowpack is deprecated.

### Moving Forward

I intend on fleshing out the navigation between different blog posts and doing a first pass on aesthetics moving forward. 



