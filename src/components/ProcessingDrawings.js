import '../styles/ProcDraw.css';
import ImageSlider from './imageSlider';
import { SliderData } from './SlideData';

function ProcDraw() {
  return <ImageSlider className="canvas" slides={SliderData} />;
}

export default ProcDraw;