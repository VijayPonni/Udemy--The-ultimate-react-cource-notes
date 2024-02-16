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
