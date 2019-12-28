import React from 'react';
import {ComponentContext, useComponentContext} from 'implicit-component';

function Header1() {
  return <h1>Header 1</h1>;
}

function Header2() {
  return <h1>Header 2</h1>;
}

function Body1() {
  return <p>Body 1</p>;
}

function Body2() {
  return <p>Body 2</p>;
}

const compList1 = {Header: Header1, Body: Body1};
const compList2 = {Header: Header2, Body: Body2};
const compList3 = {Body: Body2};

function Page() {
  const {Header, Body} = useComponentContext();

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

const App = () => {
  return (
    <div>
      <ComponentContext list={compList1}>
        <Page />
      </ComponentContext>
      <ComponentContext list={compList2}>
        <Page />
      </ComponentContext>
      <ComponentContext list={compList1}>
        <ComponentContext list={compList3}>
          <Page />
        </ComponentContext>
      </ComponentContext>
    </div>
  );
};
export default App;
