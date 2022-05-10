import React, { useState } from 'react';
import Footer from '../../Shared/Footer';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppoinments date={date}></AvailableAppoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;