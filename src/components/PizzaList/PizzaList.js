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

    onDeleteItem = (item, i) => {
        const { onDeleteItem } = this.props;
        if (onDeleteItem) {
            onDeleteItem(item, i);
        }
    }

    render() {
        const { pizzas, onNewItem } = this.props;
        const items = pizzas.map((p, i) => {
            return <div className="position-relative">
                <div index={i} className="icon-close" onClick={this.onDeleteItem.bind(this, p, i)}>x</div>
                <a id={p._id} key={i} href="javascript:;" className="item-pizza" onClick={this.onSelectItem.bind(this, p)}>
        
                    <img src={p.imageUrl} />
                    <div>
                        <div> {p.name}</div>
                        <div> Price: {p.price}</div>
                    </div>
                </a>
            </div>
        });

        return (
            <div className="pizzas-list">
                {items}
                <div className="add-new-button-content">
                    <button onClick={onNewItem}>New</button>
                </div>
            </div>
        )
    }
}
