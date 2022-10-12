import { faEye, faXmarksLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import swal from 'sweetalert';
import Qbtn from './Qbtn';
// import { faXmarksLines } from '@fortawesome/free-solid-svg-icons';


const QCard = ({ questionObj }) => {
    console.log(questionObj)
    const { question, options, correctAnswer
    } = questionObj;
    const [count, setCount] = useState(0);
    console.log(count);

    const handleCorrectAns = clickedAns => {
        //  const correctAnswerCounter = [count, setCount] = useState[0]
        
        if (clickedAns === correctAnswer) {
            swal("Congratulations!!", "Your ans is correct!", "success");
            // setCount = count + 1;
            // const newcount = setCount(count + 1);
        } else {
            swal("Good try!", "You have choose wrong option", "error");
        }

    }

    const showCorrectAns = ans => {
        swal("Correct answere", `${ans}`, "info");
    }


    return (
        <div className='g-2 container mb-3'>
            <div className="list-group g-2 shadow">

                <div className='justify-contant-right p-2 d-flex justify-content-end'>
                    <button onClick={() => showCorrectAns(correctAnswer)} className='btn btn-light'><FontAwesomeIcon icon={faEye} /></button>
                </div>

                <div class="list-group-item list-group-item-action active " aria-current="true">
                    <h4>
                    {
                        question
                    }
                    </h4>
                </div>
                {
                    options.map(option => <Qbtn handleCorrectAns={handleCorrectAns} option={option}></Qbtn>)
                }


            </div>
        </div>
    );
};

export default QCard;