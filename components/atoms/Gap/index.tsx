import React from 'react';

type Props = {
  width: string;
  height: string;
};

const Gap: React.FC<Props> = ({ width, height }) => {
  return <div style={{ width, height }}></div>;
};

export default Gap;
