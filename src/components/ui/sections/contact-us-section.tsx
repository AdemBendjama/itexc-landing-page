import ContactUsForm from "@/components/forms/contact-us-form";

function ContactUsSection() {
  return (
    <div className="bg-white text-black">
      <div className="lg:pt-[8rem] sm:pt-24 pt-16 pb-12 sm:px-[2.125rem] sm:flex-row flex-col flex gap-[3rem] 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] mx-[1rem]">
        <div className="basis-2/3 flex flex-col gap-[1.875rem]">
          <div className="flex flex-col sm:gap-[1.5rem] gap-4">
            <span className="lg:text-[3rem] sm:text-[2.5rem] text-[2rem] font-normal leading-[120%]">
              Still Need Help ?<br />
              <span className="font-bold">Contact us</span>
            </span>
            <span className="text-lg font-normal leading-[150%]">
              We will get back to you within 48 hours
            </span>
          </div>
          <div className="w-full">
            <ContactUsForm />
          </div>
        </div>
        <div className="basis-1/3 flex flex-col gap-[1.25rem]">
          <span className="text-[2rem] font-semibold leading-[150%]">
            Find Us
          </span>
          <div className="flex flex-col gap-[0.625rem]">
            <span className="text-[1.3125rem] font-semibold leading-[150%]">
              Our Location
            </span>
            <span className="text-base font-medium leading-[150%]">
              Subdivision of the commune, Lot N01, Building N02, Dar El-Beida,
              Algiers.
            </span>
          </div>
          <div className="flex flex-col gap-[0.625rem] mt-[1.5rem]">
            <span className="text-[1.3125rem] font-semibold leading-[150%]">
              Email Address
            </span>
            <div className="flex flex-col gap-[0.5rem]">
              <span className="text-base font-medium leading-[150%]">
                contact@itexcgroup.com
              </span>
              <span className="text-base font-medium leading-[150%]">
                recruitment@itexc-agency.com
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[0.625rem]">
            <span className="text-[1.3125rem] font-semibold leading-[150%]">
              Phone Number
            </span>
            <span className="text-base font-medium leading-[150%]">
              +213770076252
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
