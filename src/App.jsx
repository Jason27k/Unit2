import FlashCard from "./components/FlashCard"
import { Button } from "@/components/ui/button"
import React from "react"

const cards = [
  { question: "What is React?", answer: "React is a JavaScript library for building user interfaces.", difficulty: "easy" },
  { question: "What is JSX in React?", answer: "JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe the user interface elements.", difficulty: "easy" },
  { question: "What is a component in React?", answer: "A component is a reusable, self-contained building block in React that defines a part of the user interface.", difficulty: "easy" },
  { question: "What is the virtual DOM in React?", answer: "The virtual DOM is a lightweight representation of the actual DOM in React, used for optimizing and updating the user interface efficiently.", difficulty: "easy" },
  { question: "What is state in React", answer: "State in React is an object that represents the data that a component needs to keep track of and can be changed over time.", difficulty: "medium" },
  { question: "What is a prop in React?", answer: "A prop (short for 'property') is a way to pass data from a parent component to a child component in React.", difficulty: "medium" },
  { question: "How do you create a new React component?", answer: "You can create a new React component by defining a JavaScript class or a function that returns JSX.", difficulty: "easy" },
  { question: "What is the purpose of componentDidMount() in React?", answer: "componentDidMount() is a lifecycle method in React used for performing actions after a component has been rendered to the DOM.", difficulty: "hard" },
  { question: "What is the difference between React and React Native?", answer: "React is used for building web applications, while React Native is used for building mobile applications for iOS and Android.", difficulty: "medium" },
  { question: "How can you handle user input in React forms?", answer: "User input in React forms can be handled by using controlled components, which are components that store form input values in their state.", difficulty: "hard" },
]

export default function App() {
  const [cardIndex, setCardIndex] = React.useState(0)
  const cardCount = cards.length
  const randomIndex = () => Math.floor(Math.random() * cards.length)
  const nextIndex = () => setCardIndex(randomIndex)
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-react bg-cover">
      <div className="h-40 flex flex-col justify-around items-center">
        <h1 className="text-2xl font-semibold">The Ultimate React Review!</h1>
        <p className="text-lg">How experienced of a React Developer are you? Test your knowledge!</p>
        <p className="text-base">Number of cards: {cardCount}</p>
      </div>
      <div className="flex flex-col justify-start items-center">
        <FlashCard question={cards[cardIndex].question} answer={cards[cardIndex].answer} difficulty={cards[cardIndex].difficulty} key={cardIndex}/>
        <Button onClick={nextIndex} className="p-5">⭢</Button>
      </div>
    </div>
  )
}