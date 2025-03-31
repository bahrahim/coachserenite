import { MapPin, Instagram, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
      <section className="w-full py-16 px-8 md:px-16 relative">
        <div className="">
          <div className="flex items-center mb-12 relative">
            <h2 className="text-5xl font-black relative">Qui suis-je ?</h2>

            {/* Image des traits violets positionnée en haut à droite du point d'interrogation */}
            <img
                src="/traits_violet.png"
                alt="Guillemets violets"
                className="absolute -top-2 right-60 w-12 h-12"
            />
          </div>

          <div className="flex flex-col md:flex-row bg-rose-100 ">
            <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 p-4">
              <p className="text-lg mb-8">
                Sportive de haut niveau, je suis aussi une pédagogue expérimentée et polyvalente :
                professeur d'EPS, et coach bien-être diplômée dans les domaines du sport,
                de la nutrition et de la préparation mentale.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin size={24} className="mr-4" />
                  <p className="text-lg font-bold">Secteur Douai</p>
                </div>

                <div className="flex items-center">
                  <Instagram size={24} className="mr-4" />
                  <p className="text-lg font-bold">coachserenite</p>
                </div>

                <div className="flex items-center">
                  <Mail size={24} className="mr-4" />
                  <p className="text-lg font-bold">alisoncoachserenite@gmail.com</p>
                </div>

                <div className="flex items-center">
                  <Phone size={24} className="mr-4" />
                  <p className="text-lg font-bold">07 81 05 55 48</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <img
                  src="alison.jpg"
                  alt="Coach sportive en action"
                  className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
