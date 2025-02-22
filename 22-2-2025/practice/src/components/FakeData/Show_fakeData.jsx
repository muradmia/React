import React from 'react'

const Show_fakeData = ({singledata}) => {
    // console.log(singledata);
    // const {name,age,email,image} = singledata;
    
  return (
    <div>
        <div className="card border-4 border-gray-50 bg-gray-300 rounded-md">
            <img className="w-[250px] h-[150px]" src={singledata.image} alt="this is a img" />
            <h1 className="text-[25px] mt-4">Name : {singledata.name}</h1>
            <h1>Age : {singledata.age}</h1>
            <h1>Age : {singledata.profession}</h1>
            <h1>Age : {singledata.email}</h1>
            <h1>Phone : {singledata.phone}</h1>
            <button className="btn bg-amber-500 px-4 py-2 mt-2 mb-2 text-white">Add to card</button> 
        </div>

        <h1 className="mt-6">Lets Show the data</h1>
    </div>
  )
}

export default Show_fakeData