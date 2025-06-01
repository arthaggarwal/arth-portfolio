import React from "react";
import "../homepage.css";

const techStack = [
  {
    name: "JavaScript",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect
          x="6"
          y="6"
          width="28"
          height="28"
          rx="6"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="2"
        />
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fill="#dd7596"
          fontSize="13"
          fontFamily="monospace"
          dy=".3em"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <circle
          cx="20"
          cy="20"
          r="15"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="2"
        />
        <circle cx="20" cy="20" r="4" fill="#dd7596" />
        <ellipse
          cx="20"
          cy="20"
          rx="10"
          ry="4"
          transform="rotate(30 20 20)"
          fill="transparent"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="10"
          ry="4"
          transform="rotate(90 20 20)"
          fill="transparent"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="10"
          ry="4"
          transform="rotate(150 20 20)"
          fill="transparent"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "React Native",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <circle
          cx="20"
          cy="20"
          r="15"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="2"
        />
        <circle cx="20" cy="20" r="3" fill="#dd7596" />
        <ellipse
          cx="20"
          cy="20"
          rx="12"
          ry="4.5"
          transform="rotate(30 20 20)"
          fill="transparent"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="12"
          ry="4.5"
          transform="rotate(90 20 20)"
          fill="transparent"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
        <rect
          x="12"
          y="12"
          width="16"
          height="16"
          rx="3"
          fill="transparent"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <path
          d="M20 5C16 5 13 6 13 10V14H21V15H9C6 15 4 17 4 21C4 25 6 27 9 27H12V23C12 20 14 18 17 18H24C27 18 28 17 28 14V10C28 6 25 5 20 5Z"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
        <path
          d="M20 35C24 35 27 34 27 30V26H19V25H31C34 25 36 23 36 19C36 15 34 13 31 13H28V17C28 20 26 22 23 22H16C13 22 12 23 12 26V30C12 34 15 35 20 35Z"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
        <circle cx="15" cy="10" r="1.5" fill="#dd7596" />
        <circle cx="25" cy="30" r="1.5" fill="#dd7596" />
      </svg>
    ),
  },
  {
    name: "Git",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect x="4" y="4" width="32" height="32" rx="4" fill="#181818" />
        <g transform="translate(8, 8) scale(1.1)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z"
            fill="#dd7596"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "scikit-learn",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect
          x="5"
          y="5"
          width="30"
          height="30"
          rx="4"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="2"
        />
        <path
          d="M22 10C25.5 11 28 14 28 18C28 22 25.3 25.5 21.5 26.5"
          stroke="#dd7596"
          strokeWidth="1.5"
          fill="transparent"
        />
        <path
          d="M18 30C14.5 29 12 26 12 22C12 18 14.7 14.5 18.5 13.5"
          stroke="#dd7596"
          strokeWidth="1.5"
          fill="transparent"
        />
        <circle
          cx="20"
          cy="12"
          r="3"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="20"
          r="3"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
        <circle
          cx="20"
          cy="28"
          r="3"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
        <circle
          cx="28"
          cy="20"
          r="3"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "NumPy",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect
          x="4"
          y="4"
          width="32"
          height="32"
          rx="3"
          fill="#181818"
          stroke="none"
        />
        <g transform="translate(5, 4) scale(0.12)">
          <path
            d="M191.54779,186.292389 L191.607285,246.81213 L137.903038,273.611369 L137.903038,213.11807 L191.54779,186.292389 Z M256.000818,153.946885 L256.000818,214.678164 L210.196199,237.537504 L210.163146,177.083869 L256.000818,153.946885 Z M191.468463,105.286501 L191.527958,165.171627 L137.903038,191.818823 L137.903038,131.913865 L191.468463,105.286501 Z M256.000818,73.2054191 L256.000818,132.713743 L210.149925,156.022603 L210.110262,96.0184858 L256.000818,73.2054191 Z M129.738988,66.1651652 L177.67221,90.3598405 L127.940914,115.334563 L80.9133402,91.7150067 L129.738988,66.1651652 Z M63.0648093,32.5107686 L108.783491,55.588258 L59.8454631,81.1314889 L12.8906057,57.5515964 L63.0648093,32.5107686 Z M193.755719,32.8611286 L242.997833,57.5515964 L198.958235,79.6705536 L150.925855,55.4428255 L193.755719,32.8611286 Z M128.231779,0 L172.562241,22.2247263 L130.056295,44.9188028 L84.3772773,21.8809768 L128.231779,0 Z"
            fill="#dd7596"
            stroke="#dd7596"
            strokeWidth="0.5"
          ></path>
          <path
            d="M118.943932,131.913865 L82.7709095,113.728195 L82.7709095,192.334447 C82.7709095,192.334447 38.5329951,98.2065835 34.4344436,89.7516683 C33.9055982,88.6609247 31.7307216,87.4644121 31.175434,87.1735472 C23.2427536,83.0088899 0,71.2354701 0,71.2354701 L0,210.110262 L32.1537979,227.297736 L32.1537979,154.7071 C32.1537979,154.7071 75.9223621,238.813344 76.3652701,239.732213 C76.8081781,240.651081 81.2042052,249.515852 85.8977077,252.629429 C92.1513041,256.767644 118.950543,272.884206 118.950543,272.884206 L118.943932,131.913865 Z"
            fill="#dd7596"
            stroke="#dd7596"
            strokeWidth="0.5"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "HTML",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <g transform="translate(5, 2.5) scale(1.8)">
          <path
            d="M15.54 0.5l-1.28 14.379-5.78 1.621-5.74-1.621-1.28-14.379h14.080zM12.92 3.439h-8.84l0.47 5.34h6.121l-0.222 2.279-1.969 0.532-1.96-0.531-0.13-1.399h-1.749l0.22 2.779 3.62 1h0.039v-0.010l3.591-0.99 0.5-5.44h-6.441l-0.15-1.81h6.74l0.16-1.75z"
            fill="#dd7596"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "CSS",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <g transform="translate(5, 2) scale(0.06)">
          <path
            d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302 H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606 l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062 l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"
            fill="#dd7596"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "OpenCV",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect
          x="5"
          y="5"
          width="30"
          height="30"
          rx="4"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
        <circle
          cx="20"
          cy="20"
          r="8"
          stroke="#dd7596"
          strokeWidth="1.5"
          fill="transparent"
        />
        <circle cx="20" cy="20" r="3" fill="#dd7596" />
        <path d="M15 15L10 10" stroke="#dd7596" strokeWidth="1.5" />
        <path d="M25 15L30 10" stroke="#dd7596" strokeWidth="1.5" />
        <path d="M15 25L10 30" stroke="#dd7596" strokeWidth="1.5" />
        <path d="M25 25L30 30" stroke="#dd7596" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <g transform="translate(6, 4) scale(0.9)">
          <path
            d="M18.874 9.935l-2.274-4.351c-0.116-0.217-0.341-0.363-0.6-0.363s-0.484 0.145-0.598 0.359l-0.002 0.004-9.985 17.894z"
            fill="#181818"
            stroke="#dd7596"
            strokeWidth="1.5"
          />
          <path
            d="M26.852 25.202l-2.812-17.495c-0.052-0.325-0.331-0.571-0.667-0.571-0.189 0-0.359 0.077-0.482 0.202l-0 0-17.744 17.865 9.817 5.532c0.286 0.163 0.628 0.26 0.992 0.26s0.707-0.096 1.002-0.265l-0.010 0.005z"
            fill="#181818"
            stroke="#dd7596"
            strokeWidth="1.5"
          />
          <path
            d="M5.865 20.589l2.955-19.008c0.051-0.328 0.331-0.577 0.67-0.577 0.258 0 0.483 0.144 0.597 0.357l0.002 0.004 3.178 5.962z"
            fill="#181818"
            stroke="#dd7596"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Raspberry Pi",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect
          x="8"
          y="10"
          width="24"
          height="20"
          rx="2"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="14" r="1" fill="#dd7596" />
        <circle cx="12" cy="18" r="1" fill="#dd7596" />
        <circle cx="12" cy="22" r="1" fill="#dd7596" />
        <circle cx="12" cy="26" r="1" fill="#dd7596" />
        <circle cx="28" cy="14" r="1" fill="#dd7596" />
        <circle cx="28" cy="18" r="1" fill="#dd7596" />
        <circle cx="28" cy="22" r="1" fill="#dd7596" />
        <circle cx="28" cy="26" r="1" fill="#dd7596" />
        <rect
          x="16"
          y="14"
          width="8"
          height="6"
          rx="1"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="1"
        />
        <rect x="16" y="23" width="2" height="2" fill="#dd7596" />
        <rect x="19" y="23" width="2" height="2" fill="#dd7596" />
        <rect x="22" y="23" width="2" height="2" fill="#dd7596" />
      </svg>
    ),
  },
];

const TechStack = () => (
  <div className="skills-section">
    <h2 className="skills-header">Tech Stack</h2>
    <div className="skills-icons">
      {techStack.map((tech) => (
        <div className="skill-item" key={tech.name}>
          {tech.svg}
          <span className="skill-label">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TechStack;
