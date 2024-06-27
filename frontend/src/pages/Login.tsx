import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <LoginContainer>
        <div className='LoginForm'>
          <div className='LoginContainer'>
            <Head>
              <Link to={'/'} className='logo'>
                플랩
              </Link>
            </Head>
          </div>
          <Main>
            <MainForm>
              <h1 className='LoginContent'>로그인</h1>
              <p className='InputText'>아이디</p>
              <input type='text' className='Input' />
              <p className='InputText'>비밀번호</p>
              <input type='password' className='Input' />
              <div className='MaintainContainer'>
                <input type='checkbox' className='LoginMaintain'></input>
                <p className='MaintainText'>로그인유지</p>
              </div>
              <button
                className='LoginBtn'
                onClick={() => {
                  navigate('/');
                }}
              >
                로그인
              </button>
            </MainForm>
          </Main>
        </div>
      </LoginContainer>
    </Background>
  );
};
const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard-Medium';
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Head = styled.div`
  text-align: center;

  & > .logo {
    font-family: '달라왕 Bold';
    font-size: 40px;
    color: #6a96ec;
  }
`;

const Main = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 30px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 #0000001a;
  margin-top: 20px;
`;

const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > .LoginContent {
    text-align: center;
    font-size: 24px;
    font-weight: 'Pretendard-Bold';
    margin: 0;
    margin-bottom: 20px;
  }

  & > .InputText {
    font-size: 14px;
    margin-bottom: 10px;
  }

  & > .Input {
    width: 330px;
    height: 40px;
    border-radius: 10px;
    border: solid 1px #909090;
    padding-left: 10px;
    margin-bottom: 20px;
    &:focus {
      outline: 1.5px solid #6a96ec;
    }
  }

  & > .MaintainContainer {
    display: flex;
    margin-bottom: 10px;
  }

  & > .MaintainContainer > .MaintainText {
    color: #999;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 10px;
  }

  & > .MaintainContainer > .LoginMaintain {
    color: #999;
  }

  & > .LoginBtn {
    width: 330px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #6a96ec;
    color: #fff;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Login;
