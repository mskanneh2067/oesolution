import { AiOutlineProject } from "react-icons/ai";


const Accordion = (props) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-xl">
      <div className={`mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full  shadow-lg shadow-teal-500/40 bg-${props.bg}`}>
        <AiOutlineProject size={30} />
      </div>

      <h1
        onClick={props.toggleAccordion}
        className="text-darken mb-3 text-sm font-bold px-5 uppercase transition duration-300"
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        >
          &#9660;
        </span>
      </h1>
      {props.isOpen && (
        <div>

        <p className="px-4 py-5 text-gray-700 border rounded-lg mb-4">
          {props.one}
        </p>
        <p className="px-4 py-5 text-gray-700 border rounded-lg mb-4">
          {props.two}
        </p>
        <p className="px-4 py-5 text-gray-700 border rounded-lg mb-4">
          {props.three}
        </p>
        <p className="px-4 py-5 text-gray-700 border rounded-lg mb-4">
          {props.four}
        </p>
        <p className="px-4 py-5 text-gray-700 border rounded-lg mb-4">
          {props.five}
        </p>
        <p className="px-4 py-5 text-gray-700 border rounded-lg mb-4">
          {props.six}
        </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
