import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 50px;
`;

const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 500px;
  height: 50px;
`;

function InputSample() {
  //이 페이지에서 useState를 단 한번만 사용한다면 선착순 한분에게 커피한잔 사드립니다!
  // 요 위치에 useState 구문이 들어가면 됩니다!
  const onChange = (e) => {
    console.log(e.target.value); // e.target.value 가 무엇일까요??
    // 여기에 코드를 작성하여 해결합니다!
    // onChange 함수를 읽히고 이 함수가 사용될때 useState 가 사용되면 되겠죠?
  };

  const onReset = () => {
    // 여기는 reset 버튼을 눌렀을때 발생하는 함수입니다!!
  };

  return (
    <div>
      <InputWrapper>
        <input
          name="name"
          placeholder="이름"
          // onChange={}
          //   value={}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          // onChange={}
          //   value={}
        />
        <button onClick={onReset}>초기화</button>
      </InputWrapper>

      <ViewWrapper>값 : {}</ViewWrapper>
    </div>
  );
}

export default InputSample;
