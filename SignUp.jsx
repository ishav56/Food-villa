import { useFormik } from "formik"
import { Link } from "react-router-dom";

export const Signup = () => {

    const formik = useFormik({
        initialValues: {
            name:'',
            age:'',
            mobileNo:'',
            email:'',
            Password:'',
            ConfrimPassword:'',
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="Name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            {console.log(formik.values.mobileNo)}
            <label htmlFor="age">Age</label>
            <input
                id="age"
                name="age"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.age}
            />
            <label htmlFor="Mobile-no">Mobile-NO</label>
            <input
                id="mobileno"
                name="Mobile-NO"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.mobileNo}
            />
            <label htmlFor="Password">Password</label>
            <input
                id="password"
                name="Password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.Password}
            />
            <label htmlFor="Password">Confrim-Pasword</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.ConfrimPassword}
            />
            <Link to='/loginin'><button type="submit">Submit</button></Link>
        </form>
    )
}