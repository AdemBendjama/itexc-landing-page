import Image from "next/image";
import NewsletterForm from "../forms/newsletter-form";

function Footer() {
  return (
    <div className="bg-white text-black">
      <div className="flex flex-col gap-9 sm:py-8 pb-8 lg:px-8 wrapper">
        <div className="flex sm:justify-between justify-center">
          <span className="sm:block hidden lg:text-[2.625rem] sm:text-4xl text-3xl font-semibold">
            Connect with us
          </span>
          <div className="flex gap-3 items-center">
            <div className="w-7 h-7 relative">
              <Image
                src="/linkedin.svg"
                alt="linkedin icon"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="w-7 h-7 relative">
              <Image
                src="/whatsapp.svg"
                alt="whatsapp icon"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="w-7 h-7 relative">
              <Image
                src="/instagram.svg"
                alt="instagram icon"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="w-7 h-7 relative">
              <Image
                src="/behance.svg"
                alt="behance icon"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="w-7 h-7 relative">
              <Image
                src="/facebook.svg"
                alt="facebook icon"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="w-7 h-7 relative">
              <Image
                src="/X.svg"
                alt="X icon"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="sm:flex-row flex-col-reverse sm:gap-0 gap-8 flex justify-between">
          <div className="flex-1 flex flex-col justify-center lg:gap-8 gap-2">
            <Image
              src="/ITEXC-GROUP-V-WORDMARK.svg"
              alt="watermark"
              width={103}
              height={32}
              className="lg:mb-0 mb-2"
            />
            <div className="flex lg:gap-8 gap-2 sm:text-base text-sm font-semibold">
              <span>Home</span>
              <span>About us</span>
              <span className=" lg:block sm:hidden block ">Products</span>
              <span className=" lg:block sm:hidden block">
                Terms of services
              </span>
            </div>
            <div className="lg:hidden sm:flex hidden lg:gap-8 gap-4 text-base font-semibold">
              <span>Products</span>
              <span>Terms of services</span>
            </div>
          </div>
          <div className="flex-1">
            <NewsletterForm />
          </div>
        </div>
        <div className="sm:flex-row flex-col sm:gap-0 gap-3 flex justify-between border-t border-black sm:pt-8 pt-4 text-sm font-normal">
          <div className="flex sm:gap-6 gap-2 underline">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies Settings</span>
          </div>
          <span>© 2023 ITEXC GROUP . All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
