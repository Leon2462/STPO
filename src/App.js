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
        if (inputValue) {
        const result = appMethods.calcResult(inputValue)
        if (result[1]) {
            setResult(result[0])
            setErrors('')
        }
        else {
            setErrors(result[0])
            setResult('')
        }
    } else {
        setErrors('')
        setResult('')
    }

    }
    return (
        <div>
            <strong id ='header'>Вариант №9</strong>
            <p id ='task'>
                Ввести массив не более чем из 10 трехзначных целых чисел. Удалить из
                массива те числа, которые удовлетворяют условию: число является простым и
                если к этому числу прибавить 1, то полученное число будет являться степенью
                двух, и степень двух так же простое число. Например, число 31 удовлетворяет
                заданному условию: оно простое, 31+1=25 и 5 простое. Вывести измененный
                массив или сообщение о том, что нет чисел, удовлетворяющих условию.
            </p>
            <label id = 'label'>Поле для ввода элементов массива: </label>
             <input id = 'input' style = {{width: '300px'}}type = "text" onChange = {inputHandler} value = {inputValue}/>
            <button id = 'clearbtn' style = {{margin: '10px'}} onClick={clearInput}>Очистить поле</button>
            <button id = 'deletebtn'onClick={deleteElem}>Удалить элементы</button>
            <div id = 'errormessage' style={{whiteSpace: 'pre-line', color: 'red' }}>{errors}</div>
            <div id = 'result' >{result}</div>
        </div>
    )
}
export default App;