import React, { useEffect, useState } from 'react';
import './Form.scss';
import { FormProps, FormValues } from './Form.types';
import { useForm, SubmitHandler } from 'react-hook-form';

export const Form = (props: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>();

  const [disabled, setDisabled] = useState(true);
  const [image, setImage] = useState<string>();
  const [message, setMessage] = useState<string>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // console.log('data', data);
    updateMessage();

    const newData = data;
    newData.photo = image;

    props.onChange(newData);

    reset();
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
    isValid ? setDisabled(false) : setDisabled(true);
  }, [isValid]);

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
          // disabled={disabled}
          className={(disabled && 'form__btn form__btn--disabled') || 'form__btn'}
        >
          Create
        </button>
      </form>
      <div className="form__message">{message}</div>
    </>
  );
};

// export class Form extends React.Component<FormProps, FormState> {
//   fileRef: React.RefObject<HTMLInputElement>;
//   firstNameRef: React.RefObject<HTMLInputElement>;
//   lastNameRef: React.RefObject<HTMLInputElement>;
//   dateRef: React.RefObject<HTMLInputElement>;
//   locationRef: React.RefObject<HTMLSelectElement>;
//   maleRef: React.RefObject<HTMLInputElement>;
//   femaleRef: React.RefObject<HTMLInputElement>;
//   dataAgreeRef: React.RefObject<HTMLInputElement>;

//   constructor(props: FormProps) {
//     super(props);
//     this.state = {
//       disabled: true,
//       image: '',
//       message: '',
//       isValid: true,
//       errors: {
//         firstName: '',
//         lastName: '',
//         birthDate: '',
//         location: '',
//         sex: '',
//       },
//     };
//     this.firstNameRef = React.createRef();
//     this.lastNameRef = React.createRef();
//     this.dateRef = React.createRef();
//     this.locationRef = React.createRef();
//     this.maleRef = React.createRef();
//     this.femaleRef = React.createRef();
//     this.dataAgreeRef = React.createRef();
//     this.fileRef = React.createRef();
//   }

//   setDisabled = (disabled: boolean) => {
//     this.setState({ disabled });
//   };

//   validate = () => {
//     const errors: Errors = {
//       firstName: '',
//       lastName: '',
//       birthDate: '',
//       location: '',
//       sex: '',
//     };

//     let isValid = true;

//     const formData = {
//       firstName: this.firstNameRef.current?.value,
//       lastName: this.lastNameRef.current?.value,
//       birthDate: this.dateRef.current?.value,
//       location: this.locationRef.current?.value,
//       sex: this.detectSex(),
//     };

//     if (!formData.firstName?.trim().length || formData.firstName?.length < 2) {
//       isValid = false;
//       errors.firstName = 'Please enter correct first name';
//     }

//     if (!formData.lastName?.trim().length || formData.lastName?.length < 2) {
//       isValid = false;
//       errors.lastName = 'Please enter correct last name';
//     }

//     if (!formData.birthDate) {
//       isValid = false;
//       errors.birthDate = 'Please enter birth date';
//     }

//     if (!formData.location) {
//       isValid = false;
//       errors.location = 'Please select location';
//     }

//     if (formData.sex === '') {
//       isValid = false;
//       errors.sex = 'Please choose male or female';
//     }

//     this.setState({ errors });
//     this.setState({ isValid });
//     this.setState({ disabled: !isValid });

//     return isValid;
//   };

//   detectSex = () => {
//     if (this.maleRef.current?.checked) {
//       return 'male';
//     }

//     if (this.femaleRef.current?.checked) {
//       return 'female';
//     }

//     return '';
//   };

//   handleImage = (event: React.FormEvent) => {
//     const target = event.target as HTMLInputElement;

//     if (target.files && target.files[0]) {
//       this.setState({
//         image: URL.createObjectURL(target.files[0]),
//       });
//     }
//   };

//   updateMessage = () => {
//     this.setState({ message: 'The data has been saved' });
//     setTimeout(() => this.setState({ message: '' }), 3000);
//   };

//   handleChange = () => {
//     if (this.state.isValid) {
//       this.setState({ disabled: false });
//     } else {
//       this.validate();
//     }
//   };

//   handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     if (this.validate()) {
//       const formData: FormValues = {
//         firstName: this.firstNameRef.current?.value,
//         lastName: this.lastNameRef.current?.value,
//         birthDate: this.dateRef.current?.value,
//         location: this.locationRef.current?.value,
//         dataAgree: this.dataAgreeRef.current?.checked,
//         sex: this.detectSex(),
//         photo: this.state.image,
//       };

//       this.props.onChange(formData);

//       this.updateMessage();

//       form.reset();

//       this.setState({ disabled: true, image: '' });
//     }

//     this.setDisabled(true);
//   };

//   render() {
//     return (
//       <>
//         <form
//           className="form"
//           onSubmit={this.handleSubmit}
//           onChange={this.handleChange}
//           data-testid="react-form"
//         >
//           <h1 className="form__title">Create card</h1>

//           <label htmlFor="firstName">First name:</label>
//           <input
//             ref={this.firstNameRef}
//             type="text"
//             id="firstName"
//             name="firstName"
//             className="form__text-input"
//             placeholder="Enter your first name..."
//             autoComplete="off"
//           />
//           <div className="form__error">{this.state.errors.firstName}</div>

//           <label htmlFor="lastName">Last name:</label>
//           <input
//             ref={this.lastNameRef}
//             type="text"
//             id="lastName"
//             name="lastName"
//             className="form__text-input"
//             placeholder="Enter your last name..."
//             autoComplete="off"
//           />
//           <div className="form__error">{this.state.errors.lastName}</div>

//           <label htmlFor="birthDate">Birth date:</label>
//           <input
//             ref={this.dateRef}
//             type="date"
//             data-testid="react-birthDate"
//             name="birthDate"
//             className="form__date-input"
//           />
//           <div className="form__error">{this.state.errors.birthDate}</div>

//           <label htmlFor="location">Location:</label>
//           <select
//             className="form__select"
//             data-testid="react-location"
//             name="location"
//             defaultValue={''}
//             ref={this.locationRef}
//           >
//             <option disabled value="">
//               Choose your location...
//             </option>
//             <option>Europe</option>
//             <option>Asia</option>
//             <option>Africa</option>
//             <option>Australia</option>
//             <option>Antarctica</option>
//             <option>North America</option>
//             <option>South America</option>
//           </select>
//           <div className="form__error">{this.state.errors.location}</div>

//           <fieldset>
//             <legend>Your sex:</legend>
//             <input
//               type="radio"
//               id="radio1"
//               name="sex"
//               data-testid="react-sex"
//               className="form__radio-input"
//               ref={this.maleRef}
//             />
//             <label htmlFor="radio1">Male</label>
//             <input
//               type="radio"
//               id="radio2"
//               name="sex"
//               className="form__radio-input"
//               ref={this.femaleRef}
//             />
//             <label htmlFor="radio2">Female</label>
//           </fieldset>
//           <div className="form__error">{this.state.errors.sex}</div>

//           <label htmlFor="photo">Profile photo:</label>
//           <input
//             type="file"
//             className="form__file-input"
//             id="photo"
//             name="photo"
//             ref={this.fileRef}
//             onChange={this.handleImage}
//           />

//           <label htmlFor="dataAgree">
//             <input
//               type="checkbox"
//               name="dataAgree"
//               id="dataAgree"
//               className="form__checkbox-input"
//             />
//             I consent to my personal data
//           </label>

//           <button
//             type="submit"
//             disabled={this.state.disabled}
//             className={(this.state.disabled && 'form__btn form__btn--disabled') || 'form__btn'}
//           >
//             Create
//           </button>
//         </form>
//         <div className="form__message">{this.state.message}</div>
//       </>
//     );
//   }
// }
