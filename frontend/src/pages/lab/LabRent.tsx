import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal';
import Arrow from '../../assets/arrow.svg';
import GBSW from '../../assets/GBSW.webp';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import trash from '../../assets/trash.svg';

const LabRent = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = {
    user: '성홍제',
    lab: '랩 7실',
    use: '캡스톤 회의때문에 빌리고 싶습니다.',
    time: '7:00'
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleDelete = () => {
    closeModal();
  };

  return (
    <Background>
      <Header />
      <Inner>
        <Head>
          <div className='rent-container'>
            <img src={GBSW} alt='경소고 로고' className='gbsw' />
            <div className='rent-box' onClick={() => navigate('/lab/board')}>
              <p className='rent'>실습실 대여하기</p>
              <img src={Arrow} alt='오른쪽 표시 화살표' className='arrow' />
            </div>
          </div>
          <div className='notice-container'>
            <div className='notice-phrases'>
              <p className='important-notice'>매일 점심 시간 (13시 40분) 신청 마감</p>
              <div className='promise'>
                <p className='unImportant-notice'>야자 시간 전 미리 문 열어놓기 !</p>
                <p className='explanation'>
                  미리 안 열어놓고 야자시간에 열쇠달라고 해도 안 열어줌, 손으로 따다 적발 시 벌점 20점
                </p>
              </div>
              <div className='promise'>
                <p className='unImportant-notice'>실습실 사용 후 정리는 매너이자 필수 !</p>
                <p className='explanation'>
                  전원, 냉난방, 조명, 책상 의자 배치 등 정리 / 지켜지지 않을 시 2주간 실습실 이용 제한
                </p>
              </div>
            </div>
          </div>
        </Head>
        <Body>
          <div>
            <div className="rental-list">
              <p className="list-detail">대표자</p>
              <p className="list-detail">대여 실습실</p>
              <p className="list-detail">사용 목적</p>
              <p className="list-detail">대여시간</p>
              <p className="trash"></p>
            </div>
            <div className='user-list'>
              <p className="user-detail">{user.user}</p>
              <p className="user-detail">{user.lab}</p>
              <p className="user-detail">{user.use}</p>
              <p className="user-detail">{user.time}</p>
              <img src={trash} alt="delete img" className='trash' onClick={openModal} />
            </div>
          </div>
        </Body>
      </Inner>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Delete Confirmation"
        ariaHideApp={false}
      >
        <ModalContainer>
          <p className='modal-content'>실습실 대여를 <br /> 취소하시겠습니까?</p>
          <button className='modal-btn' onClick={handleDelete}>대여 취소</button>
        </ModalContainer>
      </Modal>
    </Background>
  );
};
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px', // 모달의 너비 조정
    height: '250px', // 모달의 높이 조정
    backgroundColor: '#fff', // 모달의 배경색 변경
    border: '2px solid #ccc', // 모달의 테두리 스타일 정의
    borderRadius: '20px', // 모달의 테두리 둥글게 처리
    padding: '20px', // 내부 패딩 추가
    overflow: 'auto', // 내용이 넘치면 스크롤바 표시
  },
};

const ModalContainer = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;

  .modal-content {
    font-family: Pretendard-Medium;
    font-size: 1.2rem;
  }

  .modal-btn {
    width: 170px;
    height: 30px;
    font-family: Pretendard-Bold;
    color: #fff;
    background-color: #169DFE;
    border: 1px solid #169DFE;
    border-radius: 5px;
  }
`;

const Background = styled.div`
  width: 100%;
  background-color: #f5f5f8;
  box-sizing: border-box;
`;

const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  font-family: 'Pretendard-Medium';
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 360px;

  .rent-container, .notice-container {
    border: 1px solid #bebec7;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 2px 4px 12px #00000014;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .rent-container {
    width: 250px;
    height: 250px;
  }

  .gbsw {
    margin-top: 40px;
    width: 100px;
    height: 100px;
  }

  .rent-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    cursor: pointer;
  }

  .rent {
    color: #6a96ec;
    font-size: 20px;
    font-family: 'Pretendard-Bold';
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #3067d4;
    }
  }

  .arrow {
    margin-left: 10px;
    width: 20px;
  }

  .notice-container {
    width: 800px;
    height: 250px;
    padding-left: 40px;
    justify-content: start;
  }

  .notice-phrases {
    text-align: start;
    margin-top: 15px;
    .important-notice {
      color: #fd1717;
      font-size: 20px;
      font-weight: 700;
    }

    .promise {
      font-size: 17px;
      color: #000;
      margin-bottom: 20px;

      .unImportant-notice {
        font-weight: 700;
        margin: 0 0 10px 0;
      }

      .explanation {
        margin: 0;
        color: #bebec7;
      }
    }
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  background-color: #fff;
  border: 1px solid #BEBEC7;
  border-radius: 30px;
  box-shadow: 0px 4px 8px 0px #0000001A;
  width: 1078px;
  height: 799px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 900px;
  }

  .rental-list, .user-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  .rental-list {
    height: 50px;
    border-radius: 10px;
    margin-top: 40px;
    background-color: #F4F4F4;
    font-family: "Pretendard-Bold";
  }

  .user-list {
    height: 60px;
    border-bottom: 3px solid #f4f4f4;
  }

  .list-detail, .user-detail {
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "Pretendard-medium";
    text-align: center;
  }

  .trash {
    width: 25px;
    cursor: pointer;
  }
`;

export default LabRent;
