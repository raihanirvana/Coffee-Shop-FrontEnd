import React, { Component } from "react";
import ig from "../../assets/ig.svg";
import cofe from "../../assets/cofe.webp";
import facebook from "../../assets/pesbuk.svg";
import twitter from "../../assets/twitter.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="h-[530px] flex lg:h-[528px] bg-[#f8f8f8] w-full">
        <section className="mt-[181px] flex-[2] w-full">
          <div className="ml-[20px] w-full lg:ml-[171px]">
            <div className="flex">
              <img className="h-[33px] w-[33px]" src={cofe} alt="" />
              <h4 className="ml-4 text-xl font-bold">Coffee Shop</h4>
            </div>
            <p className="mt-[22px] w-1/3 text-base leading-7">
              Coffee Shop is a store that sells some good meals, and especially
              coffee. We provide high quality beans
            </p>
            <ul className="flex gap-5 mt-11">
              <li>
                <img
                  src={facebook}
                  alt=""
                  className="w-full h-[33.6px] rounded-full bg-[#6a4029]"
                />
              </li>
              <li>
                <img
                  src={twitter}
                  alt=""
                  className="w-full h-[33.6px] rounded-full bg-[#6a4029]"
                />
              </li>
              <li>
                <img
                  src={ig}
                  alt=""
                  className="w-full h-[33.6px] rounded-full bg-[#6a4029]"
                />
              </li>
            </ul>
            <p className="mt-[30px]">©2020CoffeeStore</p>
          </div>
        </section>
        <section className="flex-[1.3] lg:flex-1 w-full">
          <div className="flex w-full mt-[181px] gap-32">
            <div className="w-1/4">
              <p className="mb-5 text-base font-medium">Product</p>
              <ul>
                <li className="mt-5">Download</li>
                <li className="mt-5">Pricing</li>
                <li className="mt-5">Location</li>
                <li className="mt-5">Countries</li>
                <li className="mt-5">Blog</li>
              </ul>
            </div>
            <div className="w-[200%]">
              <p className="mb-5 text-base font-medium">Engage</p>
              <ul className="w-full">
                <li className="mt-5">Coffe Shope?</li>
                <li className="mt-5">FAQ</li>
                <li className="mt-5">About Us</li>
                <li className="mt-5">Privacy Policy</li>
                <li className="mt-5">Terms of Service</li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
