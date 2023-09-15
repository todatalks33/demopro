import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* <!-- Column 1 --> */}
                <div className="mb-4">
                    <h2 className="text-3xl font-semibold md:text-left text-center">Company Name</h2>
                    <p className="text-gray-300 md:text-left text-center">A Creative Design Agency</p>
                </div>

                {/* <!-- Column 2 (Navigation) --> */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 md:text-left text-center">Navigation</h3>
                    <ul className="space-y-2 flex flex-col items-center md:items-start">
                        <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Services</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Portfolio</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Contact</a></li>
                    </ul>
                </div>

                {/* <!-- Column 3 (Additional Column) --> */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 md:text-left text-center">Explore</h3>
                    <ul className="space-y-2 flex flex-col items-center md:items-start">
                        <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Blog</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Testimonials</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">FAQ</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* <!-- Column 4 --> */}
                <div className="mt-4 lg:mt-0">
                    <p className="text-gray-300">&copy; 2023 Company Name</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer