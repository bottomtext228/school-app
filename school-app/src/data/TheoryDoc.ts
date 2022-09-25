export interface TheoryDocProps {
    header: string,
    description: string
}


// Excel functions 
export const theoryDocs: TheoryDocProps[] = [
    {
        header: 'СУММ',
        description: 'Суммирует аргументы.'

    },
    {
        header: 'МИН',
        description: 'Возвращает минимальное значение списка аргументов.'
    },
    {
        header: 'МАКС',
        description: 'Возвращает максимальное значение списка аргументов.'
    },
    {
        header: 'И',
        description: 'Возвращает значение ИСТИНА, если все аргументы имеют значение ИСТИНА.'
    },
    {
        header: 'ИЛИ',
        description: 'Возвращает значение ИСТИНА, если хотя бы один аргумент имеет значение ИСТИНА.'
    },
    {
        header: 'ЕСЛИ',
        description: 'Выполняет проверку условия.'
    },
    {
        header: 'СРЗНАЧ',
        description: 'Возвращает среднее арифметическое аргументов'
    },
    {
        header: 'СЧЁТЕСЛИ',
        description: 'Подсчитывает количество ячеек в диапазоне, удовлетворяющих заданному условию.'
    },
    /* {
        header: '',
        description: ''
    }, */
   


]