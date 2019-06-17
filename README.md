# React

## Front End Timeline

Front end web development for dinosaurs

- [HTML and JS](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70)

## Javascript Timeline

- [Javascript Web Application](examples/js-timeline/js-site)
- [jQuery Web Application](examples/js-timeline/jquery-site)
- [React](examples/js-timeline/react-site-intro)
- [React with JSX](examples/js-timeline/react-site-babel)
- [React with JSX & Classes](examples/js-timeline/react-site-babel-classes)

## React Basics

The React framework was built to solve one problem: building large applications with data that changes over time.

In the old times, re-rendering one thing meant re-rendering everything. This had negative implications on processing power and ultimately user experience, which at times became glitchy and laggy.

Enter, React's Virtual DOM, Components, and JSX...

## Virtual DOM

The **Virtual DOM** gives us a javascript
representation of the actual DOM. When changes are made to the view we want to
show, we update the Virtual DOM first, which then checks the diffs between what
was changed to what is currently rendered, and changes ONLY the pieces that need
to be changed, rather than re-rendering the entire page. You can think about it
like a staging area for changes that will eventually be implemented.

## Components

The basic unit you'll be working with in ReactJS is a **component**. Components are pieces of our application that we can define once and reuse all over the place. They're a way
to modularize or compartmentalize features of our applications.

With components, there is more integration and less separation of HTML, CSS, and JavaScript.
Instead of creating a few large files, you will organize your web app into small, reusable components that encompass their own content, presentation, and behavior.

### Discussion: Identifying Components

Take a look at [CraigsList](https://boston.craigslist.org/search/aap) (note: right click to open in a new tab!).

Each listing is a component. How can you identify this?
- Listings look identical in structure, but have different information populating them
- Listings are dynamically generated based on the user's search

### Lab: Identifying Components

Now, go to [Amtrak.com](https://www.amtrak.com/home) (note: right click to open in a new tab!). We want to look at the listing page, so put in any "From" (for example, New York - Penn Station), any "To" (for example, Boston - South Station), and pick any date. Hit "Find Trains". Now look at the listing page:

![Amtrak](https://git.generalassemb.ly/storage/user/5747/files/754db814-30fb-11e8-88c2-04ed98ab1834)

Scrolling down it, identify the visual "components" the website is comprised of. We suggest drawing this out on paper!

As you're drawing this out, think about the following questions...

* Where do you see "nested components;" that is, where are there components inside another component? Where do you see just one "layer" instead?
* Are there any components that share the same structure?
* For components that share the same structure, what is different about them?

## JSX

#### Element
```js
const element = <h1>Hello, world!</h1>;
```

#### Multiple Elements
- wrap in `()`
- must have 1 single parent element
```js
const introductionElements = (
  <header>
    <h1>Hello, world!</h1>
    <h2>Welcome to my app</h2>
  </header>
);
```

#### Interpolation 
```js
const name = 'Sami';
const element = <h1>Hello, {name}</h1>;
```

#### Interpolation with functions
```js
const formatName = (user) => user.firstName + ' ' + user.lastName;

const user = {
  firstName: 'Mike',
  lastName: 'Finn'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

```

#### Ternary Operator instead of `if` statement
```js
const name = 'Sami';

const element = (
  <h1>
    {name === 'Sami' ? 'Hello Sami the wise' : 'Hello ' + name}
  </h1>
)

```

#### Classes
- use `className`
```js
const element = <h1 className='intro intro-alert'>Hello World</h1>;
```

#### Comments
```js
const name = 'Sami';

const element = (
  <h1>
    {/* 
      Checks if the user is Sami for a custom message
      If not Sami then just says Hello and the user name
    */}  
    {name === 'Sami' ? 'Hello Sami the wise' : 'Hello ' + name}
  </h1>
)

```
- [JSX visual compiler](https://babeljs.io/repl/)

## Create React App

- [Create React App](https://github.com/facebook/create-react-app)
