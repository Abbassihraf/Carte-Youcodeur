import React from 'react'
import Layout from './../core/Layout'
// import {API_URL} from './../config'

const signup = () => {

    const Form = () => (
        <form >
            <div className="form-group">
                <label htmlFor="first_name" className="text-muted">First name</label>
                <input type="text" className="form-control" id="first_name"/>
            </div>
            <div className="form-group">
                <label htmlFor="last_name" className="text-muted">Last name</label>
                <input  type="text" className="form-control" id="last_name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="text-muted">Email</label>
                <input  type="text" className="form-control" id="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password" className="text-muted">Password</label>
                <input   type="text" className="form-control" id="password"/>
            </div>
            <button className="btn btn-lg btn-block btn-outline-success">Sign Up</button>
          
        </form>
    )
    return (
        <div>
           <Layout title="Sign up">
               <div className="row">
                   <div className="col-md-6 mx-auto">

                     { Form() }
                   </div>
                </div>
               

           </Layout>
        </div>
    )
}

export default signup