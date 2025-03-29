import axios from 'axios';
import { useState } from 'react'

type gradeType = {
    link: string;
}

const Grade = ({ link }: gradeType) => {
    const [grade, setGrade] = useState(0);

    const sendGrade = async () => {
        try {
            await axios.post('https://meowmur.ru/api/ratings/set', {
                link,
                rate: grade,
            })
        } catch (err) {
            console.error(err);
        }
    }

    const handleRate = (item: number) => {
        if (grade == 0) {
            setGrade(item)
            sendGrade();
        }
    }

    return (
        <div className='flex items-center gap-2 mt-2'>
            <p className='text-sm text-[#ef1d27]'>Оценка: </p>
            {Array.from({ length: 5 }, (_, i) => i + 1).map(item => (
                <div className={`w-4 h-4 rounded-full border border-[#ef1d27] transition-all hover:bg-[#ef1d27]
                    ${grade >= item ? "bg-[#ef1d27]" : ""}`
                }
                    onClick={() => handleRate(item)}
                ></div>
            ))}
        </div>
    )
}

export default Grade