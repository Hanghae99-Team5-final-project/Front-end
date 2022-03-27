import styled from "styled-components";
import "../../App.css";

export default function MoreButton(props) {
  return (
    <>
      <Button className={props.bg ? "bg-color" : ""}>More</Button>
    </>
  );
}

const Button = styled.button`
  width: 20rem;
  height: 5rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  background-color: #fff;

  &.bg-color {
    color: #fff;
    background-color: #555c79;
  }
`;
