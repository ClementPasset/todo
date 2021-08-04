import React, { useState } from "react";
import Item from "../Item";

const Todo = ({ lists, setLists, todo }) => {

    const [isSelected, setSelected] = useState(false);
    const [name, setName] = useState(todo.name);

    const addTask = (e) => {
        if (e.target.value !== "") {
            const newLists = [...lists];
            let index = newLists.findIndex(value => value.name === todo.name);
            newLists[index].list.push({ text: e.target.value, checked: false });
            setLists(newLists);
            e.target.value = '';
        }
    }

    const removeItem = (todo, index) => {
        todo.list.splice(index, 1);
        let newLists = [...lists];
        newLists.filter(elt => elt.name !== todo.name);
        setLists(newLists);
    }

    const deleteTodo = () => {
        const newLists = [...lists];
        let index = newLists.findIndex(elt => elt.name === todo.name);
        newLists.splice(index, 1);
        setLists(newLists);
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleInputValidation = (e) => {
        if (e.target.value !== '') {
            const newLists = [...lists];
            let index = newLists.findIndex(elt => elt.name === todo.name);
            newLists[index].name = name;
            setLists(newLists);
            setSelected(false);
        }
    }

    return (
        <div>
            {!isSelected && <h3 onClick={() => setSelected(true)}>{name}<span onClick={deleteTodo} style={{ 'cursor': 'pointer' }}>    ❌     </span></h3>}
            {isSelected && <React.Fragment><input onChange={handleInputChange} onKeyDown={(e) => {
                if (e.keyCode === 13) {
                    handleInputValidation(e);
                }
            }} onBlur={handleInputValidation} style={{ 'margin': '1.5rem' }} type='text' value={name} /><span onClick={deleteTodo} style={{ 'cursor': 'pointer' }}>    ❌     </span></React.Fragment>}
            <ul>
                {todo.list.length > 0 && todo.list.map((elt, index) => <Item lists={lists} setLists={setLists} key={`task-${elt.text}-${index}`} item={elt} index={index} todo={todo} removeItem={removeItem} />)}
                <li><input onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        addTask(e);
                    }
                }} onBlur={addTask} type="text" /></li>
            </ul>
        </div>
    );
};

export default Todo;