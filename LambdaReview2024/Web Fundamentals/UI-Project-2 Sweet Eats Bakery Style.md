HTML:

```
<!-- Font families were utilized through google fonts -->
<link href="https://fonts.googleapis.com/css?family=Gaegu|Roboto" rel="stylesheet">

<div class="container">
  <h1>Sweet Eats Bakery</h1>
  <header>
    <nav>
      <a href="#">About</a>
      <a href="#">Cookies</a>
      <a href="#">Weddings</a>
      <a href="#">Catering</a>
      <a href="#">Contact</a>
    </nav>
    <img src="https://tk-assets.lambdaschool.com/bcf76f62-2431-4c22-b466-2e711f3da2b9_ui-i-bakery-main-header.png" alt="">
    <section class="about">
      <h2>About Sweet Eats Bakery</h2>
      <p>Marzipan jelly-o macaroon I love macaroon jujubes. Candy candy canes jujubes I love ice cream croissant. Lollipop donut icing I love liquorice gummi bears marzipan. Dragée jelly beans apple pie cotton candy lemon drops pastry candy msg powder.</p>
    </section>
  </header>
  <section class="content-row">
    <div>
      <img src="https://tk-assets.lambdaschool.com/297378d6-9c89-430f-9d2e-46ae3d5edce8_ui-i-bakery-cupcake-i.png" alt="cupcakes">
    </div>
    <div>
      <h2>Cupcakes</h2>
      <p>Candy apple pie lemon drops sweet roll danish. Tiramisu candy canes jelly-o jelly beans cotton candy pastry pudding tootsie roll carrot cake.</p>
      <p>Dessert sesame snaps brownie lemon drops cookie donut dragée.</p>
    </div>

  </section>
  <section class="content-row">
    <div>
      <h2>Cookies</h2>
      <p>Cookie soufflé dessert carrot cake fruitcake halvah pudding cake.</p> <p>Marzipan topping bear claw soufflé gingerbread biscuit. Tiramisu gummi bears chocolate bar sugar plum icing</p>
    </div>
    <div>
    <img src="https://tk-assets.lambdaschool.com/7393a8fd-c8e5-4003-921f-79e0d546d02c_ui-i-bakery-cookies.png" alt="cookies">
  </section>
  <section class="content-row">
    <div>
      <img src="https://tk-assets.lambdaschool.com/ab0cb095-5900-476c-b042-aea065d3dbbf_ui-i-bakery-celebrate.png" alt="">
    </div>
    <div>
      <h2>Celebrations</h2>
      <p>Sweet jelly-o apple pie powder jelly beans. Pastry sweet roll cake jujubes halvah soufflé brownie.</p>
      <p>Toffee cookie lemon drops jelly beans chocolate bar. Wafer muffin jujubes danish tart danish chocolate wafer.</p>
    </div>

  </section>
  <section class="contact-section">
    <h2>Contact Us</h2>
    <address>
      yum@sweeteatsbakery.com<br>
      202-555-0144<br>
      4209 Bobcat Drive<br>
      Madison, WI, 48219
    </address>
  </section>

</div>
<footer>
  <div class="footer-content">
    <h3>Sweet Eats Bakery</h3>
    <nav>
      <a href="#">About</a>
      <a href="#">Cookies</a>
      <a href="#">Weddings</a>
      <a href="#">Catering</a>
      <a href="#">Contact</a>
    </nav>
    <p class="copyright">&copy; Sweet Eats 2018</p>
  </div>
</footer>

```


CSS:
```
/* Lets take our knowledge of CSS selectors, properties, and inheritance to add some style to the Sweet Eats Bakery website.

Task 1: Fork this pen.  You will want to have your own version saved.

Task 2: Explore the CSS.  Look at all the unique selectors.  Find things that are new to you and learn what they do.  Find properties you may not be familiar with and google them.

Task 3: Update the CSS.  You will notice the CSS comments throughout the file below.  Follow the instructions to complete the Sweet Eats Bakery site.  If you follow the instructions, you should see this as a final result:

https://tk-assets.lambdaschool.com/44f6a520-b218-4ed1-910b-f4dc876cd1a6_sweet-eats-home-page.png

Task 4: Submit this project and the HTML project to canvas. Once you have submitted, feel free to look at stretch.

***DO NOT ATTEMPT STRETCH UNTIL YOU ARE FINISHED WITH EVERYTHING ELSE!***

Stretch Task: Fork your final work and see how much you can change the design without changing the HTML.  Try to transform the site by only using CSS selectors.

Stretch Task: Look at CSS animations and see if you could integrate them on the navigation hovers.

Stretch Task: Pick a navigation item and create a new page with the same header and footer as the home page.  Example: you could make a new page just for cookies.  Be creative and have fun coming up with your own unique content and styles.

*/


/*======= Create a new universal selector that changes the font color to: #3C373B */

body{
   color: #3C373B;
}

h1 {
  font-family: 'Gaegu', cursive;
  margin: 20px 0;
  /*=======  Update the font size to 60px and center the text */
  font-size: 60px;
  text-align: center;
}

h2, h3, h4, h5, h6 {
  font-family: 'Gaegu', cursive;
  margin-bottom: 0;
  padding: 0 10px;
  /*=======  Update the font size to 30px */
  font-size: 30px;
}

/*======= Create a selector for ALL p tags in the site to have the following styles:

font-size: 16px;
font-family: roboto;
padding: 10px;
line-height: 1.4;

*/
p{
  font-size: 16px;
  font-family: roboto;
  padding: 10px;
  line-height: 1.4;
}


/*======= Create a selector for ALL images in the site to have the following styles:

  border-radius: 10px;

*/
img{
  border-radius: 10px;
}

.content-row {
  display: flex;
}

.content-row div {
  /*======= create a margin propery.  Set the value to 20px */
  margin: 20px;
}

.container {
  /*======= create a width property. Set the value to 600px */
  margin: 0 auto;
  width: 600px;
}

.container header nav a {
  margin: 0 10px;
  border: 1px solid lightgray;
  padding: 20px;
  display: inline-block;
  border-radius: 20px;
  color: white;
  text-decoration: none;
  margin-bottom: 20px;
   /*======= create a background property. Set the value to #F87B99 */
  background: #F87B99;

}

.container header nav a:hover {
/*======= create a background property and set it to white.  Then create a color property and set it's value to pink. */
  background: white;
  color: pink;
}

/*======= Create a selector for the about section to have the following styles:
  margin-top: 20px;
*/
.about{
  margin-top: 20px;
}

.contact-section {
  border-top: 1px dashed black;
  padding: 20px 0;
}

.contact-section h2 {
  padding: 0;
  margin: 0 0 10px 0;
}

/*======= Create a selector for the address tag in the contact-section class to have the following styles:
   line-height: 2;
*/
.contact-section{
  line-height: 2;
}

footer {
  width: 100%;
  background: #F87B99;
  border-top: 1px dashed white;
}

footer .footer-content {
  margin: 0 auto;
  width: 600px;
  /*======= create a width property. Set the value to 600px */

}

footer .footer-content h3 {
  padding: 0;
  margin: 20px 0;
}

footer nav {
  display: flex;
}

/*======= Create a selector for the anchor tag in the footer to have the following styles:
  margin: 10px;
  color: black;
  text-decoration: underline;
*/
footer nav a{
  margin: 10px;
  color: black;
  text-decoration: underline;
}


footer nav a:first-child {
  margin-left: 0;
}

/*======= Create a hover state for the anchor tag in the footer nav to have the following styles:
  color: white;
*/

footer nav a:hover{
  color: white;
}

footer .footer-content .copyright {
  padding: 20px 0;
   /*======= center the text here */
}
```
