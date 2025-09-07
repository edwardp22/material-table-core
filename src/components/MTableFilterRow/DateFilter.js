import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { getLocalizedFilterPlaceHolder } from './utils';
import {
  DatePicker,
  DateTimePicker,
  TimePicker,
  LocalizationProvider
} from '@mui/x-date-pickers';

function DateFilter({
  columnDef,
  onFilterChanged,
  localization,
  forwardedRef
}) {
  const onDateInputChange = (date) =>
    onFilterChanged(columnDef.tableData.id, date);

  const pickerProps = {
    value: columnDef.tableData.filterValue || null,
    onChange: onDateInputChange,
    placeholder: getLocalizedFilterPlaceHolder(columnDef, localization),
    slotProps: { actionBar: { actions: ['clear'] } }
  };
  let dateInputElement = null;
  if (columnDef.type === 'date') {
    dateInputElement = (
      <DatePicker
        {...pickerProps}
        ref={forwardedRef}
      />
    );
  } else if (columnDef.type === 'datetime') {
    dateInputElement = (
      <DateTimePicker
        {...pickerProps}
        ref={forwardedRef}
      />
    );
  } else if (columnDef.type === 'time') {
    dateInputElement = (
      <TimePicker
        {...pickerProps}
        ref={forwardedRef}
      />
    );
  }

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      locale={localization.dateTimePickerLocalization}
    >
      {dateInputElement}
    </LocalizationProvider>
  );
}

export default React.forwardRef(function DateFilterRef(props, ref) {
  return <DateFilter {...props} forwardedRef={ref} />;
});
