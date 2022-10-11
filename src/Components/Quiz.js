import React, { useContext } from 'react';
import QuizTopic from './QuizTopic';
import { QuizContext } from './Root';

const Quiz = () => {

    const quiztopicsRaw = useContext(QuizContext);
    const quiztopics = quiztopicsRaw.data;
    return (
        <div>
            <section>
                <div className='container'>
                <div className='row'>
                {
                    quiztopics.map(quizTopic => 
                        <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>
                    )
                }
                </div>
                </div>
            </section>
        </div>
    );
};

export default Quiz;