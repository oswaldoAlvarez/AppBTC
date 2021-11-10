import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Icon} from '../../interface/iconInterface';

interface Props extends Icon {}

export default function BarChartIcon({
  width = 20,
  height = 20,
  stroke = '#999999',
}: Props) {
  return (
    <SvgXml xml={barChart} width={width} height={height} stroke={stroke} />
  );
}

const barChart = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 20V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 20V14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
