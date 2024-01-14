import React, { useState } from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");

    
    

    
   

    const handleFirstNameChange = (value) => {
        setFirstName(value);
    };

    const handleLastNameChange = (value) => {
        setLastName(value);
    };

    const handleEmailChange = (value) => {
        setEmail(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleConfirmPwChange = (value) => {
        setConfirmPw(value);
    };

    return (
        <div className="App">
            <>
                <form >
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            onChange={(e) => handleFirstNameChange(e.target.value)}
                            value={firstName}
                        />
                        {firstName.length > 0 && firstName.length < 2 ? (
                            <p>First Name must be at least 2 characters</p>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            onChange={(e) => handleLastNameChange(e.target.value)}
                            value={lastName}
                        />
                        {lastName.length > 0 && lastName.length < 2 ? (
                            <p>Last Name must be at least 2 characters</p>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            onChange={(e) => handleEmailChange(e.target.value)}
                            value={email}
                        />
                        {email.length > 0 && email.length < 2 ? (
                            <p>Email must be at least 2  characters</p>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            onChange={(e) => handlePasswordChange(e.target.value)}
                            value={password}
                        />
                        {password.length > 0 && password.length < 8 ? (
                            <p>Password must be at least 8 characters</p>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            onChange={(e) => handleConfirmPwChange(e.target.value)}
                            value={confirmPw}
                        />
                        {confirmPw.length > 0 && confirmPw !== password ? (
                            <p>Passwords must match</p>
                        ) : null}
                    </div>



                    <div>
                        <h3>first Name : {firstName}</h3>
                        <h3>last Name : {lastName}</h3>
                        <h3>email : {email}</h3>
                        <h3>password : {password}</h3>
                        <h3>confirm Password : {confirmPw}</h3>


                    </div>
                    
                </form>
            </>
        </div>
    );
};

export default UserForm;
