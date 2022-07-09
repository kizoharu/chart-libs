import ApexCharts from './ApexCharts';
import BizCharts from './BizCharts';
import ChartJS from './ChartJS';
import GoogleCharts from './GoogleCharts';
import Recharts from './Recharts';

const DashBoard = ({data}) => {
  // const width = 600;
  // const height = 350;
  

  return (
    <div className='dashBoard'>
      <h2>⇩ Apex Charts ⇩</h2>
      <ApexCharts data={data}/>
      
      <hr align="center" size="4" color="#81d4fa" />
      <h2>⇩ Chart JS ⇩</h2>
      <ChartJS data={data}/>

      <hr align="center" size="4" color="#81d4fa" />
      <h2>⇩ Google Charts ⇩</h2>
      <GoogleCharts data={data}/>

      <hr align="center" size="4" color="#81d4fa" />
      <h2>⇩ Recharts ⇩</h2>
      <Recharts data={data}/>
    </div>
  );
};

export default DashBoard;