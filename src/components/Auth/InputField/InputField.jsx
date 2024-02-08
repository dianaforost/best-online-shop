import { Icon } from 'components/Icon/Icon';
import { ErrorMessage, Input } from './InputField.styled';
import { FormItemWrapper, InputWrapper, Label } from '../Auth.styled';

export const InputField = ({
  type,
  name,
  id,
  placeholder,
  register,
  errors,
  label,
  formStatus,
}) => (
  <FormItemWrapper>
    {label && <Label htmlFor={name}>{label}</Label>}
    <InputWrapper>
      <Input
        type={type}
        name={name}
        id={id}
        autoComplete={name}
        placeholder={placeholder}
        {...register(name)}
        $error={errors[name] ? true : false}
        style={{
          borderColor: `${
            errors[name] || formStatus === 'error'
              ? '#CD1106'
              : formStatus === 'success'
              ? '#1C983B'
              : '#757575'
          }`,
        }}
      />
      {errors[name] || formStatus === 'error' ? (
        <Icon
          id={'check-wrong'}
          width={24}
          height={24}
          style={{
            position: 'absolute',
            top: '15px',
            right: '8px',
            fill: `${
              errors[name] || formStatus === 'error' ? '#CD1106' : '#757575'
            }`,
          }}
        />
      ) : formStatus === 'success' ? (
        <Icon
          id={'check-success'}
          width={24}
          height={24}
          style={{
            position: 'absolute',
            top: '15px',
            right: '8px',
            fill: '#1C983B',
          }}
        />
      ) : (
        <Icon
          id={'check-success'}
          width={24}
          height={24}
          style={{
            position: 'absolute',
            top: '15px',
            right: '8px',
            fill: `${
              errors[name] || formStatus === 'error' ? '#CD1106' : '#757575'
            }`,
          }}
        />
      )}
    </InputWrapper>
    {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
  </FormItemWrapper>
);

export default InputField;
