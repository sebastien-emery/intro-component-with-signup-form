// import components :
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import infoBox from '../infoBox';

import './style.scss'

const App = () => {
  return (
    <div className="App">
      <main className='main'>
        <AppHeader />
        <infoBox />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
