function VarientA() {
  return (
    <div>
      <form className="font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center">
        <input
          className="border pl-4 rounded-l-lg w-2/3"
          type="email"
          required
          placeholder="Your email here"
        />
        <button
          type="submit"
          className="py-3 px-4 bg-purple-500 hover:bg-palette-dark text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default VarientA;
