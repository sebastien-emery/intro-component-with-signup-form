// import components :
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

import './style.scss'

const App = () => {
  return (
    <div className="App">
      <main className='main'>
        <AppHeader />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
