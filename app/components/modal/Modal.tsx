import React from 'react'

const Modal = ({ children, setIsOpen }: { children: React.ReactNode, setIsOpen:()=>void }) => {
    return (
        <div className={`bg-white/40 z-[99] p-6  fixed top-0 bottom-0 left-0 right-0 inset-0 content-center justify-center `}>

            <div className='relative border flex flex-col sap-4 border-gray-200 bg-black/10 w-full md:max-w-4xl mx-auto backdrop-blur-2xl p-4 rounded-2xl'>
                <button onClick={setIsOpen} className='cursor-pointer text-sm text-white bg-red-500 rounded-full w-5 h-5 '>×</button>
                {children}
            </div>

        </div>
    )
}

export default Modal