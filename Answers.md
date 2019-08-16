1. What problem does the context API help solve?

context api gives you a centralized spot to store and access state. that can be great if you need to access state in multiple sibling components that would otherwise need state stored top-level and passed down through a long tree of child components

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are functions that are triggered by something a user does on the page (button click, scroll, etc) and dispatch information to the reducer. 

reducers accept an action type and a payload from the action and modify state in a predictable way depending on which action type come is. reducers are cool because they give you a central spot to store and modify state.

store is how the entire app has access to state within each component. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is like the store, state that is accessible anywhere.  component state is only accessible by the component it exists on and any child components it might be passing props down to.  application state is great for use when multiple components on different ui branches might need access to the same state data. and component state is best used for local data, like input values. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk is an action function returned by another function.  
instead of dispatching through mapStateToProps, we dispatch within our actions using a thunk function, then we have an action creator function that runs whenever a predefined event of some sort is triggered. so our user triggers an action creator, which calls a thunk function, which returns another function that runs an api call to set up our data. the russian doll-ness of these functions allow them to run asyncronously which is how we can make an api call and still display something like "loading data, please wait" on the screen.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
as far as simplictiy goes i like context. but i can see how redux-thunk is important for manipulating external api data.

