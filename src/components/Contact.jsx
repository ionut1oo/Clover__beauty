import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationPin, MdOutlineMail } from "react-icons/md";
import '../styles/contact.css';


const Contact= () => {
    return (
        <div id="contact">
            <h2 className='contact__title'>Contact</h2>
            <h3 className='contact__subtitle'>Date de contact</h3>
            <iframe title='google_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.93107525064!2d27.53205145563999!3d47.13961637746308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafbf14f8622db%3A0xac08e2a2b9231b60!2sPetrea%20Residence!5e0!3m2!1sro!2sro!4v1704727427695!5m2!1sro!2sro" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p className='contact__details'><MdLocationPin className='icon'/> Adresa: Balciu-Petrea Residence </p>
            <p className='contact__details'><FaWhatsapp className='icon'/> Telefon: 0759478235</p>
            <p className='contact__details'><MdOutlineMail className='icon'/> Email: saloncloverbeauty@gmail.com</p>
        </div>
    )
}

export default Contact;