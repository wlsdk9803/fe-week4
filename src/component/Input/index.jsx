import React, { useState } from "react";
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
  // const [] = useState();

  const onChange = (e) => {
    console.log(e.target.value);
  };

  const onReset = () => {};

  return (
    <div>
      <InputWrapper>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          //   value={}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChange}
          //   value={}
        />
        <button onClick={onReset}>초기화</button>
      </InputWrapper>

      <ViewWrapper>값 : {}</ViewWrapper>
    </div>
  );
}

export default InputSample;
