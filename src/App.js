import "./App.css";
import Star from "./images/icon-star.svg";
import Thank from "./images/illustration-thank-you.svg";
import React from "react";
function App() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [items, setItems] = React.useState("");

  console.log(items)
  
    const Button = (props) => {
      return (
        <button  className='btn' onClick={() => setItems(props.number)}>
          {props.number}
        </button>
      );
    };
  
    

  function handleSubmit(){
    if(items){
      setIsSubmitted(true)
    }
  }

  return (
    <>
      {!isSubmitted && (
        <div className='wrapper'>
          <img src={Star} className='icon' alt='star icon' />
          <h2 className='heading'>How did we do?</h2>
          <p className='paragraph'>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul className="list-ul">
            <li>
              <Button number={1} />
            </li>
            <li>
              <Button number={2} />
            </li>
            <li>
              <Button number={3} />
            </li>
            <li>
              <Button number={4} />
            </li>
            <li>
              <Button number={5} />
            </li>
          </ul>
          <button className='btn-submit'  onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      )}
      {isSubmitted && (
        <ThankYou setIsSubmitted={setIsSubmitted} items={items} />
      )}
    </>
  );
}

function ThankYou(props) {
  return (
    <div
      className='wrapper'
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Thank} className='img' alt="illustration-thank-you"/>
      <p className='select-paragraph'>You selected {props.items} out of 5</p>
      <h2 className='heading'>Thank you!</h2>
      <p className='paragraph' style={{ textAlign: "center" }}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default App;
