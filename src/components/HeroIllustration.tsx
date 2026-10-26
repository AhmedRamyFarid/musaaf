// Hero medical illustration SVG
export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full max-w-md mx-auto"
      role="img"
    >
      {/* Background circle layers */}
      <circle cx="240" cy="240" r="220" fill="#E8F3FA" opacity="0.08" />
      <circle cx="240" cy="240" r="180" fill="#E8F3FA" opacity="0.06" />
      <circle cx="240" cy="240" r="140" fill="#E8F3FA" opacity="0.06" />

      {/* Pulse ring */}
      <circle cx="240" cy="240" r="160" stroke="#D92736" strokeWidth="1.5" opacity="0.2" className="pulse-ring" />

      {/* Medical cross – background square */}
      <rect x="170" y="160" width="140" height="140" rx="20" fill="#124A78" />
      {/* Cross arms */}
      <rect x="198" y="185" width="84" height="30" rx="8" fill="white" />
      <rect x="225" y="170" width="30" height="60" rx="8" fill="white" />
      {/* Second arm pair */}
      <rect x="198" y="245" width="84" height="30" rx="8" fill="white" />
      <rect x="225" y="230" width="30" height="60" rx="8" fill="white" />

      {/* ECG / heartbeat line */}
      <polyline
        points="30,280 90,280 115,230 140,330 165,250 185,280 295,280 320,240 340,310 360,280 450,280"
        stroke="#D92736"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="ecg-animated"
      />

      {/* Small heart */}
      <path
        d="M240 390 C240 390 210 370 210 350 C210 338 220 330 230 335 C235 337 240 342 240 342 C240 342 245 337 250 335 C260 330 270 338 270 350 C270 370 240 390 240 390Z"
        fill="#D92736"
        className="heartbeat"
      />

      {/* Floating plus icons */}
      <g className="float-anim" style={{ transformOrigin: '80px 120px' }}>
        <rect x="72" y="112" width="16" height="5" rx="2.5" fill="#124A78" opacity="0.6" />
        <rect x="77" y="107" width="5" height="16" rx="2.5" fill="#124A78" opacity="0.6" />
      </g>
      <g className="float-slow" style={{ transformOrigin: '400px 150px' }}>
        <rect x="393" y="143" width="14" height="4" rx="2" fill="#D92736" opacity="0.5" />
        <rect x="397" y="139" width="4" height="14" rx="2" fill="#D92736" opacity="0.5" />
      </g>

      {/* Floating dots */}
      <circle cx="60" cy="200" r="6" fill="#E8F3FA" opacity="0.5" className="float-anim" />
      <circle cx="420" cy="200" r="5" fill="#D92736" opacity="0.4" className="float-slow" />
      <circle cx="120" cy="380" r="7" fill="#124A78" opacity="0.3" className="float-anim" />
      <circle cx="380" cy="370" r="5" fill="#E8F3FA" opacity="0.4" className="float-slow" />

      {/* Stethoscope hint */}
      <path
        d="M380 120 C380 120 390 130 390 145 C390 160 378 165 370 155 C362 145 370 130 380 120Z"
        fill="none"
        stroke="#E8F3FA"
        strokeWidth="2.5"
        opacity="0.4"
      />
      <circle cx="370" cy="158" r="8" fill="none" stroke="#E8F3FA" strokeWidth="2" opacity="0.4" />
    </svg>
  )
}

