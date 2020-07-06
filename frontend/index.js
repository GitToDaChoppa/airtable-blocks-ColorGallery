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
      colors: {accent: '#6ce00d', darko: '#E08D03', secondary: '#E00D7C', brand: '#D119E0', dark: '#333333', light: '#F9F9F9'}
    },
  };

  const Appbar = (props) => (
    <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="dark"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
     />
  )
function ColorGalleryBlock() {
    const base = useBase();
    const table = base.getTableByName("Colors");
    let records;
    records = useRecords(table);


    return (
    <Grommet theme={theme}>
    <Appbar>
        <Heading color="white">Color Gallery</Heading> <Paint size="large" color="white"/>
    </Appbar>

    <Row>
        {records.map(color =>

        <Column key={color.id} color={color}>
            <Box pad="small" width="8rem" round={{corner: 'top' , size: '15px'}} background={color.getCellValueAsString('Hex')} elevation="medium">{color.name}</Box>
            <Box pad="small" width="8rem" height="6rem" background="light" elevation="medium" round={{corner: 'bottom', size: '15px'}}>
                <h5 style={{margin: '2px'}}> {color.getCellValueAsString('Hex')} </h5>
                <h5 style={{margin: '2px'}}> {color.getCellValueAsString('RGB')} </h5>
                <h5 style={{margin: '2px'}}> {color.getCellValueAsString('HSV')} </h5>
                <PaletteTag> {color.getCellValueAsString('Palette')} </PaletteTag>
            </Box>
        </Column>

    )
    }
    </Row>
    </Grommet>
    )
}
const PaletteTag = styled.span`
margin: 2px 0 0 0;
font-size: 12px;
color: gray;
border-radius: 20px;
padding: 0 0 0 0;

`;

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
