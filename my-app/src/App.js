import ExpenseItem from "./components/ExpenseItem";



function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'toilet paper',
      amount: 95.00,
      date: new Date(2020, 7, 14),

    },
    {
      id: 'e2',
      title: 'toilet paper',
      amount: 95.00,
      date: new Date(2020, 7, 14),

    },
    {
      id: 'e3',
      title: 'toilet paper',
      amount: 95.00,
      date: new Date(2020, 7, 14),

    },
    {
      id: 'e4',
      title: 'toilet paper',
      amount: 95.00,
      date: new Date(2020, 7, 14),

    },
  ]


  // imperative way of js to write same code written in react
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible!';
  // document.getElementById('root').appendChild(para);
  
  
  return (
    <div>
      <h1>Let's Get Started!</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} data={expenses[0].date}></ExpenseItem>

       <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} data={expenses[0].date}></ExpenseItem>

       <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} data={expenses[0].date}></ExpenseItem>

       <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} data={expenses[0].date}></ExpenseItem>
    </div>
  );
}

export default App;