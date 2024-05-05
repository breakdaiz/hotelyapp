"use client";
import { Form, Input } from "antd";
import React from "react";

function HotelForm() {
  return (
    <Form layout='vertical' className='grid grid-cols-3 mt-5 gap-5'>
      <Form.Item
        className='col-span-3'
        rules={[{ required: true, message: "Please input hotel name!" }]}
        label='Hotel Name'
        name='name'
      >
        <Input placeholder='Hotel Name' />
      </Form.Item>
      <Form.Item
        className='col-span-3 lg:col-span-1'
        rules={[{ required: true, message: "Please input owner name!" }]}
        label='Owner Name'
        name='owner'
      >
        <Input placeholder='Owner Name' />
      </Form.Item>

      <Form.Item
        className='col-span-3 lg:col-span-1'
        rules={[{ required: true, message: "Please input email!" }]}
        label='Email'
        name='email'
      >
        <Input placeholder='Owner Name' />
      </Form.Item>

      <Form.Item
        className='col-span-3 lg:col-span-1'
        label='Phone'
        name='Phone'
        rules={[{ required: true, message: "Please input phone!" }]}
      >
        <Input placeholder='Phone' />
      </Form.Item>

      <Form.Item
        className='col-span-3'
        label='Address'
        name='address'
        rules={[{ required: true, message: "Please input address!" }]}
      >
        <Input.TextArea placeholder='Address' />
      </Form.Item>
    </Form>
  );
}

export default HotelForm;
