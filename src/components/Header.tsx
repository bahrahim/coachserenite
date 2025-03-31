const Header = () => {
  const handleDiagnosticClick = () => {
    // Placeholder for Calendly redirection
    window.open('https://calendly.com/alisoncoachserenite/diagnostic-gratuit', '_blank');
  };

  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="flex items-center">
        <img 
          src="/logo.png" 
          alt="Coach Sérénité Logo" 
          className="w-24 h-24"
        />
      </div>
      <div>
        <button 
          onClick={handleDiagnosticClick}
          className="bg-purple-200 hover:bg-purple-300 text-black font-bold py-2 px-6 rounded-md transition duration-300"
        >
          Faire un diagnostic gratuit
        </button>
      </div>
    </header>
  );
};

export default Header;