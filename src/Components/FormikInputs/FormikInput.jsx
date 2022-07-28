import React from "react";
import { useField } from 'formik';

function FormikInput(props) {
    const [field, meta, helpers] = useField(props.name);
    return (
        <input {...props} value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
    )
}

export default FormikInput;