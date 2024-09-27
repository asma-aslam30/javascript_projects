<h2 align="center">Password-Generator</h2>

<p align="center">
  <em> The password generator is my third project of the Scrimba Front-End course, in this course, I build a password generator from scratch and learn to code a function to generate a random password.</em>
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![Join the chat at https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist](https://badges.gitter.im/Front-End-Checklist/Front-End-Design-Checklist.svg)](https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist) [![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

## Table of Contents
* **[1. Design requirements](#1---design-requirements)**
	* [1.1 Structure Design](#11---Structure-design)
	* [1.2 Colors](#12---colors)
	* [1.3 Fonts and texts](#13---fonts-and-texts) 
	* [1.4 Publish files](#14---publish-files)
* **[2. Pre-work phases](#2---pre-work-phases)**
	* [2.1 For Loop & While Loop](#21---For-Loop-&-While-Loop)
* **[3. Before production](#3---before-production)**

---

> The **Password Generator** is my third static website, I use a technique that can be reused in the code, which provides the choice for the user to select a suitable password.

I start the Scrimba Module 3 course- Making websites interactive and learn how to use basic HTML, CSS, and JavaScript knowledge. At the end of the course, I follow the Figma template to finish a password generator to create the random number, take a look at the → [Password Generator](https://shiuandai.github.io/Password-Generator/).

## How did I start the project?

* Ensure all points are taken into consideration from Figma Template. → [Figma Template from Scrimba](https://www.figma.com/file/NEj9JDycMjF3XKXq7swoc9/Random-Password-Generator-(New-version)?type=design&node-id=102-702&mode=design&t=13ZXwjZVDKEUibmD-0)
* Generate two random passwords when the user clicks the button.
* Each password should be 16 characters long.
* Use the "While Loop" concept to create the random character.

---

## 1. - Design requirements

Designing a password generator website requires following some rules and taking into consideration that the project is not only a graphic project but a web project too. The next sections are crucial for any web project.

### 1.1 - Structure design

* [ ] The code inside the function will execute when "something" **invokes (calls)** the function:
	> ℹ️ [Function] GET to know more about the definition. → [W3School](https://www.w3schools.com/js/js_functions.asp)

* [ ] **JavaScript While Loop**. 
* [ ] Before working on each website project, I can **build every template** and **organize the div** with my own structure concept. Building the structure before everything else will facilitate my work afterward.

```html
<div class="container">
  <div class="row">
    <div class="col-sm">
    </div>
  </div>
</div>
```

⚠️ *Use the "container" to define which tags should be contained inside, they perform "active" when using the **flex-box**, it is a crucial method to foster the web structure building.* 

**[⬆ back to top](#table-of-contents)**

### 1.2 - Colors

You can "SAVE" your color preference in your account. → [Color Palette](https://scrimba.com/links/hometown-palette)

* [ ] **All colors used in the creatives are named** (DARK BLUE: #273549, GREEN: #10B981, LIGHT GREEN: #5DEF92) which are provided by Scrimba course so that they become the basic color guideline to use in my project.

* [ ] All of the most important/used **colors contrast** in the design to allow text with the background can be easily read. There are two types of design that can be chosen for practice. Light mode or Dark mode in the template.

**[⬆ back to top](#table-of-contents)**

### 1.3 - Fonts and texts

Fonts are an essential part of every design.

It is recommended to organize the font size and style in the design process. There are several websites where the designer can download the font. ([Google font](https://fonts.google.com/)). In this case, 'Karla' & 'Inter' are used in the header and description.

* [ ] Using the technique **@font-face** in CSS, the link is embedded in the CSS. 

  __Resources:__
	* 📖 [Using @font-face | CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face/)

* [ ] The **Web Safe Fonts** is an important concept. Web-safe fonts are fonts that are pre-installed by many operating systems. While not all systems have the same fonts installed, you can use a web-safe font stack to choose several fonts that look similar and are installed on the various systems that you want to support.

**[⬆ back to top](#table-of-contents)**


### 1.4 - Publish files

* [ ] How to host your website, there are several ways. 1. **Netlify** provides next-generation web hosting and automation that's very affordable. It can be integrated with Github for publishing the web easily. The alternative is using Github Page, my way is to use Github Page. → [Comparison of Github Page and Netlify](https://www.freecodecamp.org/news/publish-your-website-netlify-github/) 

## 2. - Pre-work phases

### 2.1 - For Loop & While Loop

It is recommended to master the **for loop** concept, it is usually used to generate a series of numbers.

```js
for ( let count = 10;  count < 21;  count += 1 )  {
    console.log(count)
} //remember to write "let"
```
The **condition** can be used in a different situation, like **>**, **+=** etc.

⚠️ *When using the **while loop**, it can execute a block of code as long as a specified condition is true.* Bear in mind the T/F condition. [While Loop](https://www.w3schools.com/js/js_loop_while.asp#gsc.tab=0)

## 3. - Before production

Before launching your website, be sure to review all your code and make sure the text layout and comment it's easy to read for another programmer.

**[⬆ back to top](#table-of-contents)**

---

## Author

**[Shiuan Dai](https://www.linkedin.com/in/shiuandai/)**

**[⬆ back to top](#table-of-contents)**


[6]:	https://guideguide.me/
[7]:	https://www.sketchapp.com/docs/canvas/rulers-guides-grids/
[8]:	https://getbootstrap.com/docs/4.0/layout/grid/
[9]:	http://flexboxgrid.com/
[10]: https://css-tricks.com/dont-overthink-it-grids/
[11]:	https://www.lifewire.com/aco-file-2619477
[16]:	http://bradfrost.com/blog/post/atomic-web-design/
[22]:	https://js.libhunt.com/
[23]:	https://bestof.js.org/
[28]:	https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist
