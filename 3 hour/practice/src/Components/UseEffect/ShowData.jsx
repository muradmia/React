import React from 'react'

const ShowData = ({data}) => {
  return (
    <div style={{width:'300px', marginBottom:'120px'}} key={data.id}>
        <h1 >Id : {data.id}</h1>
        <h1>Title : {data.title}</h1>
        <h1>Body : {data.body}</h1>
        {/* {console.log(data.id)} */}
    </div>
  )
}

export default ShowData