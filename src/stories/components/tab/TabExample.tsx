import React, { useState } from 'react';
import { Tab } from '@components/tab';
import { tabProps } from '@components/tab/Tab';

function TabExample(args: tabProps) {
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
