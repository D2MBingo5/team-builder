import './App.css';
import { useState } from 'react'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [ members, setMembers ] = useState([])
  const [ formValues, setFormValues ] = useState(initialFormValues)

  return (
    <div className="App">
      <header className="App-header">
        Test
      </header>
      <div className='team-member-container'>

      </div>
    </div>
  );
}

export default App;
