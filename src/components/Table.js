import React, { useEffect, useState } from 'react'
import DataTable from './datatable';
// require('isomorphic-fetch');
// require('es6-promise').polyfill();

const Table = () => {
    const [data,setData] = useState([])
    const [input,setInput] = useState('')
    console.log({data});
function search(rows) {
    return  rows.filter((item)=> 
    item.title.toLowerCase().indexOf(input) > -1
    )
}
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => setData(json))
    },[])
  return (
    <>
    <input value={input} onChange={(e)=>{setInput(e.target.value)}}/>
 <DataTable data={search(data)}/> 
 </>)
}

export default Table