import React, { Component } from 'react';
import { connect } from 'react-redux';

/* utils */
import {
  validRequrie,
  validRequrieElm,
  contries,
  handleLimitChange,
  handleRemoveInputValue
} from './../../../Utils';

/* component */
import SelectPhoneCodeComponent from './SelectPhoneCodeComponent';

class UserInputComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      firstname: '',
      lastname: '',
      birthday: '',
      phone_number: '',
      phone_code: '66'
    };
  }

  setFlagValue(e) {
    const val = e.target.value;
    const flag = contries.find(item => item.callingCodes === val);
  }

  recheckValidInput() {
    return {
      title: validRequrieElm('inputTitle'),
      firstname: validRequrieElm('inputFirstname'),
      lastname: validRequrieElm('inputLastname'),
      birthday: validRequrieElm('inputBirthday'),
      phone_number: validRequrieElm('inputPhoneNumber')
    };
  }

  onSubmit(e) {
    // re-check input is valid...
    const errors = this.recheckValidInput();
    const isEnabled = !Object.keys(errors).some(x => errors[x]);
    e.preventDefault();
    return isEnabled;
  }

  renderOptContries() {
    return contries.map((item, key) => {
      return (
        <option key={item.alpha3Code + '_' + key} value={item.alpha3Code}>
          {item.name}
        </option>
      );
    });
  }

  renderOptPhoneCode() {
    return contries.map((item, key) => {
      return (
        <option
          className="imagebacked"
          key={item.callingCodes + '_' + key}
          value={item.callingCodes}
          data-flag={item.flag}
        >
          {'+' + item.callingCodes + ' ' + item.name}
        </option>
      );
    });
  }

  onSelectPhoneCode(phoneCode) {
    this.setState({
      phone_code: phoneCode
    });
  }

  render() {
    const { phone_code } = this.state;
    return (
      <>
        <form>
          <div className="form-group row">
            {/* input title */}
            <label htmlFor="inputTitle" className="col-md-1 col-form-label">
              Title: <span className="text-danger">*</span>
            </label>
            <div className="col-md-2">
              <select
                name="input_title"
                id="inputTitle"
                className="form-control"
                onChange={e => {
                  validRequrie(e);
                }}
                onFocus={e => {
                  validRequrie(e);
                }}
                required
              >
                <option value="">-- your title --</option>
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
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
                name="input_firstname"
                onChange={e => {
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
                name="input_lastname"
                onChange={e => {
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
                onChange={e => {
                  validRequrie(e);
                }}
                onFocus={e => {
                  validRequrie(e);
                }}
                name="input_birthday"
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
                name="input_nation"
                id="inputNation"
                className="form-control"
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
                onChange={() =>
                  handleLimitChange('inputCitizen1', 'inputCitizen2', 1)
                }
                maxLength="1"
                className="form-control text-center"
              />
              <div className="invalid-feedback">Required</div>
            </div>
            <div className="col-2">
              <input
                type="text"
                id="inputCitizen2"
                onChange={() =>
                  handleLimitChange('inputCitizen2', 'inputCitizen3', 4)
                }
                onKeyDown={e => handleRemoveInputValue(e, 'inputCitizen1')}
                maxLength="4"
                className="form-control text-center"
              />
              <div className="invalid-feedback">Required</div>
            </div>
            <div className="col-2">
              <input
                type="text"
                id="inputCitizen3"
                onChange={() =>
                  handleLimitChange('inputCitizen3', 'inputCitizen4', 4)
                }
                onKeyDown={e => handleRemoveInputValue(e, 'inputCitizen2')}
                maxLength="4"
                className="form-control text-center"
              />
              <div className="invalid-feedback">Required</div>
            </div>
            <div className="col-2">
              <input
                type="text"
                id="inputCitizen4"
                onChange={() =>
                  handleLimitChange('inputCitizen4', 'inputCitizen5', 3)
                }
                onKeyDown={e => handleRemoveInputValue(e, 'inputCitizen3')}
                maxLength="3"
                className="form-control text-center"
              />
              <div className="invalid-feedback">Required</div>
            </div>
            <div className="col-1">
              <input
                type="text"
                id="inputCitizen5"
                onChange={() => handleLimitChange('inputCitizen5', null, 1)}
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
                name="input_gender"
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
                name="input_gender"
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
                name="input_gender"
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
                name="input_phone_number"
                id="inputPhoneNumber"
                className="form-control"
                onChange={e => {
                  validRequrie(e);
                }}
                onFocus={e => {
                  validRequrie(e);
                }}
                required
              />
              <div className="invalid-feedback">Required</div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12 text-right">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={e => this.onSubmit(e)}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  formData: state.rootReducer.formDataValue
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInputComponent);