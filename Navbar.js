import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
   <div className="flex justify-end gap-3 p-2">
  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Home</button>
  <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Post Job</button>
  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg">Login</button>
</div>

    
  );
}
