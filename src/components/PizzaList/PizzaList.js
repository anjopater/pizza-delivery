import React, { Component } from 'react';
import './PizzaList.css';

export default class PizzaList extends Component {

    constructor(props) {
        super(props);
    }

    onSelectItem = (item) => {
        const { onSelectItem } = this.props;
        if (onSelectItem) {
            onSelectItem(item);
        }
    }

    render() {
        const { pizzas, onNewItem } = this.props;
        const items = pizzas.map((p, i) => {
            return <a id={p._id} key={i} href="javascript:;" className="item-pizza" onClick={this.onSelectItem.bind(this, p)}>
                <img src={p.imageUrl} />
                <div>
                    <div> {p.name}</div>
                    <div> Price: {p.price}</div>
                </div>
            </a>
        });

        return (
            <div className="pizzas-list">
                {items}
                <div>
                    <button onClick={onNewItem}>New</button>
                </div>
            </div>
        )
    }
}
