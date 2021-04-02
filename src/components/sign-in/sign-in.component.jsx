import React,{useState} from 'react'
import './sing-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'

const SignIn = () => {

    //const [email,setEmail] = useState('');
    //const [password,setPassword] = useState('');
    const [ userCredentials,setUserCredentials] = useState({

        email:  '',
        password:''
    })

    const {email,password} = userCredentials;
  const handelSubmit = async (e) => {

        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email,password)
            setUserCredentials({email:'',password:''})
        } catch (error) {
            console.log(error);
        }
    }

    const handelChange = (e) =>{
        const {value,name} = e.target;
        setUserCredentials({...userCredentials, [name]:value})
        
    }
    return (
        <div className='sign-in'>
                <h2 className='title'>I already have an accoumt</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit={handelSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    handleChange={handelChange}
                    value={email}
                    label='email'
                    required  />
                    <FormInput 
                    name='password'
                     type='password' 
                     handleChange={handelChange}
                     value={password} 
                     label='password'
                     required  />

                    <div className='buttons' >
                    <CustomButton type='submit'>Sing In </CustomButton>
                    <CustomButton onClick ={signInWithGoogle } isGoogleSignIn>
                    {''}Sing In with google {''}
                     </CustomButton>

                     </div>
                </form>
        </div>
    )
}

export default SignIn
