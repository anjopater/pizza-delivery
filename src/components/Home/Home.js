import React, { Component } from 'react'
import * as api from '../../api/pizzas';
import PizzaList from '../PizzaList';
import PizzaEditDetail from '../PizzaEditDetail';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pizzas: [],
            currentItem: Object
        }
    }

    componentDidMount() {
        api.fetchPizzas().then((r) => {
            this.setState({ pizzas: r.data.data, currentItem: r.data.data[0] });
        });
    }

    updateItemList = (item) => {
        const newPizzasList = this.state.pizzas.map((pizza) => {
            if (item._id === pizza._id) {
                pizza = { ...item };
            }
            return pizza;
        });

        this.setState({ pizzas: newPizzasList, currentItem: item }, () => {
            this.savePizza(item);
        });
    }

    onSelectItem = (item) => {
        this.setState({ currentItem: item });
    }

    savePizza = (item) => {
        if (item._id) {
            api.updatePizzas(item).then((r) => {
                console.log('saved...', r);
            });
        } else {
            api.addPizzas(item).then((r) => {
                const newItem = r.data;
                this.setState(prevState => ({
                    pizzas: [...prevState.arrayvar, newItem],
                    currentItem: newItem
                  }))
            });
        }
    }

    onNewItem = () => {
        this.setState({ currentItem: { _id: 0, name: '', price: '', imageUrl: '' } })
    }

    onDeleteItem = (item, i) => {
         api.deletePizza(item).then((r) => {
             const newPizzas = this.state.pizzas.filter(function(pizza) { 
                return pizza._id !== item._id 
            });

            this.setState({pizzas: newPizzas, currentItem: newPizzas[0] });
         });
    }

    render() {
        const { pizzas } = this.state;

        return (
            <div>
                {pizzas.length > 0 && (
                    <div className="content-list">
                        <PizzaList pizzas={pizzas} onSelectItem={this.onSelectItem} onNewItem={this.onNewItem} onDeleteItem={this.onDeleteItem}/>
                        <PizzaEditDetail updateItemList={this.updateItemList} item={this.state.currentItem} />
                    </div>
                )}
            </div>
        )
    }
}

export default Home;

