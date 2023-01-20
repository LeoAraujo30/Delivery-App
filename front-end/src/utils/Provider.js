import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
    const oi = "oi"
    const contextValue = {
        oi
    };
  
    return (
      <AppContext.Provider value={ contextValue }>
        {children}
      </AppContext.Provider>
    );
  }
  
  Provider.propTypes = {
    children: PropTypes.objectOf(PropTypes.number).isRequired,
  };
  
  export default Provider;