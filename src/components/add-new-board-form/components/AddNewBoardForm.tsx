import { Button } from '@/components/button';
import { useAddNewBoard } from '@/components/add-new-board-form/hooks/useAddNewBoard';
import { TextField } from '@/components/text-field';
import { AddNewBoardFormTitle } from '@/components/add-new-board-form/components/addNewBoardForm.styled';
import { Labels } from '@/components/labels';
import { Spacing } from '@/components/spacing';
import { InputColumnText } from '@/components/add-new-board-form/components/InputColumnText';
import { useForm } from 'react-hook-form';

export const AddNewBoardForm = () => {
  const { columnData, addNewColum, onDeleteColumn } = useAddNewBoard();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data, columnData);
    return '';
  });

  return (
    <>
      <AddNewBoardFormTitle>Add new board</AddNewBoardFormTitle>
      <form onSubmit={onSubmit}>
        <Labels text="Board Name" id="board-name" />
        <TextField register={...register('board')} placeholder="e.g. Web Design" id="board-name" isError={false}/>

        <Labels text="Board Columns" id="columns-name" />
        {
          columnData.map(({ label }, id) => (
            <InputColumnText
              value={label}
              disabled
              onDeleteColumnName={() => onDeleteColumn(id.toString())}
              key={label}
              id={id.toString()}
            />
          ))
        }

      </form>
      <Button onClick={addNewColum} fullWidth variant="secondary">+ Add New Column</Button>
      <Spacing height="2.4rem" />
      <Button onClick={onSubmit} fullWidth variant="primaryS">Create New Board</Button>
    </>
  );
};
