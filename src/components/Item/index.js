import React from "react";

const Item = ({ item, index, removeItem, todo, lists, setLists }) => {

    const handleChecked = (e) => {
        let todoIndex = lists.findIndex(elt => elt.name === todo.name);
        let itemIndex = todo.list.findIndex(elt => elt.text === item.text);
        let newLists = [...lists];
        newLists[todoIndex].list[itemIndex].checked = !newLists[todoIndex].list[itemIndex].checked;
        setLists(newLists);
    };

    return (
        <li>
            <input onChange={handleChecked} type="checkbox" checked={item.checked} id={`${item.text}-${index}`} />
            <label htmlFor={`${item.text}-${index}`}>
                {item.text}
                <span onClick={() => removeItem(todo, index)} style={{ 'cursor': 'pointer' }}>     ❌     </span>
            </label>
        </li>
    );
};

export default Item;

/*<li key={`task-${elt.text}-${index}`}><input type="checkbox" id={`task-${elt.text}-${index}`} /><label htmlFor={`task-${elt.text}-${index}`}>{elt.text}<span onClick={() => removeItem(todo, index)} style={{ 'cursor': 'pointer' }}>     ❌     </span></label></li>*/