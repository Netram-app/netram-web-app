import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import Axios from 'axios'

export const Signup = memo(() => {


    let url = "/createUser"

    const navigate = useNavigate()
    
    const formik = useFormik({
        initialValues: {
            fullName:'',
            email: '',
            password: '',
            conformPassword:'',

        },

        validate: values => {

            const error = {}

            if (!values.fullName) {
                error.fullName = "fullName is requried"

            }

            if (!values.email) {
                error.email = "Email is requried"

            }
            if (!values.password) {
                error.password = "password is requried"

            }

            if (!values.conformPassword) {
                error.conformPassword = "conformPassword is requried"

            }

            return error



        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));

         
            

            Axios.post(url,values)
                .then(res => {
                    window.alert("form sumbit successfull")
                })
                .then(res => {
                    navigate('/login');
                })
                .catch((res)=>{
                    window.alert(`${res.response.data.message}`)
                    console.log(res.response.data.message)
                }) 
        },
    });

    return (
        <>
            {/* component */}
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <form onSubmit={formik.handleSubmit} >

                        {formik.errors.fullName && (
                                <span className="text-red-500">{formik.errors.fullName}</span>
                            )}
                        <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="fullName" placeholder="Full Name" onChange={formik.handleChange}
                                value={formik.values.fullName} />


                        {formik.errors.email && (
                                <span className="text-red-500">{formik.errors.email}</span>
                            )}

                        <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email"onChange={formik.handleChange}
                                value={formik.values.email} />



                        {formik.errors.password && (
                                <span className="text-red-500">{formik.errors.password}</span>
                            )}
                        <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" onChange={formik.handleChange}
                                value={formik.values.password}/>


                        {formik.errors.conformPassword && (
                                <span className="text-red-500">{formik.errors.conformPassword}</span>
                            )}
                        <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="conformPassword" placeholder="Confirm Password" onChange={formik.handleChange}
                                value={formik.values.conformPassword}/>


                        <button type="submit" className="w-full text-center py-3 rounded bg-green-400 hover:bg-green-700 text-white focus:outline-none my-1">Create Account</button>

                        </form>
                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </Link> and
                            <Link className="no-underline border-b border-grey-dark text-grey-500" href="#">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link className="no-underline border-b border-blue text-blue" to="/login">
                            Log in
                        </Link>.
                    </div>
                </div>
            </div>

        </>
    )
})