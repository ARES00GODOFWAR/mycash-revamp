const Footer = () => {
    return (
        <>
            <footer className=" w-auto  ml-10 mr-10 ">
                <div className="bg-[#ED2126] h-auto p-10 w-auto rounded-lg ">
                    <div className="flex items-center flex-wrap px-2 md:px-0">
                        <div className="relative lg:w-6/12">
                            <h1 className="font-hurme text-white font-semibold text-[40px] lg:w-10/12">Get the App
                                Now!</h1>
                            <p className="mt-2 font-hurme text-[19px] text-white lg:w-10/12 mb-4">Unlock the Power of
                                Home Services</p>
                            <div className="mt-4">
                                <div className="flex  my-10">
                                    <div>
                                        <img src="assets/images/google-play-button1.png" className="h-20"></img>
                                    </div>
                                    <div>
                                        <img src="assets/images/App-Store-Button-transparent1.png" className="h-20"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto -mb-10 lg:w-6/12">
                            <img src="assets/images/pay-bills-2.png" className="relative ml-32 object-cover"
                                 alt="food illustration"
                                 loading="lazy"></img>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/"
                           className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://file.rendit.io/n/D0LWZkzGhzHBOcXBec7V.png" className="h-12"
                                 alt="My Cash Logo"></img>

                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Features</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Fees</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                        href="https://flowbite.com/"
                        className="hover:underline">MyCash™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
