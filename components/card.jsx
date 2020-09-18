import { useState } from "react";
import { Button, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Card = ({ item, index, todos, setTodos }) => {
  const [animate, setAnimate] = useState("animatein");

  setTimeout(() => setAnimate("card"), 300);

  return (
    <Row key={index} className={animate}>
      <Col span={22}>
        <span>{item}</span>
      </Col>
      <Col span={2}>
        <Button
          onClick={() => {
            setTodos(todos.filter((element) => element.id !== index));
            localStorage.setItem(
              "todos",
              JSON.stringify(todos.filter((element) => element.id !== index))
            );
          }}
          danger
          icon={<DeleteOutlined />}
          style={{ width: "100%" }}
          type="primary"
        ></Button>
      </Col>
    </Row>
  );
};

export default Card;
