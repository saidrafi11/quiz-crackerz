import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopic = ({ quizTopic }) => {
   
    const { id, name, logo,total } = quizTopic;
    return (
        <div className='col-sm-12 col-md-3 g-3'>
            <div className="card" styls={"width: 18rem"}>
                <img src={logo} className="card-img-top bg-custom" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                            Total questions: {total}
                        </p>
                        <Link to={`../quiz/${id}`}className="btn btn-primary">Start Quiz</Link>
                    </div>
            </div>


        </div>
    );
};

export default QuizTopic;