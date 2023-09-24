import React from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

function FlashCard({ question, answer, difficulty }) {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const flipCard = () => setShowAnswer(!showAnswer);
  let color =
    difficulty === "easy"
      ? "bg-green-200"
      : difficulty === "medium"
      ? "bg-yellow-200"
      : "bg-red-200";

  return (
    <div className="flex flex-col justify-center items-center" style={{ perspective: "1000px" }}>
      <Card
        onClick={flipCard}
        className={`h-80 transform transition-transform ease-in-out duration-400 rounded-md text-center 
                    flex flex-col justify-around border-0 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ${color}`}
        style={{
          transform: showAnswer ? "rotateX(180deg)" : "rotateX(0deg)",
        }}
      >
        <CardContent className="pb-0">
          <p className={`w-128 font-bold transform duration-0`} style={{ transform: showAnswer ? "rotateX(180deg)" : "rotateX(0deg)" }}>
            {showAnswer ? answer : question}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default FlashCard;
