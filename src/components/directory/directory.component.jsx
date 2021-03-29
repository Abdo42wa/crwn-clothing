import React from 'react';
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
import sections from '../../sections.js'



const Directory = () => {


    return (
      
            <div className='directory-menu'>

            {
                sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }

            </div> 
        
    )
}

export default Directory;