import React from 'react';
//import i1 from '../component/images/i1.jpeg'
const Event = (props) => {
    return (
        <>
            <div className='col-md-3 mx-1 col-lg-3 col-sm-3 my-3'>
            <div className="card" style={{height : '200px' , overflow : 'hidden'}}>
                
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <p className='card-text'>{props.context}</p>
                    <p className='card-text'>{props.t}</p>
                </div>
            </div>
            </div>
        </>
    );
}
export default Event
