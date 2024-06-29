import styled from 'styled-components';
import Header from '../../components/Header';

const LabEnroll = () => {
  return (
    <Background>
      <Header />
      <Inner>
        <div className='rental-screen'>
          <div className='rental-container'>
            <div className='rental-logo'>1. 대여희망일</div>
            <input type='date' className='rental-input' />
          </div>
          <div className='rental-container'>
            <div className='rental-logo'>2. 대표자 이름 기재 (반 / 이름)</div>
            <input type='text' className='rental-input' />
          </div>
          <div className='rental-container'>
            <div className='rental-logo'>3. 사용 인원 전원 기재 (반 / 이름)</div>
            <input type='text' className='rental-input' />
          </div>
          <div className='rental-container'>
            <div className='rental-logo'>4. 사용 목적</div>
            <textarea className='rental-textarea' />
          </div>
          <div className='rental-container'>
            <div className='rental-logo'>5. 사용 대여 시간</div>
            <form className='rental-form'>
              <select className='rental-input' id='rental-time' defaultValue=''>
                <option value='' disabled></option>
                <option value=''>점심시간(12:30~13:40)</option>
                <option value=''>방과후시간(16:30~18:10)</option>
                <option value=''>저녁시간(18:10~19:10)</option>
                <option value=''>야자시간(19:10~20:30)</option>
              </select>
            </form>
          </div>
          <div className='rental-container' id='rental-container'>
            <div className='rental-logo'>6. 대여 희망 실습실</div>
            <form className='rental-form'>
              <select className='rental-input' id='rental-input' defaultValue=''>
                <option value='' disabled></option>
                <option value=''>2층 컴퓨터 교육실</option>
                <option value=''>2층 메이커 실습실</option>
                <option value=''>2층 LAP1</option>
                <option value=''>2층 LAP2</option>
                <option value=''>3층 프로젝트 실습실 (2-1 앞)</option>
                <option value=''>3층 모바일 실습실 (2-2 앞)</option>
                <option value=''>3층 임베디드 실습실 (2-3 앞)</option>
                <option value=''>3층 응용프로그래밍 실습실1 (2-4 앞)</option>
                <option value=''>3층 LAP3</option>
                <option value=''>3층 LAP4</option>
                <option value=''>4층 응용프로그래밍 실습실2 (1-1 앞)</option>
                <option value=''>4층 게임개발 실습실 (1-2 앞)</option>
                <option value=''>4층 채움교실 (1-4 앞)</option>
                <option value=''>4층 LAP6</option>
                <option value=''>4층 LAP7</option>
              </select>
              <button className='rental-btn'>대여하기</button>
            </form>
          </div>
        </div>
      </Inner>
    </Background>
  );
};
const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f8; /* 배경색을 원하는 색상으로 지정하세요 */
  box-sizing: border-box;
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤바 표시 */
  font-family: 'Pretendard-Medium';
`;

const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto; // 중앙 정렬
  font-family: 'Pretendard-Medium';

  & > .rental-screen {
    margin-top: 50px;
    margin-bottom: 50px;
    height: 100%;
  }

  & > .rental-screen > .rental-container {
    width: 100%;
    margin-top: 40px;
  }

  & > .rental-screen > .rental-container > .rental-logo {
    width: 100%;
    height: 60px;
    border-bottom: 3px solid #bebec7;
    font-size: 20px;
    font-family: 'Pretendard-Bold';
  }

  & > .rental-screen > .rental-container > .rental-input {
    width: 350px;
    height: 50px;
    border: 2px solid #bebec7;
    border-radius: 10px;
    margin-top: 30px;
    padding-left: 10px;
    background-image: url('path/to/calendar-image.png');
    background-repeat: no-repeat;
    background-position: right center; /* 이미지를 오른쪽 중앙에 위치하도록 설정 */
    padding-right: 10px; /* 이미지를 표시하기 위해 오른쪽 여백 추가 */
    outline: none;
  }

  & > .rental-screen > .rental-container > .rental-textarea {
    width: 350px;
    height: 100px;
    border: 2px solid #bebec7;
    border-radius: 10px;
    margin-top: 30px;
    padding-left: 10px;
    padding-top: 10px;
    background-image: url('path/to/calendar-image.png');
    background-repeat: no-repeat;
    background-position: right center; /* 이미지를 오른쪽 중앙에 위치하도록 설정 */
    padding-right: 10px; /* 이미지를 표시하기 위해 오른쪽 여백 추가 */
    outline: none;
  }

  & > .rental-screen > .rental-container > .rental-form > #rental-time {
    width: 350px;
    height: 50px;
    border: 2px solid #bebec7;
    border-radius: 10px;
    margin-top: 30px;
    padding-left: 20px;
    background-image: url('path/to/calendar-image.png');
    background-repeat: no-repeat;
    background-position: right center; /* 이미지를 오른쪽 중앙에 위치하도록 설정 */
    padding-right: 10px; /* 이미지를 표시하기 위해 오른쪽 여백 추가 */
    outline: none;
  }

  & > .rental-screen > .rental-container > .rental-form > #rental-input {
    width: 350px;
    height: 50px;
    border: 2px solid #bebec7;
    border-radius: 10px;
    margin-top: 30px;
    margin-bottom: 250px;
    padding-left: 20px;
    background-image: url('path/to/calendar-image.png');
    background-repeat: no-repeat;
    background-position: right center; /* 이미지를 오른쪽 중앙에 위치하도록 설정 */
    padding-right: 10px; /* 이미지를 표시하기 위해 오른쪽 여백 추가 */
    outline: none;
  }

  & > .rental-screen > .rental-container > .rental-form {
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > .rental-screen > .rental-container > .rental-form > .rental-btn {
    width: 170px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #169dfe;
    color: #fff;
    margin-top: 100px;
    &:hover {
      cursor: pointer;
    }
  }
`;
export default LabEnroll;
