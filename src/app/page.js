"use client";
import Container from "@/components/Container/Container";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data2 = [
  {
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Home() {
  return (
    <div>
      <Container>
        <div className="admin-container flex">
          <div className="admin-left lg:w-3/10 ">
            <div className="drawer lg:drawer-open">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-primary drawer-button lg:hidden"
                >
                  Open
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  <li>
                    <a className="font-bold primaryFont lg:text-2xl md:text-1xl sm:text-1xl">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="font-bold primaryFont lg:text-2xl md:text-1xl sm:text-1xl">
                      Home
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="admin-right w-full lg:w-7/10 md:w-7/10 sm:w-7/10 bg-white">
            <h1 className="text-3xl font-bold text-black px-1 py-2">
              Welcome !
            </h1>

            <div className="upper-container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 px-2 bg-[#11162B] text-white ">
              <div className="w-full text-center py-7 shadow-md">
                <h1 className="text-2xl font-bold text-white"> 89600</h1>
                <h1 className="text-1xl font-bold text-white">
                  Life time total sell
                </h1>
              </div>
              <div className="w-full  text-center py-7 shadow-md">
                <h1 className="text-2xl font-bold text-white">9659600</h1>
                <h1 className="text-1xl font-bold text-white">
                  Income amounts
                </h1>
              </div>
              <div className="w-full  text-center py-7 shadow-md">
                <h1 className="text-2xl font-bold text-white">34600</h1>
                <h1 className="text-1xl font-bold text-white">Total users</h1>
              </div>
              <div className="w-full text-center py-7 shadow-md">
                <h1 className="text-2xl font-bold text-white">600</h1>
                <h1 className="text-1xl font-bold text-white">Total visits</h1>
              </div>
            </div>

            {/* <div className="middle grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 px-2 mt-4">
              <div className="middle-left lg:w-[50] md:w-[50] sm:w-[50] h-[350px] py-12 bg-[#11162B]  border">
                <h1 className="text-1xl font-bold px-2 py-2 text-white">Total Revenue</h1>

                <ResponsiveContainer>
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="middle-right  h-[350px] py-12 bg-[#11162B] border text-white">
                <h1 className="text-1xl font-bold px-2 py-2 text-white">
                  Total Analytics
                </h1>

                <ResponsiveContainer>
                  <LineChart
                    width={500}
                    height={300}
                    data={data2}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div> */}
            <div className="middle flex flex-col sm:flex-row px-2 mt-4 ">
              <div className="middle-left w-full sm:w-1/2 h-[400px] py-12 bg-[#11162B] border">
                <h1 className="text-1xl font-bold px-2 py-2 text-white">
                  Total Revenue
                </h1>

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    width={500} // You can adjust this as needed
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="middle-right w-full sm:w-1/2 h-[400px] py-12 bg-[#11162B] border text-white ">
                <h1 className="text-1xl font-bold px-2 py-2 text-white">
                  Total Analytics
                </h1>

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    width={500} // You can adjust this as needed
                    height={300}
                    data={data2}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="px-2 mt-5  ">
              <div className="lower-part w-full px-2 py-5 border ">
                <div className="px-2 py-5">
                  <h1 className="text-1xl font-bold px-2 py-2 text-black">
                    Contact
                  </h1>

                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <th className="text-2xl font-bold">Name</th>
                          <th className="text-2xl font-bold">Job</th>
                          <th className="text-2xl font-bold">Favorite Color</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  {/* image boshbe */}
                                </div>
                              </div>
                              <div>
                                <div className="font-bold text-black">
                                  Hart Hagerty
                                </div>
                                <div className="text-sm opacity-50 text-black">
                                  United States
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-black">
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">
                              Desktop Support Technician
                            </span>
                          </td>
                          <td className="text-black">Purple</td>
                          <th>
                            <button className="btn btn-ghost btn-xs text-black">
                              details
                            </button>
                          </th>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  {/* image boshbe */}
                                </div>
                              </div>
                              <div>
                                <div className="font-bold text-black">
                                  Brice Swyre
                                </div>
                                <div className="text-sm opacity-50 text-black">
                                  China
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-black">
                            Carroll Group
                            <br />
                            <span className="badge badge-ghost badge-sm">
                              Tax Accountant
                            </span>
                          </td>
                          <td className="text-black">Red</td>
                          <th>
                            <button className="btn btn-ghost btn-xs text-black">
                              details
                            </button>
                          </th>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  {/* image boshbe */}
                                </div>
                              </div>
                              <div>
                                <div className="font-bold text-black">
                                  Marjy Ferencz
                                </div>
                                <div className="text-sm opacity-50 text-black">
                                  Russia
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-black">
                            Rowe-Schoen
                            <br />
                            <span className="badge badge-ghost badge-sm">
                              Office Assistant I
                            </span>
                          </td>
                          <td className="text-black">Crimson</td>
                          <th>
                            <button className="btn btn-ghost btn-xs text-black">
                              details
                            </button>
                          </th>
                        </tr>
                        {/* row 4 */}
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  {/* image boshbe */}
                                </div>
                              </div>
                              <div>
                                <div className="font-bold text-black">
                                  Yancy Tear
                                </div>
                                <div className="text-sm opacity-50 text-black">
                                  Brazil
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-black">
                            Wyman-Ledner
                            <br />
                            <span className="badge badge-ghost badge-sm">
                              Community Outreach Specialist
                            </span>
                          </td>
                          <td className="text-black">Indigo</td>
                          <th>
                            <button className="btn btn-ghost btn-xs text-black">
                              details
                            </button>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
