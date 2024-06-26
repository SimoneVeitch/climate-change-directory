import React from "react";
import energy from "../Images_climate_site/light_bulb.png";
import source from "../Images_climate_site/save_energy.png";
import bike from "../Images_climate_site/bike.png";
import vehicle from "../Images_climate_site/electric_vehicle.png";
import travel from "../Images_climate_site/travel.png";
import recycle from "../Images_climate_site/recycle.png";
import vegetables from "../Images_climate_site/vegetables.png";
import plant from "../Images_climate_site/plant_natives.png";
import clean from "../Images_climate_site/clean_up.png";
import money from "../Images_climate_site/money.png";
import protest from "../Images_climate_site/protest.png";


function Tips() {
 return (
 <div id="tips-container">
<h1 className="tips-h1">TIPS</h1>

   <div className="tips-card">
   <div className="img-container">
          <img src={energy} alt="Light bulb" />
        </div>
        <div className="text-container">
          <h2>Save energy at home</h2>
          <p>
            Much of our electricity and heat are powered by coal, oil and gas. Use less energy by reducing your heating and cooling use, switching to LED light bulbs and energy-efficient electric appliances, washing your laundry with cold water, or hanging things to dry instead of using a dryer. Improving your home’s energy efficiency, through better insulation for instance, or replacing your oil or gas furnace with an electric heat pump can reduce your carbon footprint by up to 900 kilograms of CO2e per year.
          </p>
        </div>
      </div>

      <div className="tips-card reverse">
   <div className="img-container">
          <img src={source} alt="Renewable energy image" />
        </div>
        <div className="text-container">
          <h2>Change your home's source of energy</h2>
          <p>
          Ask your utility company if your home energy comes from oil, coal or gas. If possible, see if you can switch to renewable sources such as wind or solar. Or install solar panels on your roof to generate energy for your home. Switching your home from oil, gas or coal-powered energy to renewable sources of energy, such as wind or solar, can reduce your carbon footprint by up to 1.5 tons of CO2e per year.
          </p>
        </div>
      </div>

      <div className="tips-card">
   <div className="img-container">
          <img src={bike} alt="Girl in front of bike" />
        </div>
        <div className="text-container">
          <h2>Walk, bike or take public transport</h2>
          <p>
          The worlds roadways are clogged with vehicles, most of them burning diesel or gasoline. Walking or riding a bike instead of driving will reduce greenhouse gas emissions -- and help your health and fitness. For longer distances, consider taking a train or bus. And carpool whenever possible. Living car-free can reduce your carbon footprint by up to 2 tons of CO2e per year compared to a lifestyle using a car. </p>
        </div>
      </div>

      <div className="tips-card reverse">
   <div className="img-container">
          <img src={vehicle} alt="Man refuelling electric vehicle" />
        </div>
        <div className="text-container">
          <h2>Switch to an electric vehicle</h2>
          <p>
          If you plan to buy a car, consider going electric, with more and cheaper models coming on the market. In many countries, electric cars help reduce air pollution and cause significantly fewer greenhouse gas emissions than gas or diesel-powered vehicles. But many electric cars still run on electricity produced from fossil fuels, and the batteries and engines require rare minerals which often come with high environmental and social costs. Switching from a gasoline or diesel-powered car to an electric vehicle can reduce your carbon footprint by up to 2 tons of CO2e per year. A hybrid vehicle can save you up to 700 kilograms of CO2e per year. </p>
        </div>
      </div>

      <div className="tips-card">
   <div className="img-container">
          <img src={travel} alt="Image of airplane" />
        </div>
        <div className="text-container">
          <h2>Consider your travel</h2>
          <p>
          Airplanes burn large amounts of fossil fuels, producing significant greenhouse gas emissions. That makes taking fewer flights one of the fastest ways to reduce your environmental impact. When you can, meet virtually, take a train, or skip that long-distance trip altogether. Taking one less long-haul return flight can reduce your carbon footprint by up to almost 2 tons of CO2e.</p>
        </div>
      </div>

      <div className="tips-card reverse">
   <div className="img-container">
          <img src={recycle} alt="Girl putting our recycling" />
        </div>
        <div className="text-container">
          <h2>Reduce, reuse, repair and recycle</h2>
          <p>
          Electronics, clothes, plastics and other items we buy cause carbon emissions at each point in production, from the extraction of raw materials to manufacturing and transporting goods to market. To protect the climate, buy fewer things, shop second-hand, and repair what you can. Plastics alone generated 1.8 billion metric tonnes of greenhouse gas emissions in 2019 – 3.4 per cent of the global total. Less than 10 per cent is recycled, and once plastic is discarded, it can linger for hundreds of years. Buying fewer new clothes – and other consumer goods – can also reduce your carbon footprint. Every kilogram of textiles produced generates about 17 kilograms of CO2e.</p>
        </div>
      </div>

      <div className="tips-card">
   <div className="img-container">
          <img src={vegetables} alt="Woman holding bag of vegetables" />
        </div>
        <div className="text-container">
          <h2>Eat more vegetables</h2>
          <p>
          Eating more vegetables, fruits, whole grains, legumes, nuts, and seeds, and less meat and dairy, can significantly lower your environmental impact. Producing plant-based foods generally results in fewer greenhouse gas emissions and requires less energy, land, and water. Shifting from a mixed to a vegetarian diet can reduce your carbon footprint by up to 500 kilograms of CO2e per year (or up to 900 kilograms for a vegan diet). </p>
        </div>
      </div>

      <div className="tips-card reverse">
   <div className="img-container">
          <img src={plant} alt="Woman planting natives" />
        </div>
        <div className="text-container">
          <h2>Plant native species</h2>
          <p>
          If you have a garden or even just a plant or two outside your home, check for native species. Use a plant identification app to help. And then think about replacing non-natives, especially any considered invasive. Plants, animals and insects depend on each other. Most insects will not eat non-native plants, which means birds and other species lose a food source. Biodiversity suffers. Even a single tree or shrub can offer a refuge – just remember to skip insecticides and other chemicals.</p>
        </div>
      </div>

      <div className="tips-card">
   <div className="img-container">
          <img src={clean} alt="People cleaning up park" />
        </div>
        <div className="text-container">
          <h2>Clean up your environment</h2>
          <p>
          Humans, animals and plants all suffer from land and water contaminated by improperly discarded garbage. Use what you need, and when you have to throw something out, dispose of it properly. Educate others to do the same, and participate in local clean-ups of parks, rivers, beaches and beyond. Every year, people throw out 2 billion tons of trash. About a third causes environment harms, from choking water supplies to poisoning soil.</p>
        </div>
      </div>

      <div className="tips-card reverse">
   <div className="img-container">
          <img src={money} alt="Woman watering money tree" />
        </div>
        <div className="text-container">
          <h2>Make your money count</h2>
          <p>
          Everything we spend money on affects the planet. You have the power to choose which goods and services you support. To reduce your environmental impact, choose products from companies who use resources responsibly and are committed to cutting their gas emissions and waste. If you have money that is being invested for you, through a pension fund for instance, it may be supporting fossil fuels or deforestation. Making sure your savings are invested in environmentally sustainable businesses can greatly reduce your carbon footprint.</p>
        </div>
      </div>

      <div className="tips-card">
   <div className="img-container">
          <img src={protest} alt="Protest sign" />
        </div>
        <div className="text-container">
          <h2>Speak up</h2>
          <p>
          Speak up and get others to join in taking action. It's one of the quickest and most effective ways to make a difference. Talk to your neighbors, colleagues, friends, and family. Let business owners know you support bold changes – from plastics-free products and packaging to zero-emissions vehicles. Appeal to local and world leaders to act now. Climate action is a task for all of us. And it concerns all of us. No one can do it all alone – but we can do it together. </p>
        </div>
      </div>
      <div className="btn-tips">
      <a href="https://www.un.org/en/actnow/ten-actions">Source</a>
      </div>
 </div>
 );
}


export default Tips;