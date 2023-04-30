import React from 'react';

const Student_s = (props) => {
  return (
    <>
      <div className="accordion accordion-flush my-4" style={{backgroundColor : 'white'}} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              {props.title}
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <label>eligibility : </label><strong>{props.e}</strong> <br></br>
              <label>Amount :</label>{props.amt} <br></br> 
              <label>Step :</label> {props.step}<br></br>
              <label>Website Link :</label><a href={`${props.link}`}>{props.link}</a>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default Student_s;
