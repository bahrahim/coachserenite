const Method = () => {
  return (
      <section className="w-full py-16 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="ml-4">
              <div className="relative inline-block">
                <h2 className="font-yeseva text-5xl font-bold">Methode</h2>
                <img
                    src={`${import.meta.env.BASE_URL}traits_violet.png`}
                    alt="Décoration"
                    className="absolute -top-2 left-[99%] w-12"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-lg mb-12 max-w-4xl">
              Le bien-être repose sur plusieurs piliers essentiels. Pour chacun de ces piliers, j'ai créé un programme sur
              mesure vers lequel je vous oriente en fonction de votre profil.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-200 p-8 rounded-md flex flex-col items-center text-center">
                <h3 className="text-3xl font-bold mb-6 text-white">LA TÊTE</h3>
                <p className="text-lg">
                  Programme mental pour vous organiser et réaliser vos objectifs.
                </p>
                <div className="mb-6">
                  <img
                      src={`${import.meta.env.BASE_URL}4.png`}
                      alt="la tete"
                      width={64}
                      height={64}
                      className="text-white pt-10"
                  />
                </div>
              </div>

              <div className="bg-red-200 p-8 rounded-md flex flex-col items-center text-center">
                <h3 className="text-3xl font-bold mb-6 text-white">LE CŒUR</h3>
                <p className="text-lg">
                  Programme de connaissance de soi pour vous détacher et gérer votre stress.
                </p>
                <div className="mb-6">
                  <img
                      src={`${import.meta.env.BASE_URL}5.png`}
                      alt="le coeur"
                      width={64}
                      height={64}
                      className="text-white pt-8"
                  />
                </div>
              </div>

              <div className="bg-blue-200 p-8 rounded-md flex flex-col items-center text-center">
                <h3 className="text-3xl font-bold mb-6 text-white">LE CORPS</h3>
                <p className="text-lg">
                  Programme physique pour vous organiser et réaliser vos objectifs.
                </p>
                <div className="mb-6">
                  <img
                      src={`${import.meta.env.BASE_URL}6.png`}
                      alt="le corps"
                      width={64}
                      height={64}
                      className="text-white pt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Method;
