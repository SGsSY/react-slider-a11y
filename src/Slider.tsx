import { useState } from "react";
import "./Slider.css";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

export type Image = {
    url: string;
    alt: string;
};

interface SliderProps {
    images: Image[];
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
        <section className="slider_container" aria-label="Image Slider">
            <a href="#slider-end" className="skip_link">
                Skip Image Slider
            </a>
            {images.map(({ url, alt }, index) => (
                <img
                    className="image"
                    style={{ transform: `translateX(-${100 * currentImageIndex}%)` }}
                    key={url}
                    src={url}
                    alt={alt}
                    aria-hidden={index !== currentImageIndex}
                />
            ))}
            <button className="slider_button left" onClick={showPrevImage} aria-label="View Previous Image">
                <ArrowBigLeft aria-hidden />
            </button>
            <button className="slider_button right" onClick={showNextImage} aria-label="View Next Image">
                <ArrowBigRight aria-hidden />
            </button>
            <div className="slider_selection_block">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className="slider_dot_button"
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`View Image ${index + 1}`}
                    >
                        {index === currentImageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
                    </button>
                ))}
            </div>
            <div id="slider-end" style={{ position: "absolute" }} />
        </section>
    );
}
