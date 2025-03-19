import React from "react"

const ListOfOperators = () => {
  const data = [
    {
      id: 1,
      name: "Ringgi Demdema Organic Producers Cooperative Society Ltd. Demdema, West Garo Hills, -793119",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Pineapple",
    },
    {
      id: 2,
      name: "Khliehriat Organic Producers Cooperative Society Ltd (Group I) Wapung Village, East Jaintia Hills, - 793200",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Turmeric Fresh",
    },
    {
      id: 3,
      name: "Rongkuchak-I Organic Producer Cooperative Society Ltd, North Garo Hills 794108",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Black Pepper",
    },
    {
      id: 4,
      name: "Rongsang Dadenggre Organic Producers Cooperative Society Ltd. Dadenggre, North Garo Hills -793119",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Cashew nut",
    },
    {
      slNo: 5,
      name: "Iatreilang Organic Producers Cooperative Society Ltd. (ICS- I) Mawthadraishan, Laitkseh, West Khasi Hills, Meghalaya-793119",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Kiwi Fruit Fresh",
    },
    {
      slNo: 6,
      name: "Saipung Organic Producers Cooperative Society Ltd (Group I) Lamyrsiang Village, East Jaintia Hills, East Jaintia Hills, Meghalaya-793200",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Turmeric Fresh",
    },
    {
      slNo: 7,
      name: "Bunshnong Organic Producers Cooperative Society Ltd. (ICS- I) Mawshynrut, Nonglang, West Khasi Hills, Meghalaya-793119",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Ginger Fresh",
    },
    {
      slNo: 8,
      name: "Bunshnong Organic Producers Cooperative Society Ltd. (ICS- II) Mawshynrut, Nonglang, West Khasi Hills, Meghalaya-793119",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Ginger Fresh",
    },
    {
      slNo: 9,
      name: "Iatreilang Organic Producers Cooperative Society Ltd. (ICS- II) Mawthadraishan, Laitkseh, West Khasi Hills, Meghalaya-793119",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Kiwi Fruit Fresh",
    },
    {
      slNo: 10,
      name: "Raid Rngi Organic Producers Cooperative Society Ltd., Iewrynghep, East Khasi Hills, Meghalaya-793015",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Orange",
    },
    {
      slNo: 11,
      name: "Laskein Organic Producers Cooperative Society Ltd. (Group II) Raliang Village, West Jaintia Hills, Meghalaya-793150",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Turmeric Fresh",
    },
    {
      slNo: 12,
      name: "Laskein Organic Producers Cooperative Society Ltd. (Group I) Raliang Village, West Jaintia Hills, Meghalaya-793150",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Turmeric Fresh",
    },
    {
      slNo: 13,
      name: "ShilliangUm Organic Producers Cooperative Society Ltd Mawlaingut, Sohiong Block, Mawlaingut, Mylliem, East Khasi Hills, Meghalaya-793005",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Ginger Fresh",
    },
    {
      slNo: 14,
      name: "Thadlaskein Organic Producers Cooperative Society Ltd. (Group I) Umjalisiaw Village, Thadlaskein, West Jaintia Hills, Meghalaya-793151",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Ginger Fresh",
    },
    {
      slNo: 15,
      name: "Ardong Phlangwar Organic Producers Cooperative Society Ltd. (IC-1) Wahkaji, South West Khasi Hills, Meghalaya-793114",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Orange",
    },
    {
      slNo: 16,
      name: "Diengpasoh Organic Producers Cooperative Society Ltd. Diengpasoh, Mawryngkneng block, East Khasi Hills, Meghalaya-793021",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Ginger Fresh",
    },
    {
      slNo: 17,
      name: "Thadlaskein Organic Producers Cooperative Society Ltd. (Group II) Umjalisiaw Village, Thadlaskein, West Jaintia Hills, Meghalaya-793151",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Ginger Fresh",
    },
    {
      slNo: 18,
      name: "Ranikor Organic Producers Cooperative Society Ltd., Ranikor, Phodkroh, South West Khasi Hills, Meghalaya-793106",
      status: "2nd Year Conversion",
      category: "Crop Production",
      crops: "Black Pepper",
    },
  ]
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center uppercase">
          List Of Operators{" "}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg shadow-md">
            <thead>
              <tr className="bg-green-600 text-white text-left text-base">
                <th className="p-3">Sl. No.</th>
                <th className="p-3">ICS Name</th>
                <th className="p-3">Organic Status</th>
                <th className="p-3">Category</th>
                <th className="p-3">Crops</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-100 transition text-base"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.status}</td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3">{item.crops}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListOfOperators
