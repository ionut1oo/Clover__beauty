import React from 'react';
import '../styles/book.css';


const Book= () => {
    return (
        <div id="programare"> 
            <form action="https://formsubmit.co/a9b4085d9d3877c4e9448f77a3f4cc8c"
             method="POST" className='book__form' target='__blank'>
                <h2 className='book__title'>Programare</h2>
                <label htmlFor="name">Nume</label>
                <input id='name' type='text' name='name' className='name__input'/>
                <label htmlFor="phoneNumber" >Numar telefon</label>
                <input type="number" name='phoneNumber' min="10" />
                <select name="desire-manicure">
                    <option value="">--Alege manichiura dorită--</option>
                    <option value="Manichiura semipermanenta">Manichiura semipermanentă</option>
                    <option value="Intretinere Marimi mai mici de 3<">Intretinere Marimi mai mici de 3</option>
                    <option value="Intretinere Marimi mai mici de 3">Intretinere Marimi mai mici de 3</option>
                    <option value="Intretinere Slim<">Intretinere Slim</option>
                    <option value="Constructie Marimi mai mici de 3">Constructie Marimi mai mici de 3</option>
                    <option value="Constructie Marimi mai mici de 3">Constructie Marimi mai mici de 3</option>
                    <option value="Constructie Slim<">Constructie Slim</option>
                </select>
                <button type='submit' className='book__button'>Programeaza</button>
            </form>           
        </div>
    )
}

export default Book;