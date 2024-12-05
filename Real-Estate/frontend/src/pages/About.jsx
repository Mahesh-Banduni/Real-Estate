import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-10 w-[85%] m-auto">
      <div className="flex items-center justify-center">
        <h1 className="text-center font-interSemiBold text-3xl text-primary-color my-10 border-b-2 pb-2 border-primary-color">
          Who We Are
        </h1>
      </div>
      <p className="font-interRegular text-balance">
        Welcome to Property Mela, where finding your dream property is simple,
        seamless, and secure. We are a passionate team of real estate
        professionals, tech enthusiasts, and industry experts dedicated to
        transforming the way you buy, sell and exchange real estate. Whether
        you're a first-time homebuyer, seasoned investor, we are here to guide
        you every step of the way. Our mission is to provide innovative,
        user-friendly tools and a trusted platform to help you navigate the
        world of real estate with confidence. We bring together the latest
        technology, local market insights, and a personalized touch to make the
        process as easy and transparent as possible.
      </p>
      <br />
      <ol className="list-decimal text-gray-800">
        <li>
          <p>
            <span className="capitalize font-interSemiBold">
              What We Do :-{" "}
            </span>
            At Property Mela, we offer a comprehensive range of real estate
            services tailored to meet the needs of both buyers and sellers. Our
            platform provides: Property Listings: Browse through thousands of
            residential and commercial properties, including homes for sale,
            exchange and investment opportunities.
          </p>
        </li>
        <br />
        <li>
          <p>
            <span className="capitalize font-interSemiBold">
              Advanced Search Tools:-
            </span>{" "}
            With our advanced search filters, finding your ideal property is
            quick and easy. Narrow your search by location, price, size, and
            other key factors.
          </p>
        </li>
        <br />
        <li>
          <span className="capitalize font-interSemiBold">
            Market Insights:-{" "}
          </span>
          Stay informed with up-to-date property trends, market reports, and
          neighborhood guides to make informed decisions.
        </li>
        <br />
        <li>
          <span className="capitalize font-interSemiBold">
            Agent Directory:-{" "}
          </span>
          Connect with experienced real estate agents who can help guide you
          through every aspect of the transaction process. Virtual Tours &
          Photos: Explore properties from the comfort of your home with
          high-quality images and virtual walkthroughs.
        </li>
        <br />
        <li>
          <span className="capitalize font-interSemiBold">Transparency:- </span>
          We believe in providing clear, honest, and reliable information so
          that you can make informed decisions.
        </li>
        <br />
        <li>
          <span className="capitalize font-interSemiBold">Innovation:- </span>
          We continuously invest in cutting-edge technology to enhance your
          experience and make real estate transactions easier and faster.
        </li>
      </ol>
      <div className="flex items-center justify-center my-5">
        <h1 className="text-center font-interSemiBold text-3xl text-primary-color border-b-2 pb-2 border-primary-color">
          Why Choose Us?
        </h1>
      </div>
      <ol className="list-decimal text-gray-800">
        <li>
          <p>
            <span className="capitalize font-interSemiBold">
              Expert Knowledge :-{" "}
            </span>
            Our team has years of experience in the real estate industry, with
            deep local knowledge and a strong network of trusted professionals.
            User-Friendly Platform: Our website and app are designed to be
            intuitive and easy to navigate, allowing you to find the information
            you need quickly and efficiently.
          </p>
        </li>
        <br />
        <li>
          <p>
            <span className="capitalize font-interSemiBold">
              End-to-End Service:-
            </span>{" "}
            From browsing listings to finalizing deals, we offer a complete
            range of services to support you at every stage of your real estate
            journey.
          </p>
        </li>
        <br />
        <li>
          <span className="capitalize font-interSemiBold">
            Personalized Support:-{" "}
          </span>
          Whether you need advice, a market analysis, or help negotiating, we
          provide personalized assistance tailored to your specific needs
        </li>
      </ol>
      <p className="my-5">
        We are a diverse group of real estate professionals, including agents,
        brokers, tech developers, data scientists, and customer service experts,
        all working together to make your real estate experience as smooth as
        possible. Each team member brings a unique skill set, but we all share
        one common goal: to make your property journey easier, faster, and more
        rewarding.
        <br /> At Property Mela, we are committed to providing a seamless and
        secure platform that simplifies the complexities of the real estate
        market. We aim to empower our users with the tools and information they
        need to make confident, informed decisions, whether you're buying,
        selling or investing. We believe that everyone deserves access to a
        trustworthy and efficient real estate platform that puts their needs
        first, and we are here to deliver just that.
      </p>
      <p className="my-5">
        Have questions or need assistance? Our team is ready to help!
      </p>
      <div className="my-10 flex flex-col gap-2 ">
        <p>
          {" "}
          <span className="font-interSemiBold"> Contact:- </span> 8595740966
        </p>
        <p>
          {" "}
          <span className="font-interSemiBold"> Email:- </span>{" "}
          <Link
            className="text-blue-600  hover:text-blue-800"
            to="pgoyal_realestate@propertymela.in"
          >
            {" "}
            pgoyal_realestate@propertymela.in{" "}
          </Link>
        </p>
        <p className="flex flex-wrap">
          {" "}
          <span className="font-interSemiBold"> Social Media:- </span>
          <Link
            className="text-blue-600 hover:text-blue-800"
            to="https://x.com/PropertyMela_"
          >
            {" "}
            https://x.com/PropertyMela_{" "}
          </Link>
          ,
          <Link
            className="text-blue-600  hover:text-blue-800"
            to="https://www.instagram.com/goyal_property_mela/?hl=en"
          >
            {" "}
            https://www.instagram.com/goyal_property_mela/?hl=en{" "}
          </Link>
        </p>
      </div>
      <p>
        Let's Get Started!
        <br /> Whether you’re looking for a new home or a lucrative investment
        opportunity, Property Mela is here to help. Start your real estate
        journey today by browsing our listings or contacting one of our expert
        agents
      </p>
    </div>
  );
};

export default About;
