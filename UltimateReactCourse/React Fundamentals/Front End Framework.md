## The Rise of Single Page Applications (SPA)
The "old" way - Server Side Rendering 

Client request page --> Server/Backend sends the data --> Client shows the data in browser. 

Eventually, Developers started writing more and more JS code which led to SPAs using Client Side Rendering 

Web Applications need data using APIs
Application consumes API data and SPA shows the data without the page ever reloading. 

Server side rendering - Making a come back driven by frameworks built on top of client side rendering frameworks such as Next JS/Remix/others. 

### Notes ####
- Front end Applications are all about Handling data and displaying data in a user interface. 
- User interface needs to stay in sync with data 
- Keeping data in sync is actually very hard to do. 

### Keeping UI in Sync with Data 
- Example - List of apartments in Airbnb 
- There's a search for location, filters, data shown. 
- As user updates search, we need to make sure that data gets updated properly in real time. 

## Problems with using Vanilla JavaScript 
1. Requires a lot of direct DOM manipualation and traversing (imperative) which leads to spaghetti code. 
2. State are often stored in the DOM --> Hard to reason + bugs 

## Why do Front-end frameworks exist?
1. Keeping a user interface in sync with data is really hard and a lot of work. 
  - Front end frameworks solves this problem and take hard work away from developers. 
  - Different frameworks have different approaches but same goal. 
2. They enforce a "correct" way of structuring and writing code (therefore contributing to solving the problem of "spaghetti code")
3. They give developers and teams a consistent way of building front-end applications. 


