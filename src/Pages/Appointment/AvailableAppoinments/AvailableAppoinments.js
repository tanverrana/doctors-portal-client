import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const AvailableAppoinments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, "PP");
    const { data: services, isLoading, refetch } = useQuery(["available", formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-center text-xl text-secondary my-10">Available Appointments on {format(date, "PP")} </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;