// import components :
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import InfoBox from '../InfoBox';

import './style.scss'

const App = () => {
  return (
    <div className="App">
      <main className='main'>
        <AppHeader />
        <InfoBox />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
