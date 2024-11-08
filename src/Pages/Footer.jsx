const Footer = () => {
  return (
    <footer className="bg-base-300 p-10 flex-col pt-4 mt-16">
      <div className="text-center space-y-3 py-6">
        <h1 className="text-4xl font-bold">Gadget Heaven</h1>
        <p className="md:text-base text-sm">
          Leading the way in cutting edge technology and innovation
        </p>
      </div>
      <div className="border border-gray-300 px-16 mb-3"></div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-6 md:justify-between items-center w-[60%] mx-auto pt-8 pb-6">
        <nav className="flex flex-col text-center">
          <h6 className="text-black font-bold md:pt-4">Services</h6>
            <div className="flex flex-col text-center items-center">
            <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
            </div>
        </nav>
        <nav className="flex flex-col text-center items-center">
          <h6 className="text-black font-bold">Company</h6>
          <div className="flex flex-col text-center md:pt-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Contact</a>
          </div>
        </nav>
        <nav className="flex flex-col text-center items-center">
          <h6 className="text-black font-bold ">Legal</h6>
          <div className="flex flex-col text-center md:pt-4">
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
