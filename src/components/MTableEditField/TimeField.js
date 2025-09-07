import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';

function TimeField({ forwardedRef, ...props }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={props.locale}>
      <TimePicker
        {...props}
        ref={forwardedRef}
        format="HH:mm:ss"
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

export default React.forwardRef(function TimeFieldRef(props, ref) {
  return <TimeField {...props} forwardedRef={ref} />;
});
