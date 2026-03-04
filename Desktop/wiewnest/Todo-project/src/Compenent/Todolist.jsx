import { useState } from "react";
function Todolist(){
    const [tododata,settododata]=useState([])
      fetch('https://localhost:7272/api/Todo/gettodos')
  .then(response => response.json())  // convert response to JSON
  .then(data => {
    settododata(data)
    console.log(tododata); // here is your list of todos
  })
  .catch(error => {
    console.error('Error fetching todos:', error);
  });
    return(
        <>
     <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table class="table">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>no</th>
        <th>Title</th>
        <th>Describtion</th>
        <th>Periority</th>
        <th>status</th>
        <th>Periority</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </>
    )
}
export default Todolist;