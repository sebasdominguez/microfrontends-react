import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import {
  Table_Container,
  Table_Wrapper,
  Table,
  Table_Head,
  Table_Data,
  Table_CharacterName,
  Table_CharacterImage,
  Table_Image,
} from './styles';

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
    <Table_Container>
      <Table_Wrapper>
        <Table>
          <thead>
            <tr>
              <Table_Head>{t('picture')}</Table_Head>
              <Table_Head>{t('name')}</Table_Head>
            </tr>
          </thead>
          <tbody>
            {characters.map((char: Character, index: number) => (
              <tr key={`${index}-${char.name}`}>
                <Table_Data>
                  <Table_CharacterImage>
                    <Table_Image src={char.image} alt='' />
                  </Table_CharacterImage>
                </Table_Data>
                <Table_Data>
                  <Table_CharacterName>{char.name}</Table_CharacterName>
                </Table_Data>
              </tr>
            ))}
          </tbody>
        </Table>
      </Table_Wrapper>
    </Table_Container>
  );
};
