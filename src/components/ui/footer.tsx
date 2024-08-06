import Image from "next/image";
import NewsletterForm from "../forms/newsletter-form";

function Footer() {
  return (
    <div className="bg-white text-black">
      <div className="flex flex-col gap-[2.25rem] p-10 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] mx-[1rem]">
        <div className="flex justify-between">
          <span className="text-[2.625rem] font-semibold leading-[150%]">
            Connect with us
          </span>
          <div className="flex gap-[0.8125rem] items-center">
            <div className="w-[1.6875rem] h-[1.6875rem] relative">
              <Image
                src="/linkedin.svg"
                alt="linkedin icon"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="w-[1.6875rem] h-[1.6875rem] relative">
              <Image
                src="/whatsapp.svg"
                alt="whatsapp icon"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="w-[1.6875rem] h-[1.6875rem] relative">
              <Image
                src="/instagram.svg"
                alt="instagram icon"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="w-[1.6875rem] h-[1.6875rem] relative">
              <Image
                src="/behance.svg"
                alt="behance icon"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="w-[1.6875rem] h-[1.6875rem] relative">
              <Image
                src="/facebook.svg"
                alt="facebook icon"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="w-[1.6875rem] h-[1.6875rem] relative">
              <Image
                src="/X.svg"
                alt="X icon"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[2rem]">
            <Image
              src="/ITEXC-GROUP-V-WORDMARK.svg"
              alt="watermark"
              width={103}
              height={32}
            />
            <div className="flex gap-[2rem] text-base leading-[150%] font-semibold">
              <span>Home</span>
              <span>About us</span>
              <span>Products</span>
              <span>Terms of services</span>
            </div>
          </div>
          <div className="w-[38rem]">
            <NewsletterForm />
          </div>
        </div>
        <div className="flex justify-between border-t border-black pt-8 text-sm leading-[150%] font-normal">
          <div className="flex gap-6 underline">
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
