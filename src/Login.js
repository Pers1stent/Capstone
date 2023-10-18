import React, {useState} from 'react'
import './components/login.css'
import {validateEmail} from "../src/utils";

const PasswordErrorMessage = () => {
    return ( 
      <p className="FieldError">Password should have at least 8 characters</p>
    );
   };

const  EmailErrorMessage = () => {
    return (
        <p className="FieldError2">Check your email, email should have sign @</p>
    );
};


const Login = () => {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pass, setPass] = useState({
        value: "",
        isTouched: false,
      });
    const[confirmPass, setConfirmPass] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("");

    const getIsFormValid = () => {
        return (
          firstName &&
          validateEmail(email) &&
          pass.value.length >= 8
        );
      };

      const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    
        if (!validateEmail(newEmail)) {
          setEmailError("Check your email, email should have '@' sign");
        } else {
          setEmailError("");
        }
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account Created")
        setFirstName("");
        setLastName("");
        setEmail("");
        setPass({
            value: "",
            isTouched: false, });
        setConfirmPass("");
        setPhoneNumber("");
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Password:", pass);
        console.log("Confirm Password:", confirmPass);
        console.log("Phone Number:", phoneNumber);
    };
  return (
    <>
      <div className='container'>
        <div className='flex_container'>
            <h1 className='h1'>Sign up</h1>
            <form onSubmit={handleSubmit}>
                    <div className='grid-item'>
                        <div className='label'><label htmlFor='firstName'>First Name</label></div>
                        <input type='text' id='firstName' name='firstName'value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className='grid-item'>
                        <div className='label'><label htmlFor='lastName'>Last Name</label></div>
                        <input type='text' id='lastName' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className='grid-item'>
                        <div className='label'><label htmlFor='email'>Email</label></div>
                        <input type='email' id='email' name='email' value={email}
                        onChange={handleEmailChange}
                        />
                        {emailError && !validateEmail(email) && (
                          <EmailErrorMessage />
                        )}
                    </div>
                    <div className='grid-item'>
                        <div className='label'><label htmlFor='pass'>Password</label></div>
                        <input type='password'  id='pass' name='pass' value={pass.value}
                        onChange={(e) => { 
                            setPass({ ...pass, value: e.target.value });
                          }}
                          onBlur={() => {
                            setPass({ ...pass, isTouched: true });
                          }}
                        />
                        {pass.isTouched && pass.value.length < 8 ? (
                          <PasswordErrorMessage /> 
                        ) : null}
                    </div>
                    <div className='grid-item'>
                        <div className='label'><label htmlFor='confirmPass'>Confirm Password</label></div>
                        <input type='password' id='confirmPass' name='confirmPass' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
                    </div>
                    <div className='grid-item'>
                        <div className='label'><label htmlFor='phoneNumber'>Phone Number(Optional)</label></div>
                        <input type='tel' id='phoneNumber' name='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                    <div className='grid-item'>
                        <button disabled={!getIsFormValid()} className='nice_button' type='submit'>Submit</button>
                    </div>
            </form>
        </div>
     </div>
    </>
  )
}

export default Login