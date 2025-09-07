import React from 'react';
import { getLocalizedFilterPlaceHolder, getLocalizationData } from './utils';
import { InputAdornment, TextField, Tooltip } from '@mui/material';

function DefaultFilter({
  columnDef,
  icons,
  localization,
  hideFilterIcons,
  onFilterChanged,
  forwardedRef
}) {
  const _localization = getLocalizationData(localization);
  const FilterIcon = icons.Filter;

  return (
    <TextField
      ref={forwardedRef}
      style={
        columnDef.type === 'numeric'
          ? { float: columnDef.align ?? 'right' }
          : { float: columnDef.align ?? 'left' }
      }
      type={columnDef.type === 'numeric' ? 'number' : 'search'}
      value={columnDef.tableData.filterValue || ''}
      placeholder={getLocalizedFilterPlaceHolder(columnDef, localization)}
      onChange={(event) => {
        onFilterChanged(columnDef.tableData.id, event.target.value);
      }}
      slotProps={{
        input: hideFilterIcons || columnDef.hideFilterIcon
          ? undefined
          : {
            startAdornment: (
              <InputAdornment position="start">
                <Tooltip title={_localization.filterTooltip}>
                  <FilterIcon />
                </Tooltip>
              </InputAdornment>
            )
          },
        htmlInput: {
          'aria-label': `filter data by ${columnDef.title}`
        }
      }}
    />
  );
}

export default React.forwardRef(function DefaultFilterRef(props, ref) {
  return <DefaultFilter {...props} forwardedRef={ref} />;
});
