
import Link from 'next/link'
const Navbar = () => {
    return (
        // <!-- Navbar -->
        <nav className="bg-[white] md:px-[80px] md:py-4  md:h-[150px] px-[20px] py-2">
            <div className="container mx-auto flex justify-between items-center">
                {/* <!-- Logo -- */}
                <Link href="/" className="text-black text-xs font-semibold">Government of Gujarat</Link>
                {/* <!-- Navigation Links --> */}
                <ul className="flex items-center space-x-4">
                    <li><Link href={'/login'} className="text-white text-xs md:px-4 md:py-2 px-2 py-1 rounded bg-black ">Login</Link></li>
                    <li><Link href={'/register'} className="text-black text-xs md:px-4 md:py-2 px-2 py-1 rounded bg-[#3879F9]">Register</Link></li>
                </ul>
            </div>
            <div className="header bg-[white] flex justify-between items-center">
                <div className="w-[50%]">
                    <img src="/logo_1.png" alt="logo" className='md:w-[50%] ' />
                </div>
                <div className='md:hidden flex text-black text-2xl '><ion-icon name="menu-outline"></ion-icon></div>
                <ul className=" md:flex  gap-5 hidden">
                    <li className='text-xl' style={{ color: "#3879F9" }}>Dropout</li>
                    <li className='text-xl' style={{ color: "#3879F9" }} >Dashboard</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar