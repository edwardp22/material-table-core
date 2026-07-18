import React from 'react';
import { render } from '@testing-library/react';

import MaterialTable from '../src';
import MTableScrollbar from '../src/components/MTableScrollbar';
import DataManager from '../src/utils/data-manager';

describe('adapted upstream compatibility fixes', () => {
  it('provides all rows to the toolbar when exportAllData is enabled', () => {
    const rows = Array.from({ length: 8 }, (_, id) => ({ id, name: `Row ${id}` }));
    let toolbarRows = [];

    function Toolbar(props) {
      toolbarRows = props.data();
      return null;
    }

    render(
      <MaterialTable
        columns={[{ title: 'Name', field: 'name' }]}
        components={{ Toolbar }}
        data={rows}
        options={{ exportAllData: true, pageSize: 5 }}
      />
    );

    expect(toolbarRows).toHaveLength(rows.length);
  });

  it('clears multi-column order, filters, search, and paging', () => {
    const dataManager = new DataManager();
    dataManager.columns = [{ tableData: { id: 4 } }, { tableData: { id: 9 } }];
    dataManager.changeColumnOrder = jest.fn();
    dataManager.changeFilterValue = jest.fn();
    dataManager.changeSearchText = jest.fn();
    dataManager.changePaging = jest.fn();

    dataManager.clearCriteria();

    expect(dataManager.changeColumnOrder).toHaveBeenCalledWith(-1, '');
    expect(dataManager.changeFilterValue).toHaveBeenCalledWith(4, '');
    expect(dataManager.changeFilterValue).toHaveBeenCalledWith(9, '');
    expect(dataManager.changeSearchText).toHaveBeenLastCalledWith('');
    expect(dataManager.changePaging).toHaveBeenCalledWith(0);
  });

  it('passes id to the table container', () => {
    const { container } = render(
      <MaterialTable
        id="fork-compatible-table"
        columns={[{ title: 'Name', field: 'name' }]}
        data={[]}
      />
    );

    expect(container.querySelector('#fork-compatible-table')).toBeTruthy();
  });

  it('forwards the scrollbar ref to its DOM element', () => {
    const ref = React.createRef();

    render(
      <MTableScrollbar ref={ref}>
        <span>content</span>
      </MTableScrollbar>
    );

    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
