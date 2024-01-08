
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
    
    return (
        <form onSubmit={createUser}>
            <div>
                <label>Prénom: </label> 
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Nom: </label> 
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Adresse e-mail: </label> 
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Mot de passe: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirmer le mot de passe: </label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            

           
            <div>
                <h2>Your Form Data</h2>
                <p>Prénom: {firstName}</p>
                <p>Nom: {lastName}</p>
                <p>Adresse e-mail: {email}</p>
                <p>Mot de passe: {password}</p>
                <p>Confirmer le mot de passe: {confirmPassword}</p>
            </div>
        </form>
    );
};

export default UserForm;


    
