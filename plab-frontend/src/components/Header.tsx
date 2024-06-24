import { useNavigate, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const HomeNav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <Link to='/lab'>실습실 대여</Link>
      <Link to='/project'>프로젝트 모집</Link>
      <button onClick={() => navigate('/login')}>로그인</button>
    </nav>
  );
};

const ProjectNav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <Link to='/lab'>실습실 대여</Link>
      <Link to='/project/board'>모집글 쓰기</Link>
      <button onClick={() => navigate('/login')}>로그인</button>
    </nav>
  );
};

const Navigation = () => {
  return (
    <Routes>
      <Route path='/project' element={<ProjectNav />} />
      <Route path='/' element={<HomeNav />} />
    </Routes>
  );
};

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div className='inner'>
          <div className='head-container'>
            <div className='head-brand'>
              <Link to='/'>플랩</Link>
            </div>
            <Navigation />
          </div>
        </div>
      </HeaderStyle>
    </>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  .head-container {
    width: 100%;
    height: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    .head-brand {
      font-family: '달라왕 Bold';
      font-size: 40px;
      color: #6a96ec;
    }
    > * {
      flex-shrink: 0;
    }
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 16px;
      a {
        transition: all 0.2s ease;
        padding: 0 10px;
        margin: 0 20px;
        cursor: pointer;
        &:hover {
          color: #487ee9;
        }
      }
      button {
        margin-left: 20px;
        background-color: #fff;
        cursor: pointer;
        border: 1px solid #ddd;
        width: 85px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        box-shadow: 0 2px 10px 0 rgba(30, 30, 30, 0.05);
        transition: all 0.2s ease;
      }
    }
  }
`;

export default Header;
