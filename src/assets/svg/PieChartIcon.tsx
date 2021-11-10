import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Icon} from '../../interface/iconInterface';

interface Props extends Icon {}

export default function PieChartIcon({
  width = 20,
  height = 20,
  stroke = '#999999',
}: Props) {
  return (
    <SvgXml xml={pieChart} width={width} height={height} stroke={stroke} />
  );
}

const pieChart = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21.21 15.89C20.5738 17.3945 19.5788 18.7202 18.3119 19.7513C17.0449 20.7824 15.5447 21.4874 13.9424 21.8048C12.3401 22.1221 10.6844 22.0421 9.12012 21.5718C7.55585 21.1014 6.1306 20.2551 4.969 19.1067C3.80739 17.9582 2.94479 16.5428 2.45661 14.9839C1.96843 13.4251 1.86954 11.7705 2.16857 10.1646C2.46761 8.55878 3.15547 7.05063 4.17202 5.77203C5.18857 4.49343 6.50286 3.48332 7.99998 2.83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V12H22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
