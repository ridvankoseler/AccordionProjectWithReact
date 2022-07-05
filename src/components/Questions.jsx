import React from 'react'
import { useState } from 'react'
import Card from './Card';
import questions from '../helpers/data';

const Questions = () => {

    const [data, setData] = useState(questions)

  return (
    <div>
        {data.map((item,index) => {
            return (
              <Card data={data[index]}/>
            );
        })}
    </div>
  )
}

export default Questions;
