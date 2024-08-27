import { useForm } from "react-hook-form";

function YouTbeForm() {
  const form = useForm();
  const { register } = form;
  const { name, ref, onChange, onBlur } = register("username");

  return (
    <div>
      <form>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />

        <label htmlFor="Email">username</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="channel">username</label>
        <input type="text" id="channel" name="channel" />

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}

export default YouTbeForm;
