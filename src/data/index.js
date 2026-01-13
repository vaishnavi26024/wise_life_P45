import solarPanel from "../assets/products/solar-panel.png";
import solarInverter from "../assets/products/solar-inverter.png";
import hybridInverter from "../assets/products/hybrid-inverter.png";
import commercialInverter from "../assets/products/commercial-inverter.png";
import battery from "../assets/products/battery.png";
import energyStorage from "../assets/products/energy-storage.png";
import solarPump from "../assets/products/solar-pump.png";
import solarWaterHeater from "../assets/products/solar-water-heater.png";
import solarStreetLight from "../assets/products/solar-street-light.png";
import evCharger from "../assets/products/ev-charger.png";
import fastEvCharger from "../assets/products/fast-ev-charger.png";

export const products = [
  {
    id: 1,
    name: "Solar Rooftop Panel – 540W",
    category: "Solar",
    price: "₹18,000",
    description:
      "High-efficiency monocrystalline solar panel for residential and industrial rooftops.",
    image: solarPanel,
  },
  {
    id: 2,
    name: "Solar Rooftop Panel – 600W",
    category: "Solar",
    price: "₹21,000",
    description:
      "Ultra high-power solar panel suitable for large commercial installations.",
    image: solarPanel,
  },
  {
    id: 3,
    name: "Solar Inverter – 5kW",
    category: "Solar",
    price: "₹55,000",
    description:
      "Pure sine wave inverter suitable for on-grid and off-grid solar systems.",
    image: solarInverter,
  },
  {
    id: 4,
    name: "Hybrid Solar Inverter – 6kW",
    category: "Solar",
    price: "₹72,000",
    description:
      "Hybrid inverter supporting solar, battery storage, and grid connectivity.",
    image: hybridInverter,
  },
  {
    id: 5,
    name: "Commercial Solar Inverter – 20kW",
    category: "Solar",
    price: "₹2,40,000",
    description:
      "High-capacity inverter designed for commercial and industrial solar plants.",
    image: commercialInverter,
  },
  {
    id: 6,
    name: "Lithium Battery – 5kWh",
    category: "Solar",
    price: "₹1,25,000",
    description:
      "High-performance lithium battery for energy storage and backup solutions.",
    image: battery,
  },
  {
    id: 7,
    name: "Energy Storage System – 10kWh",
    category: "Solar",
    price: "₹2,10,000",
    description:
      "Advanced energy storage system for commercial and backup applications.",
    image: energyStorage,
  },
  {
    id: 8,
    name: "Solar Water Pump – 3HP",
    category: "Solar",
    price: "₹95,000",
    description:
      "Solar-powered water pumping solution for agriculture and rural areas.",
    image: solarPump,
  },
  {
    id: 9,
    name: "Solar Water Heater – 200L",
    category: "Solar",
    price: "₹28,000",
    description:
      "Energy-efficient solar water heating system for residential use.",
    image: solarWaterHeater,
  },
  {
    id: 10,
    name: "Solar Street Light – All In One",
    category: "Solar",
    price: "₹18,500",
    description:
      "Integrated solar street lighting solution with battery and LED lamp.",
    image: solarStreetLight,
  },
  {
    id: 11,
    name: "EV Home Charger – 7.2kW",
    category: "EV",
    price: "₹32,000",
    description:
      "Fast AC home charger compatible with most electric vehicles.",
    image: evCharger,
  },
  {
    id: 12,
    name: "EV Fast Charging Station – 30kW",
    category: "EV",
    price: "₹3,75,000",
    description:
      "DC fast charging station suitable for highways and commercial locations.",
    image: fastEvCharger,
  },
];
