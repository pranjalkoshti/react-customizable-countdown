import logo from './logo.svg';
import './App.css';
import TimerSegment from './components/timerSegment';

function App() {
  return (
    //  IMP ---------- props for timer segment be like counterStyle={{}} startDate="" timerStyle={{color:'black'}} 
           <TimerSegment 
           timerStyle={{marginTop:'10px'}} 
           counterStyle={{color:'goldenRod', fontSize:'2.em'}} 
           startDate="2021-01-10T14:48:00" 
           labelStyle={{color:'grey',fontSize:'12px'}}
           /> 
  );
}

export default App;
