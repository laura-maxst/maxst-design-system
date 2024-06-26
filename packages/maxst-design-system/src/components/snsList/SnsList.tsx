/* eslint-disable @next/next/no-img-element */
import { Button } from '@components/button';
import React, { useEffect } from 'react';

interface SnsListDataType {
  type: 'facebook' | 'instagram' | 'youtube' | 'blog' | 'medium';
  url: string;
}
interface SnsListPropsType {
  data: SnsListDataType[];
  className?: string;
}

const SnsList = ({ data, className }: SnsListPropsType) => {
  const onClickRouter = (url: string) => {
    window.open(url, '_blank', 'noopener');
  };

  const svgFilter = (type: string) => {
    const svgListArray = Object.entries(snsSvgData);
    const thisSvgArray = svgListArray.filter(([key, value]) => key === type)[0];
    return thisSvgArray[1];
  };

  return (
    <ul className={['mds-sns-list', className ? className : ''].join(' ')}>
      {data.map((item) => {
        return (
          <li key={item.type}>
            <Button
              size={'s'}
              type={'ghost'}
              iconOnly={svgFilter(item.type)}
              isIconMode={true}
              onClick={() => onClickRouter(item.url)}
            />
          </li>
        );
      })}
    </ul>
  );
};

const snsSvgData = {
  facebook: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3575 3.98875H14.0007V1.12675C13.7172 1.08775 12.7422 1 11.6067 1C9.2375 1 7.6145 2.49025 7.6145 5.22925V7.75H5V10.9495H7.6145V19H10.82V10.9503H13.3287L13.727 7.75075H10.8192V5.5465C10.82 4.62175 11.069 3.98875 12.3575 3.98875Z"
        fill="#9E9E9E"
      />
    </svg>
  ),
  instagram: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.19231 1H13.8077C16.6462 1 19 3.35385 18.9308 6.19231V13.8077C18.9308 16.6462 16.6462 19 13.7385 19H6.19231C3.35385 19 1 16.6462 1 13.7385V6.19231C1 3.35385 3.35385 1 6.19231 1ZM5.15385 10C5.15385 12.7 7.3 14.8462 10 14.8462C12.7 14.8462 14.8462 12.7 14.8462 10C14.8462 7.3 12.7 5.15385 10 5.15385C7.3 5.15385 5.15385 7.3 5.15385 10ZM14.1538 4.80769C14.1538 5.36154 14.6385 5.84615 15.1923 5.84615C15.7462 5.84615 16.2308 5.36154 16.2308 4.80769C16.2308 4.25385 15.7462 3.76923 15.1923 3.76923C14.6385 3.76923 14.1538 4.25385 14.1538 4.80769ZM13.4615 9.99997C13.4615 11.9117 11.9117 13.4615 9.99997 13.4615C8.08821 13.4615 6.53843 11.9117 6.53843 9.99997C6.53843 8.08821 8.08821 6.53843 9.99997 6.53843C11.9117 6.53843 13.4615 8.08821 13.4615 9.99997Z"
        fill="#9E9E9E"
      />
    </svg>
  ),
  youtube: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_8128_44237)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-5 10C-5 1.717 1.717 -5 10 -5C1.71573 -5 -5 1.71573 -5 10ZM10 -5C18.283 -5 25 1.717 25 10C25 1.71573 18.2843 -5 10 -5ZM10 25C1.71573 25 -5 18.2843 -5 10C-5 18.283 1.717 25 10 25ZM25 10C25 18.2843 18.2843 25 10 25C18.283 25 25 18.283 25 10ZM19.3727 10.0153C19.3727 10.0153 19.3727 13.0574 18.9868 14.5243C18.7705 15.3272 18.1374 15.9603 17.3345 16.1764C15.8676 16.5625 10 16.5625 10 16.5625C10 16.5625 4.14772 16.5625 2.66548 16.161C1.86256 15.945 1.22948 15.3117 1.01318 14.5087C0.62706 13.0574 0.62706 10 0.62706 10C0.62706 10 0.62706 6.95816 1.01318 5.49126C1.22925 4.68834 1.8779 4.03969 2.66548 3.82362C4.13239 3.4375 10 3.4375 10 3.4375C10 3.4375 15.8676 3.4375 17.3345 3.83896C18.1374 4.05502 18.7705 4.68834 18.9868 5.49126C19.3883 6.95816 19.3727 10.0153 19.3727 10.0153ZM8.13232 12.8079L13.0116 9.99771L8.13232 7.1875V12.8079Z"
          fill="#9E9E9E"
        />
      </g>
      <defs>
        <clipPath id="clip0_8128_44237">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  blog: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18H10.3502C14.249 18 16 16.0408 16 13.4286C16 11.0962 14.716 9.97668 12.6848 9.62682V9.55685C14.5759 8.95044 15.3463 7.76093 15.3463 6.03499C15.3463 3.44606 13.642 2 10 2H4V18ZM7.29183 15.6443V10.8163H9.6498C11.5409 10.8163 12.5914 11.516 12.5914 13.172C12.5914 14.8513 11.5875 15.6443 9.76654 15.6443H7.29183ZM7.29183 8.76385V4.33236H9.43969C11.1673 4.33236 12.0545 4.89213 12.0545 6.52478C12.0545 8.20408 10.9105 8.76385 9.3463 8.76385H7.29183Z"
        fill="#9E9E9E"
      />
    </svg>
  ),
  medium: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_8128_44239)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8333 20H4.16667C1.86583 20 0 18.1342 0 15.8333V4.16667C0 1.86583 1.86583 0 4.16667 0H15.8333C18.135 0 20 1.86583 20 4.16667V15.8333C20 18.1342 18.1358 19.9992 15.8333 20ZM16.6417 15.2925V15.0683L15.6025 14.0483C15.5108 13.9783 15.465 13.8633 15.4842 13.7492V6.25083C15.465 6.13667 15.5108 6.02167 15.6025 5.95167L16.6667 4.93167V4.7075H12.9817L10.355 11.26L7.36667 4.7075H3.50167V4.93167L4.74667 6.43083C4.86833 6.54167 4.93083 6.70333 4.91417 6.86667V12.76C4.95083 12.9725 4.88333 13.19 4.73417 13.345L3.33333 15.0433V15.2675H7.305V15.0433L5.90417 13.345C5.75333 13.19 5.6825 12.9742 5.71083 12.76V7.66333L9.19667 15.2675H9.60167L12.5958 7.66333V13.7242C12.5958 13.8858 12.5958 13.9175 12.49 14.0233L11.4133 15.0683V15.2925H16.6417Z"
          fill="#9E9E9E"
        />
      </g>
      <defs>
        <clipPath id="clip0_8128_44239">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};
export { SnsList };
export type { SnsListDataType };
