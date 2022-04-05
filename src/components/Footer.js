import styled from "styled-components";
import "../App.css";
import Logo from "../images/footerLogo.png";

export default function Footer() {
  return (
    <>
      <div className="wrap bg-color">
        <div className="center">
          <FooterWrap>
            <ImgArea>
              <img src={Logo} alt="logoImg" />
            </ImgArea>
            <AboutArea>
              <div className="top">
                회사소개 | 이용약관 | 개인정보처리방침 | 입점 및 제휴문의 |
                고객센터 | AS센터 | 찾아오시는 길
              </div>
              <div className="center">
                (주) Spring Watch | 주소 : 서울특별시 가나구 다라로 123층 |
                안내전화 : 1234-5678 | 문의 : abcd1234@gmail.com 사업자등록번호
                : 123-45-67890 | 통신판매업번호 : 2022-서울종로-2022 | 대표 :
                땡땡땡
              </div>
              <div className="bottom">
                COPYRIGHT ⓒ 2022 Spring Watch ALL RIGHTS RESERVED.{" "}
              </div>
            </AboutArea>
            <InfoArea>
              <div className="number">
                CUSTOMER CENTER <br />
                1234-5678
              </div>
              <div className="time">
                운영시간 평일 11:00 - 18:00 (토 /일 /공휴일 휴무) <br />
                점심시간 평일 13:00 - 14: 00
              </div>
            </InfoArea>
          </FooterWrap>
        </div>
      </div>
    </>
  );
}

const FooterWrap = styled.div`
  display: flex;
  height: 30rem;
  font-size: 1.4rem;
  line-height: 2rem;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const ImgArea = styled.div`
  margin-right: 9rem;
`;

const AboutArea = styled.div`
  max-width: 60rem;
  .top {
    margin-bottom: 2rem;
  }

  .center {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .bottom {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: 350;
  }
`;

const InfoArea = styled.div`
  max-width: 31rem;
  margin-left: 4.2rem;

  .number {
    font-weight: 900;
    font-size: 2.4rem;
    margin-bottom: 5.4rem;
    letter-spacing: 1px;
    line-height: 25px;
  }

  .time {
    font-weight: 700;
  }
`;
