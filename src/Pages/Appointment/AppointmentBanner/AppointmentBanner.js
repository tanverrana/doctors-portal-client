import React from 'react';
import chair from "../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse gap-32">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="dentest chair" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You have selected :{format(date, "PP")}</p>

                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;