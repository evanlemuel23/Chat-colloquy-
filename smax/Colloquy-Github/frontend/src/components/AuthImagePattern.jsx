const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-base-200 via-base-300 to-base-100 p-12">
      <div className="max-w-md text-center">
        {/* Glowing Animated Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl 
                bg-gradient-to-br from-primary/20 to-primary/40 
                shadow-lg shadow-primary/20
                backdrop-blur-sm
                transform transition duration-500 ease-in-out 
                hover:scale-105 hover:rotate-1
                ${
                  i % 2 === 0
                    ? "animate-[pulse_2s_ease-in-out_infinite]"
                    : "animate-[ping_3s_ease-in-out_infinite]"
                }`}
            />
          ))}
        </div>
        
        {/* Title and Subtitle */}
        <h2 className="text-3xl font-extrabold text-primary mb-4 drop-shadow-lg">
          {title}
        </h2>
        <p className="text-base-content/70 font-medium tracking-wide">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
