import '../css/navbar.css'
import lunalogo from '../assets/State4.png'
import docsicon from '../assets/multiple-pages.png'
import { useState } from 'react'



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='py-[30px]'>
            <div className='flex items-center justify-between container mx-auto '>
                <div id="nav-brand">
                    <img src={lunalogo} alt="" />
                    <h1>Luna Vault</h1>
                </div>

                <div className='font-bold text-lg text-[#7C3AED] xl:flex items-center gap-[34px] hidden'>
                    <p>Home</p>
                    <p>How it works</p>
                    <p>Features</p>
                    <p>Security</p>
                    <div className=' bg-[#DDD6FE] rounded-[6px] xl:flex items-center  gap-2 p-1'>
                        <p>Docs</p>
                        <img src={docsicon} alt="" className='block w-[15px] h-[17px]' />
                    </div>
                </div>

                <button className='px-[10px] py-[16px] xl:block border border-[#5B21B6] rounded-md text-[#5B21B6] text-[20px] hidden'>
                    Connect Wallet
                </button>

                <button className='flex flex-col gap-2 xl:hidden w-[30px] cursor-pointer'
                    onClick={() => setIsOpen(!isOpen)}>
                    <div className="bars w-full h-1 bg-black"></div>
                    <div className="bars w-full h-1 bg-black"></div>
                    <div className="bars w-full h-1 bg-black"></div>
                </button>
            </div>
            {
                isOpen && (
                    <div className='fixed w-full left-0 right-0 top-[10%] p-6 bg-white'>
                        <div className='font-bold text-lg text-[#7C3AED] flex items-center flex-col gap-[10px]'>
                            <p>Home</p>
                            <p>How it works</p>
                            <p>Features</p>
                            <p>Security</p>
                            <div className=' bg-[#DDD6FE] rounded-[6px] flex items-center  gap-2 p-1'>
                                <p>Docs</p>
                                <img src={docsicon} alt="" className='block w-[15px] h-[17px]' />
                            </div>
                        </div>
                        <button className='px-[10px] py-[16px] border border-[#5B21B6] rounded-md text-[#5B21B6] text-[20px] block mx-auto mt-5'>
                            Connect Wallet
                        </button>
                    </div>
                )
            }

        </nav>
    )
}