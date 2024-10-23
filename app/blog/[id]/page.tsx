import { data } from "@/app/data";
import { Card } from "antd";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  const item = data.find((item) => item.id === +params.id);
  return (
    <Card title={item?.title} bordered={false}>
      <p>{item?.content}</p>
    </Card>
  );
}
