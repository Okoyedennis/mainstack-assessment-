import React, { useEffect, useState } from "react";
import { graphDays } from "./Data";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  YAxis,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import axios from "axios";
import img1 from "../images/nigeria_flag.png";
import img2 from "../images/dot1.png";
import img3 from "../images/dot2.png";
import img4 from "../images/dot3.png";
import img5 from "../images/dot4.png";
import img6 from "../images/dot5.png";
import img7 from "../images/facebook_logo.png";
import img8 from "../images/linkedin_logo.png";
import {AiOutlineInfoCircle} from "react-icons/ai";

const Graph = () => {
  const [graphData, setGraphData] = useState({ views: {} });
  const [locationData, setLocationData] = useState([]);
  const [sourcesData, setSourcesData] = useState([]);
  const [mobileText, setMobileText] = useState(false);

  const changeScreenWidth = () => {
    window.innerWidth <= 786 ? setMobileText(true) : setMobileText(false);
  };

  window.addEventListener("resize", changeScreenWidth);

  useEffect(() => {
    axios
      .get("https://fe-task-api.mainstack.io/")
      .then((response) => {
        setGraphData(response.data.graph_data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://fe-task-api.mainstack.io/")
      .then((response) => {
        setLocationData(response.data.top_locations);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://fe-task-api.mainstack.io/")
      .then((response) => {
        setSourcesData(response.data.top_sources);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const COLORS = ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"];
  const COLORS2 = ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A"];

  console.log(sourcesData);
  return (
    <>
      <div className="container mx-auto">
        <div className="px-2 md:px-5 flex items-center mt-7  md:mt-4 gap-2 flex-wrap md:gap-5 lg:gap-10">
          {graphDays.map(({ text, cn }, index) => (
            <div
              className={`h-[30px] md:h-[40px] rounded-full py-[12px] px-[16px] border flex items-center text-xs lg:text-sm leading-[16px] text-grayish font-medium cursor-pointer ${
                cn && "border-2 border-active bg-bgActive !text-active"
              }`}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="mx-2 md:mx-5 p-5 border rounded-md mt-5 md:mt-10">
          <div className="flex items-center justify-between">
            <h6 className="text-lg tracking-[-1.5%] leading-[24px] text-primary font-bold">
              Page Views
            </h6>
            <AiOutlineInfoCircle />
          </div>

          <p className="text-sm leading-[24px] text-grayish font-medium mt-1 md:mt-3">
            All time
          </p>
          <h5 className="text-primary text-[25px] md:text-[30px] lg:text-[58px] md:leading-[57.6px] tracking-[-1.5%] mt-1 lg:my-5 font-medium">
            500
          </h5>
          <div className="hidden md:block">
            <ResponsiveContainer width="100%" height="100%" aspect={4}>
              <AreaChart
                width={mobileText ? 700 : 1200}
                height={200}
                data={Object.entries(graphData.views).map(([date, views]) => ({
                  date,
                  views,
                }))}
                stroke="#FF5403"
                fill="#FF5403"
                // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="date" stroke="#000000" fill="#FF5403" />
                <YAxis stroke="#000000" fill="#FF5403" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area
                  dataKey="views"
                  stroke="#FF5403"
                  fill="#FF5403"
                  activeDot={{ r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex lg:items-center justify-between flex-col lg:flex-row gap-4 mt-10">
            <div className="rounded-md border p-5 flex-1">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-[18px] leading-[24px] tracking-[-1.5%] font-medium text-primary">
                  Top Locations
                </h3>
                <p className="text-active text-sm leading-[22px] hidden md:block">
                  View full reports
                </p>
              </div>
              <div className="mt-5 flex flex-col lg:flex-row lg:items-center justify-between w-full">
                <div className="">
                  {locationData.map((item, index) => (
                    <div className="flex items-center gap-1 mt-2" key={index}>
                      {item.country === "Nigeria" && (
                        <img
                          src={img1}
                          alt="Nigeria"
                          className="h-[15px] w-[21px]"
                        />
                      )}
                      {item.country === "Germany" && (
                        <img
                          src="https://www.state.gov/wp-content/uploads/2018/07/gm-lgflag.gif"
                          alt="Nigeria"
                          className="h-[15px] w-[21px] rounded-sm"
                        />
                      )}
                      {item.country === "Ghana" && (
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1280px-Flag_of_Ghana.svg.png"
                          alt="Nigeria"
                          className="h-[15px] w-[21px] rounded-sm"
                        />
                      )}
                      {item.country === "Finland" && (
                        <img
                          src="https://flags.co.uk/client/uploads/5/finland.png"
                          alt="Nigeria"
                          className="h-[15px] w-[21px] rounded-sm"
                        />
                      )}
                      {item.country === "United Kingdom" && (
                        <img
                          src="https://cdn.wallpapersafari.com/51/1/nVeBg3.jpg"
                          alt="Nigeria"
                          className="h-[15px] w-[21px] rounded-sm"
                        />
                      )}
                      <span className="text-primary text-sm leading-[24px] ml-1">
                        {item.country}
                      </span>
                      <span className="text-primary text-sm leading-[24px] font-bold">
                        {item.percent}%
                      </span>
                      {item.country === "Nigeria" && (
                        <img
                          src={img2}
                          alt="Nigeria"
                          className="h-[8px] w-[8px] object-contain"
                        />
                      )}

                      {item.country === "Germany" && (
                        <img
                          src={img3}
                          alt="Germany"
                          className="h-[8px] w-[8px] object-contain"
                        />
                      )}
                      {item.country === "Ghana" && (
                        <img
                          src={img4}
                          alt="Ghana"
                          className="h-[8px] w-[8px] object-contain"
                        />
                      )}
                      {item.country === "Finland" && (
                        <img
                          src={img5}
                          alt="Finland"
                          className="h-[8px] w-[8px] object-contain"
                        />
                      )}
                      {item.country === "United Kingdom" && (
                        <img
                          src={img6}
                          alt="United Kingdom"
                          className="h-[8px] w-[8px] object-contain"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="hidden md:block">
                  <PieChart width={300} height={200}>
                    <Pie
                      dataKey="percent"
                      data={locationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      labelLine={false}
                    >
                      {locationData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </div>
              </div>
            </div>
            <div className="rounded-md border p-5 flex-1">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-[18px] leading-[24px] tracking-[-1.5%] font-medium text-primary">
                  Top Referral source
                </h3>
                <p className="text-active text-sm leading-[22px] hidden md:block">
                  View full reports
                </p>
              </div>
              <div className="mt-5 flex flex-col lg:flex-row lg:items-center justify-between w-full">
                <div className="">
                  {sourcesData.map((item, index) => (
                    <div className="flex items-center gap-1 mt-2" key={index}>
                      {item.source === "google" && (
                        <img
                          src="https://image.similarpng.com/very-thumbnail/2020/12/Google-logo-design-isolated-illustration-premium-vector-PNG.png"
                          alt="google"
                          className="h-[15px] w-[21px] object-contain"
                        />
                      )}
                      {item.source === "instagram" && (
                        <img
                          src="https://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg"
                          alt="instagram"
                          className="h-[15px] w-[21px] rounded-sm object-contain"
                        />
                      )}
                      {item.source === "facebook" && (
                        <img
                          src={img7}
                          alt="facebook"
                          className="h-[15px] w-[21px] rounded-sm object-contain"
                        />
                      )}
                      {item.source === "linkedin" && (
                        <img
                          src={img8}
                          alt="linkedin"
                          className="h-[15px] w-[21px] rounded-sm object-contain"
                        />
                      )}
                      <span className="text-primary text-sm leading-[24px] ml-1">
                        {item.source}
                      </span>
                      <span className="text-primary text-sm leading-[24px] font-bold">
                        {item.percent}%
                      </span>
                      {item.source === "google" && (
                        <img
                          src={img2}
                          alt="google"
                          className="h-[8px] w-[8px] object-contain"
                        />
                      )}

                      {item.source === "instagram" && (
                        <img
                          src={img3}
                          alt="instagram"
                          className="h-[8px] w-[8px] object-contain"
                        />
                      )}
                      {item.source === "facebook" && (
                        <img
                          src={img4}
                          alt="facebook"
                          className="h-[8px] w-[8px] object-contain"
                        />
                      )}
                      {item.source === "linkedin" && (
                        <img
                          src={img5}
                          alt="linkedin"
                          className="h-[8px] w-[8px] object-contain"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="hidden md:block">
                  <PieChart width={300} height={200}>
                    <Pie
                      dataKey="percent"
                      data={sourcesData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      labelLine={false}
                    >
                      {sourcesData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS2[index % COLORS2.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
