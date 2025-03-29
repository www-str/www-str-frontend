import { useState } from 'react';
import Button from './ui/Button'
import { questionDataType } from '../utils/types';
import axios from 'axios';

interface IFormModal {
    data: questionDataType[];
    onClose: () => void;
}

const FormModal = ({ data, onClose }: IFormModal) => {
    const [curQuestion, setCurQuestion] = useState(0);

    const sendForm = async (id: string, answer: string) => {
        try {
            await axios.post('https://meowmur.ru/api/questions/set', {
                id: id,
                response: answer,
            })
        } catch (err) {
            console.error(err);
        }
    }

    const handleSelectAnsw = (answer: string) => {
        if (data.length - 1 === curQuestion) {
            onClose();
            return;
        }
        setCurQuestion(prev => prev + 1);
        sendForm(String(curQuestion + 1), answer)
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
        </div>
    )
}

export default FormModal