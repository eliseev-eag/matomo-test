import React from "react";
import { Layout, PageHeader } from "antd";
import { Timeline } from "./EventsTimeline";

const DataViewPage = () => (
  <Layout>
    <PageHeader ghost={false} title="Просмотр данных" />
    <Layout.Content>
      <Timeline />
    </Layout.Content>
  </Layout>
);

export { DataViewPage };
