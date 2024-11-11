import { useFormik } from "formik"

import { Link } from "react-router-dom";
export const Resgestration = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',

    },
  onSubmit: values => {
 console.log(values);
},
});

const login=()=>{
  alert("logged in")
}



  return formik===" "?alert("hy"):(
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
      <Link to='/signup'><button type="submit">SighUp</button></Link>
      <button type="submit" onClick={login}>Login</button>
    </form>
  )

}