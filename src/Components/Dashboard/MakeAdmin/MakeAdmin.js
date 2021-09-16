import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>make admin</h1>

    <div className="admin_form">
    <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name")} />
        <br></br>
        <input placeholder="email" {...register("email", { required: true })} />
        <br></br>
        {errors.exampleRequired && <span>This field is required</span>}
        <br></br>
        <select {...register("Athor")}>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Developer">Developer</option>
        </select>
        <input type="submit" />
      </form>
    </div>
    </div>
  );
};

export default MakeAdmin;
