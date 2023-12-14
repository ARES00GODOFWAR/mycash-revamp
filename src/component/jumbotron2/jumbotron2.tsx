const Jumbotron2 = () => {
    return (
        <>
            <div className="relative bg-white">
                <div className="container ml-10 px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
                    <div className="flex items-center flex-wrap px-2 md:px-0">
                        <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                            <img src="assets/images/customer1.png" className="relative -mt-48" alt="food illustration"
                                 loading="lazy"></img>
                        </div>
                        <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                            <hr className='w-32 border-[1.5px] border-red-500 mb-2'/>
                            <h1 className="text-[#ED2126] font-hurme text-[20px]">Introducing MyCash</h1>
                            <p className="mt-2 font-hurme font-semibold text-[50px] lg:w-10/12">Introducing MyCash: Redefining Your Digital Wallet Experience</p>
                            <p className="text-[19px] tracking-tight font-hurme text-justify mt-6 ">MyCash is a mobile wallet that lets you do it all with electronic cash. Removing the need for a bank account, MyCash provides a way to make fast, reliable, safe, and convenient daily financial transactions – all at the convenience of your mobile phone.</p>
                            <div className="mt-6">
                                <button className="bg-red-500 w-44 h-12 text-white rounded-md p-2 mr-2">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Jumbotron2;


{/*<img src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" className="relative" alt="food illustration" loading="lazy" width="4500" height="4500"></img>*/}
