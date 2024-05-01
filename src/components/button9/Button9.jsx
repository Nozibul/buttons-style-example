const Button9 = () => {
  // decide what to render
  // let bgs = bg ? "bg-gradient-to-r from-emerald-500 to-emerald-900"
  //  : "bg-gradient-to-r from-slate-300 to-slate-500"

  return (
    <>
      <button className="m-4 py-3 px-6 text-white text-lg rounded-xl transition-all duration-500 to-white via-black from-red-500 bg-size-180 bg-gradient-to-r from-emerald-500 to-emerald-900 hover:bg-right-bottom cursor-pointer bg-gradient-to-r ">
        gradient
      </button>
    </>
  );
};

export default Button9;
