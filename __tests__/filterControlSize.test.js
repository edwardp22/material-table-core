import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import MaterialTable from '../src';

describe('filterControlSize', () => {
  test('applies the configured size to built-in filter controls', () => {
    render(
      <MaterialTable
        columns={[{ title: 'Name', field: 'name' }]}
        data={[]}
        options={{
          filtering: true,
          filterControlSize: 'small',
          paging: false,
          search: false,
          toolbar: false
        }}
      />
    );

    expect(
      screen.getByLabelText('filter data by Name').closest('.MuiInputBase-root')
    ).toHaveClass('MuiInputBase-sizeSmall');
  });

  test('passes the configured size to custom filter components', () => {
    const CustomFilter = ({ size }) => (
      <input data-testid="custom-filter" data-size={size} />
    );

    render(
      <MaterialTable
        columns={[
          {
            title: 'Name',
            field: 'name',
            filterComponent: CustomFilter
          }
        ]}
        data={[]}
        options={{
          filtering: true,
          filterControlSize: 'small',
          paging: false,
          search: false,
          toolbar: false
        }}
      />
    );

    expect(screen.getByTestId('custom-filter')).toHaveAttribute(
      'data-size',
      'small'
    );
  });
});
