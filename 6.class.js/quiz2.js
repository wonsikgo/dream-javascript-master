/* 
    퀴즈2

    - 정직원과 파트타임직원 나타낼 수 있는 클래스를 만들어 보자
    - 직원들의 정보: 이름, 부서이름, 한달 근무 시간
    - 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
    - 정직원은 시간당 10000원
    - 파트타임 직원은 시간당 8000원
*/

class Employee {
  #name;
  #groupName;
  #workingTime;
  #salary = 0;
  constructor(name, groupName, workingTime) {
    this.#name = name;
    this.#groupName = groupName;
    this.#workingTime = workingTime;
  }

  get workingTime() {
    return this.#workingTime;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    this.#salary = value;
  }
}

class FullTimeEmployee extends Employee {
  #hourlyRate = 10000;

  calculrateSalary() {
    super.salary = this.#hourlyRate * super.workingTime;
  }
}

class PartTimeEmployee extends Employee {
  #hourlyRate = 8000;

  calculrateSalary() {
    super.salary = this.#hourlyRate * super.workingTime;
  }
}

const fullTimeEmployee = new FullTimeEmployee("철수", "개발팀", 200);
const partTimeEmployee = new PartTimeEmployee("영희", "기획팀", 300);

fullTimeEmployee.calculrateSalary();
partTimeEmployee.calculrateSalary();

console.log(fullTimeEmployee.salary);
console.log(partTimeEmployee.salary);
