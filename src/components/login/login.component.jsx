import axios from 'axios';
import React, { useState } from 'react'

function LoginComponent() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://globalsoo.onrender.com/auth/register',

            data: {
                firstName, lastName, email, password, registeredAt: "DRIFT"
            }
        };
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div className='container p-4'>

            <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">First name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" id="validationCustom01" value={firstName} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Last name</label>
                    <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" id="validationCustom02" value={lastName} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="validationCustom02" value={email} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="validationCustom02" value={password} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Confirm Password</label>
                    <input onChange={(e) => setCPassword(e.target.value)} type="password" className="form-control" id="validationCustom02" value={cPassword} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
                        <label className="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Register me In!!</button>
                </div>
            </form>
        </div>
    )
}

export default LoginComponent