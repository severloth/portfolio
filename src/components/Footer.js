import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';

function Component() {
  return (
    
    <Footer bgDark container data-aos="fade-in">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src="https://media.licdn.com/dms/image/D4D03AQEDl6VeSS4APg/profile-displayphoto-shrink_800_800/0/1664421226148?e=1715817600&v=beta&t=nHNkJNLlY_w_xSMa71oaoiajNO2TspuYVRWmfmsc8mo"
            alt="Flowbite Logo"
            name="Facundo Gil"
          />
          <FooterLinkGroup>
            <FooterLink href="mailto:facundogilweb@gmail.com?Subject=Contacto%20por%20Página Web">✉️ facundogilweb@gmail.com</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Facundo Gil" year={2024} />
      </div>
    </Footer>
  );
}

export default Component;