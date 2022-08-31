import React from "react";
import styled from "styled-components";
import GIF from "../assets/NFTs.mp4";

const VideoContaier = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContaier>
      <video src={GIF} type="video/mp4" autoPlay muted loop />
    </VideoContaier>
  );
};
export default CoverVideo;
