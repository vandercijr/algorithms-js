'use strict';

/**
 * Arquivo: singlylinkedlist.js
 * Author: Vanderci Curvelo Junior
 * Description: very basic implementation of a singly linked list'
 * Data: 11/05/2020
 *
 */
let head_node;

//////////////////////////////////////////////////////////////////////////
/**
 * Node structure
 */
class Node {
  constructor(id, object, next)  {
    this._id     =  id;
    this._object =  object;
    this._next   =  next;
  };

  set object(value) {
    this._object = value;
  }

  get object() {
    return this._object;
  }

  set next(value) {
    this._next = value;
  }

  get next() {
    return this._next;
  }

  get id() {
    return this._id;
  }
};
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// add a node at top of the list
export const addToTop = (id, object)  =>  {
  let next;

  if (typeof head_node !== 'undefined') {
      next = head_node;
  }

  head_node = new Node(id, object, next);
};
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// add a node like push data into an array
export const push = (id, object)  =>  {
  let current_node = head_node;
  let next;

  if (typeof head_node === 'undefined') {
      addToTop(id, object);
      return true;
  }

  while (typeof current_node.next !== 'undefined') current_node = current_node.next;

  current_node.next = new Node(id, object, next);
};
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
export const remove = (id)  =>  {
  let current_node = head_node;

  while (typeof current_node.next !== 'undefined') {
    //check the if first node contain the id
    if (current_node.id === id) {
      head_node = current_node.next;
      return true;
    }

    if (current_node.next.id === id) {
      current_node.next = current_node.next.next;
      return true;
    }

    current_node = current_node.next;
  }
};
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
export const find = (id)  =>  {
  let current_node = head_node;

  while (typeof current_node !== 'undefined') {
    if (current_node.id === id) {
      return current_node;
    }
    current_node = current_node.next;
  }

  return new Node({}, {});
};
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
export const findAll  = ()  =>  {
  return head_node;
}
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
export const count = () =>  {
  let current_node = head_node;
  let count = 0;

  while (typeof current_node !== 'undefined') {
    count++;
    current_node = current_node.next;
  }

  return count;
};
//////////////////////////////////////////////////////////////////////////
