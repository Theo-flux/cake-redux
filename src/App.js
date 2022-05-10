import BrokeContainer from './components/BrokeContainer';
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store';
import ShopContainer from './components/ShopContainer';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <BrokeContainer/>
        <ShopContainer/>
      </div>
    </Provider>
  );
}


export default App;
