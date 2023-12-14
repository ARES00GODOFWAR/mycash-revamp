const FeatureBar = () => {
    return (
        <>
            <div style={{background: 'linear-gradient(148deg, #ED2126 0%, #E42327 5%, #404040 100%)'}}
                 className="h-[330px] mt-4">
                <div className="ml-10">
                    <div className="p-10">
                        <h1 className="font-hurme text-[40px] text-white font-semibold">MyCash App Features</h1>
                    </div>
                    <div className="flex">
                        <div className="text-center pl-10">
                            <div className="m-3 flex h-20 w-20 items-center justify-center rounded-full bg-white bg-opacity-25">
                                <img src="assets/icons/send.svg" alt=""></img>
                            </div>
                            <p className="text-white font-hurme text-[16px]">Send Money</p>
                        </div>
                        <div className="text-center pl-20">
                            <div className="m-3 flex h-20 w-20 items-center justify-center rounded-full bg-white bg-opacity-25">
                                <img src="assets/icons/top_up.svg" alt=""></img>
                            </div>
                            <p className="text-white font-hurme text-[16px]">Top Up</p>
                        </div>
                        <div className="text-center pl-20">
                            <div className="m-3 flex h-20 w-20 items-center justify-center rounded-full bg-white bg-opacity-25">
                                <img src="assets/icons/gr.svg" alt=""></img>
                            </div>
                            <p className="text-white font-hurme text-[16px]">Pay</p>
                        </div>
                        <div className="text-center pl-20">
                            <div className="m-3 flex h-20 w-20 items-center justify-center rounded-full bg-white bg-opacity-25">
                                <img src="assets/icons/pos.svg" alt=""></img>
                            </div>
                            <p className="text-white font-hurme text-[16px]">Withdraw</p>
                        </div>
                        <div className="text-center pl-20">
                            <div className="m-3 flex h-20 w-20 items-center justify-center rounded-full bg-white bg-opacity-25">
                                <img src="assets/icons/bill_pay.svg" alt=""></img>
                            </div>
                            <p className="text-white font-hurme text-[16px]">Bill Pay</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default FeatureBar;
