/**
 * Step 1 Design Template — Candy Cane Method
 *
 * This React component established the design system for all 9 step
 * diagrams on fittedsheetguide.com. Originally built in Figma/React,
 * then translated to vanilla HTML/CSS for the live site.
 *
 * DESIGN SYSTEM TOKENS:
 * - Background: #F5F0EB
 * - Sheet rectangle fill: #EDE8E1
 * - Sheet border: 2px solid #7A9E8E
 * - Badge fill: #B8C5CC
 * - Green accent (nested/active): #C8D4C0
 * - All text: #2C2C2C
 * - Corner badges: rounded-xl, fontSize 14px, fontWeight 500
 * - Center labels: fontSize 15px, fontWeight 500
 * - Rotated side text: fontSize 13px
 * - Caption line 1: fontSize 13px, fontWeight 500
 * - Caption line 2: fontSize 15px, fontWeight 400
 * - Arrow color: #7A9E8E at 0.6 opacity
 * - All containers: width 100%, max-width 390px
 * - Sheet rectangle: width 90%, rounded-3xl
 */

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F5F0EB' }}>
      <div
        className="relative flex flex-col items-center"
        style={{ width: '390px', height: '500px', padding: '16px 0' }}
      >
        {/* Main sheet rectangle */}
        <div className="relative" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div
            className="relative rounded-3xl"
            style={{
              backgroundColor: '#EDE8E1',
              border: '2px solid #7A9E8E',
              width: '90%',
              height: '410px',
              padding: '20px'
            }}
          >
            {/* Top-left corner badge */}
            <div
              className="absolute rounded-full px-3 py-1.5"
              style={{
                top: '20px',
                left: '20px',
                backgroundColor: '#B8C5CC',
                color: '#2C2C2C',
                fontSize: '15px',
                fontWeight: '500'
              }}
            >
              far L
            </div>

            {/* Top-right corner badge */}
            <div
              className="absolute rounded-full px-3 py-1.5"
              style={{
                top: '20px',
                right: '20px',
                backgroundColor: '#B8C5CC',
                color: '#2C2C2C',
                fontSize: '15px',
                fontWeight: '500'
              }}
            >
              far R
            </div>

            {/* Center label */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
              style={{
                color: '#2C2C2C',
                fontSize: '15px',
                fontWeight: '500',
                marginTop: '-30px'
              }}
            >
              dull / seam side up
            </div>

            {/* Upward arrow */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: '50%',
                marginTop: '10px'
              }}
            >
              <svg
                width="24"
                height="32"
                viewBox="0 0 24 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L12 28M12 4L6 10M12 4L18 10"
                  stroke="#7A9E8E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
              </svg>
            </div>

            {/* Left side rotated text */}
            <div
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                left: '8px',
                color: '#2C2C2C',
                fontSize: '13px',
                fontWeight: '500',
                transform: 'translateY(-50%) rotate(-90deg)',
                transformOrigin: 'center',
                whiteSpace: 'nowrap'
              }}
            >
              long side
            </div>

            {/* Right side rotated text */}
            <div
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                right: '8px',
                color: '#2C2C2C',
                fontSize: '13px',
                fontWeight: '500',
                transform: 'translateY(-50%) rotate(90deg)',
                transformOrigin: 'center',
                whiteSpace: 'nowrap'
              }}
            >
              long side
            </div>

            {/* Bottom-left corner badge */}
            <div
              className="absolute rounded-xl px-3 py-1.5 flex flex-col items-center"
              style={{
                bottom: '16px',
                left: '16px',
                backgroundColor: '#B8C5CC',
                color: '#2C2C2C',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '1.2'
              }}
            >
              <div>L mitten</div>
              <div>seam out</div>
            </div>

            {/* Bottom-right corner badge */}
            <div
              className="absolute rounded-xl px-3 py-1.5 flex flex-col items-center"
              style={{
                bottom: '16px',
                right: '16px',
                backgroundColor: '#B8C5CC',
                color: '#2C2C2C',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '1.2'
              }}
            >
              <div>R mitten</div>
              <div>seam out</div>
            </div>
          </div>
        </div>

        {/* Caption text below */}
        <div className="flex flex-col items-center gap-1 mt-6 text-center px-8">
          <div
            style={{
              color: '#2C2C2C',
              fontSize: '13px',
              fontWeight: '500'
            }}
          >
            short end — start here
          </div>
          <div
            style={{
              color: '#2C2C2C',
              fontSize: '15px',
              fontWeight: '400'
            }}
          >
            slide hands into near corners — seams touching your fingers
          </div>
        </div>
      </div>
    </div>
  );
}
