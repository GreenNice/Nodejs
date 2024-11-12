import React from 'react'

const FailPage = () => {
	return (
		<div>
			{/* Main modal */}
			<div className='overflow-y-auto overflow-x-hidden flex justify-center items-center w-full h-full mt-12'>
				<div className=' p-4 w-full max-w-md h-full'>
					{/* Modal content */}
					<div className=' p-4 text-center rounded-lg shadow-md '>
						<div className='w-12 h-12 rounded-full p-2 flex items-center justify-center mx-auto mb-3.5'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
								version='1.1'
								width={256}
								height={256}
								viewBox='0 0 256 256'
								xmlSpace='preserve'
							>
								<defs />
								<g
									style={{
										stroke: 'none',
										strokeWidth: 0,
										strokeDasharray: 'none',
										strokeLinecap: 'butt',
										strokeLinejoin: 'miter',
										strokeMiterlimit: 10,
										fill: 'none',
										fillRule: 'nonzero',
										opacity: 1,
									}}
									transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'
								>
									<path
										d='M 28.5 65.5 c -1.024 0 -2.047 -0.391 -2.829 -1.172 c -1.562 -1.562 -1.562 -4.095 0 -5.656 l 33 -33 c 1.561 -1.562 4.096 -1.562 5.656 0 c 1.563 1.563 1.563 4.095 0 5.657 l -33 33 C 30.547 65.109 29.524 65.5 28.5 65.5 z'
										style={{
											stroke: 'none',
											strokeWidth: 1,
											strokeDasharray: 'none',
											strokeLinecap: 'butt',
											strokeLinejoin: 'miter',
											strokeMiterlimit: 10,
											fill: 'rgb(236,0,0)',
											fillRule: 'nonzero',
											opacity: 1,
										}}
										transform=' matrix(1 0 0 1 0 0) '
										strokeLinecap='round'
									/>
									<path
										d='M 61.5 65.5 c -1.023 0 -2.048 -0.391 -2.828 -1.172 l -33 -33 c -1.562 -1.563 -1.562 -4.095 0 -5.657 c 1.563 -1.562 4.095 -1.562 5.657 0 l 33 33 c 1.563 1.562 1.563 4.095 0 5.656 C 63.548 65.109 62.523 65.5 61.5 65.5 z'
										style={{
											stroke: 'none',
											strokeWidth: 1,
											strokeDasharray: 'none',
											strokeLinecap: 'butt',
											strokeLinejoin: 'miter',
											strokeMiterlimit: 10,
											fill: 'rgb(236,0,0)',
											fillRule: 'nonzero',
											opacity: 1,
										}}
										transform=' matrix(1 0 0 1 0 0) '
										strokeLinecap='round'
									/>
									<path
										d='M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z M 45 8 C 24.598 8 8 24.598 8 45 c 0 20.402 16.598 37 37 37 c 20.402 0 37 -16.598 37 -37 C 82 24.598 65.402 8 45 8 z'
										style={{
											stroke: 'none',
											strokeWidth: 1,
											strokeDasharray: 'none',
											strokeLinecap: 'butt',
											strokeLinejoin: 'miter',
											strokeMiterlimit: 10,
											fill: 'rgb(236,0,0)',
											fillRule: 'nonzero',
											opacity: 1,
										}}
										transform=' matrix(1 0 0 1 0 0) '
										strokeLinecap='round'
									/>
								</g>
							</svg>

							<span className='sr-only'>Success</span>
						</div>
						<p className='mb-4 text-lg font-semibold text-gray-900'>
							Link's expiration. Contact admin to be active account again
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FailPage
