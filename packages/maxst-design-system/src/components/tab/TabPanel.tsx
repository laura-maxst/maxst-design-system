import React from 'react';

interface tabPanelProps {
  contents: React.ReactNode;
}

function TabPanel({ contents }: tabPanelProps) {
  return <div className="tab-panel">{contents}</div>;
}

export { TabPanel };
