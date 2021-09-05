import React from 'react';
import './style.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreeting';
import StyleShit from './components/StyleShit';
import Inline from './components/Inline';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero'
import ErrorBoundry from './components/ErrorBoundry'

export default function App() {
  const onSubmit = name => {
    console.log('hello ', name);
  };
  return (
    <div>
      {/* <h1>Hello Abhishek!</h1>
      <Greet name="Ironman" work="Kill Thanos" onSubmit={e => onSubmit(e)} />
      <Welcome />
      <Counter />
      <FunctionClick />
   
      <EventBind/>
      <ParentComponent />
      <ClassClick /> */}

      {/* <UserGreetings/> */}
      {/* <StyleShit primary= {true} /> */}
      {/* <Inline/> */}
      {/* <Form/> */}
      {/* <LifeCycleA/> */}
      {/* <FragmentDemo />
      <PortalDemo/>
      <ErrorBoundry>
      <Hero HeroName = "Ironman" />
      <Hero HeroName = "Spiderman" />
      <Hero HeroName = "Joker" />
      </ErrorBoundry> */}
    </div>
  );
}
