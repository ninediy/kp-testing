export const validRequrie = e => {
  e.preventDefault();
  if (!e.target.value) {
    doInvalid(e.target);
  } else {
    doValid(e.target);
  }
};

export const doValid = elm => {
  elm.classList.remove('is-invalid');
  elm.classList.add('is-valid');
};

export const doInvalid = elm => {
  elm.classList.remove('is-valid');
  elm.classList.add('is-invalid');
};

export const validRequrieElm = id => {
  const elm = getId(id);
  if (!elm.value) {
    doInvalid(elm);
    return false;
  } else {
    doValid(elm);
    return true;
  }
};

export const getUnixTimestamp = () => {
  return Math.round(new Date().getTime() / 1000);
};

export const handleLimitChange = (cur_id, next_id, limit = 1) => {
  if (cur_id) {
    const elm = document.getElementById(cur_id);
    if (elm.value) {
      if (elm.value.length >= limit) {
        if (next_id) {
          getId(next_id).focus();
        }
      }
    }
  }
};

export const handleRemoveInputValue = (e, prev_id) => {
  const keyd = e.keyCode || e.charCode;
  if (keyd === 8 || keyd === 46) {
    if (!e.target.value) {
      document.getElementById(prev_id).focus();
    }
  }
};

export const getId = id => {
  return document.getElementById(id);
};

export const isEquivalent = (a, b) => {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
};

export const numberOnly = event => {
  var keycode = event.keyCode || event.charCode;
  if (
    !(
      event.shiftKey === false &&
      (keycode === 46 ||
        keycode === 8 ||
        keycode === 37 ||
        keycode === 39 ||
        (keycode >= 48 && keycode <= 57))
    )
  ) {
    event.preventDefault();
  }
};

export const contries = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    flag: 'http://restcountries.eu/data/afg.svg',
    alpha2Code: 'AF',
    alpha3Code: 'AFG',
    callingCodes: '93'
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    flag: 'http://restcountries.eu/data/ala.svg',
    alpha2Code: 'AX',
    alpha3Code: 'ALA',
    callingCodes: '358'
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    flag: 'http://restcountries.eu/data/alb.svg',
    alpha2Code: 'AL',
    alpha3Code: 'ALB',
    callingCodes: '355'
  },
  {
    name: 'Algeria',
    capital: 'Algiers',
    flag: 'http://restcountries.eu/data/dza.svg',
    alpha2Code: 'DZ',
    alpha3Code: 'DZA',
    callingCodes: '213'
  },
  {
    name: 'American Samoa',
    capital: 'Pago Pago',
    flag: 'http://restcountries.eu/data/asm.svg',
    alpha2Code: 'AS',
    alpha3Code: 'ASM',
    callingCodes: '1684'
  },
  {
    name: 'Andorra',
    capital: 'Andorra la Vella',
    flag: 'http://restcountries.eu/data/and.svg',
    alpha2Code: 'AD',
    alpha3Code: 'AND',
    callingCodes: '376'
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    flag: 'http://restcountries.eu/data/ago.svg',
    alpha2Code: 'AO',
    alpha3Code: 'AGO',
    callingCodes: '244'
  },
  {
    name: 'Anguilla',
    capital: 'The Valley',
    flag: 'http://restcountries.eu/data/aia.svg',
    alpha2Code: 'AI',
    alpha3Code: 'AIA',
    callingCodes: '1264'
  },
  {
    name: 'Antarctica',
    capital: '',
    flag: 'http://restcountries.eu/data/ata.svg',
    alpha2Code: 'AQ',
    alpha3Code: 'ATA',
    callingCodes: '672'
  },
  {
    name: 'Antigua and Barbuda',
    capital: "Saint John's",
    flag: 'http://restcountries.eu/data/atg.svg',
    alpha2Code: 'AG',
    alpha3Code: 'ATG',
    callingCodes: '1268'
  },
  {
    name: 'Argentina',
    capital: 'Buenos Aires',
    flag: 'http://restcountries.eu/data/arg.svg',
    alpha2Code: 'AR',
    alpha3Code: 'ARG',
    callingCodes: '54'
  },
  {
    name: 'Armenia',
    capital: 'Yerevan',
    flag: 'http://restcountries.eu/data/arm.svg',
    alpha2Code: 'AM',
    alpha3Code: 'ARM',
    callingCodes: '374'
  },
  {
    name: 'Aruba',
    capital: 'Oranjestad',
    flag: 'http://restcountries.eu/data/abw.svg',
    alpha2Code: 'AW',
    alpha3Code: 'ABW',
    callingCodes: '297'
  },
  {
    name: 'Australia',
    capital: 'Canberra',
    flag: 'http://restcountries.eu/data/aus.svg',
    alpha2Code: 'AU',
    alpha3Code: 'AUS',
    callingCodes: '61'
  },
  {
    name: 'Austria',
    capital: 'Vienna',
    flag: 'http://restcountries.eu/data/aut.svg',
    alpha2Code: 'AT',
    alpha3Code: 'AUT',
    callingCodes: '43'
  },
  {
    name: 'Azerbaijan',
    capital: 'Baku',
    flag: 'http://restcountries.eu/data/aze.svg',
    alpha2Code: 'AZ',
    alpha3Code: 'AZE',
    callingCodes: '994'
  },
  {
    name: 'Bahamas',
    capital: 'Nassau',
    flag: 'http://restcountries.eu/data/bhs.svg',
    alpha2Code: 'BS',
    alpha3Code: 'BHS',
    callingCodes: '1242'
  },
  {
    name: 'Bahrain',
    capital: 'Manama',
    flag: 'http://restcountries.eu/data/bhr.svg',
    alpha2Code: 'BH',
    alpha3Code: 'BHR',
    callingCodes: '973'
  },
  {
    name: 'Bangladesh',
    capital: 'Dhaka',
    flag: 'http://restcountries.eu/data/bgd.svg',
    alpha2Code: 'BD',
    alpha3Code: 'BGD',
    callingCodes: '880'
  },
  {
    name: 'Barbados',
    capital: 'Bridgetown',
    flag: 'http://restcountries.eu/data/brb.svg',
    alpha2Code: 'BB',
    alpha3Code: 'BRB',
    callingCodes: '1246'
  },
  {
    name: 'Belarus',
    capital: 'Minsk',
    flag: 'http://restcountries.eu/data/blr.svg',
    alpha2Code: 'BY',
    alpha3Code: 'BLR',
    callingCodes: '375'
  },
  {
    name: 'Belgium',
    capital: 'Brussels',
    flag: 'http://restcountries.eu/data/bel.svg',
    alpha2Code: 'BE',
    alpha3Code: 'BEL',
    callingCodes: '32'
  },
  {
    name: 'Belize',
    capital: 'Belmopan',
    flag: 'http://restcountries.eu/data/blz.svg',
    alpha2Code: 'BZ',
    alpha3Code: 'BLZ',
    callingCodes: '501'
  },
  {
    name: 'Benin',
    capital: 'Porto-Novo',
    flag: 'http://restcountries.eu/data/ben.svg',
    alpha2Code: 'BJ',
    alpha3Code: 'BEN',
    callingCodes: '229'
  },
  {
    name: 'Bermuda',
    capital: 'Hamilton',
    flag: 'http://restcountries.eu/data/bmu.svg',
    alpha2Code: 'BM',
    alpha3Code: 'BMU',
    callingCodes: '1441'
  },
  {
    name: 'Bhutan',
    capital: 'Thimphu',
    flag: 'http://restcountries.eu/data/btn.svg',
    alpha2Code: 'BT',
    alpha3Code: 'BTN',
    callingCodes: '975'
  },
  {
    name: 'Bolivia (Plurinational State of)',
    capital: 'Sucre',
    flag: 'http://restcountries.eu/data/bol.svg',
    alpha2Code: 'BO',
    alpha3Code: 'BOL',
    callingCodes: '591'
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    capital: 'Kralendijk',
    flag: 'http://restcountries.eu/data/bes.svg',
    alpha2Code: 'BQ',
    alpha3Code: 'BES',
    callingCodes: '5997'
  },
  {
    name: 'Bosnia and Herzegovina',
    capital: 'Sarajevo',
    flag: 'http://restcountries.eu/data/bih.svg',
    alpha2Code: 'BA',
    alpha3Code: 'BIH',
    callingCodes: '387'
  },
  {
    name: 'Botswana',
    capital: 'Gaborone',
    flag: 'http://restcountries.eu/data/bwa.svg',
    alpha2Code: 'BW',
    alpha3Code: 'BWA',
    callingCodes: '267'
  },
  {
    name: 'Bouvet Island',
    capital: '',
    flag: 'http://restcountries.eu/data/bvt.svg',
    alpha2Code: 'BV',
    alpha3Code: 'BVT',
    callingCodes: ''
  },
  {
    name: 'Brazil',
    capital: 'Brasília',
    flag: 'http://restcountries.eu/data/bra.svg',
    alpha2Code: 'BR',
    alpha3Code: 'BRA',
    callingCodes: '55'
  },
  {
    name: 'British Indian Ocean Territory',
    capital: 'Diego Garcia',
    flag: 'http://restcountries.eu/data/iot.svg',
    alpha2Code: 'IO',
    alpha3Code: 'IOT',
    callingCodes: '246'
  },
  {
    name: 'United States Minor Outlying Islands',
    capital: '',
    flag: 'http://restcountries.eu/data/umi.svg',
    alpha2Code: 'UM',
    alpha3Code: 'UMI',
    callingCodes: ''
  },
  {
    name: 'Virgin Islands (British)',
    capital: 'Road Town',
    flag: 'http://restcountries.eu/data/vgb.svg',
    alpha2Code: 'VG',
    alpha3Code: 'VGB',
    callingCodes: '1284'
  },
  {
    name: 'Virgin Islands (U.S.)',
    capital: 'Charlotte Amalie',
    flag: 'http://restcountries.eu/data/vir.svg',
    alpha2Code: 'VI',
    alpha3Code: 'VIR',
    callingCodes: '1 340'
  },
  {
    name: 'Brunei Darussalam',
    capital: 'Bandar Seri Begawan',
    flag: 'http://restcountries.eu/data/brn.svg',
    alpha2Code: 'BN',
    alpha3Code: 'BRN',
    callingCodes: '673'
  },
  {
    name: 'Bulgaria',
    capital: 'Sofia',
    flag: 'http://restcountries.eu/data/bgr.svg',
    alpha2Code: 'BG',
    alpha3Code: 'BGR',
    callingCodes: '359'
  },
  {
    name: 'Burkina Faso',
    capital: 'Ouagadougou',
    flag: 'http://restcountries.eu/data/bfa.svg',
    alpha2Code: 'BF',
    alpha3Code: 'BFA',
    callingCodes: '226'
  },
  {
    name: 'Burundi',
    capital: 'Bujumbura',
    flag: 'http://restcountries.eu/data/bdi.svg',
    alpha2Code: 'BI',
    alpha3Code: 'BDI',
    callingCodes: '257'
  },
  {
    name: 'Cambodia',
    capital: 'Phnom Penh',
    flag: 'http://restcountries.eu/data/khm.svg',
    alpha2Code: 'KH',
    alpha3Code: 'KHM',
    callingCodes: '855'
  },
  {
    name: 'Cameroon',
    capital: 'Yaoundé',
    flag: 'http://restcountries.eu/data/cmr.svg',
    alpha2Code: 'CM',
    alpha3Code: 'CMR',
    callingCodes: '237'
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    flag: 'http://restcountries.eu/data/can.svg',
    alpha2Code: 'CA',
    alpha3Code: 'CAN',
    callingCodes: '1'
  },
  {
    name: 'Cabo Verde',
    capital: 'Praia',
    flag: 'http://restcountries.eu/data/cpv.svg',
    alpha2Code: 'CV',
    alpha3Code: 'CPV',
    callingCodes: '238'
  },
  {
    name: 'Cayman Islands',
    capital: 'George Town',
    flag: 'http://restcountries.eu/data/cym.svg',
    alpha2Code: 'KY',
    alpha3Code: 'CYM',
    callingCodes: '1345'
  },
  {
    name: 'Central African Republic',
    capital: 'Bangui',
    flag: 'http://restcountries.eu/data/caf.svg',
    alpha2Code: 'CF',
    alpha3Code: 'CAF',
    callingCodes: '236'
  },
  {
    name: 'Chad',
    capital: "N'Djamena",
    flag: 'http://restcountries.eu/data/tcd.svg',
    alpha2Code: 'TD',
    alpha3Code: 'TCD',
    callingCodes: '235'
  },
  {
    name: 'Chile',
    capital: 'Santiago',
    flag: 'http://restcountries.eu/data/chl.svg',
    alpha2Code: 'CL',
    alpha3Code: 'CHL',
    callingCodes: '56'
  },
  {
    name: 'China',
    capital: 'Beijing',
    flag: 'http://restcountries.eu/data/chn.svg',
    alpha2Code: 'CN',
    alpha3Code: 'CHN',
    callingCodes: '86'
  },
  {
    name: 'Christmas Island',
    capital: 'Flying Fish Cove',
    flag: 'http://restcountries.eu/data/cxr.svg',
    alpha2Code: 'CX',
    alpha3Code: 'CXR',
    callingCodes: '61'
  },
  {
    name: 'Cocos (Keeling) Islands',
    capital: 'West Island',
    flag: 'http://restcountries.eu/data/cck.svg',
    alpha2Code: 'CC',
    alpha3Code: 'CCK',
    callingCodes: '61'
  },
  {
    name: 'Colombia',
    capital: 'Bogotá',
    flag: 'http://restcountries.eu/data/col.svg',
    alpha2Code: 'CO',
    alpha3Code: 'COL',
    callingCodes: '57'
  },
  {
    name: 'Comoros',
    capital: 'Moroni',
    flag: 'http://restcountries.eu/data/com.svg',
    alpha2Code: 'KM',
    alpha3Code: 'COM',
    callingCodes: '269'
  },
  {
    name: 'Congo',
    capital: 'Brazzaville',
    flag: 'http://restcountries.eu/data/cog.svg',
    alpha2Code: 'CG',
    alpha3Code: 'COG',
    callingCodes: '242'
  },
  {
    name: 'Congo (Democratic Republic of the)',
    capital: 'Kinshasa',
    flag: 'http://restcountries.eu/data/cod.svg',
    alpha2Code: 'CD',
    alpha3Code: 'COD',
    callingCodes: '243'
  },
  {
    name: 'Cook Islands',
    capital: 'Avarua',
    flag: 'http://restcountries.eu/data/cok.svg',
    alpha2Code: 'CK',
    alpha3Code: 'COK',
    callingCodes: '682'
  },
  {
    name: 'Costa Rica',
    capital: 'San José',
    flag: 'http://restcountries.eu/data/cri.svg',
    alpha2Code: 'CR',
    alpha3Code: 'CRI',
    callingCodes: '506'
  },
  {
    name: 'Croatia',
    capital: 'Zagreb',
    flag: 'http://restcountries.eu/data/hrv.svg',
    alpha2Code: 'HR',
    alpha3Code: 'HRV',
    callingCodes: '385'
  },
  {
    name: 'Cuba',
    capital: 'Havana',
    flag: 'http://restcountries.eu/data/cub.svg',
    alpha2Code: 'CU',
    alpha3Code: 'CUB',
    callingCodes: '53'
  },
  {
    name: 'Curaçao',
    capital: 'Willemstad',
    flag: 'http://restcountries.eu/data/cuw.svg',
    alpha2Code: 'CW',
    alpha3Code: 'CUW',
    callingCodes: '599'
  },
  {
    name: 'Cyprus',
    capital: 'Nicosia',
    flag: 'http://restcountries.eu/data/cyp.svg',
    alpha2Code: 'CY',
    alpha3Code: 'CYP',
    callingCodes: '357'
  },
  {
    name: 'Czech Republic',
    capital: 'Prague',
    flag: 'http://restcountries.eu/data/cze.svg',
    alpha2Code: 'CZ',
    alpha3Code: 'CZE',
    callingCodes: '420'
  },
  {
    name: 'Denmark',
    capital: 'Copenhagen',
    flag: 'http://restcountries.eu/data/dnk.svg',
    alpha2Code: 'DK',
    alpha3Code: 'DNK',
    callingCodes: '45'
  },
  {
    name: 'Djibouti',
    capital: 'Djibouti',
    flag: 'http://restcountries.eu/data/dji.svg',
    alpha2Code: 'DJ',
    alpha3Code: 'DJI',
    callingCodes: '253'
  },
  {
    name: 'Dominica',
    capital: 'Roseau',
    flag: 'http://restcountries.eu/data/dma.svg',
    alpha2Code: 'DM',
    alpha3Code: 'DMA',
    callingCodes: '1767'
  },
  {
    name: 'Dominican Republic',
    capital: 'Santo Domingo',
    flag: 'http://restcountries.eu/data/dom.svg',
    alpha2Code: 'DO',
    alpha3Code: 'DOM',
    callingCodes: '1809'
  },
  {
    name: 'Ecuador',
    capital: 'Quito',
    flag: 'http://restcountries.eu/data/ecu.svg',
    alpha2Code: 'EC',
    alpha3Code: 'ECU',
    callingCodes: '593'
  },
  {
    name: 'Egypt',
    capital: 'Cairo',
    flag: 'http://restcountries.eu/data/egy.svg',
    alpha2Code: 'EG',
    alpha3Code: 'EGY',
    callingCodes: '20'
  },
  {
    name: 'El Salvador',
    capital: 'San Salvador',
    flag: 'http://restcountries.eu/data/slv.svg',
    alpha2Code: 'SV',
    alpha3Code: 'SLV',
    callingCodes: '503'
  },
  {
    name: 'Equatorial Guinea',
    capital: 'Malabo',
    flag: 'http://restcountries.eu/data/gnq.svg',
    alpha2Code: 'GQ',
    alpha3Code: 'GNQ',
    callingCodes: '240'
  },
  {
    name: 'Eritrea',
    capital: 'Asmara',
    flag: 'http://restcountries.eu/data/eri.svg',
    alpha2Code: 'ER',
    alpha3Code: 'ERI',
    callingCodes: '291'
  },
  {
    name: 'Estonia',
    capital: 'Tallinn',
    flag: 'http://restcountries.eu/data/est.svg',
    alpha2Code: 'EE',
    alpha3Code: 'EST',
    callingCodes: '372'
  },
  {
    name: 'Ethiopia',
    capital: 'Addis Ababa',
    flag: 'http://restcountries.eu/data/eth.svg',
    alpha2Code: 'ET',
    alpha3Code: 'ETH',
    callingCodes: '251'
  },
  {
    name: 'Falkland Islands (Malvinas)',
    capital: 'Stanley',
    flag: 'http://restcountries.eu/data/flk.svg',
    alpha2Code: 'FK',
    alpha3Code: 'FLK',
    callingCodes: '500'
  },
  {
    name: 'Faroe Islands',
    capital: 'Tórshavn',
    flag: 'http://restcountries.eu/data/fro.svg',
    alpha2Code: 'FO',
    alpha3Code: 'FRO',
    callingCodes: '298'
  },
  {
    name: 'Fiji',
    capital: 'Suva',
    flag: 'http://restcountries.eu/data/fji.svg',
    alpha2Code: 'FJ',
    alpha3Code: 'FJI',
    callingCodes: '679'
  },
  {
    name: 'Finland',
    capital: 'Helsinki',
    flag: 'http://restcountries.eu/data/fin.svg',
    alpha2Code: 'FI',
    alpha3Code: 'FIN',
    callingCodes: '358'
  },
  {
    name: 'France',
    capital: 'Paris',
    flag: 'http://restcountries.eu/data/fra.svg',
    alpha2Code: 'FR',
    alpha3Code: 'FRA',
    callingCodes: '33'
  },
  {
    name: 'French Guiana',
    capital: 'Cayenne',
    flag: 'http://restcountries.eu/data/guf.svg',
    alpha2Code: 'GF',
    alpha3Code: 'GUF',
    callingCodes: '594'
  },
  {
    name: 'French Polynesia',
    capital: 'Papeetē',
    flag: 'http://restcountries.eu/data/pyf.svg',
    alpha2Code: 'PF',
    alpha3Code: 'PYF',
    callingCodes: '689'
  },
  {
    name: 'French Southern Territories',
    capital: 'Port-aux-Français',
    flag: 'http://restcountries.eu/data/atf.svg',
    alpha2Code: 'TF',
    alpha3Code: 'ATF',
    callingCodes: ''
  },
  {
    name: 'Gabon',
    capital: 'Libreville',
    flag: 'http://restcountries.eu/data/gab.svg',
    alpha2Code: 'GA',
    alpha3Code: 'GAB',
    callingCodes: '241'
  },
  {
    name: 'Gambia',
    capital: 'Banjul',
    flag: 'http://restcountries.eu/data/gmb.svg',
    alpha2Code: 'GM',
    alpha3Code: 'GMB',
    callingCodes: '220'
  },
  {
    name: 'Georgia',
    capital: 'Tbilisi',
    flag: 'http://restcountries.eu/data/geo.svg',
    alpha2Code: 'GE',
    alpha3Code: 'GEO',
    callingCodes: '995'
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    flag: 'http://restcountries.eu/data/deu.svg',
    alpha2Code: 'DE',
    alpha3Code: 'DEU',
    callingCodes: '49'
  },
  {
    name: 'Ghana',
    capital: 'Accra',
    flag: 'http://restcountries.eu/data/gha.svg',
    alpha2Code: 'GH',
    alpha3Code: 'GHA',
    callingCodes: '233'
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    flag: 'http://restcountries.eu/data/gib.svg',
    alpha2Code: 'GI',
    alpha3Code: 'GIB',
    callingCodes: '350'
  },
  {
    name: 'Greece',
    capital: 'Athens',
    flag: 'http://restcountries.eu/data/grc.svg',
    alpha2Code: 'GR',
    alpha3Code: 'GRC',
    callingCodes: '30'
  },
  {
    name: 'Greenland',
    capital: 'Nuuk',
    flag: 'http://restcountries.eu/data/grl.svg',
    alpha2Code: 'GL',
    alpha3Code: 'GRL',
    callingCodes: '299'
  },
  {
    name: 'Grenada',
    capital: "St. George's",
    flag: 'http://restcountries.eu/data/grd.svg',
    alpha2Code: 'GD',
    alpha3Code: 'GRD',
    callingCodes: '1473'
  },
  {
    name: 'Guadeloupe',
    capital: 'Basse-Terre',
    flag: 'http://restcountries.eu/data/glp.svg',
    alpha2Code: 'GP',
    alpha3Code: 'GLP',
    callingCodes: '590'
  },
  {
    name: 'Guam',
    capital: 'Hagåtña',
    flag: 'http://restcountries.eu/data/gum.svg',
    alpha2Code: 'GU',
    alpha3Code: 'GUM',
    callingCodes: '1671'
  },
  {
    name: 'Guatemala',
    capital: 'Guatemala City',
    flag: 'http://restcountries.eu/data/gtm.svg',
    alpha2Code: 'GT',
    alpha3Code: 'GTM',
    callingCodes: '502'
  },
  {
    name: 'Guernsey',
    capital: 'St. Peter Port',
    flag: 'http://restcountries.eu/data/ggy.svg',
    alpha2Code: 'GG',
    alpha3Code: 'GGY',
    callingCodes: '44'
  },
  {
    name: 'Guinea',
    capital: 'Conakry',
    flag: 'http://restcountries.eu/data/gin.svg',
    alpha2Code: 'GN',
    alpha3Code: 'GIN',
    callingCodes: '224'
  },
  {
    name: 'Guinea-Bissau',
    capital: 'Bissau',
    flag: 'http://restcountries.eu/data/gnb.svg',
    alpha2Code: 'GW',
    alpha3Code: 'GNB',
    callingCodes: '245'
  },
  {
    name: 'Guyana',
    capital: 'Georgetown',
    flag: 'http://restcountries.eu/data/guy.svg',
    alpha2Code: 'GY',
    alpha3Code: 'GUY',
    callingCodes: '592'
  },
  {
    name: 'Haiti',
    capital: 'Port-au-Prince',
    flag: 'http://restcountries.eu/data/hti.svg',
    alpha2Code: 'HT',
    alpha3Code: 'HTI',
    callingCodes: '509'
  },
  {
    name: 'Heard Island and McDonald Islands',
    capital: '',
    flag: 'http://restcountries.eu/data/hmd.svg',
    alpha2Code: 'HM',
    alpha3Code: 'HMD',
    callingCodes: ''
  },
  {
    name: 'Holy See',
    capital: 'Rome',
    flag: 'http://restcountries.eu/data/vat.svg',
    alpha2Code: 'VA',
    alpha3Code: 'VAT',
    callingCodes: '379'
  },
  {
    name: 'Honduras',
    capital: 'Tegucigalpa',
    flag: 'http://restcountries.eu/data/hnd.svg',
    alpha2Code: 'HN',
    alpha3Code: 'HND',
    callingCodes: '504'
  },
  {
    name: 'Hong Kong',
    capital: 'City of Victoria',
    flag: 'http://restcountries.eu/data/hkg.svg',
    alpha2Code: 'HK',
    alpha3Code: 'HKG',
    callingCodes: '852'
  },
  {
    name: 'Hungary',
    capital: 'Budapest',
    flag: 'http://restcountries.eu/data/hun.svg',
    alpha2Code: 'HU',
    alpha3Code: 'HUN',
    callingCodes: '36'
  },
  {
    name: 'Iceland',
    capital: 'Reykjavík',
    flag: 'http://restcountries.eu/data/isl.svg',
    alpha2Code: 'IS',
    alpha3Code: 'ISL',
    callingCodes: '354'
  },
  {
    name: 'India',
    capital: 'New Delhi',
    flag: 'http://restcountries.eu/data/ind.svg',
    alpha2Code: 'IN',
    alpha3Code: 'IND',
    callingCodes: '91'
  },
  {
    name: 'Indonesia',
    capital: 'Jakarta',
    flag: 'http://restcountries.eu/data/idn.svg',
    alpha2Code: 'ID',
    alpha3Code: 'IDN',
    callingCodes: '62'
  },
  {
    name: "Côte d'Ivoire",
    capital: 'Yamoussoukro',
    flag: 'http://restcountries.eu/data/civ.svg',
    alpha2Code: 'CI',
    alpha3Code: 'CIV',
    callingCodes: '225'
  },
  {
    name: 'Iran (Islamic Republic of)',
    capital: 'Tehran',
    flag: 'http://restcountries.eu/data/irn.svg',
    alpha2Code: 'IR',
    alpha3Code: 'IRN',
    callingCodes: '98'
  },
  {
    name: 'Iraq',
    capital: 'Baghdad',
    flag: 'http://restcountries.eu/data/irq.svg',
    alpha2Code: 'IQ',
    alpha3Code: 'IRQ',
    callingCodes: '964'
  },
  {
    name: 'Ireland',
    capital: 'Dublin',
    flag: 'http://restcountries.eu/data/irl.svg',
    alpha2Code: 'IE',
    alpha3Code: 'IRL',
    callingCodes: '353'
  },
  {
    name: 'Isle of Man',
    capital: 'Douglas',
    flag: 'http://restcountries.eu/data/imn.svg',
    alpha2Code: 'IM',
    alpha3Code: 'IMN',
    callingCodes: '44'
  },
  {
    name: 'Israel',
    capital: 'Jerusalem',
    flag: 'http://restcountries.eu/data/isr.svg',
    alpha2Code: 'IL',
    alpha3Code: 'ISR',
    callingCodes: '972'
  },
  {
    name: 'Italy',
    capital: 'Rome',
    flag: 'http://restcountries.eu/data/ita.svg',
    alpha2Code: 'IT',
    alpha3Code: 'ITA',
    callingCodes: '39'
  },
  {
    name: 'Jamaica',
    capital: 'Kingston',
    flag: 'http://restcountries.eu/data/jam.svg',
    alpha2Code: 'JM',
    alpha3Code: 'JAM',
    callingCodes: '1876'
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    flag: 'http://restcountries.eu/data/jpn.svg',
    alpha2Code: 'JP',
    alpha3Code: 'JPN',
    callingCodes: '81'
  },
  {
    name: 'Jersey',
    capital: 'Saint Helier',
    flag: 'http://restcountries.eu/data/jey.svg',
    alpha2Code: 'JE',
    alpha3Code: 'JEY',
    callingCodes: '44'
  },
  {
    name: 'Jordan',
    capital: 'Amman',
    flag: 'http://restcountries.eu/data/jor.svg',
    alpha2Code: 'JO',
    alpha3Code: 'JOR',
    callingCodes: '962'
  },
  {
    name: 'Kazakhstan',
    capital: 'Astana',
    flag: 'http://restcountries.eu/data/kaz.svg',
    alpha2Code: 'KZ',
    alpha3Code: 'KAZ',
    callingCodes: '76'
  },
  {
    name: 'Kenya',
    capital: 'Nairobi',
    flag: 'http://restcountries.eu/data/ken.svg',
    alpha2Code: 'KE',
    alpha3Code: 'KEN',
    callingCodes: '254'
  },
  {
    name: 'Kiribati',
    capital: 'South Tarawa',
    flag: 'http://restcountries.eu/data/kir.svg',
    alpha2Code: 'KI',
    alpha3Code: 'KIR',
    callingCodes: '686'
  },
  {
    name: 'Kuwait',
    capital: 'Kuwait City',
    flag: 'http://restcountries.eu/data/kwt.svg',
    alpha2Code: 'KW',
    alpha3Code: 'KWT',
    callingCodes: '965'
  },
  {
    name: 'Kyrgyzstan',
    capital: 'Bishkek',
    flag: 'http://restcountries.eu/data/kgz.svg',
    alpha2Code: 'KG',
    alpha3Code: 'KGZ',
    callingCodes: '996'
  },
  {
    name: "Lao People's Democratic Republic",
    capital: 'Vientiane',
    flag: 'http://restcountries.eu/data/lao.svg',
    alpha2Code: 'LA',
    alpha3Code: 'LAO',
    callingCodes: '856'
  },
  {
    name: 'Latvia',
    capital: 'Riga',
    flag: 'http://restcountries.eu/data/lva.svg',
    alpha2Code: 'LV',
    alpha3Code: 'LVA',
    callingCodes: '371'
  },
  {
    name: 'Lebanon',
    capital: 'Beirut',
    flag: 'http://restcountries.eu/data/lbn.svg',
    alpha2Code: 'LB',
    alpha3Code: 'LBN',
    callingCodes: '961'
  },
  {
    name: 'Lesotho',
    capital: 'Maseru',
    flag: 'http://restcountries.eu/data/lso.svg',
    alpha2Code: 'LS',
    alpha3Code: 'LSO',
    callingCodes: '266'
  },
  {
    name: 'Liberia',
    capital: 'Monrovia',
    flag: 'http://restcountries.eu/data/lbr.svg',
    alpha2Code: 'LR',
    alpha3Code: 'LBR',
    callingCodes: '231'
  },
  {
    name: 'Libya',
    capital: 'Tripoli',
    flag: 'http://restcountries.eu/data/lby.svg',
    alpha2Code: 'LY',
    alpha3Code: 'LBY',
    callingCodes: '218'
  },
  {
    name: 'Liechtenstein',
    capital: 'Vaduz',
    flag: 'http://restcountries.eu/data/lie.svg',
    alpha2Code: 'LI',
    alpha3Code: 'LIE',
    callingCodes: '423'
  },
  {
    name: 'Lithuania',
    capital: 'Vilnius',
    flag: 'http://restcountries.eu/data/ltu.svg',
    alpha2Code: 'LT',
    alpha3Code: 'LTU',
    callingCodes: '370'
  },
  {
    name: 'Luxembourg',
    capital: 'Luxembourg',
    flag: 'http://restcountries.eu/data/lux.svg',
    alpha2Code: 'LU',
    alpha3Code: 'LUX',
    callingCodes: '352'
  },
  {
    name: 'Macao',
    capital: '',
    flag: 'http://restcountries.eu/data/mac.svg',
    alpha2Code: 'MO',
    alpha3Code: 'MAC',
    callingCodes: '853'
  },
  {
    name: 'Macedonia (the former Yugoslav Republic of)',
    capital: 'Skopje',
    flag: 'http://restcountries.eu/data/mkd.svg',
    alpha2Code: 'MK',
    alpha3Code: 'MKD',
    callingCodes: '389'
  },
  {
    name: 'Madagascar',
    capital: 'Antananarivo',
    flag: 'http://restcountries.eu/data/mdg.svg',
    alpha2Code: 'MG',
    alpha3Code: 'MDG',
    callingCodes: '261'
  },
  {
    name: 'Malawi',
    capital: 'Lilongwe',
    flag: 'http://restcountries.eu/data/mwi.svg',
    alpha2Code: 'MW',
    alpha3Code: 'MWI',
    callingCodes: '265'
  },
  {
    name: 'Malaysia',
    capital: 'Kuala Lumpur',
    flag: 'http://restcountries.eu/data/mys.svg',
    alpha2Code: 'MY',
    alpha3Code: 'MYS',
    callingCodes: '60'
  },
  {
    name: 'Maldives',
    capital: 'Malé',
    flag: 'http://restcountries.eu/data/mdv.svg',
    alpha2Code: 'MV',
    alpha3Code: 'MDV',
    callingCodes: '960'
  },
  {
    name: 'Mali',
    capital: 'Bamako',
    flag: 'http://restcountries.eu/data/mli.svg',
    alpha2Code: 'ML',
    alpha3Code: 'MLI',
    callingCodes: '223'
  },
  {
    name: 'Malta',
    capital: 'Valletta',
    flag: 'http://restcountries.eu/data/mlt.svg',
    alpha2Code: 'MT',
    alpha3Code: 'MLT',
    callingCodes: '356'
  },
  {
    name: 'Marshall Islands',
    capital: 'Majuro',
    flag: 'http://restcountries.eu/data/mhl.svg',
    alpha2Code: 'MH',
    alpha3Code: 'MHL',
    callingCodes: '692'
  },
  {
    name: 'Martinique',
    capital: 'Fort-de-France',
    flag: 'http://restcountries.eu/data/mtq.svg',
    alpha2Code: 'MQ',
    alpha3Code: 'MTQ',
    callingCodes: '596'
  },
  {
    name: 'Mauritania',
    capital: 'Nouakchott',
    flag: 'http://restcountries.eu/data/mrt.svg',
    alpha2Code: 'MR',
    alpha3Code: 'MRT',
    callingCodes: '222'
  },
  {
    name: 'Mauritius',
    capital: 'Port Louis',
    flag: 'http://restcountries.eu/data/mus.svg',
    alpha2Code: 'MU',
    alpha3Code: 'MUS',
    callingCodes: '230'
  },
  {
    name: 'Mayotte',
    capital: 'Mamoudzou',
    flag: 'http://restcountries.eu/data/myt.svg',
    alpha2Code: 'YT',
    alpha3Code: 'MYT',
    callingCodes: '262'
  },
  {
    name: 'Mexico',
    capital: 'Mexico City',
    flag: 'http://restcountries.eu/data/mex.svg',
    alpha2Code: 'MX',
    alpha3Code: 'MEX',
    callingCodes: '52'
  },
  {
    name: 'Micronesia (Federated States of)',
    capital: 'Palikir',
    flag: 'http://restcountries.eu/data/fsm.svg',
    alpha2Code: 'FM',
    alpha3Code: 'FSM',
    callingCodes: '691'
  },
  {
    name: 'Moldova (Republic of)',
    capital: 'Chișinău',
    flag: 'http://restcountries.eu/data/mda.svg',
    alpha2Code: 'MD',
    alpha3Code: 'MDA',
    callingCodes: '373'
  },
  {
    name: 'Monaco',
    capital: 'Monaco',
    flag: 'http://restcountries.eu/data/mco.svg',
    alpha2Code: 'MC',
    alpha3Code: 'MCO',
    callingCodes: '377'
  },
  {
    name: 'Mongolia',
    capital: 'Ulan Bator',
    flag: 'http://restcountries.eu/data/mng.svg',
    alpha2Code: 'MN',
    alpha3Code: 'MNG',
    callingCodes: '976'
  },
  {
    name: 'Montenegro',
    capital: 'Podgorica',
    flag: 'http://restcountries.eu/data/mne.svg',
    alpha2Code: 'ME',
    alpha3Code: 'MNE',
    callingCodes: '382'
  },
  {
    name: 'Montserrat',
    capital: 'Plymouth',
    flag: 'http://restcountries.eu/data/msr.svg',
    alpha2Code: 'MS',
    alpha3Code: 'MSR',
    callingCodes: '1664'
  },
  {
    name: 'Morocco',
    capital: 'Rabat',
    flag: 'http://restcountries.eu/data/mar.svg',
    alpha2Code: 'MA',
    alpha3Code: 'MAR',
    callingCodes: '212'
  },
  {
    name: 'Mozambique',
    capital: 'Maputo',
    flag: 'http://restcountries.eu/data/moz.svg',
    alpha2Code: 'MZ',
    alpha3Code: 'MOZ',
    callingCodes: '258'
  },
  {
    name: 'Myanmar',
    capital: 'Naypyidaw',
    flag: 'http://restcountries.eu/data/mmr.svg',
    alpha2Code: 'MM',
    alpha3Code: 'MMR',
    callingCodes: '95'
  },
  {
    name: 'Namibia',
    capital: 'Windhoek',
    flag: 'http://restcountries.eu/data/nam.svg',
    alpha2Code: 'NA',
    alpha3Code: 'NAM',
    callingCodes: '264'
  },
  {
    name: 'Nauru',
    capital: 'Yaren',
    flag: 'http://restcountries.eu/data/nru.svg',
    alpha2Code: 'NR',
    alpha3Code: 'NRU',
    callingCodes: '674'
  },
  {
    name: 'Nepal',
    capital: 'Kathmandu',
    flag: 'http://restcountries.eu/data/npl.svg',
    alpha2Code: 'NP',
    alpha3Code: 'NPL',
    callingCodes: '977'
  },
  {
    name: 'Netherlands',
    capital: 'Amsterdam',
    flag: 'http://restcountries.eu/data/nld.svg',
    alpha2Code: 'NL',
    alpha3Code: 'NLD',
    callingCodes: '31'
  },
  {
    name: 'New Caledonia',
    capital: 'Nouméa',
    flag: 'http://restcountries.eu/data/ncl.svg',
    alpha2Code: 'NC',
    alpha3Code: 'NCL',
    callingCodes: '687'
  },
  {
    name: 'New Zealand',
    capital: 'Wellington',
    flag: 'http://restcountries.eu/data/nzl.svg',
    alpha2Code: 'NZ',
    alpha3Code: 'NZL',
    callingCodes: '64'
  },
  {
    name: 'Nicaragua',
    capital: 'Managua',
    flag: 'http://restcountries.eu/data/nic.svg',
    alpha2Code: 'NI',
    alpha3Code: 'NIC',
    callingCodes: '505'
  },
  {
    name: 'Niger',
    capital: 'Niamey',
    flag: 'http://restcountries.eu/data/ner.svg',
    alpha2Code: 'NE',
    alpha3Code: 'NER',
    callingCodes: '227'
  },
  {
    name: 'Nigeria',
    capital: 'Abuja',
    flag: 'http://restcountries.eu/data/nga.svg',
    alpha2Code: 'NG',
    alpha3Code: 'NGA',
    callingCodes: '234'
  },
  {
    name: 'Niue',
    capital: 'Alofi',
    flag: 'http://restcountries.eu/data/niu.svg',
    alpha2Code: 'NU',
    alpha3Code: 'NIU',
    callingCodes: '683'
  },
  {
    name: 'Norfolk Island',
    capital: 'Kingston',
    flag: 'http://restcountries.eu/data/nfk.svg',
    alpha2Code: 'NF',
    alpha3Code: 'NFK',
    callingCodes: '672'
  },
  {
    name: "Korea (Democratic People's Republic of)",
    capital: 'Pyongyang',
    flag: 'http://restcountries.eu/data/prk.svg',
    alpha2Code: 'KP',
    alpha3Code: 'PRK',
    callingCodes: '850'
  },
  {
    name: 'Northern Mariana Islands',
    capital: 'Saipan',
    flag: 'http://restcountries.eu/data/mnp.svg',
    alpha2Code: 'MP',
    alpha3Code: 'MNP',
    callingCodes: '1670'
  },
  {
    name: 'Norway',
    capital: 'Oslo',
    flag: 'http://restcountries.eu/data/nor.svg',
    alpha2Code: 'NO',
    alpha3Code: 'NOR',
    callingCodes: '47'
  },
  {
    name: 'Oman',
    capital: 'Muscat',
    flag: 'http://restcountries.eu/data/omn.svg',
    alpha2Code: 'OM',
    alpha3Code: 'OMN',
    callingCodes: '968'
  },
  {
    name: 'Pakistan',
    capital: 'Islamabad',
    flag: 'http://restcountries.eu/data/pak.svg',
    alpha2Code: 'PK',
    alpha3Code: 'PAK',
    callingCodes: '92'
  },
  {
    name: 'Palau',
    capital: 'Ngerulmud',
    flag: 'http://restcountries.eu/data/plw.svg',
    alpha2Code: 'PW',
    alpha3Code: 'PLW',
    callingCodes: '680'
  },
  {
    name: 'Palestine, State of',
    capital: 'Ramallah',
    flag: 'http://restcountries.eu/data/pse.svg',
    alpha2Code: 'PS',
    alpha3Code: 'PSE',
    callingCodes: '970'
  },
  {
    name: 'Panama',
    capital: 'Panama City',
    flag: 'http://restcountries.eu/data/pan.svg',
    alpha2Code: 'PA',
    alpha3Code: 'PAN',
    callingCodes: '507'
  },
  {
    name: 'Papua New Guinea',
    capital: 'Port Moresby',
    flag: 'http://restcountries.eu/data/png.svg',
    alpha2Code: 'PG',
    alpha3Code: 'PNG',
    callingCodes: '675'
  },
  {
    name: 'Paraguay',
    capital: 'Asunción',
    flag: 'http://restcountries.eu/data/pry.svg',
    alpha2Code: 'PY',
    alpha3Code: 'PRY',
    callingCodes: '595'
  },
  {
    name: 'Peru',
    capital: 'Lima',
    flag: 'http://restcountries.eu/data/per.svg',
    alpha2Code: 'PE',
    alpha3Code: 'PER',
    callingCodes: '51'
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    flag: 'http://restcountries.eu/data/phl.svg',
    alpha2Code: 'PH',
    alpha3Code: 'PHL',
    callingCodes: '63'
  },
  {
    name: 'Pitcairn',
    capital: 'Adamstown',
    flag: 'http://restcountries.eu/data/pcn.svg',
    alpha2Code: 'PN',
    alpha3Code: 'PCN',
    callingCodes: '64'
  },
  {
    name: 'Poland',
    capital: 'Warsaw',
    flag: 'http://restcountries.eu/data/pol.svg',
    alpha2Code: 'PL',
    alpha3Code: 'POL',
    callingCodes: '48'
  },
  {
    name: 'Portugal',
    capital: 'Lisbon',
    flag: 'http://restcountries.eu/data/prt.svg',
    alpha2Code: 'PT',
    alpha3Code: 'PRT',
    callingCodes: '351'
  },
  {
    name: 'Puerto Rico',
    capital: 'San Juan',
    flag: 'http://restcountries.eu/data/pri.svg',
    alpha2Code: 'PR',
    alpha3Code: 'PRI',
    callingCodes: '1787'
  },
  {
    name: 'Qatar',
    capital: 'Doha',
    flag: 'http://restcountries.eu/data/qat.svg',
    alpha2Code: 'QA',
    alpha3Code: 'QAT',
    callingCodes: '974'
  },
  {
    name: 'Republic of Kosovo',
    capital: 'Pristina',
    flag: 'http://restcountries.eu/data/kos.svg',
    alpha2Code: 'XK',
    alpha3Code: 'KOS',
    callingCodes: '383'
  },
  {
    name: 'Réunion',
    capital: 'Saint-Denis',
    flag: 'http://restcountries.eu/data/reu.svg',
    alpha2Code: 'RE',
    alpha3Code: 'REU',
    callingCodes: '262'
  },
  {
    name: 'Romania',
    capital: 'Bucharest',
    flag: 'http://restcountries.eu/data/rou.svg',
    alpha2Code: 'RO',
    alpha3Code: 'ROU',
    callingCodes: '40'
  },
  {
    name: 'Russian Federation',
    capital: 'Moscow',
    flag: 'http://restcountries.eu/data/rus.svg',
    alpha2Code: 'RU',
    alpha3Code: 'RUS',
    callingCodes: '7'
  },
  {
    name: 'Rwanda',
    capital: 'Kigali',
    flag: 'http://restcountries.eu/data/rwa.svg',
    alpha2Code: 'RW',
    alpha3Code: 'RWA',
    callingCodes: '250'
  },
  {
    name: 'Saint Barthélemy',
    capital: 'Gustavia',
    flag: 'http://restcountries.eu/data/blm.svg',
    alpha2Code: 'BL',
    alpha3Code: 'BLM',
    callingCodes: '590'
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    capital: 'Jamestown',
    flag: 'http://restcountries.eu/data/shn.svg',
    alpha2Code: 'SH',
    alpha3Code: 'SHN',
    callingCodes: '290'
  },
  {
    name: 'Saint Kitts and Nevis',
    capital: 'Basseterre',
    flag: 'http://restcountries.eu/data/kna.svg',
    alpha2Code: 'KN',
    alpha3Code: 'KNA',
    callingCodes: '1869'
  },
  {
    name: 'Saint Lucia',
    capital: 'Castries',
    flag: 'http://restcountries.eu/data/lca.svg',
    alpha2Code: 'LC',
    alpha3Code: 'LCA',
    callingCodes: '1758'
  },
  {
    name: 'Saint Martin (French part)',
    capital: 'Marigot',
    flag: 'http://restcountries.eu/data/maf.svg',
    alpha2Code: 'MF',
    alpha3Code: 'MAF',
    callingCodes: '590'
  },
  {
    name: 'Saint Pierre and Miquelon',
    capital: 'Saint-Pierre',
    flag: 'http://restcountries.eu/data/spm.svg',
    alpha2Code: 'PM',
    alpha3Code: 'SPM',
    callingCodes: '508'
  },
  {
    name: 'Saint Vincent and the Grenadines',
    capital: 'Kingstown',
    flag: 'http://restcountries.eu/data/vct.svg',
    alpha2Code: 'VC',
    alpha3Code: 'VCT',
    callingCodes: '1784'
  },
  {
    name: 'Samoa',
    capital: 'Apia',
    flag: 'http://restcountries.eu/data/wsm.svg',
    alpha2Code: 'WS',
    alpha3Code: 'WSM',
    callingCodes: '685'
  },
  {
    name: 'San Marino',
    capital: 'City of San Marino',
    flag: 'http://restcountries.eu/data/smr.svg',
    alpha2Code: 'SM',
    alpha3Code: 'SMR',
    callingCodes: '378'
  },
  {
    name: 'Sao Tome and Principe',
    capital: 'São Tomé',
    flag: 'http://restcountries.eu/data/stp.svg',
    alpha2Code: 'ST',
    alpha3Code: 'STP',
    callingCodes: '239'
  },
  {
    name: 'Saudi Arabia',
    capital: 'Riyadh',
    flag: 'http://restcountries.eu/data/sau.svg',
    alpha2Code: 'SA',
    alpha3Code: 'SAU',
    callingCodes: '966'
  },
  {
    name: 'Senegal',
    capital: 'Dakar',
    flag: 'http://restcountries.eu/data/sen.svg',
    alpha2Code: 'SN',
    alpha3Code: 'SEN',
    callingCodes: '221'
  },
  {
    name: 'Serbia',
    capital: 'Belgrade',
    flag: 'http://restcountries.eu/data/srb.svg',
    alpha2Code: 'RS',
    alpha3Code: 'SRB',
    callingCodes: '381'
  },
  {
    name: 'Seychelles',
    capital: 'Victoria',
    flag: 'http://restcountries.eu/data/syc.svg',
    alpha2Code: 'SC',
    alpha3Code: 'SYC',
    callingCodes: '248'
  },
  {
    name: 'Sierra Leone',
    capital: 'Freetown',
    flag: 'http://restcountries.eu/data/sle.svg',
    alpha2Code: 'SL',
    alpha3Code: 'SLE',
    callingCodes: '232'
  },
  {
    name: 'Singapore',
    capital: 'Singapore',
    flag: 'http://restcountries.eu/data/sgp.svg',
    alpha2Code: 'SG',
    alpha3Code: 'SGP',
    callingCodes: '65'
  },
  {
    name: 'Sint Maarten (Dutch part)',
    capital: 'Philipsburg',
    flag: 'http://restcountries.eu/data/sxm.svg',
    alpha2Code: 'SX',
    alpha3Code: 'SXM',
    callingCodes: '1721'
  },
  {
    name: 'Slovakia',
    capital: 'Bratislava',
    flag: 'http://restcountries.eu/data/svk.svg',
    alpha2Code: 'SK',
    alpha3Code: 'SVK',
    callingCodes: '421'
  },
  {
    name: 'Slovenia',
    capital: 'Ljubljana',
    flag: 'http://restcountries.eu/data/svn.svg',
    alpha2Code: 'SI',
    alpha3Code: 'SVN',
    callingCodes: '386'
  },
  {
    name: 'Solomon Islands',
    capital: 'Honiara',
    flag: 'http://restcountries.eu/data/slb.svg',
    alpha2Code: 'SB',
    alpha3Code: 'SLB',
    callingCodes: '677'
  },
  {
    name: 'Somalia',
    capital: 'Mogadishu',
    flag: 'http://restcountries.eu/data/som.svg',
    alpha2Code: 'SO',
    alpha3Code: 'SOM',
    callingCodes: '252'
  },
  {
    name: 'South Africa',
    capital: 'Pretoria',
    flag: 'http://restcountries.eu/data/zaf.svg',
    alpha2Code: 'ZA',
    alpha3Code: 'ZAF',
    callingCodes: '27'
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    capital: 'King Edward Point',
    flag: 'http://restcountries.eu/data/sgs.svg',
    alpha2Code: 'GS',
    alpha3Code: 'SGS',
    callingCodes: '500'
  },
  {
    name: 'Korea (Republic of)',
    capital: 'Seoul',
    flag: 'http://restcountries.eu/data/kor.svg',
    alpha2Code: 'KR',
    alpha3Code: 'KOR',
    callingCodes: '82'
  },
  {
    name: 'South Sudan',
    capital: 'Juba',
    flag: 'http://restcountries.eu/data/ssd.svg',
    alpha2Code: 'SS',
    alpha3Code: 'SSD',
    callingCodes: '211'
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    flag: 'http://restcountries.eu/data/esp.svg',
    alpha2Code: 'ES',
    alpha3Code: 'ESP',
    callingCodes: '34'
  },
  {
    name: 'Sri Lanka',
    capital: 'Colombo',
    flag: 'http://restcountries.eu/data/lka.svg',
    alpha2Code: 'LK',
    alpha3Code: 'LKA',
    callingCodes: '94'
  },
  {
    name: 'Sudan',
    capital: 'Khartoum',
    flag: 'http://restcountries.eu/data/sdn.svg',
    alpha2Code: 'SD',
    alpha3Code: 'SDN',
    callingCodes: '249'
  },
  {
    name: 'Suriname',
    capital: 'Paramaribo',
    flag: 'http://restcountries.eu/data/sur.svg',
    alpha2Code: 'SR',
    alpha3Code: 'SUR',
    callingCodes: '597'
  },
  {
    name: 'Svalbard and Jan Mayen',
    capital: 'Longyearbyen',
    flag: 'http://restcountries.eu/data/sjm.svg',
    alpha2Code: 'SJ',
    alpha3Code: 'SJM',
    callingCodes: '4779'
  },
  {
    name: 'Swaziland',
    capital: 'Lobamba',
    flag: 'http://restcountries.eu/data/swz.svg',
    alpha2Code: 'SZ',
    alpha3Code: 'SWZ',
    callingCodes: '268'
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    flag: 'http://restcountries.eu/data/swe.svg',
    alpha2Code: 'SE',
    alpha3Code: 'SWE',
    callingCodes: '46'
  },
  {
    name: 'Switzerland',
    capital: 'Bern',
    flag: 'http://restcountries.eu/data/che.svg',
    alpha2Code: 'CH',
    alpha3Code: 'CHE',
    callingCodes: '41'
  },
  {
    name: 'Syrian Arab Republic',
    capital: 'Damascus',
    flag: 'http://restcountries.eu/data/syr.svg',
    alpha2Code: 'SY',
    alpha3Code: 'SYR',
    callingCodes: '963'
  },
  {
    name: 'Taiwan',
    capital: 'Taipei',
    flag: 'http://restcountries.eu/data/twn.svg',
    alpha2Code: 'TW',
    alpha3Code: 'TWN',
    callingCodes: '886'
  },
  {
    name: 'Tajikistan',
    capital: 'Dushanbe',
    flag: 'http://restcountries.eu/data/tjk.svg',
    alpha2Code: 'TJ',
    alpha3Code: 'TJK',
    callingCodes: '992'
  },
  {
    name: 'Tanzania, United Republic of',
    capital: 'Dodoma',
    flag: 'http://restcountries.eu/data/tza.svg',
    alpha2Code: 'TZ',
    alpha3Code: 'TZA',
    callingCodes: '255'
  },
  {
    name: 'Thailand',
    capital: 'Bangkok',
    flag: 'http://restcountries.eu/data/tha.svg',
    alpha2Code: 'TH',
    alpha3Code: 'THA',
    callingCodes: '66'
  },
  {
    name: 'Timor-Leste',
    capital: 'Dili',
    flag: 'http://restcountries.eu/data/tls.svg',
    alpha2Code: 'TL',
    alpha3Code: 'TLS',
    callingCodes: '670'
  },
  {
    name: 'Togo',
    capital: 'Lomé',
    flag: 'http://restcountries.eu/data/tgo.svg',
    alpha2Code: 'TG',
    alpha3Code: 'TGO',
    callingCodes: '228'
  },
  {
    name: 'Tokelau',
    capital: 'Fakaofo',
    flag: 'http://restcountries.eu/data/tkl.svg',
    alpha2Code: 'TK',
    alpha3Code: 'TKL',
    callingCodes: '690'
  },
  {
    name: 'Tonga',
    capital: "Nuku'alofa",
    flag: 'http://restcountries.eu/data/ton.svg',
    alpha2Code: 'TO',
    alpha3Code: 'TON',
    callingCodes: '676'
  },
  {
    name: 'Trinidad and Tobago',
    capital: 'Port of Spain',
    flag: 'http://restcountries.eu/data/tto.svg',
    alpha2Code: 'TT',
    alpha3Code: 'TTO',
    callingCodes: '1868'
  },
  {
    name: 'Tunisia',
    capital: 'Tunis',
    flag: 'http://restcountries.eu/data/tun.svg',
    alpha2Code: 'TN',
    alpha3Code: 'TUN',
    callingCodes: '216'
  },
  {
    name: 'Turkey',
    capital: 'Ankara',
    flag: 'http://restcountries.eu/data/tur.svg',
    alpha2Code: 'TR',
    alpha3Code: 'TUR',
    callingCodes: '90'
  },
  {
    name: 'Turkmenistan',
    capital: 'Ashgabat',
    flag: 'http://restcountries.eu/data/tkm.svg',
    alpha2Code: 'TM',
    alpha3Code: 'TKM',
    callingCodes: '993'
  },
  {
    name: 'Turks and Caicos Islands',
    capital: 'Cockburn Town',
    flag: 'http://restcountries.eu/data/tca.svg',
    alpha2Code: 'TC',
    alpha3Code: 'TCA',
    callingCodes: '1649'
  },
  {
    name: 'Tuvalu',
    capital: 'Funafuti',
    flag: 'http://restcountries.eu/data/tuv.svg',
    alpha2Code: 'TV',
    alpha3Code: 'TUV',
    callingCodes: '688'
  },
  {
    name: 'Uganda',
    capital: 'Kampala',
    flag: 'http://restcountries.eu/data/uga.svg',
    alpha2Code: 'UG',
    alpha3Code: 'UGA',
    callingCodes: '256'
  },
  {
    name: 'Ukraine',
    capital: 'Kiev',
    flag: 'http://restcountries.eu/data/ukr.svg',
    alpha2Code: 'UA',
    alpha3Code: 'UKR',
    callingCodes: '380'
  },
  {
    name: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    flag: 'http://restcountries.eu/data/are.svg',
    alpha2Code: 'AE',
    alpha3Code: 'ARE',
    callingCodes: '971'
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    capital: 'London',
    flag: 'http://restcountries.eu/data/gbr.svg',
    alpha2Code: 'GB',
    alpha3Code: 'GBR',
    callingCodes: '44'
  },
  {
    name: 'United States of America',
    capital: 'Washington, D.C.',
    flag: 'http://restcountries.eu/data/usa.svg',
    alpha2Code: 'US',
    alpha3Code: 'USA',
    callingCodes: '1'
  },
  {
    name: 'Uruguay',
    capital: 'Montevideo',
    flag: 'http://restcountries.eu/data/ury.svg',
    alpha2Code: 'UY',
    alpha3Code: 'URY',
    callingCodes: '598'
  },
  {
    name: 'Uzbekistan',
    capital: 'Tashkent',
    flag: 'http://restcountries.eu/data/uzb.svg',
    alpha2Code: 'UZ',
    alpha3Code: 'UZB',
    callingCodes: '998'
  },
  {
    name: 'Vanuatu',
    capital: 'Port Vila',
    flag: 'http://restcountries.eu/data/vut.svg',
    alpha2Code: 'VU',
    alpha3Code: 'VUT',
    callingCodes: '678'
  },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    capital: 'Caracas',
    flag: 'http://restcountries.eu/data/ven.svg',
    alpha2Code: 'VE',
    alpha3Code: 'VEN',
    callingCodes: '58'
  },
  {
    name: 'Viet Nam',
    capital: 'Hanoi',
    flag: 'http://restcountries.eu/data/vnm.svg',
    alpha2Code: 'VN',
    alpha3Code: 'VNM',
    callingCodes: '84'
  },
  {
    name: 'Wallis and Futuna',
    capital: 'Mata-Utu',
    flag: 'http://restcountries.eu/data/wlf.svg',
    alpha2Code: 'WF',
    alpha3Code: 'WLF',
    callingCodes: '681'
  },
  {
    name: 'Western Sahara',
    capital: 'El Aaiún',
    flag: 'http://restcountries.eu/data/esh.svg',
    alpha2Code: 'EH',
    alpha3Code: 'ESH',
    callingCodes: '212'
  },
  {
    name: 'Yemen',
    capital: "Sana'a",
    flag: 'http://restcountries.eu/data/yem.svg',
    alpha2Code: 'YE',
    alpha3Code: 'YEM',
    callingCodes: '967'
  },
  {
    name: 'Zambia',
    capital: 'Lusaka',
    flag: 'http://restcountries.eu/data/zmb.svg',
    alpha2Code: 'ZM',
    alpha3Code: 'ZMB',
    callingCodes: '260'
  },
  {
    name: 'Zimbabwe',
    capital: 'Harare',
    flag: 'http://restcountries.eu/data/zwe.svg',
    alpha2Code: 'ZW',
    alpha3Code: 'ZWE',
    callingCodes: '263'
  }
];
