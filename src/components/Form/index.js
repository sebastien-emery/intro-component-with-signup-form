import { useState } from 'react';

import './style.scss';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, mail, password);
        if (!firstName || !lastName || !mail || !password) {
            alert('STOP ! Remplissez les champs svp !');
        }
        else {
            alert(`Merci ${firstName} ${lastName} pour votre inscription.`);
        }
    }

    const handleChangeFirstName = (e) => setFirstName(e.target.value);
    const handleChangeLastName = (e) => setLastName(e.target.value);
    const handleChangeMail = (e) => setMail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    return (
        <div className='container'>
            <form className='container__form' onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    placeholder='First Name'
                    className='container__form__firstname'
                    value={firstName}
                    onChange={handleChangeFirstName}
                />
                <input
                    type="text"
                    placeholder='Last Name' className='container__form__lastname'
                    value={lastName}
                    onChange={handleChangeLastName}
                />
                <input
                    type="email"
                    placeholder='Email Address'
                    className='form__mail'
                    value={mail}
                    onChange={handleChangeMail}
                />
                <input
                    type="password"
                    placeholder='Password'
                    className='container__form__password'
                    value={password}
                    onChange={handleChangePassword}
                />
                <button
                    type="submit"
                    className='container__form__submit'>Claim your free trial
                </button>
            </form>
            <p className='container__warning'>
                By clicking the button, you are agreeing to our <span>Terms and Services</span>
            </p>
        </div>
    );
};

export default Form;