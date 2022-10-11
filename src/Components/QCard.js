import { faEye, faXmarksLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import swal from 'sweetalert';
import Qbtn from './Qbtn';
// import { faXmarksLines } from '@fortawesome/free-solid-svg-icons';

const QCard = ({ questionObj }) => {
    console.log(questionObj)
    const { question, options, correctAnswer
    } = questionObj;


    const handleCorrectAns = clickedAns => {

        if (clickedAns === correctAnswer) {
            swal("Congratulations!!", "Your ans is correct!", "success");

        } else {
            swal("Good try!", "You have choose wrong option", "error");
        }

    }

    const showCorrectAns = ans => {
        swal("Correct answere", `${ans}`, "info");
    }


    return (
        <div className='g-2 container'>
            <div className="list-group g-2">

                <div className='justify-contant-right p-2 d-flex justify-content-end'>
                    <button onClick={() => showCorrectAns(correctAnswer)} className='btn btn-light'><FontAwesomeIcon icon={faEye} /></button>
                </div>

                <div class="list-group-item list-group-item-action active" aria-current="true">
                    {
                        question
                    }
                </div>
                {
                    options.map(option => <Qbtn handleCorrectAns={handleCorrectAns} option={option}></Qbtn>)
                }


            </div>
        </div>
    );
};

export default QCard;