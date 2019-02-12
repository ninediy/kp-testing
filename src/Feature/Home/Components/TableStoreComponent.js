import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  setFormData,
  setDataList,
  setDataIndex,
  setSelectAll
} from './../../../Store/actions/AppAction';

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

  doDeleteFromSelect() {
    if (window.confirm('ยืนยันการลบข้อมูล')) {
      const { dataStore } = this.props;
      const filterData = dataStore.filter(item => item.checked === false);
      this.props.setDataList(filterData);
    }
  }

  doDelete(item) {
    if (window.confirm('ยืนยันการลบข้อมูล')) {
      const freshData = this.props.dataStore.filter(
        resp => resp.timestamp !== item.timestamp
      );
      this.props.setDataList(freshData);
    }
  }

  doSelectAll() {
    const { dataStore } = this.props;
    dataStore.forEach(item => {
      item.checked = !this.props.selectAll;
    });
    this.props.setDataList(dataStore);
    this.props.setSelectAll(!this.props.selectAll);
  }

  handleChecked(e, item) {
    const { selectAll, dataStore } = this.props;
    const findex = dataStore.findIndex(
      resp => resp.timestamp === item.timestamp
    );
    dataStore[findex].checked = !item.checked;
    this.props.setDataList([...dataStore]);
    if (selectAll) {
      this.props.setSelectAll(false);
    }
  }

  irenderTableBody() {
    const { arr_start, arr_end } = this.state;
    const { dataStore } = this.props;
    if (dataStore.length > 0) {
      return dataStore.slice(arr_start, arr_end).map((item, key) => {
        return (
          <tr key={key}>
            <td className="text-center">
              <input
                type="checkbox"
                className="table-checkbox"
                onChange={e => this.handleChecked(e, item)}
                checked={item.checked}
              />
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
    } else {
      return (
        <tr>
          <td colspan="6" className="text-center">
            <b>ไม่มีข้อมูล</b>
          </td>
        </tr>
      );
    }
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
    const { selectAll } = this.props;
    return (
      <div className="mt-3">
        <div className="row">
          <div className="col-6 pb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                onChange={() => this.doSelectAll()}
                checked={selectAll}
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Select All
              </label>
              &nbsp;
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.doDeleteFromSelect()}
              >
                DELETE
              </button>
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
  dataIndex: state.rootReducer.dataIndex,
  selectAll: state.rootReducer.selectAll
});

const mapDispatchToProps = {
  setFormData,
  setDataList,
  setDataIndex,
  setSelectAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableStoreComponent);
