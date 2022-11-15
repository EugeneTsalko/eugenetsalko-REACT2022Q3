import React, { useEffect, useState } from 'react';
import './Form.scss';
import { FormProps, FormValues } from './Form.types';
import { useForm, SubmitHandler } from 'react-hook-form';

export const Form = (props: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitted, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>();

  const [disabled, setDisabled] = useState(true);
  const [image, setImage] = useState<string>();
  const [message, setMessage] = useState<string>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    updateMessage();

    const newData = data;
    newData.photo = image;

    props.onChange(newData);
  };

  const updateMessage = () => {
    setMessage('The data has been saved');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleImage = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files[0]) {
      setImage(URL.createObjectURL(target.files[0]));
    }
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    setDisabled(!isDirty || (isSubmitted && !isValid));
  }, [isDirty, isSubmitted, isValid]);

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)} data-testid="react-form">
        <h1 className="form__title">Create card</h1>

        <label htmlFor="firstName">First name:</label>
        <input
          {...register('firstName', {
            required: 'Please enter your first name',
            minLength: { value: 2, message: 'Enter at least two symbols' },
          })}
          type="text"
          id="firstName"
          name="firstName"
          className="form__text-input"
          placeholder="Enter your first name..."
          autoComplete="off"
        />
        {errors.firstName && <div className="form__error">{errors.firstName.message}</div>}

        <label htmlFor="lastName">Last name:</label>
        <input
          {...register('lastName', {
            required: 'Please enter your last name',
            minLength: { value: 2, message: 'Enter at least two symbols' },
          })}
          type="text"
          id="lastName"
          name="lastName"
          className="form__text-input"
          placeholder="Enter your last name..."
          autoComplete="off"
        />
        {errors.lastName && <div className="form__error">{errors.lastName.message}</div>}

        <label htmlFor="birthDate">Birth date:</label>
        <input
          {...register('birthDate', { required: 'Please enter birth date' })}
          type="date"
          data-testid="react-birthDate"
          name="birthDate"
          className="form__date-input"
        />
        {errors.birthDate && <div className="form__error">{errors.birthDate.message}</div>}

        <label htmlFor="location">Location:</label>
        <select
          {...register('location', { required: 'Please select your location' })}
          className="form__select"
          data-testid="react-location"
          name="location"
          defaultValue={''}
        >
          <option disabled value="">
            Choose your location...
          </option>
          <option>Europe</option>
          <option>Asia</option>
          <option>Africa</option>
          <option>Australia</option>
          <option>Antarctica</option>
          <option>North America</option>
          <option>South America</option>
        </select>
        {errors.location && <div className="form__error">{errors.location.message}</div>}

        <fieldset>
          <legend>Your sex:</legend>
          <input
            {...register('sex', { required: 'Please select male or female' })}
            type="radio"
            id="radio1"
            name="sex"
            data-testid="react-sex"
            className="form__radio-input"
          />
          <label htmlFor="radio1">Male</label>
          <input
            {...register('sex')}
            type="radio"
            id="radio2"
            name="sex"
            className="form__radio-input"
          />
          <label htmlFor="radio2">Female</label>
        </fieldset>
        {errors.sex && <div className="form__error">{errors.sex.message}</div>}

        <label htmlFor="photo">Profile photo:</label>
        <input
          {...register('photo')}
          type="file"
          className="form__file-input"
          id="photo"
          name="photo"
          onChange={handleImage}
        />

        <label htmlFor="dataAgree">
          <input type="checkbox" name="dataAgree" id="dataAgree" className="form__checkbox-input" />
          I consent to my personal data
        </label>

        <button
          type="submit"
          disabled={disabled}
          className={(disabled && 'form__btn form__btn--disabled') || 'form__btn'}
        >
          Create
        </button>
      </form>
      <div className="form__message">{message}</div>
    </>
  );
};
