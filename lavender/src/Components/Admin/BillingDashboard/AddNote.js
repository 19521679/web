import React, { Component } from 'react'
import Modal from "../MyModal/index";

export default class AddNote extends Component {
    render() {
        return (
            <Modal handleClose={this.props.handleClose} handleSave={this.props.handleSave}>
            <p>Modal</p>
          </Modal>
        )
    }
}
