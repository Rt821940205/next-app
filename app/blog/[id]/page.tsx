import { data } from "@/app/data";
import { Card } from "antd";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}
export async function generateMetadata({ params }: IProps) {
  return {
    title: `博客列表${params.id}`,
  };
}
export default function page({ params }: IProps) {
  const item = data.find((item) => item.id === +params.id);
  return (
    <Card title={item?.title} bordered={false}>
      <p>{item?.content}</p>
    </Card>
  );
}
