import styled from 'styled-components';

const Table_Container = styled.div`
  background-color: white;
  padding: 8px;
  border-radius: 0.375rem;
  width: 100%;
`;

const Table_Wrapper = styled.div`
  margin: -1rem;
  padding: 1rem 2rem;
  overflow-x: auto;
`;

const Table = styled.table`
  justify-content: center;
  border-collapse: collapse;
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Table_Head = styled.th`
  padding: 0.625rem 1.25rem;
  border-bottom: 0.125rem solid #e2e8f0;
  background-color: #f7fafc;
  text-align: left;
  font-size: 1.125rem;
  font-weight: 600;
  color: #4a5568;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
`;

const Table_Data = styled.td`
  padding: 0.625rem 1.25rem;
  border-bottom: 0.125rem solid #e2e8f0;
  background-color: white;
  font-size: 0.875rem;
  color: #1a202c;
`;

const Table_CharacterImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Table_Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const Table_CharacterName = styled.p`
  font-weight: 600;
  white-space: nowrap;
`;

export {
  Table,
  Table_Container,
  Table_Wrapper,
  Table_Head,
  Table_Data,
  Table_CharacterName,
  Table_CharacterImage,
  Table_Image,
};
