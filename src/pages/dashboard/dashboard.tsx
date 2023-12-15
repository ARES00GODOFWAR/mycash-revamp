import Footer from "~/component/footer/footer";
import NavBar from "~/navbar/navbar";

export default function Dashboard() {
    return (
        <>
        <NavBar isAuthenticated={true}/>
        <div 
  className="relative text-white h-64 bg-cover bg-no-repeat" 
  style={{ 
    backgroundImage: "url('/assets/images/digicel_hackathon_image.png')",
    backgroundBlendMode: 'multiply',
    backgroundColor: 'rgba(255, 0, 0, 0.5)'  // This represents the red overlay with opacity
  }}
>
  <div className="absolute inset-0 flex flex-col justify-center pl-6">
    <h1 className="text-4xl font-bold">My Wallet ®</h1>
    <p className="text-6xl font-semibold mt-2">1,234,567.00</p>
  </div>
</div>
        
<div className="bg-white py-4 px-6 mb-10 mt-2">
  {/* Heading */}
  <h2 className="text-xl font-semibold mb-8">Choose a transaction</h2>
  
  {/* Buttons Container */}
  <div className="flex space-x-4"> 
    {/* Send Button */}
    <button className="flex items-center border-2 border-red-500 text-red-500 rounded-lg px-20 py-5 space-x-2">
      <div>
      <img src="https://media.istockphoto.com/id/942191652/vector/fast-cash-icon.jpg?s=612x612&w=0&k=20&c=30voLsjQwUFUHoffU1z44-nEUC_Rbg1cJcM1WP2fALA=" alt="Send Icon" className="w-5 h-5" />
      </div>
      <span className="text-lg">Send</span> {/* Larger text size */}
    </button>

    {/* Receive Button */}
    <button className="flex items-center border-2 border-red-500 text-red-500 rounded-lg px-20 py-5 space-x-2">
      <div>
      <img src="https://cdn4.iconfinder.com/data/icons/money-filled-outline/64/money-colored-15-512.png" alt="Send Icon" className="w-5 h-5" />
      </div>
      <span className="text-lg">Receive</span> {/* Larger text size */}
    </button>

    {/* Pay Bills Button */}
    <button className="flex items-center border-2 border-red-500 text-red-500 rounded-lg px-20 py-5 space-x-2">
      <div>
      <img src="data:image/png;base64,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" alt="Send Icon" className="w-5 h-5" />
      </div>
      <span className="text-lg">Pay Bills</span> {/* Larger text size */}
    </button>
  </div>
</div>
<Footer/>
         </>
  );

}
