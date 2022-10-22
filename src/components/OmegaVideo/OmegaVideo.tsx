import * as React from "react";
import VideoPlayer from "react-video-js-player";
import Sea from "../../assets/Sea.mp4";
import './OmegaVideo.css';

type OmegaVideoProps = {
  //
};

const OmegaVideo: React.FC<any> = () => {
  return (
    <div className="bg-video">
      <VideoPlayer
      autoplay={true}
      src={Sea}
      hideControls={['play','volume','seekbar','timer','playbackrates','fullscreen']}
      // controls={false}
      />
  </div>
  );
};

export default OmegaVideo;
