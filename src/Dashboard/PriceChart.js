import highchartsConfig from './HighchartsConfig';
import React from 'react';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
  return <AppContext.Consumer>
    {({historical, changeChartSelect}) => 
      <Tile>
        <ChartSelect
          defaultValue="days"
          onChange={e => changeChartSelect(e.target.value)}
        >
          <option value="hours">Hours</option>
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="Months">Months</option>
        </ChartSelect>
        {historical ?
          <ReactHighcharts config={highchartsConfig(historical)}/>
          : <div> Loading historical data ... </div>}
      </Tile>
    }
  </AppContext.Consumer>
}