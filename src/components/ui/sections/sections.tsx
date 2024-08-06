import AboutUsSection from "./about-us-section";
import AcademySection from "./academy-section";
import BrandexcSection from "./brandexc-section";
import HrexcSection from "./hrexc-section";
import OdooPartnerSection from "./odoo-partner-section";
import OpeningSection from "./opening-section";
import SoftwareDevSection from "./software-dev-section";
import WhatWeDoSection from "./what-we-do-section";

function Sections() {
  return (
    <>
      <OpeningSection />
      <AboutUsSection />
      <SoftwareDevSection />
      <WhatWeDoSection />
      <OdooPartnerSection />
      <HrexcSection />
      <BrandexcSection />
      <AcademySection />
    </>
  );
}

export default Sections;
