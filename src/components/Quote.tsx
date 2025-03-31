

const Quote = () => {
  return (
    <section className="w-full relative">
      <div className="relative">
        <img 
          src="woman.jpg" 
          alt="femme qui fait des exercices d'étirement" 
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="max-w-4xl p-8 text-center">
          <div className="absolute top-106 left-100">
              <img src="/public/Guillemets-violet.png" alt="Guillemets violets" width={60} height={60} />
            </div>
            <div className="bg-white p-7 opacity-25">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
              L'équilibre parfait réside dans l'union du corps, de l'esprit et de l'âme.
            </h2>
            <p className="text-xl text-black text-right font-bold"> Platon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;