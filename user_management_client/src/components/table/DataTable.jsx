const DataTable = ({columns, rows}) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {
                            columns.map((col, index) => (
                                <th key={index}>{col}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, index) => (
                            <tr key={index}>
                                {
                                    row.map((col, index) => (
                                        <td key={index}>{col}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default DataTable;