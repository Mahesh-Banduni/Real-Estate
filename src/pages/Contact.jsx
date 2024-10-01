import React from "react";

import { contactOnFacebook, contactOnInstagram, twitter } from "../utils/icons";
import {
  Button,
  ContactForm,
  Heading,
  SocialMediaLinks,
  ContactInfo,
} from "../components";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="w-11/12 m-auto flex mt-10 items-center justify-between max-sm:flex-col-reverse max-sm:gap-2 max-sm:items-center">
        <div className="flex flex-col gap-5">
          <Button
            text=" get started"
            className="capitalize font-interSemiBold text-[#000000] text-xl items-start w-fit "
          />
          <div className="flex flex-col gap-2">
            <Heading
              text="Get in touch with us."
              className="text-primary-color max-sm:text-center"
            />
            <Heading
              text=" We're here to assist you."
              className="text-primary-color max-sm:text-center"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 max-sm:flex-row">
          <SocialMediaLinks
            to="#"
            pic={contactOnFacebook}
            className={" px-3"}
          />
          <SocialMediaLinks to="#" pic={contactOnInstagram} className={""} />
          <SocialMediaLinks to="#" pic={twitter} className={""} />
        </div>
      </div>
      <ContactForm />
      <ContactInfo />
    </React.Fragment>
  );
};

export default Contact;
