import React from "react";
import TechnologiesHero from "@/components/technologiesHero";
import ContactUs from "../components/contactUs";
import Image from "next/image";
const VRTechnology = () => {
  return (
    <>
      <TechnologiesHero />

      {/* VR Technology Introduction */}
      <div className="bg-stone-950 text-white py-12 px-6">
        <div className="container mx-auto flex items-center justify-between space-x-8">
          <div className="flex-1">
            <div className="text-3xl mb-4">🕶️</div>
            <h1 className="text-4xl font-bold mb-4 text-customRed underline underline-offset-8">
              Virtual Reality (VR) Solutions
            </h1>
            <p className="mb-8">
              Virtual Reality (VR) immerses users in a completely simulated environment, offering an experience that mimics or even surpasses reality. VR has the potential to transform industries, from entertainment to education, healthcare, and real estate, by creating highly engaging and interactive environments.
            </p>
            <p className="text-lg">
              Our VR solutions cater to a variety of sectors including entertainment, real estate, healthcare, training, and more. By leveraging VR technology, businesses can provide immersive experiences that captivate their audiences and elevate engagement.
            </p>
          </div>

          <div className="flex-1">
            <Image
              src="/svgs/vr-main.svg"
              alt="VR Introduction"
              layout="responsive"
              width={200}   // Specify the width of the image
              height={100}  // Specify the height of the image
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Industry Applications of VR */}
      <div className="min-h-screen bg-stone-950 text-white py-12 px-6">
        <div className="container mx-auto space-y-12">
          {/* Entertainment */}
          <div className="flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
          <div className="flex-1">
              <Image
                src="/svgs/cinema.svg"
                alt="Entertainment VR"
                layout="responsive"
                width={200}   // Specify the width of the image
                height={100}  // Specify the height of the image
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-customRed text-customRed">
                Revolutionizing Entertainment with VR
              </h2>
              <p className="text-lg mb-6">
                VR is reshaping the entertainment industry by providing users with fully immersive experiences. From virtual concerts to immersive video games, VR allows audiences to engage with content like never before, creating unforgettable moments.
              </p>
              <ul className="list-disc list-inside space-y-4">
                <li><strong className="text-customRed">Virtual Concerts:</strong> Experience live music performances in an entirely virtual space.</li>
                <li><strong className="text-customRed">Immersive Gaming:</strong> Step inside your favorite video games with fully interactive environments.</li>
                <li><strong className="text-customRed">Virtual Theme Parks:</strong> Enjoy theme park rides and attractions in VR without leaving home.</li>
              </ul>
            </div>

          </div>

          {/* Healthcare */}
          <div className="flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-customRed text-customRed">
                Advancing Healthcare with VR
              </h2>
              <p className="text-lg mb-6">
                VR is making strides in healthcare by offering innovative solutions for medical training, therapy, and patient care. From surgical simulation to mental health treatments, VR is improving both medical outcomes and the patient experience.
              </p>
              <ul className="list-disc list-inside space-y-4">
                <li><strong className="text-customRed">Surgical Training:</strong> Surgeons practice procedures in a simulated environment before performing on real patients.</li>
                <li><strong className="text-customRed">Therapeutic VR:</strong> VR is used in pain management and PTSD treatment by immersing patients in calming environments.</li>
                <li><strong className="text-customRed">Remote Consultations:</strong> Doctors can conduct virtual consultations with patients, making healthcare more accessible.</li>
              </ul>
            </div>
            <div className="flex-1">
              <Image
                src="/svgs/healthcare.svg"
                alt="Healthcare VR"
                layout="responsive"
                width={200}   // Specify the width of the image
                height={100}  // Specify the height of the image
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Gaming */}
          <div className="flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
  <div className="flex-1 mr-8 mb-6 md:mb-0">
    <Image
      src="/svgs/game_2.svg" 
      alt="Gaming VR"
      layout="responsive"
      width={200}   // Specify the width of the image
      height={100}  // Specify the height of the image
      className="w-full h-auto object-contain rounded-lg"
    />
  </div>
  <div className="flex-1 mx-10">
    <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-customRed text-customRed">
      Exploring Games with VR
    </h2>
    <p className="text-lg mb-6">
      VR is revolutionizing the gaming industry by providing immersive gameplay experiences. Players can explore expansive virtual worlds, interact with characters, and experience a new level of engagement in their favorite games.
    </p>
    <ul className="list-disc list-inside space-y-4">
      <li>
        <strong className="text-customRed">Virtual Game Previews:</strong> Dive into immersive game worlds before making a purchase decision.
      </li>
      <li>
        <strong className="text-customRed">Live Gameplay:</strong> Participate in live, multiplayer VR experiences with players from around the world.
      </li>
      <li>
        <strong className="text-customRed">Immersive Game Design:</strong> Explore game mechanics and environments that are fully designed to be experienced in VR.
      </li>
    </ul>
  </div>
</div>



          {/* Education */}
          <div className="flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-customRed text-customRed">
                Enhancing Education with VR
              </h2>
              <p className="text-lg mb-6">
                Virtual Reality is transforming the way education is delivered. With VR, students can explore new concepts in 3D environments, practice complex tasks, and experience history or science in immersive ways.
              </p>
              <ul className="list-disc list-inside space-y-4">
                <li><strong className="text-customRed">Virtual Field Trips:</strong> Students can visit historical sites, museums, and even outer space without leaving the classroom.</li>
                <li><strong className="text-customRed">3D Learning Modules:</strong> Complex subjects like anatomy or physics can be visualized in 3D for better understanding.</li>
                <li><strong className="text-customRed">Simulation-Based Learning:</strong> Students can practice real-life skills, such as piloting aircraft or performing surgeries, in a safe virtual environment.</li>
              </ul>
            </div>
            <div className="flex-1">
              <Image
                src="/svgs/education.svg"
                alt="Education VR"
                layout="responsive"
                width={200}   // Specify the width of the image
                height={100}  // Specify the height of the image
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Tourism */}
          <div className="flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
  <div className="flex-1">
    <Image
      src="/svgs/tajmahal.svg"
      alt="Tourism VR"
      layout="responsive"
      width={200}   // Specify the width of the image
      height={100}  // Specify the height of the image
      className="w-full h-auto object-contain rounded-lg"
    />
  </div>
  <div className="flex-1 mx-10">
    <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-customRed text-customRed">
      Exploring Tourism with VR
    </h2>
    <p className="text-lg mb-6">
      VR is enabling tourists to explore destinations before booking a trip, providing virtual tours of landmarks, hotels, and cities. This immersive experience helps travelers make informed decisions and enhances the overall planning process.
    </p>
    <ul className="list-disc list-inside space-y-4">
      <li>
        <strong className="text-customRed">Virtual Tours:</strong> Take virtual tours of famous landmarks and destinations around the world.
      </li>
      <li>
        <strong className="text-customRed">Hotel Previews:</strong> Explore hotel rooms, amenities, and facilities before making reservations.
      </li>
      <li>
        <strong className="text-customRed">Immersive Travel Planning:</strong> Plan trips and explore potential travel routes, all virtually before you go.
      </li>
    </ul>
  </div>
</div>

        </div>
      </div>

      {/* VR Experience Video */}
      <div className=" bg-stone-950 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-customRed">Experience the Power of Virtual Reality</h2>
        <iframe
          className="w-full h-96"
          src="https://www.youtube.com/embed/Rb6y8DHHwOg"
          title="VR Experience Showcase"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Contact Us */}
      <ContactUs title="" />
    </>
  );
};

export default VRTechnology;
