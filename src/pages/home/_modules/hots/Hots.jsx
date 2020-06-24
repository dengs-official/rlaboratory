import React from 'react';

import { List } from 'antd';

function Hots() {
  const data = [1, 3, 5];
  return (
    <div className="hots-wrapper">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
}

export default Hots;
