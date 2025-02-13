import { Plus } from 'lucide-react';
import React from 'react';

const ExercisesPage = () => {
  return (
    <div className="">
      <header className="flex justify-between px-4 h-12 items-center bg-gray-100">
        <div className="text-lg font-bold">Exercise Database</div>
        <Plus />
      </header>
      <main className=" bg-gray-200 h-screen p-4">
        <div className="flex flex-col items-center justify-center h-full">
          <Plus className="size-10" />
          <div className=""> No Exercises Found</div>
        </div>
      </main>
    </div>
  );
};

export default ExercisesPage;
