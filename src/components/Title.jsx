function Title({ text, rightSide }) {
  return (
    <div className="relative pt-14 mx-4 lg:mx-[.15rem]">
      <div className="h-[.15rem] w-full bg-theme-light-dark lg:bg-gradient-to-l from-theme-light to-theme-light-dark absolute inset-x-0 bottom-[.9rem] lg:bottom-4  " />
      <h2 className="text-3xl lg:text-4xl mx-auto lg:mr-20 relative w-fit bg-theme-dark px-3 tracking-wider">
        {text}
      </h2>
    </div>
  );
}

export default Title;
