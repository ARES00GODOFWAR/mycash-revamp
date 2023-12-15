const Footer = () => {
    return (
        <>
            <footer className="bg-[#ED2126]">
                <div className="container p-6 mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:w-6/12 md:pr-8">
                        <h1 className="font-hurme text-white font-semibold text-2xl md:text-4xl lg:w-10/12 mb-2">Get the App Now!</h1>
                        <p className="font-hurme text-[19px] text-white md:w-10/12 mb-4">Unlock the Power of Home Services</p>
                        <div className="flex space-x-4">
                            <img src="assets/images/google-play-button1.png" className="h-10" alt="Google Play"></img>
                            <img src="assets/images/App-Store-Button-transparent1.png" className="h-10" alt="App Store"></img>
                        </div>
                    </div>
                    <div className="md:w-6/12">
                        <img src="assets/images/pay-bills-2.png" className="w-full object-cover" alt="illustration" loading="lazy"></img>
                    </div>
                </div>
                <div className=" md:p-6 text-center bg-white mx-auto w-full py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                        <div className="mb-4 sm:mb-0">
                            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="https://file.rendit.io/n/D0LWZkzGhzHBOcXBec7V.png" className="h-12" alt="My Cash Logo"></img>
                            </a>
                        </div>
                        <ul className="flex flex-wrap items-center text-sm font-medium sm:mb-0 dark:text-gray-400">
                            <li><a href="#" className="hover:underline me-4 md:me-6">Features</a></li>
                            <li><a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline me-4 md:me-6">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:underline">Fees</a></li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">MyCash™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
