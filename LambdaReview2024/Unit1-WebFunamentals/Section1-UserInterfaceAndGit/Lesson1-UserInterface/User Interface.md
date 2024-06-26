# User Interface And Git

### What is HTML?

HTML is one of the languages we used for web development. It stands for **HyperText Markup Language**

HTML is what we call a markup language as opposed to a programming language. This means that this is specficially designed to display data rather than execute tasks.

### What are tags?

Tags are names built into the language and must be written exactly as expected in order for our HTML to render properly. paragraph is not a valid HTML tag name but p is.

* p tag

p is the paragraph element. It is meant for holding text. By default, it willl render text to the screen on a new line.

* div tag

div element is a generic container. It is used primarily for grouping other HTML elements together. It is invisible by default and usually used for positioning or styling a group of elements.

It is a block element by default and will take its own, full line.

* span tag

A span element is a generic container. It does not create a new line like <p> element. It is usually used for styling words or phrases within a larger body of text.

* h1 to h6

The header tags are intended to be used in a way to present subject matter of a page. The most important, h1, is the largest and decreases in size as you go down to h6.

There should only be 1 h1 tag per page. This will not cause an error but is seen as a best practice as it's reserved for the most important heading in the page.

#### Additional elements

* anchor tag

The anchor element is used to create links to other web pages or even areas within our own web page.

* image tag

This element will display an image on the screen.
It will always have an 'src' attribute which points to the address of the image displayed.

NOTE: img tags can be self closing as they do not need to tags.

* unordered and ordered list

These elements represents unorder or ordered list.
ul is for unordered, Something like a grocery list
ol is for ordered, something like a set of instructions that need to be followed step by step.


## Introduction to Cascading Stylesheets

CSS stands for Cascading Style Sheets. It is a different language than HTML but it works with HTML.

It allows us to add style and layout to web pages.

* style and link elements

Before we add CSS to our web page, we need to inform the browser that what it's reading is in fact CSS.

We can tell the browser that through HTML elements known as style and link elements. These elements will go between the head tags as it is not necessary data we need to appear on the screen.

Two ways to include CSS in our HTML:

1. Writing CSS between style tags.
2. Using an external CSS file and using the **link** element. These include two attributes: **rel** and **href**.

* rel will refer to the type of file we are linking. In this case: stylesheet
* href will refer to the location of the file on your computer or file name.


## Class 1 - User Interface Notes


### 4 step approach to problem solving

* Understand - figure out what you're trying to accomplish
* Plan - Device a plan/pseudo-code
* Test it - Once you have an idea- try it and keep trying until it works
* Review - Check if the solution works and verify



### HTML

Semantic Markup -- Meaningful code

- nav
- section
- main
- header
- strong
- h1 to h6
- paragraph

We want to use descriptive elements due to the following reasons:
1. Accessibility - screen readers, etc.
2. Next developer reading your code
3. SEO: google, bing, yahoo - used to scan web pages for improving searches in the web.

Presentational Markups -- Style and layout

- div
- span
- hr
- br

```
<header>
    <h1> International Airport</h1>

    <nav>
        <ul>
            <li><a href="#" class="home">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Flights</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <img class="header-img" src="https://tk-asets.lambdaschool.com/4651ccd7-e862-4a74-b8e8-14887425bd76_international-airplane.png" alt="Airplane taking off">
</header>

<section>
    <h2>Fly with us</h2>

    <p>orem ipsum dolor sit amet consectetur adipisicing elit. Maxime similique ad</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime similique ad</p>

    <button>Book A Flight</button>
</section>
<section>
    <h2>Plan Your Flight</h2>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime similique ad</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime similique ad</p>
</section>

<footer>
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Flights</li>
            <li>Contact</li>
        </ul>
    </nav>
</footer>

```
