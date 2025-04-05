const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 relative overflow-hidden">
      <style>
        {`
          @keyframes pulseGlow {
            0%, 100% {
              transform: scale(1);
              opacity: 0.6;
              box-shadow: none;
            }
            50% {
              transform: scale(1.15);
              opacity: 1;
              box-shadow: 0 0 25px rgba(99, 102, 241, 0.35);
            }
          }

          @keyframes iconFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-6px);
            }
          }

          .tile {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 0.75rem;
            backdrop-filter: blur(4px);
            background-color: rgba(0,0,0,0.03);
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulseGlow 3s ease-in-out infinite;
          }

          .tile:nth-child(4),
          .tile:nth-child(5),
          .tile:nth-child(6) {
            animation-delay: 0.4s;
          }

          .tile:nth-child(7),
          .tile:nth-child(8),
          .tile:nth-child(9) {
            animation-delay: 0.8s;
          }

          .tile:hover {
            transform: scale(1.15);
            box-shadow: 0 0 35px rgba(129, 140, 248, 0.5);
            background-color: rgba(129, 140, 248, 0.1);
          }

          .ai-icon {
            font-size: 1.8rem;
            animation: iconFloat 2.5s ease-in-out infinite;
          }

          @media (prefers-color-scheme: dark) {
            .tile {
              background-color: rgba(255, 255, 255, 0.05);
            }
          }

          @media (prefers-color-scheme: light) {
            .tile {
              background-color: rgba(0, 0, 0, 0.04);
            }
          }
        `}
      </style>

      <div className="max-w-md text-center z-10">
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            "🤖", "🧠", "📡",
            "⚙️", "💡", "🔍",
            "🌐", "🛠️", "📊"
          ].map((icon, i) => (
            <div key={i} className="aspect-square tile">
              <div className="ai-icon">{icon}</div>
            </div>
          ))}
        </div>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-md mb-4">
          {title}
        </h2>
        <p className="text-base-content/70 text-lg tracking-wide leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
