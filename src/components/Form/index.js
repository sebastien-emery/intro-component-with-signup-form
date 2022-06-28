import { useState } from 'react';

import './style.scss';

const Form = () => {
    const handleSubmitForm = e => {
        e.preventDefault();
        if (!inputFields[0].firstName || !inputFields[0].lastName || !inputFields[0].mail || !inputFields[0].password) {
            alert('STOP ! Remplissez les champs svp !');
        }
        else {
            alert(`Merci ${inputFields[0].firstName} ${inputFields[0].lastName} pour votre inscription.`);
        }
    }

    const [inputFields, setInputFields] = useState([
        {
            firstName: '',
            lastName: '',
            mail: '',
            password: '',
        }
    ])
    const handleFormChange = (index, e) => {
        let data = [...inputFields];
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
                                    type="email"
                                    name='mail'
                                    placeholder='Email Address'
                                    value={input.mail}
                                    onChange={e => handleFormChange(index, e)}
                                />
                                <input
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                    value={input.password}
                                    onChange={e => handleFormChange(index, e)}
                                />
                            </div>
                        )
                    })
                }
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