import React from 'react';
import { Layout, PageHeader } from 'antd';
import EventsTimeline from './EventsTimeline';

const DataViewPage = () => (
  <Layout>
    <PageHeader ghost={false} title="Просмотр данных" />
    <Layout.Content>
      <EventsTimeline />
    </Layout.Content>
  </Layout>
);

export default DataViewPage;
