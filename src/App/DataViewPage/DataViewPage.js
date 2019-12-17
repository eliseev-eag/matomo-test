import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, Layout, PageHeader, Spin } from 'antd';
import { errorSelector, isFetchingSelector } from 'selectors';
import EventsTimeline from './EventsTimeline';

const DataViewPage = () => {
  const isFethcing = useSelector(isFetchingSelector);
  const error = useSelector(errorSelector);

  return (
    <Layout>
      <PageHeader ghost={false} title="Просмотр данных" />
      <Layout.Content>
        {isFethcing && (
          <div
            style={{
              minHeight: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Spin size="large" />
          </div>
        )}
        {error && (
          <Alert
            message="Произошла ошибка"
            description={error}
            type="error"
            showIcon
          />
        )}
        {!isFethcing && !error && <EventsTimeline />}
      </Layout.Content>
    </Layout>
  );
};

export default DataViewPage;
