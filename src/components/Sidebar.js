import React from 'react'

const Sidebar = () => {
    
    function addClassToMenu(elementid) {

        var otherElements = document.querySelectorAll('.menu');
        otherElements.forEach(function(element) {
            element.classList.remove('bg-sky-100', 'text-sky-500', 'border-r-4', 'border-sky-600');
        });

        var menuElement = document.getElementById(elementid);
    
        // Add the class "highlight" to the element
        menuElement.classList.add('bg-sky-100','text-sky-500','border-r-4','border-sky-600');
    }
  return (
    <div className='w-[200px] bg-white h-screen border'>
        <div className='flex flex-col gap-5 text-lg mt-4'>
            <div className='menu cursor-pointer py-2' id='dashboard' onClick={()=>addClassToMenu('dashboard')}>
                <i className='bi bi-briefcase inline ml-5 mr-3 text-black'></i>
                <p className='inline'>Dashboard</p>
            </div>
            <div className='menu cursor-pointer py-2' id='inventory' onClick={()=>addClassToMenu('inventory')} >
                <i class="bi bi-tag inline ml-5 mr-3 text-black"></i>
                <p className='inline'>Inventory</p>
            </div>
            <div className='menu cursor-pointer py-2' id='Orders' onClick={()=>addClassToMenu('Orders')} >
                <i class="bi bi-cart4 inline ml-5 mr-3 text-black"></i>
                <p className='inline'>Orders</p>
            </div>
            <div className='menu cursor-pointer py-2' id='shipping' onClick={()=>addClassToMenu('shipping')} >
                <i class="bi bi-truck inline ml-5 mr-3 text-black"></i>
                <p className='inline'>Shipping</p>
            </div>
            <div className='menu cursor-pointer py-2' id='channel' onClick={()=>addClassToMenu('channel')}>
                <i class="bi bi-share inline ml-5 mr-3 text-black"></i>
                <p className='inline'>Channel</p>
            </div>

        </div>

    </div>
  )
}

export default Sidebar
