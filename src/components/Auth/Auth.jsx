import {
  AuthLinks,
  AuthNav,
  CloseButton,
  FormItemWrapper,
  InputWrapper,
  Label,
  Input,
  Menu,
  Form,
  Title,
  HiddenCheckbox,
  FilterItemSquare,
  CheckboxWrapper,
  Button,
  AuthButtons,
  ErrorMessage,
  List,
  Down,
  Up,
  Item,
  Option,
  SelectButton,
} from './Auth.styled';
import { Icon } from 'components/Icon/Icon';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'utils/yupSchema';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, registration } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';

export const Auth = props => {
  const { closeModal } = props;
  const [isAuth, setIsAuth] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector(selectUser) || [];
  const navigate = useNavigate();
  const options = ['Жінка', 'Чоловік'];
  const [selected, setIsSelected] = useState('Жінка');
  const [isCategoriesShown, setIsCategoriesShown] = useState(false);

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
    resolver: yupResolver(loginSchema),
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
      if (remember) {
      }
      dispatch(
        registration({
          address: formData.address,
          firstname: formData.firstname,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          repeatPassword: formData.repeatPassword,
          phone: formData.phone,
          gender: formData.gender === 'Чоловік' ? 'MALE' : 'FEMALE',
        })
      );

      reset();
    } catch (error) {
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
              <FormItemWrapper>
                <Label htmlFor="email">E-mail</Label>
                <InputWrapper>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="milalitovchenko@gmail.com"
                    {...register('email')}
                    $error={errors['email'] ? true : false}
                  />
                  {errors['email'] ? (
                    <Icon
                      id={'check-wrong'}
                      width={24}
                      height={24}
                      style={{
                        position: 'absolute',
                        top: '15px',
                        right: '8px',
                        fill: `${errors['email'] ? 'red' : 'black'}`,
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
                        fill: `${errors['email'] ? 'red' : 'black'}`,
                      }}
                    />
                  )}
                </InputWrapper>
                {errors['email'] && (
                  <ErrorMessage>{errors['email'].message}</ErrorMessage>
                )}
              </FormItemWrapper>
              <FormItemWrapper>
                <Label htmlFor="password">Пароль</Label>
                <InputWrapper>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="************************"
                    {...register('password')}
                  />
                  {errors['password'] ? (
                    <Icon
                      id={'check-wrong'}
                      width={24}
                      height={24}
                      style={{
                        position: 'absolute',
                        top: '15px',
                        right: '8px',
                        fill: `${errors['password'] ? 'red' : 'black'}`,
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
                        fill: `${errors['password'] ? 'red' : 'black'}`,
                      }}
                    />
                  )}
                </InputWrapper>
                {errors['password'] && (
                  <ErrorMessage>{errors['password'].message}</ErrorMessage>
                )}
              </FormItemWrapper>
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
              <FormItemWrapper>
                <Label htmlFor="firstname">Ім’я </Label>
                <InputWrapper>
                  <Input
                    type="firstname"
                    name="firstname"
                    id="firstname"
                    placeholder="Мілана"
                    {...register('firstname')}
                    $error={errors['firstname'] ? true : false}
                  />
                  <Icon
                    id={'check-success'}
                    width={24}
                    height={24}
                    style={{ position: 'absolute', top: '15px', right: '8px' }}
                  />
                </InputWrapper>
              </FormItemWrapper>
              <FormItemWrapper>
                <Label htmlFor="lastName">Прізвище</Label>
                <InputWrapper>
                  <Input
                    type="lastName"
                    name="lastName"
                    id="lastName"
                    placeholder="Літовченко"
                    {...register('lastName')}
                    $error={errors['lastName'] ? true : false}
                  />
                  <Icon
                    id={'check-success'}
                    width={24}
                    height={24}
                    style={{ position: 'absolute', top: '15px', right: '8px' }}
                  />
                </InputWrapper>
              </FormItemWrapper>
              <FormItemWrapper>
                <Label htmlFor="firstname">Ім’я </Label>
                <InputWrapper>
                  <SelectButton
                    onClick={() => toggleCategoriesSearch()}
                    $isCategoriesShown={isCategoriesShown}
                    value={selected}
                    {...register('gender')}
                  ></SelectButton>
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
              <FormItemWrapper>
                <Label htmlFor="address">Адреса</Label>
                <InputWrapper>
                  <Input
                    type="address"
                    name="address"
                    id="address"
                    placeholder="Адреса"
                    autoComplete="address"
                    {...register('address')}
                    $error={errors['address'] ? true : false}
                  />
                  <Icon
                    id={'check-success'}
                    width={24}
                    height={24}
                    style={{ position: 'absolute', top: '15px', right: '8px' }}
                  />
                </InputWrapper>
              </FormItemWrapper>
              <FormItemWrapper>
                <Label htmlFor="phone">Номер телефону</Label>
                <InputWrapper>
                  <Input
                    type="phone"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    placeholder="+380950000000"
                    {...register('phone')}
                    $error={errors['phone'] ? true : false}
                  />
                  <Icon
                    id={'check-success'}
                    width={24}
                    height={24}
                    style={{ position: 'absolute', top: '15px', right: '8px' }}
                  />
                </InputWrapper>
              </FormItemWrapper>
              <FormItemWrapper>
                <Label htmlFor="email">E-mail</Label>
                <InputWrapper>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="milalitovchenko@gmail.com"
                    {...register('email')}
                    $error={errors['email'] ? true : false}
                  />
                  <Icon
                    id={'check-success'}
                    width={24}
                    height={24}
                    style={{ position: 'absolute', top: '15px', right: '8px' }}
                  />
                </InputWrapper>
              </FormItemWrapper>
              <FormItemWrapper>
                <Label htmlFor="password">Пароль</Label>
                <InputWrapper>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="************************"
                    {...register('password')}
                  />
                  <Icon
                    id={'check-success'}
                    width={24}
                    height={24}
                    style={{ position: 'absolute', top: '15px', right: '8px' }}
                  />
                </InputWrapper>
              </FormItemWrapper>
              <FormItemWrapper>
                <Label htmlFor="repeatPassword">Повторіть пароль</Label>
                <InputWrapper>
                  <Input
                    type="password"
                    name="repeatPassword"
                    id="repeatPassword"
                    placeholder="************************"
                    {...register('repeatPassword')}
                  />
                  <Icon
                    id={'check-success'}
                    width={24}
                    height={24}
                    style={{ position: 'absolute', top: '15px', right: '8px' }}
                  />
                </InputWrapper>
              </FormItemWrapper>
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
