import { useState } from 'react';

interface ColumnName {
  label: string;
}

export const useAddNewBoard = () => {
  const [columnData, setColumnData] = useState<ColumnName[]>([{ label: 'todo' }]);

  const addNewColum = () => {
    if (columnData.length >= 3) return;

    switch (columnData.length) {
      case 1:
        setColumnData([...columnData, { label: 'doing' }]);
        break;

      case 2:
        setColumnData([...columnData, { label: 'done' }]);
        break;

      default:
        break;
    }
  };

  const onDeleteColumn = (id: string) => {
    console.log(id);
  };

  return {
    addNewColum,
    columnData,
    onDeleteColumn,
  };
};
