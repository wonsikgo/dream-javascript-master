/* 
    Javascript Runtime 환경에서 사용가능한 객체

        - 내장객체 (Built-in Objects)

        - 호스트 객체 (Host Objects)
            
            - Browser APIs

            - Node APIs

        - 사용자 정의 객체 (User-defined Objects)


    - 내장객체
    
        - 래퍼 객체 (Wrapper Object): 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.

*/

const number = 123; // number 원시 타입

// number 원시타입을 감싸고 있는 Number 객체로 감싸진다.
console.log(number.toString());
console.log(number); // 원시 타입

const text = "text"; // string 문자열 원시타입
console.log(text);
text.length; // String 객체
text.trim();
