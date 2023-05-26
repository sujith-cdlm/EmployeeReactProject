import React, { useState } from 'react'
import NavBar from './NavBar'

const Employee = () => {

    const [inputField, setInputField] = useState(
        {
            name: "",
            designation: "",
            location: "",
            salary: ""
        }
    )

    const dataOnChange = (event) => {
        setInputField(
            {
                ...inputField, [event.target.name]: event.target.value
            }
        )
    }

    const submitValue = () => {

        console.log(inputField)
        //TODO api call
    }



    return (

        <div><NavBar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <br></br>
                        <label htmlFor="" className="form-label"><h5>Add Employee</h5></label>
                    </div>
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" name='name' value={inputField.name} onChange={dataOnChange} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <label htmlFor="" className="form-label">Designation</label>
                        <input type="text" name='designation' value={inputField.designation} onChange={dataOnChange} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <label htmlFor="" className="form-label">Location</label>
                        <input type="text" name='location' value={inputField.location} onChange={dataOnChange} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <label htmlFor="" className="form-label">Salary</label>
                        <input type="text" name='salary' value={inputField.salary} onChange={dataOnChange} className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col xxl-12">
                        <button className="btn btn-success" onClick={submitValue}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee