import React, { useState } from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState(""); 

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);

        
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const InputMessage = () => {
        if ( firstName.length < 2) {
            return "First Name must be at least 2 characters";
        }
        return null;
    };

    const PasswordMessage = () => {
        if ( password.length < 8) {
            return "Password must be at least 8 characters";
        }
        return null;
    };

    const ConPasswordMessage = () => {
        if (password !== confirmPassword) {
            return "Passwords must match";
        }
        return null;
    };


    
    
    return (
        <form onSubmit={createUser}>
            <div>
                <label>Prénom: </label> 
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <h3>{InputMessage}</h3>
            </div>
            <div>
                <label>Nom: </label> 
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <h3>{InputMessage}</h3>
            </div>

            <div>
                <label>Adresse e-mail: </label> 
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <h3>{InputMessage}</h3>
            </div>
            <div>
                <label>Mot de passe: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <h3>{PasswordMessage}</h3>
            </div>
            <div>

                <label>Confirmer le mot de passe: </label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <h3>{ConPasswordMessage}</h3>
            </div>
            

           
        
        </form>
    );
};

export default UserForm;
