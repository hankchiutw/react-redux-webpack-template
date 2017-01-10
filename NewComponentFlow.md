# New component flow
- Create presentational component
- (optional)Create container component to invoke actions inside the component
    - map needed state and dispatch to props
    - do connect() and return
- Define actionCreators(within the same directory of the component) for others to import
- Define reducers(within the same directory of the component) for rootReducer to combine
- Add related states and reducers to rootReducer
