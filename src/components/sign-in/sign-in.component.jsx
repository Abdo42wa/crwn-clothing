import React,{useState} from 'react'
import './sing-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'

const SignIn = () => {

    //const [email,setEmail] = useState('');
    //const [password,setPassword] = useState('');
    const [ state,setState] = useState({

        email: "",
        password:""
    })

  const handelSubmit = (e) => {

        e.preventDefault();
        setState({
            email: '',
            password: ''
        })
    }

    const handelChange = (e) =>{
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
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
                    value={state.email}
                    label='email'
                    required  />
                    <FormInput 
                    name='password'
                     type='password' 
                     handleChange={handelChange}
                     value={state.password} 
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
