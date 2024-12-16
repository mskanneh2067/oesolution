import { useState } from "react";
import { AiOutlineProject } from "react-icons/ai";
const Project = () => {
  const [select, setSelect] = useState(null);
  const [multiselect, setMultiselect] = useState([]);
  const [toggleSelect, setToggleSelect] = useState(false);
  const singleSelectionHandler = (id) => {
    setSelect(id === select ? null : id);
  };
  const multiSelectionHandler = (id) => {
    let multiSelectCopy = [...multiselect];
    const currentIdIndex = multiSelectCopy.indexOf(id);
    console.log(currentIdIndex);
    if (currentIdIndex === -1) multiSelectCopy.push(id);
    else multiSelectCopy.splice(currentIdIndex, 1);
    setMultiselect(multiSelectCopy);
    console.log(select, multiselect);
  };
  return (
    <div>
      <div class="h-full min-h-screen w-full bg-blue-800 pt-12 p-4">
        <div class="grid gap-14 md:grid-cols-3 md:gap-5">
          <div class="rounded-xl bg-white p-6 shadow-xl">
            <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
              <AiOutlineProject size={30} />
            </div>
            <h1 class="text-darken mb-3 text-xl font-bold px-5 uppercase">
              Innovative technology patent research for start-up idea
            </h1>

            <p class="px-4 py-5 text-gray-700 border rounded-lg mb-4">
              Developed comprehensive project planning and scopes that defined
              deliverables and resource allocations for three key initiatives;
              achieved stakeholder satisfaction scores by 15% through clear
              communication and detailed planning processes.
            </p>

            <p class="px-4 py-5 text-gray-700 border rounded-lg">
              Played a key role in drafting the business plan, incorporating
              market analysis and product cost insights that projected an
              anticipated 25% growth in revenue over the next fiscal year.
            </p>

            <button className="bg-blue-800 px-14 py-3 rounded-lg text-white text-sm my-6">
              View Project Artifacts
            </button>
          </div>
          <div class="rounded-xl bg-white p-6 shadow-xl">
            <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
              <AiOutlineProject size={30} />
            </div>
            <h1 class="text-darken mb-3 text-xl font-bold px-5 uppercase">
              Research and development of advanced coatings and materials
              solutions
            </h1>

            <p class="px-4 py-5 text-gray-700 border rounded-lg mb-4">
              Research and development of advanced coating and materials
              solutions using project management skills and tools to meet
              customer needs.
            </p>

            <p class="px-4 py-5 text-gray-700 border rounded-lg mb-4">
              Led the comprehensive R&D effort for cutting-edge coating
              solutions targeting passive cooling systems, with a strong
              emphasis on optimizing material properties that increased lifespan
              by 35% under extreme conditions.
            </p>
            <p class="px-4 py-5 text-gray-700 border rounded-lg mb-4">
              Created coating solutions that improved flexibility and elasticity
              by more than 50%, surpassing the set standard by client.
            </p>
            <p class="px-4 py-5 text-gray-700 border rounded-lg">
              Championed innovations within a cross-functional team aimed at
              optimizing military-grade coatings, leading to reduced surface
              temperatures by over 15 degrees Celsius under standard operational
              conditions.
            </p>

            <button className="bg-blue-800 px-14 py-3 rounded-lg text-white text-sm my-6">
              View Project Artifacts
            </button>
          </div>
          <div class="rounded-xl bg-white p-6 shadow-xl">
            <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
              <AiOutlineProject size={30} />
            </div>
            <h1 class="text-darken mb-3 text-xl font-bold px-5 uppercase">
              Innovative technology patent research for start-up idea
            </h1>

            <p class="px-4 py-5 text-gray-700 border rounded-lg mb-4">
              Developed comprehensive project planning and scopes that defined
              deliverables and resource allocations for three key initiatives;
              achieved stakeholder satisfaction scores by 15% through clear
              communication and detailed planning processes.
            </p>

            <p class="px-4 py-5 text-gray-700 border rounded-lg">
              Played a key role in drafting the business plan, incorporating
              market analysis and product cost insights that projected an
              anticipated 25% growth in revenue over the next fiscal year.
            </p>

            <button className="bg-blue-800 px-14 py-3 rounded-lg text-white text-sm my-6">
              View Project Artifacts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
