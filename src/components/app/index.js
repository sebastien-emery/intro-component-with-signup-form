// import components :
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import InfoBox from '../InfoBox';
import Form from '../Form';

import './style.scss'

const App = () => {
  return (
    <div className="App">
      <main className='main'>
        <AppHeader />
        <div>
          <InfoBox />
          <Form />
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
