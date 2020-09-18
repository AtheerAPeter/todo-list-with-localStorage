import { useState, useEffect } from "react";
import { Input, Button, Row, Col } from "antd";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import uuid from "react-uuid";
//components imports
import Card from "../components/card";

export default function Home() {
  const [todos, setTodos] = useState([{}]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const stuff = localStorage.getItem("todos");
    if (stuff) {
      setTodos(JSON.parse(stuff));
    }
  }, []);

  return (
    <div>
      <div className="container">
        <div className="form">
          <Row gutter={5}>
            <Col span={3}>
              <Button
                onClick={() => {
                  setTodos([]);
                  localStorage.setItem("todos", "");
                }}
                style={{ width: "100%" }}
                type="primary"
                icon={<DeleteOutlined />}
                danger
              >
                All
              </Button>
            </Col>
            <Col span={18}>
              <Input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="write something"
              />
            </Col>
            <Col span={3}>
              <Button
                onClick={(e) => {
                  const newItem = [...todos, { name: todo, id: uuid() }];
                  setTodos(newItem);
                  localStorage.setItem("todos", JSON.stringify(newItem));
                  setTodo("");
                }}
                style={{ width: "100%" }}
                icon={<PlusCircleOutlined />}
                type="primary"
              ></Button>
            </Col>
          </Row>
        </div>
        {todos.map((item, index) => (
          <Card
            item={item.name}
            index={item.id}
            todos={todos}
            setTodos={setTodos}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
