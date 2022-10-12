import React, { useContext } from 'react';
import QuizTopic from './QuizTopic';
import { QuizContext } from './Root';
import './Nav.css';

const Home = () => {
    const quiztopicsRaw = useContext(QuizContext);
    const quiztopics = quiztopicsRaw.data;
    console.log(quiztopics)
    return (
        <div className='container mb-5'>
            <div className='col d-lg-flex text-center align-items-center'>
                <div className='container col-md-12 col-sm-12 col-lg-6'>
                    <img className='img-fluid' src='https://keyofsuccess.in/wp-content/uploads/2021/03/tyk.png'></img>
                </div>
                <div className='col-md-12 col-sm-12 col-lg-6'> <h1>Test your knowledge by taking our free mock test!</h1></div>

            </div>
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

export default Home;