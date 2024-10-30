import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QUESTIONS from "../Questions"
import { handleAnswer,startButton,clearAnswer,next } from '../features/Asks';
import "./Page.css"
const Page = () => {
const dispatch =useDispatch()
const {numOfAr,warning,color,starts,nextQes,show,score}=useSelector((state)=>state.ask)
let newAr=QUESTIONS[numOfAr]
const totalQuestions = QUESTIONS.length;
const percent = (score / totalQuestions) * 100;

useEffect(() => {
  if (warning) {
setTimeout(() => {
      dispatch(clearAnswer());
    }, 1000);
  }
}, [numOfAr,warning, dispatch]);

return (
  <div  className="container" >
    <h1>SORU YARIŞMASI</h1>
    <h3>Başlamak için Tıklayınız ⬇</h3>
    {starts ? (
      <>
        {newAr && nextQes ? ( 
          <div>
            <label className="question" >{newAr.question}</label>
            <div>
              {newAr.answers.map((answer, index) => (
                <button className="answer-button" key={index} onClick={() => dispatch(handleAnswer(index))}>
                  {answer}
                </button>
              ))}
            </div>
          </div>
        ) : <button  className="answer-button" onClick={() => dispatch(next())}>Sıradaki Soru</button>}
        <h3 className="warning" style={{ color: color }}>{warning}</h3>
      </>
    ) : (
      <button  className="answer-button" onClick={() => dispatch(startButton())}>Start</button>
    )}
{show?<div className="result" >
<h3>Sınav Sonucunuz = %{percent}</h3>
<h3>Doğru Sayısı = {score}</h3>
</div>
  :null}


  </div>
);
};

export default Page;
