import { Button } from '@components/button';
import { Text } from '@components/text';
import React, { useEffect, useState } from 'react';

type loadingSampleTpye = {
  children: any;
};
function LoadingSample({ children }: loadingSampleTpye) {
  const [open, setOpen] = useState<boolean>(false);

  const onClickButton = () => {
    setOpen(true);
  };

  const handleOutside = (e: any) => {
    const loadingArea = document.getElementsByClassName('loading_page-wrap');
    if (loadingArea) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleOutside);

      return () => {
        document.removeEventListener('mousedown', handleOutside);
      };
    }
  });

  return (
    <div>
      <Text size={'l'}>
        sample code로 실제 &lt;LoadingPage / &gt;는 click event가 없습니다.
      </Text>
      <br />
      <Button size={'l'} type={'secondary'} onClick={onClickButton}>
        Loading Page 호출하기
      </Button>
      {open && children}
    </div>
  );
}

export default LoadingSample;
