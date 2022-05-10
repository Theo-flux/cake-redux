import BrokeContainer from './components/BrokeContainer';
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store';
// import ShopContainer from './components/ShopContainer';
import UserContainer from './components/UserContainer';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <BrokeContainer/>
        {/* <ShopContainer/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}


export default App;
