import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const SmurfPostForm = props => {
const {errors, touched} = props
    return (
        <div>
            <h3>Create A New Smurf!</h3>
            <p>but we'll need a little info first...</p>

            <Form>
                <div>
                    <Field type="text" name="name" placeholder="enter smurf name..."/>
                    {touched.name && errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <Field type="text" name="height" placeholder="enter smurf height..."/>
                    {touched.height && errors.height && <p className="error">{errors.height}</p>}
                </div>
                <div>
                    <Field type="number" name="age" placeholder="enter smurf age..."/>
                    {touched.age && errors.age && <p className="error">{errors.age}</p>}
                </div>

                <button type="submit">Submit New Smurf</button>
            </Form>

        </div>
    )

}

const FormikSmurfPostForm = withFormik({

    mapPropsToValues({ name, age, height }) {
        return {
            name: name || '',
            age: age || '',
            height: height || ''
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('you really smurfed up, name is a required field'),
        age: Yup.number('whoops, age should be in number format')
            .required('you really smurfed up, age is a required field'),
        height: Yup.string()
            .required('you really smurfed up, height is a required field')
    }),

    handleSubmit( values, props ) {
        console.log(values)
        props.props.createSmurf(values)
    }

})(SmurfPostForm);

export default FormikSmurfPostForm