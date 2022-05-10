import React from 'react';
import InfoCard from '../../InfoCard/InfoCard';
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <InfoCard cardTitle="Opening Hours" bgclass="bg-gradient-to-r from-secondary to-primary" img={marker}></InfoCard>
            <InfoCard cardTitle="Visit Our Location" bgclass="bg-accent" img={clock}></InfoCard>
            <InfoCard cardTitle="Contact Us Now" bgclass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;