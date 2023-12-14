const FeatureBar = () => {
    return (
        <div style={{ background: 'linear-gradient(148deg, #ED2126 0%, #E42327 5%, #404040 100%)' }} className="lg:h-[330px] h-auto w-full mt-4">
            <div className="container mx-auto p-4 md:p-10 pt-16">
                <h1 className="font-hurme text-2xl md:text-4xl text-white font-semibold mb-6">MyCash App Features</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex ">
                    {features.map((feature, index) => (
                        <div key={index} className={`text-center ${index !== 0 ? 'lg:pl-20' : ''}`}>
                            <div className="m-3 flex h-20 w-20 items-center justify-center rounded-full bg-white bg-opacity-25 mx-auto">
                                <img src={`assets/icons/${feature.icon}`} alt={feature.alt} />
                            </div>
                            <p className="text-white font-hurme text-sm mt-2">{feature.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const features = [
    { icon: 'send.svg', alt: 'Send Money', title: 'Send Money' },
    { icon: 'top_up.svg', alt: 'Top Up', title: 'Top Up' },
    { icon: 'gr.svg', alt: 'Pay', title: 'Pay' },
    { icon: 'pos.svg', alt: 'Withdraw', title: 'Withdraw' },
    { icon: 'bill_pay.svg', alt: 'Bill Pay', title: 'Bill Pay' },
];


export default FeatureBar;
