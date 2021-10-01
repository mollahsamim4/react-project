import { useState } from "react"
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import ModalText from "./ModalText";

function Todo() {

    const [text, setText] = useState("")
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")) || [])

    const [ifModalOpen, setIfModalOpen] = useState(false)
    const [modalText, setModalText] = useState("")

    const [addButton, setAddbutton] = useState(true);


    const [id, setId] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();

        if (addButton) {
            if (text) {
                setIfModalOpen(false)
                setTodo((prevTodo) => {
                    const Newtodo = [...prevTodo, { todo: text, id: uuidv4() }]
                    localStorage.setItem("todo", JSON.stringify(Newtodo))
                    return Newtodo;
                })
            }
            else {
                setIfModalOpen(true)
                setModalText("Input field should not be Empty")
            }
        }

        else {



            if (text) {
                setIfModalOpen(false)

                let DeletematchingTodoWithId = todo.filter(item => item.id !== id);

                const newModifyTodo = { todo: text, id: id }
                const afterCalculateTodo = [...DeletematchingTodoWithId, newModifyTodo]
                localStorage.setItem("todo", JSON.stringify(afterCalculateTodo));
                setTodo(afterCalculateTodo)
                setAddbutton(true)

                setIfModalOpen(true)
                setModalText("Update success")
            }
            else {
                setIfModalOpen(true)
                setModalText("Input field should not be Empty")
            }


        }




        setText("");

    }

    const editTodo = id => {
        setAddbutton(false)
        const index = todo.findIndex(item => item.id === id)
        let editTodoText = todo[index].todo
        setText(editTodoText)
        setId(id)
    }
    const deleteTodo = id => {
        const newTodo = todo.filter(todo => todo.id !== id)
        localStorage.setItem("todo", JSON.stringify(newTodo))

        setTodo(newTodo)
    }

    const clearItem = e => {
        localStorage.setItem("todo", JSON.stringify(""))
        setTodo("")
    }


    return (
        <div className="row p-2">
            <div className="col-md-6  offset-md-3">
                {
                    ifModalOpen ? <ModalText modalContent={modalText} setIfModalOpen={setIfModalOpen} /> : <h1 className="text-center roboto text-info">Todo Input</h1>
                }

                <form onSubmit={handleSubmit} className="shadow-sm border p-4 rounded">
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-text">
                                <i className="fas fa-address-card   text-primary fa-2x "></i>
                            </div>
                            <input type="text" name="todo" id="" value={text} onChange={(e) => setText(e.target.value)} className="form-control form-control-lg" placeholder="Add a todo Item" />
                        </div>
                    </div>

                    <div className="form-group w-100">
                        {
                            addButton ?
                                <button type="submit" className="btn btn-lg btn-primary d-block w-100">Add item</button>
                                :
                                <button type="submit" className="btn btn-lg btn-success d-block w-100">Edit</button>
                        }
                    </div>
                </form>

                {/* show todo list */}
                {todo && <div className="mt-5 d-flex flex-column ">
                    <TodoHeading className="d-flex justify-content-md-evenly">
                        <h1 className="text-center">Todo List</h1>
                        <button className="btn btn-danger roboto" onClick={clearItem}>Clear</button>
                    </TodoHeading>
                </div>}
                {
                    todo ?
                        <TodoContainer>
                            {todo.map(item => {
                                const { todo, id } = item
                                return (
                                    <div className="item d-flex justify-content-between align-items-center shadow-sm p-3 mb-4 rounded" key={id}>
                                        <div>
                                            <h4>{todo}</h4>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <i className="fas fa-edit  text-success  " onClick={(e) => editTodo(id)}></i>
                                            <i className="fas fa-trash-alt  text-danger " onClick={(e) => deleteTodo(id)}></i>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </TodoContainer>
                        : null
                }
            </div>

        </div >
    )
}


export default Todo

const TodoContainer = styled.div`
background:linear-gradient(to left,#91B6E4,#F0DCCF);
padding:1rem;
transition:all 0.6s ease-in-out;
&:hover{
    background:linear-gradient(45deg,#F0DCCF,#91B6E4);
}
.item{
    background:#fff;
}
`
const TodoHeading = styled.div`
background:#fff;
border-radius:4px 4px 0 0;
border:2px solid #ddd;
padding:.5rem;
justify-content:space-between!important;

`