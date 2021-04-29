
import './App.css';
import Card from './components/Card'
import Cardlist from './components/Cardlist'
import { robots } from './global/robots'

function App() {
  return (
    
     // step1
  // step2(robots)
  step3(robots)
    
  );
}

export default App;

function step1() {
  return (
    <>
      <Card id="1" name="Jone Doe" email="jane.doe@gmail.com" />
      <Card id="2" name="Jone Doe" email="jane.doe@gmail.com" />
      <Card id="3" name="Jone Doe" email="jane.doe@gmail.com" />
    </>
  )
}

function step2() {
  return (
    <>
      <Card id={robots[0].id} name={robots[0].name} id={robots[0].email} />
      <Card id={robots[1].name} name={robots[1].name} email={robots[1].email} />
      <Card id={robots[2].email} name={robots[2].name} email={robots[2].email} />
    </>
  )
}

function step3(robots) {
  return (
    <Cardlist robots={ robots }/>
  )
}
