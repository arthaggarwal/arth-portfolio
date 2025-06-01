const projects = [
  {
    header: "Open House App",
    body: "This was an app created for the Open House event in 2025 and 2024. It helped visitors navigate and better understand what was offered at the Open House.",
    link: "https://github.com/sst-inc/openhouseapp",
    Icon: () => (
      <svg
        fill="#dd7596"
        width="40px"
        height="40px"
        viewBox="7 2 18 28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {/* Smartphone body */}
          <path d="M22,2H10C8.346,2,7,3.346,7,5v22c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V5C25,3.346,23.654,2,22,2z M23,27 c0,0.551-0.449,1-1,1H10c-0.551,0-1-0.449-1-1V5c0-0.551,0.449-1,1-1h12c0.551,0,1,0.449,1,1V27z"></path>
          {/* Home button */}
          <circle cx="16" cy="26" r="1.5"></circle>
          {/* App icons */}
          <rect x="11" y="7" width="4" height="4" rx="1"></rect>
          <rect x="17" y="7" width="4" height="4" rx="1"></rect>
          <rect x="11" y="13" width="4" height="4" rx="1"></rect>
          <rect x="17" y="13" width="4" height="4" rx="1"></rect>
          <rect x="11" y="19" width="4" height="4" rx="1"></rect>
          <rect x="17" y="19" width="4" height="4" rx="1"></rect>
        </g>
      </svg>
    ),
  },
  {
    header: "ASPA App",
    body: "This was an app created for ASPA to help the doctors calculate drug doses, assist in times of crisis and help in procedures. ",
    link: "https://github.com/arthaggarwal/aspa",
    Icon: () => (
      <svg
        fill="#dd7596"
        width="40px"
        height="40px"
        viewBox="7 2 18 28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {/* Smartphone body */}
          <path d="M22,2H10C8.346,2,7,3.346,7,5v22c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V5C25,3.346,23.654,2,22,2z M23,27 c0,0.551-0.449,1-1,1H10c-0.551,0-1-0.449-1-1V5c0-0.551,0.449-1,1-1h12c0.551,0,1,0.449,1,1V27z"></path>
          {/* Medical cross symbol */}
          <path d="M16,7c-0.552,0-1,0.448-1,1v3h-3c-0.552,0-1,0.448-1,1s0.448,1,1,1h3v3c0,0.552,0.448,1,1,1s1-0.448,1-1v-3h3 c0.552,0,1-0.448,1-1s-0.448-1-1-1h-3V8C17,7.448,16.552,7,16,7z"></path>
          {/* App interface elements */}
          <rect x="10" y="19" width="12" height="1.5" rx="0.75"></rect>
          <rect x="10" y="22" width="12" height="1.5" rx="0.75"></rect>
          {/* Home button */}
          <circle cx="16" cy="26" r="1.5"></circle>
        </g>
      </svg>
    ),
  },
  {
    header: "SST Virtual Tour",
    body: "This was a web app created for SST inorder to showcase the schools facilities and environments to prospective students made in a team.",
    link: "https://github.com/arthaggarwal/aspa",
    Icon: () => (
      <svg
        fill="#dd7596"
        width="40px"
        height="40px"
        viewBox="7 2 18 28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {/* Smartphone body */}
          <path d="M22,2H10C8.346,2,7,3.346,7,5v22c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V5C25,3.346,23.654,2,22,2z M23,27 c0,0.551-0.449,1-1,1H10c-0.551,0-1-0.449-1-1V5c0-0.551,0.449-1,1-1h12c0.551,0,1,0.449,1,1V27z"></path>
          {/* Map/navigation icon */}
          <path d="M19,8c-3.314,0-6,2.686-6,6c0,3.314,2.686,6,6,6c3.314,0,6-2.686,6-6C25,10.686,22.314,8,19,8z M19,18 c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4C23,16.209,21.209,18,19,18z"></path>
          <path d="M19,12c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2s2-0.895,2-2C21,12.895,20.105,12,19,12z"></path>
          {/* Navigation path */}
          <path d="M16,14l-3,4h-2c-0.552,0-1,0.448-1,1s0.448,1,1,1h3c0.334,0,0.646-0.167,0.832-0.445L17,15.5l2.168,3.055 C19.354,18.833,19.666,19,20,19h3c0.552,0,1-0.448,1-1s-0.448-1-1-1h-2l-3-4l-1,1.5L16,14z"></path>
          {/* Home button */}
          <circle cx="16" cy="26" r="1.5"></circle>
        </g>
      </svg>
    ),
  },
  {
    header: "Virtual Photobooth",
    body: "This was a virtual photobooth created for a computing school project which allowed user to take pictures with SST related props. Made in a team of 3.",
    link: "https://github.com/tedydevmac/virtualtour",
    Icon: () => (
      <svg
        fill="#dd7596"
        width="40px"
        height="40px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {/* Camera body */}
          <path d="M26,8h-4l-2-2c-0.2-0.2-0.4-0.3-0.7-0.3h-8.6c-0.3,0-0.5,0.1-0.7,0.3l-2,2H3C1.9,8,1,8.9,1,10v14c0,1.1,0.9,2,2,2h23c1.1,0,2-0.9,2-2V10C28,8.9,27.1,8,26,8z M16,22c-3.3,0-6-2.7-6-6s2.7-6,6-6c3.3,0,6,2.7,6,6S19.3,22,16,22z"></path>
          {/* Camera lens */}
          <path d="M16,12c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S18.2,12,16,12z M16,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S17.1,18,16,18z"></path>
          {/* AI Neural Network overlay */}
          <path d="M25,16.5c0,0.3-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5S25,16.2,25,16.5z"></path>
          <path d="M22,16.5c0,0.3-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5S22,16.2,22,16.5z"></path>
          <path d="M10,16.5c0,0.3-0.2,0.5-0.5,0.5S9,16.8,9,16.5s0.2-0.5,0.5-0.5S10,16.2,10,16.5z"></path>
          <path d="M7,16.5C7,16.8,6.8,17,6.5,17S6,16.8,6,16.5S6.2,16,6.5,16S7,16.2,7,16.5z"></path>
          <path d="M24.5,13c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5S24,13.8,24,13.5S24.2,13,24.5,13z"></path>
          <path d="M21.5,13c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5S21,13.8,21,13.5S21.2,13,21.5,13z"></path>
          <path d="M9.5,13c0.3,0,0.5,0.2,0.5,0.5S9.8,14,9.5,14S9,13.8,9,13.5S9.2,13,9.5,13z"></path>
          <path d="M6.5,13c0.3,0,0.5,0.2,0.5,0.5S6.8,14,6.5,14S6,13.8,6,13.5S6.2,13,6.5,13z"></path>
          <path d="M24.5,20c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5S24,20.8,24,20.5S24.2,20,24.5,20z"></path>
          <path d="M21.5,20c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5S21,20.8,21,20.5S21.2,20,21.5,20z"></path>
          <path d="M9.5,20c0.3,0,0.5,0.2,0.5,0.5S9.8,21,9.5,21S9,20.8,9,20.5S9.2,20,9.5,20z"></path>
          <path d="M6.5,20c0.3,0,0.5,0.2,0.5,0.5S6.8,21,6.5,21S6,20.8,6,20.5S6.2,20,6.5,20z"></path>
          {/* Neural network connections */}
          <path d="M24.5,13.5l-3,0" stroke="#dd7596" stroke-width="0.5"></path>
          <path d="M9.5,13.5l-3,0" stroke="#dd7596" stroke-width="0.5"></path>
          <path d="M24.5,20.5l-3,0" stroke="#dd7596" stroke-width="0.5"></path>
          <path d="M9.5,20.5l-3,0" stroke="#dd7596" stroke-width="0.5"></path>
          <path d="M24.5,13.5l0,7" stroke="#dd7596" stroke-width="0.5"></path>
          <path d="M21.5,13.5l0,7" stroke="#dd7596" stroke-width="0.5"></path>
          <path d="M9.5,13.5l0,7" stroke="#dd7596" stroke-width="0.5"></path>
          <path d="M6.5,13.5l0,7" stroke="#dd7596" stroke-width="0.5"></path>
          <path d="M21.5,13.5l-12,0" stroke="#dd7596" stroke-width="0.5"></path>
          <path d="M21.5,20.5l-12,0" stroke="#dd7596" stroke-width="0.5"></path>
        </g>
      </svg>
    ),
  },
  {
    header: "IDC",
    body: "This was a school project where I had to create a disaster management robot with computer vision capabilities in a team. ",
    link: "https://www.canva.com/design/DAGn4IX0aTc/MESOoabmtG-DYFPfY20CZg/view?utm_content=DAGn4IX0aTc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf96815543d",
    Icon: () => (
      <svg
        fill="#dd7596"
        width="40px"
        height="40px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {/* Robot body */}
          <rect x="8" y="14" width="16" height="12" rx="2" ry="2"></rect>

          {/* Robot head */}
          <rect x="10" y="8" width="12" height="6" rx="1" ry="1"></rect>

          {/* Robot eyes/cameras */}
          <circle cx="13" cy="11" r="1.5"></circle>
          <circle cx="19" cy="11" r="1.5"></circle>

          {/* Camera lens detail */}
          <circle
            cx="13"
            cy="11"
            r="0.6"
            fill="none"
            stroke="#dd7596"
            stroke-width="0.4"
          ></circle>
          <circle
            cx="19"
            cy="11"
            r="0.6"
            fill="none"
            stroke="#dd7596"
            stroke-width="0.4"
          ></circle>

          {/* Robot wheels */}
          <circle cx="11" cy="28" r="2"></circle>
          <circle cx="21" cy="28" r="2"></circle>
          <rect x="9" y="26" width="4" height="4" rx="2" ry="2"></rect>
          <rect x="19" y="26" width="4" height="4" rx="2" ry="2"></rect>

          {/* Robot arms */}
          <path
            d="M8,18 L4,20 A1,1 0 0,0 4,22 L7,21"
            stroke="#dd7596"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
          <path
            d="M24,18 L28,20 A1,1 0 0,1 28,22 L25,21"
            stroke="#dd7596"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>

          {/* Robot sensors */}
          <rect x="14" y="6" width="4" height="2" rx="1" ry="1"></rect>

          {/* Computer vision waves */}
          <path
            d="M13,9 C11,7 10,7 8,7"
            stroke="#dd7596"
            stroke-width="0.6"
            stroke-linecap="round"
            fill="none"
            stroke-dasharray="1,1"
          ></path>
          <path
            d="M19,9 C21,7 22,7 24,7"
            stroke="#dd7596"
            stroke-width="0.6"
            stroke-linecap="round"
            fill="none"
            stroke-dasharray="1,1"
          ></path>

          {/* Disaster management symbols */}
          <path
            d="M12,17 L16,17 L16,21 L12,21 Z"
            stroke="#dd7596"
            fill="none"
            stroke-width="0.8"
          ></path>
          <path
            d="M16,17 L20,17 L20,21 L16,21 Z"
            stroke="#dd7596"
            fill="none"
            stroke-width="0.8"
          ></path>
          <path d="M16,21 L16,23" stroke="#dd7596" stroke-width="0.8"></path>
          <path d="M14,19 L18,19" stroke="#dd7596" stroke-width="0.8"></path>

          {/* Emergency light */}
          <path
            d="M16,4 L16,6"
            stroke="#dd7596"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
          <path
            d="M14,4.5 L18,4.5"
            stroke="#dd7596"
            stroke-width="0.6"
            stroke-linecap="round"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    header: "ML Model",
    body: "This was a school project where I created a machine learning model to predict which messages are offensive against the LGBTQ+ community in a team.",
    link: "https://github.com/tedydevmac/S3T3CPPT",
    Icon: () => (
      <svg
        fill="#dd7596"
        width="40px"
        height="40px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {/* Base rectangular frame */}
          <rect
            x="4"
            y="4"
            width="24"
            height="24"
            rx="3"
            ry="3"
            fill="none"
            stroke="#dd7596"
            stroke-width="1.5"
          ></rect>

          {/* Neural Network Nodes (Layer 1) */}
          <circle cx="8" cy="10" r="2"></circle>
          <circle cx="8" cy="16" r="2"></circle>
          <circle cx="8" cy="22" r="2"></circle>

          {/* Neural Network Nodes (Layer 2) */}
          <circle cx="16" cy="8" r="2"></circle>
          <circle cx="16" cy="15" r="2"></circle>
          <circle cx="16" cy="22" r="2"></circle>

          {/* Neural Network Nodes (Layer 3) */}
          <circle cx="24" cy="10" r="2"></circle>
          <circle cx="24" cy="20" r="2"></circle>

          {/* Network connections */}
          {/* Layer 1 to 2 */}
          <path d="M10,10 L14,8" stroke="#dd7596" stroke-width="0.8"></path>
          <path d="M10,10 L14,15" stroke="#dd7596" stroke-width="0.8"></path>
          <path d="M10,16 L14,8" stroke="#dd7596" stroke-width="0.8"></path>
          <path d="M10,16 L14,15" stroke="#dd7596" stroke-width="0.8"></path>
          <path d="M10,16 L14,22" stroke="#dd7596" stroke-width="0.8"></path>
          <path d="M10,22 L14,15" stroke="#dd7596" stroke-width="0.8"></path>
          <path d="M10,22 L14,22" stroke="#dd7596" stroke-width="0.8"></path>

          {/* Layer 2 to 3 */}
          <path d="M18,8 L22,10" stroke="#dd7596" stroke-width="0.8"></path>
          <path d="M18,8 L22,20" stroke="#dd7596" stroke-width="0.8"></path>
          <path d="M18,15 L22,10" stroke="#dd7596" stroke-width="0.8"></path>
          <path d="M18,15 L22,20" stroke="#dd7596" stroke-width="0.8"></path>
          <path d="M18,22 L22,10" stroke="#dd7596" stroke-width="0.8"></path>
          <path d="M18,22 L22,20" stroke="#dd7596" stroke-width="0.8"></path>

          {/* Binary Classification Symbols */}
          <text x="24.5" y="10.5" font-size="2.5" fill="#dd7596">
            1
          </text>
          <text x="24.5" y="20.5" font-size="2.5" fill="#dd7596">
            0
          </text>
        </g>
      </svg>
    ),
  },
  {
    header: "Ball Launcher",
    body: "This was a school project where I created a ball launcher and analysed the physics and math behind it in a team.",
    link: "https://docs.google.com/document/d/1GTI-LV7S8sj7oQrMlSfrWx-nh5g6EH0CESsCAl6swLg/edit?usp=sharing",
    Icon: () => (
      <svg
        fill="#dd7596"
        width="40px"
        height="40px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {/* Base platform */}
          <rect x="2" y="24" width="28" height="4" rx="1" ry="1"></rect>

          {/* Launcher base */}
          <rect x="10" y="20" width="12" height="4" rx="1" ry="1"></rect>

          {/* Launcher arm */}
          <path
            d="M16,20 L16,8 A4,4 0 0,1 20,4 L23,4 A1,1 0 0,1 24,5 L24,7 A1,1 0 0,1 23,8 L20,8"
            stroke="#dd7596"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
          ></path>

          {/* Ball */}
          <circle cx="23" cy="13" r="3"></circle>

          {/* Trajectory path */}
          <path
            d="M24,10 C28,8 30,12 27,15 C24,18 26,22 28,21"
            stroke="#dd7596"
            fill="none"
            stroke-width="0.8"
            stroke-dasharray="1,1"
          ></path>

          {/* Physics equations */}
          <path
            d="M5,8 L8,8 M5,10 L9,10 M5,12 L7,12"
            stroke="#dd7596"
            stroke-width="0.8"
          ></path>

          {/* Angle indicator */}
          <path
            d="M16,20 A6,6 0 0,1 21,14"
            stroke="#dd7596"
            fill="none"
            stroke-width="0.8"
            stroke-dasharray="1,1"
          ></path>
          <path
            d="M18,18 L17.5,19 L18.5,19"
            stroke="#dd7596"
            fill="none"
            stroke-width="0.8"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    header: "Antenna",
    body: "This was a school project where I had to create an antenna and transmit and recieve morse code messages as well as decode them",
    link: "https://docs.google.com/document/d/1lRUonu-hGki8dvA0jqpxinsRXoOfYAsfKn9QCtVwt8Y/edit?usp=sharing",
    Icon: () => (
      <svg
        fill="#dd7596"
        width="40px"
        height="40px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {/* Base */}
          <rect x="12" y="26" width="8" height="2" rx="1"></rect>

          {/* Antenna pole */}
          <rect x="15" y="8" width="2" height="18"></rect>

          {/* Antenna elements */}
          <path
            d="M16,12 L5,7"
            stroke="#dd7596"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <path
            d="M16,16 L5,13"
            stroke="#dd7596"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <path
            d="M16,20 L5,19"
            stroke="#dd7596"
            stroke-width="2"
            stroke-linecap="round"
          ></path>

          <path
            d="M16,12 L27,7"
            stroke="#dd7596"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <path
            d="M16,16 L27,13"
            stroke="#dd7596"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <path
            d="M16,20 L27,19"
            stroke="#dd7596"
            stroke-width="2"
            stroke-linecap="round"
          ></path>

          {/* Signal waves */}
          <path
            d="M16,8 C18,6 19,6 21,6"
            stroke="#dd7596"
            stroke-width="0.8"
            stroke-linecap="round"
            fill="none"
          ></path>
          <path
            d="M16,8 C14,6 13,6 11,6"
            stroke="#dd7596"
            stroke-width="0.8"
            stroke-linecap="round"
            fill="none"
          ></path>

          <path
            d="M16,8 C20,4 22,4 26,4"
            stroke="#dd7596"
            stroke-width="0.8"
            stroke-linecap="round"
            fill="none"
          ></path>
          <path
            d="M16,8 C12,4 10,4 6,4"
            stroke="#dd7596"
            stroke-width="0.8"
            stroke-linecap="round"
            fill="none"
          ></path>

          {/* Morse code */}
          <path
            d="M2,28 L4,28"
            stroke="#dd7596"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
          <path
            d="M5,28 L8,28"
            stroke="#dd7596"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
          <path
            d="M9,28 L11,28"
            stroke="#dd7596"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
          <path
            d="M21,28 L23,28"
            stroke="#dd7596"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
          <path
            d="M24,28 L27,28"
            stroke="#dd7596"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
          <path
            d="M28,28 L30,28"
            stroke="#dd7596"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
        </g>
      </svg>
    ),
  },
];

export default projects;
