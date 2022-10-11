import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QCard from './QCard';

const QuizPage = () => {

    const quiz = useLoaderData()
    console.log(quiz)
    const questions = quiz.data.questions;
    console.log(questions)
    return (
        <div className='container justify-content-center col-lg-6 col-md-6 col-sm-12'>
            <section className='text-center'>
                <h1 className='text-align-center text-info'>Here are the questions</h1>
                <h3 className='text-align-center'>Select the best option</h3>
            </section>

            {
                questions.map(questionObj => <QCard key={questionObj.id} questionObj={questionObj}></QCard>)
            }
        </div>
    );
};

export default QuizPage;