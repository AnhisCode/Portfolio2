import './Sass/App.scss';
import { RouteSetUp } from './RoutesSetUp';
import { NavBar } from './Template/NavBar';

function App() {
  return (
    <div className={'bg-brown h-full -z-50 overflow-hidden'}>
      <NavBar />
      <RouteSetUp />
    </div>
  );
}

export default App;
