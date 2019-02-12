import React, { useState, useEffect } from 'react';
import { contries } from './../../../Utils';

function SelectPhoneCodeComponent(props) {
  // react-hooks
  const [code, setCode] = useState(null);
  const [flag, setFlag] = useState('');

  useEffect(() => {
    if (props.defaultCode) {
      doFindFlag(props.defaultCode);
    }
  });

  const renderContriesWithFlag = () => {
    return contries.map((resp, index) => {
      return (
        <span
          key={index + '_' + resp.callingCodes}
          className="dropdown-item"
          href="#"
          onClick={() => {
            setFlag(resp.flag);
            setCode(resp.callingCodes);
            props.onSelectCode(resp.callingCodes);
          }}
        >
          <img src={resp.flag} className="flag-sm" alt="flag" /> {resp.name}
        </span>
      );
    });
  };

  const doFindFlag = phoneCode => {
    const resp = contries.find(item => item.callingCodes === phoneCode);
    if (resp && resp.callingCodes !== code) {
      setFlag(resp.flag);
      setCode(resp.callingCodes);
    }
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {flag ? <img src={flag} alt="flag" className="flag-sm" /> : 'code'}
        </button>
        <div className="dropdown-menu dropdown-limit">
          {renderContriesWithFlag()}
        </div>
      </div>
      <input
        type="text"
        className="form-control text-center"
        aria-label="Text input with dropdown button"
        value={code ? '+' + code : ''}
        onChange={() => {}}
        readOnly
      />
    </div>
  );
}

export default SelectPhoneCodeComponent;
