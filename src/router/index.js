import About from "../pages/About";
import ApexCharts from "../pages/ApexCharts";
import BizCharts from "../pages/BizCharts";
import ChartJS from "../pages/ChartJS";
import DashBoard from "../pages/DashBoard";
import GoogleCharts from "../pages/GoogleCharts";
import NivoCharts from "../pages/NivoCharts";
import Recharts from "../pages/Recharts";
import VictoryCharts from "../pages/VictoryCharts";
import VisxCharts from "../pages/VisxCharts";


export const privateRoutes = [

]

export const publicRoutes = [
  // {path: 'login', element: Login},
  {path: '/', element: DashBoard, name: 'DashBoard'},
  {path: 'apexCharts', element: ApexCharts, name: 'Apex'},
  // {path: 'bizCharts', element: BizCharts, name: 'BizCharts'},
  {path: 'chartJS', element: ChartJS, name: 'ChartJS'},
  {path: 'googleCharts', element: GoogleCharts, name: 'Google'},
  // {path: 'nivoCharts', element: NivoCharts, name: 'Nivo'},
  {path: 'recharts', element: Recharts, name: 'Recharts'},
  // {path: 'victoryCharts', element: VictoryCharts, name: 'Victory'},
  // {path: 'visxCharts', element: VisxCharts, name: 'Visx'},
  {path: 'about', element: About, name: 'About'},
]