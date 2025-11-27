import './App.css'
import { SmartButton } from './components/SmartButton'

function App() {

  const handleLog = () => {
    console.log('click');
  }
  return (
    <>
      <SmartButton className='bg-yellow-200' variant='ghost' onClick={handleLog}>Hello</SmartButton>
    </>
  );
}

export default App;
