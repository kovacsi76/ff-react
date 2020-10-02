import React from 'react'
import { Button } from '../../../forms/Button'

export const TableFoot = ({ dynamic, colspan, addRow, ...restProps }) => (
  dynamic
      ? (
        <tfoot className="tableFoot">
          <tr className="tableFootRow">
            <td colSpan={colspan || 1} className="tableFootColumn">
              <Button className="tableFootAddRowButton" data={{value: "Add row"}} onClick={addRow} />
            </td>
          </tr>
        </tfoot>
      )
      : null
);
