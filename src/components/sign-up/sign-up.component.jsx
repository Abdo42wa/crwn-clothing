import React,{useState} from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

const SignUp = () => {
    const [userCredentials,setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confermPassword:''
    })

    const {displayName,email,password,confermPassword} = userCredentials;
    
    const handelSubmit = async (e) => {
        e.preventDefault();

        if(password !== confermPassword){
            alert("password don't match")
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password)
            
            await createUserProfileDocument(user, {displayName})
      

            setUserCredentials({
            displayName: '',
            email:'',
            password:'',
            confermPassword:''
        });

        } catch (error) {
            console.log(error)
        }
    } 
            const handleChange =  (e) => {
                    const {value, name} =e.target
                    setUserCredentials({...userCredentials, [name]:value})
            }
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account </h2>
            <form className='sign-up-form' onSubmit={handelSubmit}>

                <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' />
                <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' />
                <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' />
                <FormInput type='password' name='confermPassword' value={confermPassword} onChange={handleChange} label='Conferm password' />
                <CustomButton type='submit'>Crate account</CustomButton>
            </form>
        </div>
    )
}

export default SignUp
