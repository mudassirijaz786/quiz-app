import React, { useEffect, useState } from "react";
import questionData from "../data/db.json";

const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const questionsArray = [];

    // Mapping of data to our desired one
    for (let index = 0; index < questionData.question_list.length; index++) {
      const element = questionData.question_list[index];
      const filteredOptions = questionData.options_list.filter(
        (option) => option.related_question === element.id
      );

      element.options = filteredOptions;
      questionsArray.push(element);
    }

    // Setting questions
    setQuestions(questionsArray);

    // Setting name
    setName(props?.location?.query?.name);
  }, []);

  const handleAnswerOptionClick = (correct_answer_to_question) => {
    if (correct_answer_to_question) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <div className="for-name">
        <div className="question-section">
          <div className="question-count">
            <span>Welcome: {name}</span>
          </div>
        </div>
      </div>
      <div className="for-quiz">
        {showScore ? (
          <div
            className={score === 0 ? "score-section-failed" : "score-section"}
          >
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions?.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion]?.title}
              </div>

              <div className="answer-section">
                {questions[currentQuestion]?.options.map((answerOption) => (
                  <div className="button-and-span">
                    <button
                      type="radio"
                      className="button-class"
                      onClick={() =>
                        handleAnswerOptionClick(
                          answerOption?.correct_answer_to_question
                        )
                      }
                    />
                    <span className="span-class">{answerOption?.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
