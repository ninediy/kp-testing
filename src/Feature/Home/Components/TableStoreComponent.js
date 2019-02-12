import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  setFormData,
  setDataList,
  setDataIndex
} from './../../../Store/actions/AppAction';
import { isEquivalent } from '../../../Utils';

class TableStoreComponent extends Component {
  doEdit(val, index) {
    this.props.setDataIndex(index);
    this.props.setFormData(val);
  }

  doDelete(item) {
    if (window.confirm('ยืนยันการลบข้อมูล')) {
      const freshData = this.props.dataStore.filter(
        resp => !isEquivalent(resp, item)
      );
      this.props.setDataList(freshData);
    }
  }

  irenderTableBody() {
    return this.props.dataStore.map((item, key) => {
      return (
        <tr key={key}>
          <td>{item.firstname + ' ' + item.lastname}</td>
          <td>{item.gender}</td>
          <td>{'+' + item.phone_code + item.phone_number}</td>
          <td>{item.nationality}</td>
          <td>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                this.doEdit(item, key);
              }}
            >
              EDIT
            </button>
            &nbsp;|&nbsp;
            <button
              className="btn btn-sm btn-danger"
              onClick={() => {
                this.doDelete(item);
              }}
            >
              DELETE
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="mt-3">
        <table className="table table-striped table-hover">
          <thead className="table-info">
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Mobile Phone</th>
              <th>Nationality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.irenderTableBody()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataStore: state.rootReducer.dataStore,
  dataIndex: state.rootReducer.dataIndex
});

const mapDispatchToProps = {
  setFormData,
  setDataList,
  setDataIndex
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableStoreComponent);
