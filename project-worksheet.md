# Project Overview

## Project Links

-  https://github.com/jesseseanrouse/project2/blob/master/project-worksheet.md
-  https://brave-brahmagupta-b292be.netlify.app

## Project Description

The app will help students balance equations and do Stoichemetry without having to do the math. It will be meant to be a resource so students can either check thier work or focus on understanding these concepts without getting caught up on the math aspect.

## API

```
const [eleData, setEleData] = useState({});
  fetch("https://neelpatel05.pythonanywhere.com/")
    .then((res) => res.json())
    .then((data) => setEleData(data));
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


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | .5 hrs| -hrs | 1 hrs |
| Home| H | 1 hr| hrs | 1 hrs |
| Balance | H | .5 hrs | hrs |  1 hrs |
| Balance Equation | H | 3 hrs | hrs | 20 hrs |
| Balance Elements | H | 3 hrs | hrs | 8 hrs |
| Stoich | M | .5 hr| hrs | x hrs |
| Stoich Equation | M | 3 hr| hrs | x hrs |
| Stoich Start/End | M | 3 hr| hrs | x hrs |
| Stoich Math | M | 4 hr| hrs | x hrs |
| Wiki | L | 3 hr| hrs | 2 hrs |
| Wiki Details | L | 1 hr| hrs | x hrs |
| Total | H | 22.5 hrs| hrs | 33 hrs |

I'm really not including CSS times up above, mostly taking function into account. I actually lost track of how much time I spent on this. I believe this is fairly accurate. Also I made all sorts of components that I summed up in Balance Equations and Balance Elements above.

| Objective | Day | Actual Day |
| --- | :---: |  :---: |
| Gatsby Reasearch | - 2 | 1 |
| Component Setup | 1 | 1 |
| Balance Functionality | 2 | x |
| Stoich Functionality | 3 | x |
| SCSS for Site | 4| x |
| Wiki | 4 | x |
|Bug Fixing/try to break | 5 | 5 |

Day is Monday

## Additional Libraries
 - react 
 - gatsby

## Code Snippet

The code I am most proud of is far greater than 10 lines. Its the function that examines user input to determine whether or not it has real elements and counts how many of each elements are in the compound.

```

```
