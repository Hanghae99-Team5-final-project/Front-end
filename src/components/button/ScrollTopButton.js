import styled from "styled-components";
import Img from "../../images/doubleUp.png";

export default function ScrollTopButton(props) {
  return (
    <>
      <Button className={props.border ? "bd" : ""}>
        <img src={Img} alt="scrollTopImg" />
      </Button>
    </>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 100%;

  &.bd {
    border: 1px solid #353535;
  }
`;
