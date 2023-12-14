const Jumbotron = () => {
    return (
        <>
            <div className="relative bg-white">
                <div className="container ml-10 px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
                    <div className="flex items-center flex-wrap px-2 md:px-0">
                        <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                            <hr className='w-32 border-[1.5px] border-red-500 mb-2'/>
                            <h1 className="text-[#ED2126] font-hurme text-[20px]">Your Ultimate Digital Wallet Solution</h1>
                            <p className="mt-2 font-hurme font-semibold text-[50px] lg:w-10/12">MyCash: Simplify, Secure, Spend</p>
                            <p className="text-[19px] tracking-tight font-hurme text-justify ">Simplify your finances, secure your transactions, and spend with confidence. MyCash, your trusted digital wallet for a seamless and secure money experience.</p>
                            <div className="mt-4">
                                <button className="bg-red-500 w-44 h-12 text-white rounded-md p-2 mr-2">Download MyCash</button>
                                <button className="bg-white w-44 h-12 border border-red-500 text-red-500 rounded-md p-2">How Do I Subscribe ?</button>
                            </div>
                        </div>
                        <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                            <img src="assets/images/home_banner1.png" className="relative ml-32" alt="food illustration"
                                 loading="lazy" width="4500" height="4500"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Jumbotron;


{/*<img src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" className="relative" alt="food illustration" loading="lazy" width="4500" height="4500"></img>*/}
