import React from "react";

const Footer = () => {
  return (
    <div className="footer_wrapper" style={{ backgroundColor: "#32BBC5" }}>
      <div className="stayLoop">
        <div className="text-2xl pb-4 font-normal text-[#614BC3]">Stay in the loop</div>
        <div className="inputFt">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className=" text-2xl mt-8 text-[#614BC3] tracking-wide" style={{paddingTop: "2.5rem"}}>Join the community</div>
        <div className="socialmedia flex gap-2 mt-8">
          <img src="/assets/icons/iconfooter1.svg" alt="image1" width={45} />
          <img src="/assets/icons/iconfooter2.svg" alt="image1" width={45} />
          <img src="/assets/icons/iconfooter3.svg" alt="image1" width={45} />
          <img src="/assets/icons/iconfooter4.svg" alt="image1" width={45} />
          <img src="/assets/icons/iconfooter5.svg" alt="image1" width={45} />
          <img src="/assets/icons/iconfooter6.svg" alt="image1" width={45} />
        </div>
      </div>
      <div className="resources">
        <div className="text-white text-lg pb-4 font-medium">Resources</div>
        <div className="resources_links flex flex-col">
          <a href="#" className="text-white">
            Blog
          </a>
          <a href="#" className="text-white">
            Help Center
          </a>
          <a href="#" className="text-white">
            Community standards
          </a>
          <a href="#" className="text-white">
            Partners
          </a>
          <a href="#" className="text-white">
            Developer platform
          </a>
        </div>
      </div>
      <div className="contact">
        <div className="text-white text-lg pb-4 font-medium">Contact</div>
        <div className="contact_links">
          <p className="text-white">Business</p>
          <p className="text-white">Feature Requests</p>
          <p className="text-white">Discord</p>
          <div className="text-white">
            Hiring: <span>join us!</span>
          </div>
        </div>
      </div>
      <div className="marketplace">
        <div className="text-white text-lg pb-4 font-medium">Marketplace</div>
        <div className="marketplace_links">
          <p className="text-white">All NFTs</p>
          <p className="text-white">Art</p>
          <p className="text-white">Gaming</p>
          <p className="text-white">Memberships</p>
          <p className="text-white">PFPs</p>
          <p className="text-white">Photography</p>
          <p className="text-white">Music</p>
        </div>
      </div>
      <div className="lightWeb">
        <img src="/assets/icons/switchbtn.svg" alt="switch" width={45} />
        <img src="/assets/icons/webbtn.svg" alt="web" width={45} />
      </div>
    </div>
  );
};

export default Footer;
