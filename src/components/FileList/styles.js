import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 20px;
  margin: 0 auto;
  text-align: center;
  columns: 3;

  li {    
    justify-content: space-between;
    align-items: center;
    color: #444;
    display: inline-block;
    vertical-align: top;
    margin-top: 15px;

    & + li {
      margin-top: 15px;
    }
  }
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;  
`

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div`
  width: 128px;
  height: 256px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;
