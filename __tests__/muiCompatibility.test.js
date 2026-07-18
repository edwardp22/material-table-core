import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateField from '../src/components/MTableEditField/DateField';
import BooleanFilter from '../src/components/MTableFilterRow/BooleanFilter';
import icons from '../src/defaults/props.icons';

describe('MUI compatibility', () => {
  test('keeps the boolean filter label and three-state behavior', () => {
    const onFilterChanged = jest.fn();
    const columnDef = {
      title: 'Active',
      tableData: { id: 3, filterValue: undefined }
    };

    const { rerender } = render(
      <BooleanFilter
        columnDef={columnDef}
        onFilterChanged={onFilterChanged}
      />
    );

    fireEvent.click(screen.getByRole('checkbox', { name: 'Filter of Active' }));
    expect(onFilterChanged).toHaveBeenLastCalledWith(3, 'checked');

    columnDef.tableData.filterValue = 'checked';
    rerender(
      <BooleanFilter
        columnDef={columnDef}
        onFilterChanged={onFilterChanged}
      />
    );
    fireEvent.click(screen.getByRole('checkbox', { name: 'Filter of Active' }));
    expect(onFilterChanged).toHaveBeenLastCalledWith(3, 'unchecked');
  });

  test('keeps the date editor accessible through its column label', () => {
    render(
      <DateField
        columnDef={{ title: 'Created at' }}
        value={new Date(2026, 0, 2)}
        onChange={jest.fn()}
      />
    );

    expect(
      screen.getByLabelText('Created at: press space to edit')
    ).toBeInTheDocument();
  });

  test('keeps the public delete icon contract', () => {
    const DeleteIcon = icons.Delete;
    render(<DeleteIcon />);

    expect(screen.getByTestId('delete_outline')).toBeInTheDocument();
  });
});
