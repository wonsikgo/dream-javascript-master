/* 
    주석 Comments
    TODO(이름): 해야할 일을 작성
    EX) TODO(엘리): XX기능 구현하기

    외부에서 많이 사용하는 API인 경우 JSDoc을 사용하는것이 좋음
*/

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(why)와 어떻게(how)를 설명하는 것이 좋다.
 * (단, 정멸 필요한 경우에만)
 */

/**
 * 주어진 두 인자를 더한 값을 반환함
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns a + b를 더한 값
 */
function add(a, b) {
  return a + b;
}
