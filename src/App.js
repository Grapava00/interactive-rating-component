import './App.css';
import Star from './images/icon-star.svg'

function App() {
  return (
    <div className='wrapper'>
      <img src={Star} className='icon' alt='star icon'/>
      <h2 className='heading'>How did we do?</h2>
      <p className='paragraph'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <ul className='list-ul'>
        <li><button className='btn' value='1'>1</button></li>
        <li><button className='btn' value='2'>2</button></li>
        <li><button className='btn' value='3'>3</button></li>
        <li><button className='btn' value='4'>4</button></li>
        <li><button className='btn' value='5'>5</button></li>
      </ul>
      <button className='btn-submit'>SUBMIT</button>
    </div>
  );
}

export default App;
