import './App.css';
import React, { useState } from 'react'
import Member from './Member'
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [ members, setMembers ] = useState([])

  const [ formValues, setFormValues ] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newMember.name || !newMember.email || !newMember.role) return

    setMembers([...members, newMember])

  }

  return (
    <div className="App">
      <h1>Team Members</h1>

      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}

      />
      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }      
    </div>
  );
}

export default App;
