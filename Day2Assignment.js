var arr = [10, 20, 30, 40, 50];
var squareArr = squareOfArrayElements(arr);
console.log(squareArr);

function squareOfArrayElements(arrParam) {   
    var resultArr = [];
    for (var i = 0; i < arrParam.length; i++)
        resultArr[i] = (arrParam[i] * arrParam[i]);
    return resultArr;
}

var phoneNumber = 1234567890;
var maskedPhoneNUmber = createMaskedPhoneNUmber(phoneNumber);
console.log(maskedPhoneNUmber);

function createMaskedPhoneNUmber(phoneNumberParam) {
    var strphoneNumber = phoneNumberParam.toString();
    if (Number.isInteger(phoneNumberParam))
        return strphoneNumber.replace(strphoneNumber.substring(3, 7), "****");
}

var emparr = [
{empId: 101, empName: "Asha", salary: 1001, deptId: "D1"},
{empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1"},
{empId: 103, empName: "Karan", salary: 2000, deptId: "D2"},
{empId: 104, empName: "Kishan", salary: 3000, deptId: "D1"},
{empId: 105, empName: "Keshav", salary: 3500, deptId: "D2"},
{empId: 106, empName: "Pran", salary: 4000, deptId: "D3"},
{empId: 107, empName: "Saurav", salary: 3800, deptId: "D3"}];

var getHighestSalary = getHighestSalary(emparr);
console.log(getHighestSalary);

function getHighestSalary(emparrParam) {
    return emparrParam.sort((a, b) => (parseInt(a.salary) > parseInt(b.salary)) ? -1 : +1)[0]
}