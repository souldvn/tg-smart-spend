import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

// Описание структуры данных
type ExpenseData = {
  name: string;
  value: number;
  color: string;
};

// Начальные данные — пустой массив
const initialData: ExpenseData[] = [];
const placeholderColor = "#D3D3D3"; // Серый цвет-заглушка

const Piejs: React.FC = () => {
  const [data, setData] = useState<ExpenseData[]>(initialData);

  return (
    <PieChart width={250} height={250}>
      {data.length > 0 ? (
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      ) : (
        // Серый круг-заглушка, если трат нет
        <Pie
          data={[{ name: "Пусто", value: 1, color: placeholderColor }]}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          dataKey="value"
        >
          <Cell fill={placeholderColor} />
        </Pie>
      )}
    </PieChart>
  );
};

export default Piejs;
