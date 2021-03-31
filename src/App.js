import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment"

function App() {

  // appointments on local storage
  let initialAppointments = JSON.parse(localStorage.getItem("appointments"));
  if (!initialAppointments) initialAppointments=[];

  // appointments array
  const [appointments, setAppointments] = useState(initialAppointments);

  // useEffect for state changes
  useEffect( ()=>{
    if(initialAppointments)
      localStorage.setItem("appointments", JSON.stringify(appointments))
    else
      localStorage.setItem("appointments", JSON.stringify([]))
  }, [appointments, initialAppointments])

  // add new appointment
  const createAppointment = appointment => {
    setAppointments([...appointments, appointment])
  }

  // function that removes an appointment from id
  const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id!==id)
    setAppointments(newAppointments)
  }

  return (
    <Fragment>
        <h1>Patients manager</h1>
        
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Form
                createAppointment={createAppointment}
              />
            </div>
            <div className="one-half column">
              {appointments.length?<h2>Manage your appointments</h2>:<h2>No appoinments</h2>}
              {appointments.map(appointment => (
                <Appointment
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppointment={deleteAppointment}
                  />
              ))}
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
