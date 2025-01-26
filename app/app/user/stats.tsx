import { Text, View, TouchableOpacity, TextInput } from "react-native";

import "./stats.css"

import { Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, TimeScale } from "chart.js";
import 'chartjs-adapter-moment';
import Footer from "@/components/footer";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, TimeScale)

const AnalyticsPage = () => {

    const sampleData: { [key: string]: number[] } = {
        "Alex": [
            -5.00, 11.00, 11.00, 11.00, 21.00, 3.00, 0.00, -3.00, -3.00, -24.00, -24.00, -14.00, -16.00, -21.00, -31.00, -31.00, -31.00, -33.00, 2.00, -30.50, -36.79, -18.21, -6.21, -10.21, -10.21, -29.26, -19.26, -19.26, -31.76, -47.56, -38.14, -34.11, -22.94, -9.17, 3.56, -5.18, -8.18, -28.18, -24.18, -15.08, -19.08, -49.68, -46.70, -36.96, -32.22, -18.40, -8.92, -4.69, 37.31, 33.31, 63.14, 76.12, 61.43, 71.18, 71.18, 81.18, 77.18, 91.78, 96.01, 101.59, 105.74, 118.08, 121.42, 120.42, 137.83, 117.97, 94.22, 92.22, 82.10, 55.23, 45.74, 40.37, 50.11, 54.33, 36.65, 11.59, 8.09, -11.91, -7.76, 56.24, 34.24, 39.11, 39.11, 28.40, 10.04, 8.25, -3.05, -25.79, -3.42, 3.79, 5.25, 29.25, 53.25, 59.74, 64.61, 56.83, 48.88, 24.74, 24.74, 29.02, 35.83, 35.83, 35.83, 17.44, 20.42, 31.66, 38.86, 38.86, 38.86, 29.36, 46.36, 56.36, 51.36, 51.36, 51.36, 48.36, 48.36, 30.36, 28.61, 28.61, 28.61, 28.61, 31.82, 35.98, 43.37, 1.37, 40.05, 40.05, 43.36, 54.69, 53.69, 53.69, 22.35, -80.11, -73.02, -73.02, -73.02, -59.70, -38.33, -47.14, -47.14, -47.14, -32.41, -32.41, -51.91, -39.82, -30.07, -30.07, -34.07, -34.07, -46.57, -46.57, -83.57, -87.57, -85.57, -89.97, -71.28, -64.40, -69.40, -69.40, -78.40, -71.19, -64.56, -64.56, -22.82, -12.34, -3.24, 2.87, 20.13, 20.13, 
        ],
        "Pez": [
            5.00, 5.00, 15.00, 25.00, 15.00, 33.00, 36.00, 39.00, 3.00, 24.00, 34.50, 24.50, 26.50, 26.50, 26.50, 26.50, 36.50, 38.50, 3.50, 36.00, 29.71, 11.13, 7.13, 7.13, 12.63, 12.63, 12.63, 7.13, 7.13, 7.13, 7.13, 7.13, 7.13, 7.13, 7.13, 7.13, -3.98, 16.02, 16.02, 16.02, 16.02, 16.02, 16.02, 16.02, 16.02, 16.02, 16.02, 16.02, 16.02, 16.02, 16.02, 16.02, 16.02, 16.02, 6.02, -3.98, -3.98, -3.98, -3.98, -3.98, -3.98, -3.98, -3.98, -3.98, -3.98, -3.98, -3.98, -3.98, -3.98, 22.89, 22.89, 22.89, 22.89, 22.89, 22.89, 22.89, 22.89, 22.89, 22.89, 22.89, 22.89, 22.89, 14.07, 14.07, 14.07, 14.07, 14.07, 14.07, 14.07, 14.07, 14.07, 14.07, -9.93, -9.93, -9.93, -9.93, -9.93, -9.93, -18.43, -18.43, -18.43, 23.95, 3.26, 3.26, 3.26, 3.26, 3.26, 3.26, -8.23, -8.23, -8.23, -18.23, -18.23, -58.23, -52.48, -49.48, -31.48, -13.48, -8.23, 7.77, 10.27, 4.27, 4.27, 4.27, -3.13, 38.87, 24.93, 24.93, 24.93, 24.93, 28.93, 34.93, 34.93, 34.93, 34.93, 16.24, 16.24, 10.39, 3.93, 21.56, 65.56, 56.56, 56.56, 56.56, 56.56, 50.58, 50.58, 42.12, 42.12, 40.62, 28.12, 28.12, -16.38, -16.38, -16.38, -20.78, -20.78, -20.78, -15.78, -6.78, 18.22, 18.22, 18.22, -3.50, -3.50, -3.50, -3.50, -3.50, -8.45, -20.44, 
        ],
        "Faisal": [
            0.00, -16.00, -26.00, -36.00, -36.00, -36.00, -36.00, -36.00, 0.00, 0.00, 0.00, 0.00, 0.00, 5.00, 15.00, 15.00, 15.00, 15.00, 15.00, 15.00, 15.00, 15.00, 15.00, 15.00, 9.50, 28.55, 28.55, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, 34.05, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, -7.95, 9.05, 9.05, 9.05, 9.05, 9.05, 9.05, 9.05, 9.05, 9.05, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, -2.44, 100.02, 100.02, 100.02, 87.89, 87.89, 87.89, 87.89, 87.89, 87.89, 87.89, 66.89, 66.89, 66.89, 66.89, 66.89, 74.89, 74.89, 74.89, 64.12, 64.12, 72.12, 72.12, 65.72, 65.72, 65.72, 65.72, 65.72, 65.72, 65.72, 65.72, 65.72, 65.72, 55.24, 55.24, 55.24, 55.24, 55.24, 
        ],
        "Kiersten": [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -10.5, -10.5, -10.5, -10.5, -10.5, -15.5, -15.5, -15.5, -15.5, -15.5, 3.37, 3.37, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -0.63, -9.13, -9.13, -9.13, -9.13, -9.13, -9.13, -9.13, -9.13, -9.13, -9.13, -9.13, -9.13, -9.13, -9.13, -9.13, 30.87, 25.12, 25.12, 25.12, 25.12, 23.37, 7.37, 4.87, 4.87, 4.87, 4.87, 4.87, 4.87, -6.371, -12.77, -12.77, -12.77, -15.77, -21.77, -21.77, -21.77, -21.77, -21.77, -21.77, -21.77, -28.231, -28.231, -72.231, -63.231, -63.231, -63.231, -63.231, -63.231, -63.231, -54.771, -54.771, -53.271, -65.771, -65.771, -70.271, -70.271, -70.271, -74.671, -74.671, -74.671, -74.671, -74.671, -81.671, -88.8795, -95.5095, -73.7895, -73.7895, -73.7895, -73.7895, -73.7895, -81.1495, -69.1595 
        ],
        "Adrian": [
            0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0,12.5, 8.3, 8.8815, 4.8515, .6845, 10.089, 22.816, 14.076, .034, .034, 3.966, 13.066, 9.066, 1.534, 8.5505, .8135, .0685, 9.7515, 19.235, 23.46, 23.46, 19.46, 49.285, 62.272, 47.582, 57.3255, 57.3255, 57.3255, 53.3255, 67.931, 72.156, 77.7395, 81.893, 94.23, 97.571, 96.571, 113.978, 94.118, 70.368, 68.368, 58.248, 58.248, 48.758, 43.388, 53.125, 57.35, 39.67, 14.61, 11.11, .89, .74, 59.26, 37.26, 42.1285, 33.30985, 22.60015, 4.24015, 2.45015, .84485, 31.58, 9.22, 2.01, 0.55, -23.45, -23.45, -29.94, -34.81, -27.03, -19.08, 5.06, 5.06, 0.78, -6.03, -48.41, -27.72, -9.33, -12.31, -23.54, -30.74, -19.25, -7.76, 1.74, -15.26, -15.26, -10.26, -10.26, -10.26, -10.26, -28.26, -28.26, -30.01, -30.01, -30.01, -30.01, -33.23, -37.38, -37.38, -37.38, -50.88, -50.88, -54.18, -65.52, -65.52, -65.52, -34.18, -34.18, -41.27, -22.58, -10.45, -17.92, -26.37, -35.19, -35.19, -35.19, -49.92, -28.92, -9.42, -15.53, -25.28, -25.28, -29.28, -29.28, 8.22, 18.99, 104.99, 100.99, 100.99, 120.59, 101.90, 95.02, 95.02, 86.02, 77.02, 77.02, 77.02, 77.02, 35.28, 35.28, 26.18, 20.07, 15.12, 15.12, 
        ]
    }

    const s = require('../../styles');

    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 2);
    
    const oneMonthAgo = currentDate.toISOString().split("T")[0] + "T00:00:00Z";

    

    return (
        <View style={{...s.mainScreenB, paddingBottom: 150, justifyContent: "flex-start", padding: 30 }}>
            <View id="title">
                <Text style={{ fontSize: 30, fontWeight: "bold", fontFamily: "Verdana" }}>Charts</Text>
                <Text style={{ fontSize: 26, fontWeight: 500, fontFamily: "Verdana" }}>And Diagrams</Text>
            </View>

            <Text style={{ fontSize: 16, fontFamily: "Verdana", marginTop: 30, textAlign: 'left', width: "100%", marginBottom: 10 }}>Most in Debt</Text>
            <table style={{marginBottom: 20}}>
                <tbody style={{}}>
                    {Object.keys(sampleData)
                        .sort((a, b) => {
                            return sampleData[a][sampleData[a].length - 1] - sampleData[b][sampleData[b].length - 1]
                        })
                        .map(name => {
                            return <tr>
                                <td style={{ width: "20%" }}>{name}</td>
                                <td style={{ textAlign: "center" }}>{sampleData[name][sampleData[name].length - 1].toFixed(2)} $</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <View style={{ width: "100%", height: "30%", marginTop: 20 }}>
                <Text style={{ fontSize: 16, fontFamily: "Verdana" }}>Debt for the Past Month</Text>
                <Line
                    style={{ width: "100%", height: 1200, marginTop: 20 }}
                    options={{
                        maintainAspectRatio: false,
                        interaction: {
                            mode: 'nearest', // This disables interaction with the chart
                        },
                        scales: {
                            x: {
                                type: "time",
                                time: {
                                    // Luxon format string
                                    tooltipFormat: 'MM/DD',
                                },
                                min: oneMonthAgo,
                            },
                            y: {
                                min: -120,
                                max: 140,
                                ticks: {
                                    stepSize: 5,  // Number of units between y-axis ticks
                                },
                                
                            }
                        }
                    }}
                    data={{
                        datasets: Object.keys(sampleData).map((name) => {
                            return {
                                label: name,
                                data: sampleData[name].map((debt, day) => {
                                    const currentDate = new Date();
                                    currentDate.setDate(currentDate.getDate() + day - sampleData[name].length);

                                    return { 
                                        x: currentDate.toISOString().slice(0, 19),
                                        y: debt
                                    }
                                }),
                                borderColor: "#" + (Math.floor(Math.random() * 8) + 6).toString(16) + (Math.floor(Math.random() * 8) + 6).toString(16) + (Math.floor(Math.random() * 8) + 6).toString(16) + (Math.floor(Math.random() * 8) + 6).toString(16) + (Math.floor(Math.random() * 8) + 6).toString(16) + (Math.floor(Math.random() * 8) + 6).toString(16),
                                borderWidth: 2,
                                pointRadius: 1
                            }
                        }),
                    }}
                />
            </View>
        {/* 
            <div className="flex flex-col items-center">
            <p className="mb-[10px]">Spending in the last month</p>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                    Category
                    </th>
                    <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                    Spending
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Groceries</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">430.53 $</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Transportation</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">122.74 $</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Restaurant</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">92.13 $</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Clothing</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">57.85 $</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Medical</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">10.26 $</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Other</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">70.43 $</td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className="chart-container flex flex-col items-center" style={donutStyle}>
            <p>Doughnut Chart</p>
            <Doughnut 
                options={{ maintainAspectRatio: false }}
                data={{
                labels: ["Groceries", "Transportation", "Restaurant", "Clothing", "Medical", "Other"],
                datasets: [
                    {
                    label: "Doughnut Chart",
                    data: [430.53, 122.74, 92.13, 57.85, 10.26, 70.43],
                    backgroundColor: [
                        "#FFC75F",
                        "rgb(54, 162, 235)",
                        "#FF8066",
                        "#845EC2",
                        "#FF6F91",
                        "#B0A8B9"
                    ]
                    },
                ],
                }}
            />
            </div>
            <div className='w-2/5'>
            <p><b>Your Budget This Month: </b></p>
            <p>757.13$/1000$</p>
            <div className="h-4 w-full bg-gray-200 rounded-full">
                <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `75%` }}
                ></div>
            </div>
            <p className="mt-[10px] text-[1.2rem]">Congratulations!!</p>
            </div>
        </div> */}
      </View>
  );
};

export default AnalyticsPage;