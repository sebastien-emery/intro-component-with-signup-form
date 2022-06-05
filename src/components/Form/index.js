import { useState } from 'react';
import fields from './fields.config';

import './style.scss';

const Form = () => {
    const [firstName, setFirstName] = useState('Salut');

    const handleSubmitForm = (e) => {
        e.preventDefault();
    }

    const handleChangeFirstName = (e) => {
        console.log('handleChangeFirstName');
        setFirstName(e.target.value);
    }

    return (
        <div className='container'>
            <form className='container__form' onSubmit={handleSubmitForm}>
                {
                    fields.map((field) => (
                        <input
                            {...field}
                        />
                    ))
                }
                <button type="submit" className='container__form__submit'>Claim your free trial</button>
            </form>
            <p className='container__warning'>
                By clicking the button, you are agreeing to our <span>Terms and Services</span>
            </p>
        </div>
    );
};

export default Form;