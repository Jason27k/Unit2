import React from 'react'
import { Button } from './ui/button'


//fix color when answered 

function Form({checkAnswer}) {
  const [input, setInput] = React.useState('')
  const [correct, setCorrect] = React.useState(-1)
  const handleInputChange = (e) => {
    setInput(e.target.value)
    setCorrect(-1);
  }
  const handleClick = () => {
    setCorrect(checkAnswer(input));
  }
  return (
      <div className='my-2'>
          <label htmlFor="direction" className='font-bold'>Guess the answer here:</label>
          <input type="text" name="direction" id="direction" 
                  className={`bg-slate-700 mx-1 font-normal text-white border-2 border-solid rounded-sm border-black shadow-md ${correct < 0 ? '' : correct ? "border-green-500" : "border-red-500"}`}  
                  placeholder={"Place your answer here"}
                  onChange={handleInputChange}
                  value={input}
          />
          <Button onClick={handleClick}>Submit Guess</Button>
      </div>
  )
}

export default Form;