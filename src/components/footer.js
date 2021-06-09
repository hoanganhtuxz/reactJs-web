import React from 'react'

const Footer = () => {
    return (
        <div>
         <div className=" mx-auto pt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-green-400 p-10 ">
          <div className="text-white ">
            <h3 className="text-3xl font-italic font-serif ">
              <a href="/ ">Clothes shop</a> <span className="text-red-600 text-4xl ">.</span>
            </h3>
            <p>59 Street, Newyork City, Rose Town, 05 Rive House<br /> +123 456 7890<br /> info@example.com
            </p>
          </div>
          <div className="text-white ">
            <h2 className="font-blod text-2xl ">INFORMATION</h2>
            <p>About Us<br /> Latest Post<br /> Selling Tips<br /> Advertising
              <br /> Contact Us
            </p>
          </div>
          <div className="text-white ">
            <h2 className="font-blod text-2xl ">MY ACCOUNT</h2>
            <p>My Account<br /> Login/Register
              <br /> Cart
              <br /> Wishlist
              <br /> Order History</p>
          </div>
          <div className="text-white ">
            <h2 className="font-blod text-2xl ">HELP &amp; SUPPORT</h2>
            <p>How To Shop<br /> Payment
              <br /> Returns
              <br /> Delivery
              <br /> Privacy &amp; Cookie Policy</p>
          </div>
        </div>
        <div className="pt-10 bg-green-600" />
      </div>
        </div>
    )
}

export default Footer
