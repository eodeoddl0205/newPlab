import styled from 'styled-components';
import Header from "../../components/Header"
import Footer from '../../components/Footer';

const TeacherScreen = () => {

    const user = {
        user: '성홍제',
        lab: '랩 7실',
        use: '캡스톤 회의때문에 빌리고 싶습니다.',
        time: '7:00'
    };

    return (
        <Background>
            <Header />
            <Inner>
                <LabReq>
                    <LabChart>
                        <div className="chart-container">
                            <h1 className='head-title'>실습실 대여 요청</h1>
                            <div className="chart">
                                <div className="chart-title">
                                    <p className="chart-detail">대표자</p>
                                    <p className="chart-detail">대여 실습실</p>
                                    <p className="chart-detail">사용 목적</p>
                                    <p className="chart-detail">대여시간</p>
                                    <p className="signBtn"></p>
                                </div>
                                <div className="chart-user">
                                    <p className="user-list">{user.user}</p>
                                    <p className="user-list">{user.lab}</p>
                                    <p className="user-list">{user.use}</p>
                                    <p className="user-list">{user.time}</p>
                                    <button className="signBtn" id='signBtn'>대여 승인</button>
                                </div>
                            </div>
                        </div>
                    </LabChart>
                </LabReq>
                <LabDel>
                    <LabChart>
                        <div className="chart-container">
                            <h1 className="head-title">실습실 대여 취소</h1>
                            <div className="chart">
                                <div className="chart-title">
                                    <p className="chart-detail">대표자</p>
                                    <p className="chart-detail">대여 실습실</p>
                                    <p className="chart-detail">사용 목적</p>
                                    <p className="chart-detail">대여시간</p>
                                    <p className="delBtn"></p>
                                </div>
                                <div className="chart-user">
                                    <p className="user-list">{user.user}</p>
                                    <p className="user-list">{user.lab}</p>
                                    <p className="user-list">{user.use}</p>
                                    <p className="user-list">{user.time}</p>
                                    <button className="delBtn" id='delBtn'>대여 취소</button>
                                </div>
                            </div>
                        </div>
                    </LabChart>
                </LabDel>
            </Inner>
            <Footer />
        </Background>

    )
}

const Background = styled.div`
  width: 100%;
  background-color: #F5F5F8;
  box-sizing: border-box;
`;

const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  font-family: 'Pretendard-Medium';
`;

const LabReq = styled.div`

`;

const LabDel = styled.div`
    height: 500px;
`;

const LabChart = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 25px;

    .head-title {
        font-size: 25px;
        font-family: "Pretendard-Bold";
    }

    .chart {
        width: 1100px;
        height: 350px;
        background-color: #fff;
        border-radius: 10px;
    }

    .chart-title {
        width: 100%;
        height: 60px;
        background-color: #6A96EC;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .chart-detail, .user-list {
        width: 100px;
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
        font-family: "Pretendard-medium";
        text-align: center;
    }

    .chart-detail {
        color: #fff;
    }

    .chart-user {
        width: 100%;
        height: 60px;
        border-bottom: 3px solid #EEEEEE;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .signBtn, .delBtn {
        width: 85px;
        height: 30px;
        border-radius: 10px;
        color: #fff;
    }

    #signBtn {
        border: 1px solid #07BC03;
        background-color: #07BC03;
        color: #fff;
        font-size: 12px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }

    #delBtn {
        border: 1px solid #EC6A6A;
        background-color: #EC6A6A;
        color: #fff;
        font-size: 12px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }
`;
export default TeacherScreen