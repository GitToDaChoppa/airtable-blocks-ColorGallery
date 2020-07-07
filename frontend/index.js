import {initializeBlock, useBase, useRecords} from '@airtable/blocks/ui';
import React from 'react';
import { Grommet, Box } from 'grommet';
import styled from 'styled-components'
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from 'react';

const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

// const PaletteSection = (props) => (
//
// )

  const SwatchCard = (props) => (
      <Column color={props.color}>
          <Box pad="small" width="8rem" round={{corner: 'top' , size: '15px'}} background={props.color.getCellValueAsString('Hex')}>{props.color.name}</Box>
          <Box pad="small" width="8rem" height="6rem" background="light" elevation="medium" round={{corner: 'bottom', size: '15px'}}>
              <h5 style={{margin: '2px'}}> {props.color.getCellValueAsString('Hex')} </h5>
              <h5 style={{margin: '2px'}}> {props.color.getCellValueAsString('RGB')} </h5>
              <PaletteTag> {props.color.getCellValueAsString('Palette')} </PaletteTag>
          </Box>
      </Column>
  )
function ColorGalleryBlock() {
    const base = useBase();
    const table = base.getTableByName("Colors");
    let records;
    records = useRecords(table, {sorts: [{field: 'Palette'}]});

    return (
    <Grommet theme={theme}>
    <Row>
        {records.map(color =>
        <SwatchCard key={color.id} color={color} />
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
