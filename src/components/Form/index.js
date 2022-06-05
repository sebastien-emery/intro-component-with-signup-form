import './style.scss';

const Form = () => {
    return (
        <div className='container'>
            <form className='container__form'>
                <input type="text" placeholder='First Name' className='container__form__firstname' />
                <input type="text" placeholder='Last Name' className='container__form__lastname' />
                <input type="mail" placeholder='Email Address' className='form__mail' />
                <input type="password" placeholder='Password' className='container__form__password' />
                <button className='container__form__submit'>Claim your free trial</button>
            </form>
            <p className='container__warning'>
                By clicking the button, you are agreeing to our <span>Terms and Services</span>
            </p>
        </div>
    );
};

export default Form;