import { useState } from 'react';
import Button from './ui/Button'
import { questionDataType } from '../utils/types';

interface IFormModal {
    data: questionDataType[];
    onClose: () => void;
}

type answersType = {
    [key: number]: string;
}

const FormModal = ({ data, onClose }: IFormModal) => {
    const [curQuestion, setCurQuestion] = useState(0);
    const [answers, setAnswers] = useState<answersType>([]);

    const handleNext = () => {
        if (answers[curQuestion + 1] != undefined) {
            setCurQuestion(curQuestion + 1);
        }
    }

    const handleSelectAnsw = (id: number, answer: string) => {
        setAnswers(prev => ({ ...prev, [id]: answer }));
    }

    const handleClose = () => {
        if (answers[curQuestion + 1] != undefined) {
            onClose();
        }
    }

    return (
        <div className='fixed z-10 inset-x-5 lg:right-10 lg:left-auto bottom-5 lg:bottom-10 lg:w-120 bg-red-200 rounded-2xl flex flex-col gap-4 p-6'>
            <div>
                <span className='font-medium text-xl'>Опрос. {data[curQuestion].title}</span>
                <p>{data[curQuestion].text}</p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex gap-2 justify-start lg:justify-between flex-wrap">
                    {data[curQuestion].answers.map((el, index) => (
                        <Button key={index} choosed={answers[curQuestion + 1] === el} onclick={() => handleSelectAnsw(curQuestion + 1, el)}>{el}</Button>
                    ))}
                </div>
                <div className="md:ml-auto">
                    {data.length - 1 === curQuestion ? (
                        <Button onclick={handleClose}>Завершить</Button>
                    ) : (
                        <Button onclick={handleNext}>Следующий</Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FormModal