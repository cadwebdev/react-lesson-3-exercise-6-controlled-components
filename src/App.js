import React from 'react'
import './App.css'
import ItemAdd from './ItemAdd'
import ItemDelete from './ItemDelete'
import ItemList from './ItemList'

class App extends React.Component {
  state = {
    value: '',
    items: [],
  }

  handleAdd = (value) => {
    this.setState((oldState) => ({
      items: [...oldState.items, value],
    }))
  }

  handleDeleteLastItem = () => {
    this.setState((prevState) => ({ items: this.state.items.slice(0, -1) }))
  }

  handleNoItemsFound = () => {
    return this.state.items.length === 0
  }

  render() {
    return (
      <div className="App">
        <h2>Shopping List</h2>
        <ItemAdd handleAdd={this.handleAdd} />
        <ItemDelete
          handleDeleteLastItem={this.handleDeleteLastItem}
          handleNoItemsFound={this.handleNoItemsFound}
        />
        <ItemList items={this.state.items} />
      </div>
    )
  }
}

export default App
