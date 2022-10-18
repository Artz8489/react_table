import React from 'react'

function DataTable({data}) {
    console.log({data});
    const column = data[0] && Object?.keys(data[0])
    console.log('doubt',);
  
  return (
  <>
  <table cellPadding={0} cellSpacing={0} class="table" style={{clear:'both',borderCollapse:'collapse',width:'100%'}}>
    <thead>
        <tr>{data[0] && column?.map((heading,index)=>
            <th key={index}>{heading}</th>
        )} </tr>
    </thead>
    <tbody>{data.map((row)=>
    <tr>
        {column.map(column => <td>{row[column]}</td>)}
    </tr>
    )}</tbody>
  </table>
  </>
  )
}

export default DataTable