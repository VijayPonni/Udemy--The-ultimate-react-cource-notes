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
