import React from "react";
import { FaPlusCircle, FaMinusCircle, FaInfo } from "react-icons/fa";
import { useState } from "react";

const Card = ({ data }) => {
  // console.log(data);
  const [show, setShow] = useState(true);

  return (
    <div className="section">
      {show ? (
        <div className='d-flex align-items-center justify-content-between my-3 p-3 box'>
          <h3>{data.title}</h3>
          <button className="border-0 fs-3 text-success" onClick={() => setShow(!show)}>
            <FaPlusCircle />
          </button>
        </div>
      ) : (
        <div className='box p-3 '>
          <div className='d-flex align-items-center justify-content-between my-3'>
            <h5>{data.title}</h5>
            <button className="border-0 fs-3 text-danger" onClick={() => setShow(!show)}>
              <FaMinusCircle />
            </button>
          </div>
          <p>{data.info}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
