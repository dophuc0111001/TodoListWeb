import React, {useEffect} from 'react';
import { Row, Col} from 'antd';
import { useSelector } from 'react-redux';
import TodoItem from "../component/TodoItem";

function TodoList(){
    const todos = useSelector((state) => state.todoReducer.todos);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "ALL TODO";
    }, []);
    return(
        <>
            <Row>
                <h2 className="title-List">ALL TODO LIST</h2>
            </Row>
            <Row>
                <Col span={24}>
                    <Row>
                        {todos.map((todo) => (
                            <TodoItem todo={todo} key={todo.id} />
                        ))}
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default TodoList;