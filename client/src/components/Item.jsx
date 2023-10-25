import "../index.css";
function Item({item}) {
    return (
        <li>
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>
            {item.description} {item.quantity}
            </span>
            <button>❌</button>
            
        </li>
    );
}

export default Item;