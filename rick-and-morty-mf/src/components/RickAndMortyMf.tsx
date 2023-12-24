import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

interface Character {
  id: number;
  name: string;
  image: string;
}

export const RickAndMortyMF: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        const charData: Character[] = response.data.results.map(
          (char: Character) => ({
            id: char.id,
            name: char.name,
            image: char.image,
          })
        );
        setCharacters(charData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='bg-white p-8 rounded-md w-full'>
      <div>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='flex justify-center rounded-lg overflow-hidden'>
            <table className='w-4/5 leading-normal table-fixed'>
              <thead>
                <tr>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider'>
                    {t('picture')}
                  </th>

                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider'>
                    {t('name')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {characters.map((char, index) => (
                  <tr key={`${index}-${char.name}`}>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 w-20 h-20'>
                          <img
                            className='w-full h-full rounded-full'
                            src={char.image}
                            alt=''
                          />
                        </div>
                      </div>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap font-semibold'>
                        {char.name}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
