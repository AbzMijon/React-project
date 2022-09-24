import React from 'react';
import { useField } from 'formik';

function ProfileFormikInput(props) {
	const [field, meta, helpers] = useField(props.name);
	return (
		<div>
			<input {...props} {...field} />
			{meta.touched && meta.error && (
				<p className='field__error'>{meta.error}</p>
			)}
		</div>
	);
}

export default ProfileFormikInput;