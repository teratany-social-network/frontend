const Button = (props: any) => {
  return (
    <button
      disabled={props.disabled ?? false}
      type="submit"
      className={
        props.width +
        " " +
        props.height +
        " inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm white:focus:ring-offset-gray-800"
      }
    >
      {props.name}
    </button>
  );
};

export default Button;
