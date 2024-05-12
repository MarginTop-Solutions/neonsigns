'use client';


// import NeonText from "@/components/NeonText";
import dynamic from 'next/dynamic';
import NeonTextPage from '@/components/NeonTextPage';
import { useState } from 'react';
import { topBarItems } from '@/utils/misc';

const ImgFrameAdmin = dynamic(() => import('@/components/ImgFrameAdmin'), { ssr: false });
const ImgFrameUser = dynamic(() => import('@/components/ImgFrameUser'), { ssr: false });


const Home: React.FC = () => {

  const [page, setPage] = useState(0);

  const getPage = () => {
    switch (page) {
      case 1:
        return <ImgFrameAdmin />
      case 2:
        return <ImgFrameUser />
      case 0:
      default:
        return <NeonTextPage />
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="flex w-full justify-start gap-4 p-4">

        {topBarItems.map((n, i) => (
          <button className="font-bold text-xl shadow-md rounded-xl p-3 hover:bg-slate-400 duration-200" onClick={() => setPage(i)} key={i}>{n}</button>
        ))}
      </div>

      {getPage()}

    </main>
  );
}
export default Home;