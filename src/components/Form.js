import React, { Fragment, useState } from "react";
import {v4 as uuid} from "uuid";
import PropTypes from "prop-types";

const Form = ({createAppointment}) => {
    
    // create appointment state
    const [appointment, setAppointment] = useState({
        pet: "",
        owner: "",
        date: "",
        time: "",
        symptoms: ""
    })

    const [error, setError] = useState(false)

    // create change handler
    const handleChange = e => {setAppointment({
        ...appointment,
        [e.target.name]: e.target.value
    })}

    // extract values
    const { pet, owner, date, time, symptoms } = appointment;

    // on submit
    const submitAppointment = e => {
        e.preventDefault();

        // validating entries
        if(pet.trim() === "" || owner.trim() === ""
            || date.trim() === "" || time.trim() === ""
            || symptoms === ""){
            setError(true)
            return;}

        // remove validation message
        setError(false);

        // assign ID
        appointment.id = uuid()

        // create appointment
        createAppointment(appointment)

        // reset form
        setAppointment({
            pet: "",
            owner: "",
            date: "",
            time: "",
            symptoms: ""
        })
    }

    return (
        <Fragment>
            <h2>Create Appointment</h2>

            { error ? <p className="alerta-error">All the fields are required</p>:null}
            <form
                onSubmit={submitAppointment}>
                <label>Pet's Name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet Name"
                    onChange={handleChange}
                    value={pet}
                />

                <label>Owner's Name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner's Name"
                    onChange={handleChange}
                    value={owner}
                />
                
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />

                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />

                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange={handleChange}
                    value={symptoms}
                />

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={handleChange}>
                    Submit
                </button>
            </form>
        </Fragment>
    )
}

Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
}
export default Form;