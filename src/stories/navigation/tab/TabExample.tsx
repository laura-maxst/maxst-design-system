import React, { useState } from 'react';
import { Tab } from '@components/tab';
import { tabPropsType } from '@components/tab/Tab';

function TabExample(args: tabPropsType) {
  const [selectTabValue, setSelectTabValue] = useState<string>(
    args.selectValue,
  );

  return (
    <div>
      <Tab {...args} selectValue={selectTabValue} />
    </div>
  );
}

export default TabExample;
