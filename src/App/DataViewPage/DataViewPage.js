import React from "react";
import { Layout } from "antd";
import { Timeline } from "./EventsTimeline";

const DataViewPage = () => (
  <Layout>
    <Layout.Header style={{ background: "#fff", textAlign: "center" }}>
      Просмотр данных
    </Layout.Header>
    <Layout.Content>
      <Timeline />
    </Layout.Content>
  </Layout>
);

export { DataViewPage };
