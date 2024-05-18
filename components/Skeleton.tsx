const Skeleton = () => {
    return (
      <div className="w-full h-full">
        <div className="h-[90%] w-full grid grid-cols-2 gap-3">
          {Array(6).fill(1).map(s=><div key={s} className="animate-pulse bg-slate-600"></div>)}
        </div>
      </div>
    );
  };
  export default Skeleton