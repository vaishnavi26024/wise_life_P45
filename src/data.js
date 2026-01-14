import battery from "./assets/Products/battery.png";
import commercialInverter from "./assets/Products/commercial-inverter.png";
import energyStorage from "./assets/Products/energy-storage.png";
import evCharger from "./assets/Products/ev-charger.png";
import fastEvCharger from "./assets/Products/fast-ev-charger.png";
import hybridInverter from "./assets/Products/hybrid-inverter.png";
import solarInverter from "./assets/Products/solar-inverter.png";
import solarPanel from "./assets/Products/solar-panel.png";
import solarPump from "./assets/Products/solar-pump.png";
import solarStreetLight from "./assets/Products/solar-street-light.png";
import solarWaterHeater from "./assets/Products/solar-water-heater.png";

export const products = [
  {
    id: 1,
    name: "Solar Panel",
    category: "Solar",
    price: "$299",
    image: solarPanel,
    description: "High-efficiency solar panels for residential and commercial use.",
  },
  {
    id: 9,
    name: "Solar Pump",
    category: "Solar",
    price: "$399",
    image: solarPump,
    description: "Solar-powered water pump for agricultural use.",
  },
  {
    id: 11,
    name: "Solar Water Heater",
    category: "Solar",
    price: "$349",
    image: solarWaterHeater,
    description: "Eco-friendly solar water heating system.",
  },
  {
    id: 2,
    name: "Solar Inverter",
    category: "Solar",
    price: "$499",
    image: solarInverter,
    description: "Reliable solar inverter for efficient energy conversion.",
  },
  {
    id: 3,
    name: "Hybrid Inverter",
    category: "Solar",
    price: "$699",
    image: hybridInverter,
    description: "Hybrid inverter supporting solar and battery storage.",
  },
  {
    id: 4,
    name: "Commercial Inverter",
    category: "Solar",
    price: "$1299",
    image: commercialInverter,
    description: "High-capacity inverter for commercial solar installations.",
  },
  {
    id: 5,
    name: "Energy Storage System",
    category: "Solar",
    price: "$899",
    image: energyStorage,
    description: "Advanced energy storage for uninterrupted power supply.",
  },
  {
    id: 6,
    name: "Battery Backup",
    category: "Solar",
    price: "$749",
    image: battery,
    description: "Reliable battery backup for homes and businesses.",
  },
  {
    id: 7,
    name: "EV Charger",
    category: "EV",
    price: "$599",
    image: evCharger,
    description: "Standard electric vehicle charging solution.",
  },
  {
    id: 8,
    name: "Fast EV Charger",
    category: "EV",
    price: "$899",
    image: fastEvCharger,
    description: "High-speed charging for electric vehicles.",
  },
  
  {
    id: 10,
    name: "Solar Street Light",
    category: "Solar",
    price: "$249",
    image: solarStreetLight,
    description: "Energy-efficient solar street lighting solution.",
  },
  
];
