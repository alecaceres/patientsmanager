import React, { Fragment, useState } from "react";

const Form = () => {
    
    // create appointment state
    const [appointment, setAppointment] = useState({
        pet: "",
        owner: "",
        date: "",
        time: "",
        symptoms: ""
    })

    // create change handler
    const handleChange = e => {setAppointment({
        ...appointment,
        [e.target.name]: e.target.value
    })}

    // extract values
    const { pet, owner, date, time, symptoms } = appointment;

    return (
        <Fragment>
            <h2>Create Appointment</h2>

            <form>
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

export default Form;