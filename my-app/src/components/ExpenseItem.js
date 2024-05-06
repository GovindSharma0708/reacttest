import React from 'react'

function ExpenseItem(props) {
  const month =           props.date.toLocleSTring('en-US',{month: 'long'});
  const day =           props.date.toLocleSTring('en-US',{day: '2-digit'})
  const year =           props.date.getFullYear();
  return (
    <>
    <div className='expense-item'>
      <div>
        <div>
        {month}

        </div>
        <div>
          Year
        </div>
        <div>
          Day
        </div>
      </div>
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
    </div>
    </div>
    </>
  );
}

export default ExpenseItem;