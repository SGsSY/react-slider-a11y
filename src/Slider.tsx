import { useState } from "react";
import "./Slider.css";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

interface SliderProps {
    images: string[];
}

export function Slider(props: SliderProps) {
    const { images } = props;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const showPrevImage = () => {
        setCurrentImageIndex((prev) => {
            if (prev === 0) {
                return images.length - 1;
            }
            return prev - 1;
        });
    };

    const showNextImage = () => {
        setCurrentImageIndex((prev) => {
            if (prev === images.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    };

    return (
        <div className="slider_container">
            {images.map((url, index) => (
                <img
                    className="image"
                    style={{ transform: `translateX(-${100 * currentImageIndex}%)` }}
                    key={url}
                    src={url}
                    alt={`car${index}`}
                />
            ))}
            <button className="slider_button left" onClick={showPrevImage}>
                <ArrowBigLeft />
            </button>
            <button className="slider_button right" onClick={showNextImage}>
                <ArrowBigRight />
            </button>
            <div className="slider_selection_block">
                {images.map((_, index) => (
                    <button key={index} className="slider_dot_button" onClick={() => setCurrentImageIndex(index)}>
                        {index === currentImageIndex ? <CircleDot /> : <Circle />}
                    </button>
                ))}
            </div>
        </div>
    );
}
