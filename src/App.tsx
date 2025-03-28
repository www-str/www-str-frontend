import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const handlClick = () => {
    setResult(search);
  }

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setResult("")
  }

  return (
    <div className="flex flex-col gap-2  items-center justify-center h-screen">
      <div className="flex  gap-4 items-center">
        <input
          placeholder='Search smth..'
          className='bg-gray-700 text-white rounded px-4 py-2'
          type="text" value={search} onChange={handleChangeSearch}
        />
        <button onClick={handlClick} className='bg-blue-600 text-white px-4 py-2 rounded'>Search</button>
      </div>
      <p className='text-lg block'>Your results: {result}</p>
    </div>
  )
}

export default App
