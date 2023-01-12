import React, { useEffect } from "react";
import { Row, Col, Form, Input, Button, DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { addTodo } from "../actions/action";
import toast from "../helpers/toast";

function TodoForm(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ADD TODO";
  }, []);

  const onFinish = (values) => {
    const data = {
      id: uuidv4(),
      name: values.name,
      time: moment(values.time).format("DD/MM/YYYY").toString(),
      complete: false,
    };

    dispatch(addTodo(data));
    toast.success("SUCCESS", "ADD TODO SUCCESS");
  };

  return (
    <>
      <Row>
        <h2 className="title-Form">NEW TODO</h2>
      </Row>
      <Row>
        <Col span={12}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{}}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "PLEASE ENTER TODO NAME!",
                },
              ]}
            >
              <Input placeholder="TODO NAME" />
            </Form.Item>

            <Form.Item
              name="time"
              rules={[
                {
                  required: true,
                  message: "PLEASE CHOOSE TIME!",
                },
              ]}
            >
              <DatePicker placeholder="DEADLINE" format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                ADD TODO
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default TodoForm;
