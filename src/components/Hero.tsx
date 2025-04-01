
const Hero = () => {
  const handleDiagnosticClick = () => {
    // Placeholder for Calendly redirection
    alert("Le Calendly n'est pas encore créé. Cette fonctionnalité sera disponible prochainement.");
    // When Calendly is ready, uncomment the line below and replace with actual Calendly URL
    // window.open('https://calendly.com/coach-serenite/diagnostic', '_blank');
  };

  return (
    <section className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-pink-50 p-8 md:p-16 flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
          Votre bien-être commence ici.
        </h1>
        <p className="text-lg mb-8">
          Coach sérénité, la 1ère méthode pour une transformation profonde et durable.
        </p>
        <ul className="mb-8 space-y-2">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>3 aspects du bien-être selon vos besoins</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Un programme individuel et personnalisé</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Une coach certifiée à vos côtés</span>
          </li>
        </ul>
        <div>
          <button 
            onClick={handleDiagnosticClick}
            className="bg-purple-200 hover:bg-purple-300 text-black font-bold py-2 px-6 transition duration-300"
          >
            Faire un diagnostic gratuit
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-purple-100 p-8 flex items-center justify-center">
        <div className="relative">
          <div className="border-4 p-2 bg-purple-200 bg-opacity-50">
            <img 
              src="movOne.jpg" 
              alt="Femme faisant de l'exercice" 
              className="w-full h-auto max-w-md"
            />
          </div>
          <div className="absolute -right-16 bottom-0">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;