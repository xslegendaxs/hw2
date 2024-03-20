let object = {};                             // чтобы проверить надо написать {key: 1/'привет'}                                   
console.log(isObjectEmpty(object));


function isObjectEmpty(obj) {             //Функция objectEmpty принимает объект obj в качестве аргумента.
    for (let key in obj) {               //Тут в цикле for...in происходит перебор всех ключей объекта.
        if (obj.hasOwnProperty(key)) {  //hasOwnProperty() содержит ли объект какое либо свойство/значение.
            return false;              //Если хотя бы одна переменная обнаружена функция сразу возвращает false.
        }
    }
    return true;                     //Если цикл завершается и не было найдено переменных функция возвращает true.
}