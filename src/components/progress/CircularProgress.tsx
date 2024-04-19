import React, { useEffect, useRef, useState } from 'react';
import type { ProgressPropsType } from './progressType';
import { Text } from '@components/text';
import {
  CheckLineBoldIcon,
  CloseLineBoldIcon,
} from '@maxst-designsystem/icons';

const CircularProgress = ({
  className,
  type = 'primary',
  status,
  size,
  isShowIcon,
  isShowPercent,
  percent,
  iconError,
  iconSuccess,
}: ProgressPropsType) => {
  const svgRef: any = useRef();
  const [hasPercent, setHasPercent] = useState<boolean>(false);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [svgSize, setSvgSize] = useState<{
    viewBox: string;
    strokeWidth: number;
    cx: number;
    cy: number;
    r: number;
  }>({
    viewBox: '0 0 86 86',
    strokeWidth: 6,
    cx: 43,
    cy: 43,
    r: 40,
  });

  useEffect(() => {
    if (size == 'm') {
      setSvgSize({
        viewBox: '0 0 44 44',
        strokeWidth: 3,
        cx: 22,
        cy: 22,
        r: 20,
      });
    } else if (size == 's') {
      setSvgSize({
        viewBox: '0 0 18 18',
        strokeWidth: 2,
        cx: 9,
        cy: 9,
        r: 8,
      });
    }
  }, [size]);

  useEffect(() => {
    if (typeof percent == 'number') {
      setHasPercent(true);
      setProgressPercent(percent);
      const thisSvgDasharray = svgRef.current.lastChild.getTotalLength();
      const thisPercent = (100 - percent) / 100;
      svgRef.current.lastChild.style.strokeDasharray = thisSvgDasharray;
      svgRef.current.lastChild.style.strokeDashoffset =
        thisSvgDasharray * thisPercent;
    } else {
      setHasPercent(false);
    }
  }, [percent]);

  return (
    <div
      className={[
        'mds-progress',
        'mds-circular-progress',
        `progress-${type ? type : ''}${status ? status : ''}-${size}`,
        className ? className : '',
        !hasPercent && 'indeterminate',
        progressPercent >= 100 ? 'finished' : '',
      ].join(' ')}
    >
      <svg
        className={['progress__svg'].join(' ')}
        viewBox={svgSize.viewBox}
        ref={svgRef}
      >
        <circle
          cx={svgSize.cx}
          cy={svgSize.cy}
          r={svgSize.r}
          strokeWidth={svgSize.strokeWidth}
          fill="none"
        ></circle>
        <circle
          className="path"
          cx={svgSize.cx}
          cy={svgSize.cy}
          r={svgSize.r}
          fill="none"
          strokeWidth={svgSize.strokeWidth}
        ></circle>
      </svg>
      {!isShowIcon && isShowPercent && hasPercent && size != 's' && (
        <Text className="progress__percent" size={size === 'l' ? 'l' : 's'}>
          {progressPercent}%
        </Text>
      )}
      {isShowIcon && !isShowPercent && size != 's' && (
        <span className={['progress__icon'].join(' ')}>
          {status === 'error' ? (
            iconError ? (
              iconError
            ) : (
              <CloseLineBoldIcon />
            )
          ) : (
            status === 'success' &&
            progressPercent >= 100 &&
            (iconSuccess ? iconSuccess : <CheckLineBoldIcon />)
          )}
        </span>
      )}
    </div>
  );
};

export { CircularProgress };
