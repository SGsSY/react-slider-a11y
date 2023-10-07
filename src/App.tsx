import "./App.css";
import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.webp";
import car3 from "./assets/car3.jpg";
import car4 from "./assets/car4.webp";
import car5 from "./assets/car5.webp";
import { Slider } from "./Slider";

const IMAGE_URLS = [car1, car2, car3, car4, car5];

function App() {
    return (
        <div className="container">
            <Slider images={IMAGE_URLS} />
        </div>
    );
}

export default App;
