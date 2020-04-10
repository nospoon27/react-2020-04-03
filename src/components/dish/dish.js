import React from 'react';
import { Card, Typography, Button, Row, Col } from 'antd';
import styles from './dish.module.css';
import counter from '../../hocs/counter';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

function Dish(props) {
  const { dish, count, decrement, increment } = props;

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title level={4} className={styles.title}>
            {dish.name}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {dish.ingredients.join(', ')}
          </Typography.Paragraph>
          <div className={styles.price}>{dish.price} $</div>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count}>{count}</div>
            <Button.Group>
              <Button
                className={styles.button}
                icon={<MinusOutlined />}
                onClick={decrement}
              />
              <Button
                className={styles.button}
                icon={<PlusOutlined />}
                onClick={increment}
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default counter(Dish);
