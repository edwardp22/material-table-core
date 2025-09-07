import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';

function DateTimeField({ forwardedRef, ...props }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={props.locale}>
      <DateTimePicker
        {...props}
        ref={forwardedRef}
        format="dd.MM.yyyy HH:mm:ss"
        value={props.value || null}
        onChange={props.onChange}
        slotProps={{
          textField: {
            InputProps: {
              style: { fontSize: 13 }
            },
            inputProps: {
              'aria-label': `${props.columnDef.title}: press space to edit`,
            }
          },
          actionBar: {
            actions: ['clear']
          }
        }}
      />
    </LocalizationProvider>
  );
}

export default React.forwardRef(function DateTimeFieldRef(props, ref) {
  return <DateTimeField {...props} forwardedRef={ref} />;
});
