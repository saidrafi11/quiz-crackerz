import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizContext } from './Root';

const Stat = () => {
    const quiztopicsRaw = useContext(QuizContext);
    const quiztopics = quiztopicsRaw.data;
    console.log(quiztopics)
    return (
        
        <div className='container justify-content-center col-lg-6 col-md-6 col-sm-12'>
                <section className='text-center m-5'>
            <h1 className='text-align-center text-info'>Statistics</h1>
            
            </section>

            <div>
            <BarChart width={730} height={500} data={quiztopics}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="total" fill="#8884d8" />
  
</BarChart>
            </div>
        </div>
    );
};

export default Stat;