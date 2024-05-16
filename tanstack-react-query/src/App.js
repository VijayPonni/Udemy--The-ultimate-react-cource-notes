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
