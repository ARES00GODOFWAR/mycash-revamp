


const DashboardTable = () => {
    return (
        <>
            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg p-10">
                    <div className="pb-6">Recent Transactions</div>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th className="px-4 py-3">Transaction ID</th>
                                    <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Amount</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white">
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    T1234-5678-9012-3456
                                </td>
                                <td className="px-4 py-3 text-sm border">6/10/2020</td>
                                <td className="px-4 py-3 text-xs border">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Successful </span>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    T1234-5678-9012-3456
                                </td>
                                <td className="px-4 py-3 text-sm border">6/10/2020</td>
                                <td className="px-4 py-3 text-xs border">
                                    <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> Pending </span>
                                </td>
                                <td className="px-4 py-3 text-md font-semibold border">27</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    T1234-5678-9012-3456
                                </td>
                                <td className="px-4 py-3 text-sm border">6/10/2020</td>
                                <td className="px-4 py-3 text-xs border">
                                    <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> Failed </span>
                                </td>
                                <td className="px-4 py-3 text-md font-semibold border">17</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    T1234-5678-9012-3456
                                </td>
                                <td className="px-4 py-3 text-sm border">6/10/2020</td>
                                <td className="px-4 py-3 border text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Successful </span>
                                </td>
                                <td className="px-4 py-3 border text-md font-semibold">23</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    T1234-5678-9012-3456
                                </td>
                                <td className="px-4 py-3 text-sm border">6/10/2020</td>
                                <td className="px-4 py-3 border text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm"> Pending </span>
                                </td>
                                <td className="px-4 py-3 border text-md font-semibold">20</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    T1234-5678-9012-3456
                                </td>
                                <td className="px-4 py-3 text-sm border">6/10/2020</td>
                                <td className="px-4 py-3 border text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Successful </span>
                                </td>
                                <td className="px-4 py-3 border text-md font-semibold">29</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    T1234-5678-9012-3456
                                </td>
                                <td className="px-4 py-3 text-sm border">6/10/2020</td>
                                <td className="px-4 py-3 border text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Successful </span>
                                </td>
                                <td className="px-4 py-3 border text-md font-semibold">38</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    T1234-5678-9012-3456
                                </td>
                                <td className="px-4 py-3 text-sm border">6/10/2020</td>
                                <td className="px-4 py-3 border text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Successful </span>
                                </td>
                                <td className="px-4 py-3 border text-md font-semibold">19</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    T1234-5678-9012-3456
                                </td>
                                <td className="px-4 py-3 text-sm border">6/10/2020</td>
                                <td className="px-4 py-3 border text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Successful </span>
                                </td>
                                <td className="px-4 py-3 border text-md font-semibold">21</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section></>
    );
};

export default DashboardTable;