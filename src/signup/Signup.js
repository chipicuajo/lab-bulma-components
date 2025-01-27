import React from 'react';
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

const SignUp = () => {
  return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isPrimary className="button is-rounded my-class">Submit</CoolButton>   
    </div>
  )
};

export default SignUp
