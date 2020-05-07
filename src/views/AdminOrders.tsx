import React from 'react';
import {useOrders} from '../lib/useOrders';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {getAmount} from '../lib/getAmount';
import {Money} from 'components/Money';
import {orderStatusMap} from '../maps/OrderStatus';
import vars from '_vars.scss';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const Item = styled(Link)`
  height: ${vars.heightItem}; 
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;
const List = styled.div`
  background:white;
`;
const Status = styled.span`
  margin-left: auto;
  margin-right: 16px;
`;
export const AdminOrders: React.FC = () => {
  const {pages} = useOrders(order => (
    <Item to={`/admin/orders/${order.id}`}>
      <Money>{getAmount(order.goods)}</Money>
      <Status>{orderStatusMap[order.status]}</Status>
      <Icon name="right"/>
    </Item>
  ));
  return (
    <Layout title="所有订单">
      <List>
        {pages}
      </List>
    </Layout>
  );
};