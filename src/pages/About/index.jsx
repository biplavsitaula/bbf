import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import aboutPageData from "./data"; // Adjust path as needed

const AboutPage = () => {
  const {
    title,
    subtitle,
    mission,
    whoWeAre,
    services,
    trust,
    closing,
  } = aboutPageData;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl text-primary font-bold text-center mb-4">{title}</h1>
      <p className="text-lg text-center mb-10">{subtitle}</p>

      <section className="space-y-10">
        <Card className="shadow-md py-0">
          <img
            src="/about/mission.jpg"
            alt="Mission"
            className="w-full h-72 object-cover rounded-t-xl"
          />
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{mission.heading}</h2>
            <p className="  leading-relaxed">{mission.content}</p>
          </CardContent>
        </Card>

        <Card className="shadow-md py-0">
          <img
            src="/about/we.jpg"
            alt="Who We Are"
            className="w-full h-72 object-cover rounded-t-xl"
          />
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{whoWeAre.heading}</h2>
            <p className="  leading-relaxed">{whoWeAre.content}</p>
          </CardContent>
        </Card>

        <Card className="shadow-md py-0">
          <img
            src="/about/offer.jpg"
            alt="Services"
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{services.heading}</h2>
            <ul className="space-y-1  ">
              {services.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-md py-0">
          <img
            src="/about/trust.jpg"
            alt="Why Clients Trust Us"
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{trust.heading}</h2>
            <ul className="space-y-1  ">
              {trust.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Separator />

        <p className="text-center text-lg mt-6">{closing}</p>
      </section>
    </div>
  );
};

export default AboutPage;
