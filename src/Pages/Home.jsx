import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
  return (
<div className="relative bg-[#9538E2] rounded-xl min-h-[680px] mb-24">
  <div className="text-center py-32 text-white">
    <div className="">
      <h1 className="text-5xl font-bold px-24 pt-8">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="text-base py-6 px-60">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button onClick={()=> navigate('/dashboard')} className="btn rounded-full text-[#9538E2] bg-white font-bold">Shop now</button>
    </div>
  </div>
    <div className="absolute z-10 border-4 border-white p-5 right-40 -bottom-[440px]">
        <img src="/public/assets/banner.jpg" alt="" className="max-w-[1110] max-h-[610px]" />
    </div>    
</div>

  );
};

export default Home;
// bg-[#9538E2]