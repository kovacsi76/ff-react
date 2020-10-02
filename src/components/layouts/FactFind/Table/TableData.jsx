import React from 'react'
import { RecursiveFactfindBuilder } from '../../../FactFind/RecursiveFactfindBuilder';
import { Button } from '../../../forms/Button';

export const TableData = ({ columns, dynamic, removeRow, ...restProps }) => (
  <>
    {columns.map(column => (
      <td key={column.module.id} className="tableBodyColumn">
        <RecursiveFactfindBuilder components={[column]} />
      </td>
    ))}
    {dynamic &&
      <td className="tableBodyColumn">
        <Button className="tableBodyRemoveRowButton" data={{value: "remove"}} onClick={removeRow} />
      </td>
    }
  </>
);
