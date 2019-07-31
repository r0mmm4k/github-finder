import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Search = ({searchUsers, setAlert, clearUsers, showClear}) => {

	const [text, setText] = useState('');

	const onChangeValue = ({target: {value}}) => setText(value);

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (text.trim()) {
			searchUsers(text.trim());
			setText('');
		} else {
			setAlert('Please, enter something!', 'light');
		}
	};

	return (
		<div>
			<form onSubmit={onSubmitForm} className='form'>
				<input type='text'
							 name='text'
							 placeholder='Search Users...'
							 value={text}
							 onChange={onChangeValue}/>
				<input type='submit' value='Search' className='btn btn-dark btn-block'/>
			</form>
			{showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};

export default Search;