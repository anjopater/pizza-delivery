import React, { Component } from 'react';
import './PizzaEditDetail.css'

export default class PizzaEditDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: 0,
            imageUrl: '',
            name: '',
            price: ''
        }

        this.onChangeImageUrl = this.onChangeImageUrl.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { item } = nextProps;
        this.setState({ _id: item._id, imageUrl: item.imageUrl, name: item.name, price: item.price });
    }

    componentDidMount() {
        const { item } = this.props;
        this.setState({ _id: item._id, imageUrl: item.imageUrl, name: item.name, price: item.price });
    }

    onChangeImageUrl = (event) => {
        this.setState({ imageUrl: event.target.value });
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value });
    }

    onChangePrice = (event) => {
        this.setState({ price: event.target.value });
    }

    onSave = () => {
        const { updateItemList } = this.props;
        updateItemList({ _id: this.state._id, imageUrl: this.state.imageUrl, name: this.state.name, price: this.state.price });
    }

    render() {
        return (
            <div className="detail-item-pizza">
                <div className="flex-center">
                    <img src={this.state.imageUrl} />
                    <div>
                        <div className="content-input">
                            <label>Image Url</label>
                            <input type="text" id="imageUrl" value={this.state.imageUrl} onChange={this.onChangeImageUrl} />
                        </div>
                        <div className="content-input">
                            <label>Name</label>
                            <input type="text" id="name" value={this.state.name} onChange={this.onChangeName} />
                        </div>
                        <div className="content-input">
                            <label>Price</label>
                            <input type="text" id="price" value={this.state.price} onChange={this.onChangePrice} />
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={this.onSave} >Save</button>
                </div>
            </div>
        )
    }
}
