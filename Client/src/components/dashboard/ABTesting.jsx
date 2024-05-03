import { GrLinkNext } from "react-icons/gr";

function ABTesting() {
  return (
    <div className="bg-slate-100 w-1/2 h-48 rounded-lg drop-shadow-xl shadow-slate-300 mt-8 p-2 hover:scale-105 transition ease-in">
      <a href="/abtesting">
      <div className="absolute p-5">
        <h1 className="text-2xl font-bold text-white">A/B Testing</h1>
        <p className="text-white font-light text-sm">
          A methodology for comparing two user interface varients against each
          other to determine which one performs better
        </p>
        <br />
        <div className="flex">
          <button className="text-base font-bold pr-2 text-white">
            Explore
          </button>
          <GrLinkNext className="mt-1" color="white" />
        </div>
      </div>
      </a>
      <img
        className="items-end h-full "
        src="../src/assets/images/dashboard/abtest-back.png"
        alt="A/B Testing image"
      />
    </div>
  );
}

export default ABTesting;
