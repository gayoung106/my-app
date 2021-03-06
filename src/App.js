import Composition from './components/2-4.Props/Composition';
import Extraction from "./components/2-4.Props/Extraction/Extraction";
import './App.css';
import ClassComponent from "./components/2-5.State/ClassComponent";
import FunctionalComponent from "./components/2-5.State/FunctionalComponent";
import Event from "./components/2-7.Event/Event";
import ClassComponent2 from "./components/2-6.LifeCycle/ClassComponent";
import Condition from "./components/2-8.ConditionalRendering/Condition";
import List from "./components/2-9.List/List";
import ControlledComponent from "./components/2-10.Form/ControlledComponent";
import UncontrolledComponent from "./components/2-10.Form/UncontrolledComponent";
import State from "./components/3-3.Hooks/State";
import Reducer from "./components/3-3.Hooks/Reducer";
import WelcomeDialog from "./components/3-5.Composition/WelcomeDialog";
import Dialog from "./components/3-6.Composition2/Dialog";
import ThankyouDialog from "./components/3-6.Composition2/ThankyouDialog";
import Button from "./components/3-7.HOC/Button";
import Input from "./components/3-7.HOC/Input";
function App() {
  return (
    <div className="App">
        <Input />
        <br />
        <br />
        <Button />
        {/*<ThankyouDialog />*/}
        {/*<Dialog />*/}
        {/*<WelcomeDialog />*/}
        {/*<State />*/}
        {/*<Reducer />*/}
        {/*<UncontrolledComponent />*/}
        {/*<ControlledComponent />*/}
        {/*<List />*/}
        {/*<Condition />*/}
        {/*<Event />*/}
        {/*<ClassComponent2 />*/}
      {/*  <FunctionalComponent />*/}
      {/*  <ClassComponent />*/}
      {/*<Extraction />*/}
      {/*<Composition />*/}

    </div>
  );
}

export default App;
