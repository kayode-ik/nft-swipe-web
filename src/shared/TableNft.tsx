import React, { useState } from "react";

type TableProps = {
  headers: string[];
  data: Array<{
    id: number;
    collection: {
      image: string;
      name: string;
      icon: string;
    };
    floorPrice: number;
    idChange: string;
    volume: number;
    sales: number;
    owners: string;
    items: string;
  }>;
};

const TableNft: React.FC<TableProps> = ({ headers, data }) => {
  const getIdChangeColor = (value: string) => {
    if (value.startsWith("-")) return "#F92B0F"; // Negative value
    if (value.startsWith("+")) return "#3EB009"; // Positive value
    return "black"; // Neutral value
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="table-auto border-collapse w-full text-left" style={{textAlign : "left"}}>
        <thead>
          <tr
            className="border-t border-b border-gray-300"
            style={{
              borderTop: ".5px solid rgba(0, 0, 0, 0.25)",
              borderBottom: ".5px solid rgba(0, 0, 0, 0.25)",
            }}
          >
            {headers.map((header, index) => (
              <th
                key={index}
                className="p-4 font-semibold text-sm text-gray-600 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className="border-b border-gray-200"
              style={{ borderBottom: ".5px solid rgba(0, 0, 0, 0.25)" }}
            >
              <td className="p-4 text-center">{index + 1}</td>
              <td className="p-4 flex items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={row.collection.image}
                    alt={row.collection.name}
                    className="w-10 h-10 rounded mr-8"
                    width={50}
                    height={50}
                    // style={{ marginRight: 10 }}
                  />
                  <span className="font-medium">{row.collection.name}</span>
                  <img
                    src={row.collection.icon}
                    alt="icon"
                    className="w-5 h-5 mt-1"
                    width={20}
                    height={20}
                    // style={{ marginLeft: 5 }}
                  />
                </div>
              </td>
              <td className="p-4">{row.floorPrice}</td>
              {/* <td className="p-4">{row.idChange}</td> */}
              <td
                className="p-4"
                style={{ color: getIdChangeColor(row.idChange) }}
              >
                {row.idChange}
              </td>
              <td className="p-4">{row.volume}</td>
              <td className="p-4">{row.sales}</td>
              <td className="p-4">{row.owners}</td>
              <td className="p-4">{row.items}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableNft;
