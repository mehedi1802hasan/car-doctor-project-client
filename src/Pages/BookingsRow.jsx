import React from 'react';

const BookingsRow = ({booking,handleConfirm}) => {
const {title,email,price,img,date,_id,status}=booking;
const handleDelete=id=>{
    console.log(id)
    fetch(`http://localhost:5000/bookings/${_id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
            alert('deleted successfully')
        }

    })
}
   
    

    return (
        <div>
        
            <div className="w-full overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
          
          </label>
        </th>
        <th>img</th>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Date</th>
        <th>Order</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
          <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
            <div className="w-24 rounded-full">
    {img && <img src={img} />}
              </div>
            </div>
           
          </div>
        </td>
        
      <td>{title}</td>
      <td>{email}</td>
      <td>{price}</td>
      <td>{date}</td>
      <td>
        {
            status ==='confirm' ? <span>Confirmed</span> : <button onClick={()=>handleConfirm(_id)} className='btn btn-outline '>Confirm</button>
        }
      </td>
      </tr>
      
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default BookingsRow;