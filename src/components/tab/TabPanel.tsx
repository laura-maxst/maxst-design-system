import React from 'react';

interface tabPanelPropsType {
  contents: React.ReactNode;
}

function TabPanel({ contents }: tabPanelPropsType) {
  return <div className="tab-panel">{contents}</div>;
}

export { TabPanel };
