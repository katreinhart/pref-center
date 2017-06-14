import React, { Component } from 'react';
import { SortableContainer, SortableHandle, SortableElement, arrayMove } from 'react-sortable-hoc';

// TODO: rewrite this entire component. 

const SortableItem = SortableElement(({value, id}) =>
  <li className="list-item" key={id}><DragHandle />{value}<input type="checkbox"></input></li>
);

const DragHandle = SortableHandle(() => <span>&#9776; </span>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul className="sortable-list">
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  state = {
    items: ['Womens', 'Mens', 'Kids', 'Girls', 'Boys', 'Home', 'Shoes'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

export default SortableComponent;
