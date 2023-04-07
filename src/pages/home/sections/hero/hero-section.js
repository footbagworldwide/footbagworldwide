import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './hero-section.css';
import { videos } from "./hero-data";
import { Video } from "../../../../components/video/video";
import { useDesktopDisplay } from "../../../../hooks/display-hook";

function HeroSection_Mobile() {
  // auto-play videos are not supported on a mobile device
  
  return (
    <div>
      <img className="hero-gif" src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif" />
    </div>
  );
}

function HeroSection_Desktop() {
  return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        {
          videos.map((video, index) => 
            <div className="hero-video-container" key={`hero-video_${index}`}>
              <Video video={video} className={video.className} />
            </div>
          )
        }
      </Carousel>
    </div>		
	);
}

function HeroSection() {
	return (
    <>
      { useDesktopDisplay() ? <HeroSection_Desktop /> : <HeroSection_Mobile /> }
    </>
	);
}

export default HeroSection;
