import React from 'react';
import HomeIcon from '../assets/svg/HomeIcon';
import WalletIcon from '../assets/svg/WalletIcon';
import BarChartIcon from '../assets/svg/BarChartIcon';

export const tabBarIcons = (route: string, focused: boolean) => {
  let icon: Element = '';

  const strokeColor = focused ? 'blue' : '#999999';
  switch (route) {
    case 'TransaccionesScreen':
      icon = <BarChartIcon stroke={strokeColor} width={23} height={23} />;
      break;
    case 'HistorialScreen':
      icon = <WalletIcon stroke={strokeColor} width={23} height={23} />;
      break;
    case 'MonedasActualesScreen':
      icon = <HomeIcon stroke={strokeColor} width={23} height={23} />;
      break;

    default:
      icon = <></>;
  }
  return icon;
};
