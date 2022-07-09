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
  {path: '/chart-libs', element: DashBoard, name: 'DashBoard'},
  {path: '/chart-libs/apexCharts', element: ApexCharts, name: 'Apex'},
  // {path: 'bizCharts', element: BizCharts, name: 'BizCharts'},
  {path: '/chart-libs/chartJS', element: ChartJS, name: 'ChartJS'},
  {path: '/chart-libs/googleCharts', element: GoogleCharts, name: 'Google'},
  // {path: 'nivoCharts', element: NivoCharts, name: 'Nivo'},
  {path: '/chart-libs/recharts', element: Recharts, name: 'Recharts'},
  // {path: 'victoryCharts', element: VictoryCharts, name: 'Victory'},
  // {path: 'visxCharts', element: VisxCharts, name: 'Visx'},
  {path: '/chart-libs/about', element: About, name: 'About'},
]