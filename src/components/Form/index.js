import { useState } from 'react';

import './style.scss';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitForm = e => {
        e.preventDefault();
        console.log(firstName, lastName, mail, password);
        if (!firstName || !lastName || !mail || !password) {
            alert('STOP ! Remplissez les champs svp !');
        }
        else {
            alert(`Merci ${firstName} ${lastName} pour votre inscription.`);
        }
    }

    const handleChangeFirstName = e => setFirstName(e.target.value);
    const handleChangeLastName = e => setLastName(e.target.value);
    const handleChangeMail = e => setMail(e.target.value);
    const handleChangePassword = e => setPassword(e.target.value);

    const [inputFields, setInputFields] = useState([
        {
            firstName: '',
            lastName: '',
            mail: '',
            password: '',
        }
    ])
    const handleFormChange = (index, e) => {
        console.log(e.target.name);
        let data = [...inputFields];
        // console.log(data);
        data[index][e.target.name] = e.target.value;
        setInputFields(data);
    }

    return (
        <div className='container'>
            <form className='container__form' onSubmit={handleSubmitForm}>
                {
                    inputFields.map((input, index) => {
                        return (
                            <div key={index}>
                                <input
                                    type="text"
                                    name='firstName'
                                    placeholder='First Name'
                                    value={input.firstName}
                                    onChange={e => handleFormChange(index, e)}
                                />
                                <input
                                    type="text"
                                    name='lastName'
                                    placeholder='Last Name'
                                    value={input.lastName}
                                    onChange={e => handleFormChange(index, e)}
                                />
                                <input
                                    type="text"
                                    name='mail'
                                    placeholder='Email Address'
                                    value={input.mail}
                                    onChange={e => handleFormChange(index, e)}
                                />
                                <input
                                    type="text"
                                    name='password'
                                    placeholder='Password'
                                    value={input.password}
                                    onChange={e => handleFormChange(index, e)}
                                />
                            </div>
                        )
                    })
                }


                {/* <input
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
                /> */}
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