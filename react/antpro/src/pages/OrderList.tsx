import { PageContainer, ModalForm, ProFormRadio, ProFormDigit, ProFormText, ProTable, ProForm } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme, Button, Select, Tabs, FloatButton, Drawer, Table, Space, Tag, message, Popconfirm } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { PlusCircleTwoTone, MinusCircleTwoTone, QuestionCircleOutlined } from '@ant-design/icons';

import firebaseApp from '../utils/firebase'
import { getFirestore, getDocs, collection, query, onSnapshot, orderBy, doc, limit, startAfter, deleteDoc } from "firebase/firestore";


/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */




const Order: React.FC = () => {


  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  const { orderSubmitList } = useModel('order')
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const q = query(collection(getFirestore(firebaseApp), "Order"), orderBy('time', 'desc'));
    // limet(數字) 限制回傳的數量
    onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((i, index) => ({ ...i.data(), key: index }))
      console.log(data)
      setOrders(data)
    })
  }, [])

  const deleteHandle = async (id) => {
    console.log(id)

    try {
      await deleteDoc(doc(getFirestore(firebaseApp), "Order", id));

    }
    catch (e) {
      console.error("Error adding document: ", e);
      return message.error({
        content: `伺服器發生錯誤，請稍後再試`,
        duration: 5
      })
    }

    return message.success({
      content: `訂單已成功刪除`,
      duration: 5
    })
  }




  const columns = [
    {
      title: '訂購人',
      dataIndex: 'name',
      key: 'name',
      render: (_, text) => {
        return <>
          <div style={{ color: '#4096ff' }}>{_}</div>
          <div>{text.contact}</div>
          <Popconfirm
            title="刪除訂單"
            description={<>您確定要刪除此訂單</>}
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            onConfirm={async () => deleteHandle(text.id)}
            placement="bottom"
          >
            <Tag color='red'>刪除訂單</Tag>
          </Popconfirm>
        </>
      }
    },
    {
      title: '方式',
      dataIndex: 'method',
      key: 'method',
      render: (_, text) => {
        console.log(_, text)
        const time = text.time.split(' ')
        return <>
          <div>{text.selectedRestaurant}</div>
          <div>{time[0]}</div>
          <div>{time[1]}</div>
          <div>{_}</div>
        </>
      }
    },
    {
      title: '金額',
      dataIndex: 'total',
      key: 'total',
    },
  ]
  console.log(orderSubmitList)
  const expandedRowRender = (record, index) => {
    console.log(record, index)
    const expandedRowRenderColumns = [
      {
        title: '品項',
        dataIndex: 'title',
        key: 'title',
        render: (record, text) => {
          return <>
            <div style={{ color: '#4096ff' }}>{record} ({text.size})</div>
          </>
        },
      },
      {
        title: '內容',
        align: 'center',
        dataIndex: 'size',
        key: 'size',
        render: (record, text, index) => {
          // console.log(record, text, index)
          return <div >
            {text.size} * {text.count}
          </div>
        }
      },
      {
        title: '備註',
        key: 'memo',
        dataIndex: 'memo',
      },
    ];

    return <Table
      size='small'
      columns={expandedRowRenderColumns}
      dataSource={orders[index].order}
      pagination={{ pageSize: 5 }}
    />;
  };

  return (<>
    <PageContainer style={{ position: 'relative' }}>

      <div
        style={{
          backgroundPosition: '100% -30%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '274px auto',
        }}
      >
        {/* <div
          style={{
            fontSize: '20px',
            color: token.colorTextHeading,
            display: 'flex',
            marginBottom: 10
          }}
        >
          訂單列表
        </div> */}
        <Table
          size='small'
          columns={columns}
          dataSource={orders}
          pagination={{ pageSize: 5 }}
          expandable={{
            defaultExpandAllRows: true,
            expandedRowRender,
            // defaultExpandedRowKeys: ['1'],
            
          }}
        />

      </div>
    </PageContainer>

  </>
  );
};

export default Order;
