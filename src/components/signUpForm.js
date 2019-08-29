import React, { useState, useEffect, Fragment } from 'react';

const SignUpForm = (props) => {
  const [firstName, updateFirstName] = useState('');
  const [lastName, updateLastName] = useState('');
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [error, setError] = useState('');

  return (
      <div>
          <form>
              <input 
                type = 'text'
                placeholder = 'First Name'
                value = {firstName}
                onChange = { e => updateFirstName(e.target.value)}
              />
          </form>
      </div>
  )
}

export default SignUpForm;