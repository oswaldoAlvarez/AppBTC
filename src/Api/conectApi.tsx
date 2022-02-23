import axios from 'axios';

export const getFees = async (): Promise<any> => {
  try {
    const res = await axios.get(
      'https://bitcoinfees.earn.com/api/v1/fees/recommended',
    );
    const fees = res.data;
    return fees;
  } catch (err) {
    console.log(`error: ${err}`);
  }
};

export const getAltcoins = async (): Promise<any> => {
  try {
    const res = await axios.get('https://ripio.com/api/v1/rates/');

    const altcoins = res.data;
    return altcoins;
  } catch (err) {
    console.log(`error: ${err}`);
  }
};
