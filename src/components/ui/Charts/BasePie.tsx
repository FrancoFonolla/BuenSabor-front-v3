import { PieChart } from '@mui/x-charts/PieChart';

export default function BasePie() {
  return (
    <PieChart
        colors={['#39107B', '#3282F6', '#9FFCFD']} 
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
