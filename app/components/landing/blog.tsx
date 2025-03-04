import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

type News = {
  id: number;
  image: string;
  title: string;
  text: string;
  date: string;
  category: string;
};

const newsData: News[] = [
  {
    id: 1,
    image: '/og1.jpg',
    title: 'Actualité 1',
    text: 'Voici le texte de la première actualité. Il est assez long pour être tronqué ici.',
    date: '2025-02-20',
    category: 'Technologie',
  },
  {
    id: 2,
    image: '/og1.jpg',
    title: 'Actualité 2',
    text: 'Texte court.',
    date: '2025-02-19',
    category: 'Économie',
  },
  {
    id: 3,
    image: '/og1.jpg',
    title: 'Actualité 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula ex ut aliquet tincidunt.',
    date: '2025-02-18',
    category: 'Santé',
  },
];

const NewsGallery: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
          
          <div className='flex justify-between items-center mb-3' >
              <h2 className="text-4xl md:text-2xl font-bold text-left">ACTUALITES</h2>
              <button className="flex items-center gap-2 rounded-full px-6 py-5 bg-[#c3002f] text-white hover:bg-red-900 transition">
          <span className="hidden md:inline">les actualités</span> {/* Texte masqué sur mobile */}
          <ArrowUpRight size={20} />
        </button>
        </div><div className="border-t-8 border-red-500 w-1/5 mb-5 "></div>
              
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all ease-in-out duration-300"
          >
            <Image
              src={news.image}
              alt={news.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{news.title}</h3>
             
              <p className="text-black mb-10 truncate">{news.text}</p>
            </div>
            {/* Conteneur du bouton "Lire plus" */}
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-75 p-3 flex justify-between items-center">
            <p className="text-gray-600 text-sm">{news.date} | {news.category}</p>
              <button className="flex items-center text-[#c3002f] hover:text-red-900">
                <span className='font-[var(--font-peugeot)]'>Lire plus</span>
                <ArrowRight className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsGallery;
