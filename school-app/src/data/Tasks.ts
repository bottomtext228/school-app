export interface TaskProps {
    name: string;
    theory: string;
    solution: string;
    answer: string;
    file: string
}

export const tasks: TaskProps[] = [
    {
        name: '9.1',
        theory: 'Откройте файл электронной таблицы, содержащей вещественные числа — результаты ежечасного измерения температуры воздуха на протяжении трёх месяцев.\nНайдите разность между максимальным значением температуры и её средним арифметическим значением.\nВ ответе запишите только целую часть получившегося числа.\n',
        solution: 'Для поиска максимального значения температуры воспользуемся формулой =МАКС(B2:Y92) в ячейке Z2.\nМаксимальное значения температуры равно 38,0.\nТеперь в ячейке Z3 с помощью формулы =СРЗНАЧ(B2:Y92) найдём среднее арифметическое значение всех измерений — 23,7.\nТеперь найдём разность в ячейке Z4 с помощью формулы =Z2–Z3: 38,0 − 23,7 = 14,3. Тогда ответ — 14.',
        answer: '14',
        file: 'https://inf-ege.sdamgia.ru/doc/inf/zadanie9/9_27406.xlsx'
    },
    {
        
        name: '9.2',
        theory: 'Откройте файл электронной таблицы, содержащей вещественные числа — результаты ежечасного измерения температуры воздуха на протяжении трёх месяцев.\nНайдите разность между максимальным значением температуры и её средним арифметическим значением.\nВ ответе запишите только целую часть получившегося числа.',
        solution: 'Для поиска максимального значения температуры воспользуемся формулой =МАКС(B2:Y92) в ячейке Z2.\nМаксимальное значения температуры равно 39,0.\nТеперь в ячейке Z3 с помощью формулы =СРЗНАЧ(B2:Y92) найдём среднее арифметическое значение всех измерений — 23,9.\nТеперь найдём разность в ячейке Z4 с помощью формулы =Z2–Z3: 39,0 − 23,9 = 15,1. Тогда ответ — 15.',
        answer: '15',
        file: 'https://inf-ege.sdamgia.ru/doc/inf/zadanie9/9_27517.xlsx'
    },
    {
        name: '9.3',
        theory: 'Откройте файл электронной таблицы, содержащей вещественные числа — результаты ежечасного измерения температуры воздуха на протяжении трёх месяцев.\nНайдите разность между минимальным значением температуры и её средним арифметическим значением. Ответ округлите до целого числа.\n',
        solution: 'Для поиска минимального значения температуры воспользуемся формулой =МИН(B2:Y92) в ячейке Z2.\nМинимальное значения температуры равно 8,1.\nТеперь в ячейке Z3 с помощью формулы =СРЗНАЧ(B2:Y92) найдём среднее арифметическое значение всех измерений — 23,9.\nТеперь найдём разность в ячейке Z4 с помощью формулы =Z2–Z3: 8,1 − 23,9 = −15,8. Тогда ответ: −16.',
        answer: '-16',
        file: 'https://inf-ege.sdamgia.ru/doc/inf/zadanie9/9_27517.xlsx'
    }
];