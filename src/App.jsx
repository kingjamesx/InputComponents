import Input from './components/Input';
import { Inputi } from './components/Input';
import './App.css'

function App() {

  return (
    <div className='app'>
     <h1>Inputs</h1>
  <div>
   <pre>
    &lt;input/&gt;
   </pre>
    <Input/>
  </div>
  <div>
   <pre>
    &lt;input error /&gt;
   </pre>
    <Input error/>
  </div>
  <div>
   <pre>
    &lt;input disabled /&gt;
   </pre>
    <Input disabled/>
  </div>
  <div className='flex'>
    <span>
    <pre>
    &lt;input helper-text=' Some interesting text' /&gt;
   </pre>
    <Input helpertext=' Some interesting text'/>
    </span>
  <span>
  <pre>
    &lt;input helper-text=' Some interesting text error' /&gt;
   </pre>
    <Input helpertext=' Some interesting text' error/>
  </span>
 
  </div>
  <div className='flex'>
    <span>
    <pre>
    &lt;input startIcon /&gt;
   </pre>
    <Inputi startIcon/>
    </span>
  <span>
  <pre>
    &lt;input endIcon /&gt;
   </pre>
    <Inputi  endIcon/>
  </span>
 
  </div>
  <div>
   <pre>
    &lt;input value='Text'/&gt;
   </pre>
    <Input value='Text'/>
  </div>
  <div className='flex'>
    <span>
    <pre>
    &lt;input size='sm' /&gt;
   </pre>
    <Input size='sm'/>
    </span>
  <span>
  <pre>
    &lt;input size='md' /&gt;
   </pre>
    <Input  size='md'/>
  </span>
 
  </div>
  <div>
   <pre>
    &lt;input fullwidth/&gt;
   </pre>
    <Input fullwidth/>
  </div>
  <div>
   <pre>
    &lt;input multiline row=”4”/&gt;
   </pre>
    <Input multiline row='4'/>
  </div>
    </div>
  )
}

export default App
