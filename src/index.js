import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navBar';
import SignUpForm from './components/signUpForm';

const App = () => {
    return (
        <div>
            <NavBar />
            <SignUpForm />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));