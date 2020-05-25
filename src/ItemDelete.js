import React from 'react'
import PropTypes from 'prop-types'

const ItemDelete = (props) => {
  const deleteLastItem = (event) => {
    props.handleDeleteLastItem()
  }

  return (
    <button onClick={deleteLastItem} disabled={props.handleNoItemsFound()}>
      Delete Last Item
    </button>
  )
}

ItemDelete.propTypes = {
  handleDeleteLastItem: PropTypes.func.isRequired,
  handleNoItemsFound: PropTypes.func.isRequired,
}

export default ItemDelete
