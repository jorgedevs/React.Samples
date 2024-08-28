import { useState } from 'react'; 
import './App.css';

function App() {
  const [form, setForm] = useState({ 
    firstName: 'Luke', 
    lastName: 'Jones', 
    email: 'lukeJones@sculpture.com', 
  }); 

  return ( 
    <> 
      <div>
        <label> 
          First name: 
          {' '}
          <input 
            value={form.firstName} 
            onChange={e => { 
              setForm({ 
                // Spread operator: Copies all properties from the current form object
                ...form,
                // Updates the firstName property with the new value
                firstName: e.target.value 
              }); 
            }} 
          /> 
        </label>
      </div> 
      <div>
        <label> 
          Last name: 
          {' '}
          <input 
            value={form.lastName} 
            onChange={e => { 
              setForm({ 
                // Spread operator: Copies all properties from the current form object
                ...form, 
                // Updates the lastName property with the new value
                lastName: e.target.value 
              }); 
            }} 
          /> 
        </label> 
      </div>
      <div>
        <label> 
          Email: 
          {' '}
          <input 
            value={form.email} 
            onChange={e => { 
              setForm({ 
                // Spread operator: Copies all properties from the current form object
                ...form, 
                // Updates the email property with the new value
                email: e.target.value 
              }); 
            }} 
          /> 
        </label> 
      </div>
      <p> 
        {form.firstName}{' '} 
        {form.lastName}{' '} 
        ({form.email})
      </p>
    </> 
  ); 
}

export default App;
