import React, { useReducer, useState } from 'react'
import './App.css';

const formReducer = (state, event) => {
    if(event.reset) {
        return {
            Firstname: '',
            Lastname: '',
            Email: '',
            Address: '',
            Bio: '',
            Gender: '',
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

function Forms() {
    const [formData, setFormData] = useReducer(formReducer, {
        // count: 100,
    });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true
            })
        }, 20000)
    }

    const handleChange = e => {
        setFormData({
            name: e.target.name,
            value: e.target.value,
        });
    }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <p>First Name</p>
                    <input type='text' name='Firstname' onChange={handleChange} value={formData.Firstname || ''}/>
                </label>
                <label>
                    <p>Last Name</p>
                    <input type='text' name='Lastname' onChange={handleChange} value={formData.Lastname || ''}/>
                </label>
                <label>
                    <p>Email</p>
                    <input type='email' name='Email' onChange={handleChange} value={formData.Email || ''}/>
                </label>
                <label>
                    <p>Address</p>
                    <input type='text' name='Address' onChange={handleChange} value={formData.Address || ''}/>
                </label>
                <label>
                    <p>Bio</p>
                    <input type='text' name='Bio' onChange={handleChange} value={formData.Bio || ''}/>
                </label>
            </div>

            <div>
                <label>
                <p>Gender</p>
                <select name="Gender" onChange={handleChange} value={formData.Gender || ''}>
                    <option value="">--Please choose an option--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                   
                </select>
            </label>
            </div>

            <br></br>

            <button type='submit'>Submit</button>   
        </form>

        {submitting && 
            <div className='output'>
                <p>You are submitting the following:</p>
                <ul>
                    {Object.entries(formData).map(([name, value]) => (
                        <li key={name}><strong>{name}</strong>: {value.toString()}</li>
                    ))}
                </ul>
            </div>
        }
      </div>
  )
}

export default Forms