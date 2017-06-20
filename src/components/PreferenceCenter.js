import React, { Component } from 'react';
import { SortableContainer, SortableHandle, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortablePreference = SortableElement(({value, id}) =>
  <li className = "list-item"
    key= {id} ><DragHandle />
    {value}
    <input type="checkbox"></input>
  </li>
)

const DragHandle = SortableHandle(() => <span>&#9776; </span>);

const SortablePreferences = SortableContainer (({items}) => {
    return(
      <ul className = "sortable-list">
        {items.map((value, index) => (
          <SortablePreference
            key={`item-${value}`}
            index={index}
            value={value}
          />
        ))}
      </ul>
    )
  }
);

class PreferenceCenter extends Component  {
  state = {
    items: ['Womens', 'Mens', 'Kids', 'Dogs', 'Cats']
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
        items: arrayMove(this.state.items, oldIndex, newIndex)
    })
  }
  render() {
    return(
      <SortablePreferences
        items = {this.state.items}
        onSortEnd = {this.onSortEnd}
      />
    )
  }
}

export default PreferenceCenter;
