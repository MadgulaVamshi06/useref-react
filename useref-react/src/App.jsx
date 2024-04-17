import { useRef } from 'react';

function App() {
  const userInput = useRef(0);
  const targetElement = useRef(); 

  console.log(targetElement);

  function handleInputChange() {
    let inputValue = userInput.current.value;
    document.getElementById("inputValue").innerText = inputValue;
    console.log(inputValue);
  }

  function handleButtonClick() {
    if (targetElement.current) {
      targetElement.current.style.backgroundColor = "blue";
    }
  }

  return (
    <div ref={targetElement}> 
      <input
        type="text"
        placeholder="Type Something"
        ref={userInput}
        onChange={handleInputChange}
      />
      <p id="inputValue"></p>
      <button onClick={handleButtonClick}>Change Color</button>
    </div>
  );
}

export default App;
