import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="">
      <Nav/>
      <div className='flex'>
        <Sidebar/>
        <Content/>
      </div>
      
    </div>
  );
}

export default App;
