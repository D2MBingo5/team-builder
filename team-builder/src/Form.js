import React from 'react'

export default function MemberForm(props) {
    const { values, update, submit } = props  

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group-inputs'>
                <label htmlFor='name'>
                    Name
                    <input 
                        id='name'
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                    />
                </label>
                <label htmlFor='email'>
                    Email
                    <input 
                        id='email'
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                    />
                </label>
                <label htmlFor='role'>Role
                    <select 
                        id='role' 
                        name='role'
                        onChange={onChange}
                        value={values.role}
                        >
                        <option value=''>SELECT A ROLE</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='The Ideas Guy'>The Ideas Guy</option>

                    </select>
                </label>

                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}