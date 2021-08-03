import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Todo = ({ lists, setLists, todo }) => {

    const [isSelected, setSelected] = useState(false);
    const [name, setName] = useState(todo.name);

    const addTask = (e) => {
        if (e.target.value !== "") {
            const newLists = [...lists];
            let index = newLists.findIndex(value => value.name === todo.name);
            newLists[index].list.push(e.target.value);
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
        if (e.target.value !== '') {
            setName(e.target.value);
        }
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
                if (e.code === "NumpadEnter" || e.code === "Enter") {
                    handleInputValidation(e);
                }
            }} onBlur={handleInputValidation} style={{ 'margin': '1.5rem' }} type='text' value={name} /><span onClick={deleteTodo} style={{ 'cursor': 'pointer' }}>    ❌     </span></React.Fragment>}
            <ul>
                {todo.list.length > 0 && todo.list.map((elt, index) => <li key={`task-${elt}-${index}`}><input type="checkbox" id={`task-${elt}-${index}`} /><label htmlFor={`task-${elt}-${index}`}>{elt}<span onClick={() => removeItem(todo, index)} style={{ 'cursor': 'pointer' }}>     ❌     </span></label></li>)}
                <li><input onKeyDown={(e) => {
                    if (e.code === "NumpadEnter" || e.code === "Enter") {
                        addTask(e);
                    }
                }} onBlur={addTask} type="text" /></li>
            </ul>
        </div>
    );
};

export default Todo;