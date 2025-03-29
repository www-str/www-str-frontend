import { useState } from 'react';
import { questionDataType } from '../App';
import Button from './ui/Button'

interface IFormModal {
    data: questionDataType[];
    onClose: () => void;
}

const FormModal = ({ data, onClose }: IFormModal) => {
    const [curQuestion, setCurQuestion] = useState(0);

    const handleNext = () => {
        setCurQuestion(curQuestion + 1);
    }

    return (
        <div className='fixed z-10 right-10 bottom-10 w-120 h-fit bg-red-200 rounded-2xl flex flex-col gap-4 p-6'>
            <div className="">
                <span className='font-medium text-xl'>{data[curQuestion].title}</span>
                <p>{data[curQuestion].text}</p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex gap-2 justify-between">
                    {data[curQuestion].answers.map((el, index) => (
                        <Button key={index}>{el}</Button>
                    ))}
                </div>
                <div className="ml-auto">
                    {data.length - 1 === curQuestion ? (
                        <Button onclick={onClose}>Завершить</Button>
                    ) : (

                        <Button className='' onclick={handleNext}>Следующий</Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FormModal