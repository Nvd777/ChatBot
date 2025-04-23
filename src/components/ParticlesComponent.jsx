import { useEffect, useState } from "react";

const ParticlesComponent = () => {
    const [config, setConfig] = useState(null);

    useEffect(() => {
        fetch("/particles.json") // Fetch the JSON file
            .then((response) => response.json())
            .then((data) => {
                setConfig(data);
                if (window.particlesJS) {
                    window.particlesJS("particles-container", data);
                }
            })
            .catch((error) => console.error("Error loading particles.json:", error));
    }, []);

    return <div id="particles-container" style={{ position: "absolute", width: "100%", height: "100vh", zIndex: "-1" }} />;
};

export default ParticlesComponent;

































// import { useEffect } from "react";

// const ParticlesComponent = () => {
//     useEffect(() => {
//         if (window.particlesJS) {
//       window.particlesJS("particles-container", {
//         particles: {
//           number: { value: 60 },
//           color: { value: "#ce0808" },
//           shape: { type: "circle" },
//           opacity: { value: 10.5, random: true },
//           size: { value: 5, random: true },
//           line_linked: { enable: true, distance: 200, color: "#18e922" },
//           move: { enable: true, speed: 5 }
//         }
//     });
// }
// }, []);

// return <div id="particles-container" style={{ position: "absolute", width: "100%", height: "100vh", zIndex: "-1" }} />;
// };

// export default ParticlesComponent;
