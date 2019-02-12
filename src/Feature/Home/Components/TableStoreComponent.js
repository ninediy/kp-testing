import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  setFormData,
  setDataList,
  setDataIndex
} from './../../../Store/actions/AppAction';
import { isEquivalent } from '../../../Utils';

import PaginationComponent from './PaginationComponent';

class TableStoreComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_limit: 3,
      arr_start: 0,
      arr_end: 3
    };
  }

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
    const { arr_start, arr_end } = this.state;
    return this.props.dataStore.slice(arr_start, arr_end).map((item, key) => {
      return (
        <tr key={key}>
          <td className="text-center">
            <input type="checkbox" className="table-checkbox" />
          </td>
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

  onSelectPage(page) {
    const { page_limit } = this.state;
    const indexOfLastTodo = page * page_limit;
    const indexOfFirstTodo = indexOfLastTodo - page_limit;

    this.setState({
      arr_start: indexOfFirstTodo,
      arr_end: indexOfLastTodo
    });
  }

  render() {
    return (
      <div className="mt-3">
        <div className="row">
          <div className="col-6 pb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Select All
              </label>
              &nbsp;
              <button className="btn btn-danger btn-sm">DELETE</button>
            </div>
          </div>
          <div className="col-6 text-right">
            <PaginationComponent
              total={this.props.dataStore.length}
              limit={this.state.page_limit}
              onSelectPage={this.onSelectPage.bind(this)}
            />
          </div>
          <div className="col-12">
            <table className="table table-striped table-hover">
              <thead className="table-info">
                <tr>
                  <th />
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
        </div>
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
