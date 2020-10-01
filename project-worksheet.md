# Project Overview

## Project Links

https://github.com/jesseseanrouse/project2/blob/master/project-worksheet.md
- [add your deployment link]()

## Project Description

The app will help students balance equations and do Stoichemetry without having to do the math. It will be meant to be a resource so students can either check thier work or focus on understanding these concepts without getting caught up on the math aspect.

## API

```
const [bookData, setBookData] = useState({});
  fetch("https://neelpatel05.pythonanywhere.com/")
    .then((res) => res.json())
    .then((data) => setBookData(data));
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

-  https://res.cloudinary.com/doeh54t5k/image/upload/v1601585129/IMG_20201001_133948_zlxcls.jpg
-  https://docs.google.com/drawings/d/1UC0QGcVHJM5qDoEVOTcnKAfh5fywddXebJPbRHwOMS8/edit  

#### MVP EXAMPLE

- Set up Home and Component System (each one being rendered by parent)
- Call api and send data to a couple of children to make sure it's working
- Build Navbar function with working links for components
- Build Balancing Equations: User builds equation
- Build Balancing Equation: User add coefficients to equation
- Build Balancing Equation: Do math
- Build Stoich: Balance Equation 
- Build Stoich: Build Starting point and collect info
- Build Stoich: Build End Point and collect info
- Build Stoich: Build math to get start to end points
- Basic CSS so the site looks ok

#### PostMVP EXAMPLE

- CSS the site so it looks beautiful
- Periodic Table display mobile
- Periodic Table display Tablet
- Periodic Table display Computer
- When click on element it shows details of that element

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
