const Jumbotron = () => {
    return (
        <>
            <div className="relative bg-white">
                <div className="container mx-auto px-6 ">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
                        <div className="text-center md:text-left md:w-6/12 lg:py-24 xl:py-32">
                            <hr className='w-32 border-[1.5px] border-red-500 mb-2'/>
                            <h1 className="text-[#ED2126] font-hurme text-2xl md:text-4xl lg:text-5xl">Your Ultimate Digital Wallet Solution</h1>
                            <p className="mt-2 font-hurme font-semibold text-3xl md:text-6xl lg:w-10/12">MyCash: Simplify, Secure, Spend</p>
                            <p className="text-lg md:text-xl tracking-tight font-hurme text-justify">Simplify your finances, secure your transactions, and spend with confidence. MyCash, your trusted digital wallet for a seamless and secure money experience.</p>
                            <div className="mt-4">
                                <button className="bg-red-500 w-44 h-12 text-white rounded-md p-2 mr-2">Get Started</button>
                            </div>
                        </div>
                        <div className="ml-auto -mb-24 lg:-mb-56 md:w-6/12">
                            <img src="assets/images/home_banner1.png" className="w-full max-w-full" alt="food illustration" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Jumbotron;