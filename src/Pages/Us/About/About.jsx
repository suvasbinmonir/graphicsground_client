import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "/logolight.png";

const About = () => {
  return (
    <div className="2xl:w-[1400px] xl:w-[90%] lg:w-[90%] mx-auto py-20">
      <div className="border-b pb-2">
        <h1 className="text-dark-green font-sf-bold text-header">About Us</h1>

        <div className="flex items-center gap-x-2">
          <Link className="text-regular font-sf-regular text-dark-green" to="/">
            Home
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <h1 className="text-regular font-sf-regular text-dark-green ">
            About Us
          </h1>
        </div>
      </div>
      <div>
        <div className=" py-10">
          <img width={"300px"} className="mx-auto" src={logo} alt="" />
        </div>
        <div>
          <h1 className="text-dark-green font-sf-regular text-minimum">
            Welcome to GraphicsGround LLC – where creativity meets exclusivity.
            We’re a dedicated team of designers and brand strategists with one
            mission: to help new businesses make their mark with standout,
            one-of-a-kind designs. At GraphicsGround, we specialize in creating
            exclusive pre-made logos that are sold only once, giving you full
            copyright ownership to use the design with complete confidence.
          </h1>

          <br />
          <h1 className="text-dark-green font-sf-bold text-regular pb-2 ">
            Our Vision
          </h1>
          <h1 className="text-dark-green font-sf-regular text-minimum py-2">
            We believe that every brand deserves a unique identity. That’s why
            each logo we offer is meticulously crafted to reflect personality,
            purpose, and professionalism. We aim to empower new business owners
            with high-quality designs that not only resonate with their audience
            but also stand out in a crowded market.
          </h1>
          <br />
          <h1 className="text-dark-green font-sf-bold text-regular  ">
            What We Offer
          </h1>
          <h1 className="text-dark-green font-sf-regular text-minimum py-2">
            GraphicsGround is more than just logos. From custom logo designs to
            brand style guides and packaging design, our services cover all your
            branding needs. Each of our exclusive logos comes with a full set of
            files, ensuring that you’re ready to showcase your brand across all
            digital and print platforms. With our focus on customization and
            quality, we ensure that our clients have all they need to start
            strong.
          </h1>
          <br />
          <h1 className="text-dark-green font-sf-bold text-regular  ">
            Why Choose Us?
          </h1>

          <h1 className="text-dark-green font-sf-regular text-minimum py-2">
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>
                <span className="font-bold">Exclusivity:</span> Each logo is
                sold only once, so you’ll never see it on another brand.
              </li>
              <li>
                <span className="font-bold">Full Ownership:</span>
                With every purchase, you gain complete copyright rights to your
                design
              </li>
              <li>
                <span className="font-bold">Attention to Detail:</span>
                We pour creativity and care into every design to ensure it
                aligns with industry standards and visual appeal.
              </li>
            </ul>
          </h1>

          <br />
          <h1 className="text-dark-green font-sf-bold text-regular pb-2 ">
            Our Commitment
          </h1>
          <h1 className="text-dark-green font-sf-regular text-minimum py-2">
            At GraphicsGround LLC, we’re here to support your journey from the
            first draft to final delivery. Our money-back guarantee and
            dedicated support team stand by to ensure you’re fully satisfied
            with your design and your experience. Whether you’re starting fresh
            or rebranding, our goal is to be your trusted partner for all things
            branding. Let’s make your vision a reality.
            <br /> Thank you for choosing GraphicsGround LLC to help bring your
            brand to life.
          </h1>

          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
