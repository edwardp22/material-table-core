import React, { createElement } from 'react';

function Filter({ columnDef, onFilterChanged, forwardedRef, size }) {
  return createElement(columnDef.filterComponent, {
    columnDef,
    onFilterChanged,
    forwardedRef,
    size
  });
}

export default React.forwardRef(function FilterRef(props, ref) {
  return <Filter {...props} forwardedRef={ref} />;
});
