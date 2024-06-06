import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import Cookies from 'js-cookie';
import { validate } from '../globalfun';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    useEffect(()=>{
    },[email ,password ])

    const submit = (e) => {
        const errors = validate(email, password);
        if (Object.keys(errors).length > 0) {
          setErrors(errors);
          return;
        }
        e.preventDefault()
        setLoading(true)
        axios.post('https://backendloginsignup.onrender.com/app/login', { email: email, password: password })
            .then(res => {
                console.log(res?.data)
                if (res?.data) {
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    Cookies.set('token', res.data.token);
                    setLoading(true)
                    alert('Login Successful');
                    navigate("/")
                 }
                else if (res.data.error) {
                    alert(res?.data?.error)
                    setLoading(false)
                }
            })
            .catch(err => {
                alert('Error')
                setLoading(false)   
            })
    }

    return (
        <>
            <div className="container">
                <div className="form-div">
                <h1>Login Form</h1>
                    <form onSubmit={submit} >
                        <input type="text" placeholder="Email" required onChange={(e) => setemail(e.target.value)} />
                        <br />
                        <input type="text" placeholder="Password" required onChange={(e) => setpassword(e.target.value)} />
                        <br />
                        <button className='submit_button' type="submit"disabled={loading}>
                        {loading ? 'Loading' : 'Submit'}
                        {loading && <div className="loader"></div>}
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login
