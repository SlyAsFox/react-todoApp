import React, { Component } from 'react';
import './App.css';
import TodoItems from './Components/TodoItems/TodoItems';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(event) {
    if(this._inputElement.value !== ''){
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = '';
    }
    event.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key)
    });

    this.setState({
      items: filteredItems
    })
  }

  render(){
    return (
      <div className={ 'App' }>
        <h1>{ 'ToDo App' }</h1>
        <div className={ 'header' }>
          <form onSubmit={ this.addItem }>
            <input ref={(a) => this._inputElement = a}
                   placeholder="enter task" type="text">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems
            entries={ this.state.items}
            delete={ this.deleteItem }
        />
      </div>
    );
  }
}

export default App;
