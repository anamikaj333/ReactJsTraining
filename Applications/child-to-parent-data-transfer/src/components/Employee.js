import React from 'react'

function Employee(props) {

    let emp = {
        "name":"Anamika jaiswal",
        "designation":"soft engi",
        "company":"cybage",
        "tech-stack":['java','python','react']
    }
  return (
    <div>
      <button onClick={()=>props.func(emp)}>Send data to parent</button>
    </div>
  )
}

export default Employee
