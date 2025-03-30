import { useState } from 'react'
// import { sendGrade } from '../../api';

type gradeType = {
    link: string;
}

const Grade = ({ link }: gradeType) => {
    const [grade, setGrade] = useState(0);

    const handleRate = (item: number) => {
        if (grade == 0) {
            setGrade(item);
            // sendGrade({ link, rate: grade });
        }
    }

    return (
        <div className='flex items-center gap-2 mt-2'>
            <p className='text-sm text-[#ef1d27]'>Оценка: </p>
            {[1, 2, 3, 4, 5].map(item => (
                <div key={item} className={`w-4 h-4 rounded-full border border-[#ef1d27] transition-all hover:bg-[#ef1d27]
                    ${grade >= item ? "bg-[#ef1d27]" : "bg-none"}`
                }
                    onClick={() => handleRate(item)}
                />
            ))}
        </div>
    )
}

export default Grade