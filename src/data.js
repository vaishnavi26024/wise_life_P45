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
    price: "₹5000",
    image: solarPanel,
    description: "High-efficiency solar panels designed for maximum power generation.Ideal for both residential and commercial solar installations.",
  },
  {
    id: 9,
    name: "Solar Pump",
    category: "Solar",
    price: "₹3500",
    image: solarPump,
    description: "Solar-powered water pump for farms and irrigation systems.Works efficiently without electricity, reducing operating costs.",
  },
  {
    id: 11,
    name: "Solar Water Heater",
    category: "Solar",
    price: "₹2800",
    image: solarWaterHeater,
    description: "Environment-friendly system that heats water using solar energy.Helps reduce electricity bills while providing hot water daily.",
  },
  {
    id: 2,
    name: "Solar Inverter",
    category: "Solar",
    price: "₹2999",
    image: solarInverter,
    description: "Converts solar energy into usable electricity efficiently.Ensures stable and reliable power for homes and offices.",
  },
  {
    id: 3,
    name: "Hybrid Inverter",
    category: "Solar",
    price: "₹5999",
    image: hybridInverter,
    description: "Supports both solar power and battery storage systems.Provides uninterrupted power even during grid outages.",
  },
  {
    id: 4,
    name: "Commercial Inverter",
    category: "Solar",
    price: "₹4899",
    image: commercialInverter,
    description: "High-capacity inverter built for large-scale solar projects.Delivers reliable performance for commercial applications.",
  },
  {
    id: 5,
    name: "Energy Storage System",
    category: "Solar",
    price: "₹3599",
    image: energyStorage,
    description: "Stores excess solar energy for later use.Ensures continuous power supply during power cuts.",
  },
  {
    id: 6,
    name: "Battery Backup",
    category: "Solar",
    price: "₹2999",
    image: battery,
    description: "Provides dependable backup power for essential devices.Designed for long life and consistent performance.",
  },
  {
    id: 7,
    name: "EV Charger",
    category: "EV",
    price: "₹4000",
    image: evCharger,
    description: "Safe and efficient charging solution for electric vehicles.Perfect for home and small commercial installations.",
  },
  {
    id: 8,
    name: "Fast EV Charger",
    category: "EV",
    price: "₹4899",
    image: fastEvCharger,
    description: "High-speed charger for quick EV charging.Ideal for commercial locations and public charging stations.",
  },
  
  {
    id: 10,
    name: "Solar Street Light",
    category: "Solar",
    price: "₹3249",
    image: solarStreetLight,
    description: "Solar-powered lighting for streets and outdoor areas.Consumes zero electricity and requires minimal maintenance.",
  },
  
];
