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

-  https://res.cloudinary.com/doeh54t5k/image/upload/v1601585129/IMG_20201001_133948_zlxcls.jpg
-  https://res.cloudinary.com/doeh54t5k/image/upload/v1601607893/IMG_20201001_200152_uzixov.jpg
-  https://docs.google.com/drawings/d/1UC0QGcVHJM5qDoEVOTcnKAfh5fywddXebJPbRHwOMS8/edit?usp=sharing

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

May have more or less depending on needs of the App

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Home | This will have the NavBar and render everything here | 
| Balance | This will have two children for each step. Also displays the result of first component | 
| Balance Equation | Takes in values and builds equations. Also checks symbols to verify that it is an element | 
| Balance Elements | Dynamically updates how many elements that are on each side of the equation | 
| Stoich | Host the renders for Doing Stoich | 
| Stoich Equation | input the equation for Stoich |
| Stoich Start/End | Has the user input start values and desired end pont | 
| Stoich Math | Does the math | 
| Wiki | Desplays Periodic Table/List of Elements that are clickable | 
| Wiki Details | Shows Details for element selected | 


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | .5 hrs| -hrs | -hrs |
| Home| H | 1 hr| hrs | hrs |
| Balance | H | .5 hrs | hrs | hrs |
| Balance Equation | H | 3 hrs | hrs | hrs |
| Balance Elements | H | 3 hrs | hrs | hrs |
| Stoich | M | .5 hr| hrs | hrs |
| Stoich Equation | M | 3 hr| hrs | hrs |
| Stoich Start/End | M | 3 hr| hrs | hrs |
| Stoich Math | M | 4 hr| hrs | hrs |
| Wiki | L | 3 hr| hrs | hrs |
| Wiki Details | L | 1 hr| hrs | hrs |
| Total | H | 22.5 hrs| hrs | hrs |

I'm really not including CSS times up above, mostly taking function into account. I'll propbabily spend 10+ hours on CSS jazziness

## Additional Libraries
 react 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
