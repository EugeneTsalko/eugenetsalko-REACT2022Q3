import { Form } from 'components/Form/Form';
import { PersonCard } from 'components/FormCard/FormCard';
import React from 'react';
import './FormPage.scss';
import { IPersonProps } from './FormPage.types';
import { AppDispatch, RootState } from 'redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setFormCards } from 'redux/slice';

export const FormPage = () => {
  const { formCards } = useSelector((state: RootState) => state.mainReducer);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (person: IPersonProps) => {
    dispatch(setFormCards([...(formCards || []), person]));
  };

  return (
    <div className="main">
      <Form onChange={handleChange} />
      <div className="form-cards" data-testid="react-formcards">
        {formCards &&
          formCards.map((person, index) => {
            return <PersonCard {...person} key={index}></PersonCard>;
          })}
      </div>
    </div>
  );
};
