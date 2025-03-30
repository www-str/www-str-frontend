import { useState } from 'react';
import Button from './ui/Button'
import { questionDataType } from '../utils/types';
// import { sendForm } from '../api';

interface IFormModal {
    data: questionDataType[];
    onClose: () => void;
}

const FormModal = ({ data, onClose }: IFormModal) => {
    const [curQuestion, setCurQuestion] = useState(0);

    const handleSelectAnsw = (answer: string) => {
        if (data.length - 1 === curQuestion) {
            onClose();
            return;
        }
        setCurQuestion(prev => prev + 1);
        // sendForm({ id: curQuestion + 1, response: answer })
    }

    return (
        <div className='fixed z-10 inset-x-5 lg:right-10 lg:left-auto bottom-5 lg:bottom-10 lg:w-120 bg-red-200 rounded-2xl flex flex-col gap-4 p-6'>
            <div>
                <span className='font-medium text-xl'>Опрос. {data[curQuestion].title}</span>
                <p>{data[curQuestion].text}</p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex gap-2 justify-beween lg:justify-between flex-wrap">
                    {data[curQuestion].answers.map((el, index) => (
                        <Button key={index} onclick={() => handleSelectAnsw(el)}>{el}</Button>
                    ))}
                </div>
            </div>

            <button onClick={onClose} className='absolute z-20 right-4 top-2 text-[#ef1d27] text-2xl font-medium cursor-pointer'>x</button>
        </div>
    )
}

export default FormModal