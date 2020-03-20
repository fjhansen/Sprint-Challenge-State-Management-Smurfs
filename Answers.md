1. What problem does the context API help solve?
NO MORE PESKY PROPS! Goodbye prop drilling! You can pass any data down the component tree.
https://dev.to/spukas/avoid-prop-drilling-in-react-with-context-api-1ne5
good link on this.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The `Store` is the essential object that holds the apps state date. The `Reducer` is a function that returns state data, which is activated by `Actions`. `Actions` are objects that tell the reducer how to change the state through type and/or payload. the `single source of truth` is coined because the only way to change the store data is to dispatch an action

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

`Application State` is state that is global, data accessable by any component in the app. `Component State` is state that can only be accessed locally through props and only be updated by the component that contains the state. Redux's store is an example of `Application State`. Personally I prefer application state for both small and large applications, but some might perfer to use component state for smaller projects.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk makes API calls and dispaches actions based on API date in redux possible. it is a middleware.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Personally I really love redux toolkit, but context is amazing for smaller apps because of its similarity to redux toolkit. I hate working with props! So naturally, I love context!
