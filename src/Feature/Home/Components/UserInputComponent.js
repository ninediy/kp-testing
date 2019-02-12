import React, { Component } from 'react';
import { connect } from 'react-redux';

/* utils */
import {
  validRequrie,
  validRequrieElm,
  contries,
  handleLimitChange,
  handleRemoveInputValue,
  isEquivalent,
  numberOnly
} from './../../../Utils';

/* component */
import SelectPhoneCodeComponent from './SelectPhoneCodeComponent';

/* actions */
import {
  setDataList,
  addDataList,
  setFormData,
  setDataIndex
} from './../../../Store/actions/AppAction';

class UserInputComponent extends Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      name_title: '',
      firstname: '',
      lastname: '',
      birthday: '',
      nationality: '',
      citizenid: ['', '', '', '', ''],
      gender: '',
      phone_number: '',
      phone_code: '66',
      passport_no: '',
      expected_salary: ''
    };

    this.state = this.defaultState;
  }

  componentDidMount() {
    if (this.props.formData) {
      this.setState(this.props.formData);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.formData &&
      !isEquivalent(prevProps.formData, this.props.formData)
    ) {
      this.setState(this.props.formData);
    }
  }

  resetState() {
    this.setState(this.defaultState);
  }

  recheckValidInput() {
    return [
      validRequrieElm('inputTitle'),
      validRequrieElm('inputFirstname'),
      validRequrieElm('inputLastname'),
      validRequrieElm('inputBirthday'),
      validRequrieElm('inputPhoneNumber'),
      validRequrieElm('inputExpecetedSalary')
    ];
  }

  onSubmit(e) {
    // re-check input is valid...
    const errors = this.recheckValidInput();
    const errIndex = errors.findIndex(x => x == false);
    if (errIndex === -1) {
      if (window.confirm('ยืนยันการบักทึกข้อมูล')) {
        if (this.props.dataIndex !== null && this.props.dataIndex !== '') {
          const dataStore = this.props.dataStore;
          dataStore[this.props.dataIndex] = this.state;
          this.props.setDataList(dataStore);
          this.doCancel();
        } else {
          this.props.addDataList(this.state);
        }
        this.resetState();
        document.getElementById('form-box').reset();
      }
    }
    e.preventDefault();
  }

  renderOptContries() {
    return contries.map((item, key) => {
      return (
        <option
          key={item.alpha3Code + '_' + key}
          phonecode={item.callingCodes}
          value={item.alpha3Code}
        >
          {item.name}
        </option>
      );
    });
  }

  onSelectPhoneCode(phoneCode) {
    this.setState({ phone_code: phoneCode });
  }

  handleInput(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  doCancel() {
    this.resetState();
    this.props.setFormData('');
    this.props.setDataIndex('');
    document.getElementById('form-box').reset();
  }

  render() {
    const {
      name_title,
      firstname,
      lastname,
      birthday,
      nationality,
      citizenid,
      gender,
      phone_number,
      phone_code,
      passport_no,
      expected_salary
    } = this.state;

    return (
      <>
        <form id="form-box">
          <div className="form-group row">
            {/* input title */}
            <label htmlFor="inputTitle" className="col-md-1 col-form-label">
              Title: <span className="text-danger">*</span>
            </label>
            <div className="col-md-2">
              <select
                name="name_title"
                id="inputTitle"
                className="form-control"
                value={name_title}
                onChange={e => {
                  this.handleInput(e);
                  validRequrie(e);
                }}
                onFocus={e => {
                  validRequrie(e);
                }}
                required
              >
                <option value="">-- your title --</option>
                <option value="mr.">Mr.</option>
                <option value="ms.">Ms.</option>
              </select>
              <div className="invalid-feedback">Required</div>
            </div>
            {/* input first-name */}
            <label htmlFor="inputFirstname" className="col-md-1 col-form-label">
              Firstname: <span className="text-danger">*</span>
            </label>
            <div className="col-md-3">
              <input
                type="text"
                id="inputFirstname"
                required
                className="form-control"
                name="firstname"
                value={firstname}
                onChange={e => {
                  this.handleInput(e);
                  validRequrie(e);
                }}
                onFocus={e => {
                  validRequrie(e);
                }}
              />
              <div className="invalid-feedback">Required</div>
            </div>

            {/* input last-name */}
            <label htmlFor="inputLastname" className="col-md-1 col-form-label">
              Lastname: <span className="text-danger">*</span>
            </label>
            <div className="col-md-4">
              <input
                type="text"
                id="inputLastname"
                required
                className="form-control"
                name="lastname"
                value={lastname}
                onChange={e => {
                  this.handleInput(e);
                  validRequrie(e);
                }}
                onFocus={e => {
                  validRequrie(e);
                }}
              />
              <div className="invalid-feedback">Required</div>
            </div>
          </div>
          <div className="form-group row">
            {/* input birthday */}
            <label htmlFor="inputBirthday" className="col-md-1 col-form-label">
              Birthday: <span className="text-danger">*</span>
            </label>
            <div className="col-md-3">
              <input
                type="date"
                value={birthday}
                onChange={e => {
                  this.handleInput(e);
                  validRequrie(e);
                }}
                onFocus={e => {
                  validRequrie(e);
                }}
                name="birthday"
                id="inputBirthday"
                className="form-control"
                required
              />
              <div className="invalid-feedback">Required</div>
            </div>
            {/* input nation */}
            <label htmlFor="inputNation" className="col-md-1 col-form-label">
              Nationality:
            </label>
            <div className="col-md-7">
              <select
                name="nationality"
                id="inputNation"
                className="form-control"
                value={nationality}
                onChange={e => {
                  this.setState({
                    phone_code: contries.find(
                      resp => resp.alpha3Code === e.target.value
                    ).callingCodes
                  });
                  this.handleInput(e);
                }}
              >
                {this.renderOptContries()}
              </select>
              <div className="invalid-feedback">Required</div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputCitizen1" className="col-md-1 col-form-label">
              CitizenID:
            </label>
            <div className="col-1">
              <input
                type="text"
                id="inputCitizen1"
                name="citizenid"
                value={citizenid[0]}
                onChange={e => {
                  this.setState({
                    citizenid: [
                      e.target.value,
                      citizenid[1],
                      citizenid[2],
                      citizenid[3],
                      citizenid[4]
                    ]
                  });
                  handleLimitChange('inputCitizen1', 'inputCitizen2', 1);
                }}
                maxLength="1"
                className="form-control text-center"
              />
              <div className="invalid-feedback">Required</div>
            </div>
            <div className="col-2">
              <input
                type="text"
                id="inputCitizen2"
                name="citizenid"
                value={citizenid[1]}
                onChange={e => {
                  this.setState({
                    citizenid: [
                      citizenid[0],
                      e.target.value,
                      citizenid[2],
                      citizenid[3],
                      citizenid[4]
                    ]
                  });
                  handleLimitChange('inputCitizen2', 'inputCitizen3', 4);
                }}
                onKeyDown={e => handleRemoveInputValue(e, 'inputCitizen1')}
                maxLength="4"
                className="form-control text-center"
              />
              <div className="invalid-feedback">Required</div>
            </div>
            <div className="col-2">
              <input
                type="text"
                name="citizenid"
                id="inputCitizen3"
                value={citizenid[2]}
                onChange={e => {
                  this.setState({
                    citizenid: [
                      citizenid[0],
                      citizenid[1],
                      e.target.value,
                      citizenid[3],
                      citizenid[4]
                    ]
                  });
                  handleLimitChange('inputCitizen3', 'inputCitizen4', 4);
                }}
                onKeyDown={e => handleRemoveInputValue(e, 'inputCitizen2')}
                maxLength="4"
                className="form-control text-center"
              />
              <div className="invalid-feedback">Required</div>
            </div>
            <div className="col-2">
              <input
                type="text"
                name="citizenid"
                id="inputCitizen4"
                value={citizenid[3]}
                onChange={e => {
                  this.setState({
                    citizenid: [
                      citizenid[0],
                      citizenid[1],
                      citizenid[2],
                      e.target.value,
                      citizenid[4]
                    ]
                  });
                  handleLimitChange('inputCitizen4', 'inputCitizen5', 3);
                }}
                onKeyDown={e => handleRemoveInputValue(e, 'inputCitizen3')}
                maxLength="3"
                className="form-control text-center"
              />
              <div className="invalid-feedback">Required</div>
            </div>
            <div className="col-1">
              <input
                type="text"
                name="citizenid"
                id="inputCitizen5"
                value={citizenid[4]}
                onChange={e => {
                  this.setState({
                    citizenid: [
                      citizenid[0],
                      citizenid[1],
                      citizenid[2],
                      citizenid[3],
                      e.target.value
                    ]
                  });
                  handleLimitChange('inputCitizen5', null, 1);
                }}
                onKeyDown={e => handleRemoveInputValue(e, 'inputCitizen4')}
                maxLength="1"
                className="form-control text-center"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputGender" className="col-md-1 col-form-label">
              Gender:
            </label>
            <div className="pt-2 ml-3 form-check">
              <input
                type="radio"
                className="form-check-input"
                id="inputCheck1"
                name="gender"
                checked={gender === 'male'}
                onChange={e => this.handleInput(e)}
                value="male"
              />
              <label className="form-check-label" htmlFor="inputCheck1">
                Male
              </label>
            </div>
            <div className="pt-2 ml-3 form-check">
              <input
                type="radio"
                className="form-check-input"
                id="inputCheck2"
                name="gender"
                checked={gender === 'female'}
                onChange={e => this.handleInput(e)}
                value="female"
              />
              <label className="form-check-label" htmlFor="inputCheck2">
                Female
              </label>
            </div>
            <div className="pt-2 ml-3 form-check">
              <input
                type="radio"
                className="form-check-input"
                id="inputCheck3"
                name="gender"
                checked={gender === 'unisex'}
                onChange={e => this.handleInput(e)}
                value="unisex"
              />
              <label className="form-check-label" htmlFor="inputCheck3">
                Unisex
              </label>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="col-md-1 col-form-label">
              Phone: <span className="text-danger">*</span>
            </label>
            <div className="col-2 pr-0">
              <SelectPhoneCodeComponent
                onSelectCode={phoneCode => {
                  this.onSelectPhoneCode(phoneCode);
                }}
                defaultCode={phone_code}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                name="phone_number"
                id="inputPhoneNumber"
                className="form-control"
                value={phone_number}
                onChange={e => {
                  this.handleInput(e);
                  validRequrie(e);
                }}
                onFocus={e => {
                  validRequrie(e);
                }}
                onKeyPress={e => numberOnly(e)}
                required
              />
              <div className="invalid-feedback">Required and numuric only</div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassport" className="col-md-1 col-form-label">
              Passport No:
            </label>
            <div className="col-md-4">
              <input
                type="text"
                id="inputPassport"
                name="passport_no"
                className="form-control"
                value={passport_no}
                onChange={e => this.handleInput(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="inputExpecetedSalary"
              className="col-md-1 col-form-label"
            >
              Expected Salary: <span className="text-danger">*</span>
            </label>
            <div className="col-md-4 col-11">
              <input
                type="text"
                id="inputExpecetedSalary"
                name="expected_salary"
                className="form-control"
                value={expected_salary}
                onChange={e => {
                  this.handleInput(e);
                  validRequrie(e);
                }}
                onFocus={e => {
                  validRequrie(e);
                }}
                onKeyPress={e => numberOnly(e)}
                required
              />

              <div className="invalid-feedback">Required and numuric only</div>
            </div>
            <div className="col-1">
              <label className="col-form-label">THB</label>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12 text-right">
              {this.props.formData ? (
                <>
                  <button
                    className="btn btn-outline-dark"
                    type="button"
                    onClick={() => {
                      this.doCancel();
                    }}
                  >
                    CANCEL
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    onClick={e => this.onSubmit(e)}
                    className="btn btn-outline-success"
                  >
                    SAVE
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={e => this.onSubmit(e)}
                >
                  SUBMIT
                </button>
              )}
            </div>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  formData: state.rootReducer.formDataValue,
  dataStore: state.rootReducer.dataStore,
  dataIndex: state.rootReducer.dataIndex
});

const mapDispatchToProps = {
  setFormData,
  setDataList,
  addDataList,
  setDataIndex
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInputComponent);
