import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import whiteLoadingData from './data/loding_motion_white.json';
import blackLoadingData from './data/loding_motion_black.json';
import mintLoadingData from './data/loding_motion_mint.json';

interface loadingProps {
  id?: string;
  color?: 'white' | 'black' | 'mint';
  size?: 'l' | 'm' | 's';
  className?: string;
  isDim?: boolean;
}
const LoadingPage = ({
  id,
  color = 'mint',
  size = 'l',
  className,
  isDim = true,
}: loadingProps) => {
  const [lottieSrc, setLottieSrc] = useState<any>(whiteLoadingData);

  useEffect(() => {
    if (color == 'white') {
      setLottieSrc(whiteLoadingData);
    } else if (color == 'black') {
      setLottieSrc(blackLoadingData);
    } else if (color == 'mint') {
      setLottieSrc(mintLoadingData);
    }
  }, [color]);
  return (
    <div
      id={id}
      className={[
        'loading_page-wrap',
        `loading-${size}`,
        className && className,
      ].join(' ')}
    >
      {isDim && <div className="dim"></div>}
      <Player autoplay loop src={lottieSrc} />
    </div>
  );
};

export { LoadingPage };
