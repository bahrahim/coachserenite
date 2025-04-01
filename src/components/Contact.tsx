

const Contact = () => {
  const handleContactClick = () => {
    // Placeholder for Calendly redirection
    alert("Le Calendly n'est pas encore créé. Cette fonctionnalité sera disponible prochainement.");
    // When Calendly is ready, uncomment the line below and replace with actual Calendly URL
    // window.open('https://calendly.com/coach-serenite/diagnostic', '_blank');
  };

  return (
    <section className="w-full py-16 px-8 md:px-16 bg-purple-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <div className="ml-4">
            <div className="relative inline-block">
              <h2 className="text-5xl font-bold">Alors on en discute ?</h2>
              <img
                  src={`${import.meta.env.BASE_URL}traits_violet.png`}
                  alt="Décoration"
                  className="absolute -top-2 left-[99%] w-12"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img 
              src="streching.jpg" 
              alt="Femme faisant de l'exercice" 
              className="w-full h-auto rounded-md grayscale"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <p className="ml-4 text-lg">Vous réservez un créneau de rendez-vous dans mon agenda</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <p className="ml-4 text-lg">On fait le point sur vos objectifs et sur vos attentes</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <p className="ml-4 text-lg">On identifie le programme qui vous correspond</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <p className="ml-4 text-lg">On définit ensemble une date de démarrage</p>
              </div>
            </div>
            <div>
              <button 
                onClick={handleContactClick}
                className="bg-pink-50 hover:bg-pink-100 text-black font-bold py-3 px-8 rounded-md transition duration-300 text-xl"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;