import React from 'react';

const Qbtn = ({option, handleCorrectAns}) => {
    return (
        <button onClick={()=>handleCorrectAns(option)} type="button" class="list-group-item list-group-item-action">{option}</button>
    );
};

export default Qbtn;