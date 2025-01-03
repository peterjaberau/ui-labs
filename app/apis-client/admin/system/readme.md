# Explanation of systemReducers and systemMiddlewares
## systemReducers
The systemReducers object combines multiple reducers from different parts of the application into a single object. 
Each key in the object corresponds to a specific feature or module, and the value is the reducer function for that feature. 
This allows the Redux store to manage the state for all these features in a structured way.  

**Example JSON Payload:**  
Before:
```json
{
  "user": userReducer,
  "posts": postsReducer,
  "comments": commentsReducer
}
```

After:
```json
{
  "userInfo": {
    "data": {
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  },
  "authApi": {
    "token": "abc123"
  },
  "dashboard": {
    "widgets": [
      "widget1",
      "widget2"
    ]
  }
}
```



## systemMiddlewares
The systemMiddlewares array combines multiple middleware functions from different parts of the application into a single array. 
Middleware in Redux is used to extend the store's abilities, such as handling asynchronous actions, logging, 
or modifying actions before they reach the reducers. 
Each middleware in the array is responsible for a specific feature or module.

**Example JSON Payload:**  
Before:

```json
{
  "action": "FETCH_USER",
  "state": {}
}
```

After:

```json
{
  "action": "FETCH_USER",
  "state": {
    "userInfo": {
      "isLoading": true
    }
  }
}
```
