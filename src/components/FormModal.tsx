import React from 'react'
import Button from './ui/Button'

const FormModal = () => {
    return (
        <>
            <div className='fixed z-10 right-10 bottom-10 w-120 h-40 bg-red-200 rounded-2xl
                flex flex-col '>
                <div className="">
                    <span>Question 1</span>
                    <p>fmsadms mdksm kslakm klw kkdsakdmk</p>
                    
                </div>
                <div className="">
                    <Button className=''>Skip</Button>
                    <Button className=''>Next</Button>
                </div>
            </div>
        </>
    )
}

export default FormModal