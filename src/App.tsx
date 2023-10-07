import "./App.css";
import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.webp";
import car3 from "./assets/car3.jpg";
import car4 from "./assets/car4.webp";
import car5 from "./assets/car5.webp";
import type { Image } from "./Slider";
import { Slider } from "./Slider";

const IMAGES: Image[] = [
    { url: car1, alt: "car image one" },
    { url: car2, alt: "car image two" },
    { url: car3, alt: "car image three" },
    { url: car4, alt: "car image four" },
    { url: car5, alt: "car image five" },
];

function App() {
    return (
        <div className="container">
            <Slider images={IMAGES} />
            <a href="/" style={{ fontSize: "4rem", color: "black" }}>
                Link
            </a>
        </div>
    );
}

export default App;
