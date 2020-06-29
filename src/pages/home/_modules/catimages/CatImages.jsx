import React from 'react';
import { List, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import './CatImages.less';

const { Meta } = Card;

function CatImages() {
  const data = [1, 3, 5, 7, 9, 10];
  return (
    <List
      className="cat-images-wrapper"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card
            style={{ width: 300 }}
            cover={(
              <img
                alt="cover"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            )}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description={`This is the description ${item}`}
            />
          </Card>
        </List.Item>
      )}
    />
  );
}

export default CatImages;
