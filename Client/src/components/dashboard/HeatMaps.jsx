import { GrLinkNext } from "react-icons/gr";

function HeatMaps() {
  return (
    <div className="bg-slate-100 w-1/2 h-48 rounded-lg drop-shadow-xl shadow-slate-300 mt-8 mr-11 p-3 flex hover:scale-105 transition ease-in">
      <a href="/heatmaps">
      <div className="pl-5 py-5 pr-3">
        <p className="text-primary_blue font-medium">BenchmarkX</p>
        <h1 className="text-2xl font-bold">HeatMaps</h1>
        <p className="text-primary_blue font-light text-sm">
          2D data visualization technique that represents user interaction in
          the web app.
        </p>
        <div className="flex">
          <button className="text-base font-bold pr-2">Explore</button>
          <GrLinkNext className="mt-1" />
        </div>
      </div>
      </a>
      <img
        className="items-end h-full"
        src="../src/assets/images/dashboard/heatmapRocket.png"
        alt="heatmap-rocket"
      />
    </div>
  );
}

export default HeatMaps;
