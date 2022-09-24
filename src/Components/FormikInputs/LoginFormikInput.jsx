import React from 'react';
import { useField } from 'formik';

function LoginFormikInput(props) {
	const [field, meta, helpers] = useField(props.name);
	return (
		<div className='field'>
			<h5 className='login__title-field'>{props.name}</h5>
			<input {...props} {...field} />
			{meta.touched && meta.error && (
				<p className='field__error'>{meta.error}</p>
			)}
		</div>
	);
}

export default LoginFormikInput;