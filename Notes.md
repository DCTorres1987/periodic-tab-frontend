NPM - NODE PACKAGE MANAGER 
JSX -  EXTENSION OF VANILLA JAVASCRIPT WITH A SPECIFIC SYNTAX
react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to

REACT FEATURES

    -VIRTUAL DOM (THAT ALLOWS FOR FAST, EFFICIENT, CONTENT RENDERING)

    -DECLARATIVE WRITING STRUCTURE (ALLOWING YOU TO SIMPLY EXPRESS HOW YOUR APP SHOULD LOOK AND LET REACT HANDLE UPDATES AND UNDERLYING DATA CHANGES)

    -BABEL (AN INCLUDED TRANSPILER THAT CONVERTS MODERN JAVASCRIPT AND CUSTOM CODE LIKE JSX INTO MORE WIDELY COMPATIBLE JAVASCRIPT)

    -WEBPACK (A BUNDLER THAT TAKES ALL OUR WORK, ALONG WITH ANY REQUIRED DEPENDENCY CODE, AND PACKAGES IT ALL UP IN A SINGLE, TRANSFERABLE BUNDLE)

ONLY REQUIRED METHOD FOR A REACT COMPONENT TO BE VALID IS RENDER()

ACTIONS ALWAYS NEED A TYPE PROPERTY SO THE FUNCTION KNOWS WHAT TO DO. 

REDUX FLOW
ACTION => REDUCER (FUNCTION) => UPDATED STATE

REDUCERS => reducer is a pure function which means that given the same arguments of state and action, it will always produce the same new state
PURE FUNCTIONS => PURE FUNCTIONS ARE ONLY DETERMINED BY THEIR INPUT VALUES
               => PURE FUNCTIONS HAVE NO SIDE EFFECTS. NO EFFECTS OUTSIDE OF THE FUNCTION. ONLY RETURN A VALUE.

dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.;

With React Redux, your components never access the store directly - connect does it for you. React Redux gives you two ways to let components dispatch actions:

By default, a connected component receives props.dispatch and can dispatch actions itself.
connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.

The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.

React is a library in JavaScript

LIFECYCLE HOOKS/LIFECYCLE METHODS - CALLED AT DIFFERENT TIMES IN THE COMPONENT'S LIFECYCLE - JUST BEFORE ITS CREATED, AFTER ITS CREATED, AND WHEN ITS ABOUT TO BE DELETED

LIFECYCLE METHODS IN ORDER

-MOUNTING
    1. CONSTRUCTER() it is the first function called upon the initialization of a component; this makes it useful for creating an initial state for a component.

    2. STATIC GETDERIVEDSTATEFROMPROPS() is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.

    3. RENDER() Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components).

    4. COMPONENTDIDMOUNT()  method will get called just after the render method. You would use this method to set up any long-running processes or asynchronous processes such as fetching and updating data. 
