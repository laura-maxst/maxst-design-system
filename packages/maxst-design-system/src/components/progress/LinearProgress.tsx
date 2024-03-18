import React, { useEffect, useState } from 'react';
import type { ProgressProps } from './progressType';
import { TextLabel } from '@components/text';
import {
  CheckLineBoldIcon,
  CloseLineBoldIcon,
} from '@maxst-designsystem/icons';
import { BoxGroup } from '@components/boxGroup';

const LinearProgress = ({
  className,
  type = 'primary',
  status,
  align,
  size,
  isShowIcon,
  isShowPercent,
  percent,
  label,
  iconBefore,
  iconError,
  iconSuccess,
}: ProgressProps) => {
  const [hasPercent, setHasPercent] = useState<boolean>(false);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  useEffect(() => {
    if (typeof percent == 'number') {
      setHasPercent(true);
      setProgressPercent(percent);
    } else {
      setHasPercent(false);
    }
  }, [percent]);

  return (
    <div
      className={[
        'mds-progress',
        'mds-linear-progress',
        `progress-${type ? type : ''}${status ? status : ''}-${size}`,
        align ? align : '',
        className ? className : '',
        !hasPercent && 'indeterminate',
        progressPercent >= 100 ? 'finished' : '',
      ].join(' ')}
    >
      {(label || (isShowPercent && progressPercent)) && (
        <div
          className={[
            'linear-progress__info-box',
            label ? 'has-label' : '',
          ].join(' ')}
        >
          <TextLabel role={'sub'} size={size === 's' ? 's' : 'm'}>
            {label}
          </TextLabel>
          {isShowPercent && hasPercent && (
            <TextLabel
              role={'sub'}
              className="progress__percent"
              size={size === 's' ? 's' : 'm'}
            >
              {progressPercent}%
            </TextLabel>
          )}
        </div>
      )}
      <BoxGroup gap={12} className="linear-progress__box">
        <div className="progress__line">
          <div
            className="path"
            style={{ width: hasPercent ? `${progressPercent}%` : '' }}
          ></div>
        </div>
        {isShowIcon && (
          <span className="progress__icon">
            {status === 'success' && progressPercent >= 100 ? (
              iconSuccess ? (
                iconSuccess
              ) : (
                <CheckLineBoldIcon />
              )
            ) : status === 'error' && iconError ? (
              iconError
            ) : iconBefore ? (
              iconBefore
            ) : (
              <CloseLineBoldIcon />
            )}
          </span>
        )}
      </BoxGroup>
    </div>
  );
};

export { LinearProgress };
