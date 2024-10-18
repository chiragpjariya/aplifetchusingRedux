import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduectList, deleteProduect } from '../redux/ProductSlice';


function Todo() {

    const [input, setInput] = useState("");
    let dispatch = useDispatch()
    let { lodding, list } = useSelector(state => state.productReducer)

    useEffect(() => {
        console.log('productState', list);
    }, [lodding, list])


    useEffect(() => {
        dispatch(fetchProduectList({}))
    }, [dispatch])

    let handleChange = () => {

    }

    return (
        <>
            <div className='h-screen w-full bg-slate-800 flex flex-col  justify-center '>
                {/* box */}
                <div className=' h-auto w-[100%] bg-blue-200'>
                    {/* inputbox */}
                    <div className=' h-[60px] w-full  flex  justify-evenly items-center py-1'>
                        <input type="text" className='bg-gray-50 border-2 border-white text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[80%]' onChange={(e) => setInput(e.target.value)} value={input} />
                        <button className='mt-2  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={handleChange}>
                            submit
                        </button>
                    </div>
                </div>
                {/* table */}

                <div className=" overflow-x-auto h-full" >
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className='w-full'>
                                <th scope="col" className="px-6 py- ">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Update
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                list && list.length > 0 && list.map((data, index) => (

                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                        <td className="px-6 py-4 ">
                                            {data.id}                                        </td>
                                        <th
                                            scope="row"
                                            className="px-6  w-[50%] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {data.title}
                                        </th>

                                        <td className="px-6 py-4 ">
                                            <button className=' focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'  > Update</button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className=' focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={() => dispatch(deleteProduect({ id: data.id }))
                                            }> Delete</button>
                                        </td>

                                    </tr>


                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Todo