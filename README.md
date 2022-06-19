# 멋쟁이 사자처럼 10기 FE 4주차 과제 🦁
react 실습 세번째!
react hook!

## 문제 1번 <InputSample 컴포넌트 완성하기>
### 문제?
 name과 nickname을 입력받아서 render시키는 컴포넌트인 InputSample 컴포넌트를 완성한다.<br>
 주석 부분을 채우면 된다.
 

![image](https://user-images.githubusercontent.com/77886826/167907952-0b89c5e1-db78-40c0-90f6-8e2ee8b54d88.png)

#### :point_up:이것이 현재 위치...목표는?

https://user-images.githubusercontent.com/77886826/167908055-e3287bcf-5176-4188-8222-0773abc215d5.mov

이렇게!<br>
name과 nickname을 입력 받으면 수정되도록!

### 나의 구현 방식?
![input](https://user-images.githubusercontent.com/103057334/174482845-348019a7-cb08-48ad-83a8-f264f150b2af.png)
- name과 nickname을 설정하는 함수를 각각 setName, setNickname으로
- useState을 이용하여 입력된 name 또는 nickname이 변경되는 event가 발생하면 setName 또는 setNickname 호출한다.
- 변경되는 각각의 값은 입력된 name 또는 nickname
- '초기화' 버튼을 누르면 onReset 함수 호출
- onReset 함수는 name과 nickname을 모두 ""으로 초기화. 즉 어떤 값도 들어가지 않는다.
- 따라서 name 또는 nickname에 값이 있으면 그 값을 출력하고, 값이 없으면 없다는 문구를 출력!


## 문제 2번 <경고 해결하기>
![image](https://user-images.githubusercontent.com/77886826/167908932-02e6913b-02e6-4774-8939-43125eb32082.png)
![image](https://user-images.githubusercontent.com/77886826/167909006-f5dfa5c9-b7b2-49c9-a71f-16db78a9dd4f.png)
위의 경고 해결하기!

#### 단...
 - 오류 수정후에도 해당 button을 클릭할 때마다 숫자가 count되어 올라가도록 하기
 - useState 와 useEffect를 모두 사용하기

### 나의 구현 방식?
![problem](https://user-images.githubusercontent.com/103057334/174483353-e7847116-70c2-4208-a924-1d1a6a762194.png)

<br>

- 주석 그대로...
- 기존의 경고 문구는 deps에 count라는 변수가 없어서 발생하는 것!
- 따라서 이 count를 prev라는 변수에 저장하고, arrow function을 통해 이 변수가 항상 새로운 상태를 받아들이도록 한다.

#### 추가로...
이렇게 되면 count가 1이 아닌 2부터 시작하는 문제가 발생한다.

##### why?
rendering이 중복해서 발생하기 때문...<br>

![index](https://user-images.githubusercontent.com/103057334/174483599-40ba5044-9520-4d7d-a039-1d02b830065b.png)

<br>따라서 index.js를 위와 같이 변경하여 중복 렌더링을 방지한다!


## 문제 3번 <계산기 만들기>
### 문제?

https://user-images.githubusercontent.com/77886826/168815930-c19399fc-e6b8-43e8-a4ea-3402948e370c.mov

<br>위와 같은 계산기를 만들기!

#### 단...
 - useState와 useEffect를 필수적으로 사용하기
 - @ 버튼을 클릭하면 저장된 연산식이 초기화
 - 계산결과가 나올때마다 화면에 표시

### 나의 구현 방식?

![cal](https://user-images.githubusercontent.com/103057334/174483932-a9c787cf-1468-412a-bfac-ff1463ab9bba.png)

#### 먼저 계산기 디자인부터!
- 계산기 전체를 감싸는 CalculatorWrapper
- 계산 결과를 출력하는 창인 ResultWrapper. 계산 결과는 오른쪽에 출력되도록 하고 글자 크기는 22px로 한다.
- 계산기 버튼 스타일을 구현하는 Button. 마우스를 갖다 대면 마우스 커서가 바뀌고 버튼 색이 바뀌도록 한다. 그리고 margin을 props로 넘겨 받는다.

##### 이제 Calculator에서 이를 이용하여 계산기 형태 구현!

#### 이제 계산기 기능을 구현해보자...
- calculateValue와 display는 각각 setCalculateValue, setDisplay 함수로 설정<br>
  이때 초기화 값은 각각 ""와 false
- @ 버튼을 누르면 onReset 함수가 호출되고, 이 함수는 calculateValue를 ""로 초기화 한다.
- @와 = 이외의 버튼을 누르면 updateValue 함수가 호출되고, 이 함수는 기존의 calculateValue에 입력한 값을 더해 calculateValue 값을 다시 설정한다.
- = 버튼을 누르면 display 값이 변한다. 즉, 기존의 값이 false라면 true로, true라면 false로!
- 그리고 calculateValue에 값이 들어있는 경우에 한해, display 값이 변경되면 결과 창에 입력되어 있는 식을 계산하여 그 결과를 출력!<br>
  이 과정에서 'x'는 * 연산자로 바꿔주고, 식 결과를 계산하는 과정은 eval 함수를 이용한다.

## 실행 결과


https://user-images.githubusercontent.com/103057334/169693679-58a10c94-7d1a-404e-b0e3-504fbe2a70f2.mp4

<br> 모두 잘 실행되는 것을 확인할 수 있다.
