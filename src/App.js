
import './App.css';
//import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message/>
        <Greeting name = "Bruce" heroName="Batman">
        <p>This is a children props.</p>
        </Greeting>
        <Greeting name= "Clark"  heroName="Superman"/>
        <Greeting name = "Diana" heroName="Wonder Women">
        <p>This is a children props also.</p>
        </Greeting>
        {/*<Greeting name="Clark" heroName="Superman">*/}
          {/*<button>Action</button>*/}
        {/*</Greeting>*/}
        {/*<Greeting name="Diana" heroName="Wonder Woman"/>*/}
        {/*<Welcome  name="Bruce" heroName="Batman"/>*/}
        {/*<Welcome  name="Clark" heroName="Superman"/>*/}
        {/*<Welcome  name="Diana" heroName="Wonder Woman"/>*/}
      </header>
    </div>
  );
}

export default App;
