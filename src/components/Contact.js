import React from 'react'
import './Contact.css'

const avatarPic = ('https://randomuser.me/api/portraits/women/35.jpg');
const psuedo = 'Katherine Parker'
const online = true

const Contact = () => {
    return (
        <div className='Contact'>
            <img src={avatarPic} className='avatar' alt='avatar_picture'></img>
            <h4 className='name' >{psuedo}
                <div className='status'>
                    <div className='status-online'></div> 
                    <p className='status-text'> {online ? 'online' : 'offline'} </p>

                   
                </div>
            </h4>            
        



        </div>
    );
}






export default Contact;