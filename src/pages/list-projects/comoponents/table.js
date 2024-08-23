const Table = ({ headers = [], data = [] }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
      <thead className="">
        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-norma">
          {headers.map(({ label }) => (
            <th className="py-3 px-6 text-left">{label}</th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-700 text-sm font-light">
        {data.map((datum) => (
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            {headers.map(({ getVal, key }) => (
              <td className="py-3 px-6 text-left">
                {getVal ? getVal(datum) : datum[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
