import './App.css';
import Star from './images/icon-star.svg'
import Thank from './images/illustration-thank-you.svg'
import React from 'react';
function App() {

  const [isSubmitted, setIsSubmitted] = React.useState(true)

  const [items, setItems] = React.useState({
    item:''
  })

  console.log(items.item)

  function handleChange(event){
    const {name, value} = event.target
    setItems(prevItems => ({
      ...prevItems,
      [name]:parseInt(value)
    }))
  }


  return (
    <>
    {isSubmitted && <div className='wrapper'>
      <img src={Star} className='icon' alt='star icon'/>
      <h2 className='heading'>How did we do?</h2>
      <p className='paragraph'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <ul className='list-ul'>
        <li><button className='btn' value='1' name='item' onClick={handleChange}>1</button></li>
        <li><button className='btn' value='2' name='item' onClick={handleChange}>2</button></li>
        <li><button className='btn' value='3' name='item' onClick={handleChange}>3</button></li>
        <li><button className='btn' value='4' name='item' onClick={handleChange}>4</button></li>
        <li><button className='btn' value='5' name='item' onClick={handleChange}>5</button></li>
      </ul>
      <button 
        className='btn-submit'
        onClick={()=>setIsSubmitted(false)}
      >SUBMIT</button>
    </div>
}
    {!isSubmitted &&
    <ThankYou setIsSubmitted={setIsSubmitted} items={items}/>
    }
    
    </>
  );

}

function ThankYou(props){
  return(
    <div 
      className='wrapper'
      style={{display:'flex', flexDirection:'column', 
             justifyContent:'center', alignItems:'center'
            }}
    >
      <img src={Thank} className='img'/>
      <p className='select-paragraph'>You selected 4 out of 5</p>
      <h2 className='heading'>Thank you!</h2>
      <p 
        className='paragraph'
        style={{textAlign:'center'}}  
      >
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!  
      </p>
      <button onClick={()=>props.setIsSubmitted(true)} className='btn-submit' >AGAIN</button>
    </div>
  )
}

export default App;
