import React from 'react';
import { Brain, Heart, Activity, Lightbulb } from 'lucide-react';

const Program = () => {
  const sessions = [
    { id: 1, label: 'SÉANCE 1' },
    { id: 2, label: 'SÉANCE 2' },
    { id: 3, label: 'SÉANCE 3' },
    { id: 4, label: 'SÉANCE 4' },
    { id: 5, label: 'SÉANCE 5' },
    { id: 6, label: 'SÉANCE 6' },
  ];

  const headActivities = [
    "Se fixer des objectifs ambitieux et atteignables",
    "Rester centré(e) sur ses objectifs",
    "Discuter avec soi-même",
    "Se représenter ses objectifs",
    "Se projeter pour atteindre ses objectifs",
    "Comment te sens-tu avec ta tête ?"
  ];

  const heartActivities = [
    "Écouter son cœur et ses envies",
    "Se sonder",
    "Se relâcher sereinement",
    "Se détacher ici et maintenant",
    "Harmoniser son quotidien",
    "Comment te sens-tu avec ton cœur ?"
  ];

  const bodyActivities = [
    "Se tester",
    "Dessiner les jambes",
    "Sentir son cœur",
    "Se sentir gainé(e)",
    "Être à l'aise avec les bras",
    "Comment te sens-tu avec ton corps ?"
  ];

  return (
    <section className="w-full py-16 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-5xl font-black">Le programme</h2>
          <div className="ml-4">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10Z" fill="#E9D5E9" fillOpacity="0.2"/>
              <path d="M30 25L50 40L30 55" stroke="#E9D5E9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-12">
          <div className="w-full md:w-5/12 pr-0 md:pr-8 mb-8 md:mb-0">
            <p className="text-lg mb-8">
              Chaque programme se compose de 6 séances individuelles d'une heure, adaptées selon vos besoins et vos objectifs.
            </p>
            <div className="border border-gray-300 p-6 rounded-md relative">
              <div className="absolute -top-4 -right-4">
                <Lightbulb size={32} className="text-purple-400" />
              </div>
              <p className="text-center text-lg font-medium">
                Ces séances peuvent se dérouler en physique ou en visio.
              </p>
            </div>
          </div>

          <div className="w-full md:w-7/12">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-1"></div>
              <div className="col-span-1 bg-green-200 p-3 flex flex-col items-center justify-center rounded-md">
                <Brain size={24} className="mb-2" />
                <div className="text-center font-bold">LA TÊTE</div>
              </div>
              <div className="col-span-1 bg-red-200 p-3 flex flex-col items-center justify-center rounded-md">
                <Heart size={24} className="mb-2" />
                <div className="text-center font-bold">LE CŒUR</div>
              </div>
              <div className="col-span-1 bg-blue-200 p-3 flex flex-col items-center justify-center rounded-md">
                <Activity size={24} className="mb-2" />
                <div className="text-center font-bold">LE CORPS</div>
              </div>

              {sessions.map((session, index) => (
                <React.Fragment key={session.id}>
                  <div className="col-span-1 bg-pink-100 p-3 flex items-center justify-center rounded-md">
                    <div className="text-center font-bold">{session.label}</div>
                  </div>
                  <div className="col-span-1 bg-green-100 p-3 rounded-md">
                    <p className="text-sm">{headActivities[index]}</p>
                  </div>
                  <div className="col-span-1 bg-red-100 p-3 rounded-md">
                    <p className="text-sm">{heartActivities[index]}</p>
                  </div>
                  <div className="col-span-1 bg-blue-100 p-3 rounded-md">
                    <p className="text-sm">{bodyActivities[index]}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold">379€ net de taxes par programme de 6 séances</p>
        </div>
      </div>
    </section>
  );
};

export default Program;