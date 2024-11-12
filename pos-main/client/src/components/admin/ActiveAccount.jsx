import React, { useState } from 'react'
import { apiSendEmailActive } from '../../apis'
import icons from '../../utils/icons'
import { toastError, toastSuccess } from '../../utils/toast'
const ActiveAccount = ({ setOpenActiveAccount }) => {
	const [email, setEmail] = useState('')

	const sendEmailHandler = async () => {
		const response = await apiSendEmailActive(email)

		if (response?.code === 1) {
			toastSuccess('Email already sent. Please check your email')
			setEmail('')
		} else {
			toastError('Something went wrong. Please send again')
			setEmail('')
		}
	}

	return (
		<div
			onClick={() => setOpenActiveAccount(false)}
			className='overflow-y-auto h-screen overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center w-full bg-[rgba(0,0,0,0.7)]'
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className='w-[40%] bg-white h-[150px] p-6 pt-3 gap-4 mt-[100px] rounded-sm'
			>
				<div className='flex justify-between items-center'>
					<h1 className='text-3xl font-semibold text-blue-500'>
						Active Account
					</h1>
					<icons.AiOutlineClose
						onClick={() => {
							setOpenActiveAccount(false)
						}}
						size={20}
						className='hover:cursor-pointer hover:text-red-500'
					/>
				</div>
				<div className='flex items-center gap-2 mt-5 '>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						id='helper-text'
						className='bg-gray-50 border h-[40px] border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none'
						placeholder='huynhnhathao@gmail.com'
					/>
					<button
						type='button'
						onClick={sendEmailHandler}
						className='text-white w-[30%] mx-auto bg-gradient-to-br h-[40px] from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center text-center'
					>
						Send
					</button>
				</div>
			</div>
		</div>
	)
}

export default ActiveAccount
