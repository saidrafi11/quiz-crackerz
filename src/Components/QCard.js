import React from 'react';
import swal from 'sweetalert';
import Qbtn from './Qbtn';

const QCard = ({ questionObj }) => {
    console.log(questionObj)
    const { question, options, correctAnswer
    } = questionObj;
    console.log(question)

    const handleCorrectAns = clickedAns => {
        console.log(clickedAns);
        if (clickedAns === correctAnswer) {
            swal("Congratulations!!", "Your ans is correct!", "success");
            
        } else {
            swal("Good try!", "You have choose wrong option", "error");
        }

    }


    return (
        <div className='g-2 container'>
            <div className="list-group g-2">
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