import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdOutlineWebStories } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { GoDeviceDesktop } from "react-icons/go";
import { FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

function Home() {
  const cardContent = [
    {
      title: "Welcome to ByteBornFire",
      description:
        "At BBF, we are passionate about technology and thrive on solving complex challenges. We are dedicated to delivering superior results that exceed expectations and drive measurable business growth for our clients.",
      image: "/welcome-to-gts.jpg",
    },
    {
      title: "Who are we?",
      description:
        "Founded in 2025, BBF. stands as a best software service provider in Nepal. Our dedicated team comprises passionate professionals engaged in the creation, enhancement, testing, and upkeep of a remarkable portfolio.",
      image: "/know-about-gts.jpg",
    },
    
  ];
  const workWithUs = [
    {
      title: "Why Work With Us?",
      description:
        "Our success is the product of our talented staff. We offer employees great growth opportunities, a team environment, and a chance to work at one of the fastest growing healthcare information companies. From information technologists to developers, data scientists, network engineers, designers and more, we’re continually looking for top talent to fill the important positions in the teams.",
      action: "Join Now",
    },
  ];
  const services = [
    {
      title: "Web Development",
      description:
        "At BBF, We specialize in developing websites tailored to the unique needs of startups and a diverse array of businesses.",
      icon: <MdOutlineWebStories />,
    },
    {
      title: "SEO",
      description:
        "At BBF, we offer comprehensive SEO services catering to a wide range of industries and business needs.",
      icon: <AiOutlineMobile />,
    },
  ];
  return (
    <>
      <section className="relative w-full h-180 overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0 bg-linear-to-b from-transparent to-black from-10% to-50% opacity-70 "></div>
        <img
          loading="lazy"
          className="object-cover grayscale w-full h-full opacity-100 max-sm:object-[30%]"
          src={"/gts-hero-image.jpg" || "https://placehold.co/100x800"}
        />
        <div
          data-aos="fade-left"
          className="px-10 py-12 rounded-lg border shadow-md absolute top-48 right-20 backdrop-blur-sm max-md:right-5 max-sm:top-100 bg-white/40 z-2"
        >
          <span className="absolute -top-12 -z-1 shadow-xl right-100 w-30 h-30 rounded-full bg-[#ffa148]/10"></span>
          <span className="absolute top-40 -z-1 shadow-xl -right-10 w-30 h-30 rounded-full bg-[#fed349]/20"></span>
          <h1 className="font-bold text-shadow-md text-6xl max-md:text-md m-0">
            BBF
          </h1>
          <h2 className="font-semibold text-primary text-shadow-lg text-3xl max-md:text-xl m-0">
            Empowering Digital Presence
          </h2>
          <h3 className="font-thin text-xl text-shadow-lg m-0">
            Design, Develop & Innovate
          </h3>
        </div>
      </section>
      <section className="bg-background/80 flex max-md:flex-wrap gap-8 justify-center max-sm:px-8 max-md:px-16 px-60 py-16">
        {cardContent.map((content) => (
          <Card className="flex-1 min-w-90 max-w-120">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{content.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg h-36 overflow-hidden relative">
                <img
                  className="object-cover w-full h-full"
                  src={content.image || "https://placehold.co/560x160"}
                />
              </div>
              <CardDescription className="mt-4">
                {content.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>
      <hr />
      <section className="bg-background py-4">
        <h3 className="text-primary text-center font-semibold text-3xl pb-2">
          Our Services
        </h3>
        <div className="flex max-md:flex-wrap gap-8 justify-center max-sm:px-10 max-md:px-20 px-60 py-4">
          {services.map((content) => (
            <Card className="flex-1 min-w-90 max-w-120">
              <CardHeader>
                <div className="flex gap-2 text-xl text-primary">
                  {content.icon}
                  <CardTitle>{content.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{content.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-background max-sm:px-5 max-md:px-16 px-60 py-4">
        {workWithUs.map((content) => (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary">{content.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{content.description}</CardDescription>
              <CardAction className="mt-4 bg-black text-primary px-4 py-2 rounded-sm hover:scale-105 cursor-pointer duration-100">
                {content.action}
              </CardAction>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className=" bg-background px-60 py-12 max-md:px-5 max-sm:px-10">
        <h3 className=" text-primary text-center font-semibold text-3xl pb-8">Our Expertise</h3>
        <div className="flex max-lg:flex-wrap gap-6 items-start justify-center">
          <div className=" relative rounded-md overflow-hidden h-100 min-w-90 shadow-md">
            <img
              className="object-cover w-full h-full "
              src={"/expert-gts.jpg" || "https://placehold.co/600x600"}
            />
          </div>
          <Card className='flex-1 min-w-90 px-4 py-2'>
            <CardDescription className='text-md max-md:text-sm'>
              A software company excels in crafting innovative and efficient
              digital solutions, leveraging cutting-edge technologies to address
              diverse business needs. With expertise in software development,
              customization, and optimization, these companies empower clients
              with tailored solutions to enhance productivity and drive
              technological advancements.
            </CardDescription>
            <div className="flex flex-wrap max-md:mt-4 mt-16 justify-center gap-6 text-primary">
              <FaReact size={36} />
              <FaPython  size={36} />
              <FaNodeJs  size={36} />
              <FaHtml5  size={36}/>
              <RiNextjsFill  size={36}/>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Home;
