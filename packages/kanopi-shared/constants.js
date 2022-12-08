const AberdeenLocationPrefix = '["aberdeen"]';

const AWIPlantCodeByZipCode = {
  21001: 'P686', // Aberdeen
  17547: 'P154', // Marietta
  85043: 'W027', // Phoenix
  31206: 'P156', // Macon
  17603: 'V1US', // A/S
  30720: 'V104', // Genco
};

const ShippingConditionsHeavy = {
  P146: "LT",
  P153: 'LT',
  P154: 'LT',
  P156: 'LT',
  P686: 'LT',
  P687: 'LT',
  P688: 'LT',
  S003: 'OT',
  S004: 'OT',
  W027: 'LT',
  V1US: 'LT',
  v003: 'LT',
};

const installationService = {
  sku: ['INSTALL', 'INSTALLBUNDLE'],
  location: 'Services',
  salesOrg: 'BP01',
};

const ShippingConditionsLite = {
  P146: 'UP',
  P153: 'UP',
  P154: 'UP',
  P156: 'UP',
  P686: 'UP',
  P687: 'UP',
  P688: 'UP',
  S003: 'OT',
  S004: 'OT',
  W027: 'UP',
  V104: 'UP',
  V1US: 'UP',
  v003: 'UP',
};

const CreditCardPercentage = {
  AmericanExpress: 3.15,
  Other: 2.15,
};

const payPalConditions = {
  zhc1: 3.49,
  zhc2: 0.49,
};
const klarnaConditions = {
  zhc1: 3.79,
  zhc2: 0.3,
};

const wayfairConditions = {
  zhc1: 4.0,
  zhc2: 0,
};

const CreditCardAmount = {
  AmericanExpress: 0.3,
  Other: 0.3,
};

const DistributorNumberByZipCode = {
  35613: '651232', // INEX Athens
  35214: '651207', // INEX Birmingham
  39232: '650158', // INEX Flowood
  39401: '651132', // INEX Hattiesburg
  32216: '651227', // INEX Jacksonville
  70471: '651067', // INEX Mandeville
  36110: '651209', // INEX Montgomery
  32514: '651277', // INEX Pensacola
  35401: '651208', // INEX Tuscaloosa
  70817: '651193', // INEX Baton Rouge
};

// To exclude distributors from rule > 100 miles, use GTS_DISTANCE_MILES
const DistributorExclusionRuleDistance = [
  651147, // GTS INTERIOR SUPPLY - Billings
  651068, // GTS INTERIOR SUPPLY - Idaho Falls
  650372, // GTS INTERIOR SUPPLY CO., INC. - Anchorage
  650747, // GTS INTERIOR SUPPLY CO., INC. - Boise
  650209, // GTS INTERIOR SUPPLY CO., INC. - Kirkland
  650210, // GTS INTERIOR SUPPLY CO., INC. - Portland
  650112, // GTS INTERIOR SUPPLY CO., INC. - Spokane
];
const DistributorPlantCode = {
  Grid: 'S003',
  Other: 'S004',
};

const GridShippingCost = 125;

const GridSubCategories = ['GRA', 'GRI', 'GRX', 'SMC', 'QKH'];

const SalesOrganizations = {
  Grid: 'GR01',
  Other: 'BP01',
};

const ShippingConditions = {
  SmallPackage: 'UP',
  LessTruckLoad: 'LT',
  Distributor: 'OT',
};

module.exports = {
  AberdeenLocationPrefix,
  AWIPlantCodeByZipCode,
  CreditCardAmount,
  CreditCardPercentage,
  DistributorNumberByZipCode,
  DistributorExclusionRuleDistance,
  DistributorPlantCode,
  GridShippingCost,
  GridSubCategories,
  SalesOrganizations,
  ShippingConditions,
  ShippingConditionsHeavy,
  ShippingConditionsLite,
  installationService,
  payPalConditions,
  klarnaConditions,
  wayfairConditions,
};
