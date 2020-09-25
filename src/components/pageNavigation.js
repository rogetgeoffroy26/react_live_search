import React from 'react';

export default ( props ) => {
	const {
		      loading,
		      showPrevLink,
		      showNextLink,
		      handlePrevClick,
		      handleNextClick,
	      } = props;
	return (
		<div className="nav-link-container">
			{/*eslint-disable-next-line*/}
			<a
				href="#"
				className={
					`nav-link 
					${ showPrevLink ? 'show' : 'hide'}
					${ loading ? 'greyed-out' : ''
					}`
				}
				onClick={ handlePrevClick }
			>
				Prev
			</a>
			{/*eslint-disable-next-line*/}
			<a
				href="#"
				className={
					`nav-link 
					${ showNextLink ? 'show' : 'hide'}
					${ loading ? 'greyed-out' : '' }
					`}
				onClick={ handleNextClick }
			>
				Next
			</a>
		</div>
	)
}