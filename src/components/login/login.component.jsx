import axios from 'axios';
import React, { useState } from 'react'

function LoginComponent() {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cPassword: "",
    }


    const [formValue, setFormValue] = useState(initialValues)





    const handleOnChange = (event) => {
        let { name, value } = event.target
        setFormValue((previous) => {
            return { ...previous, [name]: value }
        })

    }



    // let obj = { name: "rohan", stream: "frontEnd" }
    // console.log('obj:~~~> ', obj);

    // let abc = "stream"

    // obj = { ...obj, [abc]: "Foostack", name: "dadada" }
    // console.log('new obj: ~~~> ', obj);
















    const handleSubmit = (e) => {
        e.preventDefault()

        // let config = {
        //     method: 'post',
        //     url: 'https://globalsoo.onrender.com/authentication/register',

        //     data: {
        //         firstName, lastName, email, password, registeredAt: "DRIFT"
        //     }
        // };
        // axios.request(config)
        //     .then((response) => {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }
    return (
        <div className='container p-4'>

            <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">First name</label>
                    <input onChange={(e) => handleOnChange(e)} type="text" className="form-control" id="validationCustom01" value={formValue.firstName} name='firstName' />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Last name</label>
                    <input onChange={(e) => handleOnChange(e)} type="text" className="form-control" id="validationCustom02" value={formValue.lastName} name="lastName" />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Email</label>
                    <input onChange={(e) => handleOnChange(e)} type="email" className="form-control" id="validationCustom02" value={formValue.email} name='email' />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Password</label>
                    <input onChange={(e) => handleOnChange(e)} type="password" className="form-control" id="validationCustom02" value={formValue.password} name="password" />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Confirm Password</label>
                    <input onChange={(e) => handleOnChange(e)} type="password" className="form-control" id="validationCustom02" value={formValue.cPassword} name='cPassword' />
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