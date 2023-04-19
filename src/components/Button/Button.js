import { Button } from 'antd';
import { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';

const ButtonCard = ({loadMoreButton}) => {
  const [loadings, setLoadings] = useState([]);

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      loadMoreButton()
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 2000);
  };
  return (
    <Button
      type="primary"
      icon={<PoweroffOutlined />}
      loading={loadings[1]}
      onClick={() => enterLoading(1)}
    >
      LoadMore!
    </Button>
  )
}

export default ButtonCard;