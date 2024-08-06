function ContactUsSection() {
  return (
    <div className="bg-white text-black">
      <div className="pt-[9.5rem] pb-[3.125rem] px-[2.125rem] flex gap-[3rem] h-[69rem] 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] mx-[1rem]">
        <div className="w-[48rem] flex flex-col gap-[1.875rem]">
          <div className="flex flex-col gap-[1.5rem]">
            <span className="text-[3rem] font-normal leading-[120%]">
              Still Need Help ?<br />
              <span className="font-bold">Contact us</span>
            </span>
            <span className="text-lg font-normal leading-[150%]">
              We will get back to you within 48 hours
            </span>
          </div>
          <div></div>
        </div>
        <div className="w-[26.75rem] flex flex-col gap-[1.25rem]">
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
