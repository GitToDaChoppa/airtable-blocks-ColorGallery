import {initializeBlock, useBase, useRecords} from '@airtable/blocks/ui';
import React from 'react';
import { Grommet, Heading, Box, Grid } from 'grommet';
import {Paint} from 'grommet-icons';
import styled from 'styled-components'




const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
      colors: {accent: '#6CE00D', darko: '#E08D03', brand: '#E00D7C', secondary: '#D119E0'}
    },
  };

  const Appbar = (props) => (
    <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
     />
  )
function ColorGalleryBlock() {
    const base = useBase();
    const table = base.getTableByName("Color Gallery");
    let records;
    records = useRecords(table);


    return (
    <Grommet theme={theme}>
    <Appbar>
        <Heading color="white">Color Gallery</Heading> <Paint size="large" color="accent"/>
    </Appbar>

    <Row>
        {records.map(color =>

        <Column key={color.id} color={color}>
            <Box pad="small" width="8rem" round={{corner: 'top' , size: '15px'}} background={color.name} elevation="medium">{color.name}</Box>
            <Box pad="small" width="8rem" height="6rem" background="white" elevation="medium" round={{corner: 'bottom', size: '15px'}}>
               <h5> {color.getCellValueAsString('Hex')} </h5>
            </Box>
        </Column>

    )
    }
    </Row>
    </Grommet>
    )
}

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
    flex-wrap: wrap;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px; 
  text-align: center;
`;

initializeBlock(() => <ColorGalleryBlock />);
