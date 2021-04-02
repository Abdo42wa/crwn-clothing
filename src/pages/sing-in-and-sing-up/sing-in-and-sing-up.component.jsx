import React from 'react'
import SingIn from '../../components/sign-in/sign-in.component'
import SingUp from '../../components/sign-up/sign-up.component'
import './sing-in-and-sing-up.styles.scss'

const SingInAndSingUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SingIn />
            <SingUp />
        </div>
    )
}

export default SingInAndSingUp
