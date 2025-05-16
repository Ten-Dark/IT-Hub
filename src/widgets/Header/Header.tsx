import { useRef, useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Auth } from '@/features/Auth/ui/Auth';
import * as S from './Header.style.ts';
import { NavLink } from 'react-router-dom';

const list = [
  'Инновации и технологии',
  'IT-решения',
  'Информационная безопасность',
  'Кейсы',
];

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const weekday: object = { weekday: 'short' };
  const month: object = { month: 'long' };

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  });

  useEffect(() => {
    if (active && inputRef.current) {
      inputRef.current.focus();
    }
  }, [active]);

  return (
    <S.Header>
      <S.Wrapper>
        <S.Div>
          <div>
            <S.P>
              {date.toLocaleString('ru-RU', weekday).toUpperCase()},{' '}
              {date.getUTCDate()} {date.toLocaleString('ru-RU', month)},{' '}
              {date.getUTCFullYear()}
            </S.P>
            <S.P>{date.toLocaleTimeString()}</S.P>
          </div>
          <NavLink end to='/' ><S.Logo $active={active}>IT-HUB</S.Logo></NavLink>
          <S.Div>
            <S.Search $active={active}>
              <IoSearch onClick={() => setActive(!active)} />
              <S.Input ref={inputRef} $active={active} />
            </S.Search>
            <S.Personal>
              {isAuth ?
              <NavLink end to='/profile' ><Auth /></NavLink>
              :
              <NavLink end to='/auth/login' ><Auth /></NavLink>
              }
              </S.Personal>
          </S.Div>
        </S.Div>
        <S.Ul>
          {list.map((el, i) => (
            <S.Li
              $active={activeIndex === i}
              onClick={() => setActiveIndex(i)}
              key={i}
            >
              {el}
            </S.Li>
          ))}
        </S.Ul>
        <hr />
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
