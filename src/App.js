import {useState} from 'react'
import {AppMethods} from './AppMethods'

let appMethods = new AppMethods()

const App = () => {
    
    const [inputValue, setInputValue] = useState('');
    const [errors, setErrors] = useState('');
    const [result, setResult] = useState('')

    const clearInput = () => {        
        setInputValue('');
        setErrors('')
        setResult('')
    }

    const inputHandler = (event) => {
        setInputValue(event.target.value)
    }

    const deleteElem = () => {
        let errors = false;
        let errorElements = [];
        let errorMessage = '';
        const array = inputValue.split(' ').filter( n=>n )
        // Проверка длины
        if (array.length > 10) {
            errors = true;
            errorMessage += 'Введено больше 10 элементов!\n\n'
        }
        // Проверка элементов
        array.forEach(item => {
            if (Math.abs(+item) >= 100 && Math.abs(+item) <= 999 && Number.isInteger(+item)) {
                item = parseInt(item)
            } else {
                errors = true
                errorElements.push(item)
            }
        })

        if (errors) {

            console.log('Failed')

            if (errorElements.length !== 0)
            {
                errorMessage += 'Некорректные элементы: ' + errorElements.join('  ')
            }
            setErrors(errorMessage)
            setResult('')
        }
        else {

            console.log('Success')

            if (errorMessage === '') {
                setErrors('')
            }
            if (array.length === 0)
            {
                setResult('')
            }

            const new_array = appMethods.deleteElems(array)
            if (new_array.join() !== array.join()) {
                setResult('Результат: ' + new_array.join())
            }
            else if (new_array.length !== 0){
                setResult('Нет чисел удовлетворяющих условию!')
            }
        }
    }
    return (
        <div>
            <strong>Вариант №9</strong>
            <p>
                Ввести массив не более чем из 10 трехзначных целых чисел. Удалить из
                массива те числа, которые удовлетворяют условию: число является простым и
                если к этому числу прибавить 1, то полученное число будет являться степенью
                двух, и степень двух так же простое число. Например, число 31 удовлетворяет
                заданному условию: оно простое, 31+1=25 и 5 простое. Вывести измененный
                массив или сообщение о том, что нет чисел, удовлетворяющих условию.
            </p>
            <label>Поле для ввода элементов массива: </label>
             <input type = "text" onChange = {inputHandler} value = {inputValue}/>
            <button style = {{margin: '10px'}} onClick={clearInput}>Очистить поле</button>
            <button onClick={deleteElem}>Удалить числа</button>
            <div style={{whiteSpace: 'pre-line'}}>{errors}</div>
            <div>{result}</div>
        </div>
    )
}
export default App; 