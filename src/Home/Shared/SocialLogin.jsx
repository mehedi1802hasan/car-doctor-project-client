import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const SocialLogin = () => {
    const {googleLogin}=useContext(AuthContext)
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className='my-4 text-center '>
            <button onClick={handleGoogleLogin} className=" btn-circle btn btn-outline btn-warning">
    G
</button>
        </div>
    );
};

export default SocialLogin;