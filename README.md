# implicit-component

## Description

 This is ridiculously simple dependency injection for React components using context and hooks.


## Install

````
yarn add implicit-component
````
or

````
npm i implicit-component
````

## Usage

### Trivial Example
````javascript
import React from 'react';
import {ComponentContext, useComponentContext} from "implicit-component";

function Header() {
  return <h2>{'Header'}</h2>;
}

function Body() {
  return <p>{'Body'}</p>;
}

const componentList = {Header, Body};

function Page() {
  const {Body, Header} = useComponentContext();

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default function App() {
  return (
      <ComponentContext list={componentList}>
        <Page />
      </ComponentContext>
  );
}

````

What does this give us? Absolutely nothing, other than that the components in Page are no longer hard coded. For this app there is absolutely no point in adding more indirection.

### Contrived Example

In the next example there are actually a point in the indirection. And a step, al be it a small one, closer to an actual use case.

````javascript
import React from 'react';
import {ComponentContext, useComponentContext} from "implicit-component";

function Header1() {
  return <h2>{'Header 1'}</h2>;
}

function Header2() {
  return <h2>{'Header 2'}</h2>;
}

function Body1() {
  return <p>{'Body 1'}</p>;
}

function Body2() {
  return <p>{'Body 2'}</p>;
}

function Page() {
  const {Body, Header} = useComponentContext();

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

const compList1 = {Header: Header1, Body: Body1};
const compList2 = {Header: Header2, Body: Body2};

export default function App() {
  return (
    <div>
      <ComponentContext list={compList1}>
        <Page />
      </ComponentContext>
      <ComponentContext list={compList2}>
        <Page />
      </ComponentContext>
    </div>
  );
}

````

Now this was actually useful. We could reuse the Page component and render different components based only on the component context.

### Nested Contexts

Contexts are nested by prototype chaining. That means we can create a global list of components that we can override locally by nesting contexts, and the none overridden components in the parent contexts are still accessible.

````javascript
import React from 'react';
import {ComponentContext, useComponentContext} from "implicit-component";

function Header1() {
  return <h2>{'Header 1'}</h2>;
}

function Body1() {
  return <p>{'Body 1'}</p>;
}

function Body2() {
  return <p>{'Body 2'}</p>;
}

function Page() {
  const {Body, Header} = useComponentContext();

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

const compList1 = {Header: Header1, Body: Body1};
const compList2 = {Body: Body2};

export default function App() {
  return (
    <ComponentContext list={compList1}>
      <ComponentContext list={compList2}>
        <Page />
      </ComponentContext>
    </ComponentContext>
  );
}

````

Here we override the body in the inner context butt are still using header1.
