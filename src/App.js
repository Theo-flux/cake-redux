import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer';
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <IceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
