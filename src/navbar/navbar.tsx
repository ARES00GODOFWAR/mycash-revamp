import React from 'react';

interface NavBarProps {
    isAuthenticated: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isAuthenticated }) => {
    return (
        <>
            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse" href="/">
                        <img src="https://file.rendit.io/n/D0LWZkzGhzHBOcXBec7V.png" className="h-8" alt="null" />
                    </a>
                        
                    <div className="flex items-center md:order-2 space-x-3  rtl:space-x-reverse">
                        

                        {isAuthenticated ? (
                             <><button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="data:image/png;base64,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" alt="user photo" />
                            </button><><div className="text-base">Hello, Rhajeem</div>

                                </></>
                        ) : (
                            <a href="/dashboard">
                                <button className="bg-red-500 flex items-center justify-center text-white px-6 py-2 rounded-md">Sign In</button>
                            </a>
                        )}
                        
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className=" justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        {isAuthenticated ? (
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                                <li>
                                    <a href="/dashboard" className="block py-2 px-3 text-black text-lg rounded font-light text-red-500">Dashboard</a>
                                    <hr className="border-2 border-red-500"/>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-black rounded text-lg ">Transactions</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded text-lg">Support and Help</a>
                                </li>
                            </ul>
                        ) : (
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                                <li>
                                    <a href="#" className="block py-2 px-3 text-black rounded font-light">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-black rounded ">Features</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded ">International Money Transfers</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded ">Support</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded ">Agent Locator</a>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
