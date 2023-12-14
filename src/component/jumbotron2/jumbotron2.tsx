const Jumbotron2 = () => {
    return (
        <div className="relative bg-white">
            <div className="container mx-auto px-6 pt-16 md:pt-24 lg:pt-32">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:space-x-8">
                    <div className="lg:w-6/12 relative order-2 lg:order-1">
                        <img src="assets/images/customer1.png" className="w-full md:w-auto mx-auto md:ml-0 md:mr-0 lg:-mt-48" alt="customer illustration" loading="lazy" />
                    </div>
                    <div className="lg:w-6/12 lg:py-16 xl:py-24 order-1 lg:order-2">
                        <hr className='w-32 border-[1.5px] border-red-500 mb-2'/>
                        <h1 className="text-[#ED2126] font-hurme text-2xl md:text-4xl lg:text-5xl mb-2">Introducing MyCash</h1>
                        <p className="mt-2 font-hurme font-semibold text-3xl md:text-5xl lg:w-10/12 mb-6">Redefining Your Digital Wallet Experience</p>
                        <p className="text-lg md:text-xl tracking-tight font-hurme text-justify">MyCash is a mobile wallet that lets you do it all with electronic cash. Removing the need for a bank account, MyCash provides a way to make fast, reliable, safe, and convenient daily financial transactions – all at the convenience of your mobile phone.</p>
                        <div className="mt-6 mb-6">
                            <button className="bg-red-500 w-44 h-12 text-white rounded-md p-2 mr-2">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Jumbotron2;


{/*<img src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" className="relative" alt="food illustration" loading="lazy" width="4500" height="4500"></img>*/}
