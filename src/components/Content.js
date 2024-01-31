import React, { useState } from 'react'

const Content = () => {

    const [contentmenu,setcontentmenu] = useState('');

    const orders = [
        {
            OrderNo:"#TKN202940842",
            OrderDate:"2022-05-04",
            City:"Lucknow",
            CustomerName:"Abhishek Dixt",
            OrderValue:"0.00"
        },
        {
            OrderNo:"#TKN202989340",
            OrderDate:"2022-05-07",
            City:"Germany",
            CustomerName:"Kushnaw Dixt",
            OrderValue:"0.00"
        },
        {
            OrderNo:"#TKN202989340",
            OrderDate:"2022-05-07",
            City:"Germany",
            CustomerName:"Kushnaw Dixt",
            OrderValue:"0.00"
        },
        {
            OrderNo:"#TKN202989340",
            OrderDate:"2022-05-07",
            City:"Germany",
            CustomerName:"Kushnaw Dixt",
            OrderValue:"0.00"
        },
        {
            OrderNo:"#TKN202989340",
            OrderDate:"2022-05-07",
            City:"Germany",
            CustomerName:"Kushnaw Dixt",
            OrderValue:"0.00"
        },
    ]

    const Orders = orders.map(val=>{
        return(
            <>
            <tr className='p-5 border-b border-gray-300'>
                <td className='p-5'>+</td>
                <td className='p-5'><input type='checkbox'/></td>
                <td className='text-green-600 text-xl'><i class="bi bi-handbag-fill"></i></td>
                <td className='text-blue-400'>{val.OrderNo}</td>
                <td>{val.OrderDate}</td>
                <td>{val.City}</td>
                <td>{val.CustomerName}</td>
                <td>{val.OrderValue}</td>
                <td><p className='bg-green-100 w-fit text-green-600 px-2 border border-green-500'>Pending</p></td>
                <td>
                <select className='px-2 py-1 border border-gray-300' name="operation" id="operation">
                <option value="">Action</option>
                </select>
                </td>
            </tr>
            </>
        )
    })

    const unclicked = 'p-2 cursor-pointer'
    const clicked = 'p-2 cursor-pointer text-blue-500 border-b-2 border-blue-500'

  return (
    <div className='p-2 w-full'>

      {/* menu option */}
      <p className='bg-gray-100 w-fit rounded-md p-2 text-blue-500'>Orders <span className='text-gray-800 px-2'>x</span></p>
    
      {/* content menu */}
      <div className='p-5 flex gap-5'>
        <p onClick={()=>setcontentmenu('Pending')} className={contentmenu=="Pending"?clicked:unclicked}>Pending</p>
        <p onClick={()=>setcontentmenu('Accepted')} className={contentmenu=="Accepted"?clicked:unclicked}>Accepted</p>
        <p onClick={()=>setcontentmenu('AWB Created')} className={contentmenu=="AWB Created"?clicked:unclicked}>AWB Created</p>
        <p onClick={()=>setcontentmenu('Ready to Ship')} className={contentmenu=="Ready to Ship"?clicked:unclicked}>Ready to Ship</p>
        <p onClick={()=>setcontentmenu('Shipped')} className={contentmenu=="Shipped"?clicked:unclicked}>Shipped</p>
        <p onClick={()=>setcontentmenu('Completed')} className={contentmenu=="Completed"?clicked:unclicked}>Completed</p>
        <p onClick={()=>setcontentmenu('Cancelled')} className={contentmenu=="Cancelled"?clicked:unclicked}>Cancelled</p>
      </div>

      {/* content Table */}
      <div className='bg-white rounded-md w-full p-5'>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                <button className='border border-gray-800 rounded-sm px-4 py-1'><i class="bi bi-box-arrow-in-left pr-2"></i>Import Orders</button>
                <button  className='border border-gray-800 bg-gray-300 opacity-[50%] rounded-sm px-4 py-1'><i class="bi bi-play-circle-fill pr-2"></i>Accept</button>
                <button className='border border-gray-800 bg-gray-300 opacity-[50%] rounded-sm px-4 py-1'><i class="bi bi-printer pr-2"></i>Print</button>
            </div>
            <button className='bg-blue-600 text-white rounded-sm px-4 py-1'><i class="bi bi-arrow-clockwise pr-2"></i>Refresh</button>
        </div>
        <table className="my-5 table-auto w-full text-left">
            <thead className='border border-gray-200 bg-gray-100 py-5'>
                <tr className='p-5'>
                <th className='p-5'></th>
                <th className='p-5'><input type='checkbox'/></th>
                <th className='py-5'>Channel</th>
                <th>Order No</th>
                <th>Order Date</th>
                <th>City</th>
                <th>Customer Name</th>
                <th>Order Value</th>
                <th>Status</th>
                <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {Orders}
            </tbody>
        </table>
      </div>
    
    </div>
  )
}

export default Content
