import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../redux/auth/selectors';
import { login, registration } from '../../redux/auth/operations';
import { loginSchema, registerSchema } from 'utils/yupSchema';

import InputField from './InputField/InputField';
import {
  AuthLinks,
  AuthNav,
  CloseButton,
  FormItemWrapper,
  InputWrapper,
  Label,
  Menu,
  Form,
  Title,
  HiddenCheckbox,
  FilterItemSquare,
  CheckboxWrapper,
  Button,
  AuthButtons,
  List,
  Down,
  Up,
  Item,
  Option,
  SelectButton,
} from './Auth.styled';
import { Icon } from 'components/Icon/Icon';

export const Auth = props => {
  const { closeModal } = props;
  const [isAuth, setIsAuth] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector(selectUser) || [];
  const navigate = useNavigate();
  const options = ['Жінка', 'Чоловік'];
  const [selected, setIsSelected] = useState('Жінка');
  const [isCategoriesShown, setIsCategoriesShown] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const toggleCategoriesSearch = () => {
    setIsCategoriesShown(!isCategoriesShown);
  };
  console.log(user);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: isAuth ? yupResolver(loginSchema) : yupResolver(registerSchema),
  });
  const remember = watch('remember');

  console.log(errors);
  const toggle = () => {
    console.log(isAuth);
    setIsAuth(!isAuth);
  };

  const onRegistration = async formData => {
    try {
      console.log(formData);
      console.log(selected);
      if (remember) {
      }
      const result = await dispatch(
        registration({
          address: formData.address,
          firstname: formData.firstname,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          repeatPassword: formData.repeatPassword,
          phone: formData.phone,
          gender: selected === 'Чоловік' ? 'MALE' : 'FEMALE',
        })
      );
      if (registration.fulfilled.match(result)) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
      setFormStatus('success');
      reset();
    } catch (error) {
      setFormStatus('error');
      console.error(error);
    }
  };

  const onLogin = async formData => {
    try {
      console.log(formData);
      if (remember) {
      }
      dispatch(login({ email: formData.email, password: formData.password }));
      navigate('/customer');
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Menu>
      <CloseButton
        className={`close-modal-button `}
        onClick={closeModal}
        aria-label="Close modal"
      >
        <Icon id={'close'} width={18} height={18} />
      </CloseButton>
      <AuthNav>
        <AuthLinks>
          <AuthButtons onClick={toggle} $isActive={isAuth ? true : false}>
            Вхід
          </AuthButtons>
        </AuthLinks>
        <AuthLinks>
          <AuthButtons onClick={toggle} $isActive={!isAuth ? true : false}>
            Реєстрація
          </AuthButtons>
        </AuthLinks>
      </AuthNav>
      <div>
        {isAuth ? (
          <>
            <Title>Вхід в особистий кабінет</Title>
            <Form
              onSubmit={handleSubmit(onLogin)}
              autoComplete="off"
              noValidate
            >
              <InputField
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="milalitovchenko@gmail.com"
                register={register}
                errors={errors}
                label={'E-mail'}
                formStatus={formStatus}
              />
              <InputField
                type="password"
                name="password"
                id="password"
                autoComplete="email"
                placeholder="************************"
                register={register}
                errors={errors}
                label={'Пароль'}
                formStatus={formStatus}
              />
              <CheckboxWrapper>
                <HiddenCheckbox
                  name="remember"
                  id="remember"
                  {...register('remember')}
                />
                <FilterItemSquare>
                  <Icon
                    id={'check'}
                    width={18}
                    height={18}
                    style={{
                      display: remember === true ? 'block' : 'none',
                    }}
                  />
                </FilterItemSquare>

                <label htmlFor="remember">
                  Запам'ятати на цьому комп'ютері
                </label>
              </CheckboxWrapper>
              <div>
                <p>Забули пароль?</p>
              </div>
              <Button type="submit">Увійти</Button>
            </Form>
            <div></div>
          </>
        ) : (
          <>
            <Title>Реєстрація</Title>
            <Form onSubmit={handleSubmit(onRegistration)}>
              <InputField
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="firstName"
                placeholder="Мілана"
                register={register}
                errors={errors}
                label={'Ім’я'}
                formStatus={formStatus}
              />
              <InputField
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="lastName"
                placeholder="Літовченко"
                register={register}
                errors={errors}
                label={'Прізвище'}
                formStatus={formStatus}
              />
              <FormItemWrapper>
                <Label htmlFor="gender"> </Label>
                <InputWrapper>
                  <SelectButton
                    id="gender"
                    onClick={() => toggleCategoriesSearch()}
                    $isCategoriesShown={isCategoriesShown}
                  >
                    {selected}
                  </SelectButton>
                  {!isCategoriesShown ? <Down /> : <Up />}
                  <List $isCategoriesShown={isCategoriesShown}>
                    {options.map((option, index) => (
                      <Fragment key={index}>
                        {selected !== option && (
                          <Item>
                            <Option
                              onClick={() => {
                                setIsSelected(option);
                                setIsCategoriesShown(false);
                              }}
                            >
                              {option}
                            </Option>
                          </Item>
                        )}
                      </Fragment>
                    ))}
                  </List>
                </InputWrapper>
              </FormItemWrapper>
              <InputField
                type="text"
                name="address"
                id="address"
                autoComplete="address"
                placeholder="Адреса"
                register={register}
                errors={errors}
                label={'Адреса'}
                formStatus={formStatus}
              />
              <InputField
                type="tel"
                name="phone"
                id="phone"
                autoComplete="phone"
                placeholder="+380950000000"
                register={register}
                errors={errors}
                label={'Номер телефону'}
                formStatus={formStatus}
              />
              <InputField
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="milalitovchenko@gmail.com"
                register={register}
                errors={errors}
                label={'E-mail'}
                formStatus={formStatus}
              />
              <InputField
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                placeholder="************************"
                register={register}
                errors={errors}
                label={'Пароль'}
                formStatus={formStatus}
              />
              <InputField
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                autoComplete="repeatPassword"
                placeholder="************************"
                register={register}
                errors={errors}
                label={'Повторіть пароль'}
                formStatus={formStatus}
              />
              <CheckboxWrapper>
                <HiddenCheckbox
                  name="remember"
                  id="remember"
                  {...register('remember')}
                />
                <FilterItemSquare>
                  <Icon
                    id={'check'}
                    width={18}
                    height={18}
                    style={{
                      display: remember === true ? 'block' : 'none',
                    }}
                  />
                </FilterItemSquare>

                <label htmlFor="remember">
                  Запам'ятати на цьому комп'ютері
                </label>
              </CheckboxWrapper>
              <Button type="submit">Увійти</Button>
            </Form>
            <div></div>
          </>
        )}
      </div>
    </Menu>
  );
};
