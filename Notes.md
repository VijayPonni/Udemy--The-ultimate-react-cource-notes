# Udemy--The-ultimate-react-cource-notes

# JS Review:

## Destructuring:

### Destructuring Objects:

- Destructuring object is used to partition the properties from an object with ease. It is very useful for complex object with lot of properties in them.

- For example , let us a take a object a as below:

```
const a = {
name : 'vijay',
initial : 'S',
age: 22
interests: ['swimming', 'dancing' , 'singing']
}
```

- We can get the required property from the object using period operator as below:

```
const interests = a.interests;  //  ['swimming', 'dancing' , 'singing']
```

- It is okay for small object. What if we have a complex object and want to get the multiple properties from that object. The period operator method is little complext then. But Destructuring allows us to do it in a single line as below example shows:

* If I want to select multiple properties from the object we have created above.

```
const a = {
name : 'vijay',
initial : 'S',
age: 22
interests: ['swimming', 'dancing' , 'singing']
}

const { initial , age , interests } = a ;    // The variable name must match with the property name in the object.

console.log(initial);    // 'S'
console.log(age);        // 22
conosle.log(interests);  // ['swimming', 'dancing' , 'singing']
```

### Destructuring Array:

- Array destructuring is same as Object Destructuring. Is also helps to partions the array elements with ease.

- Instead of using {} , We should use [] for destructuring arrays.

- Unlike Object Destrcuturing, Array destructuring variables is not dependant on array elements. we can set variable names according to our wish.

```
const array = [ 0 , 100 , 1000];

[ singleZeroNumber , doubleZeroNumber , TripleZeroNumber ] = array;

console.log(singleZeroNumber) // 0
console.log(doubleZeroNumber) // 100
console.log(TripleZeroNumber) // 1000

```

## Rest and Spread operators:

### Rest operator in Object :

- Rest operator is represented with 3 dots contnued with variable name as : `...variable_name`

- Rest opearator can be only used with destructured object and as a last postion.

- Basically rest operator in a destructured object is used to store the remaining values in that object with a new variable and in the format of seperate object.

* Example:

```

const a = {
name : 'vijay',
initial : 'S',
age: 22
interests: ['swimming', 'dancing' , 'singing']
}

const { initial , name , ...other_details } = a ;  // ...other_details is the Rest operator

console.log(initial);         // S

console.log(name);            // vijay

console.log(other_details);   // { age: 22 , interests: ['swimming', 'dancing' , 'singing'] }

```

### Rest operator in Array :

- Rest operator in array is also represented with 3 dots contnued with variable name as : `...variable_name`

- Like objects, rest opearator in array can be only used with destructured array at last postion.

- Like objects, Basically rest operator in a destructured array is used to store the remaining values in that array with a new variable and in the format of seperate array.

* Example:

```
const array = [ 0 , 100 , 1000 , 11, 22 , 36749, 4738, 6 , 7];

[ singleZeroNumber , doubleZeroNumber , TripleZeroNumber , ...NonZeroNumbers ] = array;  // ...NonZeroNumbers is Rest operator.

console.log(singleZeroNumber) // 0
console.log(doubleZeroNumber) // 100
console.log(TripleZeroNumber) // 1000
console.log(NonZeroNumbers)   // [ 11, 22 , 36749, 4738, 6 , 7 ]

```

### Spread operator in Objects:

- spread opearator is also denoted with 3 continuous period follwed by variable name as : `...variable_name`

* Spread operator is used to create new object with the existing object by adding new properties or updating the available properties.

* Example:

```
const a = {
name : 'vijay',
initial : 'S',
age: 22
interests: ['swimming', 'dancing' , 'singing']
}                                                         // Existing object

const spreaded_A = {
    ...a ,                    // Spread operator which spreads the existing 'a' object
    weight : 60 ,             // Adding new properties to 'a' object
    name: 'Vijay Yesudas'     // Updating the existing 'name' property value of 'a' object to new value
     }


console.log(spreaded_A);  // {
                                name: 'Vijay Yesudas' ,
                                initial : 'S',
                                age: 22,
                                interests: ['swimming', 'dancing' , 'singing'],
                                weight: 60
                                }

```

### Spread operator in Arrays:

- spread operator in array is used to create a new array with the existing array and can add elements as well.

* It is denoted in the similar way that spready operator in objects: `...variable_name`

* Example:

```
const array = [ 0 , 100 , 1000 , 11, 22 , 36749, 4738, 6 , 7];

const spreaded_array = [ ...array , 666 , 69 , 96, 99];

console.log(array);             // [ 0 , 100 , 1000 , 11, 22 , 36749, 4738, 6 , 7]
console.log(spreaded_array);    // [ 0 , 100 , 1000 , 11, 22 , 36749, 4738, 6 , 7 , 666 , 69 , 96, 99 ]

```

# Working with Components, Props and JSX

## Rendering the root component and Strict mode:

- To render a root component in react, we use two importatnt packages as below:

  - react
  - react-dom

- In the src folder, index.js file is the entry point of the react application and root component should be rendered there.
- The react web-packages will look for the `index.js` file to render application.
- In index.js file the whole application can be rendred as below:

```
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello VIJAY!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root")); // The div element is obtained from index.html file in public folder
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

- strict mode is React's component which allows the component rendreing the two times for easy debuging in development time.

* It is useful to enable stric mode during development by covering the root component within strictmode component as below:

```
  <React.StrictMode>
    <App />
  </React.StrictMode>

```

## Styling React components

- React allow mutiple ways to style the application like inline css, external css, tailwind css and etc.

### Inline CSS :

- Normally, we can apply any styles in any element using `style` attribute. Likewise JSX also allows style attribute on elements in a different way.

- We can apply the styles on elemnts by assigning style attribute to the element. And the value for style attribute to be
  format `{{ }}`.

- Because JSX needed to be entered into javascript mode through `{ }` notation and then inside the javascript mode , multiple styles can be applied using another `{}` notation as `{{ ... }}`

- The styles we apply inside javascript block should be camelCased as these styles are belongs to javascript not CSS.

* Example styling :

```
function Header() {
  return (
    <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}>  // Inline styling in JSX
      {" "}
      Vijay's Fast Pizzas.Co{" "}
    </h1>
  );
}
```

- We can also define the styles in any variable and use it as below:

```
function Header() {
  const headerTextStyle = {
    color: "red",
    fontSize: "48px",
    textTransform: "uppercase",
  };
  return <h1 style={headerTextStyle}> Vijay's Fast Pizzas.Co </h1>;
}

```

### External CSS:

- It is usual way of adding styles to website. External css file should be imported in the component file where we want to use the css styles.

* When we use external CSS , we should keep an important note in mind that the class keyword will not apply styles on elements in JSX. Instead the class keyword, we should use `className` in JSX to apply the desired styles we used in external file.

## Passing and receiving Props:

- Props are used to pass data between conponents line parent to child components.

* It is a simple two step process.

* First , we need to set the props as attributes in the child component element as below:

```
function Menu() {
  return (
    <menu className="menu">   // Parent component
      <h2>Our Menu</h2>
      <Pizza                  // Child component

        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price="100.00"
                                                            // Passing data as attributes
      />
    </menu>
  );
}
```

- Secondly, the properties need to be rrceived in the child component as arguments. React automatically converts the attributs from the parent as Object in the child component and we can access the object in the child component using javascript bloks.

```
function Menu() {
  return (
    <menu className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price="100.00"
      />
    </menu>
  );
}

function Pizza(props) {                     // Receving props in child component
  console.log("props", props);              // {
                                                name="Pizza Spinaci"
                                                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                                                photoName="pizzas/spinaci.jpg"
                                                price="100.00"
                                                }
  return (
    <div>
      <img src={props.photoName} alt={props.name} />            // Using as js blocks in child
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
    </div>
  );
}

```

### NOTE:

- If we want to pass a value as a props from parent , we just want to use them inside javascript block.

## props immutability

- As props are just javascript objects,we cannot mutate them in the child component. If we want to change some props in child , then we require the help of state.

- The reason for is that if the any oject is mutated then original object is also gets updated. So, In react the parent component props will also be get updated. It will cause side effects in react components. So, the props are immutable.

## One-way data flow:

- React Strictly follows one way data flow which means data can be passed from parent to children and not viceversa.

- It helps developers to debug data flow as it is uni-directional.

* In some cases, If data is necessary to pass childe from parent React provides another solution to achive that solution.

## Rendering Lists:

- Rendering list is creating dynamic components/ any JSX in view based on the array we have.

* It is literally converting an array to view.

* We should iterate over the array and do the stuff we want. Mostly we will use array.map method to render the list.

* While doing this, we should consider that `key` attribute to be passed definitely which is unique value for each element in the array we render. Otherwise a warning message will be displayed in console.

## Conditional Rendering with &&

- Condiional rendering means rendering some piece of UI ( JSX / Component ) to the view based on some condiion.

* using `&&` operator we can render the templates using shrot circuiting.

* Consider an expression: a && b

* If a is true value, then b is returned. Otherwise nothing will be returned as execution stops at first staement which is a (false) ,and does not see the second one which is b.

* Other than boolean (true/false) , `&&` operator also works for truthy/ falsy values. It works same as true or false value.But while rendering something to view for falsy value other than false like 0, the value will be displayed in view. So , condition should be set according to that.

## React fragments `<> </>`

- React fragments are empty tags which allows to bind multiple elements in JSX.

- Usually while returning JSX, React forces us to combile all the elements under one root element. But in some cases we need to return seperate elements without common root. Here, Fragement helps to acheive that. We can wrap those within fragments which is `<> </>` or `<React.Fragment></React.Fragment>`

* Example:

```
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];

  return (
    <menu className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 ? (
        <>                                // React fragment
          <p>
            Authentic italian cusine.6 creative dishes to choose from. All from
            our stone oven. all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>                               // React fragment closing tag
      ) : (
        <p>
          We're still working on our Menu. So, please come back after some time
          :)
        </p>
      )}
    </menu>
  );
}
```

- NOTE : In DOM , the wrapped elements such as <p>..</p> and <ul>..</ul> doesn't have any parent element when we use react fragments.

## State in React

- State is simply the memory of a component.

- State is the data, a component can hold over time which is necessary untill the app's lifecycle.

* A state can be the notification count, active tab information in nav bar , user text in a search bar , content of a shopping cart and etc.

* All state in a component is changable because of user interactions. Like user can navigate to another tab and the active tab needs to be updated, user can change the text typed in search bar and so on.

* The term `state` refers to the components state which is the collection of all single state variables in a component. And the term `Piece of state / state variable` refers to the individual state variable in a component.

* The important thing in state is, When component state is get updated , react re-render the component. Which means whenever a piece of state is updated, User Interface of the component is also updated. When we change state , we change the User Interface.

## Creating a State variable using `useState()`

- `useState()` is a function provided bu react library to handle state varibles in a component.

* We should import the useState() functon from react library to use it in component.

* useState() function requires an argument. The argument should be the intial value of a state. It may of any type.

* The useState() function returns an array with two elemnts.

  - The first one is the initail value we passed as argument.
  - The second one is the function which is used to update the state value.

* As the useState() method returns an array, We can simply assign the value to the new array and destructue it with the desired variables to use them in our components as below:

* For Example , If I want to create a state for variable step with initail value 1, I must do as below:

```
  const [step, setStep] = useState(1);

```

- We can update the step value by passing the value to update to the setStep function whereever we need to update and UI will change according to it.

```
  const [step, setStep] = useState(1);

  function handleNext(){
    setStep(step + 2);                           // Updating step state
  }
```

### Importatnt things on State:

- As `useState()` is a react hook, we cannot call it in any other functions / blocks . We should only define the useState() hook in the top of the Component.

```

function App(){

const [ step , setStep ] = useState(1);            // It is correct
.
.
.

if(true){
const [ step , setStep ] = useState(1);            // It is not possible;
}

function handleNext(){
  ...
const [ step , setStep ] = useState(1);            // It is not possible;
}

}
```

- We can only update the staet using function returned by the useState() function not manuallly.

### Updating state based on Current State

- Updating state using setter function is common and we can call that setter function with new value as argument and state get changed.

- If the new value is based on the current value, then we need to pass an call back function as an argument instead of passing just the new value to setter function. The callback function is having the current value of the state as parameter and we can update that according to our requirment.

- If the new state is not dependant on current state value, then no need of call back function method. We can simply pass the new value as argument to the setter function.

```

export default function App() {
  const [step, setStep] = useState(1);
  const [displaySteps, setDisplayStpes] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      // setStep(step - 1);                                  // Normal update
      setStep((currentStepValue) => currentStepValue - 1);   // updating state based on current value(call back function method)
    }
  }

  function handleNext() {
    if (step < 3) {
      // setStep(step + 1);
      setStep((currentStepValue) => currentStepValue + 1);
    }

    .
    .
    .

  }

}
```

## Controllled Elements

- usually the elements like input field, select box and something else we mostly use in forms will maintain their own state(Value) in DOM. But, the values must be available together in our react application to use them. To achieve this, we use Controlled elements in react.

### Steps to implement controlled elements:

- Step 1: Creat state.
- Step 2: Add value property to the element which we want to controland assign the value to the state variable we created in first step.
- Step 3: Add onChange property to the same element and assign the event handler function with the setState function we created in first step. Set the value as `event.target.value` in setState method which is returned by the onChange event handler to synchronous with the value.

```

function Form() {

  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");     // Step 1

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: new Date(),
      description,
      quantity,
      packed:false
    }

    console.log("new item", newItem)

    setQuantity(1);
    setDescription("");

  }


  return (
    <form className="add-form" onSubmit={ handleSubmit}>
      <h3> What do you need for your 😍 trip ?</h3>
      <select
        value={quantity}
        onChange={ (event)=> setQuantity( Number(event.target.value))}
      >
        {
          Array.from({ length: 20 }, (_, i) => i + 1).map((num) =>
            <option key={num} value={num} >{ num}</option>
          )
        }
      </select>
      <input
      type="text"
      placeholder="Enter Item..."
       value={ description}                                               // Step 2
       onChange={ (event)=> setDescription(event.target.value)}/>         // Step 3
      <button>Add</button>
    </form>
  );
}
```

## Difference between State and Props in React:

- Data : States are internal data which means state data is owned by the component itself. In the otherhand Props are external data which means the Props data is owned by the parent component.

- Like : States can be thought of component memory as it holds the component's data overtime across multiple rerenderings and Props can be thought of function parameters which carries the parent component data to children components.

- Updating : States can be updated by the components itself on the other hand Props can not be changed in the receiving component ( read-only)

- Re-rendering while update : While State get updated, the component get re-rendered. Receving new props causes the component to re-render. Which means, whenever the parent component where the props are received is get updated the parent componet will re-render and the child components of that parent also re-renders then if any props are sent from parent to child then it will be updated with the re-render.

- Usage : States are used to make the component interactive. Props are used by the paraent component to configure the child component

## Section-7 Thinking in React

### Fundamentals of State Management

### What is State management?

- State management is simply deciding When to create pieces of state, What types of states are necessary , Where to place each pieces of state and how data flow throughout the app.

### Types of State:

- In React each piece of state is only belongs to the two types as below:

  - Local state.
  - Global state.

<img src="Imgaes/local_state_vs_global_state.png">

### When and Where to use State ?

<img src="Imgaes/when_and_where_to_use_state.png">

### Lifting state up:

- When we need to maintain state in common for two sibiling component , it should be maintained in first parent component of both the sibiling components.

* Example:

* Consider we have component structure as below:

* App component has two children. One component has a button which simply updates a state to randpm numbers. But we need to display the number in another component which is child-2.

```
function App(){
  return (
    <div>
    < Child-1/>
    < Child-2 />
    </div>
  )
}


function Child-1(){

  const [state1 , setState1 ] = useState();

  function updatetState(){
    setState1(Math.random())
  }

  return (
    <div>
  <button
  onClick={updateState} > Click to update state1 in Child-2 Component </button>
  </div>
  )

}

function Child-2(){

  return <h1> I am Child-2 and have to display the value from Child-1.</h1>
}


```

- So we cannot pass the state to the Child-2 directly as it is not the children for Child-1. But we can achieve this by lifting up the state to the first parent compoent of both sibiling components. In this case it is App Component.

- So, If we move the state to App, then we can pass the state as props to the Child-2 component and also the SetState function as props to the Child-1 property.

```

function App(){


  const [state1 , setState1 ] = useState();        // Moved state to parent component

  function updatetState(){
    setState1(Math.random())
  }


  return (
    <div>
    < Child-1  onButtonClick={ updateState } />     // Pass the updateState function to Child-1 as params
    < Child-2  stateValue={ state1 } />             // Pass the state1 state to Child-2 as params
    </div>
  )
}


function Child-1({ onButtonClick }){           // Receiving props from App

  function handleButtonClick(){
      onButtonClick()                           // Calling the function in App component
  }

  return (
    <div>
  <button
  onClick={ handleButtonClick } > Click to update state1 in Child-2 Component </button>
  </div>
  )

}

function Child-2({ stateValue }){              // Receiving props from App

  return <h1> I am Child-2 and have to display the value from Child-1. { stateValue }</h1>     // Using State from App
}

```

### Examples:

<img src="Imgaes/problem_sharing_state_with_sibiling_component.png">
<img src="Imgaes/solution_lifting_state_up.png">
<img src="Imgaes/child_to_parent-communication.png">

## Deriving State:

<img src="Imgaes/deriving_state.png" >

## The Children Prop

- The children prop is the main and fundamental technique or method in react.

- We usully use define the component and use that component in jSX as an element only with the closing tag not in usual opening and closing tag method.

- But, the truth is react also allows the both methods which means instead of using only the closing tag to use the component we can use the opening and closing tag fot that component as below example.

```

function App(){
  return (
    <div>
    <Button />                            // USUAL METHOD ( Closign tag )
    <Button></Button>                     // CHILDREN PROP METHOD ( Opening and closign tag )
    </div>
  )
}

function Button(){                        // Component
  return (
    <Button>I am Button Component</Button>
  )
}
```

- The important thing should consider while using the second method is react allows the default `children` prop to that component and the children props value is the value in inbetween the opening and closign tag of the component.

```
function App(){
  return (
    <div>
    <Button />                                                          // USUAL METHOD ( Closign tag )
    <Button> HI I AM CHILDREN PROP VALUE </Button>                     // CHILDREN PROP METHOD ( Opening and closign tag )
    </div>
  )
}

function Button({ children }){                        // Component --> children props
  return (
    <Button>
      I am Button Component.
      <span> {children  } </span>                     // Using children props in JSX
    </Button>
  )
}



OUTPUT BUTTON WILL LOOK LIKE BELOW:


------------------------------------------------------
|                                                     |
| I am Button Component. HI I AM CHILDREN PROP VALUE  |
|                                                     |
------------------------------------------------------
```

- So, Children prop is a default props provided by react which rendres the value between the opening and closing tag into components.

<img src="Imgaes/children_prop_1.png" ><br>

<img src="Imgaes/children_prop_2.png" ><br>

<img src="Imgaes/children_prop_3.png" ><br><br><br>

#####################################

# Tanstack-react-query package:

## Overview:

- This tanstack-react-query is also known as 'react-query' which is helpful in fetching , caching , synchronising and updating server state in web-applications.

## Installation:

- Installation command :

```
npm i npm i @tanstack/react-query

```

- Install react-query devtools using below command:

```
npm i @tanstack/react-query-devtools

```

## provider setup:

- First we should wrap the section where we should use react-query with `Provider`.
- Mostly we will use the react-query for entire application.
- So we can wrap the App component with ` QueryClientProvider` from tanstack-react-query library.

* For that we should import `QueryClient` and `QueryClientProvider` from `@tanstack/react-query`.
* We should wrap the App component seector between the `<QueryClientProvider> selector`.
* `QueryClient` is the actual client we should create and should register with QueryClientProvider as a props. Then the whole application will be registered with the queryClient we created.

### tanstack-react-query --> index.js

```

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();             // we can pass the default value to the querClient inside parenthesis ().

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>      {/*  Registering QueryClient with QueryClientprovider */}
    <App />
    </QueryClientProvider>
  </React.StrictMode>
);

```

## Basic Example:

- With react-query, we can mainly do two basic things as below:

  - 1.  `query` which means getting data from somewhere.
  - 2.  `mutation` which means changing some type of data.

* tanstack react query package provides two custom hooks to achiev the above mention actions. They are :

  - 1.  useQuery()
  - 2. useMutation()

### useQuery():

- useQuery() hook allow us to get data.
- useQuery() takes an object as argument.
- The object can accept list of properties but the main two properties we should mainly consider are:

  - 1. `queryKey` --> It accepts the array which should contain `unique` value that represents the query.
  - 2. `queryFn` --> It accepts the value of a asynchronous function which returs a Promise.

* Once the useQuery() hook is provided with the object with the above mentioned properties, it should be defined to a variable.

* The variable which have the useQuery({...}) hook is now have access for multiple methods in the asynchronous operation like isLoading , isError and so on.

* So now using the variable which sets with the value of useQuery({...}) hook we can update the UI / do some other thing in our application like error handling , loading indications , success responses ,error responses and o on.

### useMutation():

- useMutation() hook is allow us to update the data.
- As useQuery() hook it also takes an object as argument.
- The object accepts the `mutationFn` as a main property and it allows the asynchrounous function as a value to update the data.

* Ths Mutation function accepts an argument with any type which is the actual value need to be get updated.

* Once we defined the useMutation({ ... }) hook with a variable, we can call `mutate()` method and pass the required value to update as an argument to that method.
* This only will not update the value. There is a another method available called `onSuccess` in the MutationFn .
* Before proceeding this,we must import `useQueryClient` hook from tanstack/query-client.
* In that, we should call `invalidateQueries()` function and pass the argument of `queryKey` which query we want to mutate.

### tanstack-react-query ---> App.js:

```

import {  useMutation, useQuery, useQueryClient } from '@tanstack/react-query'            // importing useQuery

const POSTS = [
  { id: 1, title: "Post 1" },
  {id: 2 , title:"Post 2"}
]


function App() {

  const queryClient = useQueryClient();


  const postsQuery  = useQuery({                              // Assinging queryKey({...}) hook witht the variable
    queryKey: ["Posts"],                                      // Assinging querykey
    queryFn: () => wait(1000).then(() => [...POSTS])       // Assing queryFn with th easynchronous function.
    // queryFn: ()=> Promise.reject("Error Ocuured!")            // Faking an Error to test for isError functionality

  })
  console.log("mutation", POSTS)




// Defining a mutation function

  const newPosMutation = useMutation({
    mutationFn: title => {
      return wait(1000).then(() =>
        POSTS.push({ id: crypto.randomUUID(), title })
      )
    },
    onSuccess: ()=> queryClient.invalidateQueries(["Posts"])        // Invalidating queryClient on Success
  })

  if (postsQuery.isLoading) return <h1>Loading...</h1>;     // Accessing isLoading method using queryClient variable and handling UI.

  if (postsQuery.isError)  {
    return <h1>{ JSON.stringify(postsQuery.error)}</h1>
  }

  return (
    <div className="App">
      {
        postsQuery.data.map((post) => (
          <p key={ post.id}>
            { post.title}
          </p>
        ))
      }
      <button
        disabled={newPosMutation.isPending}
        onClick={() => newPosMutation.mutate("NEW POST")}>Add Item</button>    { /* Calling mutation method */}
    </div>
  );
}

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default App;

```
