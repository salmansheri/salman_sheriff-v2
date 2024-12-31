import { ArrowDown } from "lucide-react";
import MyPhoto from "../../../assets/images/my_photo_transparent_Craiyon.png";
import Button from "~/components/ui/button.tsx";

const Hero = () => {
  return (
    <section className="min-h-dvh pt-20">
      <div className="container grid md:h-screen items-stretch !max-w-full md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="text-5xl md:text-6xl  mt-20 text-balance">
            Transforming ideas into engaging digital experiences with innovative
            code and inspired design.
          </h1>
          <div className="space-x-6 mt-16">
            <Button variant="secondary">
              <span>View My Work</span>
              <ArrowDown />
            </Button>
            <Button>Let&apos;s Talk</Button>
          </div>
        </div>

        <div className="md:col-span-5 flex items-center justify-center">
          <img
            alt="my image"
            className="w-[300px] h-[300px]  lg:w-full lg:h-full place-content-center"
            src={MyPhoto}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
